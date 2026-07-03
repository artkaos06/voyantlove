// Discord webhook notifier — server-only.
// Never import from a 'use client' module.
//
// Used to push real-time visibility on click-outs and conversions to a
// Discord channel. Replaces the need for paid Vercel log retention during
// the early-campaign data-gathering phase.
//
// Setup (one-time):
//   1. Create a Discord server (or use an existing one)
//   2. Server Settings → Integrations → Webhooks → New Webhook
//   3. Pick a channel (e.g. #lovepsychicguide-events), copy the Webhook URL
//   4. Set DISCORD_WEBHOOK_URL in Vercel env vars + redeploy
//
// Behavior:
//   - Silent no-op if DISCORD_WEBHOOK_URL is not configured (graceful)
//   - Best-effort fire-and-forget: never blocks the actual response
//   - Short timeout to avoid hanging serverless functions
//   - All errors swallowed — observability shouldn't break the critical path

const WEBHOOK_TIMEOUT_MS = 2000;

// Color palette (Discord uses decimal RGB integers).
export const Color = {
  /** Successful click with full attribution. */
  PURPLE: 8086527, // #7B61FF
  /** Successful conversion uploaded to Google Ads OCI. */
  GREEN: 65407, // #00FF7F
  /** Click without attribution (likely bot or direct traffic). */
  YELLOW: 16763911, // #FFC107
  /** Failure — Google Ads upload rejected, postback malformed, etc. */
  RED: 16733525, // #FF5555
  /** Informational. */
  GRAY: 9013641, // #898989
} as const;

interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

/**
 * Notification category — controls what reaches Discord in real time.
 * With DISCORD_LEADS_ONLY on (the default), only 'lead' and 'digest' fire;
 * everything else (click-outs, anomalies, OCI, tel-taps, unauthorized) is
 * suppressed to keep the channel a clean money-signal feed. Set
 * DISCORD_LEADS_ONLY=0 in env to restore all pings.
 */
type NotifyCategory = 'lead' | 'digest' | 'other';

interface NotifyPayload {
  title: string;
  description?: string;
  color?: number;
  fields?: EmbedField[];
  /** Optional username override for the webhook message. */
  username?: string;
  /** Defaults to 'other' (suppressed while leads-only mode is on). */
  category?: NotifyCategory;
}

const LEADS_ONLY_CATEGORIES = new Set<NotifyCategory>(['lead', 'digest']);

/**
 * Truncate a string to a max length, adding an ellipsis if truncated.
 * Discord enforces 1024 chars per field value and 4096 per description.
 */
function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + '…';
}

/**
 * Send a structured embed to the configured Discord webhook.
 * Best-effort: never throws, never blocks longer than WEBHOOK_TIMEOUT_MS.
 */
export async function notifyDiscord(payload: NotifyPayload): Promise<void> {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return;

  // Leads-only mode (default ON): suppress everything except CPL leads and
  // the daily digest, so the channel isn't flooded by click-outs, anomalies,
  // tel-taps, OCI, etc. Set DISCORD_LEADS_ONLY=0 to restore all pings.
  const leadsOnly = process.env.DISCORD_LEADS_ONLY !== '0';
  if (leadsOnly && !LEADS_ONLY_CATEGORIES.has(payload.category ?? 'other')) {
    return;
  }

  // Build the embed object Discord expects.
  const embed = {
    title: truncate(payload.title, 256),
    ...(payload.description
      ? { description: truncate(payload.description, 4000) }
      : {}),
    color: payload.color ?? Color.GRAY,
    timestamp: new Date().toISOString(),
    ...(payload.fields && payload.fields.length > 0
      ? {
          fields: payload.fields.map((f) => ({
            name: truncate(f.name, 256),
            value: truncate(f.value || '—', 1024),
            ...(f.inline ? { inline: true } : {}),
          })),
        }
      : {}),
  };

  const body = JSON.stringify({
    username: payload.username || 'LovePsychicGuide',
    embeds: [embed],
  });

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
  } catch {
    // Swallow — observability must not break the actual handler.
    // (network error, timeout, Discord rate-limit, all map here.)
  }
}
