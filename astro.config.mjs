import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(),react()],
  site: "https://hbulens.github.io",
  base: "/the-average-cyclist",
  output: "static",
});
