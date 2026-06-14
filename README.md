# Twin Digital Marketing

The official website for **Twin Digital Marketing** — a full-service digital
marketing agency (social media, SEO & content, paid ads/PPC, and web design &
branding).

Built with **Next.js (App Router)** and clean, hand-written CSS. Deployed on
**Vercel**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Contact form setup

The contact form posts to `/api/contact`, which forwards submissions to your
inbox via [Web3Forms](https://web3forms.com) (free, no server required).

1. Go to https://web3forms.com and create an access key using
   **yin@twindigitalmarketing.com**.
2. Copy `.env.local.example` to `.env.local` and set `WEB3FORMS_ACCESS_KEY`.
3. In Vercel, add the same `WEB3FORMS_ACCESS_KEY` under
   **Project → Settings → Environment Variables**, then redeploy.

Until the key is set, the form works in the UI but submissions are logged on the
server rather than emailed.

## Project structure

```
app/
  layout.jsx              # Root layout, fonts, SEO metadata
  page.jsx                # Home page (all sections)
  globals.css             # Design system + styles
  components/
    ContactForm.jsx       # Client-side contact form
  api/
    contact/route.js      # Form handler → Web3Forms
mockup/                   # Original static design mockup (not deployed)
```

## Deployment

Pushes to the `main` branch auto-deploy via Vercel. The production domain is
**twindigitalmarketing.com**.
