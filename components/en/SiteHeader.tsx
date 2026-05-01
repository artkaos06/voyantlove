// Top navigation for the EN site (lovepsychicguide.com).
//
// Intentionally minimal — affiliate review sites convert better with low
// navigation distraction. The only nav links are to the services hub and a
// few high-traffic topic pages, plus a placeholder home link.

import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-extrabold text-xl text-purple-700 tracking-tight"
        >
          Love<span className="text-pink-500">Psychic</span>Guide
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700"
        >
          <Link
            href="/love-psychic-services"
            className="hover:text-purple-700 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/love-psychic-services/keen-review"
            className="hover:text-purple-700 transition-colors"
          >
            Keen review
          </Link>
          <Link
            href="/will-he-come-back"
            className="hover:text-purple-700 transition-colors"
          >
            Will he come back?
          </Link>
          <Link
            href="/is-my-ex-thinking-of-me"
            className="hover:text-purple-700 transition-colors"
          >
            Is my ex thinking of me?
          </Link>
        </nav>
      </div>
    </header>
  );
}
