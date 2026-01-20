"use client";
import React, { useState } from 'react';
import Image from "next/image";

// === MOCK DATA (Image se match kiya hai) ===
const blogPosts = [
  {
    id: 1,
    title: "Best Billing Software for Business Owners: Save Time and Boost Cash Flow",
    categories: ["News"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    title: "The Best AI Chatbots for Customer Service",
    categories: ["Tech", "Learn"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    title: "Leading Healthcare Software Development Company in India",
    categories: ["Learn"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    title: "Best Billing Software for Business Owners: Save Time and Boost Cash Flow",
    categories: ["News"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 5,
    title: "The Best AI Chatbots for Customer Service",
    categories: ["Tech"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 6,
    title: "Leading Healthcare Software Development Company in India",
    categories: ["News", "Learn"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 7,
    title: "The Best AI Chatbots for Customer Service",
    categories: ["Inspiration"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 8,
    title: "Leading Healthcare Software Development Company in India",
    categories: ["Learn"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 9,
    title: "Best Billing Software for Business Owners: Save Time and Boost Cash Flow",
    categories: ["News"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 10,
    title: "The Best AI Chatbots for Customer Service",
    categories: ["Tech", "Inspiration"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 11,
    title: "Leading Healthcare Software Development Company in India",
    categories: ["News"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    author: "Varsha Mishra",
    date: "12 Jan 2026",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const filters = ["All","Learn", "Tech", "Inspiration", "News"];

export default function BlogsPage() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // 2. FILTER LOGIC: Blogs ko filter karo
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.categories.includes(selectedCategory));

  return (
    // Main Background: Black with Purple selection color
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white pt-20">
      <div 
        className="absolute -top-[100px] -right-[100px] w-[1000px] h-[800px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, #020010 0%, #0a0a4a 10%,  #431f63 15%, #28233d 40%, #272f8b 50%, #072769 60%, #15274a 75%, #0a0a4a 90%, #020010 100%)',
          filter: 'blur(100px)',
          zIndex: 0 
        }}
      ></div>

      {/* 1. PURPLE GLOW EFFECT  */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-10 py-6">
        
        {/* === HEADER SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 pb-4">
          <h1 className="text-4xl md:text-5xl tracking-tight">
            Recent Articles
          </h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button 
                key={filter} 
                onClick={() => setSelectedCategory(filter)}
                className={`px-4 py-2 rounded-full bg-white/5 hover:bg-white/40 hover:text-white transition-all text-sm font-medium backdrop-blur-sm
                ${selectedCategory === filter 
                    ? 'bg-purple-600 border-purple-600 text-white border border-white/40' // Active Style
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:text-purple-400 text-white' 
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* === BLOG GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer flex flex-col gap-4">
                
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 px-1">
                  
                  {/* Categories Tags */}
                  <div className="flex gap-2">
                      {post.categories.map(tag => (
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
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image src={post.avatar} alt={post.author} fill className="object-cover" />
                    </div>
                    <div className="text-xs text-gray-400 font-medium flex items-center gap-2">
                      <span className="text-gray-200">{post.author}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{post.date}</span>
                    </div>
                  </div>

                </div>

              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No articles found in "{selectedCategory}" category.
            </div>
          )}
          
        </div>

      </div>
    </div>
  );
}