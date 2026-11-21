# Loom Video Presentation Script — TeddyPups Website Clone
**Duration:** 5–8 minutes  
**Presenter:** Frontend / Full-Stack Engineer  
**Project:** TeddyPups U.A.E. Clone (Blutec AI Technical Assignment)

---

### [00:00 - 00:45] 1. Introduction & Mission
- *"Hello everyone! Today I'm presenting my technical assignment for Blutec AI: a complete, production-ready clone of the TeddyPups reference website (puppy.instabizweb.com)."*
- *"My objective was to achieve maximum visual and functional fidelity—not just recreating a superficial homepage, but implementing every page, route, filter, modal, responsive layout, and interaction."*

---

### [00:45 - 01:45] 2. Reference Audit & Architectural Approach
- *"Before writing any code, I audited the reference website. The original is a Next.js pet store application with a very distinctive warm, playful design language featuring custom quilt scallop dividers, curved door frames for puppies, and custom fonts."*
- *"For this project, I engineered the clone using **React 19**, **Vite 8**, **Tailwind CSS v4**, and **React Router v7**."*
- *"I established a modular architecture separating common UI components, data structures, and pages."*

---

### [01:45 - 03:15] 3. UI/UX & Homepage Demonstration
- *(Screen: Showcase Homepage)*
- *"Notice the fixed header with the custom scallop hem divider at the bottom. As we scroll, it dynamically adapts with a backdrop blur."*
- *"The Hero section features the exact typography pairing—Nunito for our plush headings and Caveat for our playful handwritten scrawls like 'every puppy is family'."*
- *"Here is the puppy lineup stage peeking up from the quilt border. Hovering reveals smooth scale transitions."*
- *"Further down, we have 'Meet the pups', the 'Two Adoption Paths' comparing local showroom visits with imported Korean teacup puppies, our 4-step adoption timeline, 6 trust guarantees, client reviews, FAQ preview, and the final CTA."*

---

### [03:15 - 04:45] 4. Deep Page Features: Available Puppies & Detail View
- *(Screen: Navigate to /puppies)*
- *"On the Available Puppies page, we have our interactive filter controls. Notice how filtering by 'Local Showroom' or 'Imported', or selecting specific breeds like Maltipoo or Pomeranian updates the view seamlessly through URL search parameters."*
- *(Screen: Click on 'Max')*
- *"Opening Max's profile brings us to `/puppies/maltipoo-max-male`. Here we have the full photo gallery, quick specification badges (gender, age, health clearance, microchip status), a full bio, and related puppy recommendations."*
- *"Crucially, clicking 'Enquire on WhatsApp' opens WhatsApp with a pre-encoded message asking specifically about Max and his breed."*

---

### [04:45 - 05:45] 5. Secondary Pages & Form Validation
- *(Screen: Navigate to /happy-families, /how-it-works, /faq, /contact)*
- *"The **Happy Families** page displays client testimonials with 5-paw ratings and a grid of real puppy moments."*
- *"The **How It Works** page breaks down the adoption protocols and jumps directly to the `#delivery` section covering UAE VIP Chauffeur and international flights."*
- *"The **FAQ** page groups questions into clean accordions with smooth expand/collapse animations."*
- *"Finally, on the **Contact** page, we have an interactive contact form with complete client-side validation for email formats and required fields, complete with instant success feedback."*

---

### [05:45 - 06:45] 6. Mobile Responsiveness & Technical Verification
- *(Screen: Toggle Chrome DevTools to Mobile 375px)*
- *"Let's test mobile responsiveness. Everything adapts without horizontal scrolling or broken touch targets."*
- *"Clicking the mobile Menu button opens the full-screen warm honey drawer with large plush links matching the reference mobile drawer."*
- *"The project builds with zero errors: `npm run build` completes in approximately 1 second and produces an optimized production bundle."*

---

### [06:45 - 07:30] 7. Conclusion & Deployment
- *"The project is fully pre-configured for Vercel deployment with SPA fallback rewrites in `vercel.json`."*
- *"All code, audit documents, design system specs, and testing reports are organized in the repository. Thank you for your time, and I look forward to your questions!"*
