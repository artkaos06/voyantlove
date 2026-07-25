// Voyant portrait strip for the MGID angle landers.
//
// Why: the landers shipped with zero images. The repo's own competitor
// research (ADS-CONSULTING-PLAN.md §3.1) found the recurring pattern across
// Wengo/Cosmospace/Spiriteo is "photos, name, specialty, star rating, live
// availability dot — the product IS the people". Faces are the trust signal
// in this vertical and we had none.
//
// Photos come from monsitevoyance (https://www.monsitevoyance.com/vignaff/
// {ID}.jpg), the same source as components/VoyantTrustGrid.tsx. Verified
// 2026-07-25: all 8 IDs return 200 at 4.6-8KB, which is cheap enough for the
// slow mobile connections this traffic arrives on.
//
// IMPORTANT legal framing, inherited from VoyantTrustGrid: these portraits
// are a PARTNER NETWORK trust signal, never a promise that a specific voyant
// answers the phone. The landers now route to Télémaque while these portraits
// come from monsitevoyance, so naming a person as "your" reader would be a
// false claim — hence the collective wording and the disclaimer below.
//
// Zero-JS by design, like its host landers: a plain <img> (not next/image,
// which would pull in a client runtime and require remotePatterns config).
// width/height are set to reserve space so the strip cannot shift the CTA
// while portraits load — layout shift under a phone button costs taps.

import voyantsData from '@/data/voyants.json';

interface VoyantRow {
  ID: string;
  VOYANT: string;
  STAR: string;
  ETAT: string;
  CONSULT: number | string;
}

const SIZE = 62;

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function VoyantStrip({
  limit = 4,
  label = 'Nos voyants partenaires',
}: {
  limit?: number;
  label?: string;
}) {
  const all = voyantsData as VoyantRow[];

  // Online first (ETAT === '1'), then by consultation count — the strongest
  // honest social-proof signal available in the data.
  const ranked = [...all].sort((a, b) => {
    const on = (b.ETAT === '1' ? 1 : 0) - (a.ETAT === '1' ? 1 : 0);
    if (on !== 0) return on;
    return Number(b.CONSULT || 0) - Number(a.CONSULT || 0);
  });

  const display = ranked.slice(0, limit);
  if (display.length === 0) return null;

  return (
    <div style={{ margin: '20px 0' }}>
      <p
        style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.65)',
          textAlign: 'center',
          marginBottom: '10px',
          fontWeight: 600,
          letterSpacing: '.3px',
        }}
      >
        {label}
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {display.map((v) => {
          const online = v.ETAT === '1';
          // STAR is occasionally out of range in the feed (e.g. "5.5"), so
          // clamp rather than render six stars.
          const stars = Math.max(0, Math.min(5, Math.round(parseFloat(v.STAR) || 0)));
          return (
            <div key={v.ID} style={{ width: SIZE, textAlign: 'center' }}>
              <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://www.monsitevoyance.com/vignaff/${v.ID}.jpg`}
                  alt={`Portrait du voyant ${cap(v.VOYANT)}`}
                  width={SIZE}
                  height={SIZE}
                  // NOT lazy. On /lp/il-elle-vous-aime this strip lives inside
                  // a display:none step that CSS reveals on :checked — and a
                  // lazy image in a display:none parent never enters the
                  // viewport, so the browser never fetches it. Verified: the
                  // portraits stayed complete:false after the reveal. Eager
                  // costs ~24KB total (4 × ~6KB) and guarantees faces are
                  // present at the exact moment the CTA appears.
                  loading="eager"
                  decoding="async"
                  style={{
                    width: SIZE,
                    height: SIZE,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(244,217,138,0.55)',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'block',
                  }}
                />
                {online && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      right: 1,
                      bottom: 1,
                      width: 13,
                      height: 13,
                      borderRadius: '50%',
                      background: '#4ade80',
                      border: '2px solid #2c1a5e',
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  marginTop: '5px',
                  lineHeight: 1.2,
                }}
              >
                {cap(v.VOYANT)}
              </div>
              <div style={{ fontSize: '10px', color: '#f4d98a', lineHeight: 1.2 }}>
                {'★'.repeat(stars)}
              </div>
            </div>
          );
        })}
      </div>

      <p
        style={{
          fontSize: '10px',
          color: 'rgba(255,255,255,0.45)',
          textAlign: 'center',
          marginTop: '10px',
          lineHeight: 1.4,
        }}
      >
        Réseau de voyants partenaires. Le voyant qui vous répond dépend des
        disponibilités du moment.
      </p>
    </div>
  );
}
