'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TextPressure from '@/app/components/layout/text.jsx';
import Orb from '@/app/components/layout/hero.jsx';
import {
  Lightbulb,
  ShieldCheck,
  BrainCircuit,
  Layers,
  Cloud,
  Globe,
  Rocket,
  LineChart,
  MapPin,
  Users,
  Award,
  TrendingUp,
  Target
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ projects: 0, clients: 0, countries: 0, years: 0 });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Animate stats counter
    const animateStats = () => {
      const targets = { projects: 500, clients: 200, countries: 15, years: 8 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let current = { projects: 0, clients: 0, countries: 0, years: 0 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        current.projects = Math.floor(targets.projects * progress);
        current.clients = Math.floor(targets.clients * progress);
        current.countries = Math.floor(targets.countries * progress);
        current.years = Math.floor(targets.years * progress);

        setStats({ ...current });

        if (step >= steps) clearInterval(timer);
      }, increment);
    };

    setTimeout(animateStats, 1000);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0b0515] to-[#3c2461] text-white min-h-screen flex flex-col py-6 px-14 md:px-18 lg:px-22">

      {/* Hero Section */}
      <section className="mt-12 relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 md:px-8 lg:px-12 py-24 gap-12 mb-1">
        {/* Left: Headline & CTA */}
        <div className="flex-1 text-center md:text-left z-10">
          <div style={{ position: 'relative', height: '200px' }}>
            <TextPressure
              text="About MatchBest Group"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <h2 className="-mt-10 text-2xl md:text-3xl font-semibold text-purple-400 mb-6">
            Innovating the Future — AI, Cloud, Automation & Global Scale
          </h2>

          <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
            <p>At MatchBest Group, we don't just adapt to change — we engineer it.</p>
            <p>
              Headquartered across India, UAE, and the USA, with upcoming expansion into Saudi Arabia,
              MatchBest Group is a next-generation technology powerhouse enabling businesses to scale,
              transform, and compete globally.
            </p>
            <p className="text-purple-400 font-semibold">
              We are building today, what the world will run on tomorrow.
            </p>
          </div>

        </div>

        {/* Right: Abstract SVG */}
        <div className="flex-1 flex justify-center items-center relative">
          <div style={{ width: '100%', height: '500px', position: 'relative' }}>
            <Orb
              hoverIntensity={1.5}
              rotateOnHover={true}
              hue={240}
              forceHoverState={false}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
        <div className="container mx-auto px-0 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-8">Our Mission & Vision</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ y: -5 }}
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-semibold text-cyan-400">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower industries with intelligent, automated, and scalable digital ecosystems
                that accelerate growth and redefine performance.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ y: -5 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-semibold text-cyan-400">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the world's most trusted AI-first technology partner, delivering platforms and
                solutions that inspire innovation and shape the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
        <div className="container mx-auto px-0 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-8">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Rocket className="w-10 h-10 text-cyan-400 mb-4" />, title: "Innovation & AI-led Design", desc: "Pushing boundaries with cutting-edge AI solutions" },
              { icon: <Users className="w-10 h-10 text-cyan-400 mb-4" />, title: "Customer-Centric Growth", desc: "Your success is our mission" },
              { icon: <ShieldCheck className="w-10 h-10 text-cyan-400 mb-4" />, title: "Trust, Security & Integrity", desc: "Building with reliability and ethics" },
              { icon: <BrainCircuit className="w-10 h-10 text-cyan-400 mb-4" />, title: "Engineering Excellence", desc: "World-class development standards" },
              { icon: <TrendingUp className="w-10 h-10 text-cyan-400 mb-4" />, title: "Scalable & Future-Ready Thinking", desc: "Planning for tomorrow's challenges" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains of Excellence */}
      <section className="py-5 border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
        <div className="container mx-auto px-0 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-8">Our Domains of Excellence</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <BrainCircuit className="w-10 h-10 text-cyan-400 mb-4" />, title: "AI & Automation", desc: "Intelligent systems that learn and adapt" },
              { icon: <Cloud className="w-10 h-10 text-cyan-400 mb-4" />, title: "Cloud & Managed Services", desc: "Scalable infrastructure solutions" },
              { icon: <Layers className="w-10 h-10 text-cyan-400 mb-4" />, title: "App / Web Development", desc: "Modern, responsive applications" },
              { icon: <ShieldCheck className="w-10 h-10 text-cyan-400 mb-4" />, title: "Healthcare & Digital Platforms", desc: "Transforming healthcare technology" },
              { icon: <Lightbulb className="w-10 h-10 text-cyan-400 mb-4" />, title: "OTT & Media Tech", desc: "Next-generation media solutions" },
              { icon: <Rocket className="w-10 h-10 text-cyan-400 mb-4" />, title: "Generative AI & Intelligence", desc: "Creating the future of AI" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-5 border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
        <div className="container mx-auto px-0 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-8">Our Global Presence</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { flag: "🇮🇳", country: "India", status: "Headquartered" },
              { flag: "🇦🇪", country: "UAE", status: "Regional Office" },
              { flag: "🇺🇸", country: "USA", status: "Regional Office"},
              { flag: "🇸🇦", country: "Saudi Arabia", status: "Coming Soon" }
            ].map((location, i) => (
              <motion.div
                key={i}
                className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className="flex justify-center items-center mb-4">
                  <span className="text-4xl mr-2">{location.flag}</span>
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{location.country}</h3>
                <p className="text-cyan-400 font-medium mb-1">{location.status}</p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
        <div className="container mx-auto px-0 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with MatchBest Group.
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                className="cursor-pointer bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] hover:from-[#3B5CEB] hover:to-[#7B4BA0] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Start Your Project
              </motion.button>
            </Link>
            {/* <Link href="/careers">
              <motion.button
                className="glass-effect bg-black/40 border border-purple-500/20 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Join Our Team
              </motion.button>
            </Link> */}
          </div>
        </div>
      </section>

    </div>
  );
}
