// Affiliate offer configuration + helpers — server-only.
// Never import from a 'use client' module.
//
// Network: BargesTech (TUNE/HasOffers) — bargestech.go2cloud.org
// Offers: Keen, Kasamba
//
// The base tracking URL for each offer is copied verbatim from the BargesTech
// backoffice (per offer, per affiliate ID) and stored in env.
//
// At click time we stamp Google's attribution identifiers into TUNE sub-IDs
// so they round-trip through TUNE and come back via the postback:
//
//   aff_sub2 = gclid   (standard web clicks — desktop, Android, most iOS)
//   aff_sub3 = gbraid  (iOS users with restricted ad tracking — ATT denied)
//   aff_sub4 = wbraid  (web clicks where gclid couldn't be set due to privacy)
//
// Exactly one of these three is set on any given click. The OCI uploader
// (lib/googleAds.ts) accepts whichever is present and routes the conversion
// to Google Ads using the matching parameter. Without gbraid/wbraid support,
// roughly 10-20% of US iOS traffic would be unattributed.
//
// TUNE postback macro convention (curly braces) is documented at
//   https://help.tune.com/hasoffers/implementing-server-postback-tracking/
// We rely on: {transaction_id}, {event_id}, {offer_id}, {goal_id}, {payout},
// {aff_sub2}, {aff_sub3}, {aff_sub4}, {country_code}, {status}, {datetime}.

export type OfferKey = 'keen' | 'kasamba';

/**
 * Google Ads attribution identifiers. At most one is set on any given
 * click — Google chooses which based on the user's privacy state at click time.
 */
export interface AttributionIds {
  /** Standard Google click ID. Most common. */
  gclid?: string | null;
  /** iOS / Apple Tracking Transparency-restricted equivalent. */
  gbraid?: string | null;
  /** Web equivalent when gclid couldn't be set due to browser privacy. */
  wbraid?: string | null;
}

interface OfferConfig {
  key: OfferKey;
  name: string;
  clickUrlEnv: string;
}

const OFFERS: Record<OfferKey, OfferConfig> = {
  keen: { key: 'keen', name: 'Keen', clickUrlEnv: 'KEEN_CLICK_URL' },
  kasamba: { key: 'kasamba', name: 'Kasamba', clickUrlEnv: 'KASAMBA_CLICK_URL' },
};

export function isValidOfferKey(key: string): key is OfferKey {
  return key === 'keen' || key === 'kasamba';
}

export function getOfferName(offer: OfferKey): string {
  return OFFERS[offer]?.name ?? offer;
}

/**
 * Build the BargesTech/TUNE tracking URL for the given offer, stamping
 * Google attribution identifiers into TUNE sub-IDs for round-trip
 * attribution. Returns null if the offer is unknown or its base URL is
 * not configured.
 *
 * Sub-ID mapping:
 *   aff_sub2 = gclid   aff_sub3 = gbraid   aff_sub4 = wbraid
 *
 * aff_sub (sub1) is intentionally left untouched in case the network
 * later wants to use it for its own tagging.
 */
export function buildClickUrl(
  offer: OfferKey,
  attribution?: AttributionIds | null
): string | null {
  const config = OFFERS[offer];
  if (!config) return null;
  const base = process.env[config.clickUrlEnv];
  if (!base) return null;

  try {
    const url = new URL(base);
    if (attribution?.gclid) url.searchParams.set('aff_sub2', attribution.gclid);
    if (attribution?.gbraid) url.searchParams.set('aff_sub3', attribution.gbraid);
    if (attribution?.wbraid) url.searchParams.set('aff_sub4', attribution.wbraid);
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Validates the inbound postback shared secret against env. Constant-time
 * compare to avoid timing oracles.
 */
export function validatePostbackSecret(
  secret: string | null | undefined
): boolean {
  const expected = process.env.BARGESTECH_POSTBACK_SECRET;
  if (!expected || !secret) return false;
  if (secret.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < secret.length; i++) {
    diff |= secret.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export interface PostbackEvent {
  transaction_id: string;
  event_id?: string;
  offer_id?: string;
  goal_id?: string;
  goal_name?: string;
  payout?: string;
  revenue?: string;
  status?: string;
  /** Google click ID (standard web). Arrives as aff_sub2. */
  gclid?: string;
  /** iOS restricted-tracking equivalent of gclid. Arrives as aff_sub3. */
  gbraid?: string;
  /** Web restricted-tracking equivalent of gclid. Arrives as aff_sub4. */
  wbraid?: string;
  aff_sub?: string;
  country_code?: string;
  datetime?: string;
  raw: Record<string, string>;
}

/**
 * Extract postback fields from a URL search params object. Tolerant of
 * missing fields — only transaction_id is strictly required.
 *
 * We accept both short keys (txid, event, gclid, etc.) and TUNE's native
 * macro names (transaction_id, event_id, aff_sub2) so the postback URL
 * configured in BargesTech can use whichever shape is convenient.
 */
export function parsePostback(params: URLSearchParams): PostbackEvent | null {
  const transaction_id =
    params.get('txid') || params.get('transaction_id');
  if (!transaction_id) return null;

  const raw: Record<string, string> = {};
  params.forEach((v, k) => {
    if (k !== 'secret') raw[k] = v;
  });

  return {
    transaction_id,
    event_id: params.get('event') || params.get('event_id') || undefined,
    offer_id: params.get('offer') || params.get('offer_id') || undefined,
    goal_id: params.get('goal') || params.get('goal_id') || undefined,
    goal_name: params.get('goal_name') || undefined,
    payout: params.get('payout') || undefined,
    revenue: params.get('revenue') || undefined,
    status: params.get('status') || undefined,
    gclid: params.get('gclid') || params.get('aff_sub2') || undefined,
    gbraid: params.get('gbraid') || params.get('aff_sub3') || undefined,
    wbraid: params.get('wbraid') || params.get('aff_sub4') || undefined,
    aff_sub: params.get('aff_sub') || undefined,
    country_code:
      params.get('country') || params.get('country_code') || undefined,
    datetime: params.get('dt') || params.get('datetime') || undefined,
    raw,
  };
}
