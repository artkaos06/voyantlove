// Curated Keen advisor data for the commercial-intent lander.
//
// Why this file exists: neither BargesTech's affiliate API nor Keen itself
// expose advisor data to third parties. We can't fetch this live. So we
// hand-curate a small set of currently-active, well-rated love advisors
// from Keen and refresh it monthly. This is the standard practice for
// affiliate-review landers in this niche.
//
// Maintenance:
//   - Re-verify every 30 days that listed advisors are still active and
//     ratings haven't shifted dramatically
//   - Photos are optional; if `photoSrc` is null, the card renders a
//     stylized initial-based avatar
//   - All advisors here are real people on Keen with publicly-visible
//     ratings, names, and pricing as of capture date
//   - Source: directly observed on Keen's Love & Relationships category
//     (screenshot captured 2026-05-01, see public/images/keen/advisor-browse.png)
//
// Compliance note: photos and names referenced here are public-facing on
// keen.com. Standard editorial fair-use for affiliate reviews. If any
// advisor objects, remove on request.

export interface KeenAdvisor {
  /** Display name as shown on Keen. */
  name: string;
  /** Short tagline / specialty descriptor. */
  tagline: string;
  /** Star rating out of 5. */
  rating: number;
  /** Total review count (raw, not formatted). */
  reviewCount: number;
  /** Per-minute price in USD AFTER any intro promotion ends. */
  pricePerMinUsd: number;
  /** Total readings completed since joining. */
  totalReadings: number;
  /** Year the advisor joined Keen. */
  memberSince: number;
  /** Optional photo path (under /public/). null = initial avatar. */
  photoSrc: string | null;
  /** Optional specialties list (chips on the card). */
  specialties?: string[];
  /** Is the intro promo "5 min for $1" active for new users? */
  introOffer?: boolean;
  /**
   * Outcome-led hook copy for the card. Should describe what this
   * advisor specifically helps with, in language that connects to the
   * commercial-intent visitor's actual question. Short — 1 sentence.
   */
  hook: string;
  /**
   * Outcome-led CTA label specific to this advisor (overrides default
   * "Try Briaz →" generic label).
   */
  ctaLabel: string;
}

/**
 * Top 6 love & relationship advisors on Keen, curated 2026-05.
 * Mix of long-tenured high-volume advisors and newer specialists at
 * varied price points to give visitors a real choice spectrum.
 */
export const KEEN_ADVISORS: KeenAdvisor[] = [
  {
    name: 'Lollie',
    tagline: 'Truth-teller for love · 25 years on Keen',
    rating: 4.9,
    reviewCount: 20000,
    pricePerMinUsd: 6.99,
    totalReadings: 71237,
    memberSince: 2001,
    photoSrc: null,
    specialties: ['Love', 'Reconciliation', 'Truth reading'],
    introOffer: true,
    hook: 'Specializes in reading partners who have gone silent. Tells you what they\'re not saying.',
    ctaLabel: 'Ask Lollie about your situation → $1',
  },
  {
    name: 'Gina Marie',
    tagline: 'Detailed, accurate love clarity',
    rating: 4.78,
    reviewCount: 13000,
    pricePerMinUsd: 6.99,
    totalReadings: 79688,
    memberSince: 2005,
    photoSrc: null,
    specialties: ['Love', 'Future predictions', 'Empath'],
    introOffer: true,
    hook: 'Empath who reads emotional state — useful when you want to know what they\'re actually feeling.',
    ctaLabel: 'Read their feelings → $1',
  },
  {
    name: 'Ms Angel',
    tagline: 'Five generations of intuitive wisdom',
    rating: 4.79,
    reviewCount: 4865,
    pricePerMinUsd: 3.0,
    totalReadings: 23173,
    memberSince: 2015,
    photoSrc: null,
    specialties: ['Love', 'Spiritual guidance'],
    introOffer: true,
    hook: 'Honest spiritual guidance when you\'re trying to decide whether to stay or leave.',
    ctaLabel: 'Get clarity → $1',
  },
  {
    name: 'Heeratheintuitive',
    tagline: 'Intuitive truth-teller · 11+ years',
    rating: 4.83,
    reviewCount: 2035,
    pricePerMinUsd: 7.99,
    totalReadings: 26842,
    memberSince: 2013,
    photoSrc: null,
    specialties: ['Love', 'Clairvoyant', 'Twin flame'],
    introOffer: true,
    hook: 'Clairvoyant who reads twin-flame connections and karmic relationship patterns.',
    ctaLabel: 'Ask about your connection → $1',
  },
  {
    name: 'Briaz',
    tagline: 'Honest answers · Accurate love predictions',
    rating: 4.85,
    reviewCount: 439,
    pricePerMinUsd: 2.99,
    totalReadings: 3564,
    memberSince: 2025,
    photoSrc: '/images/keen/advisor-profile.png',
    specialties: ['Love', 'Truth reading'],
    introOffer: true,
    hook: 'Reads truth without softening it. For people who want a direct answer, not gentle hope.',
    ctaLabel: 'Get the honest answer → $1',
  },
  {
    name: 'Mysticseer',
    tagline: 'Ordained metaphysical minister',
    rating: 4.69,
    reviewCount: 1636,
    pricePerMinUsd: 2.99,
    totalReadings: 8446,
    memberSince: 2012,
    photoSrc: null,
    specialties: ['Love', 'Fourth-generation psychic'],
    introOffer: true,
    hook: 'Fourth-generation psychic. Reads relationships with a focus on long-term outcome.',
    ctaLabel: 'See where this is going → $1',
  },
];

/**
 * Pick N advisors deterministically (no randomization) for SSR-stable
 * rendering. Use the deterministic order so cards don't flicker between
 * server and client. Visitors who reload still see the same set.
 */
export function pickAdvisors(n: number = 6): KeenAdvisor[] {
  return KEEN_ADVISORS.slice(0, Math.min(n, KEEN_ADVISORS.length));
}

/**
 * Format the rating count for display. "13,000" -> "13K" style.
 */
export function formatReviewCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10000) return `${(n / 1000).toFixed(1)}K`;
  return `${Math.round(n / 1000)}K`;
}

/**
 * Compute initials for the avatar fallback (when no photo is available).
 * "Gina Marie" -> "GM". "Lollie" -> "L".
 */
export function getInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
