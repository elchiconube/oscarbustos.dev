import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${posts
    .map(
      (post) => `
    <url>
      <loc>https://oscarbustos.dev/blog/${post.slug}/</loc>
      <lastmod>${
        post.data.updatedDate
          ? post.data.updatedDate.toISOString()
          : post.data.pubDate.toISOString()
      }</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
