#!/usr/bin/env bun
// Print chat ids for TELEGRAM_BOT_TOKEN.
// Message the bot once, then: bun run scripts/telegram-chat-id.ts
// Or open https://api.telegram.org/bot<TOKEN>/getUpdates and copy message.chat.id.
import { findTelegramChatIds } from "../telegram.ts";

export async function runChatIdHelper(options: {
  token: string | undefined;
  fetch?: typeof fetch;
  log?: (line: string) => void;
  error?: (line: string) => void;
}): Promise<number> {
  const log = options.log ?? ((line: string) => console.log(line));
  const error = options.error ?? ((line: string) => console.error(line));
  const token = options.token?.trim();
  if (!token) {
    error("Set TELEGRAM_BOT_TOKEN. Message the bot once, then run this script again.");
    return 1;
  }
  try {
    const chats = await findTelegramChatIds(token, options.fetch);
    if (chats.length === 0) {
      error("No messages yet. Open the bot, send it a message, then run this script again.");
      return 1;
    }
    for (const chat of chats) log(chat.label ? `${chat.chatId}\t${chat.label}` : chat.chatId);
    return 0;
  } catch (caught) {
    error(caught instanceof Error ? caught.message : String(caught));
    return 1;
  }
}

if (import.meta.main) process.exit(await runChatIdHelper({ token: Bun.env.TELEGRAM_BOT_TOKEN }));
