"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Eye, Zap, ShieldCheck, TrendingUp } from 'lucide-react'

const developmentFeatures = [
  "Design and management of flexible environments across AWS, Azure, and Google Cloud to prevent vendor lock-in",
  "Accelerating software delivery through robust DevOps automation that ensures faster, bug-free deployments",
  "Leveraging FaaS to reduce operational overhead and pay only for the compute power you use",
  "Using tools like Terraform and CloudFormation to manage your environment with the precision of software",
  "Real-time observability and automated healing to ensure 99.99% uptime for your critical business services"
]

const features = {
  col1: ["Elastic Scalability", "Maximized Cost Efficiency", "Global Performance", "Disaster Recovery"],
  col2: ["Cost Efficiency", "Containerization", "Modern DevOps", "High Availability"],
  col3: ["Microservices Transition", "Enhanced Security", "Automated Compliance", "Strategic Roadmap"]
};

const capabilities = [
  {
    title: "Cloud Migration & Modernization",
    desc: "We handle the heavy lifting of moving your workloads to the cloud. Our team ensures a seamless transition with zero downtime, refactoring legacy applications to take full advantage of cloud-native features.",
    points: ["NLP", "Multi-Language Support", "Context awareness", "Seamless handoff"]
  },
  {
    title: "Managed Kubernetes & Orchestration",
    desc: "Simplify the complexity of container management. We design and manage production-grade Kubernetes clusters that provide high-density computing and automated scaling for your microservices.",
    points: ["Voice recognition", "Sentiment analysis", "Customer voice persona", "Multi-channel integration"]
  },
  {
    title: "DevOps & SRE Automation",
    desc: "Bridge the gap between development and operations. We implement Site Reliability Engineering (SRE) practices to automate routine tasks, improve system observability, and reduce the time-to-market for new features.",
    points: ["Process mapping", "Smart trigger", "Performance analytics", "Continuous optimization"]
  },
  {
    title: "Serverless & Microservices Design",
    desc: "Build applications that scale to millions effortlessly. By decoupling your services, we reduce technical dependencies and improve fault tolerance, allowing individual components to scale independently.",
    points: ["Real-time monitoring", "Predictive insights", "Performance reports", "ROI tracking"]
  }
];

const useCases = [
  {
    title: "Observability-Driven Design",
    desc: "We don't just deploy; we monitor everything. We build deep visibility into your systems so issues are resolved before they affect your users.",
    icon: Eye
  },
  {
    title: "Vendor-Neutral Advice",
    desc: "We choose the cloud provider and tech stack that best fits your budget and technical needs, not ours.",
    icon: Zap
  },
  {
    title: "Security-First Operations",
    desc: "Security isn't a final check; it's integrated into every line of our infrastructure code.",
    icon: ShieldCheck
  },
  {
    title: "Iterative Optimization",
    desc: "Post-deployment, we continuously tune your environment for performance and cost, ensuring you get the best ROI from your cloud.",
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
                <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent">Cloud &</span> <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent">Infrastructure</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-300 text-lg max-w-[3x1]">
                Empower your enterprise with scalable cloud solutions, automated DevOps, and high-availability infrastructure.
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
              src="/assets/8.jpg" 
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
                Modern digital experiences require an infrastructure that doesn't just work—it evolves. At Matchest.ai, we specialize in building cloud-native environments that provide the perfect balance of performance, security, and cost-efficiency. Whether you are migrating legacy systems or building from the ground up, we ensure your cloud foundation is optimized for the next billion users.
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
