# Morning Playbook — 2026-02-17 (Traffic + Waitlist)

## First 90 minutes execution sprint

### 00:00–00:15 — Launch + revenue-path verification
- Deploy latest `main`.
- Smoke-test routes: `/`, `/categories/`, `/compare/`, `/solutions/sop-to-video-training/`, `/de/ki-tools-fuer-mitarbeiterschulung/`.
- Confirm hero CTAs render and click through:
  - `Explore categories`
  - `Compare alternatives`
  - `Join founding partner waitlist`

**KPI gate (by minute 15):**
- 0 broken pages on key routes
- 0 broken CTA links on homepage hero

### 00:15–00:35 — Indexing + technical SEO checks
- Validate sitemap entries include newest localized routes:
  - `/de/sop-zu-schulungsvideos-mit-ki/`
  - `/es/de-sop-a-video-de-formacion-con-ia/`
- Validate canonical + hreflang on one page from each cluster:
  - `ai-training-tools`
  - `sop-video`
- Submit URL inspection in GSC for:
  - `/`
  - `/categories/`
  - `/compare/`
  - `/solutions/sop-to-video-training/`

**KPI gate (by minute 35):**
- 4/4 URL inspections requested
- canonical/hreflang mismatch count: **0** on sampled pages

### 00:35–01:00 — Conversion ops (waitlist pipeline)
- Export overnight waitlist inbound from `sales@aitraining.directory`.
- Tag every inbound lead:
  - `sponsored-category`
  - `founding-partner`
  - `dfy-listing`
- Send qualification reply (3-line ask):
  1. ICP + geography
  2. Best-fit category
  3. Monthly traffic goal

**KPI gate (by minute 60):**
- 100% of overnight inbound tagged
- 100% qualification replies sent
- target: **≥1** qualified partner conversation opened

### 01:00–01:30 — Distribution burst
- Publish post #1 linking `/solutions/sop-to-video-training/`
- Publish post #2 linking `/compare/synthesia-alternatives/`
- Publish post #3 linking one EU localized entry page:
  - `/de/ki-tools-fuer-mitarbeiterschulung/` **or**
  - `/es/herramientas-ia-formacion-empleados/`

**KPI gate (by minute 90):**
- 3/3 posts published
- minimum **45 referral sessions** target for first half-day window from these posts
- minimum **2 waitlist joins** attributable to morning traffic by 12:00 UTC

---

## After 90 min: logging + decision rules

### KPI log update (10 min)
- Update `ops/daily-kpi-tracker.csv` with:
  - Sessions
  - Organic clicks/impressions
  - Waitlist joins
  - Qualified partner conversations

### Midday decision gate
- If waitlist joins **>= 3** and qualified partner leads **>= 1**: keep current hero CTA order.
- If waitlist joins **< 3** by midday: move `Join founding partner waitlist` to first homepage hero position and rerun distribution push.