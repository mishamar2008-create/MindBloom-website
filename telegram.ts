// Telegram alert for a saved contact / waitlist form.
// Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID skips the send. The form never waits on Telegram.

const SEND_TIMEOUT_MS = 5_000;
const TEXT_LIMIT = 4096;

export type TelegramEnv = {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
};

export type Enquiry = {
  name: string;
  email: string;
  phone?: unknown;
  message?: unknown;
  language?: unknown;
  extra?: Record<string, unknown>;
};

export type NotifyOptions = {
  env?: TelegramEnv;
  fetch?: typeof fetch;
  now?: Date;
  timeoutMs?: number;
};

export type TelegramChat = { chatId: string; label: string };

const SKIP_KEYS = new Set([
  "name",
  "email",
  "message",
  "consent",
  "language",
  "lang",
  "phone",
  "telephone",
  "tel",
  "password",
  "token",
]);

const FIELD_ORDER: [string, string][] = [
  ["child_age", "Child age"],
  ["childAge", "Child age"],
  ["age", "Child age"],
  ["child_name", "Child name"],
  ["childName", "Child name"],
  ["org", "Organisation"],
  ["organisation", "Organisation"],
  ["organization", "Organisation"],
  ["interest", "Interest"],
  ["parent_name", "Parent name"],
  ["parentName", "Parent name"],
  ["kind", "Kind"],
];

let missingConfigWarned = false;

export function resetTelegramAlertsForTests() {
  missingConfigWarned = false;
}

export function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function textValue(value: unknown, max = 2000): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "boolean") return value ? "yes" : "no";
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : null;
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.length > max ? `${trimmed.slice(0, max)}…` : trimmed;
}

export function formatMadridTime(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  return `${get("day")}/${get("month")}/${get("year")} ${get("hour")}:${get("minute")}`;
}

function labelFor(key: string): string {
  const known = FIELD_ORDER.find(([name]) => name === key);
  if (known) return known[1];
  const words = key.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll("_", " ").trim();
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : key;
}

function extraLines(extra: Record<string, unknown>): string[] {
  const lines: string[] = [];
  const usedLabels = new Set<string>();
  const seenKeys = new Set<string>();
  const add = (key: string) => {
    if (seenKeys.has(key) || SKIP_KEYS.has(key)) return;
    seenKeys.add(key);
    const value = textValue(extra[key], 500);
    if (!value) return;
    const label = labelFor(key);
    if (usedLabels.has(label)) return;
    usedLabels.add(label);
    lines.push(`<b>${escapeHtml(label)}:</b> ${escapeHtml(value)}`);
  };
  for (const [key] of FIELD_ORDER) add(key);
  for (const key of Object.keys(extra)) add(key);
  return lines;
}

export function formatEnquiryMessage(enquiry: Enquiry, now = new Date()): string {
  const extra = enquiry.extra ?? {};
  const lines = ["<b>New MindBloom enquiry</b>", ""];
  const row = (label: string, value: string) => {
    lines.push(`<b>${escapeHtml(label)}:</b> ${escapeHtml(value)}`);
  };

  row("Name", textValue(enquiry.name, 200) ?? "—");
  row("Email", textValue(enquiry.email, 200) ?? "—");

  const phone = textValue(enquiry.phone ?? extra.phone ?? extra.telephone ?? extra.tel, 80);
  if (phone) row("Phone", phone);

  lines.push(...extraLines(extra));

  const message = textValue(enquiry.message, 3000);
  if (message) lines.push("", "<b>Message:</b>", escapeHtml(message));

  const language = textValue(enquiry.language ?? extra.language ?? extra.lang, 40);
  lines.push("");
  row("Language", language ?? "—");
  row("Time", `${formatMadridTime(now)} (Europe/Madrid)`);
  return limitTelegramText(lines.join("\n"));
}

export function limitTelegramText(text: string, max = TEXT_LIMIT): string {
  if (text.length <= max) return text;
  let cut = text.slice(0, max - 1);
  const amp = cut.lastIndexOf("&");
  if (amp !== -1 && amp > cut.length - 12 && !cut.slice(amp).includes(";")) cut = cut.slice(0, amp);
  return `${cut}…`;
}

export function submittedLanguage(payload: { language?: unknown; lang?: unknown } | null, referer: string | null): string | null {
  const direct = textValue(payload?.language, 40) ?? textValue(payload?.lang, 40);
  if (direct) return direct;
  if (!referer) return null;
  try {
    const lang = new URL(referer).searchParams.get("lang");
    if (lang === "es" || lang === "ca" || lang === "en") return lang;
  } catch {
    return null;
  }
  return null;
}

function readConfig(env?: TelegramEnv): { token: string; chatId: string } | null {
  const token = (env ? env.TELEGRAM_BOT_TOKEN : Bun.env.TELEGRAM_BOT_TOKEN)?.trim() ?? "";
  const chatId = (env ? env.TELEGRAM_CHAT_ID : Bun.env.TELEGRAM_CHAT_ID)?.trim() ?? "";
  if (!token || !chatId) {
    if (!missingConfigWarned) {
      missingConfigWarned = true;
      console.warn("Telegram enquiry alerts skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    }
    return null;
  }
  return { token, chatId };
}

function redact(message: string, token: string): string {
  return token ? message.split(token).join("<redacted>") : message;
}

export function notifyEnquiry(enquiry: Enquiry, options: NotifyOptions = {}): Promise<void> {
  const run = async () => {
    const cfg = readConfig(options.env);
    if (!cfg) return;
    const text = formatEnquiryMessage(enquiry, options.now ?? new Date());
    const fetchImpl = options.fetch ?? fetch;
    const timeoutMs = options.timeoutMs ?? SEND_TIMEOUT_MS;
    let response: Response;
    try {
      response = await fetchImpl(`https://api.telegram.org/bot${cfg.token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: cfg.chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("Telegram enquiry alert failed:", redact(message, cfg.token));
      return;
    }
    if (!response.ok) {
      const detail = redact(await response.text().catch(() => ""), cfg.token).slice(0, 500);
      console.error(`Telegram enquiry alert failed: HTTP ${response.status} ${detail}`.trim());
    }
  };

  return run().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Telegram enquiry alert failed:", message);
  });
}

type ChatLike = {
  id?: string | number;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
};

export function chatIdsFromUpdates(data: unknown): TelegramChat[] {
  const result = (data as { result?: unknown } | null)?.result;
  if (!Array.isArray(result)) return [];
  const seen = new Map<string, string>();
  for (const update of result) {
    if (!update || typeof update !== "object") continue;
    const record = update as {
      message?: { chat?: ChatLike };
      edited_message?: { chat?: ChatLike };
      callback_query?: { message?: { chat?: ChatLike } };
    };
    const chat = record.message?.chat ?? record.edited_message?.chat ?? record.callback_query?.message?.chat;
    if (!chat || chat.id === undefined || chat.id === null) continue;
    const chatId = String(chat.id);
    if (seen.has(chatId)) continue;
    const label = [chat.title, chat.username, chat.first_name, chat.last_name]
      .filter((part): part is string => typeof part === "string" && part.trim().length > 0)
      .join(" ");
    seen.set(chatId, label);
  }
  return [...seen.entries()].map(([chatId, label]) => ({ chatId, label }));
}

export async function findTelegramChatIds(token: string, fetchImpl: typeof fetch = fetch): Promise<TelegramChat[]> {
  let response: Response;
  try {
    response = await fetchImpl(`https://api.telegram.org/bot${token}/getUpdates`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(redact(message, token));
  }
  if (!response.ok) throw new Error(`getUpdates failed: HTTP ${response.status}`);
  const data = (await response.json()) as { ok?: boolean; description?: string };
  if (data.ok === false) throw new Error(`getUpdates failed: ${data.description || "Telegram error"}`);
  return chatIdsFromUpdates(data);
}
