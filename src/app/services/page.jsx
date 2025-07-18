'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built to perform across all devices.',
      delay: 200,
    },
    {
      title: 'App Development',
      description: 'Cross-platform mobile applications that deliver seamless user experiences.',
      delay: 300,
    },
    {
      title: 'Cloud & AI Solutions',
      description: 'Scalable cloud services and AI-powered solutions for next-gen businesses.',
      delay: 400,
    },
    {
      title: 'OTT & Super Apps',
      description: 'Launch high-performance OTT platforms and super apps with ease.',
      delay: 500,
    },
    {
      title: 'AdTech Solutions',
      description: 'Advanced advertising technology to drive traffic and grow revenue.',
      delay: 600,
    },
    {
      title: 'Security & Compliance',
      description: 'Secure, scalable architecture with a focus on compliance and data protection.',
      delay: 700,
    },
  ];

  return (
    <div className="bg-[#0b0b15] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-30 px-6 text-center bg-gradient-to-r from-blue-900 via-[#0b0b15] to-purple-900">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300" data-aos="fade-up" data-aos-delay="200">
          Explore a wide range of technology-driven services crafted to help your business thrive.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-2">What We Offer</h2>
          <p className="text-gray-400">Empowering businesses with modern digital solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] p-8 rounded-2xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.03]"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
