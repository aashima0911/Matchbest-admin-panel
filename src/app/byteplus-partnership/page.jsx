'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import { useTranslation } from 'react-i18next';
import {
  Video,
  Mic,
  Sparkles,
  Camera,
  Zap,
  Star,
  DollarSign,
  Rocket,
  Users,
  Settings,
  Shield,
  Cpu
} from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function BytePlusTikTokPartnershipPage() {
  const { t } = useTranslation();

  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57GTTFTS');`
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57GTTFTS"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className='bg-gradient-to-r from-[#0b0515] to-[#3c2461]'>
        <div className="min-h-screen max-w-7xl mx-auto text-white pt-20">
          {/* Hero Section */}
          <motion.section
            className="py-8 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                {t('byteplusPartnership.hero.title', 'BytePlus & Matchbest Partnership')}
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                {t('byteplusPartnership.hero.subtitle', 'Unleash the power of imagination with AI. Through our exclusive Seedance x Seedream partnership with BytePlus, we\'re bringing world-class AI creativity to everyone.')}
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                {[
                  t('byteplusPartnership.hero.feature1', 'Exclusive access to AI creativity tools through the Seedance x Seedream partnership with BytePlus'),
                  t('byteplusPartnership.hero.feature2', 'Early access to next-generation creative intelligence and experimental AI features'),
                  t('byteplusPartnership.hero.feature3', 'Partner benefits including premium support, resource sharing, and innovation collaboration'),
                  t('byteplusPartnership.hero.feature4', 'Empowerment for creators and brands to design, advertise, and engage with limitless imagination')
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <a href="/contact">
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition cursor-pointer text-lg"
                >
                  {t('byteplusPartnership.hero.getStartedFreeDemo', 'Get Started Free Demo')}
                </motion.button>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl border-4 border-cyan-400 shadow-2xl overflow-hidden">
                <img
                  src="/assets/byteplus.png"
                  alt="BytePlus MatchbestGroup Partnership"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* AI Capabilities */}
          <motion.section
            className="py-10 px-6 md:px-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              {t('byteplusPartnership.capabilities.title', 'BytePlus AI Capabilities')}
            </motion.h2>

            <motion.div variants={container} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {[
                {
                  icon: Video,
                  title: "Generate Videos with Seedance",
                  desc: "Advanced video generation and editing with multi-scene capabilities.",
                  features: ["Multi-scene generation", "Style transfer", "Video enhancement", "Format conversion"]
                },
                {
                  icon: Camera,
                  title: "Generate Images with Seedream",
                  desc: "Photorealistic image generation and manipulation tools.",
                  features: ["High-res generation", "Style consistency", "Image editing", "Batch processing"]
                },
                {
                  icon: Mic,
                  title: "Generate Audio / Speech with BytePlus",
                  desc: "Voice processing, translation, and audio enhancement.",
                  features: ["Voice synthesis", "Noise removal", "Auto-dubbing", "Language translation"]
                },
                {
                  icon: Sparkles,
                  title: "Generate Creativity with BytePlus",
                  desc: "AR effects, filters, and interactive content creation.",
                  features: ["AR filters", "Virtual try-on", "Interactive effects", "Real-time processing"]
                }
              ].map((capability, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-effect p-6 hover:scale-[1.02] transition bg-black/40 rounded-2xl"
                >
                  <div className="flex items-center mb-4">
                    <capability.icon className="w-8 h-8 mr-3 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-gradient">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{capability.desc}</p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {capability.features.map((f, j) => (
                      <li key={j}>• {f}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Partnership Benefits */}
          <motion.section
            className="py-10 px-6 md:px-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              {t('byteplusPartnership.benefits.title', 'Partnership Benefits')}
            </motion.h2>

            <motion.div variants={container} className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  icon: Star,
                  title: "Premium Access",
                  desc: "Direct API access with priority support and dedicated technical resources.",
                  features: ["Priority support", "Dedicated account manager", "Technical consultation", "Custom integrations"]
                },
                {
                  icon: DollarSign,
                  title: "Exclusive Pricing",
                  desc: "Special discounted rates on all BytePlus AI services and API calls.",
                  features: ["Bulk discounts", "Token credits", "Reduced API costs", "Flexible billing"]
                },
                {
                  icon: Rocket,
                  title: "Early Access",
                  desc: "Beta access to new features and capabilities before public release.",
                  features: ["Feature previews", "Beta testing", "Early adoption", "Product feedback"]
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-effect p-8 hover:scale-[1.02] transition bg-black/40 rounded-2xl border border-purple-500/20"
                >
                  <div className="flex items-center mb-4">
                    <benefit.icon className="w-8 h-8 mr-3 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-gradient">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300 text-base mb-6">{benefit.desc}</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {benefit.features.map((f, j) => (
                      <li key={j}>• {f}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Use Cases */}
          <motion.section
            className="py-10 px-6 md:px-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              {t('byteplusPartnership.useCases.title', 'Use Cases')}
            </motion.h2>

            <motion.div variants={container} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Social Media",
                  desc: "AI-powered content creation for social media marketing and engagement.",
                  image: "/assets/cyber.png"
                },
                {
                  icon: Settings,
                  title: "E-commerce",
                  desc: "Product visualization, virtual try-ons, and personalized shopping experiences.",
                  image: "/assets/cloud.png"
                },
                {
                  icon: Cpu,
                  title: "Entertainment",
                  desc: "Video effects, AR filters, and interactive content for media companies.",
                  image: "/assets/ai.jpg"
                },
                {
                  icon: Shield,
                  title: "Enterprise",
                  desc: "Custom AI solutions for business process automation and optimization.",
                  image: "/assets/ui.jpg"
                }
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-effect p-6 hover:scale-[1.02] transition bg-black/40 rounded-2xl text-center"
                >
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-32 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center justify-center mb-3">
                    <useCase.icon className="w-6 h-6 mr-2 text-purple-400" />
                    <h3 className="text-xl font-semibold text-gradient">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{useCase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="py-10 px-6 md:px-16 text-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Access BytePlus AI Technology?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join our exclusive partnership program to unlock the full potential of BytePlus AI with premium support, discounted rates, and early access to cutting-edge features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={'/contact'}>
                  <motion.button
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="pulse-glow px-8 py-4 rounded-full shadow-lg transition cursor-pointer bg-[#9159B7] text-white"
                  >
                    Get Partnership Access
                  </motion.button>
                </Link>
                <Link href={'/contact'}>
                  <motion.button
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
                  >
                    Schedule Consultation
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
