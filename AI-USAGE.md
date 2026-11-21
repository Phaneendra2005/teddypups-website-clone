# AI Tools & Usage Documentation — TeddyPups Clone

This document details the usage of AI tools during the development of the TeddyPups website clone in accordance with Blutec AI technical assignment guidelines.

---

## 1. AI Tools Utilized
- **AI Platform:** Google Antigravity (powered by Gemini & Claude models)
- **Role:** Pair Programmer, Code Scaffolder, Technical Auditor, and QA Assistant

---

## 2. Prompts & Tasks Assigned to AI

### Prompt 1: Reference Website Content & Structural Extraction
- **Task:** Extract raw HTML payloads from `https://puppy.instabizweb.com/`, parse all navigation links, content hierarchy, image endpoints, and color palette tokens.
- **Output:** Extracted 15 available puppy profiles, 5 adopted puppies, client testimonial quotes, categorized FAQs, showroom address, and contact details.

### Prompt 2: Design System & Color Palette Mapping
- **Task:** Analyze CSS class structures and extract recurring design tokens (milk `#fffdf8`, honey `#fbe3b4`, toffee `#e4a352`, cocoa `#2a170e`, cinnamon `#a24a1a`) and font usage (`Nunito` and `Caveat`).
- **Output:** Created `src/index.css` with Tailwind CSS v4 variables, custom button styles, and SVG scallop hem borders.

### Prompt 3: Component & Page Implementation
- **Task:** Scaffold modular React components for Navbar, Footer, PuppyCard, Hero, MeetThePups, TwoPaths, JourneyPreview, TrustSection, FamiliesPreview, FAQPreview, CTASection, and all route views.
- **Output:** Implemented production-ready React JSX files with semantic HTML and accessible controls.

### Prompt 4: Documentation Generation
- **Task:** Create technical documentation files including `REFERENCE_AUDIT.md`, `PAGE_INVENTORY.md`, `DESIGN_SYSTEM.md`, `IMPLEMENTATION_PLAN.md`, `TESTING_REPORT.md`, and `LOOM_PRESENTATION_SCRIPT.md`.
- **Output:** Comprehensive markdown files documenting the full project lifecycle.

---

## 3. Human Review & Engineering Decisions
While AI assisted in rapid scaffolding and data parsing, critical engineering interventions were applied:
1. **Dependency Resolution:** Resolving React 19 / Tailwind CSS v4 peer dependency overlaps and properly configuring `@vitejs/plugin-react` and `@tailwindcss/vite`.
2. **Interactive State & Routing:** Designing URL search parameters (`searchParams`) for the available puppies filter system to ensure filter states are bookmarkable and shareable.
3. **Responsive Mobile Menu:** Implementing custom full-screen drawer animations and backdrop blur toggles on window scroll.
4. **Build Verification:** Ensuring zero TypeScript or JSX bundling errors during `npm run build`.

---

## 4. Security & Privacy
- No API keys, secret credentials, or personal access tokens are stored or committed in the repository.
- Publicly accessible business contact information and media assets from the reference website were used strictly for assignment reproduction purposes.
