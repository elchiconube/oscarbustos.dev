import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_CMBDzlKa.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: "Oscar Bustos",
		description: "Senior Frontend Developer",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
