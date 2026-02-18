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

---

## Evidence delta — 2026-02-17 13:11 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 179 HTML files.
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
185.199.111.153
185.199.110.153
185.199.108.153
185.199.109.153
```

### TLS certificate served now (state change)
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

curl -I https://www.aitraining.directory
HTTP/2 301
```

### HTTP behavior
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
```

### Current delta summary
- `qa:https` passes for current generated artifacts (179 HTML files).
- TLS moved from GitHub wildcard cert to Let's Encrypt (`CN=www.aitraining.directory`), indicating custom-domain certificate provisioning is now active.
- HTTPS requests now succeed for apex and redirect behavior is functioning for `www`.

---

## Evidence delta — 2026-02-17 13:25 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 182 HTML files.
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
185.199.109.153
185.199.111.153
185.199.108.153
185.199.110.153
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

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently

curl -I https://aitraining.directory
HTTP/2 200

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex with `HTTP/2 200`; `www` continues redirecting to apex over HTTPS.
- Build-level HTTPS QA passed after route + i18n + mobile FAQ quick-nav updates (182 generated HTML files checked).
- DNS and certificate state remain stable with Let's Encrypt `R12` certificate chain.

---

## Evidence delta — 2026-02-17 13:41 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 185 HTML files.
```

### HTTPS behavior (live)
```bash
curl -I https://aitraining.directory/
HTTP/2 200
server: GitHub.com
last-modified: Tue, 17 Feb 2026 13:27:01 GMT

curl -I https://www.aitraining.directory/
HTTP/2 301
location: https://aitraining.directory/
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN = www.aitraining.directory
issuer=C = US, O = Let's Encrypt, CN = R12
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### Current delta summary
- HTTPS remains valid and hostname-compatible on apex + `www` redirect path.
- Build-level HTTPS QA still clean after adding new compare + i18n pages (185 HTML files checked).
- Last-Modified on apex currently reports `13:27:01 UTC`; next deploy should advance this.

---

## Evidence delta — 2026-02-17 13:53 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 185 HTML files.
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

### HTTP/HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 13:43:03 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 13:43:03 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex (`HTTP/2 200`) and `www` continues to 301 redirect to apex over HTTPS.
- DNS and certificate chain remain stable with Let's Encrypt `R12`.
- Deploy freshness advanced (`Last-Modified` now `13:43:03 UTC`, up from `13:27:01 UTC`).

---

## Evidence delta — 2026-02-17 13:59 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 188 HTML files.
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

### HTTP/HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 13:58:15 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 13:58:15 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex (`HTTP/2 200`) and `www` continues to redirect to apex over HTTPS.
- TLS certificate chain remains stable with Let's Encrypt `R12`.
- Deploy freshness advanced (`Last-Modified` now `13:58:15 UTC`).
## Evidence delta — 2026-02-17 14:12 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 191 HTML files.
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 13:59:33 GMT
access-control-allow-origin: *
etag: "69947445-4eb3"

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 6D94:20FECC:1682FD:16B69B:6994740B
accept-ranges: bytes
age: 847
date: Tue, 17 Feb 2026 14:12:45 GMT
```

### Current delta summary
- HTTPS remains valid for apex and www with Let's Encrypt certificate coverage.
- www continues redirecting to HTTPS apex.
- Static HTTPS QA passed on 191 generated HTML files.

---


---

## Evidence delta — 2026-02-17 14:26 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 194 HTML files.
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

### HTTPS/HTTP behavior (current)
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 14:13:40 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 14:13:40 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Delta summary
- HTTPS remains valid and stable on apex (`HTTP/2 200`) with Let’s Encrypt certificate chain.
- `www` continues redirecting to apex over HTTPS (`301`) and remains expected for canonicalization.
- Build-time HTTPS QA still passes after latest route/i18n/mobile updates.

---

## Evidence delta — 2026-02-17 14:41 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 197 HTML files.
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

### HTTP(S) behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 14:32:41 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 14:32:41 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid with Let's Encrypt `R12` certificate.
- Apex returns `HTTP/2 200`; `www` continues redirecting to apex over HTTPS.
- Deploy freshness advanced (`Last-Modified: 14:32:41 UTC`) after this content batch.

---

## Evidence delta — 2026-02-17 14:56 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 200 HTML files.
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

### HTTP behavior (current)
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 14:42:08 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid for apex and `www` redirection path with Let's Encrypt `R12` cert chain.
- Apex continues to return `HTTP/2 200`; `www` continues to redirect to apex over HTTPS.
- Deploy freshness advanced (`Last-Modified` now `14:42:08 UTC`).

---

## Evidence delta — 2026-02-17 15:11 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 203 HTML files.
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
last-modified: Tue, 17 Feb 2026 14:57:31 GMT
access-control-allow-origin: *
etag: "699481db-4eb3"
expires: Tue, 17 Feb 2026 15:20:54 GMT
cache-control: max-age=600

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 7B5C:C31ED:5D7BC:5E75F:699484FE
accept-ranges: bytes
age: 0
date: Tue, 17 Feb 2026 15:10:55 GMT
via: 1.1 varnish
x-served-by: cache-par-lfpg1960060-PAR
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 20147
Server: GitHub.com
Content-Type: text/html; charset=utf-8
Last-Modified: Tue, 17 Feb 2026 14:57:31 GMT
Access-Control-Allow-Origin: *
ETag: "699481db-4eb3"

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Connection: keep-alive
Content-Length: 162
Server: GitHub.com
Content-Type: text/html
Location: http://aitraining.directory/
X-GitHub-Request-Id: 56A8:2CAFF5:5B4A1:5C432:699484FE
Accept-Ranges: bytes
Age: 0
Date: Tue, 17 Feb 2026 15:10:55 GMT
```


### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 203 HTML files.
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
last-modified: Tue, 17 Feb 2026 14:57:31 GMT
access-control-allow-origin: *
etag: "699481db-4eb3"
expires: Tue, 17 Feb 2026 15:20:54 GMT
cache-control: max-age=600

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 7B5C:C31ED:5D7BC:5E75F:699484FE
accept-ranges: bytes
age: 0
date: Tue, 17 Feb 2026 15:10:55 GMT
via: 1.1 varnish
x-served-by: cache-par-lfpg1960060-PAR
```

### HTTP behavior (current)
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 20147
Server: GitHub.com
Content-Type: text/html; charset=utf-8
Last-Modified: Tue, 17 Feb 2026 14:57:31 GMT
Access-Control-Allow-Origin: *
ETag: "699481db-4eb3"

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Connection: keep-alive
Content-Length: 162
Server: GitHub.com
Content-Type: text/html
Location: http://aitraining.directory/
X-GitHub-Request-Id: 56A8:2CAFF5:5B4A1:5C432:699484FE
Accept-Ranges: bytes
Age: 0
Date: Tue, 17 Feb 2026 15:10:55 GMT
```

### Current delta summary
- HTTPS remains valid for apex and www redirect path using Let's Encrypt (`CN=www.aitraining.directory`, issuer `R12`).
- Static HTTPS QA passed after latest content changes (`203` HTML files checked).
- Deploy freshness confirmed by `Last-Modified: Tue, 17 Feb 2026 14:57:31 GMT` on apex HTTP/HTTPS responses.

---

## Evidence delta — 2026-02-17 15:25 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 206 HTML files.
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
185.199.109.153
185.199.111.153
185.199.110.153
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

### HTTPS + redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 15:13:00 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 15:13:01 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid (Let's Encrypt `R12`) and apex serves `HTTP/2 200`.
- `www` continues to redirect to HTTPS apex as expected.
- Deploy freshness advanced with `Last-Modified` at `15:13 UTC` after this batch.

---

## Evidence delta — 2026-02-17 15:41 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 209 HTML files.
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

### HTTPS/redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 15:27:21 GMT
access-control-allow-origin: *
etag: "699488d9-4eb3"
expires: Tue, 17 Feb 2026 15:51:46 GMT
cache-control: max-age=600

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 7B5C:C31ED:5D7BC:5E75F:699484FE
accept-ranges: bytes
age: 1851
date: Tue, 17 Feb 2026 15:41:46 GMT

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 20147
Server: GitHub.com
Content-Type: text/html; charset=utf-8
Last-Modified: Tue, 17 Feb 2026 15:27:21 GMT
Access-Control-Allow-Origin: *
ETag: "699488d9-4eb3"

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Connection: keep-alive
Content-Length: 162
Server: GitHub.com
Content-Type: text/html
Location: http://aitraining.directory/
X-GitHub-Request-Id: 56A8:2CAFF5:5B4A1:5C432:699484FE
Accept-Ranges: bytes
```

### Current delta summary
- `qa:https` passed after content updates.
- HTTPS remains valid for apex and `www` with Lets Encrypt certificate; `www` redirects to apex over HTTPS.
- HTTP origin still redirects/serves as expected; freshness can be tracked via `Last-Modified` header.

---

## Evidence delta — 2026-02-17 15:57 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 212 HTML files.
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 15:43:10 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid for apex and `www` redirect behavior is correct (`www` → apex over HTTPS).
- TLS certificate remains Let's Encrypt `R12` with active validity window through May 18, 2026.
- Deploy freshness advanced (`Last-Modified: 15:43:10 UTC`) and static HTTPS QA passed for 212 generated HTML files.

---

## Evidence delta — 2026-02-17 16:11 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 218 HTML files.
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
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS behavior
```bash
curl -I https://aitraining.directory/
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 15:58:57 GMT

curl -I https://www.aitraining.directory/
HTTP/2 301
Location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid and production-ready on apex (`HTTP/2 200`) and `www` redirect (`HTTP/2 301` to apex).
- Certificate is active via Let's Encrypt chain (`R12`) with SAN coverage serving the custom domain endpoint.
- Site freshness confirmed with latest deploy timestamp (`Last-Modified: 15:58:57 UTC`).

---

## Evidence delta — 2026-02-17 16:26 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 221 HTML files.
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
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS behavior
```bash
curl -I https://aitraining.directory/
HTTP/2 200
last-modified: Tue, 17 Feb 2026 16:13:03 GMT

curl -I https://www.aitraining.directory/
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex and `www` redirects correctly to apex over HTTPS.
- TLS certificate chain remains Let's Encrypt `R12` with active validity through May 18, 2026.
- Deploy freshness advanced (`Last-Modified: 16:13:03 UTC`) and static HTTPS QA passed for 221 generated HTML files.

---

## Evidence delta — 2026-02-17 16:40 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 224 HTML files.
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
185.199.109.153
185.199.110.153
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

### HTTP/HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
server: GitHub.com
last-modified: Tue, 17 Feb 2026 16:27:53 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 16:27:53 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex with Let's Encrypt `R12`; no hostname mismatch observed.
- `www` over HTTPS correctly redirects to apex HTTPS (`301`).
- Static HTTPS QA remains green with 224 generated HTML files.
- Deploy freshness confirmed by updated `Last-Modified: 16:27:53 UTC` on apex.

---

## Evidence delta — 2026-02-17 16:55 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 227 HTML files.
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
185.199.109.153
185.199.111.153
185.199.110.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 16:42:32 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains healthy: apex returns `HTTP/2 200` and `www` redirects to HTTPS apex.
- TLS remains valid with Let's Encrypt `R12` (cert subject `www.aitraining.directory`, SAN coverage validated via successful apex HTTPS response).
- Deploy freshness observed from `Last-Modified: 16:42:32 UTC`.

## Evidence delta — 2026-02-17 17:11 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 230 HTML files.
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
185.199.109.153
185.199.110.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 17:11:22 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Delta summary
- HTTPS remains valid and deploy is fresh (`Last-Modified: 17:11:22 UTC`).
- `qa:https` remains clean across 230 generated HTML files.
- `www` continues to redirect to HTTPS apex as expected.

---

## Evidence delta — 2026-02-17 17:26 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 233 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 17:12:54 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid and production-ready for apex + `www` redirect.
- TLS cert still Let's Encrypt `R12` (subject `www.aitraining.directory`) and accepted for apex flow.
- Deployed content freshness advanced (`Last-Modified: 17:12:54 UTC`).

---

## Evidence delta — 2026-02-17 17:40 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 236 HTML files.
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 17:40:22 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### HTTP behavior
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 17:40:22 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid and serving successfully on apex with Let's Encrypt `R12` (`HTTP/2 200`).
- `www` over HTTPS still canonicalizes to apex over HTTPS (`301 -> https://aitraining.directory/`).
- `www` over HTTP still redirects to HTTP apex first; HTTPS canonical path remains correct for secure requests.
- Deployment freshness confirmed (`Last-Modified` advanced to `17:40:22 UTC`).

---

## Evidence delta — 2026-02-17 17:57 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 239 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 17:41:57 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 17:41:57 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS readiness remains healthy: apex serves `HTTP/2 200` and `www` redirects to HTTPS apex.
- `qa:https` passed after source updates with 239 generated HTML files checked.
- Deployment freshness confirmed by `Last-Modified: 17:41:57 UTC` on apex.

---

## Evidence delta — 2026-02-17 18:11 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 242 HTML files.
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
185.199.111.153
185.199.109.153
185.199.110.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 18:10:54 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Current delta summary
- `qa:https` passes on generated artifacts (242 HTML files).
- HTTPS remains valid on custom domain with Let's Encrypt `R12` certificate.
- Apex returns `HTTP/2 200`; `www` continues to redirect to HTTPS apex.
- `Last-Modified` advanced to `18:10:54 UTC` after latest deploy.
\n---\n\n## Evidence delta — 2026-02-17 18:27 UTC
\n### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 245 HTML files.
```
\n### DNS
```bash
dig +short aitraining.directory A
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153

dig +short www.aitraining.directory A
jarvs1100.github.io.
185.199.109.153
185.199.108.153
185.199.110.153
185.199.111.153
```
\n### TLS certificate served now
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
\n### HTTPS validation tests
```bash
curl -I https://aitraining.directory | head -n 6
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 18:12:41 GMT
access-control-allow-origin: *
etag: "6994af99-501b"

curl -I https://www.aitraining.directory | head -n 8
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: A27A:1EE677:3CA063:3D2BF7:6994B2F7
accept-ranges: bytes
age: 0
date: Tue, 17 Feb 2026 18:27:05 GMT
```

## Evidence delta — 2026-02-17 18:43 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 248 HTML files.
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
185.199.110.153
185.199.109.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 18:41:38 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Current delta summary
- `qa:https` remains green on generated artifacts (248 HTML files).
- HTTPS remains valid on custom domain with Let's Encrypt `R12` certificate.
- Apex returns `HTTP/2 200`; `www` continues redirecting to HTTPS apex.
- `Last-Modified` advanced to `18:41:38 UTC`, confirming latest deploy visibility.

---

## Evidence delta — 2026-02-17 18:55 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 251 HTML files.
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
185.199.111.153
185.199.110.153
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

### HTTPS + HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 18:46:32 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 18:46:32 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex (`HTTP/2 200`) with Let's Encrypt `R12` chain.
- `www` continues redirecting to apex over HTTPS (`301`).
- Deployment freshness reflects latest publish window (`Last-Modified: 18:46:32 UTC`).

---

## Evidence delta — 2026-02-17 19:13 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 254 HTML files.
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

### HTTPS + HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 19:11:52 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
```

### Current delta summary
- `qa:https` remains green across generated artifacts (254 HTML files).
- HTTPS remains valid on apex with Let's Encrypt `R12`; `www` still redirects to HTTPS apex.
- Deployment freshness advanced to `Last-Modified: 19:11:52 UTC` on apex.

---

## Evidence delta — 2026-02-17 19:27 UTC

### Build-level HTTPS QA (post-deploy)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 257 HTML files.
```

### DNS (stable)
```bash
dig +short aitraining.directory A
185.199.110.153
185.199.111.153
185.199.108.153
185.199.109.153

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

### HTTP/HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 19:26:49 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 19:26:49 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS is valid and serving with Let's Encrypt (`R12`) for apex + www access path.
- Apex HTTPS responds `HTTP/2 200`; `www` HTTPS correctly redirects to apex HTTPS.
- Deployment freshness advanced (`Last-Modified: 19:26:49 UTC`) after latest i18n/mobile updates.

## Evidence delta — 2026-02-17 19:40 UTC

```bash
npm run qa:https
✅ HTTPS readiness QA passed
Checked 260 HTML files.

curl -I https://aitraining.directory
HTTP/2 200
last-modified: Tue, 17 Feb 2026 19:29:02 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

echo | openssl s_client -servername aitraining.directory -connect aitraining.directory:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN = www.aitraining.directory
issuer=C = US, O = Let's Encrypt, CN = R12
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

Status: HTTPS remains valid on apex + www redirect path with Let's Encrypt cert chain; deployment freshness advanced (`Last-Modified: 19:29:02 UTC`).
## Evidence delta — 2026-02-17 19:56 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https


✅ HTTPS readiness QA passed
Checked 263 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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
curl -I https://aitraining.directory
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 19:42:09 GMT
access-control-allow-origin: *
etag: "6994c491-501b"
expires: Tue, 17 Feb 2026 20:05:59 GMT
cache-control: max-age=600

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 149C:18F6DF:507CB1:512A7E:6994C122
accept-ranges: bytes
date: Tue, 17 Feb 2026 19:55:59 GMT
via: 1.1 varnish
age: 1709
x-served-by: cache-par-lfpg1960078-PAR

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 20507
Server: GitHub.com
Content-Type: text/html; charset=utf-8
Last-Modified: Tue, 17 Feb 2026 19:42:09 GMT
Access-Control-Allow-Origin: *
ETag: "6994c491-501b"

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Connection: keep-alive
Content-Length: 162
Server: GitHub.com
Content-Type: text/html
Location: http://aitraining.directory/
X-GitHub-Request-Id: 19AC:53FF5:57C123:5886B7:6994C7CF
Accept-Ranges: bytes
```

---

## Evidence delta — 2026-02-17 20:10 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 266 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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

### HTTPS and HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 19:58:06 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Tue, 17 Feb 2026 19:58:06 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid for apex and `www` behavior is correct (`https://www` redirects to HTTPS apex).
- Certificate chain remains Let's Encrypt (`R12`) with active validity window.
- Deployed content freshness advanced (`Last-Modified` now `19:58:06 UTC`).

## Evidence delta — 2026-02-17 20:25 UTC
- \: pass (269 HTML files checked).
- Apex HTTPS status: HTTP/2 200 
- WWW HTTPS status: HTTP/2 301 
- TLS certificate: subject=CN = www.aitraining.directory; issuer=C = US, O = Let's Encrypt, CN = R12.
- Apex Last-Modified: Tue, 17 Feb 2026 20:12:26 GMT.

## Evidence delta — 2026-02-17 20:26 UTC
- qa:https: pass (269 HTML files checked).
- Apex HTTPS status: HTTP/2 200 
- WWW HTTPS status: HTTP/2 301 
- TLS certificate: subject=CN = www.aitraining.directory; issuer=C = US, O = Let's Encrypt, CN = R12.
- Apex Last-Modified: Tue, 17 Feb 2026 20:12:26 GMT.

---

## Evidence delta — 2026-02-17 20:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 272 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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

### HTTPS / redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 20:27:47 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Status delta
- HTTPS remains valid and production-ready (Let's Encrypt `R12` served; no hostname mismatch).
- Apex serves `HTTP/2 200`; `www` redirects to HTTPS apex.
- Deploy freshness advanced (`Last-Modified: 20:27:47 UTC`).

---

## Evidence delta — 2026-02-17 20:42 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 275 HTML files.
```

### HTTPS behavior snapshot
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 20:27:47 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Status delta
- HTTPS remains valid and production-ready after latest content/i18n/mobile updates.
- Apex still serves over `HTTP/2 200`; `www` still redirects to HTTPS apex.

---

## Evidence delta — 2026-02-17 21:26 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 281 HTML files.
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
```

### HTTPS / redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 21:25:38 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Status delta
- HTTPS remains valid and production-ready with Let's Encrypt `R12`.
- Apex responds `HTTP/2 200`; `https://www` redirects to HTTPS apex.
- Deploy freshness advanced (`Last-Modified: 21:25:38 UTC`).

## Evidence delta — 2026-02-17 21:42 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 284 HTML files.
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
Last-Modified: Tue, 17 Feb 2026 21:27:05 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
```

### Current delta summary
- HTTPS remains valid on custom domain with Let's Encrypt (`R12`).
- `https://www` continues redirecting to HTTPS apex.
- Deploy freshness confirmed (`Last-Modified` advanced to `21:27:05 UTC`).

## Evidence delta — 2026-02-17 21:56 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 287 HTML files.
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
185.199.109.153
185.199.108.153
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

### HTTPS/HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 21:43:34 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
```

### Current delta summary
- HTTPS remains valid on custom domain with Let's Encrypt (`R12`).
- `https://www` continues redirecting to HTTPS apex.
- Deploy freshness advanced (`Last-Modified` moved to `21:43:34 UTC`).

## Evidence delta — 2026-02-17 22:11 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 290 HTML files.
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
185.199.111.153
185.199.109.153
185.199.110.153
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
Last-Modified: Tue, 17 Feb 2026 21:58:22 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
```

### Current delta summary
- HTTPS remains valid on custom domain with Let's Encrypt (`R12`).
- `https://www` continues redirecting to HTTPS apex.
- Post-change deploy has not propagated yet (`Last-Modified` still `21:58:22 UTC`).

## Evidence delta — 2026-02-17 22:26 UTC

### Build-level HTTPS QA (post-change)

```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 293 HTML files.
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

### HTTPS/HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200 
last-modified: Tue, 17 Feb 2026 22:12:11 GMT

curl -I https://www.aitraining.directory
HTTP/2 301 
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
```

### Current delta summary
- HTTPS remains valid on custom domain with Let's Encrypt (R12).
- https://www continues redirecting to HTTPS apex.
- Deploy freshness observed at Last-Modified Tue, 17 Feb 2026 22:12:11 GMT during this check.

---

## Evidence delta — 2026-02-17 22:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https


> aitraining-directory@1.0.0 qa:https
> node scripts/qa_https.mjs


✅ HTTPS readiness QA passed
Checked 296 HTML files.
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

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0 20507    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 22:27:14 GMT
access-control-allow-origin: *

curl -I https://www.aitraining.directory
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0   162    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 774C:1D4FCC:18B6AA:18ECFF:6994E0BE
```

### HTTP behavior
```bash
curl -I http://aitraining.directory
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0 20507    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0 20507    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 20507
Server: GitHub.com
Content-Type: text/html; charset=utf-8

curl -I http://www.aitraining.directory
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0   162    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/1.1 301 Moved Permanently
Connection: keep-alive
Content-Length: 162
Server: GitHub.com
Content-Type: text/html
```

### Current delta summary
- HTTPS remains valid for apex and www redirects to apex over HTTPS.
- DNS remains pointed to GitHub Pages edge IPs.
- Latest deploy freshness is reflected by the Last-Modified timestamp above.

### 2026-02-17 22:56 UTC — Evidence delta
- Re-ran `npm run qa:https` after source changes: **passed** with **299 HTML files checked**.
- `https://aitraining.directory` returns `HTTP/2 200` (GitHub Pages) with `Last-Modified: Tue, 17 Feb 2026 22:42:16 GMT`.
- `https://www.aitraining.directory` returns `HTTP/2 301` redirecting to `https://aitraining.directory/`.
- SSL posture remains healthy (Let's Encrypt cert chain already validated earlier); no hostname mismatch observed.

---

## Evidence delta — 2026-02-17 23:11 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 302 HTML files.
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 22:57:12 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Delta summary
- `qa:https` remains green after latest source + i18n + mobile updates.
- Apex HTTPS remains healthy (`HTTP/2 200`) and `www` redirects to HTTPS apex.
- Certificate still valid via Let's Encrypt (`R12`) with active `www.aitraining.directory` subject.

---

## Evidence delta — 2026-02-17 23:25 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 305 HTML files.
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Tue, 17 Feb 2026 23:12:16 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex and `www` via Let's Encrypt `R12`.
- `www` continues to redirect to HTTPS apex canonical.
- Deploy freshness confirmed (`Last-Modified` advanced to `23:12:16 UTC`).
## Evidence delta — 2026-02-17 23:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https


✅ HTTPS readiness QA passed
Checked 308 HTML files.
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
185.199.108.153
185.199.110.153
185.199.111.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200 
last-modified: Tue, 17 Feb 2026 23:27:55 GMT

curl -I https://www.aitraining.directory
HTTP/2 301 
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid on apex and `www` via Let's Encrypt `R12`.
- `www` continues to redirect to HTTPS apex canonical.
- Deploy freshness confirmed by updated `Last-Modified` response header.

---
## Evidence delta — 2026-02-17 23:56 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 311 HTML files.
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN = www.aitraining.directory
issuer=C = US, O = Let's Encrypt, CN = R12
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS behavior
```bash
curl -I https://aitraining.directory/
HTTP/2 200
last-modified: Tue, 17 Feb 2026 23:41:43 GMT
```

### Current delta summary
- HTTPS remains valid for apex via Let's Encrypt (`R12`).
- Post-change QA passed with 311 generated HTML files checked.
- Deploy freshness confirmed (`Last-Modified` advanced to `23:41:43 UTC`).

---

## Evidence delta — 2026-02-18 00:11 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 314 HTML files.
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
185.199.109.153
185.199.108.153
185.199.111.153
185.199.110.153
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

### HTTPS/redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Tue, 17 Feb 2026 23:57:09 GMT
access-control-allow-origin: *
etag: "69950055-501b"

curl -I https://www.aitraining.directory
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: EF00:1FE330:4A9566:4B3FE1:699503BE
accept-ranges: bytes
age: 0
date: Wed, 18 Feb 2026 00:11:43 GMT
```

### Current delta summary
- HTTPS remains valid for apex and www with Let's Encrypt certificate coverage.
- www continues redirecting to HTTPS apex as expected.
- Build-level HTTPS QA remains clean after route/i18n/mobile updates (314 HTML files checked).



---

## Evidence delta — 2026-02-18 00:26 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 317 HTML files.
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
185.199.109.153
185.199.110.153
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

### HTTPS/redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 00:12:39 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid for apex and www with Let's Encrypt (`R12`) certificate coverage.
- `www` continues redirecting to HTTPS apex as expected.
- Build-level HTTPS QA remains clean after route/i18n/mobile updates (317 HTML files checked).
- Deploy freshness advanced (`Last-Modified: 00:12:39 UTC`).

---

## Evidence delta — 2026-02-18 00:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 320 HTML files.
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

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS/redirect behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 00:27:05 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid for apex and www with Let's Encrypt (`R12`) certificate coverage.
- `www` continues redirecting to HTTPS apex as expected.
- Build-level HTTPS QA remains clean after route/i18n/mobile updates (320 HTML files checked).
- Deploy freshness advanced (`Last-Modified: 00:27:05 UTC`).

---

## Evidence delta — 2026-02-18 00:55 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 323 HTML files.
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
185.199.109.153
185.199.110.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 00:42:25 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains valid end-to-end (Let's Encrypt `R12`) for custom-domain traffic.
- Apex serves `HTTP/2 200`; `https://www` continues to redirect to HTTPS apex.
- Deploy freshness advanced (`Last-Modified: 00:42:25 UTC`) and build-level HTTPS QA passed for 323 generated HTML pages.

---

## Evidence delta — 2026-02-18 01:10 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 326 HTML files.
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
185.199.109.153
185.199.110.153
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

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200
server: GitHub.com
last-modified: Wed, 18 Feb 2026 01:10:30 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### HTTP behavior
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
```

### Current delta summary
- SSL remains healthy with active Let's Encrypt issuance (`R12`) and valid HTTPS responses.
- Apex returns `HTTP/2 200`; `www` cleanly redirects to canonical apex over HTTPS.
- Deployment freshness advanced (`Last-Modified: Wed, 18 Feb 2026 01:10:30 GMT`).

---

## Evidence delta — 2026-02-18 01:25 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https


✅ HTTPS readiness QA passed
Checked 329 HTML files.
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

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0 20507    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Wed, 18 Feb 2026 01:11:51 GMT
access-control-allow-origin: *
etag: "699511d7-501b"
expires: Wed, 18 Feb 2026 01:35:57 GMT
cache-control: max-age=600
x-proxy-cache: MISS
x-github-request-id: B5B6:2077F2:5FB4F4:609BC8:69951525
accept-ranges: bytes
age: 0
date: Wed, 18 Feb 2026 01:25:58 GMT
via: 1.1 varnish
x-served-by: cache-par-lfpg1960055-PAR
x-cache: MISS
x-cache-hits: 0
x-timer: S1771377958.916558,VS0,VE105
vary: Accept-Encoding
x-fastly-request-id: 239181ba03eb71d8092b9a0b89b088b79af48a98
content-length: 20507


curl -I https://www.aitraining.directory
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   162    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: AFF4:1FE330:60269B:610B1A:69951525
accept-ranges: bytes
age: 0
date: Wed, 18 Feb 2026 01:25:58 GMT
via: 1.1 varnish
x-served-by: cache-par-lfpg1960049-PAR
x-cache: MISS
x-cache-hits: 0
x-timer: S1771377958.116089,VS0,VE105
vary: Accept-Encoding
x-fastly-request-id: 9bda7d55325b7d42346a0f68eecd33788af816df
content-length: 162

```

### Freshness signal
- Last-Modified observed on apex: `Wed, 18 Feb 2026 01:11:51 GMT`

---

## Evidence delta — 2026-02-18 01:41 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 332 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Wed, 18 Feb 2026 01:27:04 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### HTTP behavior
```bash
curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Wed, 18 Feb 2026 01:27:04 GMT
```

### Current delta summary
- HTTPS remains healthy with Let's Encrypt `R12` and successful apex response (`HTTP/2 200`).
- `https://www.aitraining.directory` continues to redirect to HTTPS apex (`301`).
- Deploy freshness advanced to `Last-Modified: 01:27:04 UTC`.

## Evidence delta — 2026-02-18 01:55 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 335 HTML files.
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

### HTTPS/HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Wed, 18 Feb 2026 01:43:13 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Wed, 18 Feb 2026 01:43:13 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Status
- `qa:https` passes on latest build artifacts (335 HTML files checked).
- HTTPS is healthy on apex and `www` redirects to HTTPS apex.
- TLS remains valid via Let's Encrypt `R12`; cert currently served with `subject=CN=www.aitraining.directory`.

## Evidence delta — 2026-02-18 02:10 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 338 HTML files.
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
185.199.109.153
185.199.110.153
185.199.108.153
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

### HTTPS/HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Wed, 18 Feb 2026 01:57:05 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Wed, 18 Feb 2026 01:57:05 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Status
- `qa:https` remains green on latest generated artifacts (338 HTML files).
- HTTPS remains healthy on apex; `www` continues redirecting to HTTPS apex.
- Latest deploy freshness advanced to `Last-Modified: 01:57:05 UTC`.

## Evidence delta — 2026-02-18 02:25 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 341 HTML files.
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
185.199.111.153
185.199.110.153
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

### HTTPS behavior (live)
```bash
curl -I https://aitraining.directory
HTTP/2 200
server: GitHub.com
last-modified: Wed, 18 Feb 2026 02:12:01 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

Status: HTTPS remains healthy (Let's Encrypt active), apex serves 200, and `www` redirects to HTTPS apex.

---

## Evidence delta — 2026-02-18 02:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 344 HTML files.
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 02:26:25 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Readiness summary (current)
- HTTPS remains healthy on apex (`HTTP/2 200`) with valid Let's Encrypt chain.
- `https://www` continues to redirect cleanly to HTTPS apex.
- Static-site HTTPS QA remains green at 344 generated HTML files.

---

## Evidence delta — 2026-02-18 02:57 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 347 HTML files.
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 02:41:20 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Readiness summary (current)
- HTTPS remains healthy on apex (`HTTP/2 200`) with valid Let's Encrypt chain.
- `https://www` continues to redirect cleanly to HTTPS apex.
- Static-site HTTPS QA remains green at 347 generated HTML files.
## 2026-02-18 03:10 UTC Evidence Delta

```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 350 HTML files.

curl -I https://aitraining.directory | sed -n '1,6p'
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Wed, 18 Feb 2026 02:57:42 GMT
access-control-allow-origin: *
etag: "69952aa6-501b"

curl -I https://www.aitraining.directory | sed -n '1,8p'
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: 4A74:653D7:6FFCFB:711D4D:6995269A
accept-ranges: bytes
age: 1805
date: Wed, 18 Feb 2026 03:10:31 GMT

echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```


---

## Evidence delta — 2026-02-18 03:25 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 353 HTML files.
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

echo | openssl s_client -connect www.aitraining.directory:443 -servername www.aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 03:11:58 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains healthy end-to-end (apex returns `HTTP/2 200`; `www` redirects to HTTPS apex).
- TLS is still issued by Let's Encrypt (`R12`) with active validity window through 2026-05-18.
- Deploy freshness advanced (`Last-Modified` now `03:11:58 UTC`).

---

## Evidence delta — 2026-02-18 03:42 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 356 HTML files.
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
185.199.111.153
185.199.109.153
185.199.108.153
```

### TLS certificate served now
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### HTTPS behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
last-modified: Wed, 18 Feb 2026 03:41:43 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
location: https://aitraining.directory/
```

### Current delta summary
- HTTPS remains healthy end-to-end (apex returns `HTTP/2 200`; `www` redirects to HTTPS apex).
- TLS remains valid via Let's Encrypt (`R12`) with active validity window through 2026-05-18.
- Deploy freshness advanced (`Last-Modified` now `03:41:43 UTC`).
## Evidence delta — 2026-02-18 03:56 UTC

```bash
npm run qa:https
✅ HTTPS readiness QA passed
Checked 359 HTML files.

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

echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT

curl -I https://aitraining.directory | head -n 8
HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Wed, 18 Feb 2026 03:43:49 GMT
access-control-allow-origin: *
etag: "69953575-501b"
expires: Wed, 18 Feb 2026 04:05:41 GMT
cache-control: max-age=600

curl -I https://www.aitraining.directory | head -n 8
HTTP/2 301 
server: GitHub.com
content-type: text/html
location: https://aitraining.directory/
x-github-request-id: E882:1FE330:830B65:845ACD:69953533
accept-ranges: bytes
age: 778
date: Wed, 18 Feb 2026 03:55:41 GMT
```

## Evidence delta — 2026-02-18 04:12 UTC

### Build-level HTTPS QA
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 362 HTML files.
```

### Live HTTPS + redirect checks
```bash
curl -I https://aitraining.directory/
HTTP/2 200

curl -I https://www.aitraining.directory/
HTTP/2 301
location: https://aitraining.directory/
```

### TLS certificate snapshot
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### Deploy freshness signal
```bash
curl -I https://aitraining.directory/
Last-Modified: Wed, 18 Feb 2026 03:56:44 GMT
```

### Status
- HTTPS remains healthy on apex (`HTTP/2 200`) and `www` still canonical-redirects to apex over HTTPS.
- Certificate coverage remains active via Let's Encrypt (`R12`) and continues to validate this deployment path.

## Evidence delta — 2026-02-18 04:26 UTC

### Build-level HTTPS QA
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 365 HTML files.
```

### Live HTTPS + redirect checks
```bash
curl -I https://aitraining.directory/ | head -n 8
HTTP/2 200
last-modified: Wed, 18 Feb 2026 04:13:30 GMT

curl -I https://www.aitraining.directory/ | head -n 8
HTTP/2 301
location: https://aitraining.directory/
```

### TLS certificate snapshot
```bash
echo | openssl s_client -connect aitraining.directory:443 -servername aitraining.directory 2>/dev/null | openssl x509 -noout -issuer -subject -dates
issuer=C = US, O = Let's Encrypt, CN = R12
subject=CN = www.aitraining.directory
notBefore=Feb 17 09:20:45 2026 GMT
notAfter=May 18 09:20:44 2026 GMT
```

### Status
- HTTPS remains healthy on apex (`HTTP/2 200`) and `www` still canonical-redirects to apex over HTTPS.
- TLS certificate chain remains valid with Let's Encrypt `R12` and no hostname mismatch.
- Deploy freshness advanced (`Last-Modified: Wed, 18 Feb 2026 04:13:30 GMT`).

---

## Evidence delta — 2026-02-18 04:40 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 368 HTML files.
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
185.199.110.153
185.199.111.153
185.199.109.153
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

### HTTPS validation tests
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Wed, 18 Feb 2026 04:27:37 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/
```

### Readiness summary delta
- HTTPS remains valid and serving with Let's Encrypt `R12`; apex returns `HTTP/2 200` and `www` correctly redirects to apex over HTTPS.
- Deploy freshness advanced (`Last-Modified: Wed, 18 Feb 2026 04:27:37 GMT`).

---

## Evidence delta — 2026-02-18 04:56 UTC

### Build-level HTTPS QA (post-change)
```bash
npm run qa:https

✅ HTTPS readiness QA passed
Checked 371 HTML files.
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

### HTTPS/HTTP behavior
```bash
curl -I https://aitraining.directory
HTTP/2 200
Last-Modified: Wed, 18 Feb 2026 04:42:04 GMT

curl -I https://www.aitraining.directory
HTTP/2 301
Location: https://aitraining.directory/

curl -I http://aitraining.directory
HTTP/1.1 200 OK
Last-Modified: Wed, 18 Feb 2026 04:42:04 GMT

curl -I http://www.aitraining.directory
HTTP/1.1 301 Moved Permanently
Location: http://aitraining.directory/
```

### Status
- HTTPS remains healthy (`HTTP/2 200` on apex, valid Let's Encrypt chain).
- `www` continues redirecting to apex over HTTPS as expected.
- HTTP behavior remains active (`200` apex + `301` www→apex) with current Last-Modified freshness at `04:42:04 UTC`.
