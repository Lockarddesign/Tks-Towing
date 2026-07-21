# TK's Towing — site repo notes

Astro 6.1 + Tailwind 4.3 rebuild of tkstowing.biz. Family-owned flatbed towing &
roadside assistance, Haddon Township NJ, since 1996. Serves Camden County plus
parts of Burlington & Gloucester.

## Stack notes

- **Tailwind is wired through PostCSS** (`postcss.config.mjs` +
  `@tailwindcss/postcss`), NOT `@tailwindcss/vite`. The Vite plugin is currently
  incompatible with the rolldown-based Vite 8 that Astro 6 ships
  (`Missing field tsconfigPaths` build error). If you upgrade Astro/Vite, retry
  the Vite plugin.
- **Fonts** (Archivo + IBM Plex) are imported in `src/layouts/Base.astro`, not in
  `global.css`. A CSS `@import` of the fontsource files does not get its `.woff2`
  URLs rewritten by PostCSS, so the fonts 404 in the build. Keep the JS imports.
- Design tokens live in the `@theme` block of `src/styles/global.css`
  (steel / bone / signal / brand palettes).

## Content

- **All copy lives in `src/site.config.ts`.** No hardcoded text in components.
- `[CONFIRM]` tokens mark unverified facts (grep for them before launch): review
  star rating, some coverage towns, response-time range, pricing, licensing &
  insurance, accident/police-rotation tows, payment methods, email, form
  delivery wiring.
- `PLACEHOLDER` labels mark stock/temporary images (logo, hero, owner photo, map,
  gallery) to be swapped for real TK's photos.

## Dev

```
npm run dev      # localhost:4321
npm run build
npx astro check  # 0 errors expected
```

## Rules

Never work on main. Branch is `feat/site-redesign`. Only Will merges/deploys.
