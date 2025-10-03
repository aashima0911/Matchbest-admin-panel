"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";


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
        <div className="bg-gray-900 min-h-screen flex flex-col py-16 px-4 md:px-8 lg:px-12">
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 md:px-8 lg:px-12 py-24 gap-12 mb-12" data-aos="fade-up">
                {/* Left: Headline & CTA */}
                <div className="flex-1 text-center md:text-left z-10" data-aos="fade-right">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        Build the <span className="text-blue-500">Future</span>.<br />
                        <span className="text-gray-400">With Us.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                        We craft world-class digital products, AI solutions, and secure cloud platforms for tomorrow&apos;s leaders.
                    </p>
                    <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                        Start Your Project
                    </Link>
                </div>
                {/* Right: Abstract SVG */}
                <div className="flex-1 flex justify-center items-center relative" >
                 
                    <video
                        src="/assets/video.mp4"
                        loop
                        autoPlay
                        muted
                        className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover   bg-black mx-auto"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            {/* Blue Gradient Cards Section (now dark themed, with heading) */}
            <section className="w-full py-16 border-t border-gray-800 flex justify-center items-center mb-12 px-4 md:px-8 lg:px-12" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-4 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12" data-aos="fade-up">Our Verticals</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-black border border-blue-700 rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full text-justify min-h-[500px] mb-6 md:mb-0" data-aos="fade-up" data-aos-delay="100">
                            <div className='flex flex-col'>
                                <Image src="/assets/mat.png" alt="MatchBest Logo" className="w-60 h-20 mb-8 object-contain" width={240} height={80} />
                               
                                <ul className="text-white text-base space-y-0 mb-8 list-disc list-inside text-justify">                                  
                                    <li >AvaOne <a href="https://avasuite.ai/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:underline">view more</a></li>
                                    <li >AI Automation</li>
                                    <li >BytePlus/TikTok Partnership</li>
                                    <li >Managed Services/VAPT</li>
                                    <li>App & Mobile Development</li>
                                    <li>E-commerce & Fintech Solutions</li>                                    
                                    <li>ERP Modernization</li>
                                    <li>Cloud Hosting & Infrastructure</li>
                                    
                                    <li>Blockchain Development</li>
                                </ul>
                            </div>
                            <a
                                href="https://matchbestsoftware.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 text-center"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-black border border-blue-700 rounded-xl flex flex-col justify-between shadow-lg transition-all duration-300 transform hover:scale-105 p-8 md:p-10 hover:shadow-xl w-full text-justify min-h-[500px] mb-6 md:mb-0" data-aos="fade-up" data-aos-delay="200">
                            <div className='flex flex-col'>
                                <Image src="/xelta-logo.png" alt="Xelta Logo" className="text-white w-60 h-20 mb-8 object-contain" width={240} height={80} />
                                <ul className="text-white text-base space-y-1 mb-8 list-disc list-inside text-justify">
                                    
                                    <li>Create Without Limits</li>                                   
                                    <li>Speed Meets Precision</li>                                  
                                    <li>Built for Every Industry</li>                                  
                                    <li>Future-Ready</li>
                                    <li>Text to Image  Generator</li>
                                    <li>Text to Video Generator</li>
                                    <li>Text to Audio Generator</li>
                                    <li>Image to Image Generator</li>
                                </ul>
                            </div>
                            <a
                                href="https://xelta.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 text-center"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-black border border-blue-700 rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full text-justify min-h-[500px]" data-aos="fade-up" data-aos-delay="300">
                            <div className='flex flex-col'>
                                <Image src="/healnova.png" alt="healnova Logo" className="text-white w-60 h-20 mb-8 object-contain" width={240} height={80} />
                                <ul className="text-white text-base space-y-1 mb-8 list-disc list-inside text-justify">
                                    <li>24/7 AI Doctor</li>
                                    <li>Medical Vaults</li>
                                    <li>AI Health Checkups</li>
                                    <li>Health Engagement</li>
                                    <li>AI-Powered Diagnostics</li>
                                    <li>Doctor dashboard</li>
                                    <li>Patient Management</li>
                                    <li>Health Analytics</li>                             
                                </ul>
                            </div>
                            <a
                                href="https://healnova.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 text-center"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-black border border-blue-700 rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full text-justify min-h-[500px]" data-aos="fade-up" data-aos-delay="400">
                            <div className='flex flex-col'>
                                <div className="w-60 h-20 mb-8 flex items-center justify-center">
                                    <p className="font-bold text-3xl text-white">Elite <span className="text-yellow-500">Maverick</span></p>
                                </div>
                                <ul className="text-white text-base space-y-1 mb-8 list-disc list-inside text-justify">
                                    <li>Staff Augmentation</li>
                                    <li>Consulting & Solutions</li>
                                    <li>Talent Acquisition & consulting</li>
                                    
                                    <li>Energy </li>
                                    <li>Financial Services</li>
                                    <li>Healthcare</li>
                                    <li>Manufacturing &Logistics</li>
                                    <li>Information & Technology</li>
                                    <li>Automotive & Transportation</li>
                                </ul>
                            </div>
                            <a
                                href="https://www.elitemaverick.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 text-center"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-black border border-blue-700 rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full text-justify min-h-[500px]" data-aos="fade-up" data-aos-delay="500">
                            <div className='flex flex-col'>
                             <Image src="/vitaay-logo.png" alt="vitaay Logo" className="text-white w-60 h-20 mb-8 object-contain" width={240} height={80} />
                                <ul className="text-white text-base space-y-1 mb-8 list-disc list-inside text-justify">
                                    <li>Empowering Brands & Influencers</li>
                                    <li>Streamlined Campaign Management</li>
                                    <li>Maximize Marketing Impact</li>
                                    <li>Long-Term Partnerships</li>
                                    <li>Data-Driven Insights</li>
                                    <li>All-in-One Platform</li>
                                    <li>Innovative Solutions</li>
                                    <li>Trusted by Industry Leaders</li>
                                    <li>Global Reach</li>
                                </ul>
                            </div>
                            <a
                                href="https://www.vitaay.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 text-center"
                            >
                                LEARN MORE
                            </a>
                        </div>
                        {/* Card 6 */}
                        {/* <div className="bg-black border border-blue-700 rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full text-justify min-h-[500px]" data-aos="fade-up" data-aos-delay="600">
                            <div className='flex flex-col'>
                               <Image src="/healnova.png" alt="healnova Logo" className="w-60 h-20 mb-8 object-contain" width={240} height={80} />
                                <ul className="text-white text-base space-y-1 mb-8 list-disc list-inside text-justify">
                                    <li>SEO Optimization</li>
                                    <li>Social Media Marketing</li>
                                    <li>Content Strategy</li>
                                    <li>PPC Campaigns</li>
                                    <li>Email Marketing</li>
                                    <li>Brand Management</li>
                                    <li>Conversion Optimization</li>
                                    <li>Marketing Automation</li>
                                    <li>Growth Hacking</li>
                                    <li>Analytics & ROI</li>
                                </ul>
                            </div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 text-center"
                            >
                                LEARN MORE
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Services Section */}
            <section className="container mx-auto px-4 md:px-8 lg:px-12 py-16 mb-12" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div
                            key={s.title}
                            className="group bg-[#181c25] border border-[#23283a] rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-2 hover:border-blue-500 transform"
                            data-aos="fade-up"
                            data-aos-delay={100 * (i + 1)}
                        >
                            <div className="mb-4">{s.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                            <p className="text-gray-400 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Call to Action */}
            <section className="py-16 text-center px-4 md:px-8 lg:px-12 mb-12" data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build something amazing?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let&apos;s collaborate to turn your vision into reality. Reach out for a free consultation and see how we can help you grow.</p>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                    Contact Us
                </Link>
            </section>
            {/* Why Choose Us Section */}
            <section className="py-20  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-12" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#10131a] rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Expert Team</h3>
                            <p className="text-gray-300">Our experienced professionals deliver innovative, reliable solutions tailored to your needs.</p>
                        </div>
                        <div className="bg-[#10131a] rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Client-Centric</h3>
                            <p className="text-gray-300">We prioritize your goals and satisfaction, ensuring transparent communication and results.</p>
                        </div>
                        <div className="bg-[#10131a] rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Cutting-Edge Tech</h3>
                            <p className="text-gray-300">We use the latest technologies to future-proof your business and maximize ROI.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Section */}
            <section className="py-20 border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-12" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How We Work</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">1</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Consult</h4>
                            <p className="text-gray-400 text-center max-w-xs">We listen to your needs and define clear project goals together.</p>
                        </div>
                        <div className="hidden md:block w-12 h-1 bg-blue-600 rounded-full mx-4" />
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">2</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Develop</h4>
                            <p className="text-gray-400 text-center max-w-xs">Our team designs, builds, and tests your solution with regular updates.</p>
                        </div>
                        <div className="hidden md:block w-12 h-1 bg-blue-600 rounded-full mx-4" />
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">3</div>
                            <h4 className="text-lg font-semibold text-white mb-2">Deliver</h4>
                            <p className="text-gray-400 text-center max-w-xs">We launch, support, and optimize your project for long-term success.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section className="py-20  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-12" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#10131a] rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                            <p className="text-gray-300 italic mb-4">"MatchBest Group delivered outstanding service and exceptional results. Our business grew 2x after launch!"</p>
                            <span className="text-blue-500 font-semibold">— Daniel Dines, CEO, UiPath</span>
                        </div>
                        <div className="bg-[#10131a] rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-gray-300 italic mb-4">"The MatchBest Group team&apos;s expertise in AI and cloud is unmatched. Highly recommended."</p>
                            <span className="text-blue-500 font-semibold">— Ali Ghodsi, CEO, Databricks</span>
                        </div>
                        <div className="bg-[#10131a] rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                            <p className="text-gray-300 italic mb-4">"Professional, transparent, and always on time. We love working with MatchBest Group!"</p>
                            <span className="text-blue-500 font-semibold">— Aparna Chennapragada, Chief Product Officer, Robinhood</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technologies Section */}
            <section className="py-20  border-t border-gray-800 px-4 md:px-8 lg:px-12 mb-12" data-aos="fade-up">
                <div className="container mx-auto px-0 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Technologies We Use</h2>
                    <div className="relative overflow-hidden">
                        {/* Animated marquee */}
                        <div className="flex flex-nowrap gap-8 animate-[scroll_10s_linear_infinite]">
                            {[...technologies, ...technologies].map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-[#181c25] px-6 py-3 rounded-lg text-blue-400 font-semibold text-lg shadow hover:scale-105 transition-transform duration-200 flex-shrink-0"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-20  border-t border-gray-800 px-4 md:px-8 lg:px-12" data-aos="fade-up">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <details className="bg-[#10131a] rounded-xl p-6 shadow group transition-all duration-300 transform hover:scale-105" open data-aos="fade-up" data-aos-delay="100">
                            <summary className="text-lg font-semibold text-blue-500 cursor-pointer outline-none group-open:text-blue-400">How do I start a project with MatchBest Group?</summary>
                            <p className="text-gray-300 mt-2">Just contact MatchBest Group using the button above or through our contact page. We&apos;ll schedule a free consultation to understand your needs and kickstart your project.</p>
                        </details>
                        <details className="bg-[#10131a] rounded-xl p-6 shadow group transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
                            <summary className="text-lg font-semibold text-blue-500 cursor-pointer outline-none group-open:text-blue-400">What industries does MatchBest Group serve?</summary>
                            <p className="text-gray-300 mt-2">MatchBest Group collaborates with startups, enterprises, and SMBs across industries like fintech, healthcare, e-commerce, media, and more.</p>
                        </details>
                        <details className="bg-[#10131a] rounded-xl p-6 shadow group transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
                            <summary className="text-lg font-semibold text-blue-500 cursor-pointer outline-none group-open:text-blue-400">Does MatchBest Group offer ongoing support?</summary>
                            <p className="text-gray-300 mt-2">Yes! MatchBest Group provides continuous maintenance, support, and optimization to ensure the long-term success of all your projects.</p>
                        </details>
                    </div>
                </div>
            </section>
            
        </div>
    );
}
