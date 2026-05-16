// Voyant data types and utilities for affiliate integration

export interface Voyant {
  ID: string;
  VOYANT: string;
  PC: number;
  STAR: string;
  TOP: string;
  SEXE: string; // 1 = homme, 2 = femme
  CHAT: string;
  T_CHAT: string;
  TEL: string;
  T_TEL: string;
  AUDIO: string;
  T_AUDIO: string;
  MAIL: string;
  MAIL_S: string;
  MAIL_C: string;
  EVAL: string;
  CONSULT: string;
  ETAT: string; // 0 = offline, 1 = online
  LASTEVAL: string;
}

export interface VoyantMatchingCriteria {
  specialties?: string[];
  minRating?: number;
  availability?: ('chat' | 'phone' | 'email')[];
  maxPrice?: number;
  gender?: '1' | '2';
}

// Semantic matching: Associate voyants with specific page topics
export const topicToSpecialtyMapping: Record<string, VoyantMatchingCriteria> = {
  reconquete: {
    specialties: ['reconquête amoureuse', 'retour de l\'ex', 'seconde chance'],
    minRating: 4.5,
  },
  rupture: {
    specialties: ['rupture', 'deuil amoureux', 'guérison'],
    minRating: 4.5,
  },
  'nouvelle-rencontre': {
    specialties: ['nouvelle rencontre', 'âme sœur', 'prédiction rencontre'],
    minRating: 4.5,
  },
  sentiments: {
    specialties: ['sentiments', 'lecture émotionnelle', 'avenir amoureux'],
    minRating: 4.5,
  },
  'crise-couple': {
    specialties: ['crise de couple', 'communication', 'jalousie', 'infidélité'],
    minRating: 4.5,
  },
  'methodes-voyance': {
    specialties: ['tarot', 'oracle', 'astrologie', 'voyance amoureuse'],
    minRating: 4.5,
  },
  'voyance-gratuite': {
    specialties: ['voyance gratuite', 'tarot gratuit', 'oracle gratuit', 'voyance amoureuse'],
    minRating: 4.5,
  },
};

// Filter voyants based on criteria
export function filterVoyants(
  voyants: Voyant[],
  criteria: VoyantMatchingCriteria
): Voyant[] {
  return voyants.filter((v) => {
    // Rating filter
    if (criteria.minRating && parseFloat(v.STAR) < criteria.minRating) {
      return false;
    }

    // Availability filter
    if (criteria.availability) {
      const hasRequiredAvailability = criteria.availability.some((service) => {
        if (service === 'chat' && v.CHAT === '1') return true;
        if (service === 'phone' && v.TEL === '1') return true;
        if (service === 'email' && v.MAIL === '1') return true;
        return false;
      });
      if (!hasRequiredAvailability) return false;
    }

    // Price filter (for chat)
    if (criteria.maxPrice && parseFloat(v.T_CHAT) > criteria.maxPrice) {
      return false;
    }

    // Gender filter
    if (criteria.gender && v.SEXE !== criteria.gender) {
      return false;
    }

    return true;
  });
}

// Get top voyants by rating and consultations
export function getTopVoyants(voyants: Voyant[], limit: number = 3): Voyant[] {
  return [...voyants]
    .sort((a, b) => {
      // Primary sort by rating
      const ratingDiff = parseFloat(b.STAR) - parseFloat(a.STAR);
      if (ratingDiff !== 0) return ratingDiff;

      // Secondary sort by number of consultations
      return parseInt(b.CONSULT) - parseInt(a.CONSULT);
    })
    .slice(0, limit);
}

// Get online voyants
export function getOnlineVoyants(voyants: Voyant[]): Voyant[] {
  return voyants.filter((v) => v.ETAT === '1');
}

// Get voyants for specific topic
export function getVoyantsForTopic(
  voyants: Voyant[],
  topic: keyof typeof topicToSpecialtyMapping,
  limit: number = 3
): Voyant[] {
  const criteria = topicToSpecialtyMapping[topic];
  if (!criteria) return getTopVoyants(voyants, limit);

  const filtered = filterVoyants(voyants, criteria);
  return getTopVoyants(filtered, limit);
}

// Format price for display
export function formatPrice(price: string): string {
  return `${parseFloat(price).toFixed(2)}€`;
}

// Get availability badge
export function getAvailabilityServices(voyant: Voyant): string[] {
  const services: string[] = [];
  if (voyant.CHAT === '1') services.push('💬 Chat');
  if (voyant.TEL === '1') services.push('📞 Téléphone');
  if (voyant.MAIL === '1') services.push('📧 Email');
  return services;
}

/**
 * Optional click attribution params, threaded through the interstitial so
 * Discord pings + Vercel logs can correlate a click-out with the Google Ads
 * click that drove the visitor.
 */
export interface AffiliateAttribution {
  gclid?: string | null;
  gbraid?: string | null;
  wbraid?: string | null;
}

/**
 * Generate the click-out URL for a voyant.
 *
 * Returns a path to our own /api/go/voyant interstitial — NOT a direct
 * MonSiteVoyance URL — so every click gets a Discord ping, digest counter,
 * and structured Vercel log entry before the 302 redirect.
 *
 * Backward-compatible: existing 2-arg callers keep working. Callers that
 * have access to click attribution (e.g. /consulter reading gclid from
 * sessionStorage) should pass it as the third arg so it flows through to
 * the server log.
 */
export function getAffiliateLink(
  voyantId: string,
  source: string = 'voyantlove',
  attribution?: AffiliateAttribution
): string {
  const params = new URLSearchParams({
    id: voyantId,
    source,
  });
  if (attribution?.gclid) params.set('gclid', attribution.gclid);
  if (attribution?.gbraid) params.set('gbraid', attribution.gbraid);
  if (attribution?.wbraid) params.set('wbraid', attribution.wbraid);
  return `/api/go/voyant?${params.toString()}`;
}

// Get gender label
export function getGenderLabel(sexe: string): string {
  return sexe === '1' ? 'Voyant' : 'Voyante';
}

// Calculate trust score based on evaluations and consultations
export function getTrustScore(voyant: Voyant): number {
  const evalCount = parseInt(voyant.EVAL);
  const consultCount = parseInt(voyant.CONSULT);
  const rating = parseFloat(voyant.STAR);

  // Trust score formula: (rating * 20) + log(evals) + log(consults)
  const score = (rating * 20) +
                Math.log10(Math.max(evalCount, 1)) * 10 +
                Math.log10(Math.max(consultCount, 1)) * 5;

  return Math.min(100, Math.round(score));
}
