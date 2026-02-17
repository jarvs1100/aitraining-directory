# SSL Readiness Verification — 2026-02-17 06:41 UTC

## Scope
- Domain checked: `aitraining.directory` and `www.aitraining.directory`
- Verification sources: static-site HTTPS QA script + live DNS/TLS/HTTP checks from CLI.

## Evidence (raw)

### Build-level HTTPS QA
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 110 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.108.153
185.199.110.153
185.199.109.153
185.199.111.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT
```

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'aitraining.directory'

curl -I https://www.aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'www.aitraining.directory'
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 06:41:20 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

## Current readiness status
- **Partially ready**: static artifact checks pass (`qa:https`) and DNS is pointed to GitHub Pages.
- **Not production SSL-ready**: live cert still serves `CN=*.github.io`, causing hostname mismatch for both apex and `www` over HTTPS.

## Required next actions
1. In GitHub Pages settings, confirm custom domain is exactly `aitraining.directory`.
2. Enable **Enforce HTTPS** when available.
3. Wait for GitHub Pages cert issuance/attachment to custom domain.
4. Re-test until both succeed without cert errors:
   - `curl -I https://aitraining.directory`
   - `curl -I https://www.aitraining.directory`
5. Confirm final certificate covers custom domain (not just `*.github.io`).

---

## Evidence delta — 2026-02-17 07:09 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 113 HTML files.
```

### DNS (unchanged)
```bash
dig +short aitraining.directory A
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### TLS certificate served now (unchanged)
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT
```

### HTTP behavior (updated content timestamp)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 07:07:35 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- No SSL certificate coverage change yet (`CN=*.github.io` still served for apex + `www`).
- HTTPS hostname validation still fails for custom domain.
- HTTP site reflects newer deployed content timestamp (`Last-Modified` advanced from 06:41 to 07:07 UTC).

---

## Evidence delta — 2026-02-17 07:24 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 115 HTML files.
```

### DNS (unchanged)
```bash
dig +short aitraining.directory A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153
```

### TLS certificate served now (unchanged)
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT
```

### HTTP behavior (updated content timestamp)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 07:12:05 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- SSL certificate mismatch persists for custom domain (`CN=*.github.io`).
- HTTPS hostname validation remains blocked pending GitHub Pages cert binding.
- HTTP origin reflects newer deployment timestamp (`Last-Modified` advanced to 07:12 UTC).

---

## Evidence delta — 2026-02-17 07:56 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 116 HTML files.
```

### DNS (unchanged)
```bash
dig +short aitraining.directory A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.111.153
185.199.110.153
185.199.108.153
185.199.109.153
```

### TLS certificate served now (unchanged)
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
subject=CN = *.github.io
notBefore=Mar  7 00:00:00 2025 GMT
notAfter=Mar  7 23:59:59 2026 GMT
```

### HTTPS validation tests (still failing)
```bash
curl -I https://aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'aitraining.directory'

curl -I https://www.aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'www.aitraining.directory'
```

### HTTP behavior (updated content timestamp)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 07:40:50 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` still passes on generated artifacts (116 HTML files).
- Custom-domain HTTPS remains blocked by cert mismatch (`CN=*.github.io` still served).
- HTTP reflects newer deployed content timestamp (`Last-Modified` now 07:40:50 UTC).

