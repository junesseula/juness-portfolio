# Juness Bulloda — Portfolio

A React + Vite portfolio site with four pages:

- `/` — Landing page (hero, value props, selected work, testimonial)
- `/case-studies` — Case studies index
- `/case-studies/:slug` — Individual case study (PayZen, Aware, PlanWell)
- `/about` — About page (bio, journey, skills, contact)

Content for the three case studies is original copy generated for this
project — swap in real project details, metrics, and imagery whenever
you're ready.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Where to edit things

- Site copy (nav, footer, stats, skills, bio): `src/data/content.js`
- Case study content: `src/data/caseStudies.js`
- Design tokens (colors, fonts, spacing): `src/styles/global.css` (`:root` at the top)
- Pages: `src/pages/`
- Shared nav/footer: `src/components/`

## Notes

- Contact email in `src/data/content.js` is a placeholder
  (`hello@junessbulloda.com`) — update it to your real address.
- Social links in the footer are placeholder `#` links — wire them up
  to your actual profiles.
- No build/runtime dependencies beyond React, React Router, and Vite —
  this wasn't run through `npm install` in the environment that generated
  it (no registry access there), so please run `npm install` once locally
  before `npm run dev` and flag anything that looks off.
