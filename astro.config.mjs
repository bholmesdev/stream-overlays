import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";
import { ecsstatic } from '@acab/ecsstatic/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), solidJs()],
  vite: {
    plugins: [
      ecsstatic()
    ]
  }
});