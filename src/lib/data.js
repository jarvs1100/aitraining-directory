import listings from '../../data/listings.json';

export const allListings = listings;

export function slugify(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getCategorySlug(category) {
  return slugify(category);
}

export function getCategories() {
  const map = new Map();
  for (const item of allListings) {
    const slug = getCategorySlug(item.category);
    if (!map.has(slug)) {
      map.set(slug, { slug, name: item.category, count: 0 });
    }
    map.get(slug).count += 1;
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryBySlug(slug) {
  return getCategories().find((c) => c.slug === slug);
}

export function getListingsByCategorySlug(slug) {
  return allListings.filter((l) => getCategorySlug(l.category) === slug);
}
