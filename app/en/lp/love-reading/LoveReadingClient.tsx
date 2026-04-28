'use client';

import { useEffect, useState } from 'react';

/**
 * Captures the Google Ads gclid on landing and forwards it through the
 * server-side click-out handler. SessionStorage persists it across navigations
 * within the same tab so the user can browse before clicking through.
 */
export default function LoveReadingClient() {
  const [gclid, setGclid] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlGclid = params.get('gclid');
      if (urlGclid) {
        sessionStorage.setItem('gclid', urlGclid);
        setGclid(urlGclid);
      } else {
        const stored = sessionStorage.getItem('gclid');
        if (stored) setGclid(stored);
      }
    } catch {
      // sessionStorage unavailable (privacy mode / SSR) — fine, click-out
      // still works without gclid; we just lose Google Ads attribution for
      // that session.
    }
  }, []);

  function buildHref(offer: 'keen' | 'kasamba'): string {
    return gclid
      ? `/api/go/${offer}?gclid=${encodeURIComponent(gclid)}`
      : `/api/go/${offer}`;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="inline-block bg-yellow-100 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Staging — internal testing only
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Get answers about your love life from a trusted psychic.
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        Connect with a top-rated love &amp; relationship advisor in minutes.
        First reading is on us.
      </p>

      <div className="space-y-3 max-w-md mx-auto">
        <a
          href={buildHref('keen')}
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          rel="nofollow noopener"
        >
          Start my reading on Keen →
        </a>
        <a
          href={buildHref('kasamba')}
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          rel="nofollow noopener"
        >
          Start my reading on Kasamba →
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-10">
        18+ only. For entertainment purposes. Service provided by third-party
        platforms (Keen, Kasamba). Disclosure: paid endorsement.
      </p>

      {gclid && (
        <p className="text-[10px] text-gray-400 mt-4">
          gclid captured: {gclid.slice(0, 12)}…
        </p>
      )}
    </div>
  );
}
