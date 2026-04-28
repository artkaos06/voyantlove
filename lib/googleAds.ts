// Google Ads Click Conversion Import (OCI) — server-only.
// Never import from a 'use client' module.
//
// Forwards conversions received via the BargesTech postback to Google Ads,
// attributing each one to the gclid that drove the click. This is what makes
// the loop closed: Google Ads sees offline conversions, learns which keywords
// + audiences drive Keen first-purchases, and Smart Bidding optimises against
// real revenue instead of proxy events.
//
// Auth: OAuth 2.0 with a long-lived refresh token. Access tokens are cached
// in memory with a 60s safety margin before expiry.
//
// Docs:
//   https://developers.google.com/google-ads/api/docs/conversions/upload-clicks
//   https://developers.google.com/google-ads/api/rest/auth
//   https://developers.google.com/google-ads/api/docs/oauth/overview

const GOOGLE_OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_ADS_API_BASE = 'https://googleads.googleapis.com';
// API version is bumped by Google ~3x/year; override via env if a version
// gets deprecated before we update the code.
const GOOGLE_ADS_API_VERSION =
  process.env.GOOGLE_ADS_API_VERSION || 'v18';

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

/**
 * True only when every Google Ads env var is set. The postback handler uses
 * this to decide whether to attempt OCI upload — when false, it just logs
 * and acks the postback (graceful degradation during the credential rollout).
 */
export function isGoogleAdsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_ADS_DEVELOPER_TOKEN &&
      process.env.GOOGLE_ADS_CLIENT_ID &&
      process.env.GOOGLE_ADS_CLIENT_SECRET &&
      process.env.GOOGLE_ADS_REFRESH_TOKEN &&
      process.env.GOOGLE_ADS_CUSTOMER_ID &&
      process.env.GOOGLE_ADS_CONVERSION_ACTION_ID
  );
}

async function fetchAccessToken(): Promise<string> {
  const clientId = env('GOOGLE_ADS_CLIENT_ID');
  const clientSecret = env('GOOGLE_ADS_CLIENT_SECRET');
  const refreshToken = env('GOOGLE_ADS_REFRESH_TOKEN');

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });

  const res = await fetch(GOOGLE_OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Google OAuth failed: ${res.status} ${text}`);
  }

  const data = (await res.json()) as {
    access_token?: string;
    expires_in?: number; // seconds
  };

  if (!data.access_token) {
    throw new Error(`Google OAuth: no access_token returned`);
  }

  const ttlMs = Math.max(((data.expires_in ?? 3600) - 60) * 1000, 30_000);
  cachedToken = { token: data.access_token, expiresAt: Date.now() + ttlMs };
  return data.access_token;
}

async function getToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }
  return fetchAccessToken();
}

export interface ClickConversion {
  gclid: string;
  /** Format: "yyyy-MM-dd HH:mm:ss+HH:MM" — use formatGoogleAdsDateTime() */
  conversionDateTime: string;
  conversionValue?: number;
  currencyCode?: string;
  /** Dedup key. Pass the BargesTech transaction_id. */
  orderId?: string;
}

export interface UploadResult {
  success: boolean;
  partialFailures?: unknown;
  message?: string;
  raw?: unknown;
}

/**
 * Format a Date or ISO string into the format Google Ads expects:
 *   "yyyy-MM-dd HH:mm:ss+HH:MM"
 *
 * Always emits UTC ("+00:00") so the offset is deterministic regardless of
 * whatever string BargesTech sends in {datetime}.
 */
export function formatGoogleAdsDateTime(input: Date | string): string {
  const d = typeof input === 'string' ? new Date(input) : input;
  if (isNaN(d.getTime())) {
    // Fallback to "now" if the input is unparseable (e.g. BargesTech sends an
    // unusual datetime format). The conversion still attributes correctly via
    // gclid; only the timing analytics suffer.
    return formatGoogleAdsDateTime(new Date());
  }
  const pad = (n: number) => String(n).padStart(2, '0');
  const yyyy = d.getUTCFullYear();
  const mm = pad(d.getUTCMonth() + 1);
  const dd = pad(d.getUTCDate());
  const hh = pad(d.getUTCHours());
  const mi = pad(d.getUTCMinutes());
  const ss = pad(d.getUTCSeconds());
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}+00:00`;
}

/**
 * Upload one or more click conversions to Google Ads.
 *
 * Per-conversion failures (bad gclid, unknown conversion action, dedup
 * rejection) are returned in `partialFailures` rather than thrown; only
 * transport / auth errors throw or set `success: false`.
 */
export async function uploadClickConversions(
  conversions: ClickConversion[]
): Promise<UploadResult> {
  if (!conversions.length) {
    return { success: true, message: 'no conversions to upload' };
  }

  const developerToken = env('GOOGLE_ADS_DEVELOPER_TOKEN');
  const customerId = env('GOOGLE_ADS_CUSTOMER_ID').replace(/-/g, '');
  const loginCustomerId = (
    process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || customerId
  ).replace(/-/g, '');
  const conversionActionId = env('GOOGLE_ADS_CONVERSION_ACTION_ID');

  const accessToken = await getToken();

  const url = `${GOOGLE_ADS_API_BASE}/${GOOGLE_ADS_API_VERSION}/customers/${customerId}:uploadClickConversions`;

  const body = {
    conversions: conversions.map((c) => ({
      gclid: c.gclid,
      conversionAction: `customers/${customerId}/conversionActions/${conversionActionId}`,
      conversionDateTime: c.conversionDateTime,
      ...(c.conversionValue !== undefined && Number.isFinite(c.conversionValue)
        ? {
            conversionValue: c.conversionValue,
            currencyCode: c.currencyCode ?? 'USD',
          }
        : {}),
      ...(c.orderId ? { orderId: c.orderId } : {}),
    })),
    partialFailure: true,
    validateOnly: false,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'developer-token': developerToken,
      'login-customer-id': loginCustomerId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return {
      success: false,
      message: `unparseable response (${res.status}): ${text.slice(0, 500)}`,
    };
  }

  if (!res.ok) {
    return {
      success: false,
      message: `Google Ads ${res.status}: ${JSON.stringify(parsed).slice(0, 500)}`,
      raw: parsed,
    };
  }

  // partialFailureError is set on the response when individual conversions
  // failed even though the request itself succeeded.
  const partialFailureError = (parsed as { partialFailureError?: unknown })
    ?.partialFailureError;

  return {
    success: true,
    partialFailures: partialFailureError ?? null,
    raw: parsed,
  };
}
