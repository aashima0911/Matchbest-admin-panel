import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.matchbest.ai';
  
  const robotsTxt = `User-agent: *
Allow: /
Allow: /_next/static/
Allow: /api/
Allow: /admin/

# Sitemap
Sitemap: https://www.matchbest.ai/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 