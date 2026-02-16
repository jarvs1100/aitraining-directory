// Usage:
// node scripts/normalize_from_csv.js input.csv > data/listings.json
// Minimal normalizer for Outscraper-like CSV exports.

const fs = require('fs');
const path = require('path');

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/normalize_from_csv.js <input.csv>');
  process.exit(1);
}

const raw = fs.readFileSync(path.resolve(file), 'utf8').split(/\r?\n/).filter(Boolean);
const headers = raw.shift().split(',').map(h => h.trim().toLowerCase());
const idx = (name) => headers.findIndex(h => h.includes(name));

function slugify(s){
  return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,80);
}

const out = [];
for (const line of raw) {
  const cols = line.split(',');
  const name = cols[idx('name')] || cols[0] || '';
  const website = cols[idx('website')] || cols[idx('domain')] || '';
  if (!name || !website) continue;
  out.push({
    slug: slugify(name),
    name: name.trim(),
    website: website.trim().startsWith('http') ? website.trim() : `https://${website.trim()}`,
    category: (cols[idx('category')] || 'General').trim(),
    pricing: 'Unknown',
    summary: (cols[idx('description')] || '').trim() || 'No summary yet.',
    features: []
  });
}

// simple dedupe by website
const dedup = [];
const seen = new Set();
for (const r of out) {
  const key = r.website.toLowerCase();
  if (seen.has(key)) continue;
  seen.add(key);
  dedup.push(r);
}

process.stdout.write(JSON.stringify(dedup, null, 2));
