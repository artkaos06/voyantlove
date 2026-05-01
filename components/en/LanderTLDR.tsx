// Above-the-fold TL;DR card for topic pages.
//
// Solves the "wall of text on a white page" problem on cold traffic. Modern
// readers scan before they read; this card gives scanners enough value in
// the first 5 seconds to either start reading or click straight through.
//
// Renders:
//   - Reading-time indicator ("9 min read")
//   - 3-bullet summary of the article's answer
//   - Inline CTA button to the recommended service review
//
// Use at the top of each Tier 1 topic page (will-he-come-back, etc.).

import Link from 'next/link';

interface LanderTLDRProps {
  /** Estimated reading time, e.g. "9 min read". */
  readingTime: string;
  /** Optional one-line subtitle below the heading. */
  subtitle?: string;
  /** 3 bullets summarizing the article's answer. */
  summary: string[];
  /** Override the CTA destination (defaults to Keen review). */
  ctaHref?: string;
  /** Override the CTA label. */
  ctaLabel?: string;
}

export default function LanderTLDR({
  readingTime,
  subtitle = 'Honest editorial',
  summary,
  ctaHref = '/love-psychic-services/keen-review',
  ctaLabel = 'See our Keen review →',
}: LanderTLDRProps) {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 md:p-7 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wide">
        <span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">
          {readingTime}
        </span>
        <span className="text-gray-500">{subtitle}</span>
      </div>

      <p className="text-sm font-bold text-gray-900 mb-3">
        The short answer:
      </p>

      <ul className="space-y-2.5 mb-5">
        {summary.map((point, i) => (
          <li
            key={i}
            className="flex gap-3 text-[15px] leading-relaxed text-gray-800"
          >
            <span
              aria-hidden="true"
              className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-purple-500"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-purple-100">
        <p className="text-xs text-gray-600 mb-2.5">
          Want personalized clarity from a real love psychic?
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </aside>
  );
}
