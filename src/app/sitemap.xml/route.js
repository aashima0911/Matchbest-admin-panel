export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matchbest.ai';
  
  const pages = [
    { url: '/', lastModified: new Date(), changeFrequency: 'always', priority: 1.0 },
    { url: '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/press-releases', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/Career', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // 2. Map them into XML format
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page.url}</loc>
              <lastmod>${page.lastModified.toISOString()}</lastmod>
              <changefreq>${page.changeFrequency}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}