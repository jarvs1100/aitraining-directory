# SSL Readiness Verification — 2026-02-17 06:01 UTC

## Scope
- Domain checked: `aitraining.directory` and `www.aitraining.directory`
- Verification done from CLI with DNS + TLS certificate checks.

## Evidence (raw)

### DNS
```bash
dig +short aitraining.directory A
185.199.111.153
185.199.108.153
185.199.109.153
185.199.110.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.109.153
185.199.111.153
185.199.108.153
185.199.110.153
```

### TLS certificate served right now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT
```

Same cert is served for `www.aitraining.directory` (subject `*.github.io`).

### HTTPS validation test
```bash
curl -I -L https://aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'aitraining.directory'

curl -I -L https://www.aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'www.aitraining.directory'
```

## Current readiness status
- **NOT SSL-ready** for end users on the custom domain.
- The endpoint currently presents a wildcard GitHub cert (`*.github.io`) that does not match `aitraining.directory` or `www.aitraining.directory`.

## Remediation (actionable, no guessing)
1. In GitHub repo settings for Pages, verify **Custom domain** is exactly:
   - `aitraining.directory`
2. Ensure **Enforce HTTPS** is enabled (or becomes available, then enable).
3. Keep DNS pointed at GitHub Pages endpoints (already observed for apex and www).
4. Wait for certificate issuance/renewal by GitHub Pages, then re-run:
   - `curl -I https://aitraining.directory`
   - `curl -I https://www.aitraining.directory`
   - `echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -subject`
5. Success condition:
   - `curl` returns HTTP headers without SSL mismatch errors
   - certificate SAN/subject covers the custom domain(s), not only `*.github.io`.

## Note
Repository `CNAME` and `docs/CNAME` are both set to `aitraining.directory`, so source files already match intended domain.