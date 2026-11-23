# MindBloom website

The public MindBloom site plus a small server for parent accounts.

- `public/` – the website (built files)
- `server.ts` – Bun server: serves the site and the `/api` for sign-up, sign-in, profiles, password reset, Google sign-in and the contact form. Data lives in Postgres (`DATABASE_URL`).
- Hosted on Railway, project "MindBloom website". Every push to `main` redeploys.

Optional settings (Railway → website → Variables):
- `RESEND_API_KEY`, `EMAIL_FROM` – turn on password-reset emails
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` – turn on "Continue with Google"
