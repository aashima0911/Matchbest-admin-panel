"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Sparkles, Users } from "lucide-react"; 
import dynamic from 'next/dynamic';

const CertifiedSection = dynamic(
  () => import("./components/CertifiedSection"),
  { ssr: false }
);

const Orb = dynamic(() => import("./components/layout/hero.jsx"), { ssr: false });
const TextPressure = dynamic(() => import('./components/layout/text.jsx'), { ssr: false });
const VerticalsCarousel = dynamic(() => import('./components/layout/card.jsx'), { ssr: false });

const services = [
    {
        icon: <Image src="/assets/rt.png" alt="Custom Software Development" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        titleKey: "expertise.nextGen.title",
        descKey: "expertise.nextGen.desc",
    },
    {
        icon: <Image src="/assets/ai.jpg" alt="AI & Automation Services" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        titleKey: "expertise.aiAutomation.title",
        descKey: "expertise.aiAutomation.desc",
    },
    {
        icon: <Image src="/assets/cloud.png" alt="Cloud Platform Solutions" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        titleKey: "expertise.cloudSolutions.title",
        descKey: "expertise.cloudSolutions.desc",
    },
    {
        icon: <Image src="/assets/cyber.png" alt="Enterprise Cybersecurity" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        titleKey: "expertise.cybersecurity.title",
        descKey: "expertise.cybersecurity.desc",
    },
];

const technologies = [
    "React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes",
    "TensorFlow", "MongoDB", "TypeScript", "JavaScript", "Express.js",
    "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "GraphQL", "MySQL",
    "PostgreSQL", "Redux", "Jest", "Git", "GitHub", "Figma", "Next.js",
    "AI", "ML", "Android"
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
    const { t } = useTranslation();
    
    useEffect(() => {
        AOS.init({ once: true, duration: 800 }); 
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#0b0515] to-[#3c2461] min-h-screen flex flex-col py-6 px-4 md:px-8 lg:px-16 overflow-x-hidden">
            
            {/* --- HERO SECTION --- */}
            <section className="mt-8 md:mt-16 relative flex flex-col md:flex-row items-center justify-between container mx-auto gap-8 mb-16">
                <div className="flex-1 text-center md:text-left z-10">
                    <div style={{ position: 'relative', height: 'auto', minHeight: '150px' }} className="mb-4">
                        <TextPressure
                            text={t('hero.build') || "Future Ready"}
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
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        Enterprise AI, Cloud & <br/>
                        <span className="text-cyan-400">Digital Innovation.</span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Transforming businesses since 2024 with custom software, intelligent automation, and secure cloud infrastructure.
                    </p>

                    <Link href={'/contact'}>
                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="pulse-glow px-10 py-4 rounded-full shadow-lg transition cursor-pointer bg-gradient-to-r from-[#6823f0] to-[#4B6CEB] text-white text-lg font-semibold"
                        >
                            Start Your Project
                        </motion.button>
                    </Link>
                </div>

                <div className="flex-1 flex justify-center items-center relative w-full h-[400px] md:h-[500px]">
                    <div className="w-full h-full relative">
                        <Orb
                            hoverIntensity={1.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                        />
                    </div>
                </div>
            </section>

            {/* --- NEW: TRUST INDICATORS STRIP --- */}
            <section className="w-full mb-16 border-y border-white/10 bg-black/20 backdrop-blur-sm py-8">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center">
                        <Sparkles className="w-8 h-8 text-yellow-400 mb-2" />
                        <h3 className="text-2xl font-bold text-white">Tailored</h3>
                        <p className="text-gray-400 text-sm">Solutions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="w-8 h-8 text-purple-400 mb-2" />
                        <h3 className="text-2xl font-bold text-white">300+</h3>
                        <p className="text-gray-400 text-sm">Happy Clients</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="w-8 h-8 text-green-400 mb-2" />
                        <h3 className="text-2xl font-bold text-white">100%</h3>
                        <p className="text-gray-400 text-sm">Secure Delivery</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                        <h3 className="text-2xl font-bold text-white">Global</h3>
                        <p className="text-gray-400 text-sm">Presence</p>
                    </div>
                </div>
            </section>

            {/* --- VERTICALS SECTION --- */}
            <VerticalsCarousel />

            {/* --- ABOUT US --- */}
            <section className="container mx-auto py-16 px-4 md:px-6 mb-8" data-aos="fade-up">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bridging the Gap Between <br/>
                            <span className="text-gradient">Vision & Reality</span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            <strong>MatchBest Group</strong> has evolved from a custom development shop into a global leader in AI and Cloud solutions. Headquartered in India with a growing global footprint, we empower enterprises to navigate the digital age with confidence.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Whether you need to migrate legacy systems to the cloud, build a generative AI model, or launch a mobile app for millions of users, our engineering DNA ensures scalability and security at every step.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/about" className="text-cyan-400 font-semibold hover:text-cyan-300 flex items-center gap-2">
                                More About Us →
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[300px] relative rounded-2xl overflow-hidden glass-effect border border-white/10">
                        <Image 
                            src="/assets/ai.jpg" 
                            alt="MatchBest Office Team" 
                            fill
                            className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* --- SERVICES SECTION --- */}
            <section className="container mx-auto py-12 px-4 md:px-6 border-t border-gray-800/50" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">{t('expertise.title')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={s.titleKey}
                            className="group glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={100 * (i + 1)}
                        >
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{t(s.titleKey)}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t(s.descKey)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <section className="py-16 border-t border-gray-800/50 mt-8">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">{t('whyChooseUs.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-effect bg-gradient-to-br from-black/60 to-purple-900/10 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t('whyChooseUs.expertTeam.title')}</h3>
                            <p className="text-gray-300">{t('whyChooseUs.expertTeam.desc')}</p>
                        </div>
                        <div className="glass-effect bg-gradient-to-br from-black/60 to-purple-900/10 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t('whyChooseUs.clientCentric.title')}</h3>
                            <p className="text-gray-300">{t('whyChooseUs.clientCentric.desc')}</p>
                        </div>
                        <div className="glass-effect bg-gradient-to-br from-black/60 to-purple-900/10 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t('whyChooseUs.cuttingEdgeTech.title')}</h3>
                            <p className="text-gray-300">{t('whyChooseUs.cuttingEdgeTech.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-6 border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-2" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">{t('howWeWork.title')}</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col items-center glass-effect bg-gradient-to-br from-black/60 to-purple-900/10 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-10 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-2xl font-bold mb-4 shadow-lg">1</div>
                            <h4 className="text-lg font-semibold text-white mb-2">{t('howWeWork.consult.title')}</h4>
                            <p className="text-gray-300 text-center max-w-xs">{t('howWeWork.consult.desc')}</p>
                        </div>
                        <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full mx-4 shadow-lg" />
                        <div className="flex flex-col items-center glass-effect bg-gradient-to-br from-black/60 to-purple-900/10 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-10 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-2xl font-bold mb-4 shadow-lg">2</div>
                            <h4 className="text-lg font-semibold text-white mb-2">{t('howWeWork.develop.title')}</h4>
                            <p className="text-gray-300 text-center max-w-xs">{t('howWeWork.develop.desc')}</p>
                        </div>
                        <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full mx-4 shadow-lg" />
                        <div className="flex flex-col items-center glass-effect bg-gradient-to-br from-black/60 to-purple-900/10 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-cyan-500/20 transition-all duration-10 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-2xl font-bold mb-4 shadow-lg">3</div>
                            <h4 className="text-lg font-semibold text-white mb-2">{t('howWeWork.deliver.title')}</h4>
                            <p className="text-gray-300 text-center max-w-xs">{t('howWeWork.deliver.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-6  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-2" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
                        {t('testimonials.title') || "What Our Clients Say"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Client 1 */}
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <p className="text-gray-300 italic mb-4">
                                "MatchBest Group delivered outstanding service. They modernized our legacy systems, and our efficiency improved by 40% within three months."
                            </p>
                            <span className="text-cyan-400 font-semibold">
                                — CTO, FinTech Startup (USA)
                            </span>
                        </div>

                        {/* Client 2 */}
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-gray-300 italic mb-4">
                                "Their expertise in AI automation is unmatched. The custom chatbot they built handles 80% of our customer queries automatically now."
                            </p>
                            <span className="text-cyan-400 font-semibold">
                                — Director of Operations, Retail Chain
                            </span>
                        </div>

                        {/* Client 3 */}
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <p className="text-gray-300 italic mb-4">
                                "Professional, transparent, and secure. We trust MatchBest Group with our most sensitive cloud infrastructure projects."
                            </p>
                            <span className="text-cyan-400 font-semibold">
                                — VP of Engineering, HealthTech Co.
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-6  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-2" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">{t('technologies.title')}</h2>
                    <div className="relative overflow-hidden">
                        <div className="flex flex-nowrap gap-8 animate-[scroll_10s_linear_infinite]">
                            {[...technologies, ...technologies].map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="glass-effect bg-black/40 border border-purple-500/20 px-6 py-3 rounded-lg text-cyan-400 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex-shrink-0"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL PRESENCE */}
            <section className="py-16 border-t border-gray-800/50" data-aos="fade-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">Our Global Presence</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { country: "India", status: "Headquarters", color: "text-orange-400" },
                            { country: "UAE", status: "Regional Office", color: "text-green-400" },
                            { country: "USA", status: "Regional Office", color: "text-blue-400" },
                            { country: "Saudi Arabia", status: "Expansion 2025", color: "text-yellow-400" }
                        ].map((location, i) => (
                            <motion.div
                                key={i}
                                className="glass-effect bg-black/40 border border-white/10 rounded-xl p-6 text-center hover:bg-white/5 transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex justify-center mb-3">
                                    <MapPin className={`w-8 h-8 ${location.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{location.country}</h3>
                                <p className="text-gray-400 text-sm mt-1">{location.status}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 border-t border-gray-800 w-full" data-aos="fade-up">
            <div className="container mx-auto px-6 max-w-6xl">
            
            <h2 className="text-3xl md:text-5xl font-bold text-gradient text-center mb-16">
                {t('faq.title')}
            </h2>

            <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <details
                    key={item}
                    name="faq-group" 
                    className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-6 shadow-lg group transition-all duration-300 open:bg-black/60 open:border-purple-500/50"
                >
                    <summary className="text-lg md:text-xl font-semibold text-cyan-400 cursor-pointer outline-none flex justify-between items-center list-none">
                    <span>{t(`faq.q${item}`)}</span>
                    
                    <span className="transition-transform duration-300 group-open:rotate-180 text-purple-400">
                        ▼
                    </span>
                    </summary>
                    
                    <p className="text-gray-300 mt-4 leading-relaxed pl-2 border-l-2 border-purple-500/30">
                    {t(`faq.a${item}`)}
                    </p>
                </details>
                ))}
            </div>

            </div>
        </section>

            

            {/* --- CERTIFICATIONS --- */}
            <CertifiedSection/>

            {/* --- CTA SECTION --- */}
            <section className="py-20 text-center px-4" data-aos="zoom-in">
                <div className="max-w-4xl mx-auto glass-effect bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-3xl p-10 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
                    <p className="text-gray-200 mb-8 text-lg">{t('cta.desc')}</p>
                    <Link href="/contact" className="inline-block bg-white text-[#6823f0] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-800 hover:text-white transition-all transform hover:-translate-y-1">
                        {t('cta.button')}
                    </Link>
                </div>
            </section>
        </div>
    );
}