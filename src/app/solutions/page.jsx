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
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Solutions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {solutionsData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href={item.link || "#"}
                    target="_blank"
                    className="text-sm font-bold text-purple-600 border-b border-purple-500 pb-0.5 hover:text-purple-800 hover:border-purple-900 transition-colors"
                  >
                    Learn More →
                  </Link>

                  <Link
                    href={item.extraLink}
                    target="_blank"
                    className="text-sm font-semibold text-gray-600 hover:text-purple-600 border-b border-gray-500 hover:border-purple-600 transition-colors flex items-center gap-1"
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
  );
};

export default SolutionsPage;
