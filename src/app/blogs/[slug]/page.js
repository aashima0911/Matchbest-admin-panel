import Link from 'next/link';
import { getAllBlogs, getBlogBySlug } from '../../lib/firebase/blogs';
import Image from 'next/image';
import DarkMarkdownRenderer from '../../components/DarkMarkdownRenderer';
import { notFound } from 'next/navigation';

// Generate static params for all blogs
export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => ({
      slug: blog.slug || blog.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug);
    const title = blog?.title || 'Blog Post';
    const description = blog?.description || blog?.content?.slice(0, 160) || 'Tech insights blog post';
    const keywords = blog?.tags ? blog.tags.join(', ') : 'tech blog, AI, cloud computing, software development';
    const imageUrl = blog?.imageURL?.imageURL || blog?.imageURL || 'https://matchbest.ai/assets/og-image.jpg';

    return {
      title: `${title} | MatchBest Group Blog`,
      description: description,
      keywords: keywords,
      alternates: {
        canonical: `https://matchbest.ai/blogs/${slug}`,
      },
      openGraph: {
        title: `${title} | MatchBest Group Blog`,
        description: description,
        url: `https://matchbest.ai/blogs/${slug}`,
        siteName: 'MatchBest Group',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: blog?.timestamp ? new Date(blog.timestamp.seconds * 1000).toISOString() : undefined,
        modifiedTime: blog?.timestamp ? new Date(blog.timestamp.seconds * 1000).toISOString() : undefined,
        authors: ['MatchBest Group'],
        tags: blog?.tags || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | MatchBest Group Blog`,
        description: description,
        images: [imageUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      other: {
        'article:author': 'MatchBest Group',
        'article:published_time': blog?.timestamp ? new Date(blog.timestamp.seconds * 1000).toISOString() : undefined,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post | MatchBest Group',
      description: 'Tech insights and industry updates from MatchBest Group',
      keywords: 'tech blog, AI, cloud computing, software development',
      openGraph: {
        title: 'Blog Post | MatchBest Group',
        description: 'Tech insights and industry updates from MatchBest Group',
        url: `https://matchbest.ai/blogs/${slug}`,
        siteName: 'MatchBest Group',
        images: [
          {
            url: 'https://matchbest.ai/assets/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'MatchBest Group Blog',
          },
        ],
        locale: 'en_US',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Blog Post | MatchBest Group',
        description: 'Tech insights and industry updates from MatchBest Group',
        images: ['https://matchbest.ai/assets/og-image.jpg'],
      },
    };
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  try {
    const blog = await getBlogBySlug(slug);

    if (!blog) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-gray-900 text-white font-sans px-4 md:px-8 lg:px-12 pt-20 pb-20">
        <div className="max-w-5xl mx-auto">
          <Link href="/blogs" className="text-purple-400 hover:underline">&larr; Back to Blogs</Link>
          <h1 className="text-4xl font-bold mt-6 mb-2">{blog.title}</h1>
          <div className="text-purple-300 mb-4">
            {blog.date || (blog.timestamp && new Date(blog.timestamp.seconds * 1000).toLocaleDateString())}
          </div>
          <div className="flex gap-2 flex-wrap mb-4">
            {blog.tags && blog.tags.map((tag, idx) => (
              <span key={idx} className="bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full text-xs font-medium text-white">#{tag}</span>
            ))}
          </div>

          {/* Hero Image with Optimization */}
          {(blog.imageURL?.imageURL || blog.imageURL) && (
            <div className="mb-8">
              <Image
                src={blog.imageURL?.imageURL || blog.imageURL}
                alt={blog.title}
                width={1200}
                height={600}
                className="w-full h-96 md:h-[28rem] object-cover rounded-xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1200px"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmkny5VzSLvSY4bYRbJcb5xLXG9jhRxMEgMQsLGCBVFfyOMKhEANwaPjOSUJMgTaWgAA=="
              />
            </div>
          )}

          {/* Blog Content */}
          <article className="mb-8 prose prose-lg prose-invert max-w-none">
            <DarkMarkdownRenderer content={blog.content || blog.description || ''} />
          </article>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}
