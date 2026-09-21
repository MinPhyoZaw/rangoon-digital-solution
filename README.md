# Alita Software House

Starter company website built with Next.js App Router, React, Tailwind CSS, shadcn/ui-compatible components, Motion, Lucide React, Resend, Vercel Analytics, and optional Google Analytics. No database is used.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Contact form

Create a Resend account, verify your sending domain, and fill these values in `.env.local`:

```env
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=Alita Website <website@yourdomain.com>
CONTACT_TO_EMAIL=hello@yourdomain.com
```

## shadcn/ui

The project already includes shadcn-compatible `Button` and `Card` components plus `components.json`. Add more components with:

```bash
npx shadcn@latest add dialog sheet accordion badge input textarea
```

## Analytics

Vercel Analytics is installed and enabled. To also enable GA4, set:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

Push the project to GitHub, import it into Vercel, then add the same environment variables in Vercel Project Settings → Environment Variables.

## Suggested next pages

- `/services`
- `/services/web-development`
- `/services/business-software`
- `/services/pos-system`
- `/work` or `/projects`
- `/about`
- `/contact`
