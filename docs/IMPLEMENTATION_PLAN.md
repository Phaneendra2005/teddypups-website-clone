# Implementation Plan & Architecture — TeddyPups Clone

## 1. Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 + Custom design tokens
- **Routing:** React Router v7 (`BrowserRouter`, `Routes`, `Route`, `useSearchParams`, `useParams`)
- **Icons:** Lucide React (`Store`, `Plane`, `ShieldCheck`, `Heart`, `Phone`, `Mail`, `MapPin`, `Clock`, `Send`, etc.) + Custom inline Paw SVG
- **Deployment:** Vercel SPA configuration (`vercel.json` rewrites)

## 2. Component Architecture
```
src/
  assets/            # Static assets
  components/
    common/          # Navbar, Footer, WhatsAppButton, PawIcon
    home/            # Hero, MeetThePups, TwoPaths, JourneyPreview, TrustSection, FamiliesPreview, FAQPreview, CTASection
    puppies/         # PuppyCard
  data/
    puppies.js       # 15 available puppies + 5 gone-home puppies + photo links
    testimonials.js  # Client reviews & photo gallery links
    faqs.js          # Categorized questions & answers
  pages/
    Home.jsx         # Homepage
    Puppies.jsx      # Available puppies listing with filter controls
    PuppyDetail.jsx  # Individual puppy profile
    HappyFamilies.jsx# Client stories & gallery
    HowItWorks.jsx   # Adoption process & delivery breakdown
    FAQ.jsx          # Accordion FAQ page
    Contact.jsx      # Contact form with validation & showroom info
    GoneHome.jsx     # Adopted puppy archive
    NotFound.jsx     # 404 handler
  utils/
    whatsapp.js      # URL generator with pre-filled message encoding
  App.jsx            # Router setup
  main.jsx           # Mount root
  index.css          # Tailwind CSS imports & theme variables
```

## 3. Key Technical Decisions
1. **Direct Public Asset Preservation:** Exact media filenames and URLs from the reference site's Next.js image endpoint are maintained for 100% visual fidelity without broken links.
2. **Interactive State Handling:** Filter parameters in the Puppies listing are synchronized with `searchParams` for shareable URLs (`/puppies?origin=local`, `/puppies?breed=maltipoo`).
3. **Responsive Menu Overlay:** Fullscreen navigation drawer for mobile and tablet with clean animations and direct touch targets.
4. **Form Validation:** Client-side validation ensuring clean error states before submission display.
