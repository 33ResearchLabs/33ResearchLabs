// Social Media Sharing Utilities

export interface ShareData {
  title: string;
  description: string;
  url: string;
  image?: string;
  hashtags?: string[];
}

// Base URLs for different social media platforms
const SOCIAL_PLATFORMS = {
  TWITTER: 'https://twitter.com/intent/tweet',
  FACEBOOK: 'https://www.facebook.com/sharer/sharer.php',
  LINKEDIN: 'https://www.linkedin.com/sharing/share-offsite',
  REDDIT: 'https://reddit.com/submit',
  WHATSAPP: 'https://api.whatsapp.com/send',
  TELEGRAM: 'https://t.me/share/url',
  EMAIL: 'mailto:'
};

// Generate sharing URLs for different platforms
export const generateShareUrls = (shareData: ShareData) => {
  const { title, description, url, image, hashtags = [] } = shareData;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagsString = hashtags.map(tag => `#${tag}`).join(' ');

  return {
    twitter: `${SOCIAL_PLATFORMS.TWITTER}?text=${encodedTitle}&url=${encodedUrl}&hashtags=${hashtags.join(',')}`,
    
    facebook: `${SOCIAL_PLATFORMS.FACEBOOK}?u=${encodedUrl}`,
    
    linkedin: `${SOCIAL_PLATFORMS.LINKEDIN}?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    
    reddit: `${SOCIAL_PLATFORMS.REDDIT}?url=${encodedUrl}&title=${encodedTitle}`,
    
    whatsapp: `${SOCIAL_PLATFORMS.WHATSAPP}?text=${encodedTitle} ${encodedUrl}`,
    
    telegram: `${SOCIAL_PLATFORMS.TELEGRAM}?url=${encodedUrl}&text=${encodedTitle}`,
    
    email: `${SOCIAL_PLATFORMS.EMAIL}?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };
};

// Share to specific platform
export const shareToSocialMedia = (platform: string, shareData: ShareData): void => {
  const shareUrls = generateShareUrls(shareData);
  const url = shareUrls[platform as keyof typeof shareUrls];
  
  if (url) {
    // Open in new window/tab
    const width = 600;
    const height = 600;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    
    window.open(
      url,
      '_blank',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  }
};

// Copy link to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    // Modern browsers with Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const copied = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return copied;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

// Native Web Share API (for mobile devices)
export const useNativeShare = async (shareData: ShareData): Promise<boolean> => {
  try {
    if (navigator.share && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      await navigator.share({
        title: shareData.title,
        text: shareData.description,
        url: shareData.url
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error('Native share failed:', error);
    return false;
  }
};

// Get current page share data
export const getCurrentPageShareData = (customTitle?: string, customDescription?: string): ShareData => {
  const title = customTitle || document.title || '33 Research Labs';
  const description = customDescription || 
    document.querySelector('meta[name="description"]')?.getAttribute('content') || 
    'Building the Infrastructure of the Future - AI, Blockchain, Cybersecurity';
  const url = window.location.href;
  const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '/preview.jpg';

  return {
    title,
    description,
    url,
    image,
    hashtags: ['33ResearchLabs', 'AI', 'Web3', 'Cybersecurity', 'TechNews']
  };
};