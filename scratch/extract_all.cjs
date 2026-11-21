const fs = require('fs');

// 1. Inspect all 20 puppies from page__puppies.html
const phtml = fs.readFileSync('page__puppies.html', 'utf8');
const pmatches = [...phtml.matchAll(/<a[^>]*class="[^"]*tp-sketch[^"]*"[^>]*aria-label="([^"]+)"[^>]*href="(\/puppies\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];

console.log('Puppies extracted via aria-label:', pmatches.length);
const puppies = pmatches.map(m => {
  const aria = m[1];
  const href = m[2];
  const inner = m[3];
  const name = inner.match(/tp-sketch__name[^>]*>([^<]+)/)?.[1]?.trim() || '';
  const img = inner.match(/src="([^"]+)"/)?.[1] || '';
  const hasVideo = inner.includes('video') || inner.includes('play');
  const goneHome = inner.includes('gone home');
  return { aria, href, name, img, hasVideo, goneHome };
});
console.log(JSON.stringify(puppies, null, 2));

// 2. Inspect page__faq.html
const fhtml = fs.readFileSync('page__faq.html', 'utf8');
console.log('\n--- FAQ TAGS / CLASSES ---');
const faqClasses = [...new Set(fhtml.match(/class="[^"]*faq[^"]*"/gi) || [])];
console.log('FAQ classes:', faqClasses);

// Search for question marks in page__faq.html
const questions = [...fhtml.matchAll(/<h[2-4][^>]*>([^<]*\?[^<]*)<\/h[2-4]>/g)];
console.log('Questions found:', questions.length);
questions.forEach(q => console.log('Q:', q[1]));

// Let's find sections or accordions in page__faq.html
const buttonOrSummary = [...fhtml.matchAll(/<(?:summary|button)[^>]*>([\s\S]*?)<\/(?:summary|button)>/g)];
console.log('Button/Summary count:', buttonOrSummary.length);
buttonOrSummary.forEach((b, i) => {
  if (i < 15) console.log('Btn/Sum:', b[1].replace(/<[^>]+>/g, '').trim());
});

// 3. Inspect page__happy-families.html
const famhtml = fs.readFileSync('page__happy-families.html', 'utf8');
console.log('\n--- HAPPY FAMILIES ---');
const famCards = [...famhtml.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/g)];
console.log('Article count:', famCards.length);
if (famCards.length === 0) {
  // Let's check other tags in happy families
  const quotes = [...famhtml.matchAll(/“([^”]+)”/g)];
  console.log('Quotes in happy families:', quotes.length);
  quotes.forEach((q, i) => console.log(`Q${i+1}:`, q[1]));
}
