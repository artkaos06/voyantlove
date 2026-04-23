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
