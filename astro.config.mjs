// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind 4.3 is wired through PostCSS (see postcss.config.mjs) rather than
// @tailwindcss/vite — the Vite plugin is not yet compatible with the
// rolldown-based Vite 8 that Astro 6 ships with.
// https://astro.build/config
export default defineConfig({
  site: 'https://tkstowing.biz',
});
