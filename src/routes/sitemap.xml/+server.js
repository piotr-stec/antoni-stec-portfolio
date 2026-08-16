import { getAllPosts } from '$lib/server/posts.js';

export const prerender = true;

const SITE_URL = 'https://www.antonistec.pl';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const posts = getAllPosts();
	const staticPages = [
		{
			url: '',
			lastmod: '2026-08-15',
			changefreq: 'monthly',
			priority: '1.0'
		},
		{
			url: '/blog',
			lastmod: '2026-08-15',
			changefreq: 'weekly',
			priority: '0.8'
		},
		{
			url: '/oferta/motoryzacja',
			lastmod: '2026-08-15',
			changefreq: 'monthly',
			priority: '0.9'
		},
		{
			url: '/cennik',
			lastmod: '2026-08-15',
			changefreq: 'monthly',
			priority: '0.8'
		},
		{
			url: '/kontakt',
			lastmod: '2026-08-15',
			changefreq: 'yearly',
			priority: '0.7'
		}
	];

	const blogPages = posts.map((post) => ({
		url: `/blog/${post.slug}`,
		lastmod: new Date(post.rawDate).toISOString().split('T')[0],
		changefreq: 'yearly',
		priority: '0.6'
	}));

	const allPages = [...staticPages, ...blogPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
		http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
	.map(
		(page) => `	<url>
		<loc>${SITE_URL}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400'
		}
	});
}
