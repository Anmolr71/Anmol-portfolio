# Anmol Rathore — Data Analyst Portfolio

A premium, dark-themed personal portfolio built with Next.js 15, TypeScript,
Tailwind CSS, and Framer Motion. Visual direction inspired by the layout
rhythm of Brittany Chiang's portfolio (sticky sidebar, numbered sections,
mono accents) with a custom navy/teal identity.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Before you deploy

1. **Resume** — drop your PDF at `public/resume.pdf` (the Sidebar and Hero
   buttons already link to `/resume.pdf`).
2. **Content** — everything (nav, projects, skills, experience, education,
   certificates) lives in `lib/data.ts`. Edit that one file to update the
   whole site.
3. **Socials** — update the GitHub/LinkedIn/email links in `lib/data.ts`.
4. **Project links** — replace the `github`, `demo`, and `caseStudy` `"#"`
   placeholders in `lib/data.ts` with real URLs.
5. **Contact form** — the form in `components/Contact.tsx` currently just
   shows a success state on submit. Wire `handleSubmit` up to your email
   provider of choice (Formspree, Resend, an API route, etc.).
6. **Metadata** — update `metadataBase` and Open Graph details in
   `app/layout.tsx` once you have a real domain.

## Structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx        Assembles Sidebar + all sections
  globals.css     Design tokens, focus states, reduced-motion handling
components/
  Sidebar.tsx           Sticky left sidebar with nav + socials
  Hero.tsx              Landing hero
  About.tsx             Bio + animated stats
  Skills.tsx            Skill category cards
  Projects.tsx          Featured project cards
  Experience.tsx        Vertical timeline
  Education.tsx         Education card
  Certificates.tsx      Certificate cards
  Contact.tsx           Contact form
  Counter.tsx           Animated number counter
  MagneticButton.tsx    Magnetic hover CTA button
  RevealOnScroll.tsx    Scroll-reveal wrapper (Framer Motion)
  ScrollProgress.tsx    Top scroll progress bar
  CursorSpotlight.tsx   Ambient cursor spotlight (desktop only)
  BackToTop.tsx         Back-to-top button
lib/
  data.ts         All site content in one place
```

## Notes

- Respects `prefers-reduced-motion`.
- Visible keyboard focus rings throughout.
- Fully responsive: sidebar collapses to a stacked header below `lg`.
- Colors: background `#0A192F`, cards `#112240`, accent `#64FFDA`, primary
  text `#CCD6F6`, secondary text `#8892B0` — all wired as Tailwind tokens in
  `tailwind.config.ts` (`navy`, `navy-light`, `accent`, `slate-lightest`,
  `slate`).
