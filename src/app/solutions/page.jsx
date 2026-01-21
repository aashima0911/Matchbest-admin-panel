"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    id: 5,
    name: "Streamplay",
    description: "Leader in OTT and media streaming technology providing high-concurrency content delivery.",
    image: "/assets/stream_play.png",
    link: "https://streamplay.ai/",
    extraLink: "https://youtu.be/uXL5Oie00pE",
    extraLinkText: "View Live Demo ↗",
  }
];

const SolutionsPage = () => {
  return (
  <div className="bg-black text-white min-h-screen flex flex-col py-8 "> 
  <section className="w-full pt-22 px-4 md:px-8 mb-2 ">
    <div 
      className="relative w-full max-w-[1300px] h-[150px] md:h-[200px] rounded-[3rem] overflow-hidden flex items-center justify-center shadow-2xl border border-white/5">

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
          Our Solutions
        </h1>
        
        {/* Subheading */}
        <p className="text-gray-200 text-md md:text-md font-['Inter'] font-light tracking-wide max-w-2xl mx-auto opacity-90">
          Commit to provide excellent solutions
        </p>

      </div>

    </div>


    <div className="bg-black text-white min-h-screen flex flex-col ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {solutionsData.map((item) => (
            <div key={item.id} className="bg-[rgb(20,20,20)] rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-['Manrope'] font-medium mb-3 text-white">
                  {item.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 font-['Space_Grotesk'] text-sm font-light">
                  {item.description}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href={item.link || "#"}
                    target="_blank"
                    className="text-sm font-bold text-purple-400 pb-0.5 hover:text-purple-600 transition-colors"
                  >
                    Learn More
                  </Link>

                  <Link
                    href={item.extraLink}
                    target="_blank"
                    className="text-sm font-semibold text-gray-100 hover:text-gray-400 transition-colors flex items-center gap-1"
                  >
                    {item.extraLinkText || "View Details"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
</div>   
);
};

export default SolutionsPage;
