import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# MatchBest AI

AI-Driven Digital Transformation for Secure, Scalable Business Growth. 
Specializing in AI-powered automation, secure cloud infrastructure, and enterprise-grade software.

## Key Resources
- [About Us](https://matchbest.ai/about): Detailed information about MatchBest's mission in AI-driven digital transformation.
- [Press Releases](https://matchbest.ai/press-releases): Our latest press releases for our products on matchbest.
- [Career Openings](https://matchbest.ai/Career): List of current opportunities for developers, engineers and non-tech profiles also.
- [Technical Blog](https://matchbest.ai/blogs): Weekly articles on AI, React Native, and software development trends.
- [Contact Support](https://matchbest.ai/contact): Direct channel to reach our team for business inquiries or career regarding issues.

## Contact
Email: biz@matchbest.ai
Website: https://matchbest.ai`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}