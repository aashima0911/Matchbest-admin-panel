"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { ChevronDown } from 'lucide-react';

// === DATA ===
const solutionsData = [
  {
    id: 0,
    name: "MatchBest Software Pvt. Ltd.",
    description: "Specializing in IT consulting, application development, and end-to-end technology solutions. Ensuring secure, scalable, and resilient IT infrastructures.",
    image: "/assets/matchbest-software.jpg",
    link: "https://www.matchbestsoftware.com/",
    extraLink: "https://youtube.com/shorts/fFjtSVe72SQ", 
    extraLinkText: "View Live Demo ↗",
  },
  {
    id: 1,
    name: "Xelta",
    description: "Next-gen cloud solutions and AI-driven analytics to empower businesses. Focusing on scalability and performance.",
    image: "/assets/xelta.jpg",
    link: "https://xelta.ai/",
    extraLink: "https://youtu.be/sH1A-2dyc4o", 
    extraLinkText: "View Live Demo ↗",
  },
  {
    id: 2,
    name: "Healnova",
    description: "Revolutionizing healthcare with smart diagnostic tools and patient management systems.",
    image: "/assets/h.jpg",
    link: "https://healnova.ai/",
    extraLink: "https://youtube.com/shorts/uyjBw0iPbfI", 
    extraLinkText: "View Live Demo ↗",
  },
  {
    id: 3,
    name: "Streamplay",
    description: "Leader in OTT and media streaming technology providing high-concurrency content delivery.",
    image: "/assets/stream_play.png",
    link: "https://streamplay.ai/",
    extraLink: "https://youtu.be/uXL5Oie00pE", 
    extraLinkText: "View Live Demo ↗",
    
  },
  {
    id: 4,
    name: "Vitaay",
    description: "Sustainable energy software helping companies track carbon footprints and optimize resource usage.",
    image: "/assets/vitaay.avif",
    link: "https://www.vitaay.ai/",
    extraLink: "", 
    // extraLinkText: "View Live Demo ↗",
    
  },
  {
    id: 5,
    name: "Elite Maverick",
    description: "Premium financial technology solutions offering secure trading platforms.",
    image: "/assets/elite.png",
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
          <div className="w-[30%] flex flex-col gap-4 border-r border-gray-200 pr-8">
            {solutionsData.map((item, index) => (
            <Link 
              href={solutionsData[activeTab].link || "#"}
              target="_blank"
              className=""
                  > 
              <div 
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`
                  text-base py-2 px-4 rounded-lg cursor-pointer transition-all duration-300
                  ${activeTab === index 
                    ? 'bg-purple-50 text-purple-700 font-semibold translate-x-2' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                {item.name}
              </div>
              </Link>
            ))}
          </div>
           

          {/* RIGHT SIDE: CARD PREVIEW */}
          <div className="w-[70%]">
            <div className="flex bg-gray-50 rounded-2xl border border-black/20 overflow-hidden h-[350px]">
              
              {/* Content Text */}
              <div className="w-1/2 p-8 flex flex-col justify-center">
                  {/* <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {solutionsData[activeTab].name}
                  </h3> */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solutionsData[activeTab].description}
                  </p>

                  
                      {/* Learn More →
                  </Link> */}

                  <Link 
                      href={solutionsData[activeTab].extraLink}
                      target="_blank" 
                      className="self-start text-sm font-semibold text-gray-600 hover:text-purple-600 mb-3 border-b border-gray-500 hover:border-purple-600 transition-colors flex items-center gap-1"
                  >
                      {solutionsData[activeTab].extraLinkText }
                  </Link>

              </div>

              {/* Image */}
              <div className="w-3/2 relative h-full">
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