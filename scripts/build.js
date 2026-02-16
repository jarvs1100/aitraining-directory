const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'data', 'listings.json');
const out = path.join(root, 'site');
const listingsDir = path.join(out, 'listings');

const listings = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function ensure(dir){ fs.mkdirSync(dir,{recursive:true}); }
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function layout(title, body){
  return `<!doctype html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(title)}</title>
<style>
body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:980px;margin:0 auto;padding:24px;color:#111;line-height:1.5}
a{color:#0b57d0;text-decoration:none}a:hover{text-decoration:underline}
.card{border:1px solid #e6e6e6;border-radius:12px;padding:16px;margin:10px 0}
.badge{display:inline-block;background:#f3f5f7;border-radius:999px;padding:4px 10px;font-size:12px;margin-right:6px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px}
header{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}
.small{color:#666;font-size:14px}
.btn{display:inline-block;background:#111;color:#fff;border-radius:8px;padding:8px 12px}
</style></head><body>${body}</body></html>`;
}

ensure(out); ensure(listingsDir);

const categories = [...new Set(listings.map(x=>x.category))].sort();

// index
const cards = listings.map(x => `<div class="card"><div><span class="badge">${esc(x.category)}</span><span class="badge">${esc(x.pricing)}</span></div><h3><a href="./listings/${esc(x.slug)}.html">${esc(x.name)}</a></h3><p>${esc(x.summary)}</p><a href="${esc(x.website)}" target="_blank" rel="noopener">Visit site ↗</a></div>`).join('\n');
const categoryLinks = categories.map(c=>`<a class="badge" href="./category-${encodeURIComponent(c)}.html">${esc(c)}</a>`).join(' ');

const indexBody = `<header><div><h1>AI Training Directory</h1><p class="small">Curated AI tools for employee training, learning & development, and corporate education.</p></div><a class="btn" href="./claim.html">Submit a tool</a></header><p>${categoryLinks}</p><div class="grid">${cards}</div><hr/><p class="small">Generated ${new Date().toISOString()} • ${listings.length} listings</p>`;
fs.writeFileSync(path.join(out,'index.html'), layout('AI Training Directory - AI Tools for Learning & Development', indexBody));

// categories
for(const c of categories){
  const rows = listings.filter(x=>x.category===c).map(x=>`<li><a href="./listings/${x.slug}.html">${esc(x.name)}</a> — ${esc(x.pricing)}</li>`).join('');
  const body = `<p><a href="./index.html">← Back</a></p><h1>${esc(c)}</h1><ul>${rows}</ul>`;
  fs.writeFileSync(path.join(out,`category-${encodeURIComponent(c)}.html`), layout(`${c} | Directory`, body));
}

// listing pages
for(const x of listings){
  const features = x.features.map(f=>`<li>${esc(f)}</li>`).join('');
  const body = `<p><a href="../index.html">← Back to directory</a></p><h1>${esc(x.name)}</h1><p><span class="badge">${esc(x.category)}</span><span class="badge">${esc(x.pricing)}</span></p><p>${esc(x.summary)}</p><h3>Key features</h3><ul>${features}</ul><p><a class="btn" href="${esc(x.website)}" target="_blank" rel="noopener">Visit website ↗</a></p>`;
  fs.writeFileSync(path.join(listingsDir,`${x.slug}.html`), layout(`${x.name} | Directory`, body));
}

// claim page
const claim = `<p><a href="./index.html">← Back</a></p><h1>Submit or claim your AI training tool</h1><p>Email us your details for review.</p><ul><li>Tool name</li><li>Website URL</li><li>Category</li><li>Pricing model</li><li>One-paragraph description</li><li>Key features (3-5)</li></ul><p><a class="btn" href="mailto:submit@aitraining.directory?subject=Submit%20AI%20Training%20Tool">Submit via email</a></p>`;
fs.writeFileSync(path.join(out,'claim.html'), layout('Submit AI Training Tool', claim));

console.log(`Built ${listings.length} listings into ${out}`);
