"use client";
import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function PressReleaseClient({ releases }) {
  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white pt-20 overflow-x-hidden relative">
        <div 
        className="absolute -top-[100px] -right-[100px] w-[1000px] h-[500px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, #020010 0%, #0a0a4a 10%,  #431f63 15%, #28233d 40%, #272f8b 50%, #072769 60%, #15274a 75%, #0a0a4a 90%, #020010 100%)',
          filter: 'blur(100px)',
          zIndex: 0 
        }}
      ></div>

      {/* 1. PURPLE GLOW EFFECT  */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-16 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start px-2 gap-4 mb-4">
          <h1 className="text-3xl md:text-4xl tracking-tight">
            Our Press Releases
          </h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {releases.length > 0 ? (
            releases.map((item) => (
            <Link href={`/press-releases/${item.slug}`} key={item.slug}>  
              <article className="group cursor-pointer flex flex-col gap-4">
                
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900">
                  <NextImage
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 px-1">
                  
                  {/* Categories Tags */}
                  <div className="flex gap-2">
                      {item.categories?.map(tag => (
                          <span key={tag} className={`
                              text-[10px] uppercase font-bold px-3 py-1 rounded-md tracking-wider
                              ${tag === 'News' 
                                  ? 'bg-pink-500/10 text-pink-300 border border-pink-500/20' 
                                  : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'}
                          `}>
                              {tag}
                          </span>
                      ))}
                  </div>

                  <h3 className="text-md font-normal">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <NextImage src={item.image} alt={item.author} fill className="object-cover" />
                    </div>
                    <div className="text-xs text-gray-400 font-medium flex items-center gap-2">
                      <span className="text-gray-200">{item.author}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                </div>

              </article>
            </Link>  
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No articles found in "{selectedCategory}" category.
            </div>
          )}
          
        </div>

      </div>


      {/* <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Press Releases</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((item) => (
            <Link href={`/press-releases/${item.slug}`} key={item.slug}>
              <div className="group border border-white/10 p-8 rounded-2xl bg-[#050505] hover:border-white/20 transition-all h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold leading-snug group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h2>
                </div>
                <div className="mt-8 text-gray-500 text-sm font-medium">
                  {item.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
}