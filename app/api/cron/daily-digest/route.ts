// Daily campaign digest cron — server-only.
//
// Runs once a day (configured in vercel.json), aggregates the in-memory
// digestState counters, posts a single summary embed to Discord, then
// resets state for the next day.
//
// Auth: Vercel cron jobs include a Bearer token equal to CRON_SECRET in
// the Authorization header. We verify on entry to prevent anyone hitting
// the endpoint manually and triggering a digest mid-day.
//
// Caveats: digestState is in-memory module state, so cold starts mid-day
// can reset counters. The digest is informational, not authoritative —
// Google Ads + BargesTech reports are the true source of truth for billing.

import { NextRequest, NextResponse } from 'next/server';
import { Color, notifyDiscord } from '@/lib/discord';
import { snapshotAndReset } from '@/lib/digestState';
import { getPhoneCBStats, type PhoneCBStatsBucket } from '@/lib/goracash';

export const dynamic = 'force-dynamic';

function isAuthorized(request: NextRequest): boolean {
  const expected = process.env.CRON_SECRET;
  if (!expected) {
    // No secret configured — allow (e.g. local dev). In production, secret
    // should always be set.
    return true;
  }
  const auth = request.headers.get('authorization') || '';
  return auth === `Bearer ${expected}`;
}

function pct(numerator: number, denominator: number): string {
  if (denominator === 0) return '—';
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

/**
 * Yesterday's date in Europe/Paris (Goracash operates on French time).
 * fr-CA locale formats as YYYY-MM-DD.
 */
function yesterdayParis(): string {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(
    new Date(Date.now() - 24 * 60 * 60 * 1000)
  );
}

/**
 * Pull yesterday's authoritative funnel numbers from the Goracash API.
 * Unlike digestState this survives cold starts — it's the platform's own
 * ledger. Returns null on failure (creds missing, API error) so a Goracash
 * outage never blocks the rest of the digest.
 */
async function fetchGoracashYesterday(): Promise<{
  date: string;
  bucket: PhoneCBStatsBucket;
} | null> {
  const date = yesterdayParis();
  try {
    const stats = await getPhoneCBStats(`${date} 00:00:00`, `${date} 23:59:59`);
    return { date, bucket: stats.global };
  } catch (err) {
    console.error('[daily-digest] goracash stats failed', {
      date,
      error: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}

async function handle(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, error: 'unauthorized' },
      { status: 401 }
    );
  }

  const snap = snapshotAndReset();
  const goracash = await fetchGoracashYesterday();

  // Determine color: green if conversions happened, yellow if traffic but
  // no conversions, gray if no activity at all.
  const color =
    snap.conversionsReceived > 0 || (goracash?.bucket.transaction ?? 0) > 0
      ? Color.GREEN
      : snap.clicksTotal > 0 || (goracash?.bucket.total ?? 0) > 0
        ? Color.YELLOW
        : Color.GRAY;

  const attributedClicks =
    snap.clicksWithGclid + snap.clicksWithGbraid + snap.clicksWithWbraid;
  const attributionRate = pct(attributedClicks, snap.clicksTotal);

  const fields = [
    {
      name: '🔗 Click-outs',
      value: `**${snap.clicksTotal}** total\n${snap.clicksWithGclid} gclid · ${snap.clicksWithGbraid} gbraid · ${snap.clicksWithWbraid} wbraid · ${snap.clicksNoAttribution} no-attr`,
      inline: false,
    },
    {
      name: '🎯 Conversions',
      value: `**${snap.conversionsReceived}** received · est. payout $${snap.estimatedPayoutUsd.toFixed(2)}`,
      inline: true,
    },
    {
      name: '✅ OCI uploads',
      value: `${snap.ociUploadsOk} ok · ${snap.ociUploadsFailed} failed`,
      inline: true,
    },
    {
      name: '📞 Goracash leads (FR)',
      value: String(snap.goracashLeads),
      inline: true,
    },
    {
      name: '🛡️ Unauthorized postbacks',
      value: String(snap.unauthorizedPostbacks),
      inline: true,
    },
    {
      name: '👥 Unique IPs (click-outs)',
      value: String(snap.uniqueIps.size),
      inline: true,
    },
    {
      name: '📈 Attribution rate',
      value: `${attributionRate} of click-outs had attribution`,
      inline: true,
    },
    // Authoritative Goracash funnel for yesterday (Paris time) — straight
    // from /v1/phone/cbStats, immune to in-memory counter resets.
    goracash
      ? {
          name: `💶 Goracash API · ${goracash.date}`,
          value: `${goracash.bucket.total} appels · ${goracash.bucket.treated} traités · ${goracash.bucket.subscription} inscriptions · **${goracash.bucket.transaction} payants** · **${goracash.bucket.amount.toFixed(2)} €**`,
          inline: false,
        }
      : {
          name: '💶 Goracash API',
          value: 'Stats indisponibles (API error — voir logs).',
          inline: false,
        },
  ];

  // Add a "no activity" hint if everything is zero (saves user from
  // wondering if the cron is broken).
  if (
    snap.clicksTotal === 0 &&
    snap.conversionsReceived === 0 &&
    snap.goracashLeads === 0
  ) {
    fields.push({
      name: 'ℹ️ Note',
      value:
        'No tracked events today. Either the campaign was paused, the day was very quiet, or the function instance reset (counters are in-memory and reset on cold start).',
      inline: false,
    });
  }

  await notifyDiscord({
    category: 'digest',
    title: `📊 Daily Digest · ${snap.date}`,
    description:
      'Summary of tracked events for the past UTC day. Counters are in-memory and may undercount; cross-reference Google Ads + BargesTech for billing.',
    color,
    fields,
  });

  return NextResponse.json({ ok: true, snapshot: { ...snap, uniqueIps: snap.uniqueIps.size } });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}

// Vercel cron may use POST; accept both.
export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
