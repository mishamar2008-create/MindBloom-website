// MindBloom website server: serves the site and stores parent accounts in Postgres.
import { sql } from "bun";

const PORT = Number(Bun.env.PORT || 8080);
const PUBLIC_DIR = new URL("./public/", import.meta.url).pathname;
const PUBLIC_URL = (Bun.env.PUBLIC_URL || "").replace(/\/$/, "");
const SESSION_DAYS = 30;
const COOKIE = "mb_session";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------- database ----------
await sql`CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  google_sub TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
)`;
await sql`CREATE TABLE IF NOT EXISTS profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  parent_name TEXT, language TEXT, child_name TEXT, child_age INT,
  interest TEXT, consent BOOLEAN, completed BOOLEAN,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
)`;
await sql`CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL
)`;
await sql`CREATE TABLE IF NOT EXISTS reset_tokens (
  token TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL
)`;
await sql`CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL, email TEXT NOT NULL, organisation TEXT,
  message TEXT,
  kind TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
)`;
await sql`ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS message TEXT`;
await sql`ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS kind TEXT`;

// ---------- helpers ----------
const json = (data: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });
const err = (code: string, status = 400) => json({ error: code }, status);
const token = () => {
  const b = new Uint8Array(32);
  crypto.getRandomValues(b);
  return Buffer.from(b).toString("base64url");
};
const baseUrl = (req: Request) => PUBLIC_URL || new URL(req.url).origin.replace(/^http:/, "https:");
const cookieGet = (req: Request, name: string) => {
  const c = req.headers.get("cookie") || "";
  const m = c.match(new RegExp("(?:^|;\\s*)" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[1]) : null;
};
const sessionCookie = (value: string, maxAge: number) =>
  `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;

async function createSession(userId: string) {
  const t = token();
  await sql`INSERT INTO sessions (token, user_id, expires_at)
            VALUES (${t}, ${userId}, now() + ${SESSION_DAYS + " days"}::interval)`;
  return sessionCookie(t, SESSION_DAYS * 86400);
}
async function currentUser(req: Request): Promise<{ id: string; email: string } | null> {
  const t = cookieGet(req, COOKIE);
  if (!t) return null;
  const rows = await sql`SELECT u.id, u.email FROM sessions s JOIN users u ON u.id = s.user_id
                         WHERE s.token = ${t} AND s.expires_at > now()`;
  return rows[0] ? { id: String(rows[0].id), email: rows[0].email } : null;
}
async function profileOf(userId: string) {
  const rows = await sql`SELECT parent_name, language, child_name, child_age, interest, consent, completed
                         FROM profiles WHERE user_id = ${userId}`;
  return rows[0] ?? null;
}
async function me(user: { id: string; email: string }) {
  return { user, profile: await profileOf(user.id) };
}

// Simple per-IP rate limit for login-type endpoints (20 tries per 10 minutes).
const hits = new Map<string, number[]>();
function limited(req: Request, server: any) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || server.requestIP(req)?.address || "?";
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 20;
}
async function body(req: Request): Promise<any> {
  try { return await req.json(); } catch { return {}; }
}

async function sendResetEmail(to: string, link: string) {
  const key = Bun.env.RESEND_API_KEY;
  const from = Bun.env.EMAIL_FROM;
  if (!key || !from) return false;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from, to,
      subject: "Reset your MindBloom password",
      html: `<p>Hi,</p><p>Click the link below to set a new MindBloom password. It works for 1 hour.</p>
             <p><a href="${link}">${link}</a></p><p>If you didn't ask for this, you can ignore this email.</p>`,
    }),
  });
  return r.ok;
}
// Skill 1: Telegram alert for each Contact / waitlist form. Off until both variables are set in Railway.
async function telegramAlert(text: string) {
  const botToken = Bun.env.TELEGRAM_BOT_TOKEN;
  const chatId = Bun.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return;
  try {
    const r = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    if (!r.ok) console.error("telegram alert failed", r.status, await r.text());
  } catch (e) {
    console.error("telegram alert error", e);
  }
}
const googleEnabled = () => !!(Bun.env.GOOGLE_CLIENT_ID && Bun.env.GOOGLE_CLIENT_SECRET);

// ---------- API ----------
async function api(req: Request, url: URL, server: any): Promise<Response> {
  const p = url.pathname.replace(/^\/api/, "");
  const m = req.method;

  if (p === "/health") { await sql`SELECT 1`; return json({ ok: true }); }

  if (p === "/me" && m === "GET") {
    const u = await currentUser(req);
    return json(u ? await me(u) : { user: null });
  }

  if (p === "/signup" && m === "POST") {
    if (limited(req, server)) return err("generic", 429);
    const { email, password } = await body(req);
    const e = String(email || "").trim().toLowerCase();
    if (!EMAIL_RE.test(e)) return err("email");
    if (typeof password !== "string" || password.length < 8) return err("weak");
    const exists = await sql`SELECT 1 FROM users WHERE email = ${e}`;
    if (exists.length) return err("exists", 409);
    const hash = await Bun.password.hash(password);
    const [u] = await sql`INSERT INTO users (email, password_hash) VALUES (${e}, ${hash}) RETURNING id, email`;
    const user = { id: String(u.id), email: u.email };
    return json(await me(user), 200, { "Set-Cookie": await createSession(user.id) });
  }

  if (p === "/signin" && m === "POST") {
    if (limited(req, server)) return err("generic", 429);
    const { email, password } = await body(req);
    const e = String(email || "").trim().toLowerCase();
    const rows = await sql`SELECT id, email, password_hash FROM users WHERE email = ${e}`;
    const row = rows[0];
    if (!row || !row.password_hash || typeof password !== "string" ||
        !(await Bun.password.verify(password, row.password_hash))) return err("invalid", 401);
    const user = { id: String(row.id), email: row.email };
    return json(await me(user), 200, { "Set-Cookie": await createSession(user.id) });
  }

  if (p === "/signout" && m === "POST") {
    const t = cookieGet(req, COOKIE);
    if (t) await sql`DELETE FROM sessions WHERE token = ${t}`;
    return json({ ok: true }, 200, { "Set-Cookie": sessionCookie("", 0) });
  }

  if (p === "/reset" && m === "POST") {
    if (limited(req, server)) return err("generic", 429);
    if (!Bun.env.RESEND_API_KEY || !Bun.env.EMAIL_FROM) return err("resetOff", 503);
    const { email } = await body(req);
    const e = String(email || "").trim().toLowerCase();
    const rows = await sql`SELECT id FROM users WHERE email = ${e}`;
    if (rows[0]) {
      const t = token();
      await sql`INSERT INTO reset_tokens (token, user_id, expires_at) VALUES (${t}, ${rows[0].id}, now() + interval '1 hour')`;
      await sendResetEmail(e, `${baseUrl(req)}/api/auth/reset?token=${t}`);
    }
    return json({ ok: true }); // same answer whether or not the email exists
  }

  if (p === "/auth/reset" && m === "GET") {
    const t = url.searchParams.get("token") || "";
    const rows = await sql`DELETE FROM reset_tokens WHERE token = ${t} AND expires_at > now() RETURNING user_id`;
    if (!rows[0]) return Response.redirect(`${baseUrl(req)}/signin`, 302);
    const cookie = await createSession(String(rows[0].user_id));
    return new Response(null, { status: 302, headers: { Location: "/account", "Set-Cookie": cookie } });
  }

  if (p === "/auth/google/enabled") return json({ enabled: googleEnabled() });

  if (p === "/auth/google" && m === "GET") {
    if (!googleEnabled()) return Response.redirect(`${baseUrl(req)}/signin`, 302);
    const state = token();
    const q = new URLSearchParams({
      client_id: Bun.env.GOOGLE_CLIENT_ID!,
      redirect_uri: `${baseUrl(req)}/api/auth/google/callback`,
      response_type: "code",
      scope: "openid email",
      state,
      prompt: "select_account",
    });
    return new Response(null, {
      status: 302,
      headers: {
        Location: `https://accounts.google.com/o/oauth2/v2/auth?${q}`,
        "Set-Cookie": `mb_oauth=${state}; Path=/api/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
      },
    });
  }

  if (p === "/auth/google/callback" && m === "GET") {
    const fail = Response.redirect(`${baseUrl(req)}/signin`, 302);
    if (!googleEnabled()) return fail;
    const state = url.searchParams.get("state");
    if (!state || state !== cookieGet(req, "mb_oauth")) return fail;
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code: url.searchParams.get("code") || "",
        client_id: Bun.env.GOOGLE_CLIENT_ID!,
        client_secret: Bun.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: `${baseUrl(req)}/api/auth/google/callback`,
        grant_type: "authorization_code",
      }),
    });
    if (!tokenRes.ok) return fail;
    const { access_token } = await tokenRes.json();
    const infoRes = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (!infoRes.ok) return fail;
    const info = await infoRes.json();
    if (!info.email || !info.email_verified) return fail;
    const e = String(info.email).toLowerCase();
    const [u] = await sql`INSERT INTO users (email, google_sub) VALUES (${e}, ${info.sub})
                          ON CONFLICT (email) DO UPDATE SET google_sub = EXCLUDED.google_sub
                          RETURNING id`;
    const cookie = await createSession(String(u.id));
    return new Response(null, { status: 302, headers: { Location: "/signin", "Set-Cookie": cookie } });
  }

  if (p === "/contact" && m === "POST") {
    if (limited(req, server)) return err("generic", 429);
    const { name, email, org, message, consent, kind } = await body(req);
    const e = String(email || "").trim().toLowerCase();
    if (!String(name || "").trim() || !EMAIL_RE.test(e) || consent !== true) return err("required");
    const note = String(message || "").trim().slice(0, 2000) || null;
    const purpose = kind === "waitlist" ? "waitlist" : "contact";
    await sql`INSERT INTO contact_messages (name, email, organisation, message, kind)
              VALUES (${String(name).trim().slice(0, 200)}, ${e}, ${String(org || "").trim().slice(0, 200) || null}, ${note}, ${purpose})`;
    const orgName = String(org || "").trim().slice(0, 200);
    telegramAlert(
      [
        purpose === "waitlist" ? "🌱 New waitlist sign-up on MindBloom" : "📩 New enquiry on MindBloom",
        `Name: ${String(name).trim().slice(0, 200)}`,
        `Email: ${e}`,
        orgName ? `Organisation: ${orgName}` : "",
        note ? `Message: ${note.slice(0, 1000)}` : "",
      ].filter(Boolean).join("\n"),
    ); // not awaited: the parent gets their "sent" reply straight away
    return json({ ok: true });
  }

  // Everything below needs a signed-in parent.
  const user = await currentUser(req);
  if (!user) return err("generic", 401);

  if (p === "/profile" && m === "PUT") {
    const { profile: pr = {} } = await body(req);
    const age = pr.child_age === null || pr.child_age === "" || pr.child_age === undefined ? null : Number(pr.child_age);
    const s = (v: unknown) => (v === null || v === undefined ? null : String(v).slice(0, 200));
    await sql`INSERT INTO profiles (user_id, parent_name, language, child_name, child_age, interest, consent, completed, updated_at)
              VALUES (${user.id}, ${s(pr.parent_name)}, ${s(pr.language)}, ${s(pr.child_name)},
                      ${Number.isFinite(age) ? age : null}, ${s(pr.interest)}, ${!!pr.consent}, ${!!pr.completed}, now())
              ON CONFLICT (user_id) DO UPDATE SET
                parent_name = EXCLUDED.parent_name, language = EXCLUDED.language, child_name = EXCLUDED.child_name,
                child_age = EXCLUDED.child_age, interest = EXCLUDED.interest, consent = EXCLUDED.consent,
                completed = EXCLUDED.completed, updated_at = now()`;
    return json({ ok: true });
  }

  if (p === "/password" && m === "POST") {
    const { password } = await body(req);
    if (typeof password !== "string" || password.length < 8) return err("weak");
    const hash = await Bun.password.hash(password);
    await sql`UPDATE users SET password_hash = ${hash} WHERE id = ${user.id}`;
    return json({ ok: true });
  }

  if (p === "/account" && m === "DELETE") {
    await sql`DELETE FROM users WHERE id = ${user.id}`; // cascades to profile + sessions
    return json({ ok: true }, 200, { "Set-Cookie": sessionCookie("", 0) });
  }

  return err("generic", 404);
}

// ---------- static site ----------
const SITE = "https://website-production-7892f518.up.railway.app";
const PAGE_META: Record<string, { title: string; description: string; locale: string }> = {
  es: {
    title: "MindBloom — Estudio, concentración y amigos, en un solo lugar",
    description:
      "MindBloom ayuda a niños y jóvenes de 6 a 18 años en Barcelona que aprenden de otra manera: estudio, concentración y amigos, en una app y un centro.",
    locale: "es_ES",
  },
  ca: {
    title: "MindBloom — Estudi, concentració i amics, en un sol lloc",
    description:
      "MindBloom ajuda infants i joves de 6 a 18 anys a Barcelona que aprenen diferent: estudi, concentració i amics, en una app i un centre.",
    locale: "ca_ES",
  },
  en: {
    title: "MindBloom — Study, focus and friends, in one place",
    description:
      "MindBloom helps children aged 6 to 18 in Barcelona who learn differently, with study, focus and friends in one app and one learning centre.",
    locale: "en_GB",
  },
};
let indexTemplate: string | null = null;
function pageHtml(url: URL, html: string) {
  const asked = url.searchParams.get("lang");
  const lang = asked === "en" || asked === "ca" ? asked : "es";
  const meta = PAGE_META[lang];
  const origin = (PUBLIC_URL || SITE).replace(/\/$/, "");
  const path = url.pathname === "/index.html" ? "/" : url.pathname;
  const canonical =
    lang === "es"
      ? origin + (path === "/" ? "/" : path)
      : origin + (path === "/" ? "/" : path) + "?lang=" + lang;
  return html
    .replace('<html lang="es">', `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(name="description" content=")[^"]*/, `$1${meta.description}`)
    .replace(/(property="og:title" content=")[^"]*/, `$1${meta.title}`)
    .replace(/(property="og:description" content=")[^"]*/, `$1${meta.description}`)
    .replace(/(property="og:locale" content=")[^"]*/, `$1${meta.locale}`)
    .replace(/(property="og:url" content=")[^"]*/, `$1${canonical}`)
    .replace(/(name="twitter:title" content=")[^"]*/, `$1${meta.title}`)
    .replace(/(name="twitter:description" content=")[^"]*/, `$1${meta.description}`)
    .replace(/(rel="canonical" href=")[^"]*/, `$1${canonical}`);
}
async function staticFile(url: URL): Promise<Response> {
  let path = decodeURIComponent(url.pathname);
  if (path.includes("..")) return new Response("Not found", { status: 404 });
  if (path !== "/" && path !== "/index.html") {
    const f = Bun.file(PUBLIC_DIR + path.replace(/^\//, ""));
    if (await f.exists()) {
      const immutable = path.startsWith("/assets/");
      return new Response(f, {
        headers: { "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "public, max-age=3600" },
      });
    }
  }
  // App routes (/join, /signin, /welcome, /account, /privacy …) all load index.html.
  if (!indexTemplate) indexTemplate = await Bun.file(PUBLIC_DIR + "index.html").text();
  return new Response(pageHtml(url, indexTemplate), {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
  });
}

const server = Bun.serve({
  port: PORT,
  async fetch(req, server) {
    const url = new URL(req.url);
    try {
      if (url.pathname.startsWith("/api/")) return await api(req, url, server);
      return await staticFile(url);
    } catch (e) {
      console.error(e);
      return url.pathname.startsWith("/api/") ? err("generic", 500) : new Response("Server error", { status: 500 });
    }
  },
});
// Clear out expired sessions and reset links once an hour.
setInterval(() => {
  sql`DELETE FROM sessions WHERE expires_at < now()`.catch(() => {});
  sql`DELETE FROM reset_tokens WHERE expires_at < now()`.catch(() => {});
}, 3600_000);
console.log(`MindBloom running on port ${server.port}`);
