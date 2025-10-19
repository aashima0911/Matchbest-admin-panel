"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CurvedLoop from "@/app/components/layout/crousel.jsx";
import Orb from "@/app/components/layout/hero.jsx";
import TextPressure from '@/app/components/layout/text.jsx';
import VerticalsCarousel from '@/app/components/layout/card.jsx';


const services = [
    {
        icon: <Image src="/assets/rt.png" alt="Next-Gen Development" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        title: "Next-Gen Development",
        desc: "Cutting-edge web and mobile apps built for scale, speed, and security.",
    },
    {
        icon: <Image src="/assets/ai.jpg" alt="AI Automation" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        title: "AI Automation",
        desc: "Integrate smart automation and AI to supercharge your business workflows.",
    },
    {
        icon: <Image src="/assets/cloud.png" alt="Cloud Solutions" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        title: "Cloud Solutions",
        desc: "Seamless cloud migration, hosting, and infrastructure for modern teams.",
    },
    {
        icon: <Image src="/assets/cyber.png" alt="Cybersecurity" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />,
        title: "Cybersecurity",
        desc: "Enterprise-grade security and consulting to protect your digital assets.",
    },
];

// Technologies list for marquee scrolling in the Technologies section
const technologies = [
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "TensorFlow",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "GraphQL",
    "MySQL",
    "PostgreSQL",
    "Redux",
    "Jest",
    "Git",
    "GitHub",
    "Figma",
    "Next.js",
    "AI",
    "ML",
    "Android",
];

// Animation variants for framer-motion
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
    const [openServices, setOpenServices] = useState({});

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const toggleService = (serviceName) => {
        setOpenServices(prev => ({
            ...prev,
            [serviceName]: !prev[serviceName]
        }));
    };
    return (
        <div className="bg-gradient-to-r from-[#0b0515] to-[#3c2461] min-h-screen flex flex-col py-6 px-14 md:px-18 lg:px-22">
            {/* Hero Section */}
            <section className="mt-12 relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 md:px-8 lg:px-12 py-24 gap-12 mb-12">
                {/* Left: Headline & CTA */}
                <div className="flex-1 text-center md:text-left z-10">
                    {/* <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        Build the <span className="text-blue-500">Future</span>.<br />
                        <span className="text-gray-400">With Us.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                        We craft world-class digital products, AI solutions, and secure cloud platforms for tomorrow's leaders.
                    </p> */}

                    <div style={{ position: 'relative', height: '300px' }}>
                        <TextPressure
                            text="Build"
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
                    <h1 className="-mt-10 text-5xl md:text-6xl font-bold text-white leading-tight mb-15 ">
                        The Future With Us.
                    </h1>
                    <Link href={'/contact'}>
                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            className="pulse-glow px-8 py-4 rounded-full shadow-lg transition cursor-pointer bg-[#6823f0] text-white text-lg"
                        >
                            Get Exclusive Access
                        </motion.button>
                    </Link>
                </div>
                {/* Right: Abstract SVG */}
                <div className="flex-1 flex justify-center items-center relative" >

                    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
                        <Orb
                            hoverIntensity={1.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                        />
                    </div>
                </div>
            </section>

            {/* CurvedLoop component integrated into hero section */}
            {/* <div className="absolute top-0 py-34 left-0 w-full ">
                <CurvedLoop
                    marqueeText="MatchbestGroup partners with BytePlus ✦ the technology arm of TikTok, integrating Seedream and Seedance to deliver next-generation AI experiences ✦"
                    speed={3}
                    curveAmount={300}
                    direction="right"
                    interactive={true}
                    className="custom-text-style text-[3rem] md:text-[4rem] lg:text-[5rem]"
                />
            </div> */}

            {/* Verticals Carousel Section */}
            <VerticalsCarousel />
            

            {/* Services Section */}
            <section className="container mx-auto px-4 md:px-8 lg:px-12 py-6 mb-2" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">Our Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div
                            key={s.title}
                            className="group glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform"
                            data-aos="fade-up"
                            data-aos-delay={100 * (i + 1)}
                        >
                            <div className="mb-4">{s.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                            <p className="text-gray-300 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-6 text-center px-4 md:px-8 lg:px-2 mb-5" data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-4">Ready to build something amazing?</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">Let's collaborate to turn your vision into reality. Reach out for a free consultation and see how we can help you grow.</p>
                <Link href="/contact" className="bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] hover:from-[#3B5CEB] hover:to-[#7B4BA0] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Contact Us
                </Link>
            </section>
            {/* Why Choose Us Section */}
            <section className="py-1  border-t border-gray-800 px-4 md:px-8 lg:px-2 mb-2">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Expert Team</h3>
                            <p className="text-gray-300">Our experienced professionals deliver innovative, reliable solutions tailored to your needs.</p>
                        </div>
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Client-Centric</h3>
                            <p className="text-gray-300">We prioritize your goals and satisfaction, ensuring transparent communication and results.</p>
                        </div>
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Cutting-Edge Tech</h3>
                            <p className="text-gray-300">We use the latest technologies to future-proof your business and maximize ROI.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Section */}
            <section className="py-6 border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-2" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">How We Work</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-2xl font-bold mb-4 shadow-lg">1</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Consult</h4>
                            <p className="text-gray-300 text-center max-w-xs">We listen to your needs and define clear project goals together.</p>
                        </div>
                        <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full mx-4 shadow-lg" />
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-2xl font-bold mb-4 shadow-lg">2</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Develop</h4>
                            <p className="text-gray-300 text-center max-w-xs">Our team designs, builds, and tests your solution with regular updates.</p>
                        </div>
                        <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] rounded-full mx-4 shadow-lg" />
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white text-2xl font-bold mb-4 shadow-lg">3</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Deliver</h4>
                            <p className="text-gray-300 text-center max-w-xs">We launch, support, and optimize your project for long-term success.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section className="py-6  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-2" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <p className="text-gray-300 italic mb-4">"MatchBest Group delivered outstanding service and exceptional results. Our business grew 2x after launch!"</p>
                            <span className="text-cyan-400 font-semibold">— Daniel Dines, CEO, UiPath</span>
                        </div>
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-gray-300 italic mb-4">"The MatchBest Group team's expertise in AI and cloud is unmatched. Highly recommended."</p>
                            <span className="text-cyan-400 font-semibold">— Ali Ghodsi, CEO, Databricks</span>
                        </div>
                        <div className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <p className="text-gray-300 italic mb-4">"Professional, transparent, and always on time. We love working with MatchBest Group!"</p>
                            <span className="text-cyan-400 font-semibold">— Aparna Chennapragada, Chief Product Officer, Robinhood</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technologies Section */}
            <section className="py-6  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-2" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">Technologies We Use</h2>
                    <div className="relative overflow-hidden">
                        {/* Animated marquee */}
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
            {/* FAQ Section */}
            <section className="py-6  border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <details className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-6 shadow-lg hover:shadow-xl group transition-all duration-300 hover:scale-[1.02]" open data-aos="fade-up" data-aos-delay="100">
                            <summary className="text-lg font-semibold text-cyan-400 cursor-pointer outline-none group-open:text-cyan-300">How do I start a project with MatchBest Group?</summary>
                            <p className="text-gray-300 mt-2">Just contact MatchBest Group using the button above or through our contact page. We'll schedule a free consultation to understand your needs and kickstart your project.</p>
                        </details>
                        <details className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-6 shadow-lg hover:shadow-xl group transition-all duration-300 hover:scale-[1.02]" data-aos="fade-up" data-aos-delay="200">
                            <summary className="text-lg font-semibold text-cyan-400 cursor-pointer outline-none group-open:text-cyan-300">What industries does MatchBest Group serve?</summary>
                            <p className="text-gray-300 mt-2">MatchBest Group collaborates with startups, enterprises, and SMBs across industries like fintech, healthcare, e-commerce, media, and more.</p>
                        </details>
                        <details className="glass-effect bg-black/40 border border-purple-500/20 rounded-2xl p-6 shadow-lg hover:shadow-xl group transition-all duration-300 hover:scale-[1.02]" data-aos="fade-up" data-aos-delay="300">
                            <summary className="text-lg font-semibold text-cyan-400 cursor-pointer outline-none group-open:text-cyan-300">Does MatchBest Group offer ongoing support?</summary>
                            <p className="text-gray-300 mt-2">Yes! MatchBest Group provides continuous maintenance, support, and optimization to ensure the long-term success of all your projects.</p>
                        </details>
                    </div>
                </div>
            </section>

        </div>
    );
}
