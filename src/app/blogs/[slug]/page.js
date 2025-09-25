'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getAllBlogs } from '../../lib/firebase/blogs';
import Image from 'next/image';
import DarkMarkdownRenderer from '../../components/DarkMarkdownRenderer';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const blogs = await getAllBlogs();
        const found = blogs.find(b => b.slug === slug || b.id === slug);
        if (!found) throw new Error('Blog not found');
        setBlog(found);
      } catch (err) {
        setError('Blog not found.');
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10 min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 min-h-screen">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center py-10 text-red-500 min-h-screen">Blog not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans px-4 md:px-8 lg:px-12 pt-20 pb-20">
      <div className="max-w-5xl mx-auto">
        <Link href="/blogs" className="text-purple-400 hover:underline">&larr; Back to Blogs</Link>
        <h1 className="text-4xl font-bold mt-6 mb-2">{blog.title}</h1>
        <div className="text-purple-300 mb-4">{blog.date || (blog.timestamp && new Date(blog.timestamp.seconds * 1000).toLocaleDateString())}</div>
        <div className="flex gap-2 flex-wrap mb-4">
          {blog.tags && blog.tags.map((tag, idx) => (
            <span key={idx} className="bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full text-xs font-medium text-white">#{tag}</span>
          ))}
        </div>
        {blog.imageURL?.imageURL || blog.imageURL ? (
          <Image
            src={blog.imageURL?.imageURL || blog.imageURL}
            alt={blog.title}
            width={800}
            height={400}
            unoptimized
            className="w-full h-72 object-cover rounded-xl mb-6"
          />
        ) : null}
        <div className="mb-8">
          <DarkMarkdownRenderer content={blog.content || blog.description || ''} />
        </div>
      </div>
    </main>
  );
}
