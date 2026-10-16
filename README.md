# fixitaid.com

The Fix It Aid website: mold and water damage, roofing and HVAC in Chicago.
Next.js (App Router, TypeScript, Tailwind) exported as static HTML for the current LiteSpeed host.

The design comes from `../1-design-mockup/fixitaid-mockups.html` (V5) and the copy from `../2-page-content`.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # writes the static site to out/
npm run check:placeholders   # launch check, see below
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

Every form posts JSON to `/quote.php` on the same host (`NEXT_PUBLIC_LEAD_ENDPOINT` to change it) with
`name, phone, zip, service, details, urgent, page, company` (`company` is a spam trap). The PHP handler
sends the lead to `info@fixitaid.com` over **Google SMTP** (`smtp.gmail.com:587`). On success the
visitor goes to `/thank-you`, which fires the Google Ads conversion.

### Google SMTP setup (once)

1. Sign in as `info@fixitaid.com` and turn on [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification).
2. Create an [App password](https://myaccount.google.com/apppasswords) (app name: “Fix It Aid website”).
3. On the server, copy `quote.config.example.php` → `quote.config.php` and paste the 16-character App Password into `smtp_pass`.
4. Keep `quote.config.php` on the server only (it is gitignored and blocked by `.htaccess`).

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_GTAG_ID`: Google tag (GA4 or AW-) ID
- `NEXT_PUBLIC_ADS_CONVERSION`: `AW-XXXXXXX/label` for the lead conversion

## Deploy

1. `npm run build`
2. Upload the contents of `out/` to the site root.
   `out/.htaccess` gives clean URLs (`/about` serves `about.html`), redirects www and http to
   `https://fixitaid.com`, sets security headers and caching, and serves `404.html`.
3. If this is the first deploy (or you rotated the App Password), create `quote.config.php` next to
   `quote.php` from `quote.config.example.php`.
4. Submit a test form and confirm the email arrives at `info@fixitaid.com`.
5. Submit `https://fixitaid.com/sitemap.xml` in Google Search Console.

## Images

- New photos: `npm run images -- <folder>` converts JPG/PNG to WebP in `public/images`.
- Logo: `public/images/logo.png`. After changing it, run `npm run brand-images` to rebuild the share image and icons.
