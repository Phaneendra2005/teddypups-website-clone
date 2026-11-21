const fs = require('fs');

console.log('--- PUPPIES INSPECTION ---');
const phtml = fs.readFileSync('page__puppies.html', 'utf8');

const puppyCardRegex = /<a[^>]*href="(\/puppies\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
let m;
const puppies = [];
while ((m = puppyCardRegex.exec(phtml)) !== null) {
  const href = m[1];
  const inner = m[2];
  const name = inner.match(/tp-door__name[^>]*>([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  const meta = inner.match(/tp-door__meta[^>]*>([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  const price = inner.match(/tp-door__price[^>]*>([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  const img = inner.match(/src="([^"]+)"/i)?.[1] || '';
  const isVideo = inner.includes('video') || inner.includes('play') || inner.includes('tp-door__video');
  const goneHome = inner.includes('Gone home') || href.includes('gone') || inner.includes('tp-door--gone');
  
  puppies.push({ href, name, meta, price, img, isVideo, goneHome });
}
console.log('Puppies found:', puppies.length);
puppies.forEach((p, idx) => console.log(idx + 1, JSON.stringify(p)));

console.log('\n--- HOMEPAGE SECTIONS & HEADINGS ---');
const hhtml = fs.readFileSync('homepage_raw.html', 'utf8');
const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
let h2Match;
while ((h2Match = h2Regex.exec(hhtml)) !== null) {
  console.log('H2:', h2Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

console.log('\n--- TESTIMONIALS / HAPPY FAMILIES ---');
const fhtml = fs.readFileSync('page__happy-families.html', 'utf8');
console.log('Happy families page length:', fhtml.length);

console.log('\n--- FAQS ---');
const faqhtml = fs.readFileSync('page__faq.html', 'utf8');
console.log('FAQ page length:', faqhtml.length);
