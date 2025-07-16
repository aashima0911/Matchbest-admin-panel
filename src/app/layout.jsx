import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ChatbotButton from "@/app/components/ChatbotButton";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MATCHBEST GROUP - MatchBest Group offers cutting-edge digital solutions, AI, cloud, and secure platforms for tomorrow's leaders.</title>
        <meta name="description" content="MatchBest Group offers cutting-edge digital solutions, AI, cloud, and secure platforms for tomorrow's leaders." />
        <link rel="icon" href="/assets/favicon.png" type="image/jpeg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotButton />
      </body>
    </html>
  );
}
