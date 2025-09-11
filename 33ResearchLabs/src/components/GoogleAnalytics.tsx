import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeGA, trackPageView } from '@/utils/googleAnalytics';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics on component mount
    initializeGA();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;