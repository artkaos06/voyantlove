export const config = {
  // Pages to exclude from monitoring (non-content pages)
  excludePatterns: [
    '/mentions-legales',
    '/confidentialite',
    '/contact',
  ],

  // Minimum impressions to consider a page worth monitoring
  minImpressions: 10,

  // How many top pages to include in report
  maxPages: 20,

  // How many queries per page to track
  queriesPerPage: 5,

  // GSC lookback period in days
  lookbackDays: 28,
};
