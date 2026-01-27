'use client';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Send, Binoculars } from 'lucide-react';
import { getBlogPosts } from '../../lib/blogUtils';


const TextPressure = dynamic(() => import('../components/layout/text.jsx'), { ssr: false });
const Orb = dynamic(() => import('../components/layout/hero.jsx'), { ssr: false });
import {
  Lightbulb,
  ShieldCheck,
  BrainCircuit,
  Layers,
  ArrowUpRight,
  Rocket,
  MapPin,
  Users,
  RefreshCw
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


// Animation Counter
const AnimatedCounter = ({ target, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const end = parseFloat(target);
          const duration = 1000; 
          const increment = end / (duration / 16); 

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.4 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};


const valuesData = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation & AI-led Design",
    desc: "Pushing boundaries with AI solutions"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer-Centric Growth",
    desc: "Your success is our mission"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trust, Security & Integrity",
    desc: "Building with reliability and ethics"
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Engineering Excellence",
    desc: "World-class development standards"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Future-Ready Thinking",
    desc: "Planning for tomorrow's challenges"
  }
];


const domainsData = [
  {
    id: "1",
    title: "Automation & Development",
    desc: "Intelligent AI systems that optimise operations along with gen AI, LLMs, AI agents & intelligent automation. Also, enterprise-grade AI solutions for automation and insights."
  },
  {
    id: "2",
    title: "Digital Transformation",
    desc: "End-to-end digital transformation for scalable growth of businesses. Modernising legacy systems with AI, cloud & automation for future-ready enterprises."
  },
  {
    id: "3",
    title: "Healthcare & Fintech",
    desc: "Secure, compliant systems regulated by digital solutions for healthcare and financial services. HIPAA-compliant healthcare apps & secure fintech software development platform."
  },
  // {
  //   id: "3",
  //   title: "Custom Software Development",
  //   desc: "Custom platform to deliver end-to-end software development tailored to business needs. Scalable enterprise software with modular, secure design."
  // },
  {
    id: "4",
    title: "Generative AI",
    desc: "A content generation platform that provide users to generate contents like video, images. Apart from this, it can also create visuals, draft stories, and produce media-cost effective to nowadays. "
  },
  {
    id: "5",
    title: "Cloud & DevOps",
    desc: "AWS & Azure migration, secure cloud migration, CI/CD pipelines & DevOps engineering. Kubernetes, serverless computing & scalable cloud infrastructure, along with high-availability of DevOps."
  },
  {
    id: "6",
    title: "OTT & Media Tech",
    desc: "Scalable OTT platforms with high-concurrency streaming, built for better performance. Cloud-powered OTT & media delivery platforms with high-traffic media systems to ensure real-time content delivery."
  }
];

export default function AboutPage() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ projects: 0, clients: 0, countries: 0, years: 0 });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Get all blog posts and show only the first 3
    const fetchBlogs = async () => {
      const allBlogs = await getBlogPosts();
      setBlogs(allBlogs.slice(0, 3));
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

   
    const animateStats = () => {
      const targets = { projects: 500, clients: 300, countries: 15, years: 2 };
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
<div className="bg-black text-white min-h-screen flex flex-col py-6 ">

{/* Hero Section */}
<section className="w-full pt-22 py-2 px-4 md:px-8 mb-2 pb-4 flex justify-center">
      
  {/* === CARD CONTAINER === */}
  <div 
    className="relative w-full max-w-[1300px] h-[150px] md:h-[200px] rounded-[32px] overflow-hidden flex items-center justify-center shadow-2xl border border-white/5">

    <div className="absolute inset-0 z-0" 
      style={{
      background: 'linear-gradient(40deg, #020010 0%, #0a0a4a 10%, #391671 25%, #471671 30%, #000000 45%, #000000 55%, #471671 75%, #391671 80%, #0a0a4a 90%, #020010 100%)',
      filter: 'blur(80px)', 
      transform: 'scale(1.2)'
    }}> 

    </div>
    
    {/* === CONTENT LAYER === */}
    <div className="relative z-10 text-center px-6">
      
      {/* Main Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-['Inter'] font-normal mb-6 tracking-tight drop-shadow-lg">
        About Us
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-200 text-md md:text-md font-['Inter'] font-light tracking-wide max-w-2xl mx-auto opacity-90">
        Innovating the Future with AI, Cloud & Global Scale.
      </p>

    </div>

  </div>
</section>

{/* ABOUT CONTENT SECTION */}
<section className="w-full bg-black py-12 px-2 md:px-10 lg:px-14 overflow-x-hidden">
      <div className="container mx-auto max-w-[1300px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* === LEFT COLUMN: TEXT CONTENT === */}
          <div className="flex flex-col px-4 md:px-4 lg:px-4">
            
            {/* Heading */}
            <h2 className="text-white text-2xl md:text-3xl font-['Manrope'] font-medium tracking-tight">
              Technology That Scales the Future
            </h2>

            {/* Divider Line */}
            <div className="w-full h-px bg-white/10 my-4"></div>

            {/* Paragraph Content */}
            <p className="text-white text-justify font-['Space_Grotesk'] text-sm leading-relaxed font-light mb-2">
              At MatchBest Group, we not only adapt changes - we engineer them. 
              MatchBest Group has evolved into a next-gen technology powerhouse. 
              We are an intelligent and scalable consulting partner helping enterprises turn bold ideas into real-world impact.
              As a digital innovation and consulting company, we deliver AI-driven solutions, cloud transformation, and custom software that power modern enterprises worldwide. With deep expertise in AI, cloud, fintech, blockchain, ERP modernisation and cybersecurity, we help businesses modernize faster, scale smarter, and innovate with confidence.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-2">
              
              {/* Stat 1 */}
              <div>
                <h3 className="text-white text-3xl md:text-4xl font-['Bebas_Neue'] mb-2 tabular-nums">
                  <AnimatedCounter target={30} suffix="+" />
                </h3>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  Active Clients
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="text-white text-3xl md:text-4xl font-['Bebas_Neue'] mb-2 tabular-nums">
                  <AnimatedCounter target={100} suffix="%" />
                </h3>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  Secure Delivery
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-white text-3xl md:text-4xl font-['Bebas_Neue'] mb-2 tabular-nums">
                  <AnimatedCounter target={4.5} decimals={1} suffix=" / 5" />
                </h3>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  (CSAT)
                </p>
              </div>

            </div>

          </div>

          {/* === RIGHT COLUMN: IMAGE === */}
          <div className="relative w-full rounded-2xl overflow-hidden group z-10 lg:-mt-16 lg:-mr-16 lg:-ml-0">
             <Image 
               src="/assets/about-team.avif" 
               alt="MatchBest Team"
               width={1500} 
               height={1000}
               className="w-full h-auto object-cover"
             />
          </div>
        </div>
      </div>
    </section>


{/* Mission & Vision */}
<section className="w-full bg-white py-18 pt-10 px-4 md:px-12 lg:px-18">
      <div className="container mx-auto max-w-[1300px]">
        
        {/* === SECTION HEADING === */}
        <h2 className="text-center text-black text-4xl md:text-5xl font-['Inter'] font-medium mb-10">
          Our Mission & Vision
        </h2>

        {/* === CARDS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* CARD 1: OUR MISSION */}
          <div className="group relative w-full h-[400px] flex flex-col">
            
            {/* Content Area */}
            <div className="p-8 md:p-10 relative z-10">
              
              {/* Icon & Title Row */}
              <div className="flex items-center gap-6 mb-2">
                {/* Purple Filled Icon Box */}
                <div className="w-16 h-16 bg-[#9747FF] rounded-2xl flex items-center justify-center group-hover:bg-transparent group-hover:border-white border-2 delay-300">
                  <Send className="text-white w-8 h-8 -ml-1 mt-1" fill="none"/>
                </div>
                <h3 className="text-3xl font-['Inter'] font-medium text-black group-hover:text-white transition-colors duration-300">
                  Our Mission
                </h3>
              </div>

              {/* Text */}
              <p className="font-['Space_Grotesk'] text-black text-md leading-snug font-normal group-hover:text-gray-100 transition-colors duration-300">
                To empower industries with intelligent, automated, and scalable digital ecosystems that accelerate growth and redefine performance.
              </p>
            </div>

            {/* === EXPANDING IMAGE SECTION === */}
            {/* Default: h-[180px], Hover: h-full (Opens up) */}
            <div className="absolute bottom-0 w-full h-[200px] group-hover:h-[400px] transition-all duration-500 ease-in-out">
              <div className="relative w-full h-full px-4 pb-4">
                 {/* Image Container with Rounded Corners */}
                 <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <Image 
                      src="/assets/mission.avif" 
                      alt="Our Mission"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay to make text readable if image expands behind it (Optional) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
              </div>
            </div>

          </div>

          {/* CARD 2: OUR VISION */}
          <div className="group relative w-full h-[400px] flex flex-col">
            
            {/* Content Area */}
            <div className="p-8 md:p-10 relative z-10">
              
              {/* Icon & Title Row */}
              <div className="flex items-center gap-6 mb-2">
                {/* Outlined Icon Box */}
                <div className="w-16 h-16 bg-[#9747FF] rounded-2xl flex items-center justify-center group-hover:bg-transparent group-hover:border-white border-2 delay-300">
                  <Binoculars className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-['Inter'] font-medium text-black group-hover:text-white transition-colors duration-300">
                  Our Vision
                </h3>
              </div>

              {/* Text */}
              <p className="font-['Space_Grotesk'] text-black text-md leading-snug font-normal group-hover:text-white transition-colors duration-300">
                To be the world's most trusted AI-first technology partner, delivering platforms and solutions that inspire innovation and shape the future.
              </p>
            </div>

            {/* === IMAGE SECTION === */}
            <div className="absolute bottom-0 w-full h-[200px] group-hover:h-[400px] transition-all duration-500 ease-in-out">
              <div className="relative w-full h-full px-4 pb-4">
                 <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <Image 
                      src="/assets/Vision.png" 
                      alt="Our Vision"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
      


{/* Core Values */}
<section className="w-full relative bg-black py-12 px-4 md:px-8 flex justify-center overflow-hidden">

      <div 
        className="absolute -top-[100px] -right-[100px] w-[500px] h-[700px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, #020010 0%, #0a0a4a 10%, #396acc 25%, #8946c4 40%, #000000 50%, #8946c4 60%, #396acc 75%, #0a0a4a 90%, #020010 100%)',
          filter: 'blur(100px)',
          zIndex: 0 
        }}
      ></div>
      
      {/* === MAIN CONTAINER === */}
      <div className="w-full max-w-[1000px] bg-[rgb(20,20,20)] rounded-[2rem] p-8 md:p-16 relative overflow-hidden">

        {/* === HEADER === */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-['Manrope'] font-medium mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Our core values define who we are, what we stand for, and how we create meaningful impact every day.
          </p>
        </div>

        {/* === GRID LAYOUT === */}
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {valuesData.map((item, index) => (
            <div 
              key={index}
              className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-h-[200px] bg-black rounded-[24px] flex flex-col items-center text-center justify-center transition-all duration-500 hover:bg-white hover:border-transparent"
            >
              
              {/* === ICON CONTAINER === */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-black">
                <div className="text-black transition-colors duration-500 group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              {/* === TEXT CONTENT === */}
              <h3 className="text-white text-lg md:textxl font-['Manrope'] font-medium mb-2 transition-colors duration-500 group-hover:text-black">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-md font-light transition-colors duration-500 group-hover:text-gray-800">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
      

{/* Domains of Excellence */}
<section className="w-full bg-black text-white py-16 px-4 md:px-12 lg:px-20 overflow-hidden">  
    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">
      {/* === LEFT COLUMN: CONTENT & BUTTON === */}
        <div className="w-full lg:w-[35%] pr-0 lg:pr-16 mb-16 lg:mb-0 relative flex flex-col justify-center">
          
          {/* Background Purple Glow (Left side only) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-purple-900/40 blur-[100px] rounded-full pointer-events-none -z-10"></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Manrope'] font-normal leading-tight mb-8">
            Our  Domains<br />of  Excellence
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-16 max-w-md">
            These are the areas where our strengths, innovation, and commitment create meaningful results.
          </p>

          {/* Button */}
          <div>
            <button className="group relative px-8 rounded-full border border-gray-600 bg-transparent overflow-hidden transition-colors duration-300 hover:border-white">
              <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-100 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>

              {/* === 2. ROLLING TEXT CONTENT === */}
              <div className="relative z-10 overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                  
                  {/* ORIGINAL TEXT */}
                  <span className="flex items-center gap-2 text-lg text-white py-1">
                    Start Your Project
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                  <span className="flex items-center gap-2 text-lg text-black py-1 absolute top-full left-0 w-full">
                    Start Your Project
                    <ArrowUpRight className="w-5 h-5" />
                  </span>

                </div>
              </div>
          </button>
        </div>
      </div>

        {/* === RIGHT COLUMN: GRID === */}
        <div className="w-full lg:w-[65%]">
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {domainsData.map((item, index) => (
              <div 
                key={index}
                className="group relative border border-white/20 p-8 md:p-10 flex flex-col justify-start gap-2 min-h-[320px] -ml-[1px] -mt-[1px] transition-colors duration-300 hover:bg-white hover:z-10 hover:border-transparent"
              >
                
                {/* Number */}
                <span className="text-4xl md:text-5xl font-['Manrope'] font-light text-white/90 transition-colors duration-300 group-hover:text-black">
                  {item.id}
                </span>

                {/* Content Wrapper */}
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-['Manrope'] font-medium mb-4 text-white transition-colors duration-300 group-hover:text-black">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-light transition-colors duration-300 group-hover:text-gray-600">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>


{/* --- BLOGS SECTION --- */}
<section className="bg-black py-2 px-6 md:px-12">
  <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-['Manrope'] font-normal mb-6">
          Our Blogs
        </h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Explore our blogs share practical knowledge, emerging technologies in a fast-evolving digital world.</p>
      </div>
      <div className="max-w-7xl mx-auto">
        
        {/* Row of 3 Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group cursor-pointer">
              {/* Image Container with Expand/Zoom effect on hover */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-2">
                  {blog.categories && blog.categories.length > 0 ? blog.categories[0] : 'Article'} <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                </div>
              </div>

              {/* Blog Title */}
              <h3 className="text-white text-md md:text-xl font-medium leading-tight mb-4 group-hover:text-purple-400 transition-colors">
                {blog.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image src={blog.image} alt={blog.author} fill className="object-cover" />
                    </div>
              <div className="text-xs text-gray-400 font-medium flex items-center gap-2">
                      <span className="text-gray-200">{blog.author}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{blog.date}</span>
                    </div>    
                    </div>  

              {/* Link with Arrow */}
              {/* <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-all">
                <span className="text-sm font-medium border-b border-transparent group-hover:border-white transition-all">
                  Read article
                </span>
                <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div> */}
            </Link>
          ))}
        </div>

        {/* More Blogs Button */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/blogs" 
            className="group relative inline-flex items-center gap-3 px-6 py-2 bg-white text-black rounded-full font-bold text-xs tracking-widest hover:bg-black hover:text-white hover:border border-white"
          >
            More Blogs
            <span className="text-lg ">→</span>
          </Link>
        </div>

      </div>
    </section>


{/* --- CONTACT SECTION --- */}
{/* <section className="relative z-10 py-20 bg-black text-center px-4">
    <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-10 relative overflow-hidden">
        
        <div className="absolute inset-0 z-0 opacity-50" 
            style={{ 
                backgroundImage: "url('/assets/contact_bg.svg')", 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        ></div>

        <div className="relative z-10">
            <h2 className="font-[Manrope] text-3xl md:text-4xl text-white mb-6">
                Want to build the future today?
            </h2>
            <p className="font-[Manrope] text-gray-200 mb-8 text-lg">
                Build Smarter. Scale Faster with expert-led AI, cloud and enterprise software development
            </p>
            <Link href="/contact" className="inline-block text-white border border-white bg-none text-[#6823f0] px-8 py-2 rounded-2xl text-lg shadow-xl hover:bg-white hover:text-black transition-all transform">
                Talk to Our Experts
            </Link>
        </div>
    </div>
</section> */}
      

    </div>
  );
}
