import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xCrack7428.github.io',
  base: '/mi-portfolio',
  integrations: [tailwind()]
});