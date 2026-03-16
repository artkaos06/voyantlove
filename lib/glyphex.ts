/**
 * Glyphex Analytics Tracking Utilities
 * Custom event tracking for affiliate clicks and conversions
 */

// Extend window type to include Glyphex analytics
declare global {
  interface Window {
    analytics?: {
      track: (eventName: string, properties?: Record<string, any>) => void;
    };
    dataLayer?: Record<string, any>[];
  }
}

/**
 * Track affiliate link click
 * @param voyantId - ID of the voyant from MonSiteVoyance
 * @param source - Source/reference parameter (e.g., 'homepage-hero-primary')
 * @param voyantName - Name of the voyant (optional)
 */
export function trackAffiliateClick(
  voyantId: string,
  source: string,
  voyantName?: string
) {
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track('affiliate_click', {
      voyant_id: voyantId,
      source: source,
      voyant_name: voyantName || 'unknown',
      page_url: window.location.href,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
    });

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Glyphex: Affiliate click tracked', {
        voyantId,
        source,
        voyantName,
      });
    }
  }
}

/**
 * Track page view (optional - already handled by Glyphex tracker)
 * Use this for custom page view tracking if needed
 */
export function trackPageView(pageName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track('page_view', {
      page_name: pageName,
      page_url: window.location.href,
      page_path: window.location.pathname,
      ...properties,
    });
  }
}

/**
 * Track custom event
 * @param eventName - Name of the event
 * @param properties - Event properties
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(eventName, {
      page_url: window.location.href,
      page_path: window.location.pathname,
      ...properties,
    });
  }
}
