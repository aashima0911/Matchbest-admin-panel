'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'How AI is Transforming Business',
    
    author: 'Jay Saith',
    tags: ['AI', 'Innovation'],
    excerpt: 'AI is now a strategic asset. It&#39;s transforming how companies operate, make decisions, and engage with customers. Businesses that embrace AI will lead the next decade.',
    content: `
    <h2 class="text-3xl font-bold mb-4">The AI Revolution in Business</h2>
    <p class="mb-6">Artificial Intelligence has transitioned from a futuristic idea to a core driver of modern business success. Organizations that leverage AI are gaining unparalleled improvements in efficiency, customer satisfaction, and market leadership.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Key Areas of AI Transformation</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Customer Service:</strong> AI-driven chatbots and virtual assistants deliver 24/7 support, drastically cutting response times.</li>
      <li><strong>Data Analytics:</strong> Machine learning analyzes complex datasets to uncover patterns and opportunities that humans may overlook.</li>
      <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) is reducing manual work, allowing teams to focus on strategic initiatives.</li>
      <li><strong>Predictive Analytics:</strong> AI forecasts market trends, consumer behavior, and operational demands with increasing accuracy.</li>
    </ul>
  
    <h3 class="text-2xl font-semibold mb-3">Real-World Impact</h3>
    <p class="mb-6">For example, a retail brand using AI-driven inventory systems analyzed past sales, seasonal trends, and external data like weather. The result: a 30% reduction in stockouts and a 25% drop in overstock—translating to major savings and better customer service.</p>
  
    <h3 class="text-2xl font-semibold mb-3">The Future of AI in Business</h3>
    <p class="mb-6">As AI continues to evolve, its applications will grow more advanced—think autonomous logistics fleets or generative marketing content. The real challenge lies in seamlessly embedding AI into core business workflows, not just adopting it as a separate tool.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Getting Started with AI</h3>
    <p class="mb-6">To begin your AI journey, identify high-impact areas with measurable outcomes. Start with manageable use cases and prioritize strong data foundations—because AI is only as effective as the quality of the data it learns from.</p>

    <h3 class="text-2xl font-semibold mb-3">AI Implementation Strategies</h3>
    <p class="mb-6">Successful AI implementation requires a strategic approach. Start with pilot projects in non-critical areas to build confidence and demonstrate value. Focus on data quality and governance, as poor data leads to poor AI outcomes. Invest in team training and change management to ensure smooth adoption.</p>

    <h3 class="text-2xl font-semibold mb-3">Measuring AI Success</h3>
    <p class="mb-6">Track key metrics like cost savings, efficiency gains, and customer satisfaction scores. Use A/B testing to compare AI-powered processes against traditional methods. Regular audits ensure AI systems remain fair, transparent, and aligned with business objectives.</p>

    <h3 class="text-2xl font-semibold mb-3">Ethical Considerations</h3>
    <p class="mb-6">As AI becomes more prevalent, ethical considerations become crucial. Ensure transparency in AI decision-making processes, protect user privacy, and avoid bias in algorithms. Regular audits and diverse development teams help maintain ethical AI practices.</p>
  `,
    image: '/assets/ai.jpeg',
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
   
    author: 'Shivam Varma',
    tags: ['Cloud', 'DevOps'],
    excerpt: 'Migrating to the cloud demands more than tools. Learn how to plan, test, secure, and scale a cloud environment for long-term resilience and performance.',
    content: `
    <h2 class="text-3xl font-bold mb-4">Mastering Cloud Migration</h2>
    <p class="mb-6">Cloud migration is more than just transferring apps to the cloud—it&#39;s a strategic transformation that demands comprehensive planning, precise execution, and continuous optimization. Organizations that treat migration as an evolving journey are more likely to realize its full benefits.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Pre-Migration Planning</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Assessment:</strong> Take inventory of current infrastructure, applications, and data dependencies to determine readiness.</li>
      <li><strong>Strategy:</strong> Choose the most suitable migration method—lift-and-shift, re-platform, or cloud-native refactoring.</li>
      <li><strong>Cost Analysis:</strong> Analyze the total cost of ownership, including hidden expenses such as data egress and management tools.</li>
      <li><strong>Risk Assessment:</strong> Identify risks early and develop mitigation strategies for downtime, data loss, or performance issues.</li>
    </ul>
  
    <h3 class="text-2xl font-semibold mb-3">Security First Approach</h3>
    <p class="mb-6">Security must be integrated at every stage of cloud migration. Apply strong identity and access controls, encrypt sensitive data at rest and in transit, and configure real-time monitoring systems. Conduct regular security audits and penetration tests to stay ahead of threats.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Performance Optimization</h3>
    <p class="mb-6">Migrating to the cloud unlocks scalable infrastructure, but it also introduces new performance challenges. Continuously monitor workloads, fine-tune resource allocation, and use auto-scaling and caching to ensure efficiency and responsiveness across varying traffic loads.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Post-Migration Best Practices</h3>
    <p class="mb-6">Once in the cloud, prioritize continuous improvement. Track key metrics for cost, uptime, and performance. Adopt DevOps methodologies like infrastructure as code (IaC) and CI/CD pipelines to automate deployments, increase agility, and maintain operational excellence.</p>

    <h3 class="text-2xl font-semibold mb-3">Multi-Cloud Strategies</h3>
    <p class="mb-6">Many organizations adopt multi-cloud strategies to avoid vendor lock-in and optimize costs. However, this approach requires careful planning around data consistency, security policies, and operational complexity. Use cloud management platforms to maintain visibility across providers.</p>

    <h3 class="text-2xl font-semibold mb-3">Cost Optimization</h3>
    <p class="mb-6">Cloud costs can spiral without proper management. Implement cost monitoring tools, use reserved instances for predictable workloads, and regularly review resource utilization. Consider serverless architectures for variable workloads to pay only for actual usage.</p>

    <h3 class="text-2xl font-semibold mb-3">Disaster Recovery</h3>
    <p class="mb-6">Design robust disaster recovery plans that leverage cloud-native services. Use cross-region replication for critical data, implement automated backup strategies, and regularly test recovery procedures. Cloud providers offer built-in redundancy, but custom solutions may be needed for specific requirements.</p>
  `,
    image: '/assets/Cloud Migration.webp',
  },
  {
    id: 3,
    title: 'The Future of Blockchain in Fintech',
    
    author: 'Somya Sharma',
    tags: ['Blockchain', 'Fintech'],
    excerpt: 'Fintech is entering a decentralized phase. Blockchain ensures transparency, lowers costs, and brings new opportunities for financial inclusion.',
    content: `
    <h2 class="text-3xl font-bold mb-4">Blockchain Revolutionizing Fintech</h2>
    <p class="mb-6">The intersection of blockchain technology and financial services is unlocking transformative opportunities for innovation, transparency, and global financial inclusion. Both legacy institutions and emerging fintech startups are exploring blockchain&#39;s potential, ushering in a new era of financial ecosystems.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Key Blockchain Applications in Fintech</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Cross-Border Payments:</strong> Blockchain enables faster, cheaper, and more transparent international money transfers, reducing friction in global commerce.</li>
      <li><strong>Smart Contracts:</strong> Self-executing contracts automate processes, minimize reliance on intermediaries, and lower counterparty risk.</li>
      <li><strong>Decentralized Finance (DeFi):</strong> Platforms offering lending, borrowing, and trading without banks are redefining access to financial tools.</li>
      <li><strong>Digital Identity:</strong> Blockchain supports user-controlled digital identities, giving individuals greater security and privacy.</li>
    </ul>
  
    <h3 class="text-2xl font-semibold mb-3">Regulatory Landscape</h3>
    <p class="mb-6">Governments and regulators worldwide are shaping frameworks to accommodate blockchain innovations while ensuring consumer protection and market stability. Collaborative regulatory efforts are critical to supporting safe and sustainable adoption in fintech.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Challenges and Opportunities</h3>
    <p class="mb-6">Scalability, energy efficiency, and user experience continue to challenge blockchain adoption. However, innovations such as Layer 2 protocols, proof-of-stake consensus, and enhanced UX design are helping bridge the gap between promise and practicality.</p>
  
    <h3 class="text-2xl font-semibold mb-3">The Road Ahead</h3>
    <p class="mb-6">Blockchain isn&#39;t replacing traditional finance—it&#39;s complementing it. By improving efficiency, transparency, and access, blockchain is poised to become an integral part of the modern financial infrastructure, reshaping how the world transacts and manages value.</p>
  `,
    image: '/assets/Blockchain.png',
  },
  {
    id: 4,
    title: 'Modern Web Development Trends in 2025',
    
    author: 'Diva Sah',
    tags: ['WebDev', 'Trends'],
    excerpt: 'Micro frontends, AI coding tools, and headless CMS are redefining front-end engineering. Get ahead with the tools that matter in 2025.',
    content: `
    <h2 class="text-3xl font-bold mb-4">Web Development in 2025: What&#39;s Next?</h2>
    <p class="mb-6">The web development landscape is evolving at an unprecedented pace, driven by emerging technologies, shifting user expectations, and the demand for faster, more efficient development workflows. As we look ahead to 2025, several trends are set to define the next era of web development.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Micro Frontends Architecture</h3>
    <p class="mb-6">Micro frontends are revolutionizing how teams build large-scale applications. By decomposing the frontend into smaller, manageable pieces, development teams can work autonomously, deploy independently, and use diverse tech stacks—resulting in faster iterations and greater scalability.</p>
  
    <h3 class="text-2xl font-semibold mb-3">AI-Powered Development Tools</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Code Generation:</strong> AI tools now assist in writing boilerplate code and implementing design patterns faster than ever.</li>
      <li><strong>Bug Detection:</strong> Machine learning models are helping developers identify and resolve bugs early in the development lifecycle.</li>
      <li><strong>Performance Optimization:</strong> AI is analyzing usage data to suggest performance improvements in real-time.</li>
      <li><strong>Accessibility Testing:</strong> Automated tools ensure applications meet accessibility standards and provide inclusive experiences.</li>
    </ul>
  
    <h3 class="text-2xl font-semibold mb-3">Headless CMS and JAMstack</h3>
    <p class="mb-6">Headless CMS platforms, when paired with static site generators and CDN delivery, enable faster, more secure, and modular website architectures. This decoupled approach provides developers with flexibility while empowering content creators with user-friendly publishing workflows.</p>
  
    <h3 class="text-2xl font-semibold mb-3">WebAssembly and Performance</h3>
    <p class="mb-6">WebAssembly (WASM) is unlocking near-native performance within browsers. Complex use cases like 3D rendering, real-time collaboration, and video processing are now feasible directly in the browser—ushering in a new era of powerful, cross-platform web apps.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Progressive Web Apps (PWAs)</h3>
    <p class="mb-6">Progressive Web Apps continue to bridge the gap between traditional web pages and native apps. With features like offline support, background sync, and push notifications, PWAs offer app-like experiences while remaining easy to update and deploy through the web.</p>
  `,
    image: '/assets/Web Development.jpg',
  },
  {
    id: 5,
    title: 'Cybersecurity Essentials for Startups',
   
    author: 'Lisa Ray',
    tags: ['Cybersecurity', 'Startups'],
    excerpt: 'Startups are vulnerable targets. Learn how to secure infrastructure, train teams, and detect threats before they cost you users or trust.',
    content: `
    <h2 class="text-3xl font-bold mb-4">Securing Your Startup&#39;s Digital Future</h2>
    <p class="mb-6">Startups face unique cybersecurity challenges. With limited resources and the need to move fast, security often takes a backseat to growth. However, a single security breach can destroy a startup&#39;s reputation and customer trust overnight. Building security into your startup&#39;s DNA from day one is essential for long-term success.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Foundational Security Practices</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li><strong>Multi-Factor Authentication (MFA):</strong> Implement MFA for all user accounts and administrative access.</li>
      <li><strong>Regular Security Updates:</strong> Keep all software, frameworks, and dependencies updated with the latest security patches.</li>
      <li><strong>Data Encryption:</strong> Encrypt sensitive data both in transit and at rest using industry-standard encryption protocols.</li>
      <li><strong>Access Control:</strong> Apply the principle of least privilege—grant only the minimum access necessary for users to perform their roles.</li>
    </ul>
  
    <h3 class="text-2xl font-semibold mb-3">Employee Security Training</h3>
    <p class="mb-6">Your team is your first line of defense against cyber threats. Conduct regular security awareness training on phishing, password hygiene, and safe browsing. Make it engaging and tailored to your team&#39;s actual workflows.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Incident Response Planning</h3>
    <p class="mb-6">No system is immune to breaches. A comprehensive incident response plan ensures your team acts quickly and effectively. Include communication protocols, containment measures, and recovery strategies to minimize damage.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Third-Party Risk Management</h3>
    <p class="mb-6">Startups often rely on third-party tools and vendors. Vet their security practices carefully and ensure they align with your standards. Schedule regular audits and request compliance certifications when possible.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Security Monitoring and Detection</h3>
    <p class="mb-6">Use real-time monitoring tools to detect suspicious activity early. Security Information and Event Management (SIEM) platforms can centralize logs, flag anomalies, and automate threat responses for stronger protection.</p>
  `,
    image: '/assets/Cybersecurity.jpg',
  },
  {
    id: 6,
    title: 'UX Design Principles for Scalable Products',
 
    author: 'Ava Roy',
    tags: ['UX', 'Product'],
    excerpt: 'Good design isn&#39;t about aesthetics alone. It&#39;s about usability, speed, accessibility, and clear paths to user goals.',
    content: `
    <h2 class="text-3xl font-bold mb-4">Designing for Scale and Success</h2>
    <p class="mb-6">User Experience (UX) design is the foundation of successful digital products. As products scale and user bases grow, the importance of thoughtful UX design becomes even more critical. Great UX isn&#39;t just about appearance—it&#39;s about crafting intuitive, efficient, and delightful experiences that fuel business growth.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Core UX Principles</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li><strong>User-Centered Design:</strong> Begin every design with user research to deeply understand their goals and frustrations.</li>
      <li><strong>Consistency:</strong> Use familiar patterns and consistent language to reduce user confusion.</li>
      <li><strong>Simplicity:</strong> Streamline workflows and eliminate unnecessary elements to minimize cognitive load.</li>
      <li><strong>Accessibility:</strong> Make sure your design works for users of all abilities by following inclusive design guidelines.</li>
    </ul>
  
    <h3 class="text-2xl font-semibold mb-3">Information Architecture</h3>
    <p class="mb-6">As your product grows, so does the need for a well-structured information architecture. Logical hierarchies help users locate what they need faster. Techniques like card sorting and tree testing ensure your structure aligns with user expectations.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Performance and UX</h3>
    <p class="mb-6">Users expect lightning-fast experiences. Optimizing performance—through image compression, lazy loading, and minimized HTTP requests—not only improves UX but also contributes to SEO and user retention.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Mobile-First Design</h3>
    <p class="mb-6">With mobile traffic dominating the web, designing with mobile in mind ensures a seamless experience across all screen sizes. Consider tap targets, gesture interactions, and thumb-friendly navigation in your process.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Data-Driven Design</h3>
    <p class="mb-6">Let user behavior inform your decisions. Tools like A/B testing, heatmaps, and session replays provide insight into how users engage with your product—and where they face friction.</p>
  
    <h3 class="text-2xl font-semibold mb-3">Design Systems</h3>
    <p class="mb-6">A robust design system ensures consistency as your team scales. Include reusable components, style tokens, and clear documentation to empower designers and developers to build with confidence and speed.</p>
  `,
    image: '/assets/UX Design.webp',
  },
];

// Function to get related articles based on current post
function getRelatedArticles(currentPostId) {
  const currentPost = blogPosts.find(p => p.id === currentPostId);
  
  // Define related articles for each post
  const relatedArticlesMap = {
    1: [2, 4, 6], // AI post -> Cloud Migration, Web Development, UX Design
    2: [1, 5, 3], // Cloud Migration -> AI, Cybersecurity, Blockchain
    3: [4, 1, 2], // Blockchain -> Web Development, AI, Cloud Migration
    4: [6, 3, 1], // Web Development -> UX Design, Blockchain, AI
    5: [2, 1, 4], // Cybersecurity -> Cloud Migration, AI, Web Development
    6: [4, 1, 5], // UX Design -> Web Development, AI, Cybersecurity
  };
  
  const relatedIds = relatedArticlesMap[currentPostId] || [2, 3, 4];
  return blogPosts.filter(p => relatedIds.includes(p.id));
}

export default function BlogPost({ params }) {
    const post = blogPosts.find((p) => p.id === parseInt(params.id));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    if (!post) {
      return (
        <div className="min-h-screen my-12 bg-gray-900 text-white flex items-center justify-center ">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-xl mb-8">The blog post you&#39;re looking for doesn&#39;t exist.</p>
            <Link
              href="/blog-page"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="max-w-5xl mx-auto px-6 sm:px-10 py-25">
          <Link
            href="/blog-page"
            className={`inline-flex items-center text-purple-300 hover:text-white transition-all duration-300 hover:translate-x-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Header Content with Image on Right */}
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 mb-8 ">
            {/* Text Content */}
            <div className="flex-1 w-full ">
              <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700 bg-opacity-60 px-3 py-1 rounded-full text-xs font-medium tracking-wide hover:bg-purple-600 transition-all duration-300 hover:scale-105"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className={`text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {post.title}
              </h1>
              <div className={`text-purple-300 text-sm mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {post.date}
              </div>
              <p className={`text-lg text-purple-200 leading-relaxed max-w-3xl transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {post.excerpt}
              </p>
            </div>
            {/* Blog Image */}
            <div className={`flex-shrink-0 w-full max-w-xs lg:max-w-sm h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-purple-700 relative mb-8 lg:mb-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-2'}`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </header>
  
        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className={`h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mb-10 transition-all duration-1000 delay-1000 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`} />
        </div>
  
        {/* Content */}
        <article className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">
          <div
            className={`prose prose-invert prose-purple max-w-none prose-lg transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Articles Section */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">
          <div className={`transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-8 text-white">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getRelatedArticles(post.id).map((relatedPost, i) => (
                <div
                  key={relatedPost.id}
                  className={`bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-800 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${1600 + i * 200}ms` }}
                >
                  <div className="h-32 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-purple-200 text-sm mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="inline-flex items-center text-purple-500 hover:text-white transition-colors text-sm font-medium"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    );
  }