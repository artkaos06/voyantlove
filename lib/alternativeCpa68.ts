// Centralized, single-source-of-truth config for the alternative CPA68 paid
// lander (/lp/consultation-10-minutes-offertes). Business terms confirmed by
// SAIICO on 2026-07-29: the public phone number and the commercial offer
// text below are the authoritative values, do not read them from env vars
// and do not gate rendering on any missing external input.
export const ALTERNATIVE_PROVIDER_ID = 'alternative_cpa_68' as const;
export const ALTERNATIVE_LANDING_VARIANT = 'consultation_10_minutes_offertes_v1' as const;

/** Return a dialable E.164 French number, or null. No fallback number exists. */
export function normalizeTelNumber(raw: string | undefined): string | null {
  if (!raw) return null;
  let compact = raw.trim().replace(/\(0\)/g, '').replace(/[\s.()-]/g, '');
  if (/^0\d{9}$/.test(compact)) compact = `+33${compact.slice(1)}`;
  if (/^0033\d{9}$/.test(compact)) compact = `+${compact.slice(2)}`;
  return /^\+33\d{9}$/.test(compact) ? compact : null;
}

const CONFIRMED_PHONE = '01 75 75 45 82';
const phone = normalizeTelNumber(CONFIRMED_PHONE);
if (!phone) {
  throw new Error('alternativeCpa68: confirmed phone number failed to normalize');
}

export interface AlternativeOfferConfig {
  providerId: typeof ALTERNATIVE_PROVIDER_ID;
  /** Displayed exactly as confirmed by the provider. */
  displayPhone: string;
  /** E.164, for the tel: href. */
  phone: string;
  telHref: string;
  /** Short disclosure shown near each CTA. */
  priceDisclosure: string;
}

export const ALTERNATIVE_OFFER_CONFIG: AlternativeOfferConfig = {
  providerId: ALTERNATIVE_PROVIDER_ID,
  displayPhone: CONFIRMED_PHONE,
  phone,
  telHref: `tel:${phone}`,
  priceDisclosure: 'Puis 3€/min. Paiement par CB ou PayPal.',
};

export function getAlternativeOfferConfig(): AlternativeOfferConfig {
  return ALTERNATIVE_OFFER_CONFIG;
}
