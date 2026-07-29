import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ALTERNATIVE_LANDING_VARIANT,
  ALTERNATIVE_PROVIDER_ID,
  getAlternativeOfferConfig,
  normalizeTelNumber,
} from '../lib/alternativeCpa68';
import {
  ALTERNATIVE_TRACKING_PAGE,
  buildAlternativeTrackingPayload,
  extractAlternativeAttribution,
  mergeAlternativeAttribution,
  parseAlternativeTrackingRequest,
} from '../lib/alternativeCpa68Tracking';
import { LANDERS } from '../lib/lpTrack';

test('normalizeTelNumber accepts common French formats and rejects garbage', () => {
  const normalized = '+33175754582';
  assert.equal(normalizeTelNumber('01 75 75 45 82'), normalized);
  assert.equal(normalizeTelNumber('+33 (0)1 75 75 45 82'), normalized);
  assert.equal(normalizeTelNumber('0033175754582'), normalized);
  assert.equal(normalizeTelNumber('not-a-phone'), null);
  assert.equal(normalizeTelNumber(undefined), null);
});

test('the centralized offer config exposes the confirmed phone and offer terms, no env gating', () => {
  const offer = getAlternativeOfferConfig();
  assert.equal(offer.providerId, ALTERNATIVE_PROVIDER_ID);
  assert.equal(offer.displayPhone, '01 75 75 45 82');
  assert.equal(offer.phone, '+33175754582');
  assert.equal(offer.telHref, 'tel:+33175754582');
  assert.match(offer.priceDisclosure, /3€\/min/);
  assert.match(offer.priceDisclosure, /CB ou PayPal/);
});

test('attribution extracts bounded UTM and MGID values, accepting adclid as click_id', () => {
  const attribution = extractAlternativeAttribution(new URLSearchParams({
    utm_source: 'mgid',
    utm_campaign: 'free-10',
    source: 'publisher-name',
    sid: '42',
    adclid: 'mgid-click-123',
    creative_id: 'creative-7',
    ignored: 'nope',
  }));

  assert.deepEqual(attribution, {
    utm_source: 'mgid',
    utm_campaign: 'free-10',
    source: 'publisher-name',
    sid: '42',
    click_id: 'mgid-click-123',
    creative_id: 'creative-7',
  });
});

test('attribution is preserved for the visit and newer non-empty values win', () => {
  assert.deepEqual(
    mergeAlternativeAttribution(
      { utm_source: 'mgid', click_id: 'first', utm_campaign: 'original' },
      { click_id: 'second', utm_content: 'hero-a' },
    ),
    {
      utm_source: 'mgid',
      click_id: 'second',
      utm_campaign: 'original',
      utm_content: 'hero-a',
    },
  );
});

test('tracking payload uses the landing_view / call_button_click vocabulary, never lander_view', () => {
  const click = buildAlternativeTrackingPayload('call_button_click', {
    click_id: 'mgid-click-123',
    utm_source: 'mgid',
  }, 'hero');

  assert.equal(click.event, 'call_button_click');
  assert.equal(click.provider_id, 'alternative_cpa_68');
  assert.equal(click.landing_variant, 'consultation_10_minutes_offertes_v1');
  assert.equal(click.cta_placement, 'hero');
  assert.equal(click.conversion_kind, 'proxy_call_intent');
  assert.equal(click.proxy_value_eur, 5);
  assert.equal(click.cpa_approved, false);
  assert.equal(click.revenue_eur, undefined);

  const view = buildAlternativeTrackingPayload('landing_view', { utm_source: 'mgid' });
  assert.equal(view.event, 'landing_view');
  assert.equal(view.conversion_kind, 'none');
  assert.equal(view.proxy_value_eur, undefined);
  assert.equal(view.cta_placement, undefined);
  assert.equal(view.cpa_approved, false);
  assert.equal(view.revenue_eur, undefined);
});

function validView(overrides: Record<string, unknown> = {}) {
  return {
    event: 'landing_view',
    provider_id: ALTERNATIVE_PROVIDER_ID,
    landing_variant: ALTERNATIVE_LANDING_VARIANT,
    conversion_kind: 'none',
    cpa_approved: false,
    page: ALTERNATIVE_TRACKING_PAGE,
    ...overrides,
  };
}

function validClick(overrides: Record<string, unknown> = {}) {
  return {
    event: 'call_button_click',
    provider_id: ALTERNATIVE_PROVIDER_ID,
    landing_variant: ALTERNATIVE_LANDING_VARIANT,
    conversion_kind: 'proxy_call_intent',
    proxy_value_eur: 5,
    cta_placement: 'hero',
    cpa_approved: false,
    page: ALTERNATIVE_TRACKING_PAGE,
    ...overrides,
  };
}

test('parser accepts a well-formed landing_view and call_button_click request', () => {
  const view = parseAlternativeTrackingRequest(validView());
  assert.equal(view.ok, true);

  const click = parseAlternativeTrackingRequest(validClick({ click_id: 'abc' }));
  assert.equal(click.ok, true);
  if (click.ok) {
    assert.equal(click.value.cta_placement, 'hero');
    assert.equal(click.value.proxy_value_eur, 5);
  }
});

test('parser rejects non-object, array and malformed bodies', () => {
  assert.equal(parseAlternativeTrackingRequest(null).ok, false);
  assert.equal(parseAlternativeTrackingRequest('landing_view').ok, false);
  assert.equal(parseAlternativeTrackingRequest([]).ok, false);
  assert.equal(parseAlternativeTrackingRequest(42).ok, false);
});

test('parser rejects unknown/extra keys', () => {
  const result = parseAlternativeTrackingRequest(validView({ extra_field: 'nope' }));
  assert.equal(result.ok, false);
});

test('parser rejects wrong provider_id, landing_variant or page', () => {
  assert.equal(parseAlternativeTrackingRequest(validView({ provider_id: 'other' })).ok, false);
  assert.equal(parseAlternativeTrackingRequest(validView({ landing_variant: 'other' })).ok, false);
  assert.equal(parseAlternativeTrackingRequest(validView({ page: '/lp/other' })).ok, false);
  // trailing slash is tolerated
  assert.equal(
    parseAlternativeTrackingRequest(validView({ page: `${ALTERNATIVE_TRACKING_PAGE}/` })).ok,
    true,
  );
});

test('parser rejects any attempt to claim cpa_approved: true', () => {
  const result = parseAlternativeTrackingRequest(validView({ cpa_approved: true }));
  assert.equal(result.ok, false);
});

test('parser rejects a revenue_eur field entirely, even on an otherwise-valid click', () => {
  const result = parseAlternativeTrackingRequest(validClick({ revenue_eur: 68 }));
  assert.equal(result.ok, false);
});

test('parser enforces landing_view has conversion_kind=none with no placement/proxy value', () => {
  assert.equal(
    parseAlternativeTrackingRequest(validView({ conversion_kind: 'proxy_call_intent' })).ok,
    false,
  );
  assert.equal(
    parseAlternativeTrackingRequest(validView({ cta_placement: 'hero' })).ok,
    false,
  );
  assert.equal(
    parseAlternativeTrackingRequest(validView({ proxy_value_eur: 5 })).ok,
    false,
  );
});

test('parser enforces call_button_click has exact placement and proxy_call_intent/€5', () => {
  assert.equal(
    parseAlternativeTrackingRequest(validClick({ conversion_kind: 'none' })).ok,
    false,
  );
  assert.equal(
    parseAlternativeTrackingRequest(validClick({ proxy_value_eur: 68 })).ok,
    false,
  );
  assert.equal(
    parseAlternativeTrackingRequest(validClick({ cta_placement: 'not-a-real-placement' })).ok,
    false,
  );
  assert.equal(
    parseAlternativeTrackingRequest(validClick({ cta_placement: undefined })).ok,
    false,
  );
});

test('parser rejects an unrecognized event name', () => {
  assert.equal(parseAlternativeTrackingRequest(validView({ event: 'lander_view' })).ok, false);
  assert.equal(parseAlternativeTrackingRequest(validView({ event: 'call_connected' })).ok, false);
  assert.equal(
    parseAlternativeTrackingRequest(validView({ event: 'free_10_minutes_completed' })).ok,
    false,
  );
  assert.equal(parseAlternativeTrackingRequest(validView({ event: 'card_submitted' })).ok, false);
});

test('parser bounds and rejects oversized attribution fields', () => {
  const result = parseAlternativeTrackingRequest(
    validView({ utm_source: 'x'.repeat(101) }),
  );
  assert.equal(result.ok, false);
});

test('CPA68 is excluded from Télémaque\'s shared lp-funnel LANDERS set', () => {
  assert.equal(LANDERS.has('alternative_cpa_68'), false);
  assert.equal(LANDERS.has('consultation-10-minutes-offertes'), false);
  assert.deepEqual(
    Array.from(LANDERS).sort(),
    ['histoire-sophie', 'il-elle-vous-aime', 'voyant-direct'].sort(),
  );
});
