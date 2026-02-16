# i18n V4 + EU Morning Checklist

## Command run
```bash
npm run build && npm run qa:i18n
```

## Pass criteria
- All required locales present for both high-intent keys:
  - `ai-training-tools`
  - `sop-video`
- No duplicate locale/slug combinations
- Built files exist for every localized page in `/docs/{locale}/{slug}/index.html`

## Manual spot checks (2 mins)
- `/de/ki-tools-fuer-mitarbeiterschulung/`
- `/de/sop-zu-schulungsvideos-mit-ki/`
- `/es/herramientas-ia-formacion-empleados/`
- `/es/de-sop-a-video-de-formacion-con-ia/`

## If failure
- Fix missing locale entries in `src/lib/i18n.js`
- Rebuild and rerun QA
- Update `ops/overnight-cycle-log-2026-02-16.md` with root cause + patch
