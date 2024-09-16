import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {

    return rss({
        title: 'The Average Cyclist',
        description: 'Routes and inspiration for your next cycling trip',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./posts/*.{md,mdx}'),
        ),
        customData: `<language>en-us</language>`,
    });
}