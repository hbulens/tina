import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
x   
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap()],
    site: 'https://hbulens.github.io',
    base: '/the-average-cyclist/',
    output: 'static'
});