export async function GET({ site }: { site?: URL }) {
  const siteUrl = site?.href || 'https://abdullahluay.dev';
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
