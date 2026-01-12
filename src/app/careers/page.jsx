export const metadata = {
  title: 'Careers | Join MatchBest Group - Shape the Future of Technology',
  description: 'Explore exciting career opportunities at MatchBest Group. Join our team of innovators working on AI, cloud computing, and digital transformation. Apply for jobs in software development, data science, and tech leadership.',
  keywords: ['careers', 'jobs', 'software development', 'AI', 'cloud computing', 'MatchBest Group', 'tech jobs', 'engineering jobs', 'career opportunities'],
  alternates: {
    canonical: 'https://matchbest.ai/careers',
  },
  openGraph: {
    title: 'Careers | Join MatchBest Group - Shape the Future of Technology',
    description: 'Explore exciting career opportunities at MatchBest Group. Join our team of innovators working on AI, cloud computing, and digital transformation.',
    url: 'https://matchbest.ai/careers',
    siteName: 'MatchBest Group',
    images: [
      {
        url: 'https://matchbest.ai/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MatchBest Group Careers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Join MatchBest Group - Shape the Future of Technology',
    description: 'Explore exciting career opportunities at MatchBest Group. Join our team of innovators working on AI, cloud computing, and digital transformation.',
    images: ['https://matchbest.ai/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import LayoutProvider from '../components/layout/LayoutProvider';
import React from 'react';
import CareersList from './components/CareersList';

export default function page() {
    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-14 sm:pt-24 min-h-screen">
            <LayoutProvider>
                <CareersList />
            </LayoutProvider>
        </div>
    );
}
