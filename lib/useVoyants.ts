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

export function useVoyants(): { voyants: Voyant[]; loading: boolean } {
  const [voyants, setVoyants] = useState<Voyant[]>(cachedVoyants || []);
  const [loading, setLoading] = useState(!cachedVoyants);

  useEffect(() => {
    fetchVoyants().then((data) => {
      setVoyants(data);
      setLoading(false);
    });
  }, []);

  return { voyants, loading };
}
