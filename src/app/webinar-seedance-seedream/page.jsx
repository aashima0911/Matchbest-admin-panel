"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Inline SVG icons
const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8 mr-3 text-indigo-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M5 11h14M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8 mr-3 text-pink-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
  </svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8 mr-3 text-emerald-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a4 4 0 110-8 4 4 0 010 8zm0 0c5.333 0 8 4 8 8v1H4v-1c0-4 2.667-8 8-8z" />
  </svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 100-8 4 4 0 000 8zm6 10v-2a4 4 0 00-3-3.87" />
  </svg>
);

export default function EventPage() {

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#130F40] via-[#2C2C54] to-[#1B1464] text-white py-12 md:py-12 px-4 md:px-16 text-center ">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-7xl mx-auto mt-5 -mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 py-10">LIVE WEBINAR</h1>
          <p className=" text-1xl md:text-2xl text-semibold text-gray-200 mb-4 md:mb-5 -mt-8">
             Join thought leaders in this exclusive webinar hosted by <span className="text-indigo-400 font-semibold text-2xl">Seedance & Seedream</span>.        
            <br className="hidden md:block"/> Unlock next-generation strategies and insights for smarter, faster, AI-driven content creation.
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-4 md:mb-5">Your 1-hour shortcut to smarter strategies</p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScX2eGiZrmZCjbN1SSPGNYd9_voqLTmlpQOP2yMrMeX5W6ZHg/viewform" target="_blank" rel="noopener noreferrer">
            <button className="text-2xl cursor-pointer bg-indigo-600 hover:bg-indigo-500  px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-white shadow-lg transition transform hover:scale-105">
              RSVP Now
            </button>
          </Link>
        </motion.div>
      </section>

      {/* EVENT DETAILS SECTION */}
      <section className="bg-gradient-to-r from-[#F3E5F5] via-[#E1BEE7] to-[#D1C4E9] py-12 md:py-5 px-4 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-gray-800">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          <div className="flex flex-col items-center text-center bg-white/60 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <IconCalendar />
            <h3 className="font-bold text-2xl mb-2">Date</h3>
            <p className="font-bold">5 November 2025 (Tuesday)</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white/60 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <IconClock />
            <h3 className="font-bold text-2xl mb-2">Time</h3>
            <p className="font-bold">11:00 AM CST (UTC –5)</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white/60 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <IconMapPin />
            <h3 className="font-bold text-2xl mb-2">Location</h3>
            <p className="font-bold">Online (Microsoft Teams)</p>
          </div>
          </div>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-10 md:py-5 px-4 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">Agenda Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-xl mb-2 text-cyan-300">1️⃣ AI in Modern Marketing</h3>
              <p className="text-gray-200">
                Marketing and automation, reinvented by generative AI.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-xl mb-2 text-indigo-300">2️⃣ Next-Gen Workflows</h3>
              <p className="text-gray-200">
                AI that streamlines content from idea to publish.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-xl mb-2 text-pink-300">3️⃣ Live Demo & Q&A</h3>
              <p className="text-gray-200">
                Experience real AI solutions, backed by expert insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#2E0249] via-[#570A57] to-[#A91079] text-white py-10 md:py-5 text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Shape the Future of Content?</h2>
          <p className="text-lg text-gray-200 mb-5">
            Reserve your spot and join hundreds of innovators exploring how AI is redefining creativity and efficiency.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScX2eGiZrmZCjbN1SSPGNYd9_voqLTmlpQOP2yMrMeX5W6ZHg/viewform" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-2xl text-[#2E0249] px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 flex items-center mx-auto">
              <IconUsers /> RSVP Now
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
