'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function PressReleasePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-900 py-10 text-white min-h-screen flex flex-col px-4 md:px-8 lg:px-12">
      
      {/* Press Releases Section */}
      <section className="py-10 md:py-12 w-full px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Latest Press Releases</h2>
        <div className="w-full max-w-4xl">
          {/* Press Release 2025 */}
          <div className="mb-8 p-6 border border-purple-500 rounded-lg bg-gray-800 transition" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4 text-white">MatchBest Software launches AVA One – A Unified AI Platform Empowering Businesses to Work Smarter</h3>
            <p className="text-gray-300 mb-4">
              <strong>Date:</strong> November 2025
            </p>
            <p className="text-gray-300 mb-4">
              [Gurugram, India – November 2025] – MatchBest Software, an emerging leader in enterprise automation and AI-powered business tools, today announced the official launch of AVA One, a comprehensive suite that brings together customer communication, CRM, billing, and workflow automation — all under one unified platform.
            </p>
            <p className="text-gray-300 mb-4">
              AVA One has been designed to help small and medium-sized businesses simplify operations, reduce tool fragmentation, and scale efficiently with the power of AI. The platform integrates multiple core modules including AVA CX (AI customer support), AVA Flow (CRM and sales automation), AVA SmartBill (billing and subscription management), and AVA Pingora (team collaboration and workflow management).
            </p>
            <p className="text-gray-300 mb-4">
              "Businesses today don't need another tool — they need a unified system that works smarter for them. With AVA One, we're giving organisations a single intelligent workspace that's built for speed, collaboration, and scale," said Manavi Singh, COO, MatchBest Group. "Our vision is to empower teams to do more with less — making business automation accessible, efficient, and future-ready."
            </p>
            <p className="text-gray-300 mb-4">
              With AI at its core, AVA One eliminates the friction of managing multiple systems by offering end-to-end automation across sales, service, and billing. The platform's modular structure allows companies to adopt features as needed and scale seamlessly as they grow.
            </p>
            <p className="text-gray-300 mb-4 font-semibold">
              Key highlights of AVA One include:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside">
              <li>Unified dashboard for all customer and team interactions</li>
              <li>Built-in AI assistant for automating repetitive tasks</li>
              <li>Smart billing and subscription engine</li>
              <li>Collaboration tools designed for hybrid teams</li>
              <li>Cloud-based scalability with enterprise-grade security</li>
            </ul>
            <p className="text-gray-300 mb-4">
              The launch of AVA One marks a significant milestone in MatchBest Software's mission to simplify business management through intelligent automation. The platform is now live and available at ava.matchbestsoftware.com, with flexible pricing and global support.
            </p>
            <p className="text-gray-300 mb-4 font-semibold">
              About MatchBest Software
            </p>
            <p className="text-gray-300 mb-4">
              MatchBest Software is an innovative technology company focused on building AI-driven business solutions that empower teams to operate smarter and faster. Through its flagship product AVA One, the company aims to bridge the gap between automation, collaboration, and customer experience — helping businesses unlock their full potential.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}
