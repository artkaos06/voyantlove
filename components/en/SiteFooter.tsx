// Footer for the EN site. Holds the inline disclosure, secondary nav,
// and the standard for-entertainment-purposes legal language required for
// any psychic-services site.

import Link from 'next/link';
import AffiliateDisclosure from './AffiliateDisclosure';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-extrabold text-purple-700 mb-3">
              Love<span className="text-pink-500">Psychic</span>Guide
            </p>
            <p className="text-sm text-gray-600">
              Independent reviews and editorial guides covering love, relationship,
              and psychic-reading services. Reader-supported. Honest, no-fluff
              recommendations.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 mb-3">Reviews</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/love-psychic-services"
                  className="text-gray-600 hover:text-purple-700"
                >
                  All services
                </Link>
              </li>
              <li>
                <Link
                  href="/love-psychic-services/keen-review"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Keen review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900 mb-3">Topics</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/will-he-come-back"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Will he come back?
                </Link>
              </li>
              <li>
                <Link
                  href="/is-my-ex-thinking-of-me"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Is my ex thinking of me?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-4">
          <AffiliateDisclosure variant="inline" />
          <p className="text-xs text-gray-500">
            <strong>For entertainment purposes only.</strong> Psychic, tarot,
            and related advisory services are not a substitute for professional
            medical, financial, legal, or mental-health advice. If you are in a
            crisis, please contact a licensed practitioner or call your local
            emergency line. Must be 18 or older to use psychic-reading
            services.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} LovePsychicGuide. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
