// Goracash API client — server-only.
// Never import from a 'use client' module.
//
// Docs: https://account.goracash.com/docs/webservice.installation.md
// Endpoints derived from the PHP reference client:
//   POST https://ws.goracash.com/v1/auth/getAccessToken
//   POST https://ws.goracash.com/v1/phone/callback
//
// Auth flow: client_id + client_secret → {access_token, access_token_limit}.
// access_token_limit is returned as a UNIX timestamp / duration; we treat it
// as "seconds from now" conservatively and subtract a 60s safety margin.

const BASE_URL = 'https://ws.goracash.com';
const AUTH_PATH = '/v1/auth/getAccessToken';
const CALLBACK_PATH = '/v1/phone/callback';

export type CallbackStatus =
  | 'ok'
  | 'already_exist'
  | 'outside_the_schedule'
  | 'we_try_later'
  | 'refused_by_provider';

export interface CallbackRequest {
  phone: string; // international format, e.g. 0033612345678
  firstname?: string;
  lastname?: string;
  gender?: 'MONSIEUR' | 'MADAME';
  tracker?: string;
}

export interface CallbackResult {
  status: 'ok' | 'error';
  callback_status?: CallbackStatus;
  message?: string;
}

interface TokenCache {
  token: string;
  expiresAt: number; // epoch ms
}

let cachedToken: TokenCache | null = null;

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function fetchAccessToken(): Promise<string> {
  const clientId = env('GORACASH_CLIENT_ID');
  const clientSecret = env('GORACASH_CLIENT_SECRET');

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
  });

  const res = await fetch(`${BASE_URL}${AUTH_PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Goracash auth failed: ${res.status} ${text}`);
  }

  const data = (await res.json()) as {
    access_token?: string;
    access_token_limit?: string | number;
  };

  if (!data.access_token) {
    throw new Error(`Goracash auth returned no access_token: ${JSON.stringify(data)}`);
  }

  // access_token_limit is undocumented in shape; treat as seconds TTL if small,
  // or as epoch seconds if it looks like a timestamp. Fall back to 55 min.
  const now = Date.now();
  let ttlMs = 55 * 60 * 1000;
  const limit = Number(data.access_token_limit);
  if (Number.isFinite(limit)) {
    if (limit > 10_000_000_000) {
      // epoch ms
      ttlMs = limit - now;
    } else if (limit > 1_000_000_000) {
      // epoch seconds
      ttlMs = limit * 1000 - now;
    } else if (limit > 0) {
      // seconds duration
      ttlMs = limit * 1000;
    }
  }
  // 60s safety margin
  ttlMs = Math.max(ttlMs - 60_000, 30_000);

  cachedToken = { token: data.access_token, expiresAt: now + ttlMs };
  return data.access_token;
}

async function getToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }
  return fetchAccessToken();
}

/**
 * Normalize a user-entered French phone number to Goracash international
 * format (0033XXXXXXXXX). Returns null if invalid.
 */
export function normalizeFrenchPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');

  // +33XXXXXXXXX → 33XXXXXXXXX (11 digits total after strip)
  if (digits.length === 11 && digits.startsWith('33')) {
    return `00${digits}`;
  }
  // 0033XXXXXXXXX (already international)
  if (digits.length === 13 && digits.startsWith('0033')) {
    return digits;
  }
  // 0XXXXXXXXX (10-digit French national)
  if (digits.length === 10 && digits.startsWith('0')) {
    const subscriber = digits.slice(1);
    const prefix = subscriber[0];
    // Reject premium-rate (08XX), allow 01-07 and 09
    // Goracash itself rejects surtaxés; we pre-filter to avoid round-trip.
    if (prefix === '8') return null;
    return `0033${subscriber}`;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Phone CB stats — the conversion/revenue reporting API.
//
// Endpoint (docs: WebServices - URLs > Téléphonie):
//   [POST|GET] /v1/phone/cbStats
//     date_lbound / date_ubound : 'YYYY-MM-DD HH:II:SS'
//
// Returns the full conversion funnel per period and per day:
//   total        = calls received        (dashboard "Appels")
//   treated      = calls handled         (dashboard "Appels traités")
//   subscription = registrations         (dashboard "Inscriptions")
//   transaction  = PAID events           (dashboard "Appels payants") ← money
//   callback     = callback requests     (dashboard "Demandes de rappel")
//   amount       = € actually owed to us (dashboard "Reversements")
//
// Limitation: aggregated by number/date only — no tracker dimension. Good
// for daily P&L automation; per-click attribution still requires the web
// offer's tracker reporting.
// ---------------------------------------------------------------------------

const CB_STATS_PATH = '/v1/phone/cbStats';

export interface PhoneCBStatsBucket {
  total: number;
  treated: number;
  subscription: number;
  transaction: number;
  callback: number;
  amount: number;
}

export interface PhoneCBStats {
  global: PhoneCBStatsBucket;
  /** Per-day buckets keyed by date string as returned by Goracash. */
  dates: Record<string, PhoneCBStatsBucket>;
}

function toBucket(raw: Record<string, unknown> | undefined): PhoneCBStatsBucket {
  const n = (v: unknown) => {
    const x = Number(v);
    return Number.isFinite(x) ? x : 0;
  };
  return {
    total: n(raw?.total),
    treated: n(raw?.treated),
    subscription: n(raw?.subscription),
    transaction: n(raw?.transaction),
    callback: n(raw?.callback),
    amount: n(raw?.amount),
  };
}

/**
 * Fetch CB (free-number / card-payment) phone stats for a datetime range.
 * Bounds use Goracash's expected format 'YYYY-MM-DD HH:II:SS' (their
 * backoffice operates on French time).
 */
export async function getPhoneCBStats(
  dateLbound: string,
  dateUbound: string
): Promise<PhoneCBStats> {
  const clientId = env('GORACASH_CLIENT_ID');
  const accessToken = await getToken();

  const buildBody = (token: string) =>
    new URLSearchParams({
      client_id: clientId,
      access_token: token,
      date_lbound: dateLbound,
      date_ubound: dateUbound,
    });

  const call = async (token: string) => {
    const res = await fetch(`${BASE_URL}${CB_STATS_PATH}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: buildBody(token).toString(),
    });
    const text = await res.text();
    try {
      return JSON.parse(text) as {
        status: string;
        message?: string;
        stats?: {
          global?: Record<string, unknown>;
          dates?: Record<string, Record<string, unknown>>;
        };
      };
    } catch {
      throw new Error(
        `Goracash cbStats: unparseable response (${res.status}): ${text.slice(0, 300)}`
      );
    }
  };

  let parsed = await call(accessToken);

  // Token rejected → flush cache, retry once (same pattern as callbacks).
  if (
    parsed.status === 'error' &&
    typeof parsed.message === 'string' &&
    /token/i.test(parsed.message)
  ) {
    cachedToken = null;
    parsed = await call(await fetchAccessToken());
  }

  if (parsed.status !== 'ok') {
    throw new Error(`Goracash cbStats error: ${parsed.message || 'unknown'}`);
  }

  const dates: Record<string, PhoneCBStatsBucket> = {};
  for (const [date, bucket] of Object.entries(parsed.stats?.dates || {})) {
    dates[date] = toBucket(bucket);
  }

  return { global: toBucket(parsed.stats?.global), dates };
}

// ---------------------------------------------------------------------------
// WEB offer CB stats — the self-serve web funnel's reporting API.
//
// UNDOCUMENTED in the backoffice (the "Guides > Web" doc page is empty), but
// present in Goracash's public PHP client (Goracash\Service\Web):
//   endpoint:  POST /v1/web/cbStats
//   params:    date_lbound, date_ubound ('YYYY-MM-DD HH:II:SS', max 1 month)
//              tracker  (single) / trackers[] (array)  ← per-cid filter
//              market/markets, thematic/thematics       (optional)
//
// Crucially this accepts a `tracker` filter — the same value we send as
// `datas` on the news-voyance landing. That makes per-click attribution
// possible for the web offer (phone cbStats has no tracker dimension).
//
// Return shape is not documented; getWebCBStatsRaw returns the `stats`
// object verbatim so we can inspect it against a live account before
// building typed accessors + the OCI poller on top.
// ---------------------------------------------------------------------------

const WEB_CB_STATS_PATH = '/v1/web/cbStats';

/**
 * Raw web CB stats for a period, optionally filtered to specific trackers.
 * Returns the parsed `stats` object untouched (shape TBD from live probe).
 */
export async function getWebCBStatsRaw(
  dateLbound: string,
  dateUbound: string,
  trackers?: string[]
): Promise<unknown> {
  const clientId = env('GORACASH_CLIENT_ID');
  const accessToken = await getToken();

  const buildBody = (token: string) => {
    const body = new URLSearchParams({
      client_id: clientId,
      access_token: token,
      date_lbound: dateLbound,
      date_ubound: dateUbound,
    });
    // PHP-style array params: trackers[]=a&trackers[]=b
    (trackers || []).forEach((t) => body.append('trackers[]', t));
    return body;
  };

  const call = async (token: string) => {
    const res = await fetch(`${BASE_URL}${WEB_CB_STATS_PATH}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: buildBody(token).toString(),
    });
    const text = await res.text();
    try {
      return JSON.parse(text) as {
        status: string;
        message?: string;
        stats?: unknown;
      };
    } catch {
      throw new Error(
        `Goracash web/cbStats: unparseable response (${res.status}): ${text.slice(0, 300)}`
      );
    }
  };

  let parsed = await call(accessToken);
  if (
    parsed.status === 'error' &&
    typeof parsed.message === 'string' &&
    /token/i.test(parsed.message)
  ) {
    cachedToken = null;
    parsed = await call(await fetchAccessToken());
  }

  if (parsed.status !== 'ok') {
    throw new Error(`Goracash web/cbStats error: ${parsed.message || 'unknown'}`);
  }
  return parsed.stats ?? null;
}

export async function sendCallbackRequest(
  req: CallbackRequest
): Promise<CallbackResult> {
  const clientId = env('GORACASH_CLIENT_ID');
  const caller = env('GORACASH_CALLER'); // e.g. 0033175754582

  const accessToken = await getToken();

  const body = new URLSearchParams({
    client_id: clientId,
    access_token: accessToken,
    caller,
    phone: req.phone,
  });

  if (req.firstname) body.set('firstname', req.firstname);
  if (req.lastname) body.set('lastname', req.lastname);
  if (req.gender) body.set('gender', req.gender);
  if (req.tracker) body.set('tracker', req.tracker);

  const res = await fetch(`${BASE_URL}${CALLBACK_PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  // Goracash returns JSON for both success and error.
  const text = await res.text();
  let parsed: CallbackResult;
  try {
    parsed = JSON.parse(text) as CallbackResult;
  } catch {
    throw new Error(`Goracash callback: unparseable response (${res.status}): ${text}`);
  }

  // If token was rejected, flush cache and retry once.
  if (
    parsed.status === 'error' &&
    typeof parsed.message === 'string' &&
    /token/i.test(parsed.message)
  ) {
    cachedToken = null;
    const freshToken = await fetchAccessToken();
    const retryBody = new URLSearchParams(body);
    retryBody.set('access_token', freshToken);
    const retry = await fetch(`${BASE_URL}${CALLBACK_PATH}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: retryBody.toString(),
    });
    const retryText = await retry.text();
    parsed = JSON.parse(retryText) as CallbackResult;
  }

  return parsed;
}
