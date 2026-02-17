# Research Notes → Implementation (2026-02-17)

Scope: evidence-backed updates only for `aitraining-directory`.

## 1) SEO best practices for directory + pSEO quality (evidence)

### Evidence
1. **Google Search Essentials / Spam Policies**
   - Source: https://developers.google.com/search/docs/essentials/spam-policies
   - Relevant points: doorway abuse includes creating many similar pages that funnel users to one destination; scaled low-value pages can be treated as spam and lose visibility.
2. **Google March 2024 update + spam policy clarification**
   - Source: https://developers.google.com/search/blog/2024/03/core-update-spam-policies
   - Relevant points: scaled content abuse = many pages generated primarily to manipulate rankings; applies whether created by AI, humans, or both.
3. **Google people-first content guidance**
   - Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
   - Relevant points: prioritize original value, clear purpose for users, first-hand expertise signals, and avoid mass content patterns that exist mainly for search traffic.

### Implications for this site
- pSEO pages must stay differentiated by **real workflow intent**, not template-only variations.
- Avoid launching new large page batches without unique utility.
- Keep internal architecture user-first (clear hubs + useful pathing) and avoid “SEO-only” near-duplicate entry pages.

---

## 2) i18n / hreflang pitfalls and fixes (evidence)

### Evidence
1. **Google localized versions docs**
   - Source: https://developers.google.com/search/docs/specialty/international/localized-versions
   - Relevant points: each language version should list itself + alternates; links should be bidirectional; use fully-qualified URLs; `x-default` recommended for fallback.
2. **Google multi-regional/multilingual guidance**
   - Source: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
   - Relevant points: provide different URLs per language version; avoid forcing redirects; make language choice available.

### Implications for this site
- Ensure root and language hub pages expose complete alternate clusters including `x-default`.
- Keep language home access easy from localized pages.

---

## 3) Content structures ranking for AI training / L&D intent in EU markets (evidence)

### Evidence
1. **EU AI Act Service Desk (official EC service)**
   - Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4
   - Relevant point: Article 4 requires providers/deployers to ensure sufficient AI literacy of staff and people operating AI systems on their behalf.
2. **Bundesnetzagentur (German regulator) AI literacy summary**
   - Source: https://www.bundesnetzagentur.de/EN/Areas/Digitalisation/AI/07_Literacy/start.html
   - Relevant points: AI literacy duty applicable since Feb 2025; context-specific training is expected; documentation of measures is recommended.
3. **France Num (French government SME guidance)**
   - Source: https://www.francenum.gouv.fr/guides-et-conseils/intelligence-artificielle/comprendre-et-adopter-lia/quelles-sont-les-formations
   - Relevant points: practical learning pathways emphasize short modules, implementation-focused steps, and operational use cases for SMEs.
4. **SERP pattern checks (DE/FR queries)**
   - Queries reviewed:
     - `KI Schulung Mitarbeiter Unternehmen` (DE)
     - `formation IA pour entreprises` (FR)
   - Observed dominant angle on ranking pages: compliance + practical implementation framing (who it is for, what competencies are covered, rollout steps).

### Implications for this site
- Strong EU intent exists for **AI literacy / compliance training** pages with practical rollout framing.
- Adding a tightly scoped solution page for this intent is high-confidence and aligned with existing IA.

---

## Implemented changes (highest-confidence only)

1. **Hreflang/alternate coverage improvements (site + locale hubs)**
   - Added shared helper: `getSiteAlternates()` in `src/lib/i18n.js`.
   - Added alternates to homepage (`src/pages/index.astro`) including locale + regional codes + `x-default`.
   - Added alternates to language hub pages (`src/pages/[lang]/index.astro`) to strengthen bidirectional locale discoverability.

2. **Localized UX path fix (safe, minimal)**
   - In `src/layouts/Base.astro`, homepage/brand links on localized pages now point to localized language home (`/{lang}/`) instead of always `/`.
   - Kept global sections (`/solutions/`, `/compare/`, etc.) unchanged to avoid introducing broken locale-prefixed routes that do not exist.

3. **EU intent-aligned solution expansion (single high-confidence addition)**
   - Added use case in `src/lib/programmatic.js`:
     - slug: `eu-ai-act-ai-literacy-training`
     - title/meta/intro focused on Article 4 AI literacy implementation intent.
   - Added direct hub link in `src/pages/solutions/index.astro` chip cluster.

---

## Deliberately skipped (insufficient confidence or high risk)

- Bulk generation of new locale pages for every section (categories/compare/solutions subpaths): skipped due to risk of thin pages + large QA surface.
- Automatic locale-prefixed nav for non-localized routes: skipped to avoid introducing 404 paths.
- Broad copy rewrites across all existing pSEO pages: skipped without page-level evidence and quality review.
- Legal-claim heavy content (specific penalties/timelines beyond official wording): skipped to avoid compliance overstatement.

---

## Validation status
- Changes are limited to architecture/content-structure confidence from primary sources.
- Next step executed in repo workflow: build + commit + push (see git history for atomic commit hash).
