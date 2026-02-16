# Morning Playbook — 2026-02-17 (Traffic + Waitlist)

## 1) Launch verification (15 min)
- Deploy latest `main`.
- Open homepage, one category page, one tool page, one `/compare/*` page, one `/solutions/*` page, and one localized page (`/de/*` or `/es/*`).
- Confirm CTAs render: `Explore categories`, `Compare alternatives`, `Join founding partner waitlist`.

## 2) SEO hygiene checks (20 min)
- Confirm sitemap includes new localized routes:
  - `/de/sop-zu-schulungsvideos-mit-ki/`
  - `/es/de-sop-a-video-de-formacion-con-ia/`
- Validate canonical + hreflang on one page per locale cluster (`ai-training-tools` + `sop-video`).
- Run URL Inspection in GSC for:
  - `/`
  - `/categories/`
  - `/compare/`
  - `/solutions/sop-to-video-training/`

## 3) Conversion ops (25 min)
- Export overnight waitlist emails from `sales@aitraining.directory`.
- Tag inbound by intent:
  - `sponsored-category`
  - `founding-partner`
  - `dfy-listing`
- Reply using 3-line qualification ask:
  1. ICP and geography
  2. Top category fit
  3. Monthly traffic goal

## 4) Distribution sprint (30 min)
- Publish one post linking `/solutions/sop-to-video-training/`.
- Publish one post linking `/compare/synthesia-alternatives/`.
- Share one localized page in EU-facing communities:
  - `/de/ki-tools-fuer-mitarbeiterschulung/` OR
  - `/es/herramientas-ia-formacion-empleados/`

## 5) KPI log update (10 min)
- Update `ops/daily-kpi-tracker.csv` with:
  - Sessions
  - Organic clicks/impressions
  - Waitlist joins
  - Qualified partner conversations

## 6) Midday decision gate
- If waitlist joins >= 3 and one qualified partner lead appears: keep current CTA stack.
- If waitlist joins < 3: move `Join founding partner waitlist` button to first position on homepage hero.
