import React from 'react';
import { getPressReleaseBySlug } from '../../../lib/blogUtils'; 
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

// Custom markdown components
const markdownComponents = {
  h1: ({node, ...props}) => <h1 className="text-4xl md:text-5xl font-semibold mt-10 mb-6 text-white border-l-4 border-purple-500 pl-4 py-2" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 text-purple-400 border-b-2 border-purple-500/30 pb-3" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-3 text-white" {...props} />,
  h4: ({node, ...props}) => <h4 className="text-xl md:text-2xl font-normal mt-5 mb-3 text-gray-200" {...props} />,
  h5: ({node, ...props}) => <h5 className="text-lg md:text-xl font-normal mt-4 mb-2 text-gray-300" {...props} />,
  h6: ({node, ...props}) => <h6 className="text-base md:text-lg font-normal mt-3 mb-2 text-gray-400" {...props} />,
  
  p: ({node, ...props}) => <p className="text-gray-300 font-light leading-relaxed mb-4" {...props} />,
  
  ul: ({node, ...props}) => <ul className="list-none space-y-3 mb-6 ml-0" {...props} />,
  ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-3 mb-6 ml-4" {...props} />,
  
  li: ({node, ...props}) => (
    <li className="text-gray-300 font-light flex items-start gap-3 ml-0">
      <CheckCircle2 className="text-purple-500 w-5 h-5 flex-shrink-0 mt-0.5 min-w-5" />
      <span>{props.children}</span>
    </li>
  ),
  
  blockquote: ({node, ...props}) => (
    <blockquote className="border-l-4 border-purple-500 pl-6 py-4 italic text-gray-400 bg-purple-500/5 rounded-r-lg my-6" {...props} />
  ),
  
  code: ({node, inline, ...props}) => {
    if (inline) {
      return <code className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-sm font-mono" {...props} />;
    }
    return <code className="block bg-[#1A1A1A] border border-white/10 text-gray-300 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm" {...props} />;
  },
  
  pre: ({node, ...props}) => <pre className="my-6" {...props} />,
  
  table: ({node, ...props}) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-white/10">
      <table className="w-full text-sm text-gray-300" {...props} />
    </div>
  ),
  
  thead: ({node, ...props}) => <thead className="bg-purple-600/20 border-b border-white/10" {...props} />,
  tbody: ({node, ...props}) => <tbody className="divide-y divide-white/10" {...props} />,
  tr: ({node, ...props}) => <tr className="hover:bg-white/5 transition-colors" {...props} />,
  td: ({node, ...props}) => <td className="px-4 py-3" {...props} />,
  th: ({node, ...props}) => <th className="px-4 py-3 text-left font-normal text-purple-300" {...props} />,
  
  a: ({node, ...props}) => <a className="text-purple-400 hover:text-purple-300 underline transition-colors" {...props} />,
  
  img: ({node, ...props}) => (
    <div className="my-8 rounded-2xl overflow-hidden border border-white/10">
      <img className="w-full h-auto" {...props} />
    </div>
  ),
  
  hr: ({node, ...props}) => <hr className="my-8 border-white/10" {...props} />,
};

export default async function PressReleaseDetailPage({ params }) {
  const { slug } = await params;
  
  const release = await getPressReleaseBySlug(slug); 

  if (!release) {
    return <div className="text-white text-center pt-40">Press Release not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-purple-900/20 via-purple-900/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <Link href="/press-releases" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Press Releases
        </Link>

        {/* === PART 1: HEADER === */}
        <div className="mb-8 pb-0">
          <h1 className="text-2xl md:text-3xl mb-2 leading-tight text-white">
            {release.meta.title}
          </h1>
          <div className="text-gray-400 text-sm flex flex-wrap gap-4 items-center">
            <span>{release.meta.date}</span>
          </div>
        </div>

        {/* Hero Image */}
        {release.meta.image && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-8">
            <Image src={release.meta.image} alt={release.meta.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        )}

        {/* === PART 2: CONTENT === */}
        <article className="prose-lg max-w-none">
          <ReactMarkdown components={markdownComponents}>{release.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}