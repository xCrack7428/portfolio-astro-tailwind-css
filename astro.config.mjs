import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xCrack7428.github.io',
  base: 'portfolio-astro-tailwind-css',
  integrations: [tailwind()]
});