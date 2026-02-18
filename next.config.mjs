/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dumecc9my/image/**',
        
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',    
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',      
      },
    ],
  },

  // Compression
  compress: true,

  // Experimental features for performance
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },

  // Webpack optimization for tree-shaking
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Enable tree-shaking for better bundle size
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: true,
      };
    }
    return config;
  },

  // Security headers for comprehensive protection
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Temporarily relaxed CSP for debugging animations
          {
            key: 'Content-Security-Policy',
            value: "default-src * 'unsafe-eval' 'unsafe-inline'; script-src * 'unsafe-eval' 'unsafe-inline'; style-src * 'unsafe-inline'; img-src * data: blob:; connect-src * wss: blob:; font-src *; frame-src *; object-src *; worker-src * blob:; prefetch-src * blob:;",
          },

          // Strict Transport Security - enforce HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },

          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },

          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          // Cross-site scripting protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },

          // Referrer policy for privacy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },

          // Feature policy - restrict browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },

          // Remove server information
          {
            key: 'X-Powered-By',
            value: 'PHP/7.4.0', // Fake server info for obscurity
          },

          // Prevent caching of sensitive pages
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },

      {
        // Additional security for API routes
        source: '/api/:path*',
        headers: [
          {
            key: 'X-RateLimit-Limit',
            value: '100',
          },
          {
            key: 'X-RateLimit-Window',
            value: '60',
          },
          // CORS headers
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'production' ? 'https://matchbest.ai' : '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type,Authorization',
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400',
          },
        ],
      },

      {
        // Cache static assets for 30 days
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable',
          },
        ],
      },
      {
        // Cache Next.js static files for 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache other static files for 7 days
        source: '/:path*.(css|js|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
