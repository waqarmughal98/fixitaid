# fixitaid.com

The Fix It Aid website: mold and water damage, roofing and HVAC in Chicago.
Next.js (App Router, TypeScript, Tailwind). Forms are sent by the Next.js server (`/api/lead`).

The design comes from `../1-design-mockup/fixitaid-mockups.html` (V5) and the copy from `../2-page-content`.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | Where |
|---|---|
| Business facts, licences, owner facts still missing, reviews | `src/config/site.ts` |
| Titles, descriptions, H1s, robots, canonical (from the SEO sheet) | `content/seo-meta.csv` |
| Home and mold main page | `src/app/(site)/page.tsx`, `mold-water-damage-chicago/` |
| Ad-only landing pages (no menu) | `src/app/(landing)/free-roof-check`, `hvac-repair-chicago` |
| About, Contact, Thank you, Privacy | `src/app/(site)/about`, `contact`, `thank-you`, `privacy` |
| Service pages and Areas (copy in the route file) | `src/app/(site)/<slug>/page.tsx` (`content` object) |
| Page renderer | `src/components/content/StoryRoute.tsx`, `StoryPage.tsx` |
| Lead form (Formik + Yup, React Query, axios) | `src/components/lead/LeadForm.tsx`, `src/services/lead`, `src/hooks/lead` |
| Mockup styles | `src/app/globals.css` |
| Drawings from the mockup | `public/art.svg` (icons in `src/components/ui/IconSprite.tsx`) |

To change a service page, edit the `content` object in `src/app/(site)/<slug>/page.tsx` and rebuild.
The original copywriter files stay in `content/` as reference; re-run `node scripts/export-story-copy.mjs`
only if you need to re-import from those markdown files.

## Owner facts and placeholders

Anything not confirmed by the owner shows as a yellow `[placeholder]`. Fill facts in `src/config/site.ts`
(licence numbers, rating, 24/7, prices, address...) or in the copy files. Then:

```bash
npm run build && npm run check:placeholders
```

The check lists every placeholder still on the site and fails until none are left. README rule: no bracket goes live.

- Review cards stay hidden until `site.reviews` has 3 real reviews.
- Team, before/after and "tech at work" photo blocks stay hidden until real photos exist.
- 24/7 lines only show when `owner.phone247` is `true`.

## Forms and tracking

Every form posts JSON to `/api/lead` (`NEXT_PUBLIC_LEAD_ENDPOINT` to change it) with
`name, phone, zip, service, details, urgent, page, company` (`company` is a spam trap).
The Next.js route sends the lead with **nodemailer** over Google SMTP. On success the
visitor goes to `/thank-you`, which fires the Google Ads conversion.

### Google SMTP setup (once)

1. Sign in as the mailbox that will send (Google account or Workspace) and turn on [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification).
2. Create an [App password](https://myaccount.google.com/apppasswords) (app name: “Fix It Aid website”).
3. Copy `.env.example` to `.env.local` and set `SMTP_USER`, `SMTP_PASS` (the App Password), `MAIL_FROM`, and `MAIL_TO`.
4. Restart `npm run dev` or `npm start`. Never commit `.env.local`.

Also set:

- `NEXT_PUBLIC_GTAG_ID`: Google tag (GA4 or AW-) ID
- `NEXT_PUBLIC_ADS_CONVERSION`: `AW-XXXXXXX/label` for the lead conversion

## Deploy

Forms need the Next.js server (`npm run build` then `npm start`). A static upload of `out/` cannot send mail.

1. Put the same SMTP variables in the host environment.
2. `npm run build && npm start`
3. Submit a test form and confirm the email arrives at `MAIL_TO`.
4. Submit `https://fixitaid.com/sitemap.xml` in Google Search Console.

## Images

- New photos: `npm run images -- <folder>` converts JPG/PNG to WebP in `public/images`.
- Logo: `public/images/logo.png`. After changing it, run `npm run brand-images` to rebuild the share image and icons.
