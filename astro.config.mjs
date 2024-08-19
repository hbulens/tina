import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: 'https://hbulens.github.io',
    base: 'the-average-cyclist',
    output: 'static'
});