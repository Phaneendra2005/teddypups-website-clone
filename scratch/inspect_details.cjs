const fs = require('fs');

const phtml = fs.readFileSync('page__puppies.html', 'utf8');

// Print first puppy card HTML
const cardMatch = phtml.match(/<a[^>]*href="\/puppies\/maltipoo-max-male"[^>]*>[\s\S]*?<\/a>/);
if (cardMatch) {
  console.log('--- SAMPLE PUPPY CARD HTML ---');
  console.log(cardMatch[0]);
}

// Print a gone home card HTML
const goneMatch = phtml.match(/<a[^>]*href="\/puppies\/pomeranian-ace-boy"[^>]*>[\s\S]*?<\/a>/);
if (goneMatch) {
  console.log('--- SAMPLE GONE HOME CARD HTML ---');
  console.log(goneMatch[0]);
}

// Print FAQ items from page__faq.html
const faqhtml = fs.readFileSync('page__faq.html', 'utf8');
const details = [...faqhtml.matchAll(/<details[\s\S]*?<\/details>/g)];
console.log('\n--- FAQ COUNT ---', details.length);
if (details.length > 0) {
  details.forEach((d, i) => {
    console.log(`\nFAQ ${i+1}:`);
    console.log(d[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  });
}

// Print Happy Families from page__happy-families.html
const famhtml = fs.readFileSync('page__happy-families.html', 'utf8');
console.log('\n--- HAPPY FAMILIES SAMPLES ---');
// Look for cards, testimonials, or reviews
const quotes = famhtml.match(/<blockquote[\s\S]*?<\/blockquote>/g) || famhtml.match(/<figure[\s\S]*?<\/figure>/g) || [];
console.log('Quotes/Figures count:', quotes.length);
