import type { APIRoute } from "astro";

/** 固定ページのサイトマップ（ブログ記事は EmDash の /sitemap-posts.xml） */
const PAGES = ["/", "/shaken", "/repair", "/cases", "/sales", "/insurance", "/company", "/blog"];

export const GET: APIRoute = ({ site, url }) => {
	const origin = site ?? new URL(url.origin);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url><loc>${new URL(p, origin).href}</loc></url>`).join("\n")}
</urlset>`;
	return new Response(body, {
		headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
	});
};
