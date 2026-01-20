"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// === RESOURCES DATA (Blogs & Press Releases) ===
const resourcesData = [
  {
    id: 0,
    name: "Blogs",
    description: "Explore our latest insights, technical deep dives, and industry trends in our dedicated blog section. Stay ahead with expert knowledge.",
    image: "/assets/blogs.jpg",
    link: "/blogs"
  },
  {
    id: 1,
    name: "Press Releases",
    description: "Stay updated with our latest company announcements, product launches, and media coverage. See how we are making headlines.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    link: "/press-releases"
  }
];

const ResourcesMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);


  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveTab(0);
  };

  return (
    <div 
      className="group h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* === TRIGGER BUTTON === */}
      <button className="
        relative font-['Space_Grotesk'] font-normal text-[16px] leading-[32px] tracking-normal text-white transition-colors duration-300
        flex items-center gap-1 cursor-default outline-none
        
        /* Dot Animation */
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3
        after:w-1.5 after:h-1.5 after:bg-purple-500 after:rounded-full 
        after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-300
      ">
        Resources
      </button>

      {/* === MEGA MENU === */}
      <div className="absolute top-full left-0 w-full bg-white text-black shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t border-gray-100 z-50">
        
        <div className="max-w-[1400px] mx-auto px-8 py-10 flex items-start gap-12">
          
          {/* LEFT SIDE */}
          <div className="w-[30%] flex flex-col gap-4 border-r border-gray-100 pr-8">
            {resourcesData.map((item, index) => (
              <div 
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`
                  text-base py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 flex justify-between items-center
                  ${activeTab === index 
                    ? 'bg-purple-50 text-purple-700 font-semibold translate-x-2' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                {item.name}
                {/* ARROW */}
                {activeTab === index && <span className="text-purple-500">→</span>}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[70%]">
            <div className="flex bg-gray-50 rounded-2xl overflow-hidden h-[300px]">
              
              {/* Text */}
              <div className="w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {resourcesData[activeTab].name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {resourcesData[activeTab].description}
                  </p>
                  
                  <Link 
                    href={resourcesData[activeTab].link}
                    className="self-start text-sm font-semibold text-purple-600 border-b border-purple-600 pb-0.5 hover:text-purple-800 hover:border-purple-800 transition-colors"
                  >
                      View {resourcesData[activeTab].name} →
                  </Link>
              </div>

              {/* Image */}
              <div className="w-3/2 relative h-full">
                <Image
                  src={resourcesData[activeTab].image}
                  alt={resourcesData[activeTab].name}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ResourcesMenu;