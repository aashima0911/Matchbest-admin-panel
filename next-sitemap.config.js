const { getAllBlogs } = require('./src/app/lib/firebase/blogs');
const { getAllCareers } = require('./src/app/lib/firebase/careers');

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://matchbest.ai/',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = [];

    try {
      // Fetch blogs from Firebase
      const blogs = await getAllBlogs();
      blogs.forEach(blog => {
        result.push({
          loc: `/blogs/${blog.slug}`,
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: blog.timestamp?.toDate()?.toISOString() || new Date().toISOString(),
        });
      });

      // Fetch careers from Firebase
      const careers = await getAllCareers();
      careers.forEach(career => {
        result.push({
          loc: `/careers/${career.jobSlug}`,
          changefreq: 'weekly',
          priority: 0.6,
          lastmod: career.timestamp?.toDate()?.toISOString() || new Date().toISOString(),
        });
      });
    } catch (error) {
      console.error('Error generating dynamic sitemap paths:', error);
    }

    return result;
  },
  // Exclude certain paths if needed
  exclude: ['/api/*', '/_next/*', '/404', '/500'],
  // Transform function for custom URL transformations
  transform: async (config, path) => {
    // Custom priority for specific pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith('/blogs/') && !path.endsWith('/blogs')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Default transformation
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
