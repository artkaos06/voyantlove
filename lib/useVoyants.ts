'use client';

import { useState, useEffect } from 'react';
import { Voyant } from './voyants';

const API_URL = '/api/voyants';

let cachedVoyants: Voyant[] | null = null;
let fetchPromise: Promise<Voyant[]> | null = null;

async function fetchVoyants(): Promise<Voyant[]> {
  if (cachedVoyants) return cachedVoyants;

  if (!fetchPromise) {
    fetchPromise = fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((data: Voyant[]) => {
        cachedVoyants = data;
        // Cache for 2 minutes then refresh
        setTimeout(() => {
          cachedVoyants = null;
          fetchPromise = null;
        }, 2 * 60 * 1000);
        return data;
      })
      .catch(() => {
        fetchPromise = null;
        return [];
      });
  }

  return fetchPromise;
}

/**
 * Live voyant feed.
 *
 * `enabled` exists because hooks cannot be called conditionally: a component
 * that only sometimes needs the feed (FloatingConsultCTA is hidden on paid
 * landers, legal pages and the English brand) must still call the hook, and
 * without this flag it would pull the full ~36 KB roster on every one of those
 * pages for nothing. While disabled the hook stays in its loading state, which
 * every consumer already treats as "render nothing".
 */
export function useVoyants(enabled: boolean = true): { voyants: Voyant[]; loading: boolean } {
  const [voyants, setVoyants] = useState<Voyant[]>(cachedVoyants || []);
  const [loading, setLoading] = useState(!cachedVoyants);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    fetchVoyants().then((data) => {
      if (cancelled) return;
      setVoyants(data);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [enabled]);

  return { voyants, loading };
}
