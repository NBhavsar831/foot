export const trackPageLoad = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      const navigation = performance.getEntriesByType('navigation')[0];
      
      // Log detailed performance metrics
      console.log('Performance Metrics:', {
        pageLoadTime: `${loadTime.toFixed(2)}ms`,
        domContentLoaded: `${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`,
        firstContentfulPaint: getFirstContentfulPaint(),
        largestContentfulPaint: getLargestContentfulPaint()
      });
      
      // Send to analytics service (replace with your analytics)
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: Math.round(loadTime),
          custom_parameter: 'home_page'
        });
      }
    });
  }
};

const getFirstContentfulPaint = () => {
  const paintEntries = performance.getEntriesByType('paint');
  const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
  return fcp ? `${fcp.startTime.toFixed(2)}ms` : 'Not available';
};

const getLargestContentfulPaint = () => {
  return new Promise((resolve) => {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      resolve(`${lastEntry.startTime.toFixed(2)}ms`);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  });
};

export const trackUserInteraction = (action, element) => {
  console.log(`User interaction: ${action} on ${element}`);
  
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'engagement',
      event_label: element
    });
  }
};

export const trackError = (error, errorInfo) => {
  console.error('Application Error:', error, errorInfo);
  
  // Send to error tracking service
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false
    });
  }
};