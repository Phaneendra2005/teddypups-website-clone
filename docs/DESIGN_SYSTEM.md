# Design System — TeddyPups U.A.E.

## 1. Color Palette Tokens

```css
:root {
  --milk: #fffdf8;         /* Page background canvas */
  --cream: #fff1d8;        /* Soft card tint */
  --honey: #fbe3b4;        /* Golden warm accent */
  --caramel: #f2be6b;      /* Highlights, paw icons */
  --toffee: #e4a352;       /* Decorative underlines */
  --cinnamon: #a24a1a;     /* Accent titles & tags */
  --cocoa: #2a170e;        /* Primary typography & dark buttons */
  --blush: #f9b9a6;        /* Subtle pink cheek accent */
  --whatsapp: #25D366;     /* Official WhatsApp CTA */
}
```

## 2. Typography

- **Plush / Display Font:** `Nunito`, 800 weight with `-0.02em` letter-spacing. Provides a friendly, rounded, high-end look matching the reference site's custom plush typography.
- **Scrawl / Accent Font:** `Caveat`, cursive handwritten accent font. Used for emotional micro-copy such as `"every puppy is family"`, `"where to, friend?"`, and `"precious moments"`.
- **Body Text:** `Nunito`, 500-600 weight, ensuring optimal readability across mobile and desktop.

## 3. UI Components

### Buttons
- `.btn-primary`: Dark cocoa background (`#2a170e`), milk text (`#fffdf8`), fully rounded pill shape (`rounded-full`), hover shadow and smooth scale.
- `.btn-ghost`: Transparent background, cocoa border (`border-2 border-[#2a170e]`), hover fill.
- `.btn-whatsapp`: Brand green (`#25D366`), white text, accompanied by WhatsApp icon.

### Cards
- **Puppy Card:** 4:3 arched photo container, top tags for origin and availability, clean meta details (gender, age), and dual CTA (meet profile + WhatsApp).
- **Testimonial Card:** 5-paw rating header, italic quote, author avatar with border, breed tag, and location.

### Scallop Divider
- SVG pattern scallop hem recreating the hand-stitched quilt aesthetic of the original brand.
