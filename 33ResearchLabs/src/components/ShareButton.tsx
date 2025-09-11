import React, { useState } from 'react';
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  MessageSquare,
  Send, 
  Mail,
  Link2,
  Check,
  Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import { 
  ShareData, 
  shareToSocialMedia, 
  copyToClipboard, 
  useNativeShare,
  getCurrentPageShareData 
} from '@/utils/socialShare';
import { trackEvent } from '@/utils/googleAnalytics';

interface ShareButtonProps {
  title?: string;
  description?: string;
  url?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showText?: boolean;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  description,
  url,
  className = '',
  variant = 'outline',
  size = 'sm',
  showText = true
}) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Get share data (use provided props or current page data)
  const shareData: ShareData = {
    title: title || document.title,
    description: description || 
      document.querySelector('meta[name="description"]')?.getAttribute('content') || 
      '33 Research Labs - Building the Infrastructure of the Future',
    url: url || window.location.href,
    hashtags: ['33ResearchLabs', 'AI', 'Web3', 'Cybersecurity']
  };

  // Handle social media sharing
  const handleShare = async (platform: string) => {
    // Try native share first (on mobile)
    if (platform === 'native') {
      const nativeShareSuccess = await useNativeShare(shareData);
      if (nativeShareSuccess) {
        trackEvent('share', 'social', 'native_share');
        setIsOpen(false);
        return;
      }
    }

    // Platform-specific sharing
    shareToSocialMedia(platform, shareData);
    trackEvent('share', 'social', platform);
    setIsOpen(false);
  };

  // Handle copy link
  const handleCopyLink = async () => {
    const success = await copyToClipboard(shareData.url);
    
    if (success) {
      setCopied(true);
      toast.success('Link copied to clipboard!');
      trackEvent('share', 'copy', 'link_copied');
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error('Failed to copy link');
    }
    
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Share2 className="h-4 w-4" />
          {showText && <span className="ml-2">Share</span>}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        {/* Native Share (mobile only) */}
        <DropdownMenuItem 
          onClick={() => handleShare('native')}
          className="cursor-pointer md:hidden"
        >
          <Share2 className="mr-2 h-4 w-4" />
          <span>Share...</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="md:hidden" />
        
        {/* Social Media Platforms */}
        <DropdownMenuItem 
          onClick={() => handleShare('twitter')}
          className="cursor-pointer"
        >
          <Twitter className="mr-2 h-4 w-4 text-blue-400" />
          <span>Share on Twitter</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('facebook')}
          className="cursor-pointer"
        >
          <Facebook className="mr-2 h-4 w-4 text-blue-600" />
          <span>Share on Facebook</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('linkedin')}
          className="cursor-pointer"
        >
          <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
          <span>Share on LinkedIn</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('reddit')}
          className="cursor-pointer"
        >
          <MessageSquare className="mr-2 h-4 w-4 text-orange-500" />
          <span>Share on Reddit</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        {/* Messaging Apps */}
        <DropdownMenuItem 
          onClick={() => handleShare('whatsapp')}
          className="cursor-pointer"
        >
          <MessageSquare className="mr-2 h-4 w-4 text-green-500" />
          <span>Share on WhatsApp</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('telegram')}
          className="cursor-pointer"
        >
          <Send className="mr-2 h-4 w-4 text-blue-500" />
          <span>Share on Telegram</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => handleShare('email')}
          className="cursor-pointer"
        >
          <Mail className="mr-2 h-4 w-4 text-gray-500" />
          <span>Share via Email</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        {/* Copy Link */}
        <DropdownMenuItem 
          onClick={handleCopyLink}
          className="cursor-pointer"
        >
          {copied ? (
            <Check className="mr-2 h-4 w-4 text-green-500" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;