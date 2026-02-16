# Concurrent Build Plan (Few Hours)

## Parallel lane A — Revenue lane (now)
- Offer pages
- Checkout links
- Outbound campaign

## Parallel lane B — Data lane (now)
- Import raw scrape CSV
- Normalize fields
- Dedupe + confidence score
- Save outputs:
  - records_clean.csv
  - records_deduped.csv
  - records_rejects.csv

## Parallel lane C — Verification lane (now)
- Crawl domains for live/dead/parked
- Extract title/meta/category hints
- flag low-quality domains

## Parallel lane D — SEO lane (now)
- Generate category pages
- Generate profile pages
- Add schema + sitemap refresh
- Add internal links from homepage to money pages

## Definition of done for "few hours"
1. Payment links live
2. 100 leads queued
3. 40+ messages sent
4. 1st paid listing possible same day
5. Docs + scripts ready for scale

## Guardrail
Do not broaden niche until first 5 paid customers are closed.
