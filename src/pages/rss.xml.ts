import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Oscar Bustos Blog',
    description: 'Senior Frontend Developer Blog',
    site: context.site ?? 'https://oscarbustos.dev',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body ?? '')),
      link: `/blog/${post.id}/`,
      author: 'Oscar Bustos',
    })),
    customData: `<language>en-us</language>`,
  });
}
