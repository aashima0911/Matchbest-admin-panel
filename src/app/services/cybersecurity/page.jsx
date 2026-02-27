"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Eye, Zap, ShieldCheck, TrendingUp } from 'lucide-react'

const developmentFeatures = [
  "Implementing strict identity verification for every user and device, ensuring that trust is never assumed and always verified",
  "Leveraging AI-driven monitoring to detect and neutralize anomalies, malware, and phishing attempts in real-time",
  "Protecting your sensitive business and customer information with advanced encryption standards at rest and in transit",
  "Hardening your AWS, Azure, or hybrid cloud environments against unauthorized access and configuration drifts",
  "Ensuring your digital operations meet global regulatory standards such as GDPR, HIPAA, and ISO 27001"
]

const features = {
  col1: ["24/7 SOC", "Proactive Defense", "IAM", "Automated Security Patching"],
  col2: ["Cost Efficiency", "Disaster Recovery Planning", "DDoS Mitigation", "Strategic Security Roadmap"],
  col3: ["Risk Quantification", "Incident Response", "Global Language Support", "Measurable ROI"]
};

const capabilities = [
  {
    title: "Zero-Trust Security Framework",
    desc: "We eliminate the concept of 'implicit trust' within your network. By implementing strict identity verification, multi-factor authentication, and micro-segmentation, we ensure that every access request is fully authenticated and authorized before granting entry.",
    points: ["NLP", "Multi-Language Support", "Context awareness", "Seamless handoff"]
  },
  {
    title: "AI-Driven Managed Detection & Response (MDR)",
    desc: "Our systems leverage machine learning to analyze trillions of events in real-time. This allows us to identify 'zero-day' exploits and behavioral anomalies that traditional firewalls miss, providing autonomous neutralization of threats before they can cause damage.",
    points: ["Voice recognition", "Sentiment analysis", "Customer voice persona", "Multi-channel integration"]
  },
  {
    title: "Vulnerability Management & Penetration Testing",
    desc: "We act as ethical hackers to find the cracks in your armor. Through continuous scanning and simulated attacks, we identify technical weaknesses and provide prioritized remediation strategies to harden your digital perimeter against actual breaches.",
    points: ["Process mapping", "Smart trigger", "Performance analytics", "Continuous optimization"]
  },
  {
    title: "Regulatory Compliance & Governance (GRC)",
    desc: "We bridge the gap between complex security tech and legal requirements. Our team ensures your infrastructure remains compliant with global standards like GDPR, ISO 27001, and HIPAA, providing automated audit logs and risk reporting for total peace of mind.",
    points: ["Real-time monitoring", "Predictive insights", "Performance reports", "ROI tracking"]
  }
];

const useCases = [
  {
    title: "Human-Centric Security",
    desc: "We bridge the gap between technology and people, ensuring that your security policies are easy for your team to follow without sacrificing safety.",
    icon: Eye
  },
  {
    title: "Intelligence-Led Mitigation",
    desc: "Our process uses global threat data to predict where the next attack will come from, shifting your posture from defensive to offensive",
    icon: Zap
  },
  {
    title: "Defense-in-Depth Strategy",
    desc: "We don't rely on a single firewall. We implement multiple layers of security so that if one layer is challenged, others stand firm to protect your assets",
    icon: ShieldCheck
  },
  {
    title: "Continuous Performance Optimization",
    desc: "Our job doesn't end at deployment. We provide ongoing monitoring and AI optimization to ensure your systems remain cutting-edge.",
    icon: TrendingUp
  }
];

export default function AIAutomationPage() {
  return (
    <section className="relative py-14 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-2 lg:px-4">

        {/* HEADER */}
        {/* Background Grid Accent */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 Q50,0 100,100" stroke="white" strokeWidth="0.1" fill="none" />
            <path d="M0,80 Q50,-20 100,80" stroke="white" strokeWidth="0.1" fill="none" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center pt-10 md:pt-0">
          {/* LEFT CONTENT AREA */}
          <div className="space-y-8 px-4">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl font-normal text-white uppercase">
                <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent">Cybersecurity &</span> <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent"> Risk Management</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-300 text-lg max-w-[3x1]">
                Protecting your enterprise from evolving threats with proactive defense, real-time monitoring, and strategic risk mitigation.
              </p>
            </div>

            {/* FEATURE LIST */}
            <ul className="space-y-3">
              {developmentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-500 dark:text-gray-300 text-sm md:text-base">
                  <span className="text-white">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            {/* <a href="https://avasuite.ai/" target='_blank'>
              <button className="group relative overflow-hidden rounded-full bg-white text-background font-normal text-md ">
                <div className="relative flex flex-col transition-transform duration-100 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">                                  
                    <span className="flex items-center justify-center px-4 py-2 gap-2">
                    Get Your AI Chatbot
                    </span>
                    <span className="absolute top-full left-0 w-full flex items-center justify-center px-4 py-2 gap-2 bg-purple-900 text-white">
                    Get Your AI Chatbot
                    </span>
                </div>
              </button>
            </a> */}
          </div>

          {/* RIGHT IMAGE AREA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            {/* Spotlight shadow on the floor */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-white/5 blur-2xl rounded-full" />
            
            <Image 
              src="/assets/security.jpg" 
              alt="App Development Showcase" 
              fill 
              className="object-contain rounded-md"
              priority
            />
          </motion.div>
        </div>
      </div>


    {/* What Sets Us Apart */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-8 md:mb-12">
          
          {/* LEFT: HEADING & INTRO */}
          <div className="lg:w-1/3 space-y-8">
            <h1 className="text-2xl md:text-4xl font-normal text-white uppercase">
              <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent">What Sets</span> <br /> Us 
              <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent"> Apart?</span>
            </h1>

            <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base leading-tight font-light">
                In an era of sophisticated cyber-attacks, reactive security is no longer enough. At Matchest.ai, we provide an "Intelligence-Led" security framework that identifies vulnerabilities before they are exploited. Our goal is to build a resilient digital ecosystem where your data, identity, and infrastructure are shielded by military-grade encryption and autonomous threat detection.
            </p>
          </div>

          {/* RIGHT: THREE COLUMN FEATURE LIST */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 md:pt-28">
            
            {/* Column 1 */}
            <ul className="space-y-4">
              {features.col1.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-500 dark:text-gray-300 text-xs md:text-base whitespace-nowrap">
                  <span className="w-1 h-1 bg-white rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              {features.col2.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-500 dark:text-gray-300 text-xs md:text-base whitespace-nowrap">
                  <span className="w-1 h-1 bg-white rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4">
              {features.col3.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-500 dark:text-gray-300 text-xs md:text-base whitespace-nowrap">
                  <span className="w-1 h-1 bg-white rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    {/* KEY CAPABILITIES */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        {/* HEADING */}
        <div className="relative flex flex-col items-center justify-center pt-50 overflow-hidden">
  
          {/* 1. BACKGROUND OUTLINE TEXT */}
          <div className="absolute inset-0 flex justify-center items-center opacity-50 pointer-events-none select-none -z-10">
            <h1 
              className="text-[10vw] font-black uppercase tracking-tighter text-white"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
                maskImage: "linear-gradient(to bottom, black 0%, transparent 70% )"
              }}
            >
              Key Capabilities
            </h1>
          </div>
        </div>
        
        {/* 2. CARDS GRID */}
        <div className="relative z-20 -mt-22 md:-mt-18 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              
              className={`group p-4 bg-[#f8faff] rounded-md flex flex-col gap-4 transition-all duration-500 hover:bg-gray-800 ${
                idx >= 4 ? 'lg:col-span-1 lg:translate-x-[109%]' : '' 
              }`}>
              
              <div className="space-y-4">
                <h4 className="text-black font-semibold text-2xl text-center transition-colors group-hover:text-white">{item.title}</h4>
                <p className="text-gray-600 text-md text-center leading-relaxed transition-colors group-hover:text-white">
                  {item.desc}
                </p>
              </div>

              {/* <div className="h-px bg-gray-200 w-full my-0" /> */}

              {/* <ul className="space-y-3">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-gray-700 text-sm transition-colors group-hover:text-white">
                    <span className="w-1.5 h-1.5 bg-black rounded-md transition-colors group-hover:bg-white" />
                    {point}
                  </li>
                ))}
              </ul> */}
            </motion.div>
          ))}
        </div>
        </div>
        
      </div>


    {/* USE CASES */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"> 
        {/* SECTION HEADER */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-normal text-white uppercase">
            Use <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent">Cases</span>
          </h1>
        </div>

        {/* STATIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-md bg-background border-2 border-dashed border-purple-500/30 flex flex-col gap-6 max-h-[300px]"
            >
              {/* Purple Icon */}
              <div className="w-12 h-12 flex items-center justify-start">
                <item.icon className="w-10 h-10 text-[#8b2cf5]" strokeWidth={1} />
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-normal text-xl tracking-wide">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>  
      

      {/* CTA SECTION */}
      {/* <Link href= '/contact'>
        <div class="w-full max-w-7xl mx-auto px-6">
          <img 
            src="/services-bottom.png" 
            alt="Final CTA Section" 
            class="w-full h-auto"
          />
        </div>
      </Link>   */}
    </section>
  );
}
