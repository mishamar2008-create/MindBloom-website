# MindBloom website

The public MindBloom site plus a small server for parent accounts.

- `public/` – the website (built files)
- `server.ts` – Bun server: serves the site and the `/api` for sign-up, sign-in, profiles, password reset, Google sign-in and the contact form. Data lives in Postgres (`DATABASE_URL`).
- `telegram.ts` – optional Telegram message after a contact or waitlist form is saved
- Hosted on Railway, project "MindBloom website". Every push to `main` redeploys.

Optional settings (Railway → website → Variables):
- `RESEND_API_KEY`, `EMAIL_FROM` – turn on password-reset emails
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` – turn on "Continue with Google"
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` – Telegram enquiry alerts (see below)

## Telegram enquiry alerts

When a contact or waitlist form is saved, the server can message the site owner on Telegram. If `TELEGRAM_BOT_TOKEN` or `TELEGRAM_CHAT_ID` is missing, the form still succeeds and the server logs a warning once.

1. In Telegram, open @BotFather and create a bot with `/newbot`. Copy the bot token.
2. Open that bot and send it one message. It cannot write to you until you do.
3. Find the chat id. After that message, open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `message.chat.id`. Or, with the token in the environment, run `bun run scripts/telegram-chat-id.ts`.
4. In Railway → website → Variables, add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.

The message is titled "New MindBloom enquiry". It includes the name, email, phone and child age when those were sent, any other fields, the message text, the language, and the time in Europe/Madrid. A Telegram failure does not change the reply the form shows.
