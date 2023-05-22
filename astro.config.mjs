import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import { ecsstatic } from "@acab/ecsstatic/vite";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    hybridOutput: true,
  },
  integrations: [solidJs()],
  vite: {
    plugins: [ecsstatic()],
  },
  adapter: vercel(),
});
