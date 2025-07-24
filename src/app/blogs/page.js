'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllBlogs } from '../lib/firebase/blogs';
import Image from 'next/image';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    async function fetchBlogs() {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (err) {
        setError('Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans px-4 md:px-8 lg:px-12">
      {/* Hero */}
      <section className="text-center px-4 md:px-8 lg:px-12 max-w-6xl mx-auto py-16 md:py-20 lg:py-24 mb-2 md:mb-3">
        <h1 className={`text-5xl font-bold mb-4 text-shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Tech Insights Blog</h1>
        <p className={`max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Discover the latest in AI, cloud, blockchain, design, security, and web development — written by MatchBest&apos;s experts, for innovators.</p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 grid gap-14 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {loading && <div className="col-span-full text-center text-lg text-purple-200">Loading blogs...</div>}
        {error && <div className="col-span-full text-center text-red-400">{error}</div>}
        {!loading && !error && blogs.length === 0 && <div className="col-span-full text-center text-purple-200">No blogs found.</div>}
        {blogs.map((post, i) => (
          <div
            key={post.slug || post.id || i}
            className={`flex flex-col h-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-800 overflow-hidden h-full flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0 group">
                <Image
                  src={post.imageURL?.imageURL || post.imageURL || '/assets/ai.jpeg'}
                  alt={post.title}
                  width={600}
                  height={300}
                  unoptimized
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-opacity duration-300 group-hover:opacity-40"></div>
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-white text-xl font-semibold mb-2 leading-tight">{post.title}</h3>
                  <div className="text-sm text-purple-300 mb-2">{post.date || (post.timestamp && new Date(post.timestamp.seconds * 1000).toLocaleDateString())}</div>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {post.tags && post.tags.map((tag, idx) => (
                      <span key={idx} className="bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full text-xs font-medium text-white">#{tag}</span>
                    ))}
                  </div>
                  <p className="text-purple-200 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt || (post.description ? post.description.slice(0, 120) + (post.description.length > 120 ? '...' : '') : '')}
                  </p>
                </div>
                {/* Read More Button */}
                <Link
                  href={`/blogs/${post.slug || post.id}`}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 text-sm group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className='h-10'></div>
    </main>
  );
} 