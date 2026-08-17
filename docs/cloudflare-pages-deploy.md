# Deploying to Cloudflare Pages

The site is configured for static export and verified working as plain files.
What follows is the part only you can do — it needs your Cloudflare account.

---

## Build settings

In Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**,
pick `Adityababbar15/uniformedge-site`, then:

| Setting | Value |
|---|---|
| Framework preset | **Next.js (Static HTML Export)** — or "None" |
| Build command | `npm run build` |
| Build output directory | **`out`** |
| Node version | `22` (set env var `NODE_VERSION=22`) |

## Environment variable — do not skip

| Name | Value |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xkjwokbg` |

Set it for **both** Production and Preview. Miss it and the site deploys fine but
every enquiry hits the "form isn't connected" error — the failure the form was
written to surface honestly rather than swallow.

## Custom domain

Pages → your project → **Custom domains → Set up a domain** → `www.uniformedge.co.in`.

Use **`www`**. `SITE_URL` is `https://www.uniformedge.co.in`, and pointing the apex
instead makes every canonical tag disagree with the served host.

Add an apex redirect (`uniformedge.co.in` → `www`) so both work.

## Then tell me, and I will

1. Flip `SITE_INDEXABLE` to `true` in `lib/content/company.ts` — until then
   robots.txt disallows everything and every page sends `noindex`
2. Confirm the live domain serves correctly and the form submits from it
3. Check the `_headers` rules are actually applied at the edge

---

## What changed to make this work

- **Gallery images converted** — 15 PNGs at 25 MB became WebP at 567 KB. They were
  the only thing depending on Vercel's image optimiser
- **`output: "export"`** with `images.unoptimized: true`, and `trailingSlash: true`
  so Cloudflare gets `/about/index.html`
- **`force-static`** on `app/robots.ts` and `app/sitemap.ts`; export refuses to
  build route handlers otherwise
- **Headers moved to `public/_headers`.** Next **ignores** `headers()` under
  `output: "export"` — there is no server. Security and cache headers now live in
  that file, which Cloudflare reads at the edge. `next.config.ts` carries a note
  so nobody re-adds them there expecting them to work
- **`/schools/[slug]` removed from `app/`.** Static export cannot build a dynamic
  route whose `generateStaticParams()` returns an empty array, and no school is
  published yet. Preserved with restore steps at
  `docs/templates/school-page.tsx.txt`

## Verified before handover

Built to `out/` (12 MB), served over plain HTTP with no Node runtime:

- All 12 routes 200; unknown path 404s
- Gallery: 25 images, **0 broken**, no `_next/image` URLs anywhere
- Shop cart: add, size selection, totals, localStorage, WhatsApp handoff
- Contact form present with the Formspree endpoint baked into the bundle
- `robots.txt`, `sitemap.xml`, `_headers`, catalogue PDF all present

## Vercel

Leave it running until Cloudflare serves the domain, then delete the Vercel
project so two hosts are not both claiming to be production. The repo works on
either — nothing here is Cloudflare-specific except `_headers`, which Vercel
harmlessly ignores.
