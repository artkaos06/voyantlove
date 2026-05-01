import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';

// Services hub. Acts as the comparison page that reviews link OUT to the
// detailed Keen / Kasamba reviews. Currently single-service depth, but
// designed to scale as more reviews are added.

export const metadata: Metadata = {
  title: 'Love psychic services we recommend in 2026',
  description:
    'Independent reviews of online love psychic reading services. Our shortlist of platforms worth your time, with honest pros, cons, and pricing.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com/love-psychic-services',
  },
};

export default function ServicesHub() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-sm font-semibold tracking-wide uppercase text-purple-600 mb-3">
          Reviews
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Love psychic services worth your time
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We&apos;ve tested the major online psychic-reading platforms with a
          focus on love and relationship advisors. The list below reflects the
          services that hit a workable balance of advisor depth, transparent
          pricing, and reasonable safeguards for first-time users. Click into
          each review for the full breakdown.
        </p>

        <AffiliateDisclosure variant="banner" className="mb-12" />

        {/* Service card — Keen */}
        <article className="border border-gray-200 rounded-xl p-6 md:p-8 mb-8 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Keen</h2>
              <p className="text-sm text-gray-500">
                Marketplace · Founded 1999 · Owned by Ingenio
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Our rating
              </p>
              <p className="text-xl font-bold text-purple-700">4.4 / 5</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Keen has been online longer than most of its competitors —
            launched in 1999 and now part of Ingenio, which also operates
            Kasamba and Psychic Source. The platform is best understood as a
            marketplace: thousands of independent advisors set their own rates
            (commonly $4.99–$15.99 per minute for love specialists) and
            compete on rating, specialty, and reviews. New users typically
            get the first three minutes free with a chosen advisor, which is
            enough to test rapport before any meaningful charge.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Best for
              </p>
              <p className="text-sm text-gray-600">
                Specific love questions, late-night clarity, trying multiple
                advisors before committing.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Watch out for
              </p>
              <p className="text-sm text-gray-600">
                Pay-per-minute can create anxiety. Pick a fixed-budget cap
                before you start a session.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/love-psychic-services/keen-review"
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              Read the full Keen review →
            </Link>
          </div>
        </article>

        {/* Placeholder for Kasamba — coming soon */}
        <article className="border border-dashed border-gray-300 rounded-xl p-6 md:p-8 mb-8 bg-gray-50">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
            <div>
              <h2 className="text-xl font-bold text-gray-700 mb-1">Kasamba</h2>
              <p className="text-sm text-gray-500">
                Marketplace · Founded 1999 · Owned by Ingenio
              </p>
            </div>
            <span className="text-xs uppercase tracking-wide bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Review coming soon
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kasamba is Keen&apos;s sister platform under the same parent
            company. We&apos;re working on a side-by-side comparison and a
            standalone Kasamba review. Check back, or read our Keen review for
            now — many observations apply broadly to the Ingenio family of
            services.
          </p>
        </article>

        {/* Editorial note */}
        <div className="mt-12 bg-purple-50 border-l-4 border-purple-300 p-6 rounded-r-md">
          <p className="font-semibold text-purple-900 mb-2">
            How we score these
          </p>
          <p className="text-sm text-purple-900 leading-relaxed">
            Our editorial scoring weights advisor depth (30%), pricing
            transparency (25%), first-session safeguards like free trial
            minutes and refund policy (20%), website usability (15%), and
            response time / advisor availability (10%). Scores are reviewed
            quarterly. We do not adjust scores in response to commercial
            relationships.
          </p>
        </div>
      </section>
    </div>
  );
}
