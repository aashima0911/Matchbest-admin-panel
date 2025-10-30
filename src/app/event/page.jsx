"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Inline SVG icons
const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 mr-3 text-indigo-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M5 11h14M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 mr-3 text-pink-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
  </svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 mr-3 text-emerald-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a4 4 0 110-8 4 4 0 010 8zm0 0c5.333 0 8 4 8 8v1H4v-1c0-4 2.667-8 8-8z" />
  </svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 100-8 4 4 0 000 8zm6 10v-2a4 4 0 00-3-3.87" />
  </svg>
);

export default function EventPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#130F40] via-[#2C2C54] to-[#1B1464] text-white py-24 px-6 md:px-16 text-center" data-aos="fade-up">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto ">
          <h1 className="text-5xl font-extrabold mb-6 py-4">The Future of AI-Powered Content Creation</h1>
          <p className="text-lg text-gray-200 mb-10">
            Unlock next-generation strategies and insights for smarter, faster, AI-driven content creation.  
            Join thought leaders in this exclusive webinar hosted by <span className="text-indigo-400 font-semibold">Matchbest Group × BytePlus</span>.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScX2eGiZrmZCjbN1SSPGNYd9_voqLTmlpQOP2yMrMeX5W6ZHg/viewform" target="_blank" rel="noopener noreferrer">
            <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-full font-semibold text-white shadow-lg transition transform hover:scale-105">
              RSVP to event
            </button>
          </Link>
        </motion.div>
      </section>

      {/* EVENT DETAILS SECTION */}
      <section className="bg-gradient-to-r from-[#F3E5F5] via-[#E1BEE7] to-[#D1C4E9] py-10 px-6 md:px-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-gray-800">
          <div className="flex flex-col items-center text-center bg-white/60 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <IconCalendar />
            <h3 className="font-bold text-lg mb-2">Date</h3>
            <p>5 November 2025 (Tuesday)</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white/60 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <IconClock />
            <h3 className="font-bold text-lg mb-2">Time</h3>
            <p>11:00 AM CST (UTC –5)</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white/60 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <IconMapPin />
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p>Online (Microsoft Teams)</p>
          </div>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 px-6 md:px-16" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Agenda Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-xl mb-2 text-cyan-300">1️⃣ AI in Modern Marketing</h3>
              <p className="text-gray-200">
                Understand how generative AI is reshaping creative marketing, personalization, and automation.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-xl mb-2 text-indigo-300">2️⃣ Smarter Content Workflows</h3>
              <p className="text-gray-200">
                Learn how AI tools streamline your content lifecycle — from ideation to publication.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-xl mb-2 text-pink-300">3️⃣ Live Demo & Q&A</h3>
              <p className="text-gray-200">
                See practical AI solutions in action and get your questions answered by industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#2E0249] via-[#570A57] to-[#A91079] text-white py-14 text-center" data-aos="fade-up">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future of Content?</h2>
          <p className="text-lg text-gray-200 mb-10">
            Reserve your spot and join hundreds of innovators exploring how AI is redefining creativity and efficiency.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScX2eGiZrmZCjbN1SSPGNYd9_voqLTmlpQOP2yMrMeX5W6ZHg/viewform" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#2E0249] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 flex items-center mx-auto">
              <IconUsers /> Join the Webinar
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
