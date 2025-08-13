// app/layout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ChatbotButton from "@/app/components/ChatbotButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Proper metadata export for App Router
export const metadata = {
  title: "MatchBest Group | Digital Innovation, AI Solutions & Cloud Platforms",
  description:
    "MatchBest Group pioneers digital transformation with next-generation AI solutions, secure cloud platforms, and innovative software tailored for ambitious enterprises. Our expert team delivers scalable, future-ready technologies—empowering tomorrow’s leaders to accelerate growth, enhance security, and unlock new opportunities in a rapidly evolving digital landscape.",
  keywords:
    "MatchBest, Match, MatchBestGroup, Group, AI Solutions, Cloud Platforms, Digital Innovation, Secure Tech, Software Development, Web Solutions, Machine Learning, Cybersecurity, Cloud Computing, Web Development, Mobile Apps, UX Design, UI Design, Blockchain, SaaS, PaaS",
  manifest: "/manifest.json",
  authors: [{ name: "MatchBest Group", url: "https://matchbest.ai" }],
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  alternates: {
    canonical: "https://matchbestgroup.ai",
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
      "Empowering tomorrow’s leaders with AI, cloud, and digital platforms.",
    images: ["https://matchbest.ai/assets/og-image.jpg"],
  },
};

// ✅ Functional layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
        <meta name="google-site-verification" content="WTgd1zeK3woJgGNcOhqzp6zMzX9u3QuXo6Pmnfsvh4g" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="bingbot" content="index, follow" />
          <meta name="yandexbot" content="index, follow" />
          <meta name="duckduckbot" content="index, follow" />
          <meta name="slurp" content="index, follow" />
          <meta name="ia_archiver" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotButton />
      </body>
    </html>
  );
}