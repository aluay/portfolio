export async function GET({ site }: { site?: URL }) {
	const siteUrl = site?.href || "https://abdullahluay.dev";
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
