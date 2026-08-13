import {
  ALTERNATIVE_LANDING_VARIANT,
  ALTERNATIVE_PROVIDER_ID,
  getAlternativeOfferConfig,
} from './alternativeCpa68';

export const ALTERNATIVE_ATTRIBUTION_STORAGE_KEY = 'vl:cpa68:attribution';
export const ALTERNATIVE_TRACKING_PAGE = '/lp/consultation-10-minutes-offertes' as const;

export type AlternativeAttribution = Partial<Record<
  | 'utm_source'
  | 'utm_medium'
  | 'utm_campaign'
  | 'utm_content'
  | 'utm_term'
  | 'source'
  | 'sid'
  | 'click_id'
  | 'creative_id',
  string
>>;

export const ALTERNATIVE_ATTRIBUTION_LIMITS: Record<keyof AlternativeAttribution, number> = {
  utm_source: 100,
  utm_medium: 100,
  utm_campaign: 150,
  utm_content: 150,
  utm_term: 150,
  source: 100,
  sid: 64,
  click_id: 200,
  creative_id: 64,
};

const ATTRIBUTION_KEYS = Object.keys(
  ALTERNATIVE_ATTRIBUTION_LIMITS,
) as (keyof AlternativeAttribution)[];

function safeValue(value: string | null, max: number): string {
  const clean = (value || '').trim();
  if (!clean || /^\{.*\}$/.test(clean)) return '';
  return clean.slice(0, max);
}

export function extractAlternativeAttribution(
  params: URLSearchParams,
): AlternativeAttribution {
  const result: AlternativeAttribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const raw = key === 'click_id'
      ? params.get('click_id') || params.get('adclid')
      : params.get(key);
    const value = safeValue(raw, ALTERNATIVE_ATTRIBUTION_LIMITS[key]);
    if (value) result[key] = value;
  }
  return result;
}

export function mergeAlternativeAttribution(
  previous: AlternativeAttribution,
  current: AlternativeAttribution,
): AlternativeAttribution {
  const merged: AlternativeAttribution = { ...previous };
  for (const key of Object.keys(current) as (keyof AlternativeAttribution)[]) {
    const value = current[key];
    if (value) merged[key] = value.slice(0, ALTERNATIVE_ATTRIBUTION_LIMITS[key]);
  }
  return merged;
}

export type AlternativeTrackingEvent = 'landing_view' | 'call_button_click';
export type AlternativeCtaPlacement = 'hero' | 'sticky_mobile' | 'final';

export interface AlternativeTrackingPayload extends AlternativeAttribution {
  event: AlternativeTrackingEvent;
  provider_id: typeof ALTERNATIVE_PROVIDER_ID;
  landing_variant: typeof ALTERNATIVE_LANDING_VARIANT;
  cta_placement?: AlternativeCtaPlacement;
  conversion_kind: 'none' | 'proxy_call_intent';
  proxy_value_eur?: 5;
  cpa_approved: false;
  revenue_eur?: never;
}

export interface AlternativeTrackingRequest extends AlternativeTrackingPayload {
  page: typeof ALTERNATIVE_TRACKING_PAGE;
  referrer?: string;
}

/**
 * MGID's existing "cta_call" conversion goal, fed through the same
 * consent-gated Sensor queue the angle landers use (app/layout.tsx's
 * phone-click-tracker, and CookieConsent.tsx's loadMgidSensor). CPA68 is
 * excluded from that sitewide listener so it never touches Télémaque's
 * shared KV/attribution/Discord, this pushes the identical goal from the
 * dedicated CPA68 tracker instead, so MGID still sees the call-intent
 * conversion.
 *
 * window._mgq is a plain queue: pushing before mgsensor.js loads is safe,
 * it drains on load, which only happens after marketing consent is granted.
 * If consent is refused the push just sits unread, no separate gate to
 * maintain here.
 */
export interface MgidSensorWindow {
  _mgq?: unknown[];
}

export function notifyMgidCtaCall(target: MgidSensorWindow): void {
  target._mgq = target._mgq || [];
  target._mgq.push(['MgSensorInvoke', 'cta_call']);
}

export interface AlternativeDiscordNotification {
  category: 'lead';
  title: string;
  description: string;
  fields: Array<{ name: string; value: string; inline?: boolean }>;
}

/**
 * Build the LovePsychic alert for real call intent only. Landing views remain
 * silent, and the message explicitly labels €5 as a proxy rather than revenue.
 */
export function buildAlternativeDiscordNotification(
  event: AlternativeTrackingRequest,
): AlternativeDiscordNotification | null {
  if (event.event !== 'call_button_click') return null;

  const offer = getAlternativeOfferConfig();
  const source = event.source || event.utm_source || ', ';
  return {
    category: 'lead',
    title: '📞 CPA68, appel lancé',
    description: `Numéro composé : **${offer.displayPhone}**\nClic téléphone valorisé **5 € proxy**, aucun CPA de 68 € n’est encore validé.`,
    fields: [
      { name: 'Provider', value: event.provider_id, inline: true },
      { name: 'Placement', value: event.cta_placement || ', ', inline: true },
      { name: 'Source', value: source, inline: true },
      ...(event.creative_id
        ? [{ name: 'Créa', value: event.creative_id, inline: true }]
        : []),
      ...(event.sid ? [{ name: 'source_id', value: event.sid, inline: true }] : []),
      ...(event.click_id ? [{ name: 'click_id', value: event.click_id }] : []),
      ...(event.utm_campaign
        ? [{ name: 'Campagne', value: event.utm_campaign }]
        : []),
      ...(event.referrer ? [{ name: 'Referrer', value: event.referrer }] : []),
    ],
  };
}

/** Front-end events can express intent only; provider-approved CPA is absent. */
export function buildAlternativeTrackingPayload(
  event: AlternativeTrackingEvent,
  attribution: AlternativeAttribution,
  ctaPlacement?: AlternativeCtaPlacement,
): AlternativeTrackingPayload {
  const isCall = event === 'call_button_click';
  return {
    ...attribution,
    event,
    provider_id: ALTERNATIVE_PROVIDER_ID,
    landing_variant: ALTERNATIVE_LANDING_VARIANT,
    ...(ctaPlacement ? { cta_placement: ctaPlacement } : {}),
    conversion_kind: isCall ? 'proxy_call_intent' : 'none',
    ...(isCall ? { proxy_value_eur: 5 as const } : {}),
    cpa_approved: false,
  };
}

const BASE_KEYS = new Set([
  'event',
  'provider_id',
  'landing_variant',
  'cta_placement',
  'conversion_kind',
  'proxy_value_eur',
  'cpa_approved',
  'page',
  'referrer',
  ...ATTRIBUTION_KEYS,
]);
const PLACEMENTS = new Set<AlternativeCtaPlacement>(['hero', 'sticky_mobile', 'final']);

export type AlternativeTrackingParseResult =
  | { ok: true; value: AlternativeTrackingRequest }
  | { ok: false; error: 'invalid_schema' | 'invalid_event' | 'invalid_proxy_semantics' };

/** Strict public-endpoint parser: unknown or unbounded fields never reach logs. */
export function parseAlternativeTrackingRequest(
  input: unknown,
): AlternativeTrackingParseResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, error: 'invalid_schema' };
  }

  const body = input as Record<string, unknown>;
  if (Object.keys(body).some((key) => !BASE_KEYS.has(key))) {
    return { ok: false, error: 'invalid_schema' };
  }

  if (
    body.provider_id !== ALTERNATIVE_PROVIDER_ID ||
    body.landing_variant !== ALTERNATIVE_LANDING_VARIANT ||
    body.cpa_approved !== false ||
    (body.page !== ALTERNATIVE_TRACKING_PAGE && body.page !== `${ALTERNATIVE_TRACKING_PAGE}/`) ||
    (body.referrer !== undefined && (typeof body.referrer !== 'string' || body.referrer.length > 200))
  ) {
    return { ok: false, error: 'invalid_schema' };
  }

  const attribution: AlternativeAttribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const raw = body[key];
    if (raw === undefined) continue;
    if (typeof raw !== 'string' || raw.length > ALTERNATIVE_ATTRIBUTION_LIMITS[key]) {
      return { ok: false, error: 'invalid_schema' };
    }
    const clean = safeValue(raw, ALTERNATIVE_ATTRIBUTION_LIMITS[key]);
    if (clean) attribution[key] = clean;
  }

  const common = {
    ...attribution,
    provider_id: ALTERNATIVE_PROVIDER_ID,
    landing_variant: ALTERNATIVE_LANDING_VARIANT,
    page: ALTERNATIVE_TRACKING_PAGE,
    ...(body.referrer ? { referrer: body.referrer.trim().slice(0, 200) } : {}),
    cpa_approved: false as const,
  };

  if (body.event === 'landing_view') {
    if (
      body.conversion_kind !== 'none' ||
      body.cta_placement !== undefined ||
      body.proxy_value_eur !== undefined
    ) {
      return { ok: false, error: 'invalid_event' };
    }
    return {
      ok: true,
      value: { ...common, event: 'landing_view', conversion_kind: 'none' },
    };
  }

  if (body.event === 'call_button_click') {
    if (
      body.conversion_kind !== 'proxy_call_intent' ||
      body.proxy_value_eur !== 5 ||
      typeof body.cta_placement !== 'string' ||
      !PLACEMENTS.has(body.cta_placement as AlternativeCtaPlacement)
    ) {
      return { ok: false, error: 'invalid_proxy_semantics' };
    }
    return {
      ok: true,
      value: {
        ...common,
        event: 'call_button_click',
        conversion_kind: 'proxy_call_intent',
        proxy_value_eur: 5,
        cta_placement: body.cta_placement as AlternativeCtaPlacement,
      },
    };
  }

  return { ok: false, error: 'invalid_event' };
}
