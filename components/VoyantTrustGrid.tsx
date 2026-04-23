import type { Voyant } from '@/lib/voyants';
import { getOnlineVoyants, getTopVoyants } from '@/lib/voyants';
import voyantsData from '@/data/voyants.json';

interface VoyantTrustGridProps {
  limit?: number;
  title?: string;
  subtitle?: string;
}

/**
 * Display-only grid of voyant portraits for trust signal.
 * NOT clickable — pure social proof. Uses real photos from
 * monsitevoyance (https://www.monsitevoyance.com/vignaff/{ID}.jpg).
 *
 * Legal framing: presents voyants as a partner network, not as a promise
 * that any specific voyant will answer the phone. The phone CTA above
 * routes to the Goracash standard, where voyant attribution depends on
 * availability — hence the small disclaimer at the bottom.
 */
export default function VoyantTrustGrid({
  limit = 6,
  title = 'Nos voyants partenaires',
  subtitle = 'Un réseau de voyants vérifiés, reconnus pour leur expertise en voyance amoureuse.',
}: VoyantTrustGridProps) {
  const allVoyants = voyantsData as Voyant[];
  const online = getOnlineVoyants(allVoyants);
  // Prefer online voyants. Fall back to full list if not enough are online.
  const sourceList = online.length >= limit ? online : allVoyants;
  const display = getTopVoyants(sourceList, limit);

  if (display.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {display.map((v) => {
            const isOnline = v.ETAT === '1';
            const stars = parseFloat(v.STAR);
            const starCount = Math.max(0, Math.min(5, Math.round(stars)));

            return (
              <div
                key={v.ID}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-indigo-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.monsitevoyance.com/vignaff/${v.ID}.jpg`}
                    alt={`Portrait de ${v.VOYANT}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isOnline && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" aria-hidden></span>
                      En ligne
                    </span>
                  )}
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-bold text-sm text-gray-900 capitalize truncate">
                    {v.VOYANT}
                  </h3>
                  <div className="text-xs mt-1 flex items-center justify-center gap-1">
                    <span
                      className="text-yellow-500 leading-none"
                      aria-label={`${stars.toFixed(1)} étoiles sur 5`}
                    >
                      {'★'.repeat(starCount)}
                      <span className="text-gray-300">{'★'.repeat(5 - starCount)}</span>
                    </span>
                    <span className="text-gray-500">({v.EVAL})</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {v.CONSULT} consultations
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
          Profils de notre réseau de voyants partenaires. La disponibilité et
          l&apos;attribution du voyant lors de l&apos;appel dépendent de notre standard.
        </p>
      </div>
    </section>
  );
}
