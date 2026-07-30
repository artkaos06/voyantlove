'use client';

import { useEffect } from 'react';
import {
  ALTERNATIVE_ATTRIBUTION_STORAGE_KEY,
  type AlternativeAttribution,
  type AlternativeCtaPlacement,
  buildAlternativeTrackingPayload,
  extractAlternativeAttribution,
  mergeAlternativeAttribution,
  notifyMgidCtaCall,
} from '@/lib/alternativeCpa68Tracking';

const ENDPOINT = '/api/track/alternative-cpa68';

function readStored(): AlternativeAttribution {
  try {
    return JSON.parse(sessionStorage.getItem(ALTERNATIVE_ATTRIBUTION_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function send(payload: ReturnType<typeof buildAlternativeTrackingPayload>) {
  const body = JSON.stringify({
    ...payload,
    page: window.location.pathname,
    referrer: document.referrer || '',
  });

  const dataLayerWindow = window as typeof window & { dataLayer?: unknown[] };
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
  dataLayerWindow.dataLayer.push(payload);

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }));
    } else {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => undefined);
    }
  } catch {
    // Analytics must never block or replace the tel: navigation.
  }
}

export default function AlternativeCpa68Tracker() {
  useEffect(() => {
    const current = extractAlternativeAttribution(new URLSearchParams(window.location.search));
    const attribution = mergeAlternativeAttribution(readStored(), current);
    try {
      sessionStorage.setItem(ALTERNATIVE_ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // The event still sends when storage is unavailable/private.
    }

    send(buildAlternativeTrackingPayload('landing_view', attribution));

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a[data-cpa68-placement][href^="tel:"]');
      if (!link) return;
      const placement = link.dataset.cpa68Placement as AlternativeCtaPlacement;
      send(buildAlternativeTrackingPayload('call_button_click', attribution, placement));

      // Feed MGID's existing cta_call goal directly from this dedicated
      // tracker — CPA68 is excluded from app/layout.tsx's sitewide listener
      // (Télémaque isolation), so that shared listener never fires it here.
      try {
        notifyMgidCtaCall(window as unknown as { _mgq?: unknown[] });
      } catch {
        // Best-effort: never block the tel: navigation.
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
