import Link from 'next/link';
import { getAllBlogs } from '../lib/firebase/blogs';
import Image from 'next/image';
import { Suspense } from 'react';

async function fetchBlogs() {
  try {
    const blogs = await getAllBlogs();
    return blogs;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return [];
  }
}

function BlogGrid({ blogs }) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {!blogs || blogs.length === 0 && (
        <div className="col-span-full text-center text-purple-200">No blogs found.</div>
      )}
      {blogs?.map((post, i) => (
        <BlogCard key={post.slug || post.id || i} post={post} index={i} />
      ))}
    </section>
  );
}

function BlogCard({ post, index }) {
  return (
    <div
      className={`flex flex-col h-full transition-all duration-700 opacity-100 translate-y-0`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-800 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-32 overflow-hidden flex-shrink-0 group">
          <Image
            src={post.imageURL?.imageURL || post.imageURL || '/assets/ai.jpeg'}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={index < 2}
            loading={index < 4 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkny5VzSLvSY4bYRbJcb5xLXG9jhRxMEgMQsLGCBVFfyOMKhEANwaPjOSUJMgTaWgAA=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-opacity duration-300 group-hover:opacity-40"></div>
          <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-white text-xl font-semibold mb-2 leading-tight">{post.title}</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              {post.tags && post.tags.map((tag, idx) => (
                <span key={idx} className="bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full text-xs font-medium text-white">#{tag}</span>
              ))}
            </div>
          </div>
          {/* Date at bottom */}
          <div className="text-sm text-purple-300 mb-2">{post.date || (post.timestamp && new Date(post.timestamp.seconds * 1000).toLocaleDateString())}</div>
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
  );
}

function BlogGridSkeleton() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-gray-800 rounded-xl overflow-hidden h-[400px] animate-pulse">
          <div className="h-32 bg-gray-700"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-700 rounded mb-4"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
            </div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-10 bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans px-4 md:px-8 lg:px-12 pt-24 md:pt-20">
      {/* Hero */}
      <section className="text-center px-4 md:px-8 lg:px-12 max-w-6xl mx-auto py-4 md:py-6 lg:py-8 mb-2 md:mb-3">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-shadow-lg">Tech Insights Blog</h1>
      </section>

      {/* Blog Grid with Suspense */}
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid blogs={blogs} />
      </Suspense>

      <div className="h-10"></div>
    </main>
  );
}
