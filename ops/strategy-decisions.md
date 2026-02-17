# Phase 1 — Strategy Decisions (Evidence-first)

Date: 2026-02-17 (UTC)

## Decision 1 — Prioritize list-format commercial pages first
**Decision:** Build/optimize pages targeting `best ai tools for training and development` style queries.

**Evidence:** Across EN/PL/CZ/SK/HU/DE/ES sampling, the most stable ranking pattern is listicle/tool-roundup pages (examples captured in `ops/keyword-intent-map.md`).

**Why this wins now:**
- Strong intent-to-directory fit
- Reusable content architecture across locales
- Supports internal links into compare + tool detail pages

---

## Decision 2 — Treat alternatives + vs pages as core conversion surface
**Decision:** Expand comparison clusters (`[tool] alternatives`, `[tool] vs [tool]`) as P1 pages.

**Evidence:** SERPs consistently show dedicated comparison pages and aggregator comparisons (e.g., Descript vs Camtasia on Descript/G2/SoftwareAdvice; Synthesia alternatives on HeyGen/Clueso).

**Why this wins now:**
- Bottom-funnel decision intent
- Clear monetization proximity (affiliate/sponsored placements later)
- Natural cross-link target from solution and category pages

---

## Decision 3 — Keep EU AI Act AI literacy as trust/compliance wedge
**Decision:** Keep and strengthen `EU AI Act AI literacy training` solution path in top priority.

**Evidence:** SERP includes EU digital policy pages and Article 4 references; query maps to mandatory literacy context for deployers/providers.

**Why this wins now:**
- Distinctive B2B trust signal versus generic “best AI tools” competitors
- Aligns with enterprise L&D/compliance workflows

---

## Decision 4 — Localization sequence: PL/DE/ES before CZ/SK/HU
**Decision:** Expand first in PL/DE/ES, then CZ/SK/HU.

**Evidence:** In sampled SERPs, PL/DE/ES show more stable recurring “best tools” result sets and clearer commercial framing.

**Why this wins now:**
- Better expected return per page built
- Cleaner template reuse from English pages

---

## Implemented site change from findings (highest-confidence)
**Change implemented:** Added a new solution route for primary recurring SERP format:
- `/solutions/ai-tools-for-training-and-development/`

**Rationale:** This directly matches the dominant cross-market query format (“best AI tools for training and development”) observed in Phase 1 SERP evidence.

**Files updated for this change:**
- `src/lib/programmatic.js` (new use-case entry)
- `src/pages/index.astro` (homepage internal link chip to new route)
- `src/pages/solutions/index.astro` (top-intent chip added)

---

## Guardrails used
- No fabricated search volume or ranking claims
- All prioritization tied to observed SERP format evidence
- Atomic build-verified commit before push
