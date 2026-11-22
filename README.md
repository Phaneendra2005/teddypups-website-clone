# TeddyPups U.A.E. - Website Clone

A responsive, multi-page website recreation of the [TeddyPups reference website](https://puppy.instabizweb.com/), developed as part of the **Blutec AI Technical Assignment**.

The project focuses on recreating the reference website's visual design, page structure, navigation, responsive layouts, and interactive user experience using modern frontend technologies.

## 🔗 Project Links

| Resource | Link |
|---|---|
| Live Website | [https://teddypups-website-clone-zeta.vercel.app/](https://teddypups-website-clone-zeta.vercel.app/) |
| GitHub Repository | [teddypups-website-clone](https://github.com/Phaneendra2005/teddypups-website-clone) |
| Reference Website | [TeddyPups U.A.E.](https://puppy.instabizweb.com/) |

## ✨ Features

### 1. Complete Multi-Page Website

The implementation includes the following pages:

- **Home (`/`)** — Hero section, featured puppies, adoption paths, journey overview, trust section, testimonials preview, FAQ preview, and call-to-action sections.
- **Available Puppies (`/puppies`)** — Puppy catalog with breed and origin filters.
- **Puppy Details (`/puppies/:slug`)** — Individual puppy information, image gallery, specifications, description, and contextual WhatsApp enquiry links.
- **Happy Families (`/happy-families`)** — Testimonials and adopted puppy gallery.
- **How It Works (`/how-it-works`)** — Information about the adoption process and available adoption paths.
- **FAQ (`/faq`)** — Categorized questions with interactive accordion functionality.
- **Visit & Contact (`/contact`)** — Contact information, enquiry form with client-side validation, showroom details, and contact options.
- **Gone Home (`/gone-home`)** — Gallery of adopted puppies.
- **404 Not Found (`*`)** — Custom puppy-themed error page with navigation links.

### 2. UI & User Experience

- Responsive layouts for desktop, tablet, and mobile screens.
- Custom puppy-paw cursor and animated paw trail.
- Responsive navigation and mobile menu.
- Scroll-aware header with backdrop styling.
- Custom SVG decorative elements.
- Consistent typography using Nunito and Caveat.
- Interactive buttons, cards, navigation links, and FAQ accordions.
- Context-aware WhatsApp enquiry links with pre-filled messages.
- Consistent styling and reusable UI components.

### 3. Puppy Catalog

- Catalog containing 15 puppy entries.
- Breed-based filtering.
- Origin-based filtering (Local and Imported).
- URL-driven filter state.
- Individual puppy detail routes.
- Related puppy recommendations.

*Note: Puppy catalog and testimonial content should be treated as project data unless independently verified against the original business.*

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based frontend development |
| Vite 8 | Development server and build tooling |
| Tailwind CSS v4 | Styling and responsive layouts |
| React Router v7 | Client-side routing |
| Lucide React | Icons |
| Custom SVG | Puppy-paw cursor and decorative elements |
| JavaScript | Application logic |
| Vercel | Hosting and deployment |
| Git & GitHub | Version control and source code management |

## 📁 Project Structure

```text
teddypups-clone/
│
├── docs/
│   ├── REFERENCE_AUDIT.md
│   ├── PAGE_INVENTORY.md
│   ├── DESIGN_SYSTEM.md
│   ├── IMPLEMENTATION_PLAN.md
│   ├── TESTING_REPORT.md
│   └── LOOM_PRESENTATION_SCRIPT.md
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── puppies/
│   │
│   ├── data/
│   │   ├── puppies.js
│   │   ├── testimonials.js
│   │   └── faqs.js
│   │
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
│   │
│   ├── utils/
│   │   └── whatsapp.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vercel.json
├── AI-USAGE.md
└── README.md
```

*The structure above describes the intended organization; refer to the actual repository for the complete current file listing.*

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Phaneendra2005/teddypups-website-clone.git
```

### 2. Navigate to the project directory

```bash
cd teddypups-website-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL provided by Vite, typically:

```text
http://localhost:5173
```

### 5. Create a production build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

### 6. Preview the production build

```bash
npm run preview
```

## 🌐 Deployment

The website is deployed using Vercel and connected to the GitHub repository.

**Live URL:**  
https://teddypups-website-clone-zeta.vercel.app/

### Deployment Configuration

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Root Directory | `./` |

The project includes a `vercel.json` configuration for client-side routing:

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

This allows application routes to load through the React Router application when accessed directly.

## 🧪 Testing & Validation

The following areas were included in the testing process:

- Production build using `npm run build`.
- Navigation across the implemented pages.
- Direct route access and page refresh.
- Puppy catalog filtering.
- Individual puppy detail navigation.
- FAQ accordion interactions.
- Contact form client-side validation.
- WhatsApp link behavior.
- Responsive layout checks across desktop and mobile viewport sizes.
- Custom cursor and animation behavior.

For detailed testing information, see:

[`docs/TESTING_REPORT.md`](docs/TESTING_REPORT.md)

## 🤖 AI-Assisted Development

Google Antigravity was used as an AI-assisted development tool during the implementation process.

AI assistance was used for:

- Reference website analysis and page planning.
- Component and page implementation.
- Responsive layout refinements.
- Styling and visual adjustments.
- Interactive functionality.
- Debugging and development improvements.
- Documentation preparation.

The generated implementation was reviewed and tested through browser checks and production builds.

Additional information about AI tool usage and development prompts is available in:

[`AI-USAGE.md`](AI-USAGE.md)

## 🎯 Project Objective

The objective of this assignment was to recreate the reference website while demonstrating practical frontend development skills, including:

- React component architecture.
- Responsive web design.
- Client-side routing.
- Interactive UI implementation.
- Reusable components.
- Git-based version control.
- Production build and deployment.

## 👨‍💻 Developer

**Phaneendra**

- GitHub: [@Phaneendra2005](https://github.com/Phaneendra2005)
- Project Repository: [TeddyPups Website Clone](https://github.com/Phaneendra2005/teddypups-website-clone)
- Live Website: [TeddyPups U.A.E. Clone](https://teddypups-website-clone-zeta.vercel.app/)

---

**Developed as part of the Blutec AI Technical Assignment.**
