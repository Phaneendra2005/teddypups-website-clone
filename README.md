# TeddyPups U.A.E. — Complete Website Clone
### Blutec AI Technical Assignment | Production-Ready React Clone

A complete, high-fidelity production-ready clone of the **[TeddyPups reference website](https://puppy.instabizweb.com/)**. Built with modern React, Vite, Tailwind CSS, and React Router to demonstrate senior full-stack frontend engineering, responsive design, and component architecture.

---

## 🌟 Key Features

1. **Complete Page Inventory:**
   - **Home (`/`):** Full hero section with puppy lineup stage, "Meet the pups" card showcase, Two Adoption Paths, Journey timeline, Trust section, Testimonial cards preview, FAQ preview, and primary CTA.
   - **Available Puppies (`/puppies`):** Complete catalog of 15 available puppies with real-time URL-driven filters for origin (Local vs Imported) and breed (Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu).
   - **Puppy Detail (`/puppies/:slug`):** High-res photo gallery, quick spec badges, veterinary health certification, bio, contextual WhatsApp enquiry button, and related puppy recommendations.
   - **Happy Families (`/happy-families`):** Client reviews with 5-paw ratings, featured story banner, and adopted puppy photo gallery.
   - **How It Works (`/how-it-works`):** Step-by-step breakdown of local vs imported adoption paths, `#delivery` section covering showroom handover and VIP UAE chauffeur transit, and "What comes with every puppy" checklist.
   - **FAQ (`/faq`):** Categorized accordion interface with smooth expand/collapse toggles.
   - **Visit & Contact (`/contact`):** Interactive contact form with live validation, showroom details, opening hours, Google Maps location, and WhatsApp hotline.
   - **Gone Home (`/gone-home`):** Archive of adopted puppies and their new families.
   - **404 Not Found (`*`):** Cute puppy-themed 404 page with recovery routes.

2. **Visual & Interaction Fidelity:**
   - Custom quilt scallop hem divider SVG patterns on header and footer transitions.
   - Dual typography system pairing `Nunito` (plush headings) and `Caveat` (playful handwritten accents).
   - Scroll-aware header with dynamic backdrop blur.
   - Fullscreen mobile navigation overlay drawer.
   - Context-aware WhatsApp link generation with pre-encoded puppy names and messages.

---

## 🛠️ Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 + Custom design tokens
- **Routing:** React Router v7 (SPA routing with direct URL support)
- **Icons:** Lucide React + Custom Paw SVG
- **Deployment:** Vercel (pre-configured with SPA rewrites in `vercel.json`)

---

## 📁 Project Structure

```
teddypups-clone/
├── docs/
│   ├── REFERENCE_AUDIT.md          # Complete reference website inspection
│   ├── PAGE_INVENTORY.md           # All discovered pages and sections
│   ├── DESIGN_SYSTEM.md            # Color tokens, typography, and UI specs
│   ├── IMPLEMENTATION_PLAN.md      # Architecture and engineering approach
│   ├── TESTING_REPORT.md           # QA test matrix and validation
│   └── LOOM_PRESENTATION_SCRIPT.md # 5–8 min technical walkthrough script
├── src/
│   ├── assets/                     # Static images and icons
│   ├── components/
│   │   ├── common/                 # Navbar, Footer, WhatsAppButton, PawIcon
│   │   ├── home/                   # Hero, MeetThePups, TwoPaths, JourneyPreview,
│   │   │                           # TrustSection, FamiliesPreview, FAQPreview, CTASection
│   │   └── puppies/                # PuppyCard
│   ├── data/
│   │   ├── puppies.js              # 15 available puppies + 5 gone-home puppies
│   │   ├── testimonials.js         # Client reviews and gallery photos
│   │   └── faqs.js                 # Categorized questions & answers
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Puppies.jsx
│   │   ├── PuppyDetail.jsx
│   │   ├── HappyFamilies.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── GoneHome.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   └── whatsapp.js             # WhatsApp URL generator with message encoding
│   ├── App.jsx                     # Router config
│   ├── index.css                   # Tailwind v4 import & custom tokens
│   └── main.jsx                    # Root mount
├── index.html
├── package.json
├── vercel.json                     # SPA rewrite configuration
├── AI-USAGE.md                     # Transparent AI tool usage documentation
└── README.md
```

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js (version 18 or later recommended)
- npm or pnpm

### 1. Clone repository & install dependencies
```bash
git clone <your-github-repo-url>
cd teddypups-clone
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The production-ready artifacts will be generated in `/dist`.

### 4. Preview production build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

The project includes `vercel.json` configured for Single Page Applications (SPA):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploying via Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploying via GitHub:
1. Push this project to your GitHub repository.
2. In Vercel, click **Add New Project** and select your GitHub repository.
3. Keep default settings (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

---

## 🧪 Testing Summary

- ✅ **Build Status:** PASSED (0 errors, 0 warnings, build time ~1s)
- ✅ **Navigation & Routes:** Direct URL navigation verified for all 9 routes.
- ✅ **Responsive Design:** Verified on 1440px, 1024px, 768px, 375px, and 320px viewports.
- ✅ **Interactive Forms:** Client-side validation verified with error and success states.
- ✅ **Filters:** Origin and breed filtering verified with active URL parameters.

Detailed test results can be found in [`/docs/TESTING_REPORT.md`](file:///c:/teddypups-clone/docs/TESTING_REPORT.md).
