import { describe, expect, test } from "bun:test";
import { runChatIdHelper } from "./scripts/telegram-chat-id.ts";
import {
  chatIdsFromUpdates,
  formatEnquiryMessage,
  formatMadridTime,
  notifyEnquiry,
  resetTelegramAlertsForTests,
  submittedLanguage,
} from "./telegram.ts";

const env = { TELEGRAM_BOT_TOKEN: "secret-token", TELEGRAM_CHAT_ID: "4242" };
const when = new Date("2026-01-15T12:00:00.000Z");

function sample() {
  return {
    name: "Ada <b>",
    email: "ada@example.com",
    phone: "+34 600 000 000",
    message: "Hello & welcome",
    language: "ca",
    extra: { child_age: 8, organisation: "Escola", kind: "waitlist", consent: true },
  };
}

describe("formatEnquiryMessage", () => {
  test("includes the enquiry, optional fields, language, and Madrid time", () => {
    const text = formatEnquiryMessage(sample(), when);
    expect(text).toContain("<b>New MindBloom enquiry</b>");
    expect(text).toContain("<b>Name:</b> Ada &lt;b&gt;");
    expect(text).toContain("<b>Email:</b> ada@example.com");
    expect(text).toContain("<b>Phone:</b> +34 600 000 000");
    expect(text).toContain("<b>Child age:</b> 8");
    expect(text).toContain("<b>Organisation:</b> Escola");
    expect(text).toContain("<b>Kind:</b> waitlist");
    expect(text).toContain("Hello &amp; welcome");
    expect(text).toContain("<b>Language:</b> ca");
    expect(text).toContain("15/01/2026 13:00 (Europe/Madrid)");
    expect(text).not.toContain("consent");
  });

  test("omits phone, child age, and message when they were not sent", () => {
    const text = formatEnquiryMessage({ name: "Ada", email: "ada@example.com", extra: { kind: "contact" } }, when);
    expect(text).not.toContain("Phone");
    expect(text).not.toContain("Child age");
    expect(text).not.toContain("Message");
    expect(text).toContain("<b>Language:</b> —");
    expect(text).toContain("<b>Kind:</b> contact");
  });

  test("formats summer time in Europe/Madrid", () => {
    expect(formatMadridTime(new Date("2026-07-15T12:00:00.000Z"))).toBe("15/07/2026 14:00");
  });

  test("keeps the text inside Telegram's limit", () => {
    const text = formatEnquiryMessage({ name: "Ada", email: "ada@example.com", message: "&".repeat(5000) }, when);
    expect(text.length).toBeLessThanOrEqual(4096);
    expect(text.startsWith("<b>New MindBloom enquiry</b>")).toBe(true);
  });
});

describe("submittedLanguage", () => {
  test("prefers the form value, then a lang query on the referrer", () => {
    expect(submittedLanguage({ language: "en" }, "https://example.test/?lang=ca")).toBe("en");
    expect(submittedLanguage({}, "https://example.test/?lang=ca")).toBe("ca");
    expect(submittedLanguage({}, "https://example.test/")).toBeNull();
    expect(submittedLanguage(null, "not a url")).toBeNull();
  });
});

describe("notifyEnquiry", () => {
  test("posts sendMessage and does not throw when Telegram rejects it", async () => {
    const calls: { url: string; init: RequestInit }[] = [];
    const errors: unknown[][] = [];
    const original = console.error;
    console.error = (...args: unknown[]) => {
      errors.push(args);
    };
    try {
      await notifyEnquiry(sample(), {
        env,
        now: when,
        fetch: (async (url: string, init?: RequestInit) => {
          calls.push({ url, init: init ?? {} });
          return new Response("unauthorized " + env.TELEGRAM_BOT_TOKEN, { status: 401 });
        }) as typeof fetch,
      });
    } finally {
      console.error = original;
    }
    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe("https://api.telegram.org/botsecret-token/sendMessage");
    expect(calls[0].init.method).toBe("POST");
    expect(calls[0].init.signal).toBeInstanceOf(AbortSignal);
    const body = JSON.parse(String(calls[0].init.body));
    expect(body.chat_id).toBe("4242");
    expect(body.parse_mode).toBe("HTML");
    expect(body.disable_web_page_preview).toBe(true);
    expect(body.text).toContain("New MindBloom enquiry");
    expect(errors.some((line) => String(line[0]).includes("HTTP 401"))).toBe(true);
    expect(errors.some((line) => String(line.join(" ")).includes("secret-token"))).toBe(false);
  });

  test("swallows a network failure", async () => {
    const original = console.error;
    const errors: unknown[][] = [];
    console.error = (...args: unknown[]) => {
      errors.push(args);
    };
    try {
      await notifyEnquiry(sample(), {
        env,
        fetch: (async () => {
          throw new Error("network down https://api.telegram.org/botsecret-token/sendMessage");
        }) as typeof fetch,
      });
    } finally {
      console.error = original;
    }
    expect(errors.some((line) => String(line.join(" ")).includes("<redacted>"))).toBe(true);
    expect(errors.some((line) => String(line.join(" ")).includes("secret-token"))).toBe(false);
  });

  test("aborts the request at the timeout", async () => {
    let aborted = false;
    const original = console.error;
    console.error = () => {};
    try {
      await notifyEnquiry(sample(), {
        env,
        timeoutMs: 30,
        fetch: ((_url: string, init?: RequestInit) =>
          new Promise<Response>((_resolve, reject) => {
            const signal = init?.signal;
            if (!signal) throw new Error("missing timeout signal");
            signal.addEventListener("abort", () => {
              aborted = true;
              reject(signal.reason ?? new Error("aborted"));
            });
          })) as typeof fetch,
      });
    } finally {
      console.error = original;
    }
    expect(aborted).toBe(true);
  });

  test("skips the send and warns once when the bot is not configured", async () => {
    resetTelegramAlertsForTests();
    let fetches = 0;
    const warnings: unknown[][] = [];
    const original = console.warn;
    console.warn = (...args: unknown[]) => {
      warnings.push(args);
    };
    try {
      const fetchImpl = (async () => {
        fetches += 1;
        return new Response("ok");
      }) as typeof fetch;
      await notifyEnquiry(sample(), { env: {}, fetch: fetchImpl });
      await notifyEnquiry(sample(), { env: { TELEGRAM_BOT_TOKEN: "  ", TELEGRAM_CHAT_ID: "1" }, fetch: fetchImpl });
      await notifyEnquiry(sample(), { env: { TELEGRAM_BOT_TOKEN: "tok" }, fetch: fetchImpl });
    } finally {
      console.warn = original;
      resetTelegramAlertsForTests();
    }
    expect(fetches).toBe(0);
    expect(warnings).toHaveLength(1);
    expect(String(warnings[0][0])).toContain("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
  });
});

describe("chat id helper", () => {
  test("reads message.chat.id from getUpdates", async () => {
    const urls: string[] = [];
    const lines: string[] = [];
    const code = await runChatIdHelper({
      token: "secret-token",
      log: (line) => lines.push(line),
      error: (line) => lines.push("ERR " + line),
      fetch: (async (url: string) => {
        urls.push(url);
        return Response.json({
          ok: true,
          result: [
            { update_id: 1, message: { chat: { id: 4242, first_name: "Ada", last_name: "Lovelace", type: "private" } } },
            { update_id: 2, message: { chat: { id: 4242, first_name: "Ada" } } },
            { update_id: 3, message: { chat: { id: -100, title: "MindBloom" } } },
          ],
        });
      }) as typeof fetch,
    });
    expect(code).toBe(0);
    expect(urls).toEqual(["https://api.telegram.org/botsecret-token/getUpdates"]);
    expect(lines).toEqual(["4242\tAda Lovelace", "-100\tMindBloom"]);
    expect(chatIdsFromUpdates({ result: [] })).toEqual([]);
  });

  test("does not call Telegram when the token is missing", async () => {
    let fetches = 0;
    const errors: string[] = [];
    const code = await runChatIdHelper({
      token: "  ",
      error: (line) => errors.push(line),
      fetch: (async () => {
        fetches += 1;
        return new Response("no");
      }) as typeof fetch,
    });
    expect(code).toBe(1);
    expect(fetches).toBe(0);
    expect(errors[0]).toContain("TELEGRAM_BOT_TOKEN");
  });

  test("reports an empty getUpdates list", async () => {
    const errors: string[] = [];
    const code = await runChatIdHelper({
      token: "secret-token",
      error: (line) => errors.push(line),
      fetch: (async () => Response.json({ ok: true, result: [] })) as typeof fetch,
    });
    expect(code).toBe(1);
    expect(errors[0]).toContain("No messages yet");
  });
});
