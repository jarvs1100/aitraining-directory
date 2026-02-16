import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { localizedLandingPages } from '../src/lib/i18n.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'docs');

const errors = [];
const warnings = [];

const requiredLocales = ['pl', 'cs', 'sk', 'hu', 'de', 'es'];
const requiredKeys = ['ai-training-tools', 'sop-video'];

for (const key of requiredKeys) {
  const pages = localizedLandingPages.filter((p) => p.key === key);
  const locales = new Set(pages.map((p) => p.locale));

  for (const locale of requiredLocales) {
    if (!locales.has(locale)) {
      errors.push(`Missing locale '${locale}' for key '${key}'`);
    }
  }
}

const slugSeen = new Set();
for (const page of localizedLandingPages) {
  const slugKey = `${page.locale}:${page.slug}`;
  if (slugSeen.has(slugKey)) {
    errors.push(`Duplicate localized slug '${slugKey}'`);
  }
  slugSeen.add(slugKey);

  if (!page.title || page.title.length < 20) {
    warnings.push(`Short title on ${slugKey}`);
  }
  if (!page.description || page.description.length < 70) {
    warnings.push(`Short description on ${slugKey}`);
  }

  const builtPath = path.join(docsRoot, page.locale, page.slug, 'index.html');
  if (!fs.existsSync(builtPath)) {
    errors.push(`Missing built file: docs/${page.locale}/${page.slug}/index.html`);
  }
}

if (errors.length) {
  console.error('\n❌ i18n QA failed');
  for (const err of errors) console.error(`- ${err}`);
  if (warnings.length) {
    console.error('\n⚠️ Warnings');
    for (const warning of warnings) console.error(`- ${warning}`);
  }
  process.exit(1);
}

console.log('\n✅ i18n QA passed');
console.log(`Checked ${localizedLandingPages.length} localized landing pages.`);
if (warnings.length) {
  console.log('\n⚠️ Warnings');
  for (const warning of warnings) console.log(`- ${warning}`);
}
