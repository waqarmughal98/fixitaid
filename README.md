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
| Copy for the 14 service pages and Areas | `content/*.md` (copies of `2-page-content/5b, 5c, 5d`) |
| Home and the 3 ad pages (mockup designs) | `src/app/(site)/page.tsx`, `src/app/(landing)/*` |
| About, Contact, Thank you, Privacy | `src/app/(site)/*` |
| Copy parser and page renderer | `src/lib/content/story-pages.ts`, `src/components/content/` |
| Lead form (Formik + Yup, React Query, axios) | `src/components/lead/LeadForm.tsx`, `src/services/lead`, `src/hooks/lead` |
| Mockup styles | `src/app/globals.css` |
| Drawings from the mockup | `public/art.svg` (icons in `src/components/ui/IconSprite.tsx`) |

To change a service page, edit its markdown in `content/` and rebuild. The parser understands the
copywriter's conventions: bridge lines, `(link: /url)`, `[placeholders]`, FAQ blocks and team-only notes
(which are never published).

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
`name, phone, zip, service, details, urgent, page, company` (`company` is a spam trap). On success the visitor
goes to `/thank-you`, which fires the Google Ads conversion.

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_GTAG_ID`: Google tag (GA4 or AW-) ID
- `NEXT_PUBLIC_ADS_CONVERSION`: `AW-XXXXXXX/label` for the lead conversion

## Deploy

1. `npm run build`
2. Upload the contents of `out/` to the site root, keeping `quote.php` in place.
   `out/.htaccess` gives clean URLs (`/about` serves `about.html`), redirects www and http to
   `https://fixitaid.com`, sets security headers and caching, and serves `404.html`.
3. Submit `https://fixitaid.com/sitemap.xml` in Google Search Console.

## Images

- New photos: `npm run images -- <folder>` converts JPG/PNG to WebP in `public/images`.
- Logo: `public/images/logo.png`. After changing it, run `npm run brand-images` to rebuild the share image and icons.
