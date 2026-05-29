# Full Stack Developer Portfolio (Angular 19)

Standalone Angular SPA with lazy-loaded routes, Bootstrap layout utilities, Angular Material controls, SCSS, sample portfolio data, and accessibility-minded markup.

## Prerequisites

- Node.js 18+ (project tested with Node 22)
- npm 10+

## Install and run

```bash
cd portfolio-app
npm install
npm start
```

Open `http://localhost:4200/`.

## Production build

```bash
npm run build
```

Output is written to `dist/portfolio-app/`.

## Project structure (high level)

- `src/app/data/` — `portfolio.models.ts` (types) and `portfolio.data.ts` (sample content you can edit).
- `src/app/shared/` — `navbar`, `footer`, `section-title`, `card`, and `fade-in` directive (Intersection Observer + CSS fade-in).
- `src/app/layout/main-layout/` — shell with sticky nav, footer, router outlet, and scroll-to-top FAB.
- `src/app/features/` — lazy-loaded pages: `home`, `skills`, `experience`, `projects`, `certifications`, `academic`, `contact`.
- `src/styles.scss` — Bootstrap import, design tokens, fade-in utilities, and shared layout/component styles.

## Customize your profile

1. Edit `src/app/data/portfolio.data.ts` (and types in `portfolio.models.ts` if you add fields).
2. Add your real resume as `public/resume.pdf` (the hero button links to `/resume.pdf`).
3. Replace the placeholder profile avatar block on the home page with an `<img>` if you want a photo.

## Encoding note (Windows editors)

If `ng build` reports strange parse errors after editing files in some tools, sources may have been saved as UTF-16. Run:

```bash
npm run fix-encoding
```

Then rebuild.

## Stack

Angular 19, TypeScript, Angular Router (lazy routes + scroll restoration), Reactive forms (contact), Bootstrap 5, Angular Material, SCSS only for motion (typing caret, keyword rotation, scroll fade-in).
