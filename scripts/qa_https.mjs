import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'docs');

const errors = [];
const warnings = [];

if (!fs.existsSync(docsRoot)) {
  console.error('❌ Missing docs/ build output. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(docsRoot);

if (!htmlFiles.length) {
  errors.push('No HTML files found in docs/.');
}

const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i;
const ogUrlRegex = /<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i;
const httpRegex = /http:\/\/[^\s"'<>)]*/gi;

for (const file of htmlFiles) {
  const rel = path.relative(docsRoot, file);
  const html = fs.readFileSync(file, 'utf8');

  const canonicalMatch = html.match(canonicalRegex);
  if (!canonicalMatch) {
    warnings.push(`Missing canonical tag: ${rel}`);
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.startsWith('https://aitraining.directory/')) {
      errors.push(`Non-HTTPS or off-domain canonical in ${rel}: ${canonical}`);
    }
  }

  const ogMatch = html.match(ogUrlRegex);
  if (ogMatch && !ogMatch[1].startsWith('https://aitraining.directory/')) {
    errors.push(`Non-HTTPS or off-domain og:url in ${rel}: ${ogMatch[1]}`);
  }

  const httpLinks = html.match(httpRegex) || [];
  for (const link of httpLinks) {
    if (link.startsWith('http://localhost') || link.startsWith('http://127.0.0.1')) continue;
    if (link === 'http://www.w3.org/2000/svg') continue;
    errors.push(`Insecure http:// link in ${rel}: ${link}`);
  }
}

const robotsPath = path.join(docsRoot, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  errors.push('Missing docs/robots.txt');
} else {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const hasHttpsSitemap = /Sitemap:\s*https:\/\/aitraining\.directory\/sitemap-index\.xml/i.test(robots);
  const hasHttpsHost = /Host:\s*https:\/\/aitraining\.directory/i.test(robots);
  if (!hasHttpsSitemap) errors.push('robots.txt missing HTTPS sitemap-index.xml reference');
  if (!hasHttpsHost) errors.push('robots.txt missing HTTPS host reference');
}

const sitemapPath = path.join(docsRoot, 'sitemap-0.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    if (!loc.startsWith('https://aitraining.directory/')) {
      errors.push(`Non-HTTPS sitemap URL: ${loc}`);
    }
  }
} else {
  warnings.push('Missing docs/sitemap-0.xml (Astro may emit split files depending on routes).');
}

if (errors.length) {
  console.error('\n❌ HTTPS readiness QA failed');
  for (const e of errors) console.error(`- ${e}`);
  if (warnings.length) {
    console.error('\n⚠️ Warnings');
    for (const w of warnings) console.error(`- ${w}`);
  }
  process.exit(1);
}

console.log('\n✅ HTTPS readiness QA passed');
console.log(`Checked ${htmlFiles.length} HTML files.`);
if (warnings.length) {
  console.log('\n⚠️ Warnings');
  for (const w of warnings) console.log(`- ${w}`);
}
