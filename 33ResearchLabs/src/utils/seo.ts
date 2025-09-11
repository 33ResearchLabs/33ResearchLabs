// Base domain configuration
const BASE_URL = 'https://www.33researchlabs.xyz';

export const generateCanonicalUrl = (pathname: string = ''): string => {
  // Remove leading slash if present
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  
  // Build canonical URL
  if (cleanPath) {
    return `${BASE_URL}/${cleanPath}`;
  }
  
  return BASE_URL;
};

export const getCanonicalUrl = (): string => {
  if (typeof window !== 'undefined') {
    return generateCanonicalUrl(window.location.pathname);
  }
  return BASE_URL;
};

// Robots meta tag configurations
export interface RobotsConfig {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
}

export const generateRobotsContent = (config: RobotsConfig = {}): string => {
  const {
    index = true,
    follow = true,
    noarchive = false,
    nosnippet = false,
    noimageindex = false,
    maxSnippet,
    maxImagePreview = 'large',
    maxVideoPreview
  } = config;

  const robots: string[] = [];

  // Basic indexing rules
  robots.push(index ? 'index' : 'noindex');
  robots.push(follow ? 'follow' : 'nofollow');

  // Additional directives
  if (noarchive) robots.push('noarchive');
  if (nosnippet) robots.push('nosnippet');
  if (noimageindex) robots.push('noimageindex');

  // Max snippet length
  if (maxSnippet !== undefined) robots.push(`max-snippet:${maxSnippet}`);

  // Image preview size
  if (maxImagePreview) robots.push(`max-image-preview:${maxImagePreview}`);

  // Video preview length
  if (maxVideoPreview !== undefined) robots.push(`max-video-preview:${maxVideoPreview}`);

  return robots.join(', ');
};

// Predefined robots configurations
export const ROBOTS_CONFIG = {
  // Standard indexable page (default for most pages)
  INDEX: { index: true, follow: true },
  
  // No indexing (for admin pages, login, etc.)
  NOINDEX: { index: false, follow: false },
  
  // Index but don't follow links (for landing pages)
  INDEX_NOFOLLOW: { index: true, follow: false },
  
  // Don't index but follow links (for utility pages)
  NOINDEX_FOLLOW: { index: false, follow: true },
  
  // Blog/content pages with snippet control
  CONTENT: { 
    index: true, 
    follow: true, 
    maxSnippet: 160,
    maxImagePreview: 'large' as const
  },
  
  // Privacy/legal pages
  LEGAL: {
    index: true,
    follow: true,
    noarchive: true,
    maxSnippet: 100
  }
};