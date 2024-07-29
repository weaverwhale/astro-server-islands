import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  experimental: {
    serverIslands: true
  },
  integrations: [tailwind()]
});