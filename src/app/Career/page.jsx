"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, MapPin, Clock, Briefcase } from 'lucide-react';
import { jobsData } from '../../data/jobsData';

// === DATA: TECH JOBS ===
const techJobs = [
  {
    id: 1,
    title: "UI/UX Designer Intern",
    desc: "A UI/UX Designer Intern helps craft intuitive and visually engaging digital experiences by understanding user behaviors and design principles. They assist in creating wireframes, prototypes, and user flows while collaborating with cross-functional teams.",
    link: "{`/Careers/${job.id}`}"
  },
  {
    id: 2,
    title: "UX Designer",
    desc: "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers and developers.",
    link: ""
  },
  {
    id: 3,
    title: "Design Head",
    desc: "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency.",
    link: ""
  }
];

// === DATA: DEVELOPMENT JOBS ===
const non_techJobs = [
  {
    id: 4,
    title: "Technical Software Lead",
    desc: "Guide team development efforts towards successful project delivery. Provide technical leadership to teammates through coaching and mentorship. Maintain high standards of software quality within the team by establishing good practices.",
    link: ""
  },
  {
    id: 5,
    title: "UI/UX Developers",
    desc: "MatchBest is a fast-growing software innovation firm powering next-generation AI, OTT, cloud, and social commerce solutions. We work on high-impact projects that shape user experience across industries like media, e-commerce, and health tech.",
    link: ""
  },
  {
    id: 6,
    title: "Senior Boomi Developer",
    desc: "Boomi Senior Developer to design, develop and maintain integration solutions using Boomi Atmosphere. Have deep expertise in Integration Architecture, API Management and Cloud-based solutions to drive digital transformation.",
    link: ""
  }
];

// === DATA: SALES JOBS ===
const internships = [
  {
    id: 7,
    title: "Content Designer",
    desc: "Best content creators with excellent editing skills are",
    link: ""
  },
  {
    id: 8,
    title: "UI/UX Developers",
    desc: "MatchBest is a fast-growing software innovation firm powering next-generation AI, OTT, cloud, and social commerce solutions. We work on high-impact projects that shape user experience across industries like media, e-commerce, and health tech.",
    link: ""
  },
  {
    id: 9,
    title: "Senior Boomi Developer",
    desc: "Boomi Senior Developer to design, develop and maintain integration solutions using Boomi Atmosphere. Have deep expertise in Integration Architecture, API Management and Cloud-based solutions to drive digital transformation.",
    link: ""
  }
];


export default function CareersPage() {
const techJobs = jobsData.filter(job => job.category === 'Technical');
const non_techJobs = jobsData.filter(job => job.category === 'Non-Technical');
const internships = jobsData.filter(job => job.category === 'Internships');

  return (
    <div className="bg-black text-white min-h-screen flex flex-col py-6 ">

    <div className="min-h-screen text-white pt-18 md:pt-20 overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* === 1. HERO SECTION === */}
      <section className="container mx-auto px-6 text-center relative">
        {/* Background Glow */}
        <div 
        className="absolute -top-[80px] -right-[100px] w-[700px] h-[800px] rounded-full opacity-50 pointer-events-none"
        style={{
          background: 'linear-gradient(200deg, #020010 0%, #0a0a4a 10%, #396acc 25%, #8946c4 40%, #000000 50%, #8946c4 60%, #396acc 75%, #0a0a4a 90%, #020010 100%)',
          filter: 'blur(100px)',
          zIndex: 0 
        }}
      ></div>

        <div 
            className="relative w-full max-w-[1300px] h-[150px] md:h-[200px] rounded-[3rem] overflow-hidden flex items-center justify-center shadow-2xl border border-white/5 mb-8">

            <div className="absolute inset-0 z-0" 
            style={{
            background: 'linear-gradient(60deg, #020010 0%, #0a0a4a 10%, #0055ff 25%, #7e22ce 40%, #000000 50%, #7e22ce 60%, #0055ff 75%, #0a0a4a 90%, #020010 100%)',
            filter: 'blur(100px)', 
            transform: 'scale(1.2)'
            // style={{
            // background: 'linear-gradient(60deg, #0b033f 0%, #030315 10%, #29354b 25%, #543e67 30%, #2a282d 50%, #5d4374 70%, #29354b 75%, #030315 90%, #030112 100%)',
            // filter: 'blur(0px)', 
            // transform: 'scale(1.2)'
            }}> 
            </div>
            
            {/* === CONTENT LAYER === */}
            <div className="relative z-10 text-center px-6">
            
            {/* Main Heading */}
            <h1 className="text-white text-4xl md:text-5xl font-['Inter'] font-normal mb-6 tracking-tight drop-shadow-lg">
                Careers at MatchBest
            </h1>
            
            {/* Subheading */}
            <p className="text-gray-200 text-md md:text-md font-['Inter'] font-light tracking-wide max-w-2xl mx-auto opacity-90">
                Be part of a team that builds intelligent solutions to solve meaningful, real-world challenges
            </p>

            </div>
        </div>

      </section>

      {/* === 2. LIFE AT MATCHBEST === */}
      <section className="w-full bg-black py-12 px-6 md:px-10 lg:px-12 overflow-x-hidden">
            <div className="container mx-auto max-w-[1300px] ">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* === LEFT COLUMN: TEXT CONTENT === */}
                <div className="flex flex-col px-4 md:px-4 lg:px-4">
                  
                  {/* Heading */}
                  <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-8">
                    Life at MatchBest
                  </h2>
      
                  {/* Paragraph Content */}
                  <div className="text-white text-justify text-sm leading-tight font-light mb-2">
                    <p>
                        Behind MatchBest, curiosity, teamwork, and a clear sense of purpose are the main fuels. Our engineers, designers, and problem-solvers create cloud-native, AI-driven platforms for enterprises that actually move the needle globally. Every project is a chance to learn, to tinker, to push technical limits until something finally clicks. Who wouldn’t want that?
                    </p><br />
                    <p>
                        We’ve built a culture of trust, openness, and ownership where ideas get thrown around freely, people take initiative, and growth happens through hands-on work, mentoring, and steady learning. Yes, we take deadlines seriously, but we also back personal development: flexible schedules, real mentorship, and paths you can grow into.
                    </p>
                    <p>
                        Success here is collective — we celebrate wins, dig into failures without blame, and help each other when it counts. Whether you’re starting out or taking on more responsibility, MatchBest is a place where your work matters and helps shape tomorrow’s technology.
                    </p>
                    </div>
      
                </div>
      
                {/* === RIGHT COLUMN: IMAGE === */}
                <div className="relative w-full items-baseline rounded-2xl overflow-hidden group z-10">
                   <Image 
                     src="/assets/career-at-match.avif" 
                     alt="MatchBest Team"
                     width={1500} 
                     height={900}
                     className="w-full h-auto object-cover"
                   />
                </div>
              </div>
            </div>
          </section>


    {/* === 3. CURRENT OPENINGS SECTION === */}
      <section id="open-roles" className="container mx-auto px-8 md:px-12 mb-32">

        <div className="border-t border-white/20 mb-10"></div>
        
        {/* Section Heading */}
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">
                Current Openings
            </h2>
            <p className="text-gray-400 max-w-auto text-lg font-light leading-relaxed">
                We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you’re a designer, engineer, or project manager, we encourage you to explore our open positions.
            </p>
        </div>

        <div className="border-t border-white/20">

            {/* === CATEGORY 1: Technical === */}
            <div className="py-8 border border-white/20">
                <h3 className="px-4 text-2xl text-gray-400 font-['Manrope']">Technical Job Openings</h3>
            </div>
            
            {/* Grid for Technical Jobs */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x divide-white/20 border border-white/20">
                {techJobs.map((job) => (
                    <div key={job.id} className="p-6 flex flex-col h-full transition-colors duration-300">
                        <h4 className="text-xl font-medium mb-4 text-white font-['Space_Grotesk']">
                            {job.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light flex-grow">
                            {job.desc}
                        </p>
                        <Link 
                            href={`/Career/${job.id}`}
                            className="w-full py-2 bg-[#1A1A1A] hover:bg-[#252525] text-white text-sm font-medium rounded-lg transition-all text-center mt-auto"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </div>


            {/* === CATEGORY 2: Non-Technical === */}
            <div className="py-8 border border-white/20 mt-12">
                <h3 className="px-4 text-2xl text-gray-400 font-['Manrope']">Non-Technical Job Openings</h3>
            </div>

            {/* Grid for Non-Technical Jobs */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x divide-white/20 border border-white/20">
                {non_techJobs.map((job) => (
                    <div key={job.id} className="p-8 flex flex-col h-full transition-colors duration-300">
                        <h4 className="text-xl font-medium mb-4 text-white font-['Space_Grotesk']">
                            {job.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light flex-grow">
                            {job.desc}
                        </p>
                        <Link 
                            href={`/Career/${job.id}`}
                            className="w-full py-2 bg-[#1A1A1A] hover:bg-[#252525] text-white text-sm font-medium rounded-lg transition-all text-center mt-auto"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </div>

            {/* === CATEGORY 3: SALES === */}
            <div className="py-8 border border-white/20 mt-12">
                <h3 className="px-4 text-2xl text-gray-400 font-['Manrope']">Internships Openings</h3>
            </div>

            {/* Grid for internships */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x divide-white/20 border border-white/20">
                {internships.map((job) => (
                    <div key={job.id} className="p-8 flex flex-col h-full transition-colors duration-300">
                        <h4 className="text-xl font-medium mb-4 text-white font-['Space_Grotesk']">
                            {job.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light flex-grow">
                            {job.desc}
                        </p>
                        <Link 
                            href={`/Career/${job.id}`}
                            className="w-full py-2 bg-[#1A1A1A] hover:bg-[#252525] text-white text-sm font-medium rounded-lg transition-all text-center mt-auto"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </div>

        </div>
      </section>  

    </div>
  </div>  
  );
}