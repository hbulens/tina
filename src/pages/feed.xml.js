import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts');

    return rss({
        title: 'The Average Cyclist blog',
        description: 'Cycling routes across Spain',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            customData: post.data.customData,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}