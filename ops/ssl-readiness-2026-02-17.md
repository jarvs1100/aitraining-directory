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


---

## Evidence delta — 2026-02-17 08:09 UTC

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
Last-Modified: Tue, 17 Feb 2026 07:56:59 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- SSL certificate mismatch persists for custom domain (`CN=*.github.io` still served).
- HTTPS hostname validation remains blocked for apex + `www`.
- HTTP origin reflects newer deployment timestamp (`Last-Modified` advanced to 07:56:59 UTC).

---

## Evidence delta — 2026-02-17 08:38 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 121 HTML files.
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
185.199.108.153
185.199.109.153
185.199.110.153
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
Last-Modified: Tue, 17 Feb 2026 08:27:19 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` still passes on generated artifacts (121 HTML files).
- Custom-domain HTTPS remains blocked by cert mismatch (`CN=*.github.io` still served).
- HTTP origin reflects newer deployment timestamp (`Last-Modified` advanced to 08:27:19 UTC).

---

## Evidence delta — 2026-02-17 08:42 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 124 HTML files.
```

### DNS (unchanged)
```bash
dig +short aitraining.directory A
185.199.109.153
185.199.108.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.108.153
185.199.110.153
185.199.111.153
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

### HTTP behavior (deployment timestamp unchanged since prior check)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 08:27:19 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` passes for the latest generated artifacts (124 HTML files).
- Custom-domain HTTPS remains blocked by certificate mismatch (`CN=*.github.io`).
- HTTP deployment timestamp has not advanced beyond `08:27:19 UTC` yet.

---

## Evidence delta — 2026-02-17 09:24 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 128 HTML files.
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
185.199.109.153
185.199.110.153
185.199.111.153
185.199.108.153
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
Last-Modified: Tue, 17 Feb 2026 09:11:27 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` passes for current generated artifacts (128 HTML files).
- Custom-domain HTTPS remains blocked by certificate mismatch (`CN=*.github.io` still served).
- HTTP deployment timestamp advanced to `09:11:27 UTC`, confirming newer content is live over HTTP.

---

## Evidence delta — 2026-02-17 09:38 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 131 HTML files.
```

### DNS (unchanged)
```bash
dig +short aitraining.directory A
185.199.109.153
185.199.110.153
185.199.111.153
185.199.108.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.111.153
185.199.108.153
185.199.109.153
185.199.110.153
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
Last-Modified: Tue, 17 Feb 2026 09:26:53 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` passes for current generated artifacts (131 HTML files).
- Custom-domain HTTPS remains blocked by certificate mismatch (`CN=*.github.io` still served).
- HTTP deployment timestamp advanced to `09:26:53 UTC`, confirming newer content is live over HTTP.

---

## Evidence delta — 2026-02-17 09:42 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 134 HTML files.
```

### DNS (unchanged)
```bash
dig +short aitraining.directory A
185.199.111.153
185.199.108.153
185.199.109.153
185.199.110.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.111.153
185.199.108.153
185.199.109.153
185.199.110.153
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
Last-Modified: Tue, 17 Feb 2026 09:41:23 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` passes for current generated artifacts (134 HTML files).
- Custom-domain HTTPS remains blocked by certificate mismatch (`CN=*.github.io` still served).
- HTTP deployment timestamp advanced to `09:41:23 UTC`, confirming newer content is live over HTTP.

---

## Evidence delta — 2026-02-17 09:57 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 137 HTML files.
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
Last-Modified: Tue, 17 Feb 2026 09:42:46 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- Static HTTPS QA remains green after latest publish (`137` HTML files checked).
- DNS remains correctly pointed to GitHub Pages endpoints.
- Custom-domain HTTPS remains blocked by hostname mismatch (`subject=CN=*.github.io` for apex and `www`).
- HTTP Last-Modified advanced to `09:42:46 UTC`, indicating fresh deploy content is served over HTTP.

---

## Evidence delta — 2026-02-17 10:10 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 138 HTML files.
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
185.199.109.153
185.199.111.153
185.199.108.153
185.199.110.153
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
curl -sS -I https://aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'aitraining.directory'

curl -sS -I https://www.aitraining.directory
curl: (60) SSL: no alternative certificate subject name matches target host name 'www.aitraining.directory'
```

### HTTP behavior (updated content timestamp)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 09:58:56 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- `qa:https` passed after latest content updates (138 HTML files checked).
- DNS and served certificate state are unchanged; custom-domain HTTPS still blocked by `CN=*.github.io` hostname mismatch.
- HTTP origin timestamp advanced to `09:58:56 UTC`, indicating newer deploy availability over HTTP while TLS binding remains pending.

---

## Evidence delta — 2026-02-17 10:26 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 145 HTML files.
```

### DNS (stable on GitHub Pages)
```bash
dig +short aitraining.directory A
185.199.109.153
185.199.110.153
185.199.111.153
185.199.108.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests (now passing)
```bash
curl -sSI https://aitraining.directory
HTTP/2 200

curl -sSI https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 10:19:55 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- Major SSL readiness improvement: HTTPS is now valid for apex and `www` (no hostname mismatch errors).
- Certificate authority changed from Sectigo/GitHub default to Let's Encrypt (`R12`) with active validity window through 2026-05-18.
- `https://www` correctly redirects to canonical `https://aitraining.directory/`.

---

## Evidence delta — 2026-02-17 10:56 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 155 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory CNAME
jarvs1100.github.io.
```

### TLS certificate served now (resolved)
```bash
echo | openssl s_client -servername aitraining.directory -connect aitraining.directory:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN = www.aitraining.directory
issuer=C = US, O = Let's Encrypt, CN = R12
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests (passing)
```bash
curl -I -L --max-redirs 5 https://aitraining.directory
HTTP/2 200
server: GitHub.com
last-modified: Tue, 17 Feb 2026 10:56:27 GMT
```

### Current delta summary
- ✅ Custom-domain HTTPS is now valid and serving a Let's Encrypt certificate for `www.aitraining.directory`.
- ✅ Apex `https://aitraining.directory` now returns `HTTP/2 200` without hostname mismatch errors.
- ✅ SSL readiness blocker is cleared; retain periodic checks after future deploys.

---

## Evidence delta — 2026-02-17 11:23 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 158 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153

dig +short www.aitraining.directory CNAME
jarvs1100.github.io.
```

### TLS certificate served now
```bash
echo | openssl s_client -servername aitraining.directory -connect aitraining.directory:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN = www.aitraining.directory
issuer=C = US, O = Let's Encrypt, CN = R12
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests
```bash
curl -I -L --max-redirs 5 https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 11:12:27 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 11:12:27 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- ✅ HTTPS remains valid for apex and `www`; no hostname mismatch regression observed.
- ✅ Certificate remains Let's Encrypt `R12` (`subject=CN=www.aitraining.directory`, valid through 2026-05-18).
- ✅ Fresh deploy is visible (`Last-Modified` advanced to `11:12:27 UTC`).

---

## Evidence delta — 2026-02-17 11:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 161 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.109.153
185.199.110.153
185.199.111.153
185.199.108.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.108.153
185.199.111.153
185.199.110.153
185.199.109.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 11:25:03 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 11:25:03 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid and reachable on apex (`HTTP/2 200`) with Let's Encrypt issuer `R12`.
- `www` correctly redirects to canonical HTTPS apex route.
- Deploy freshness is visible via `Last-Modified: 11:25:03 UTC`.
## Evidence delta — 2026-02-17 11:56 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 164 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 11:41:58 GMT
access-control-allow-origin: *
etag: "69945406-4eb3"
expires: Tue, 17 Feb 2026 12:06:08 GMT
cache-control: max-age=600

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 416A:16D051:129B781:12CFDCD:699453AF
accept-ranges: bytes
age: 937
date: Tue, 17 Feb 2026 11:56:08 GMT
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 20147
Server: GitHub.com
Content-Type: text/html; charset=utf-8
x-origin-cache: HIT
Last-Modified: Tue, 17 Feb 2026 11:41:58 GMT
Access-Control-Allow-Origin: *

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Connection: keep-alive
Content-Length: 162
Server: GitHub.com
Content-Type: text/html
Location: http://aitraining.directory/
X-GitHub-Request-Id: 82E0:2707CA:12264D2:125A89F:699453AF
Accept-Ranges: bytes
```

### Current delta summary
- ✅ HTTPS remains valid and reachable on apex (HTTP/2 200) with Let's Encrypt issuer R12.
- ✅ www host redirects to canonical HTTPS apex route.
- ✅ QA scan remains clean after latest content + UX updates (164 HTML files checked).

## Evidence delta — 2026-02-17 12:09 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 167 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.111.153
185.199.108.153
185.199.109.153
185.199.110.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.111.153
185.199.108.153
185.199.109.153
185.199.110.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS / HTTP validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 11:58:51 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 11:58:51 GMT
```

### Current delta summary
- ✅ HTTPS remains valid on apex with Let's Encrypt (`HTTP/2 200`).
- ✅ `www` continues to redirect to canonical HTTPS apex route.
- ✅ Deploy freshness advanced to `Last-Modified: 11:58:51 UTC`.
- ✅ HTTPS QA remains clean after i18n parity + mobile CTA hierarchy updates (167 HTML files checked).

---

## Evidence delta — 2026-02-17 12:26 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 170 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTP/HTTPS behavior
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 12:11:05 GMT

curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 12:11:05 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains healthy (`HTTP/2 200` on apex, `301` from `www` to apex).
- Certificate now served by Let's Encrypt (`R12`) with valid custom-domain routing behavior.
- Deploy freshness confirmed (`Last-Modified: 12:11:05 UTC`) after latest push.

---

## Evidence delta — 2026-02-17 12:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 173 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.109.153
185.199.110.153
185.199.111.153
185.199.108.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.110.153
185.199.109.153
185.199.111.153
185.199.108.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS/HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 12:28:52 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 12:28:52 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex with Let's Encrypt R12 certificate chain.
- `www` over HTTPS redirects to apex HTTPS as expected.
- Build-level HTTPS QA passed at 173 generated HTML pages.

---

## Evidence delta — 2026-02-17 12:55 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 176 HTML files.
```

### DNS
```bash
dig +short aitraining.directory A
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.110.153
185.199.108.153
185.199.109.153
185.199.111.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTP/HTTPS behavior
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 12:42:57 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/

curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 12:42:57 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex and `www` (redirecting to apex over HTTPS) with Let's Encrypt `R12`.
- Build-level HTTPS QA passed with 176 generated HTML files after the i18n + mobile FAQ updates.
- Deploy freshness signal remains current (`Last-Modified: 12:42:57 UTC`).
