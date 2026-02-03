import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matchbest.ai';
  
  const robotsTxt = `User-agent: *
Allow: /
Allow: /_next/static/
Allow: /api/
Allow: /admin/

# Sitemap
Sitemap: https://matchbest.ai/sitemap.xml

# Disallow admin and private areas
Disallow: `;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 