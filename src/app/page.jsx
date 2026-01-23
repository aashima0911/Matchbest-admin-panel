"use client";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion"; 
import { MapPin, Plus, ArrowUpRight} from "lucide-react"; 
import dynamic from 'next/dynamic';
import { ShieldCheck } from "lucide-react/dist/esm/icons/shield-check"; 
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
</link>


const CertifiedSection = dynamic(
  () => import("./components/CertifiedSection"),
  { ssr: false }
);

const VerticalsCarousel = dynamic(() => import('./components/layout/card.jsx'), { ssr: false });

const cardsData = [
  {
    id: 1,
    title: "Next-Gen Development",
    desc: "Scalable web & mobile application development built with modern frameworks for performance, security, and enterprise growth.",
    icon: "/assets/F1.png", 
  },
  {
    id: 2,
    title: "AI Automation",
    desc: "AI automation and Generative AI solutions that streamline workflows, enhance productivity, and power smarter business decisions.",
    icon: "/assets/f2.png", 
  },
  {
    id: 3,
    title: "Cybersecurity & Risk Management",
    desc: "Enterprise-grade cybersecurity, VAPT, and cloud security services to protect data, systems, and digital assets.",
    icon: "/assets/f3.png", 
  },
  {
    id: 4,
    title: "Cloud and infra services",
    desc: "Secure cloud migration, hosting, and infrastructure management for high availability, scalability, and cost efficiency.",
    icon: "/assets/f4.png", 
  },
];

const technologies = [
    "React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes",
    "TensorFlow", "MongoDB", "TypeScript", "JavaScript", "Express.js",
    "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "GraphQL", "MySQL",
    "PostgreSQL", "Redux", "Jest", "Git", "GitHub", "Figma", "Next.js",
    "AI", "ML", "Android"
];

const testimonials = [
  {
    id: 1,
    quote: "Their team delivered a scalable product faster than we expected. The performance and security standards were top-notch.",
    name: "Alex Morgan",
    role: "CTO, TechNova Solutions",
    stars: 5,
    className: "md:col-span-2",
  },
  {
    id: 2,
    quote: "AI automation transformed our internal workflows and reduced manual effort by over 40%. Highly recommended.",
    name: "Priya Shah",
    role: "Head of Operations, FlowMatrix",
    stars: 5,
    className: "md:col-span-1",
  },
  {
    id: 3,
    quote: "The cloud migration was seamless with zero downtime. Their expertise gave us confidence at every step.",
    name: "Daniel Brooks",
    role: "IT Director, CloudCore Systems",
    stars: 5,
    className: "md:col-span-1",
  },
  {
    id: 4,
    quote: "Enterprise-grade security done right. Their proactive approach helped us identify risks before they became issues.",
    name: "Sophia Lee",
    role: "CISO, SecureWave Inc.",
    stars: 5,
    className: "md:col-span-2",
  },
  {
    id: 5,
    quote: "From strategy to execution, the development process was smooth, transparent, and results-driven.",
    name: "Michael Turner",
    role: "Product Manager, Innovex Labs",
    stars: 5,
    className: "md:col-span-1",
  },
  {
    id: 6,
    quote: "Their AI solutions didn't just automate tasks—they helped us make smarter business decisions.",
    name: "Ananya Verma",
    role: "Data & Analytics Lead, NexaAI",
    stars: 5,
    className: "md:col-span-2",
  },
];

const features = [
  {
    id: 1,
    title: "Elite Professionals",
    desc: "Certified AI, cloud, and software engineers delivering secure, scalable, and high-impact digital solutions.",
    img: "/assets/img1.avif",
  },
  {
    id: 2,
    title: "Built Around You",
    desc: "A client-centric delivery model focused on transparency, measurable outcomes, and long-term business value.",
    img: "/assets/img2.png",
  },
  {
    id: 3,
    title: "Future-Ready Tech",
    desc: "Leveraging AI, cloud platforms, automation, and modern frameworks to future-proof growth and maximise ROI.",
    img: "/assets/img3.avif",
  },
];

const techStack = [
  { name: "HTML5", icon: "/assets/html.png" },
  { name: "CSS3", icon: "/assets/css.png" },
  { name: "JavaScript", icon: "/assets/javascript.png" },
  { name: "Python", icon: "/assets/python.png" },
  { name: "MongoDB", icon: "/assets/mongodb.png" },
  { name: "TypeScript", icon: "/assets/typescript.png" },
  { name: "Express", icon: "/assets/express.png" }, 
  { name: "AWS", icon: "/assets/aws.png" },
  { name: "Docker", icon: "/assets/docker.png" },
  { name: "Azure", icon: "/assets/azure.png" },
  { name: "Tailwind", icon: "/assets/tailwind.png" },
  { name: "Bootstrap", icon: "/assets/bootstrap.png" },
];

const steps = [
  {
    id: "1",
    title: "Consult",
    desc: "By aligning on vision, scope, and outcomes, we deep-dive into your business needs and technical requirements before building.",
  },
  {
    id: "2",
    title: "Develop",
    desc: "Build, validate, and refine development with transparency, speed, and quality.",
  },
  {
    id: "3",
    title: "Deliver",
    desc: "Beyond deployment, we deliver secure, scalable and optimized solutions for long-term performance.",
  },
];

const faqData = [
  { id: 1, question: "How can we help your business?", answer: "We provide end-to-end technology solutions including AI automation, cloud infrastructure, and custom software development tailored to your specific business goals." },
  { id: 2, question: "Where is MatchBest Group located?", answer: "We operate globally with our headquarters based in [Your City], delivering remote and on-site solutions worldwide." },
  { id: 3, question: "How do I start a project with MatchBest?", answer: "Simply click the 'Contact Us' button or reach out via email. We'll schedule a consultation to discuss your needs." },
  { id: 4, question: "Does MatchBest Group work with startups?", answer: "Yes, we specialize in helping startups scale by providing cost-effective and robust technology foundations." },
  { id: 5, question: "What technologies do you use for development?", answer: "We use modern stacks including React, Next.js, Node.js, Python, AWS, and Docker, ensuring your tech is future-proof." },
  { id: 6, question: "Do you offer post-development support?", answer: "Absolutely. We offer various maintenance packages to ensure your software remains secure and up-to-date." },
  { id: 7, question: "How do you ensure data security?", answer: "Security is our priority. We follow industry best practices, including encryption, regular audits, and secure cloud architectures." },
];

const locations = [
  {
    country: "USA",
    role: "Client Relations",
    image: "/assets/cloud.png", 
    addressTitle: "Client Relations",
    address: "1200 Smith Street, Suite 1600, Houston, TX 77002",
    top: "35%", 
    left: "25%", 
    align: "top" 
  },
  {
    country: "SAUDI ARABIA",
    role: "Expansion 2025",
    image: "/assets/cloud.png", 
    addressTitle: "London Office",
    address: "Expansion 2025",
    top: "46%", 
    left: "58%", 
    align: "top-left"
  },
  {
    country: "UAE",
    role: "Sales & Operations",
    image: "/assets/cloud.png", 
    addressTitle: "London Office",
    address: "Lettsom House, 11 Chandos Pl, London W1G 9DP, UK",
    top: "50%", 
    left: "62%", 
    align: "top-right"
  },
  {
    country: "INDIA",
    role: "Research & Development",
    // image: "/assets/cloud.png",
    addressTitle: "R&D Center",
    address: "Tech Park, Sector 126, Noida, Uttar Pradesh 201304",
    top: "50%", 
    left: "67%", 
    align: "bottom"
  },
];


export default function Home() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const { t } = useTranslation();
    
    const { scrollY } = useScroll();
    
    const circleY = useTransform(scrollY, [0, 600], [0, -500]); 
    const circleScale = useTransform(scrollY, [0, 600], [1, 0.4]); 
    const circleOpacity = useTransform(scrollY, [400, 600], [1, 0]);

    useEffect(() => {
        AOS.init({ once: true, duration: 800 }); 
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen flex flex-col overflow-x-hidden relative">
            
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen md:min-h-[130vh] flex flex-col justify-start pt-40 md:pt-40 items-center px-4 overflow-hidden">
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-purple-600/10 blur-[120px] rounded-half pointer-events-none"></div>
                <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-0 flex justify-center pointer-events-none
                    w-[100vw]       h-[10vh]           /* Mobile */
                    sm:w-[100vw]    sm:h-[20vh]        /* Tab */
                    md:w-[100vw]    md:h-[20vh]        /* Desktop */">
                        
                    <img src="/assets/hero.png" alt="Hero circle" className="w-full h-[100vh] md:h-[115vh] opacity-100 "/>
                    
                </div>

                {/* 2. HERO CONTENT*/}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-0 pb-20 mt-0 mb-2 md:md-4 mb:lg-8">
                    {/* 1. Main Heading */}
                    <h1 className="font-['Manrope'] font-medium text-[26px] md:text-[40px] lg:text-[60px] leading-[1.1] lg:leading-[80px] tracking-tight text-white mb-0 max-w-6xl">
                    AI-Driven Digital Transformation for Secure, <br />
                    Scalable Business Growth
                    </h1>

                    {/* 2. Subheading */}
                    <h2 className="text-white text-sm  max-w-3xl mb-6 leading-relaxed mt-2 pt-0 md:pt-4">
                        Delivering AI-Powered Automation, Secure Cloud Infrastructure & Enterprise-Grade <br />
                        Software - Scalable Solutions for Digital Transformation
                    </h2>

                    {/* 3. Buttons (Side by Side) */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 mb-6 mt-2">
                        <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
                        Start Your Project ↗
                        </button>
                    </div> */}

                    <div className="pt-0 md:pt-4">
                        <button className="group relative px-8 rounded-full border border-white bg-transpare overflow-hidden transition-colors duration-300 hover:border-white mb-2 md:mb-4 lg:mb-4">
                            <div className="absolute inset-0 bg-white translate-y-full transition-transfo duration-100 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
                    
                            {/* === 2. ROLLING TEXT CONTENT === */}
                            <div className="relative z-10 overflow-hidden">
                            <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier  19,1,0.22,1)] group-hover:-translate-y-full">
                              <Link href="/contact"> 
                                <span className="flex items-center gap-2 text-lg text-white py-1">
                                Start Your Project
                                <ArrowUpRight className="w-5 h-5" />
                                </span>
                                <span className="flex items-center gap-2 text-lg text-black py-1 absolute top-full left-0 w-full">
                                Start Your Project
                                <ArrowUpRight className="w-5 h-5" />
                                </span>
                               </Link>  
                            </div>
                            </div>
                        </button>
                    </div>

                    {/* 4. Stats Box  */}
                    <div className="w-400px  bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-2 md:p-4 mt-2 mb-0 md:mb-2 lg:mb-2">
                        <div className="grid grid-cols-0 md:grid-cols-4 gap-0 text-center text-white ">
                        
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl mb-1 font-bold font-['Bebas_Neue']">30+</span>
                            <span className="text-sm text font-['Space_Grotesk']">Active Clients</span>
                        </div>
                        
                        {/* Stat 2 */}
                        <div className="flex flex-col items-center border-l border-white/10 md:border-none">
                            <span className="text-2xl md:text-3xl mb-1 font-bold font-['Bebas_Neue']">100%</span>
                            <span className="text-sm text font-['Space_Grotesk']">Secure Delivery</span>
                        </div>
                        
                        {/* Stat 3 */}
                        <div className="flex flex-col items-center border-t border-white/10 pt-4 md:border-none md:pt-0">
                            <span className="text-1xl md:text-2xl mb-1 uppercase tracking-tighter font-bold font-['Bebas_Neue']">Global Reach</span>
                            <span className="text-sm text font-['Space_Grotesk']">Across Key Markets</span>
                        </div>
                        
                        {/* Stat 4 */}
                        <div className="flex flex-col items-center border-t border-l border-white/10 pt-4 md:border-t-0 md:pt-0">
                            <span className="text-2xl md:text-3xl mb-1 font-bold font-['Bebas_Neue']">4.5 / 5</span>
                            <span className="text-sm text font-['Space_Grotesk']">(CSAT)</span>
                        </div>

                        </div>
                    </div>

                    {/* 5. Ratings */}
                    <div className="flex grid grid-cols-0 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white rounded-md px-4 py-1 flex flex-col items-center text-left text-black text-xs font-bold font-['Manrope']">
                            <span className="text-black font-bold">4.8 Google</span>
                            <span className="text-yellow-600">⭐⭐⭐⭐⭐</span>
                            
                            <span className="font-normal text-[8px] text-blue-500">Customer Reviews</span>
                        </div>
                        <div className="bg-white rounded-md px-4 py-1 flex flex-col items-center text-black text-xs ">
                            <span className="text-black font-bold">Trustpilot</span>
                            <span className="whitespace-nowrap"><span className="text-white bg-green-500 px-1 text-[10px] mt-1">★★★★</span><span className="text-white bg-gray-500 px-1 text-[10px] mt-1">★</span> </span>
                            <span className="font-normal text-[8px] text-gray-500 ">Rated 4/5</span>
                        </div>
                    </div>

                    </div>
            </section>

            {/* --- VERTICALS SECTION --- */}
            <div className="container mx-auto px-4">
                <VerticalsCarousel />
            </div>

            {/* --- ABOUT US --- */}
            <section className="container mx-auto py-16 px-4 md:px-6 mb-8" data-aos="fade-up">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="font-[''Manrope] text-3xl md:text-4xl font-normal text-white mb-6 tracking-wide">
                            Where Vision Meets Reality <br/>
                            
                        </h2>
                        <p className="text-white mb-6 leading-relaxed">
                            <strong>MatchBest Group</strong> is a digital innovation and technology consulting company delivering AI-driven solutions, cloud platforms, and custom software development for modern enterprises.
                        </p>
                        <p className="text-white mb-8 leading-relaxed">
                            From legacy system modernisation and cloud migration to Generative AI solutions, AI automation, and enterprise application development, we design and build technology that drives measurable business outcomes. 
                        </p>
                        <p className="text-white mb-8 leading-relaxed">
                            Whether you’re migrating mission-critical workloads to the cloud, deploying AI chatbots and CX automation or an e-commerce platform, our engineering-first approach ensures performance, compliance, and long-term growth at every stage of your digital journey.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/about" className="relative group inline-flex items-center py-3 px-2">
                                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full opacity-80 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100"></div>

                                <div className="relative z-10 flex items-center gap-4 pl-3">
                                    <span className="text-white font-['Space_Grotesk'] text-lg">
                                    More About Us
                                    </span>
                                    <svg 
                                        width="50" 
                                        height="14" 
                                        viewBox="0 0 50 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-white transition-transform duration-300 group-hover:translate-x-2">
                                        <path d="M1 7H49" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M42 1L49 7L42 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[300px] md:h-[300px] relative flex flex-col items-center justify-center py-6">
                        <Image 
                                src="/assets/about.png" 
                                alt="ISO 20000" 
                                fill 
                                className="object-contain"
                                />

                        {/* Bottom Text */}
                        {/* <p className="font-['Manrope'] text-gray-400 text-center text-sm md:text-base mt-8 max-w-2xl px-4 leading-relaxed font-light">
                            We maintain strict quality and security standards to ensure the highest level of trust and performance.
                        </p> */}
                    </div>
                </div>
            </section>

            {/* --- FUTURE-READY SOLUTIONS SECTION --- */}
            <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-start pt-20 pb-20">
                {/* --- HEADING --- */}
                <div className="container mx-auto text-center relative z-20 px-4 mb-16">
                    <h2 className="font-['Manrope'] text-5xl md:text-6xl text-white mb-6">
                    Future-Ready Solutions
                    </h2>
                    <p className="font-['Manrope'] text-gray-300 max-w-3xl mx-auto text-lg font-light">
                    We deliver end-to-end technology solutions that help businesses build faster, scale smarter, and stay secure.
                    </p>
                </div>

                {/* --- LAYER 2: CARDS GRID  --- */}
                <div className="container mx-auto relative z-20 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cardsData.map((card) => (
                    <div 
                        key={card.id}
                        className="group relative p-8 rounded-[32px] border border-white/10 bg-[#0f0f0f] overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9] via-[#4c1d95] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* 2. CARD CONTENT */}
                        <div className="relative z-10 flex flex-col h-full">
                        
                        {/* Icon Box */}
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                            <Image src={card.icon} alt="icon" width={28} height={28} className="object-contain"/>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-['Manrope'] font-semibold text-white mb-3">
                            {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-['Manrope'] font-light group-hover:text-gray-200 transition-colors">
                            {card.desc}
                        </p>

                        {/* 3. EXPLORE BUTTON (Reveal Animation) */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                            <div className="overflow-hidden">
                            {/* <button className="w-full py-3 mt-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all">
                                Explore 
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button> */}
                            </div>
                        </div>

                        </div>
                    </div>
                    ))}
                </div>

                {/* --- LAYER 3: BACKGROUND SVG --- */}
                <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
                    <img 
                    src="/assets/bg.svg" 
                    alt="Purple Background Curve"
                    className="w-full h-auto object-cover opacity-100"
                    />
                </div>
        </section>

{/* --- WORDS FROM OUR CLIENTS --- */}
                <section className="w-full py-10 bg-black px-6 md:px-16 lg:px-20">
                    <div className="container mx-auto">
                        <div className="container mx-auto text-center relative z-20 px-4 mb-16">
                            <h2 className="font-['Manrope'] text-4xl md:text-6xl text-white mb-6">
                            Words From Our Clients
                            </h2>
                            <p className="font-['Manrope'] text-gray-300 max-w-3xl mx-auto text-lg font-light">
                            Hear directly from our clients about their experience working with us.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
                        {testimonials.map((item) => (
                            <div 
                            key={item.id}
                            className={`relative p-2 rounded-2xl bg-[#171717] flex flex-col justify-between group ${item.className}`}>
                            
                            {/* QUOTE ICON */}
                            <div className="absolute bottom-4 right-6 z-0 pointer-events-none">
                                <svg width="87" height="70" viewBox="0 0 87 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.2684 33.9039C6.54936 33.9039 -0.000160217 27.021 -0.000160217 16.8227C-0.000160217 7.64549 7.52747 -8.39233e-05 17.7232 -8.39233e-05C28.8908 -8.39233e-05 37.1427 9.17713 37.1427 23.1951C37.1427 55.0569 14.3246 67.8016 -0.000160217 69.3333V55.3153C9.7127 53.5316 20.6327 43.5917 21.1217 32.6244C20.6327 32.8765 18.6951 33.9039 16.2684 33.9039ZM65.786 33.9039C56.0794 33.9039 49.5236 27.021 49.5236 16.8227C49.5236 7.64549 57.0513 -8.39233e-05 67.247 -8.39233e-05C78.4146 -8.39233e-05 86.6665 9.17713 86.6665 23.1951C86.6665 55.0569 63.8484 67.8016 49.5236 69.3333V55.3153C59.2365 53.5316 70.1565 43.5917 70.6456 32.6244C70.1565 32.8765 68.2189 33.9039 65.786 33.9039Z" fill="#3E3E3E"/>
                                </svg>

                            </div>

                            {/* CONTENT LAYER */}
                            <div className="relative z-10 flex flex-col h-full">
                                
                                {/* 1. Main Quote Text */}
                                <p className="text-gray-300 font-['Manrope'] text-lg font-light leading-relaxed mb-2">
                                "{item.quote}"
                                </p>

                                {/* 2. Bottom Section */}
                                <div className="mt-auto">
                                {/* Purple Stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(item.stars)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#8b5cf6] fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    ))}
                                </div>

                                {/* Author Name */}
                                <h4 className="text-white font-['Manrope'] font-medium text-base">
                                    — {item.name},
                                </h4>
                                
                                {/* Role */}
                                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-['Manrope']">
                                    {item.role}
                                </p>
                                </div>

                            </div>
                            </div>
                        ))}
                        </div>

                    </div>
            </section>
                

{/* WHY CHOOSE US SECTION */}
    <section className="w-full bg-black py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Heading */}
      <div className="container mx-auto mb-16 text-center">
            <div className="container mx-auto text-center relative z-20 px-4 mb-16">
                <h2 className="font-['Manrope'] text-4xl md:text-6xl text-white mb-6">
                    Why Choose Us?
                </h2>

                <p className="font-['Manrope'] text-gray-300 max-w-3xl mx-auto text-lg font-light">
                    We deliver reliable, innovative solutions designed to drive results and future-proof your business.
                </p>
            </div>    
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          
          {/* --- COLUMN 1: LEFT CARDS (Text) --- */}
          <div className="lg:col-span-4 flex flex-col justify-between h-[600px] relative z-10">
            {features.map((item, index) => (
              <div 
                key={item.id}
                className={`bg-[#171717] p-8 rounded-2xl border border-white/5 h-[150px] flex flex-col justify-center relative group transition-all duration-300 ${index === 1 ? 'lg:translate-x-26' : ''}`}
    >
                <h3 className="text-white text-2xl font-['Manrope'] font-medium mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-md leading-relaxed font-['Manrope'] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* --- COLUMN 2: CENTER LINES (SVG Animation) --- */}
          <div className="hidden lg:col-span-4 lg:flex items-center justify-center relative pointer-events-none">
            <svg width="858" height="479" viewBox="0 0 858 479" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H263C276.255 1 287 11.7452 287 25V215C287 228.255 297.745 239 311 239M311 239H423M311 239H435.688M311 239C297.745 239 287 249.745 287 263V454C287 467.255 276.255 478 263 478H1M857 1H595C581.745 1 571 11.7452 571 25V215C571 228.255 560.255 239 547 239M547 239H435M547 239C560.255 239 571 249.745 571 263V454C571 467.255 581.745 478 595 478H857M189 240L376 239M669 240L482 239" stroke="url(#paint0_linear_79_936)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
            <defs>
            <linearGradient id="paint0_linear_79_936" x1="-81.1548" y1="430.3" x2="938.757" y2="373.038" gradientUnits="userSpaceOnUse">
            <stop stop-color="#333333" stop-opacity="0.1"/>
            <stop offset="0.5" stop-color="#9F14FF"/>
            <stop offset="1" stop-color="#333333" stop-opacity="0.1"/>
            </linearGradient>
            </defs>
            </svg>
          </div>

          {/* --- COLUMN 3: RIGHT IMAGES --- */}
          <div className="lg:col-span-4  flex flex-col justify-between h-[600] relative z-10">
            {features.map((item, index) => (
              <div 
                key={item.id}
                className="h-[170px] rounded-2xl overflow-hidden relative group mb-4"
              >
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className={`h-[170px] rounded-2xl overflow-hidden relative group transition-all duration-300 ${index === 1 ? 'lg:-translate-x-16' : ''}`}
                />
                
                {/* Optional Overlay for better text contrast if needed later */}
                <div className="absolute inset-0 bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
                

    {/* TECHNOLOGIES SECTION */}
    <section className="w-full bg-gray-200 py-16 overflow-hidden">
      
      {/* Heading */}
      <div className="container mx-auto text-center relative z-20 px-4 mb-16">
        <h2 className="font-['Manrope'] text-5xl md:text-6xl text-black mb-6">
            Our Technology Stack
        </h2>
    </div>

      {/* --- MARQUEE CONTAINER --- */}
      <div className="relative w-full group/marquee">
        
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div> */}

        {/* Sliding Track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          
          {/* Loop 1 */}
          <div className="flex items-center gap-16 px-8">
            {techStack.map((tech, index) => (
              <div key={`tech-1-${index}`} className="flex flex-col items-center justify-center gap-4 group min-w-[80px]">
                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
                   <Image 
                     src={tech.icon} 
                     alt={tech.name} 
                     fill 
                     className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                   />
                </div>
                {/* Tech Name  */}
                {/* <span className="text-gray-500 text-sm font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span> */}
              </div>
            ))}
          </div>

          {/* Loop 2: Duplicate Set */}
          <div className="flex items-center gap-16 px-8">
            {techStack.map((tech, index) => (
              <div key={`tech-2-${index}`} className="flex flex-col items-center justify-center gap-4 group min-w-[80px]">
                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
                   <Image 
                     src={tech.icon} 
                     alt={tech.name} 
                     fill 
                     className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                   />
                </div>
                {/* <span className="text-gray-500 text-sm font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span> */}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>

{/* OUR APPROACH */}
<section className="w-full bg-black py-24 px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[800px] overflow-hidden relative">
      
      {/* 1. Purple Background Glow (Behind Cards) */}
      <div 
        className="absolute top-1/2 right-[-10%] md:right-0 -translate-y-1/2 w-[800px] h-[600px] blur-[100px] rounded-full pointer-events-none z-0 opacity-60"
        style={{
          background: 'linear-gradient(180deg, #b05ef7 0%, #a861de 30%, #7E61C8 60%, #B66FEA 100%)'
        }}
      ></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="max-w-xl">
          <h2 className="text-white text-5xl md:text-6xl font-['Manrope'] font-normal mb-8 tracking-wide">
            Our Approach
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-['Manrope'] font-light leading-relaxed">
            A step-by-step look at how we operate, from strategy to execution, ensuring quality at every stage.
          </p>
        </div>

        {/* --- RIGHT SIDE CARDS --- */}
        <div className="flex flex-col gap-6 group/list w-full max-w-md ml-auto">
          
          {steps.map((step) => (
            <div 
              key={step.id}
              className="group/card relative p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 
                transition-all duration-500 ease-in-out cursor-pointer
                
                /* --- HOVER LOGIC --- */
                /* 1. Default State: Normal */

                /* 2. */
                group-hover/list:scale-95 group-hover/list:opacity-40

                hover:bg-[#121212] 
                
                /* 3. */
                hover:!scale-105 hover:!opacity-100 hover:bg-[#151515] 
              "
            >
              {/* Number Circle */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3 group-hover/card:bg-purple-500 transition-colors duration-500">
                <span className="text-black font-bold text-lg group-hover/card:text-white">
                    {step.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-['Manrope'] font-semibold mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover/card:text-gray-200">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>


{/* FAQ Section */}
<section className="relative w-full bg-black py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
    {/* Background Glow */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/30 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-4 order-2 lg:order-1">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={item.id}
                  className={`
                    bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                    ${isOpen 
                      ? 'bg-white ' 
                      : 'bg-[#1a1a1a]/60 border-white/5' 
                    }
                  `}
                  onClick={() => toggleFAQ(index)}
                >
                  
                  {/* Question Header */}
                  <div className="flex items-center justify-between p-3 md:p-4">
                    <h3 className="text-black font-['Manrope'] font-medium text-lg md:text-xl pr-4">
                      {item.question}
                    </h3>
                    
                    {/* Icon */}
                    <Plus 
                      size={24} 
                      className={`text-black-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {/* Answer Area*/}
                  <div 
                    className={`
                      transition-all duration-300 ease-in-out px-2 md:px-4
                      ${isOpen ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}
                    `}
                  >
                    <p className="text-gray-500 font-['Manrope'] leading-relaxed pl-0">
                      {item.answer}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full order-1 lg:order-2 lg:sticky lg:top-24">
            <h2 className="text-white font-['Manrope'] text-5xl md:text-6xl leading-tight mb-8">
              <span className="font-light block">Frequently</span>
              <span className="font-medium block">Asked Questions</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light max-w-md">
              Got a question? Find fast answers here! If you still can't locate what you need, dive into our complete documentation.
            </p>
            
            {/* "Still need help?" Button */}
            <div className="flex items-center gap-4 cursor-pointer group w-fit">
              {/* <div className="relative w-12 h-12 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[#6168DE] rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                 <span className="relative z-10 text-white font-medium text-sm">Still</span>
              </div>
              <div className="flex items-center gap-2 text-white text-lg font-['Manrope']">
                <span>need help?</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>

{/* --- GLOBAL PRESENCE SECTION --- */}
<section className="w-full bg-[#0a0a0a] py-16 px-4 md:px-8 overflow-hidden min-h-[80vh] ">
  
      {/* === HEADING SECTION === */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-['Manrope'] font-normal mb-6">
          Our Global Presence
        </h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Our reach across key international markets, enabling us to collaborate seamlessly, serve diverse clients, and deliver consistent value worldwide.
        </p>
      </div>

      {/* === MAP CONTAINER === */}
      <div className="relative w-1x1 max-w-3xl mx-auto aspect-[16/9] md:aspect-[2/1]">
        
        {/* Map  */}
        <div className="absolute inset-0 opacity-100">
           <Image 
             src="/assets/map.svg" 
             alt="World Map" 
             fill
             className="object-contain invert brightness-0"
           />
        </div>

        {/* Locations Markers */}
        {locations.map((loc, index) => (
          <div 
            key={index}
            className="absolute flex flex-col items-center group cursor-pointer z-10 "
            style={{ top: loc.top, left: loc.left }}
          >
            
            {/* --- THE DOT --- */}
            <div className="relative flex items-center justify-center w-6 h-6 mb-2">
              <div className="absolute w-full h-full rounded-full opacity-100"></div>
              <div className="relative w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>

            {/* --- THE WHITE CARD --- */}
            
            <div 
              className={`
                absolute bg-white rounded-md min-w-[100px] text-center
                transition-all duration-300 

                ${loc.align.includes('top') ? 'items-end' : ''}
                ${loc.align.includes('bottom') ? 'items-start' : ''}
                ${loc.align === 'left' || loc.align === 'right' ? 'items-center' : ''}
                
                ${loc.align === 'top' ? 'bottom-full mb-6' : ''}
                ${loc.align === 'bottom' ? 'top-full mt-6' : ''}
                ${loc.align === 'left' ? 'right-full mr-10 -top-2' : ''}
                ${loc.align === 'top-right' ? 'left-full ml-10 -top-10' : ''}
                ${loc.align === 'top-left' ? 'right-full mr-10 -top-15' : ''}
              `}
            >
            <div className="text-center">  {/* block group-hover:hidden */}
              <h4 className="text-black font-bold text-sm md:text-md uppercase font-['Manrope']">
                {loc.country}
              </h4>
              <p className="text-gray-500 text-xs scale-75 font-medium whitespace-nowrap">
                {loc.role}
              </p>
            </div>  
            {/* <div className="hidden group-hover:block h-20 text-center p-1 w-full">
            <div className="relative w-20 h-10 mx-auto rounded-2x1 overflow-hidden">
              <Image
                src={`https://loremflickr.com/400/300/${loc.country.replace(" ", "+")},city,architectur all`}
                alt={`${loc.country} View`}
                fill
                className="object-cover"
                unoptimized={true}/>
              </div>

              
              <p className="w-full text-gray-700 text-xs scale-50 font-normal px-1">
                {loc.address}
              </p>
            </div> */}
              {/* Connector Lines */}
              <div 
                className={`
                  absolute bg-[#9747FF] z-[-1]
                  ${loc.align === 'top' ? 'w-[1px] h-10 top-full left-1/2 -translate-x-1/2' : ''}
                  ${loc.align === 'bottom' ? 'w-[1px] h-10 bottom-full left-1/2 -translate-x-1/2' : ''}
                  ${loc.align === 'left' ? 'h-[1px] w-10 left-full top-1/2 -translate-y-1/2' : ''}
                  ${loc.align === 'top-right' ? 'w-[1px] h-14 bg-[#9747FF] top-full left-0 origin-top-left rotate-75' : ''}
                  ${loc.align === 'top-left' ? 'w-[1px] h-14 bg-[#9747FF] top-full right-0 origin-top-right -rotate-75' : ''}
                `}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>


{/* --- CONTACT SECTION --- */}
<section className="relative z-10 py-20 bg-black text-center px-4">
    <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-10 relative overflow-hidden">
        
        {/* Background SVG */}
        <div className="absolute inset-0 z-0 opacity-50" 
            style={{ 
                backgroundImage: "url('/assets/contact_bg.svg')", 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        ></div>

        {/* Content */}
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
</section>

        </div>
    );
}