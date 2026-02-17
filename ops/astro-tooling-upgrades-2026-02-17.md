# Astro tooling upgrades (2026-02-17)

## What was actually implemented

### 1) Astro view transitions (official)
- Added Astro Client Router in `src/layouts/Base.astro`:
  - `import { ClientRouter } from 'astro:transitions'`
  - `<ClientRouter />` in `<head>`

Why:
- Smoother in-site navigation UX without changing URLs.
- Keeps SSR/HTML output and SEO metadata behavior intact.

### 2) SEO setup verified (sitemap + robots)
- Kept official `@astrojs/sitemap` integration in `astro.config.mjs`.
- Kept canonical `public/robots.txt` as the source of truth with:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://aitraining.directory/sitemap-index.xml`

Why:
- Stable and explicit crawler setup for static deployment on GitHub Pages.

## Notes
- Attempted automated robots integration package path from a prior run was not kept.
- Final config is intentionally conservative: official sitemap integration + static robots file.
