# i18n Architecture Recommendation (Astro Static)

## Goals
- Expand organic reach in overlooked EU non-English markets.
- Keep technical SEO clean (no duplicate-index chaos).
- Maintain high content quality (no translation spam).

## Recommended URL Structure
Use subdirectories per locale:

- English (default): `/...`
- Polish: `/pl/...`
- Czech: `/cs/...`
- Slovak: `/sk/...`
- Hungarian: `/hu/...`
- Additional EU: `/de/...`, `/es/...`

Why this structure:
- Easy to implement in Astro static routes
- Keeps domain authority centralized
- Clear locale separation for Search Console + analytics

## Canonical Rules
1. Each localized page has a **self-referencing canonical**.
   - Example: `/pl/narzedzia-ai-do-szkolen/` canonicals to itself.
2. English pages canonicalize to English URLs (not to localized pages).
3. Do not canonicalize all locales to English (prevents deindexing localized pages).

## Hreflang Rules
For each localized cluster (same intent page across languages):
- include alternates for every implemented locale
- include `hreflang="en"` to English reference page
- include `hreflang="x-default"` to English reference page

## Astro Implementation Pattern
- Route pattern: `src/pages/[lang]/[slug].astro`
- Locale/page source file: `src/lib/i18n.js`
- Shared template: `src/components/LocalizedLanding.astro`
- `Base.astro` accepts `alternates` and renders `<link rel="alternate" hreflang="...">`

## Indexing / Crawl Controls
- Keep localized pages in sitemap (default via Astro static build)
- Allow crawling in robots
- Avoid creating thin pages with near-identical content

## Measurement Setup
Track by locale path prefix:
- `/pl/`, `/cs/`, `/sk/`, `/hu/`, `/de/`, `/es/`

Core KPIs per locale:
- impressions
- clicks
- indexed pages
- top landing pages
- waitlist/founding partner conversions
