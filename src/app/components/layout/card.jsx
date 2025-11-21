"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next";

export default function VerticalsCarousel() {
  const { t } = useTranslation();

  const verticals = [
    {
      id: 1,
      name: "MatchBest",
      logo: "/assets/mat.png",
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
      logo: "/xelta-logo1.png",
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
      logo: "/heal-nova-logo.png",
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
      logo: null,
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
      logo: "/vitaay-logo.png",
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
  ]

  return (
    <section className="w-full py-2 px-4 md:px-8 lg:px-12 pb-10">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 tracking-tight">{t('verticals.title')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('verticals.subtitle')}
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col items-center">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 max-w-none mx-auto w-full">
            {verticals.slice(0, 3).map((vertical) => (
              <div
                key={vertical.id}
                className="w-full max-w-md glass-effect bg-black/40 rounded-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden group border border-purple-500/20"
              >
                {/* Card Background with gradient on hover */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Content */}
                  <div className="flex flex-col h-full">
                    {/* Logo/Title Section */}
                    <div className="flex justify-center mb-8 h-20 items-center">
                      {vertical.logo ? (
                        <Image
                          src={vertical.logo || "/placeholder.svg"}
                          alt={`${vertical.name} Logo`}
                          className="h-16 object-contain"
                          width={192}
                          height={64}
                        />
                      ) : (
                        <div className="flex items-center justify-center">
                          <h3 className="text-3xl font-bold text-white">
                            Elite <span className="text-yellow-400">Maverick</span>
                          </h3>
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="mb-8 flex-grow">
                      <ul className="space-y-0">
                        {vertical.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm leading-relaxed flex items-start gap-3 group/item"
                          >
                            <span className="text-cyan-400 font-semibold mt-0.5 flex-shrink-0">•</span>
                            <span className="group-hover/item:text-gray-100 transition-colors duration-300">
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
                      className="mt-auto bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                    >
                      {t('verticals.learnMore')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards, centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-none">
              {verticals.slice(3, 5).map((vertical) => (
                <div
                  key={vertical.id}
                  className="w-full max-w-md glass-effect bg-black/40 rounded-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden group border border-purple-500/20"
                >
                  {/* Card Background with gradient on hover */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Content */}
                    <div className="flex flex-col h-full">
                      {/* Logo/Title Section */}
                      <div className="flex justify-center mb-8 h-20 items-center">
                        {vertical.logo ? (
                          <Image
                            src={vertical.logo || "/placeholder.svg"}
                            alt={`${vertical.name} Logo`}
                            className="h-16 object-contain"
                            width={192}
                            height={64}
                          />
                        ) : (
                          <div className="flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white">
                              Elite <span className="text-yellow-400">Maverick</span>
                            </h3>
                          </div>
                        )}
                      </div>

                      {/* Features List */}
                      <div className="mb-8 flex-grow">
                        <ul className="space-y-0">
                          {vertical.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm leading-relaxed flex items-start gap-3 group/item"
                            >
                              <span className="text-cyan-400 font-semibold mt-0.5 flex-shrink-0">•</span>
                              <span className="group-hover/item:text-gray-100 transition-colors duration-300">
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
                        className="mt-auto bg-gradient-to-r from-[#4B6CEB] to-[#9159B7] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                      >
                        {t('verticals.learnMore')}
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
