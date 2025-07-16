'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#001f3f] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6" data-aos="fade-down">
          Our Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Explore a wide range of technology-driven services crafted to help your business thrive.
        </p>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900 text-gray-800 w-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Service 1 */}
            <div className="p-6 border rounded-lg text-center bg-gray-100 text- hover:bg-blue-100 hover:scale-105 transition transform" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Web Development</h3>
              <p className=" text-gray-600 mb-4">
                Modern, responsive websites built to perform across all devices.
              </p>
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold underline-none">Get Started</Link>
            </div>
            {/* Service 2 */}
            <div className="p-6 border rounded-lg text-center bg-gray-100 hover:bg-blue-100 hover:scale-105 transition transform" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">App Development</h3>
              <p className="text-gray-600 mb-4">
                Cross-platform mobile applications that deliver seamless user experiences.
              </p>
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Get Started</Link>
            </div>
            {/* Service 3 */}
            <div className="p-6 border rounded-lg text-center bg-gray-100 hover:bg-blue-100 hover:scale-105 transition transform" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Cloud & AI Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud services and AI-powered solutions for next-gen businesses.
              </p>
              <Link href="/contact" className="text-blue-600 no-underline  font-semibold">Get Started</Link>
            </div>
            {/* Service 4 */}
            <div className="p-6 border rounded-lg text-center bg-gray-100 hover:bg-blue-100 hover:scale-105 transition transform" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">OTT & Super Apps</h3>
              <p className="text-gray-600 mb-4">
                Launch high-performance OTT platforms and super apps with ease.
              </p>
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Get Started</Link>
            </div>
            {/* Service 5 */}
            <div className="p-6 border rounded-lg text-center bg-gray-100 hover:bg-blue-100 hover:scale-105 transition transform" data-aos="fade-up" data-aos-delay="800">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">AdTech Solutions</h3>
              <p className="text-gray-600 mb-4">
                Advanced advertising technology to drive traffic and grow revenue.
              </p>
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Get Started</Link>
            </div>
            {/* Service 6 */}
            <div className="p-6 border rounded-lg text-center bg-gray-100 hover:bg-blue-100 hover:scale-105 transition transform" data-aos="fade-up" data-aos-delay="1000">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Secure, scalable architecture with a focus on compliance and data protection.
              </p>
              <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 