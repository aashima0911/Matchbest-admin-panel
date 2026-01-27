"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next";

export default function VerticalsCarousel() {
  const { t } = useTranslation();

  const verticals = [
    {
      id: 1,
      name: "MatchBest",
      logo: "/assets/matchbest-removebg-preview.png",
      link: "https://matchbestsoftware.com/",
      items: [
        <span>{t('verticals.matchbest.item1')} <a href="https://avasuite.ai/" target="_blank" className="text-blue-400 hover:underline">{t('verticals.matchbest.viewMore')}</a></span>,
        t('verticals.matchbest.item2'),
        t('verticals.matchbest.item3'),
        t('verticals.matchbest.item4'),
        t('verticals.matchbest.item5'),
        t('verticals.matchbest.item6'),
        // t('verticals.matchbest.item7'),
        t('verticals.matchbest.item8'),
        // t('verticals.matchbest.item9'),
      ],
    },
    {
      id: 2,
      name: "Xelta",
      logo: "/assets/xelta-logo-removebg-preview.png",
      link: "https://xelta.ai/",
      items: [
        t('verticals.xelta.item1'),
        t('verticals.xelta.item2'),
        t('verticals.xelta.item3'),
        t('verticals.xelta.item4'),
        t('verticals.xelta.item5'),
        t('verticals.xelta.item6'),
        t('verticals.xelta.item7'),
      ],
    },
    {
      id: 3,
      name: "HealNova",
      logo: "/assets/healnova-removebg-preview.png",
      link: "https://healnova.ai/",
      items: [
        t('verticals.healNova.item1'),
        t('verticals.healNova.item2'),
        // t('verticals.healNova.item3'),
        t('verticals.healNova.item4'),
        t('verticals.healNova.item5'),
        t('verticals.healNova.item6'),
        t('verticals.healNova.item7'),
        t('verticals.healNova.item8'),
        t('verticals.healNova.item9'),
      ],
    },
    {
      id: 4,
      name: "Elite Maverick",
      logo: "/assets/maverick-removebg-preview.png",
      link: "https://www.elitemaverick.com/",
      items: [
        t('verticals.eliteMaverick.item1'),
        t('verticals.eliteMaverick.item2'),
        t('verticals.eliteMaverick.item3'),
        t('verticals.eliteMaverick.item4'),
        t('verticals.eliteMaverick.item5'),
        t('verticals.eliteMaverick.item6'),
        t('verticals.eliteMaverick.item7'),
      ],
    },
    {
      id: 5,
      name: "Vitaay",
      logo: "/assets/vitaay-removebg-preview.png",
      link: "https://www.vitaay.ai/",
      items: [
        t('verticals.vitaay.item1'),
        t('verticals.vitaay.item2'),
        t('verticals.vitaay.item3'),
        t('verticals.vitaay.item4'),
        t('verticals.vitaay.item5'),
        t('verticals.vitaay.item6'),
        t('verticals.vitaay.item7'),
      ],
    },
    {
      id: 6,
      name: "StreamPlay",
      logo: "/assets/str.png",
      link: "https://streamplay.ai/",
      items: [
        "All-in-One OTT Streaming Platform",
        "AI-Powered Recommendations",
        "Seamless Multi-Device",
        "Cross-Platform Playback",
        "Adaptive Bitrate Streaming",
        "Extensive personilised Library",
        "Personalized Profiles & Watchlists",
        "Subscription Monetization",
      ],
    },
  ]

  return (
    <section className="w-full py-2 px-2 md:px-4 lg:px-8 pb-10">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-normal text-white mb-6 tracking-wide">{t('verticals.title', 'Our Verticals')}</h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">{t('verticals.subtitle', 'Purpose-built technology solutions designed to solve real industry challenges.')}</p>
        </div>
        
        {/* Grid Container */}
        <div className="flex flex-col items-center">
          <div className="hidden lg:grid grid-cols-3 gap-8 mb-8 text-left max-w-none mx-auto w-full">
              {/* Column 1: Services */}
              <div className="col-span-1 border-r border-white/20 h-full flex items-center">
                <h3 className="text-3xl text-white font-normal">Services</h3>
              </div>
              
              {/* Column 2: Products */}
              <div className="col-span-2 pl-4 flex items-center">
                <h3 className="text-3xl text-white font-normal">Products</h3>
              </div>
          </div>
            
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 max-w-none mx-auto w-full">
            
            {verticals.slice(0, 3).map((vertical,index) => (
              
              <div
                key={vertical.id}
                className="w-full max-w-md rounded-[64PX] glass-effect bg-[#0a0a0a] transition-all duration-500 overflow-hidden group border border-purple-500/20"
              >
                <div className="relative h-full p-8 flex flex-col">
                  {/* Content */}
                  <div className="flex flex-col h-full">
                    <div key={vertical.id} className="relative group mb-12"> 
                      <div 
                        className="absolute -top-24 -left-6 z-20 font-['Manrope'] mt-12 font-extrabold text-[154px] leading-[154px] text-[#020202] pointer-events-none select-none"
                        style={{ 
                          WebkitTextStroke: '2px white',
                          paintOrder: 'stroke fill'
                        }}
                      >
                        {index + 1}
                      </div>
                    {/* Logo/Title Section */}
                    <div className="h-12 mb-0 flex items-center justify-center">
                      {vertical.logo ? (
                        <Image
                          src={vertical.logo || "/placeholder.svg"}
                          alt={`${vertical.name} Logo`}
                          className="h-20 w-auto object-contain"
                          width={120}
                          height={40}
                        />
                      ) : (
                        <div className="flex items-center justify-center">
                          <h3 className="text-3xl font-bold text-white">
                            Elite <span className="text-yellow-400">Maverick</span>
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>

                    {/* Features List */}
                    <div className="mb-4 flex-grow">
                      <ul className="space-y-3">
                        {vertical.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1.5 flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#b5a530"/>
                              </svg>
                            </span>
                            {/* Text */}
                            <span className="text-gray-300 text-[15px] font-light leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={vertical.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex bg-white text-black font-semibold px-6 py-2 gap-3 rounded-full transition-all duration-300 transform hover:bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-center justify-center shadow-lg hover:shadow-xl"
                    >
                      <span>{t('verticals.learnMore')} </span>
                      <div className="relative w-8 h-8 items-center justify-center">
                        <Image
                          src="/assets/arrow.svg" 
                          alt="Arrow"
                          width={32}
                          height={32}
                          className="object-contain transition-transform duration-300 group-hover:-rotate-45"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

          {/* Second row - 3 cards, centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-none">
              {verticals.slice(3, 6).map((vertical,index) => (
                <div
                  key={vertical.id}
                  className="w-full max-w-md rounded-[64px] glass-effect bg-[#0a0a0a] transition-all duration-500 overflow-hidden group border border-purple-500/20"
                >
                  {/* Card Background with gradient on hover */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Content */}
                    <div className="flex flex-col h-full">
                      <div key={vertical.id} className="relative group mb-14"> 
                        <div 
                          className="absolute -top-24 -left-6 z-20 mt-12 font-['Manrope'] font-extrabold text-[154px] leading-[154px] text-[#020202] pointer-events-none select-none"
                          style={{ 
                            WebkitTextStroke: '2px white',
                            paintOrder: 'stroke fill'
                          }}
                        >
                          {index + 4}
                        </div>
                    {/* Logo/Title Section */}
                      <div className="h-12 mb-0 flex items-center justify-center">
                        {vertical.logo ? (
                          <Image
                            src={vertical.logo || "/placeholder.svg"}
                            alt={`${vertical.name} Logo`}
                            className="h-20 w-auto object-contain"
                            width={120}
                            height={40}
                          />
                        ) : (
                          <div className="flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">
                              Elite <span className="text-yellow-400">Maverick</span>
                            </h3>
                          </div>
                        )}
                      </div>
                      </div>

                      {/* Features List */}
                      <div className="mb-4 flex-grow">
                        <ul className="space-y-3">
                          {vertical.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-1.5 flex-shrink-0">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#b5a530"/>
                                </svg>
                              </span>
                              {/* Text */}
                              <span className="text-gray-300 text-[15px] font-light leading-snug">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <a
                      href={vertical.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex bg-white text-black font-semibold px-6 py-2 gap-3 rounded-full transition-all duration-300 transform  hover:bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-center justify-center shadow-lg hover:shadow-xl"
                    >
                      <span>{t('verticals.learnMore')} </span>
                      <div className="relative w-8 h-8 items-center justify-center">
                        <Image
                          src="/assets/arrow.svg" 
                          alt="Arrow"
                          width={32}
                          height={32}
                          className="object-contain transition-transform duration-300 group-hover:-rotate-45"
                        />
                      </div>
                    </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
