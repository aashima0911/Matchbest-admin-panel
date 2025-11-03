'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Lightbulb,
  ShieldCheck,
  BrainCircuit,
  Layers,
  Cloud,
  Globe,
  Rocket,
  LineChart,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">

      {/* Header Section */}
      <section
        className="container mx-auto px-6 lg:px-20 py-24 flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            About MatchBest Group
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-purple-400 mb-2">
            Innovating the Future — AI, Cloud, Automation & Global Scale
          </h2>

          <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
            <p>At MatchBest Group, we don’t just adapt to change — we engineer it.</p>
            <p>
              Headquartered across India, UAE, and the USA, with upcoming expansion into Saudi Arabia,
              MatchBest Group is a next-generation technology powerhouse enabling businesses to scale,
              transform, and compete globally.
            </p>
            <p>
              From AI-driven innovation to digital transformation, managed cloud services, custom
              applications, and intelligent platforms, we deliver solutions built for modern enterprises.
            </p>
            <p>
              Our teams combine engineering, design, and strategy to solve real-world challenges,
              creating products and ecosystems that are scalable, secure, and future ready.
            </p>
            <p className="text-purple-400 font-semibold">
              We are building today, what the world will run on tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-16 w-full bg-gray-850 flex flex-col items-center justify-center px-6 lg:px-20 text-center -mt-8 lg:-mt-15"
        data-aos="fade-up"
      >
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold mb-10">Our Mission & Vision</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:shadow-purple-600 transition">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower industries with intelligent, automated, and scalable digital ecosystems
                that accelerate growth and redefine performance.
              </p>
            </div>

            <div
              className="p-8 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:shadow-purple-600 transition"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the world’s most trusted AI-first technology partner, delivering platforms and
                solutions that inspire innovation and shape the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 w-full px-6 lg:px-20 flex flex-col items-center justify-center text-center" data-aos="fade-up">
        <div className="max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Rocket className="w-8 h-8 mb-3 text-purple-400" />, text: "Innovation & AI-led Design" },
              { icon: <LineChart className="w-8 h-8 mb-3 text-purple-400" />, text: "Customer-Centric Growth" },
              { icon: <ShieldCheck className="w-8 h-8 mb-3 text-purple-400" />, text: "Trust, Security & Integrity" },
              { icon: <BrainCircuit className="w-8 h-8 mb-3 text-purple-400" />, text: "Engineering Excellence" },
              { icon: <Layers className="w-8 h-8 mb-3 text-purple-400" />, text: "Scalable & Future-Ready Thinking" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition text-center"
              >
                {item.icon}
                <p className="text-gray-200 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains of Excellence */}
      <section className="py-5 w-full px-6 lg:px-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Domains of Excellence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <BrainCircuit className="w-8 h-8 mb-3 text-purple-400" />, label: "AI & Automation" },
            { icon: <Cloud className="w-8 h-8 mb-3 text-purple-400" />, label: "Cloud & Managed Services" },
            { icon: <Layers className="w-8 h-8 mb-3 text-purple-400" />, label: "App / Web Development" },
            { icon: <ShieldCheck className="w-8 h-8 mb-3 text-purple-400" />, label: "Healthcare & Digital Platforms" },
            { icon: <Lightbulb className="w-8 h-8 mb-3 text-purple-400" />, label: "OTT & Media Tech" },
            { icon: <Rocket className="w-8 h-8 mb-3 text-purple-400" />, label: "Generative AI & Intelligence" }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition"
            >
              {item.icon}
              <p className="text-gray-200 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-5 w-full px-6 lg:px-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-10"> Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition text-center">
            <div className="flex justify-center items-center mb-4">
              <MapPin className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-xl md:text-2xl">🇮🇳</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">India</h3>
            <p className="text-gray-300">Headquartered</p>
          </div>
          <div className="p-6 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition text-center">
            <div className="flex justify-center items-center mb-4">
              <MapPin className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-xl md:text-2xl">🇦🇪</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">UAE</h3>
            <p className="text-gray-300">Regional Office</p>
          </div>
          <div className="p-6 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition text-center">
            <div className="flex justify-center items-center mb-4">
              <MapPin className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-xl md:text-2xl">🇺🇸</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">USA</h3>
            <p className="text-gray-300">Regional Office</p>
          </div>
          <div className="p-6 border border-purple-500 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition text-center">
            <div className="flex justify-center items-center mb-4">
              <MapPin className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-xl md:text-2xl">🇸🇦</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Saudi Arabia</h3>
            <p className="text-gray-300">Coming Soon</p>
          </div>
        </div>
      </section>

    </div>
  );
}
