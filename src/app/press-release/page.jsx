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
          <div className="mb-8 p-6 border border-purple-500 rounded-lg bg-gray-800 hover:bg-gray-700 transition" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4 text-white">2025 Press Release: Xelta Launch</h3>
            <p className="text-gray-300 mb-4">
              <strong>Date:</strong> November , 2025
            </p>
            <p className="text-gray-300 mb-4">
              MatchBest Group is excited to announce the launch of Xelta, an AI-powered imaging platform crafted to empower creators with tools that complement their vision.
            </p>
            <p className="text-gray-300">
              Xelta integrates advanced AI technologies to enhance creative workflows, providing intuitive tools for image generation, editing, and enhancement. This platform is designed to bridge the gap between imagination and reality, enabling creators to bring their ideas to life with unprecedented ease and precision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
