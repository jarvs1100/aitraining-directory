# AI Training Directory (Astro)

SEO-focused static directory built with Astro and deployed via GitHub Pages.

## Stack
- Astro (SSG)
- JSON data source (`data/listings.json`)
- Static output to `docs/` (GitHub Pages source)

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## SEO implemented
- Clean URL structure (`/tool/[slug]/`, `/category/[slug]/`)
- Unique titles and meta descriptions per page
- Canonical tags
- Open Graph + Twitter metadata
- JSON-LD structured data (`CollectionPage`, `SoftwareApplication`)
- XML sitemap via `@astrojs/sitemap`
- `robots.txt`
- Internal linking between homepage, categories, and tools

## Content workflow
1. Update `data/listings.json`
2. Run `npm run build`
3. Commit + push to `main`

## Growth operations assets
- `ops/traffic-acquisition-sop.md` — weekly distribution + SEO execution loop
- `ops/outreach-distribution-checklist.md` — launch/promotion checklist
- `ops/daily-kpi-tracker.csv` + `ops/daily-kpi-tracker-guide.md` — KPI logging and interpretation

GitHub Pages serves `docs/` on `aitraining.directory`.

## UI refresh note (before/after)
- **Before:** Minimal default styling with limited visual hierarchy and weaker mobile presentation.
- **After:** Introduced a reusable design system (tokens + shared UI classes), stronger hero/CTA sections, premium chips/cards/navigation/footer polish, and better responsive/accessibility defaults (focus styles, landmarks, improved contrast) while keeping Astro static output and SEO structure unchanged.
