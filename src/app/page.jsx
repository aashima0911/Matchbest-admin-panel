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

const certificates = [
  { src: "/assets/c1-removebg-preview.png", alt: "ISO 20000-1:2018" },
  { src: "/assets/c2-removebg-preview.png", alt: "ISO 42001" },
  { src: "/assets/c3-removebg-preview.png", alt: "ISO 27001" },
  { src: "/assets/c4-removebg-preview.png", alt: "CMMI" },
  { src: "/assets/c5-removebg-preview.png", alt: "SOC 2 Type 2" },
  { src: "/assets/hippa_1-removebg-preview.png", alt: "SOC 2 Type 2" },
];


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
    quote: "Their AI solutions didn't just automate tasks-they helped us make smarter business decisions.",
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
    img: "/assets/meeting.jpg",
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
    img: "/assets/future.webp",
  },
];

const techStack = [
  { name: "HTML5", icon: "/assets/css.png", width: 35, height: 35 },
  { name: "CSS3", icon: "/assets/css.png", width: 35, height: 35 },
  { name: "JavaScript", icon: "/assets/javascript.png", width: 35, height: 35 },
  { name: "Python", icon: "/assets/python.png", width: 35, height: 35 },
  { name: "MongoDB", icon: "/assets/mongodb.png", width: 35, height: 35 },
  { name: "TypeScript", icon: "/assets/typescript.png", width: 35, height: 35 },
  { name: "Express", icon: "/assets/express.png", width: 35, height: 35 }, 
  { name: "AWS", icon: "/assets/aws.png", width: 25, height: 30 },
  { name: "Docker", icon: "/assets/docker.png", width: 35, height: 35 },
  { name: "Azure", icon: "/assets/azure.png", width: 35, height: 35 },
  { name: "Tailwind", icon: "/assets/tailwind.png", width: 35, height: 35 },
  { name: "Bootstrap", icon: "/assets/bootstrap.png", width: 35, height: 35 },
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
  { id: 1, question: "How can we help your business?", answer: "We help businesses scale and innovate with AI automation, secure cloud solutions, and custom software development. From legacy modernisation and cloud migration to Generative AI and enterprise platforms, we deliver technology that solves real business problems. Our client-first approach ensures security, scalability, and measurable ROI." },
  { id: 2, question: "Why should I choose you over other companies?", answer: "We combine deep technical expertise with a client-first mindset to deliver secure, scalable, and high-impact solutions. Our team focuses on quality, transparency, and long-term value, not shortcuts. When you work with us, you gain a trusted partner committed to real results and sustainable growth." },
  { id: 3, question: "How long does a project usually take?", answer: "Project timeline depends on scope, complexity and requirements. It can be defined after an initial consultation." },
  { id: 4, question: "Does MatchBest Group work with startups?", answer: "Yes, surely we love to work with startups by offering them scalable MVP development and flexible engagement models, specifically for early-stage growing businesses." },
  { id: 5, question: "Do you provide ongoing support after delivery?", answer: "Absolutely, we offer end-to-end managed services, cloud monitoring and AI optimisation services, even after delivering the project to client." },
  { id: 6, question: "How do you ensure data security?", answer: "Security is our priority. We follow industry best practices, including encryption, regular audits, and secure cloud architectures." },
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
    align: "top" , md:"top-left"
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
    const circleX = useTransform(scrollY, [0, 600], ["-50%", "-50%"]);
    const circleY = useTransform(scrollY, [0, 360], [0, -500]);
    const circleScale = useTransform(scrollY, [0, 500], [1, 0.5]);
    const circleOpacity = useTransform(scrollY, [400, 500], [1, 2]);

    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    

    useEffect(() => {
        AOS.init({ once: true, duration: 800 }); 
    }, []);

    return (
      <div className="bg-[#050505] min-h-screen flex flex-col overflow-x-hidden relative">
 
        {/* --- HERO SECTION --- */}
        <section className="relative flex flex-col justify-start pt-40 md:pt-40 items-center px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-purple-600/10 blur-[120px] rounded-half pointer-events-none"></div>
          <div className="absolute top-[200px] left-1/2 -translate-x-1/2 z-0 flex justify-center pointer-events-none w-[150vw] sm:w-[100vw] md:w-[120vw] h-[300px]">
            <motion.svg 
                width="100%" 
                height="auto" 
                viewBox="0 0 2534 2534" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMin slice" 
                style={{
                  y: circleY,
                  scale: circleScale,
                  opacity: circleOpacity,
                  originY: 0,
                  originX: 0, 
                }}
                className="overflow-visible"
              >
                <g clipPath="url(#clip0_332_3081)">
                  <rect width="2533.07" height="2533.07" rx="1266.54" fill="white" fillOpacity="0.05" />
                  
                  {/* Glow layers */}
                  <g filter="url(#filter0_f_332_3081)">
                    <path d="M2533.07 1266.07C2533.07 1965.3 1967.45 2532.14 1267.46 2532.14C567.46 2532.14 0 1965.3 0 1266.07C0 566.839 567.46 0 1267.46 0C1967.45 0 2533.07 566.839 2533.07 1266.07Z" fill="#950DF6" />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_f_332_3081" x="-100" y="-100" width="2733.07" height="2732.14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_332_3081"/>
                  </filter>
                  <filter id="filter1_f_332_3081" x="-134" y="-133" width="2801" height="2800" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_332_3081"/>
                  </filter>
                  <filter id="filter2_f_332_3081" x="-34" y="-33" width="2601" height="2600" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_332_3081"/>
                  </filter>
                  <linearGradient id="paint0_linear_332_3081" x1="4243.74" y1="-1709" x2="-172.24" y2="2756.84" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#121212"/>
                  <stop offset="1" stop-color="#8300DD"/>
                  </linearGradient>
                  <clipPath id="clip0_332_3081">
                  <rect width="2533.07" height="2533.07" rx="1266.54" fill="white"/>
                  </clipPath>
                </defs>
              </motion.svg>
            </div>

                {/* 2. HERO CONTENT*/}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-0 pb-16 mt-0 mb-2 md:md-4 mb:lg-8">
                    {/* 1. Main Heading */}
                    <h1 className="font-['Manrope'] font-medium text-[36px] md:text-[40px] lg:text-[60px] leading-[1.1] lg:leading-[80px] tracking-tight text-white sm:mb-2 max-w-6xl">
                    {t('hero.title')}
                    </h1>

                    {/* 2. Subheading */}
                    <h2 className="text-white text-xl  max-w-3xl mb-6 leading-relaxed sm:mt-4 md:mt-2 pt-0 md:pt-4">
                        {t('hero.subtitle')}
                    </h2>

                    {/* 3. Buttons (Side by Side) */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 mb-6 mt-2">
                        <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
                        Start Your Project ↗
                        </button>
                    </div> */}

                    <div className="pt-0 md:pt-4">
                        <button className="group relative px-8 rounded-full border border-white bg-transpare overflow-hidden transition-colors duration-300 hover:border-white mb-4 md:mb-4 lg:mb-4">
                            <div className="absolute inset-0 bg-white translate-y-full transition-transfo duration-100 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
                    
                            {/* === 2. ROLLING TEXT CONTENT === */}
                            <div className="relative z-10 overflow-hidden">
                            <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier  19,1,0.22,1)] group-hover:-translate-y-full">
                              <Link href="/contact"> 
                                <span className="flex items-center gap-2 text-lg text-white py-1">
                                {t('hero.cta')}
                                <ArrowUpRight className="w-5 h-5" />
                                </span>
                                <span className="flex items-center gap-2 text-lg text-black py-1 absolute top-full left-0 w-full">
                                {t('hero.cta')}
                                <ArrowUpRight className="w-5 h-5" />
                                </span>
                               </Link>  
                            </div>
                            </div>
                        </button>
                    </div>

                    {/* 4. Stats Box  */}
                    <div className="w-400px  bg-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-2 md:p-4 mt-2 mb-4 md:mb-4 lg:mb-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 lg:gap-4 text-center text-white ">
                        
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl mb-1 font-bold font-['Bebas_Neue']">{t('hero.stats.activeClients')}</span>
                            <span className="text-sm text font-['Space_Grotesk']">{t('hero.stats.activeClientsLabel')}</span>
                        </div>
                        
                        {/* Stat 2 */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl mb-1 font-bold font-['Bebas_Neue']">{t('hero.stats.secureDelivery')}</span>
                            <span className="text-sm text font-['Space_Grotesk']">{t('hero.stats.secureDeliveryLabel')}</span>
                        </div>
                        
                        {/* Stat 3 */}
                        <div className="flex flex-col items-center">
                            <span className="text-1xl md:text-2xl mb-1 uppercase tracking-tighter font-bold font-['Bebas_Neue']">{t('hero.stats.globalReach')}</span>
                            <span className="text-sm text font-['Space_Grotesk']">{t('hero.stats.globalReachLabel')}</span>
                        </div>
                        
                        {/* Stat 4 */}
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl mb-1 font-bold font-['Bebas_Neue']">{t('hero.stats.csat')}</span>
                            <span className="text-sm text font-['Space_Grotesk']">{t('hero.stats.csatLabel')}</span>
                        </div>

                        </div>
                    </div>

                    {/* 5. Ratings */}
                    <div className="flex grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white rounded-md px-4 py-1 flex flex-col items-center text-left text-black text-lg font-bold font-['Manrope']">
                          <span className="text-black font-bold">{t('hero.ratings.google')}</span>
                          <span className="flex flex-cols-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0444 1.51909C11.3543 0.895377 12.244 0.895376 12.5539 1.51909L15.0848 6.61295C15.2075 6.85994 15.4433 7.03127 15.7161 7.07165L21.3428 7.9046C22.0317 8.00659 22.3067 8.85278 21.8093 9.34025L17.7468 13.3214C17.5498 13.5144 17.4597 13.7916 17.5056 14.0636L18.4522 19.6722C18.5681 20.359 17.8483 20.8819 17.231 20.5595L12.1893 17.9261C11.9449 17.7984 11.6534 17.7984 11.4089 17.9261L6.36729 20.5595C5.74997 20.8819 5.03015 20.359 5.14605 19.6722L6.09261 14.0636C6.1385 13.7916 6.04844 13.5144 5.85145 13.3214L1.789 9.34025C1.29157 8.85278 1.56652 8.00659 2.25547 7.9046L7.88211 7.07165C8.15493 7.03127 8.39074 6.85994 8.51346 6.61295L11.0444 1.51909Z" fill="#FEA500"/>
                            </svg>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0444 1.51909C11.3543 0.895377 12.244 0.895376 12.5539 1.51909L15.0848 6.61295C15.2075 6.85994 15.4433 7.03127 15.7161 7.07165L21.3428 7.9046C22.0317 8.00659 22.3067 8.85278 21.8093 9.34025L17.7468 13.3214C17.5498 13.5144 17.4597 13.7916 17.5056 14.0636L18.4522 19.6722C18.5681 20.359 17.8483 20.8819 17.231 20.5595L12.1893 17.9261C11.9449 17.7984 11.6534 17.7984 11.4089 17.9261L6.36729 20.5595C5.74997 20.8819 5.03015 20.359 5.14605 19.6722L6.09261 14.0636C6.1385 13.7916 6.04844 13.5144 5.85145 13.3214L1.789 9.34025C1.29157 8.85278 1.56652 8.00659 2.25547 7.9046L7.88211 7.07165C8.15493 7.03127 8.39074 6.85994 8.51346 6.61295L11.0444 1.51909Z" fill="#FEA500"/>
                            </svg>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0444 1.51909C11.3543 0.895377 12.244 0.895376 12.5539 1.51909L15.0848 6.61295C15.2075 6.85994 15.4433 7.03127 15.7161 7.07165L21.3428 7.9046C22.0317 8.00659 22.3067 8.85278 21.8093 9.34025L17.7468 13.3214C17.5498 13.5144 17.4597 13.7916 17.5056 14.0636L18.4522 19.6722C18.5681 20.359 17.8483 20.8819 17.231 20.5595L12.1893 17.9261C11.9449 17.7984 11.6534 17.7984 11.4089 17.9261L6.36729 20.5595C5.74997 20.8819 5.03015 20.359 5.14605 19.6722L6.09261 14.0636C6.1385 13.7916 6.04844 13.5144 5.85145 13.3214L1.789 9.34025C1.29157 8.85278 1.56652 8.00659 2.25547 7.9046L7.88211 7.07165C8.15493 7.03127 8.39074 6.85994 8.51346 6.61295L11.0444 1.51909Z" fill="#FEA500"/>
                            </svg>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0444 1.51909C11.3543 0.895377 12.244 0.895376 12.5539 1.51909L15.0848 6.61295C15.2075 6.85994 15.4433 7.03127 15.7161 7.07165L21.3428 7.9046C22.0317 8.00659 22.3067 8.85278 21.8093 9.34025L17.7468 13.3214C17.5498 13.5144 17.4597 13.7916 17.5056 14.0636L18.4522 19.6722C18.5681 20.359 17.8483 20.8819 17.231 20.5595L12.1893 17.9261C11.9449 17.7984 11.6534 17.7984 11.4089 17.9261L6.36729 20.5595C5.74997 20.8819 5.03015 20.359 5.14605 19.6722L6.09261 14.0636C6.1385 13.7916 6.04844 13.5144 5.85145 13.3214L1.789 9.34025C1.29157 8.85278 1.56652 8.00659 2.25547 7.9046L7.88211 7.07165C8.15493 7.03127 8.39074 6.85994 8.51346 6.61295L11.0444 1.51909Z" fill="#FEA500"/>
                            </svg>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0444 1.51909C11.3543 0.895377 12.244 0.895376 12.5539 1.51909L15.0848 6.61295C15.2075 6.85994 15.4433 7.03127 15.7161 7.07165L21.3428 7.9046C22.0317 8.00659 22.3067 8.85278 21.8093 9.34025L17.7468 13.3214C17.5498 13.5144 17.4597 13.7916 17.5056 14.0636L18.4522 19.6722C18.5681 20.359 17.8483 20.8819 17.231 20.5595L12.1893 17.9261C11.9449 17.7984 11.6534 17.7984 11.4089 17.9261L6.36729 20.5595C5.74997 20.8819 5.03015 20.359 5.14605 19.6722L6.09261 14.0636C6.1385 13.7916 6.04844 13.5144 5.85145 13.3214L1.789 9.34025C1.29157 8.85278 1.56652 8.00659 2.25547 7.9046L7.88211 7.07165C8.15493 7.03127 8.39074 6.85994 8.51346 6.61295L11.0444 1.51909Z" fill="#FEA500"/>
                            </svg>
                          </span>  

                        <span className="font-normal text-[12px] text-blue-500">Customer Reviews</span>
                        </div>
                        <div className="bg-white rounded-md px-4 py-1 flex flex-col items-center text-black text-lg ">
                            <span className="text-black font-bold">{t('hero.ratings.trustpilot')}</span>
                            <span className="flex flex-cols-1">
                            <svg width="117" height="14" viewBox="0 0 127 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="23.4651" height="23.4651" fill="#00B57A"/>
                            <path d="M13.833 9.73451H20.6309L15.1309 13.7306V13.7316L12.2178 15.8165L15.4199 14.6203L17.2314 20.1954L11.7324 16.1994L6.23242 20.1954L8.33398 13.7306L2.83398 9.73451H9.63184L11.7324 3.26967L13.833 9.73451Z" fill="white"/>
                            <rect width="23.4651" height="23.4651" transform="translate(25.8413)" fill="#00B57A"/>
                            <path d="M39.6743 9.73451H46.4722L40.9722 13.7306V13.7316L38.0591 15.8165L41.2612 14.6203L43.0728 20.1954L37.5737 16.1994L32.0737 20.1954L34.1753 13.7306L28.6753 9.73451H35.4731L37.5737 3.26967L39.6743 9.73451Z" fill="white"/>
                            <rect width="23.4651" height="23.4651" transform="translate(51.6826)" fill="#00B57A"/>
                            <path d="M65.5156 9.73451H72.3135L66.8135 13.7306V13.7316L63.9004 15.8165L67.1025 14.6203L68.9141 20.1954L63.415 16.1994L57.915 20.1954L60.0166 13.7306L54.5166 9.73451H61.3145L63.415 3.26967L65.5156 9.73451Z" fill="white"/>
                            <rect width="23.4651" height="23.4651" transform="translate(77.5239)" fill="#00B57A"/>
                            <path d="M91.3569 9.73451H98.1548L92.6548 13.7306V13.7316L89.7417 15.8165L92.9438 14.6203L94.7554 20.1954L89.2563 16.1994L83.7563 20.1954L85.8579 13.7306L80.3579 9.73451H87.1558L89.2563 3.26967L91.3569 9.73451Z" fill="white"/>
                            <rect width="23.4651" height="23.4651" transform="translate(103.365)" fill="#00B57A"/>
                            <rect x="114.603" width="11.7326" height="23.4651" fill="#D9D9D9"/>
                            <path d="M117.198 9.73451H123.996L118.496 13.7306V13.7316L115.583 15.8165L118.785 14.6203L120.597 20.1954L115.098 16.1994L109.598 20.1954L111.699 13.7306L106.199 9.73451H112.997L115.098 3.26967L117.198 9.73451Z" fill="white"/>
                            </svg>
                          </span>  
                          <span className="font-normal text-[12px] text-gray-500 ">Rating 4.5/5</span>
                        </div>
                    </div>

                    </div>
            </section>

            {/* --- VERTICALS SECTION --- */}
            <div className="container mx-auto px-4">
                <VerticalsCarousel />
            </div>

            {/* --- ABOUT US --- */}
            <section className="container mx-auto py-10 px-8 md:px-20" data-aos="fade-up">
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
                        <div className="flex gap-2">
                            <Link href="/about" className="relative group inline-flex items-center py-3 px-2">
                                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full opacity-80 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100"></div>

                                <div className="relative z-10 flex items-center gap-4 pl-3 pr-4">
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
                    <div className="flex-1 w-full h-auto relative flex flex-col items-center justify-center py-10 bg-[#050505]">
                      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-5xl px-4">
                      {certificates.map((cert, index) => (
                        <div key={index} className="relative w-22 h-22 md:w-30 md:h-30 flex items-center justify-center">
                          <Image
                            src={cert.src}
                            alt={cert.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>

                        {/* Bottom Text */}
                        <p className="font-['Manrope'] text-gray-400 text-center text-sm md:text-base mt-8 max-w-2xl px-4 leading-relaxed font-light">
                            We maintain strict quality and security standards to ensure the highest <br /> level of trust and performance.
                        </p>
                    </div>
                </div>
            </section>

{/* --- FUTURE-READY SOLUTIONS SECTION --- */}
            <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-5 pb-10">
                {/* --- HEADING --- */}
            <div className="container mx-auto text-center relative z-20 px-4 mb-16">
                <h2 className="font-['Manrope'] text-4xl md:text-6xl text-white mb-6">
                {t('whyChooseUs.title')}
                </h2>

                <p className="font-['Manrope'] text-gray-300 max-w-3xl mx-auto text-lg font-light">
                    {t('whyChooseUs.subtitle')}
                </p>
            </div>

                {/* --- LAYER 2: CARDS GRID  --- */}
                <div className="w-full max-w-4xl mx-auto relative z-20 px-4 md:px-12 grid grid-cols-0 md:grid-cols-2 gap-4">
                    {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="group relative px-4 py-4 rounded-[24px] glass-effect border border-white/10 bg-[#0f0f0f] overflow-hidden transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9] via-[#4c1d95] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* 2. CARD CONTENT */}
                        <div className="relative z-10 flex flex-col h-full">
                        <div className="flex flex-grid">
                        {/* Icon Box */}
                        <div className="flex flex-col w-14 h-14 bg-white rounded-sm flex items-center justify-center mb-3 shadow-lg">
                            <Image src={card.icon} alt="icon" width={28} height={28} className="object-contain"/>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg pt-3 items-center justify-center font-['Manrope'] px-4 text-white mb-2">
                            {card.title}
                        </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-md leading-relaxed mb-2 font-['Manrope'] font-light group-hover:text-gray-200 transition-colors">
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
                <div className="absolute bottom-20 left-200 w-full z-0 pointer-events-none">
                    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-0 flex justify-center pointer-events-none w-[400vw] sm:w-[400vw] md:w-[400vw] ">
                    <motion.svg 
                        width="100%" 
                        height="auto" 
                        viewBox="0 0 2534 2534" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMin slice" 
                        style={{
                          y: circleY,
                          scale: circleScale,
                          opacity: circleOpacity,
                          originY: 0,
                          originX: 0, 
                        }}
                        className="overflow-visible"
                      >
                        <g clipPath="url(#clip0_332_3081)">
                          <rect width="2533.07" height="2533.07" rx="1266.54" fill="white" fillOpacity="0.05" />
                          
                          {/* Glow layers */}
                          <g filter="url(#filter0_f_332_3081)">
                            <path d="M2533.07 1266.07C2533.07 1965.3 1967.45 2532.14 1267.46 2532.14C567.46 2532.14 0 1965.3 0 1266.07C0 566.839 567.46 0 1267.46 0C1967.45 0 2533.07 566.839 2533.07 1266.07Z" fill="#950DF6" />
                          </g>
                        </g>
                        <defs>
                          <filter id="filter0_f_332_3081" x="-100" y="-100" width="2733.07" height="2732.14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_332_3081"/>
                          </filter>
                          <filter id="filter1_f_332_3081" x="-134" y="-133" width="2801" height="2800" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_332_3081"/>
                          </filter>
                          <filter id="filter2_f_332_3081" x="-34" y="-33" width="2601" height="2600" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_332_3081"/>
                          </filter>
                          <linearGradient id="paint0_linear_332_3081" x1="4243.74" y1="-1709" x2="-172.24" y2="2756.84" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#121212"/>
                          <stop offset="1" stop-color="#8300DD"/>
                          </linearGradient>
                          <clipPath id="clip0_332_3081">
                          <rect width="2533.07" height="2533.07" rx="1266.54" fill="white"/>
                          </clipPath>
                        </defs>
                      </motion.svg>
                    </div>
                </div>
        </section>

{/* --- WORDS FROM OUR CLIENTS --- */}
      <section className="w-full py-0 bg-black pt-16 mb-10">
        <div className="container mx-auto">
            <div className="container mx-auto text-center relative px-6 md:px-16 lg:px-20 z-20 px-4 mb-16">
                <h2 className="font-['Manrope'] text-4xl md:text-6xl text-white mb-6">
                {t('testimonials.title')}
                </h2>
                <p className="font-['Manrope'] text-gray-300 max-w-3xl mx-auto text-lg font-light">
                {t('testimonials.subtitle')}
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-scroll hover:[animation-play-state:paused]"
                style={{ animationDuration: '10s' }}>
                  
                  {/* First set */}
                  <div className="flex gap-4">
                      {testimonials.map((item) => (
                          <div
                            key={`${item.id}`}
                            className="relative p-4 rounded-2xl bg-[#171717] flex justify-between group max-w-[400px] ">
                            
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
              </div>
            </div>
          </section>
                

{/* WHY CHOOSE US SECTION */}
    <section className="bg-black py-14 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Heading */}
      <div className="container mx-auto mb-16 text-center">
            <div className="container mx-auto text-center relative z-20 px-4 mb-16">
                <h2 className="font-['Manrope'] text-4xl md:text-6xl text-white mb-6">
                    {t('whyChooseUs.title')}
                </h2>

                <p className="font-['Manrope'] text-gray-300 max-w-3xl mx-auto text-lg font-light">
                    {t('whyChooseUs.subtitle')}
                </p>
            </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          
          {/* --- COLUMN 1: LEFT CARDS --- */}
          <div className="
            lg:col-span-4 
            
            /* MOBILE STYLE */
            grid grid-cols-2 gap-4 place-items-center w-full

            /* DESKTOP STYLE */
            lg:flex lg:flex-col lg:justify-between lg:h-[600px] lg:gap-0 lg:items-end lg:w-fit lg:ml-auto
            relative z-10 
          ">
            {features.map((item, index) => (
              <div 
                key={item.id}
                className={`
                  bg-[#171717] p-4 rounded-md border border-white/5 
                  h-[190px] flex flex-col justify-center relative group transition-all duration-300 shrink-0
                  
                  /* MOBILE VIEW */
                  w-full max-w-[350px]
                  
                  /* GRID */
                  last:col-span-2 

                  /* DESKTOP VIEW */
                  lg:w-[340px]
                  ${index === 1 ? 'lg:translate-x-[60px]' : ''}
                `}
              > 
                <h3 className="text-white text-md md:text-2xl font-['Manrope'] font-medium mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-md leading-relaxed font-['Manrope'] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* --- COLUMN 2: CENTER LINES --- */}
          <div className="hidden lg:col-span-4 lg:flex items-center justify-center relative pointer-events-none">
            <motion.svg
              width="858"
              height="479"
              viewBox="0 0 858 479"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M1 1H263C276.255 1 287 11.7452 287 25V215C287 228.255 297.745 239 311 239M311 239H423M311 239H435.688M311 239C297.745 239 287 249.745 287 263V454C287 467.255 276.255 478 263 478H1M857 1H595C581.745 1 571 11.7452 571 25V215C571 228.255 560.255 239 547 239M547 239H435M547 239C560.255 239 571 249.745 571 263V454C571 467.255 581.745 478 595 478H857M189 240L376 239M669 240L482 239" stroke="url(#paint0_linear_79_936)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
            <defs>
            <motion.linearGradient
              id="paint0_linear_79_936"
              x1="-200"
              y1="430.3"
              x2="0"
              y2="373.038"
              gradientUnits="userSpaceOnUse"
              animate={{ x1: 858, x2: 1058 }}
              initial={{ x1: 200, x2: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
            <stop offset="0" stop-color="#262626" stop-opacity="1"/>
            <stop offset="0.5" stop-color="#9F14FF" stop-opacity="1"/>
            <stop offset="1" stop-color="#2a292b" stop-opacity="1"/>
            </motion.linearGradient>
            </defs>
            </motion.svg>
          </div>

          {/* --- COLUMN 3: RIGHT IMAGES --- */}
          <div className="
            lg:col-span-4 hidden
            lg:flex lg:flex-col lg:justify-between lg:h-[600px] lg:items-start lg:w-fit 
            relative z-10">
            {features.map((item, index) => (
              <div 
                key={item.id}
                className={`
                  h-[160px] rounded-md relative group shrink-0 transition-all duration-300 
                  
                  /* MOBILE VIEW */
                  w-full max-w-[300px]
                  
                  /* GRID */
                  last:col-span-2 

                  /* DESKTOP VIEW */
                  lg:w-[300px]
                  ${index === 1 ? 'lg:-translate-x-[60px]' : ''}
                `}
              >
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"/>
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
        <h2 className="font-['Manrope'] text-4xl md:text-6xl text-black mb-6">
            {t('technologies.title')}
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
<section className="w-full bg-black py-14 px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[400px] overflow-hidden relative">
      
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
              className="group/card relative p-6 rounded-3xl bg-[#0f0f0f] border border-white/5 
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
              <div className="flex flex-grid">
              {/* Number Circle */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3 group-hover/card:bg-purple-500 transition-colors duration-500">
              
                <span className="text-black font-bold text-lg group-hover/card:text-white">
                    {step.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl px-4 font-['Manrope'] font-semibold mb-3">
                {step.title}
              </h3>
            </div>  

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
<section className="relative w-full bg-black py-14 px-6 md:px-16 lg:px-24 overflow-hidden">
    {/* Background Glow */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[600px] h-[500px] bg-blue-900/30 blur-[100px] rounded-sm pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-24 items-start">
          
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
                  <div className="flex items-center justify-between p-2 md:p-3">
                    <h3 className="text-black font-['Manrope'] font-medium text-lg md:text-xl pr-4">
                      {t(`faq.questions.${index}.question`)}
                    </h3>
                    
                    {/* Icon */}
                    <Plus 
                      size={24} 
                      className={`text-black-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
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
                      {t(`faq.questions.${index}.answer`)}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full order-1 lg:order-2 lg:sticky lg:top-24">
            <h2 className="text-white font-['Manrope'] text-5xl md:text-6xl leading-tight mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light max-w-md">
              {t('faq.subtitle')}
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
<section className="w-full bg-[#0a0a0a] py-6 px-4 md:px-8 overflow-hidden">
  
      {/* === HEADING SECTION === */}
      <div className="text-center mb-3 max-w-3xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-['Manrope'] font-normal mb-3">
          {t('globalPresence.title')}
        </h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          {t('globalPresence.subtitle')}
        </p>
      </div>

      {/* === MAP CONTAINER === */}
      <div className="relative w-1x1 max-w-3xl mx-auto aspect-[16/9] md:aspect-[2/1] mb-2 md: mb-8">
        
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
<section className="relative z-10 py-12 bg-black text-center px-4 pt-10">
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
                {t('contact.title')}
            </h2>
            <p className="text-md md:text-md font-[Manrope] text-gray-200 mb-8 text-lg">
                {t('contact.subtitle')}
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