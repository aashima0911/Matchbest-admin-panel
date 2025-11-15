// Rate limiting implementation
class RateLimiter {
  constructor(options = {}) {
    this.windowMs = options.windowMs || 15 * 60 * 1000; // 15 minutes
    this.maxRequests = options.maxRequests || 100;
    this.requests = new Map();
  }

  getKey(identifier) {
    return `${identifier}:${Math.floor(Date.now() / this.windowMs)}`;
  }

  isRateLimited(identifier) {
    const key = this.getKey(identifier);
    const currentCount = this.requests.get(key) || 0;

    if (currentCount >= this.maxRequests) {
      return true;
    }

    this.requests.set(key, currentCount + 1);
    return false;
  }

  // Clean up old entries
  cleanup() {
    const now = Date.now();
    for (const [key] of this.requests) {
      const [, timestamp] = key.split(':');
      if (parseInt(timestamp) + this.windowMs < now) {
        this.requests.delete(key);
      }
    }
  }
}

// Global rate limiter instances
const apiLimiter = new RateLimiter({ windowMs: 60 * 1000, maxRequests: 60 }); // 60 requests per minute
const authLimiter = new RateLimiter({ windowMs: 15 * 60 * 1000, maxRequests: 5 }); // 5 attempts per 15 minutes

// Input sanitization functions
export const sanitizeInput = {
  // Strip HTML tags and dangerous characters
  text: (input) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/[;]/g, '') // Remove semicolons
      .trim()
      .slice(0, 1000); // Limit length
  },

  // Email validation and sanitization
  email: (email) => {
    if (typeof email !== 'string') return '';
    const sanitized = email.toLowerCase().trim();
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(sanitized) ? sanitized : '';
  },

  // Phone number sanitization
  phone: (phone) => {
    if (typeof phone !== 'string') return '';
    return phone.replace(/[^\d+\-\s\(\)]/g, '').trim().slice(0, 20);
  },

  // Generic string sanitizer
  string: (input, maxLength = 255) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[<>'"&]/g, '') // Remove dangerous characters
      .trim()
      .slice(0, maxLength);
  }
};

// Security middleware functions
export const securityMiddleware = {
  // Check for suspicious patterns
  detectSuspiciousInput: (input) => {
    if (typeof input !== 'string') return false;
    const suspicious = [
      /\b(script|javascript|vbscript|onload|onerror)\b/i,
      /\b(alert|document\.|window\.|eval|function)\b/i,
      /<script/i,
      /javascript:/i,
      /data:text/i,
      /<iframe/i,
      /<object/i,
      /<embed/i
    ];
    return suspicious.some(pattern => pattern.test(input));
  },

  // Validate request origin
  validateOrigin: (origin, allowedOrigins = []) => {
    if (!origin) return false;
    try {
      const url = new URL(origin);
      return allowedOrigins.includes(url.origin) || allowedOrigins.includes('*');
    } catch {
      return false;
    }
  },

  // Check bot detection
  isLikelyBot: (userAgent) => {
    if (!userAgent) return false;
    const botPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /headless/i,
      /phantom/i,
      /selenium/i,
      /puppeteer/i
    ];
    return botPatterns.some(pattern => pattern.test(userAgent));
  }
};

// Request throttling wrapper
export const withRateLimit = (handler, limiter = apiLimiter) => {
  return async (request, context) => {
    const clientIP = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown';

    const userAgent = request.headers.get('user-agent') || '';

    // Check if likely bot/scraper
    if (securityMiddleware.isLikelyBot(userAgent)) {
      const response = new Response('Bot detected', { status: 403 });
      response.headers.set('X-Bot-Detected', 'true');
      return response;
    }

    // Check rate limit
    if (limiter.isRateLimited(clientIP)) {
      const response = new Response(JSON.stringify({
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil(limiter.windowMs / 1000)
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil(limiter.windowMs / 1000).toString(),
          'X-RateLimit-Limit': limiter.maxRequests.toString(),
          'X-RateLimit-Window': (limiter.windowMs / 1000).toString()
        }
      });
      return response;
    }

    // Clean up old rate limit entries periodically
    limiter.cleanup();

    try {
      return await handler(request, context);
    } catch (error) {
      console.error('API Error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  };
};

// Get client information for monitoring
export const getClientInfo = (request) => {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const clientIP = forwarded?.split(',')[0]?.trim() ||
                   realIP ||
                   request.headers.get('cf-connecting-ip') ||
                   'unknown';

  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const origin = request.headers.get('origin') || '';

  return {
    ip: clientIP,
    userAgent,
    referer,
    origin,
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url
  };
};

// Request logging for security monitoring
export const logSecurityEvent = (eventType, details) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    type: eventType,
    ...details
  };

  // In production, send to your logging service
  console.log('SECURITY EVENT:', JSON.stringify(logEntry, null, 2));
};

export { RateLimiter, apiLimiter, authLimiter };
