"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// === DATA ===
const solutionsData = [
  {
    id: 0,
    logo: "/assets/match-best-logo.png",
    name: "MatchBest Software",
    description: "Matchbest Software is an IT services and system integration firm that helps businesses bridge the gap between technology and business needs.",
    image: "/assets/matchbest-software.jpg",
    link: "https://www.matchbestsoftware.com/",
    extraLink: "https://youtube.com/shorts/fFjtSVe72SQ", 
    extraLinkText: "View Live Demo ↗",
  },
  {
    id: 1,
    logo: "/assets/xelta-dark.png",
    name: "Xelta",
    description: "Xelta is a best generation platform that suits taste of all age groups. It provides user to generate contents like videos, images. Apart from this, it can also create visuals and draft stories.",
    image: "/assets/Xelta.jpg",
    link: "https://xelta.ai/",
    extraLink: "https://youtu.be/sH1A-2dyc4o", 
    extraLinkText: "View Live Demo ↗",
  },
  {
    id: 2,
    logo: "/assets/healnova.png",
    name: "Healnova",
    description: "Healnova presents itself as an AI-powered wellness platform and health-screening app that delivers fast, personalized health insights and wellness checks using users’ mobile devices.",
    image: "/assets/h.jpg",
    link: "https://healnova.ai/",
    extraLink: "https://youtube.com/shorts/uyjBw0iPbfI", 
    extraLinkText: "View Live Demo ↗",
  },
  {
    id: 3,
    logo: "/assets/stream.png",
    name: "Streamplay",
    description: "Leader in OTT and media streaming technology providing high-concurrency content delivery. Works as a central hub that brings together content from various major streaming services into a single, seamless interface.",
    image: "/assets/stream_play.png",
    link: "https://streamplay.ai/",
    extraLink: "https://youtu.be/uXL5Oie00pE", 
    extraLinkText: "View Live Demo ↗",
    
  },
  {
    id: 4,
    logo: "/assets/vitaay-dark.png",
    name: "Vitaay",
    description: "Vitaay is an AI-powered influencer marketing platform designed to bridge the gap between companies and content creators. It's core mission is to help visionary brands meet influential voices to facilitate authentic marketing partnerships.",
    image: "/assets/vitaay-page.jpg",
    link: "https://www.vitaay.ai/",
    extraLink: "", 
    // extraLinkText: "View Live Demo ↗",
    
  },
  {
    id: 5,
    logo: "/assets/elite-dark.png",
    name: "Elite Maverick",
    description: "EliteMaverick is a premier manpower and staffing solutions partner based in the United States. It specialize in precision hiring for industries where specific talent and timing are critical.",
    image: "/assets/elite-page.png",
    link: "https://www.elitemaverick.com/",
    extraLink: "", 
    // extraLinkText: "View Live Demo ↗",
  }
];

const SolutionsMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div 
      className="group h-full flex items-center"
      onMouseLeave={() => setActiveTab(0)} 
    >
    <div className="group h-full flex items-center">
      
      {/* 1. THE TRIGGER BUTTON */}
      <button className="relative font-['Space_Grotesk'] font-normal text-[16px] leading-[32px] tracking-normal text-white transition-colors duration-300
        flex items-center gap-1 cursor-default outline-none
        
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3
        after:w-1.5 after:h-1.5 after:bg-purple-500 after:rounded-full 
        after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-300
      ">
        Solutions
      </button>

      {/* 2. THE MEGA MENU */}
      <div className="absolute top-full left-0 w-full bg-white text-black shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t border-gray-100 z-50">
        
        <div className="max-w-[1400px] mx-auto px-8 py-10 flex items-start gap-12">
          
          {/* LEFT SIDE: LIST */}
          <div className="w-[20%] flex flex-col gap-4 border-r border-gray-200 pr-8">
            {solutionsData.map((item, index) => (
            <Link 
            key={item.id}
              href={solutionsData[activeTab].link || "#"}
              target="_blank"
              className=""> 
              <div 
                
                onMouseEnter={() => setActiveTab(index)}
                className={`
                  text-base py-2 px-4 rounded-lg cursor-pointer 
                  ${activeTab === index 
                    ? 'text-purple-700 font-semibold' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}>
                {/* {item.name} */}
                <div className="relative h-6 w-32"> 
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain object-left" 
                  />
                </div>
              </div>
            </Link>
            ))}
          </div>
           

          {/* RIGHT SIDE: CARD PREVIEW */}
          <div className="w-[80%]">
            <div className="flex bg-gray-50 rounded-sm border border-black/20 overflow-hidden h-[315px]">
              
              {/* Content Text */}
              <div className="w-1/2 p-8 flex flex-col justify-center">
                  {/* <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {solutionsData[activeTab].name}
                  </h3> */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {solutionsData[activeTab].description}
                  </p>
                  <Link 
                      href={solutionsData[activeTab].extraLink}
                      target="_blank" 
                      className="self-start text-sm font-semibold text-gray-600 hover:text-purple-600 mb-3 border-b border-gray-500 hover:border-purple-600 transition-colors flex items-center gap-1"
                  >
                      {solutionsData[activeTab].extraLinkText }
                  </Link>

              </div>

              {/* Image */}
              <div className="w-4/2 relative h-full">
                <Image
                  src={solutionsData[activeTab].image}
                  alt={solutionsData[activeTab].name}
                  fill
                  className="object-cover transition-transform duration-700"
                />
               </div>

             </div>
           </div>

         </div>
       </div>

     </div>
   </div>
  );
};

export default SolutionsMenu;