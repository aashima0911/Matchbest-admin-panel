// app/layout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

import "../lib/i18n"; // i18n initialization

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// ✅ Proper metadata export for App Router
export const metadata = {
  title: "MatchBest Group | Digital Innovation, AI Solutions & Cloud Platforms",
  description:
    "MatchBest Group pioneers digital transformation with next-generation AI solutions, secure cloud platforms, and innovative software tailored for ambitious enterprises. Our expert team delivers scalable, future-ready technologies—empowering tomorrow’s leaders to accelerate growth, enhance security, and unlock new opportunities in a rapidly evolving digital landscape.",
  keywords:
    ["MatchBest, Match, MatchBestGroup, Group, AI Solutions, Cloud Platforms, Digital Innovation, Secure Tech, Software Development, Web Solutions, Machine Learning, Cybersecurity, Cloud Computing, Web Development, Mobile Apps, UX Design, UI Design, Blockchain, SaaS, PaaS",

    // Core Services
    "Custom Software Development Company",
    "Enterprise AI Solutions",
    "Cloud Migration Services",
    "Mobile App Development Agency",
    "SaaS Product Development",

    // Technologies
    "React.js Developers",
    "Spring Boot Experts",
    "Python AI Development",
    "AWS Cloud Consultants",

    // Location & Trust
    "Software Company in India",
    "IT Company Gurgaon",
    "MatchBest Software Pvt Ltd",
    "ISO Certified IT Agency"
    ],

  manifest: "/manifest.json",
  authors: [{ name: "MatchBest Group", url: "https://matchbest.ai" }],
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  alternates: {
    canonical: "https://matchbest.ai",
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
  openGraph: {
    title: "MatchBest Group | Digital Innovation & AI Solutions",
    description:
      "Explore our digital services, AI innovations, and secure cloud platforms that empower the future.",
    url: "https://matchbest.ai",
    siteName: "MatchBest Group",
    images: [
      {
        url: "https://matchbest.ai/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MatchBest Group - AI and Cloud",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MatchBest Group | Digital Innovation & AI Solutions",
    description:
      "Empowering leaders with AI, cloud, and digital platforms.",
    images: ["https://matchbest.ai/assets/og-image.jpg"],
  },
};

// ✅ Functional layout
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MatchBest Group",
    "url": "https://matchbest.ai",
    "logo": "https://matchbest.ai/assets/mat.png",
    "foundingDate": "2014",
    "sameAs": [
      "https://www.linkedin.com/company/matchbest",
      "https://twitter.com/matchbest",
      "https://www.facebook.com/matchbest"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890", // Replace with real number
      "contactType": "customer service",
      "areaServed": ["IN", "US", "AE"],
      "availableLanguage": ["English", "Hindi"]
    }
  };
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
        <meta name="google-site-verification" content="WTgd1zeK3woJgGNcOhqzp6zMzX9u3QuXo6Pmnfsvh4g" />
        <meta name="google-site-verification" content="1ffFm0S_nRz_V9GnWBe4czDuwBlzR_pszqxyUGbh-Vo" /> 
        <meta name="google-site-verification" content="OJ-3ppmh2LGiAItsAaW17ORS8RuiUpDpr6Ool6_4XkM" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FJ28ZXV4K2"
          strategy="afterInteractive"
        />
        
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());          
            gtag('config', 'G-8CV191GWE1');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '630747470027499');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=630747470027499&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
