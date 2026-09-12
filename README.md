# Absoluteli Digital

Marketing website for Absoluteli Digital — AI Creative & Digital Growth Studio.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (CSS-first config — design tokens live in `src/app/globals.css`)
- Framer Motion (scroll reveals + subtle transitions only)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                    routes — home now, /work /services /industries /about /contact /interiors etc. to follow
  components/
    layout/               Header, Footer
    sections/             Hero, TransformationShowcase, ...
    ui/                   Button, Container, SectionHeading, Reveal (shared primitives)
  data/                   typed content (e.g. transformations.ts) — edit here to add/change portfolio content
  lib/                    shared constants/types
public/
  videos/                 drop real .mp4 files here — see public/videos/README.md
  images/                 placeholder graphics live here; replace files in place, no code changes needed
```

## Replacing placeholder assets

Nothing in the layout code needs to change when real photography/video arrives:

- Drop `hero-placeholder.mp4` into `public/videos/` (see that folder's README for export settings).
- Replace the SVG placeholders in `public/images/projects/...` with real photography/video, and update
  the corresponding `src` path in `src/data/transformations.ts` if the filename changes.

## Deployment

This project is a standard Next.js app and deploys cleanly to Vercel or any Node host:

```bash
npm run build
npm run start
```

Connect the repository to Vercel (or your host of choice) and point `absolutelidigital.com` at it once
the site is approved — this does not touch the currently live site until DNS is repointed.
