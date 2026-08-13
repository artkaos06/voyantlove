// MGID conversion feedback, relays a phone-CTA tap back to MGID so its
// algorithm can optimise toward people who actually tap, instead of toward
// cheap clicks. This was flagged as deferred work in ADS-CONSULTING-PLAN.md
// ("relaying conversions back to MGID/Taboola S2S so the native algorithm
// self-optimises"); this is the plumbing for it.
//
// FIRED SERVER-SIDE, on purpose. The obvious client-side version, //   var img = new Image(); img.src = 'https://.../track?c=' + clickId;
//, is unreliable here: it runs at the instant the browser navigates to the
// tel: URL, and in-flight subresource requests are cancelled on navigation.
// That is the same reason the tel-click beacon uses navigator.sendBeacon.
// By the time this runs we already hold click_id server-side, so there is no
// reason to race the dialer.
//
// URL IS NOT HARDCODED, and that is deliberate. A plausible-looking endpoint
// (https://www.mgid.com/conversion/track?c=…) was proposed, but verified
// 2026-07-25 to be a catch-all: it returns MGID's 225,948-byte marketing
// homepage, byte-identical to a deliberately invalid path. It answers 200 to
// anything, so a wrong URL fails SILENTLY, the worst failure mode, because
// the campaign looks instrumented while MGID receives nothing.
//
// Get the real postback/pixel URL from the MGID dashboard (Conversions
// section) and set it as MGID_CONVERSION_URL, using {click_id} where MGID's
// macro goes, e.g.
//   MGID_CONVERSION_URL="https://a.mgid.com/postback?click_id={click_id}&goal=call"
// Supported placeholders: {click_id} {source} {creative_id} {lander}
// Unset ⇒ no-op, so nothing fires until a real URL is configured.

const TIMEOUT_MS = 2500;

export interface MgidConversionInput {
  clickId: string;
  source?: string;
  creativeId?: string;
  lander?: string;
}

/**
 * Best-effort: never throws, never blocks the caller for long. Returns what
 * happened so the caller can log it, silence is the failure mode we are
 * specifically guarding against here.
 */
export async function sendMgidConversion(
  i: MgidConversionInput
): Promise<'sent' | 'failed' | 'skipped_no_url' | 'skipped_no_click_id'> {
  const template = process.env.MGID_CONVERSION_URL;
  if (!template) return 'skipped_no_url';
  // No click_id means the visitor did not arrive through an MGID placement
  // (direct, ad preview, organic), there is nothing to attribute.
  if (!i.clickId) return 'skipped_no_click_id';

  const url = template
    .replace(/\{click_id\}/g, encodeURIComponent(i.clickId))
    .replace(/\{source\}/g, encodeURIComponent(i.source || ''))
    .replace(/\{creative_id\}/g, encodeURIComponent(i.creativeId || ''))
    .replace(/\{lander\}/g, encodeURIComponent(i.lander || ''));

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { method: 'GET', signal: ctrl.signal, cache: 'no-store' });
    if (!res.ok) {
      console.error('[mgid] conversion rejected', res.status, url.slice(0, 160));
      return 'failed';
    }
    console.log('[mgid] conversion sent', { clickId: i.clickId, lander: i.lander });
    return 'sent';
  } catch (e) {
    console.error('[mgid] conversion threw', (e as Error)?.name || e);
    return 'failed';
  } finally {
    clearTimeout(timer);
  }
}
