# SEO and Analytics Implementation

This document explains the canonical links and Google Analytics implementation added to the 33 Research Labs website.

## Canonical Links

### What are Canonical Links?

Canonical links help search engines understand which version of a URL is the "main" one when there are multiple URLs with similar or duplicate content. This helps with SEO by preventing duplicate content penalties.

### Implementation

- **Utility Function**: `src/utils/seo.ts`
  - `generateCanonicalUrl()`: Generates canonical URLs based on pathname
  - `getCanonicalUrl()`: Gets canonical URL for current page
- **Base Domain**: `https://www.33researchlabs.xyz`

### Pages with Canonical Links

✅ Homepage (`/`)
✅ Services (`/services`)
✅ Insights (`/insights`)
✅ Contact (`/contact-us`)
✅ Team (`/team`)
✅ About (`/about-us`)

### Usage

```tsx
import { generateCanonicalUrl } from "@/utils/seo";

<Helmet>
  <link rel="canonical" href={generateCanonicalUrl("/your-path")} />
</Helmet>;
```

## Google Analytics 4

### Setup

1. **Environment Variable**: Add your GA4 Measurement ID to `.env`:

   ```
   VITE_GA_MEASUREMENT_ID=G-C01D2G5H89
   ```

2. **Components**:
   - `src/components/GoogleAnalytics.tsx`: Main GA component that handles initialization and page tracking
   - `src/utils/googleAnalytics.ts`: Utility functions for GA tracking

### Features Implemented

#### 1. Page View Tracking

- Automatically tracks page views on route changes
- Tracks page title and URL

#### 2. Event Tracking

- Form submissions (Contact form)
- CTA button clicks
- Custom events

#### 3. Conversion Tracking

- Contact form submissions
- Key user actions

### Usage Examples

#### Track Custom Events

```tsx
import { trackEvent } from "@/utils/googleAnalytics";

// Track button clicks
trackEvent("click", "navigation", "header_menu");

// Track interactions
trackEvent("engagement", "scroll", "page_bottom");
```

#### Track Conversions

```tsx
import { trackConversion } from "@/utils/googleAnalytics";

trackConversion("purchase", {
  transaction_id: "12345",
  value: 99.99,
  currency: "USD",
});
```

### Events Currently Tracked

1. **Contact Form Submission**

   - Event: `contact_form_submit`
   - Parameters: project_type, budget_range, company

2. **CTA Button Clicks**
   - Hero "Start Building" button
   - Footer "Get in Touch" button

### Analytics Events Structure

```typescript
// Page Views
gtag("config", GA_MEASUREMENT_ID, {
  page_path: "/services",
  page_title: "Services - 33 Research Labs",
  page_location: "https://www.33researchlabs.xyz/services",
});

// Custom Events
gtag("event", "click", {
  event_category: "cta",
  event_label: "hero_start_building",
});

// Conversions
gtag("event", "contact_form_submit", {
  project_type: "AI Development",
  budget_range: "$100K - $500K",
  company: "Tech Startup",
});
```

## Environment Setup

### Required Environment Variables

```bash
# Backend API
VITE_BACKEND_URL=http://localhost:4200

# Google Analytics 4 Measurement ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Production Considerations

1. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID
2. Ensure the canonical base URL matches your production domain
3. Test GA events in Google Analytics Debug mode during development

## Robots Meta Tags and robots.txt

### What are Robots Meta Tags?
Robots meta tags provide page-level instructions to search engine crawlers about how to index and follow links on specific pages.

### Implementation
- **Utility Functions**: `src/utils/seo.ts`
  - `generateRobotsContent()`: Generates robots meta tag content
  - `ROBOTS_CONFIG`: Predefined configurations for different page types

### Robots Configurations Used

#### Standard Pages (INDEX)
```
index, follow, max-image-preview:large
```
- **Used on**: Homepage, Services, Contact, Team, About

#### Content Pages (CONTENT)  
```
index, follow, max-snippet:160, max-image-preview:large
```
- **Used on**: Insights page (for better snippet control)

#### Legal Pages (LEGAL)
```
index, follow, noarchive, max-snippet:100
```
- **Used on**: Privacy Policy, Terms, GDPR pages

#### Admin Pages (NOINDEX)
```
noindex, nofollow
```
- **Used on**: Login page, Admin dashboard

### robots.txt File
Located at `/public/robots.txt`, the file includes:

- **Allowed paths**: All main public pages
- **Blocked paths**: `/admin/`, `/login`, `/api/`, development files
- **Bot-specific rules**: Different crawl delays for major search engines
- **AI bot restrictions**: Blocks GPTBot, ChatGPT-User, CCBot (respects user preference)
- **Sitemap location**: Points to sitemap.xml

### Usage Examples

#### Basic Robots Meta Tag
```tsx
import { generateRobotsContent, ROBOTS_CONFIG } from "@/utils/seo";

<Helmet>
  <meta name="robots" content={generateRobotsContent(ROBOTS_CONFIG.INDEX)} />
</Helmet>
```

#### Custom Robots Configuration
```tsx
<meta name="robots" content={generateRobotsContent({
  index: true,
  follow: true,
  maxSnippet: 120,
  maxImagePreview: 'standard'
})} />
```

## SEO Best Practices Implemented

1. **Canonical URLs**: Prevent duplicate content issues
2. **Meta Descriptions**: Unique descriptions for each page
3. **Title Tags**: Descriptive, unique titles with brand name
4. **Keywords Meta Tags**: Relevant keywords for each page
5. **Open Graph URLs**: Proper OG URLs for social sharing
6. **Robots Meta Tags**: Page-level crawler instructions
7. **robots.txt File**: Site-wide crawler directives

## Testing

### Canonical Links

1. View page source and check for `<link rel="canonical" ...>` tags
2. Verify URLs are properly formatted and accessible

### Google Analytics

1. Use Chrome DevTools > Network tab to verify GA requests
2. Install Google Analytics Debugger extension
3. Use GA Real-Time reports to see live data
4. Check Google Tag Assistant for proper implementation

## Next Steps

To complete the SEO and analytics setup:

1. **Get GA4 Measurement ID**:

   - Create Google Analytics 4 property
   - Get your measurement ID (starts with "G-")
   - Update `.env` file

2. **Verify Domain**:

   - Ensure the canonical base URL matches your actual domain
   - Update `BASE_URL` in `src/utils/seo.ts` if needed

3. **Add More Tracking** (Optional):
   - Newsletter signups
   - Service page interactions
   - Blog post engagement
   - Download tracking
