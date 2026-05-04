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

async function handle(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, error: 'unauthorized' },
      { status: 401 }
    );
  }

  const snap = snapshotAndReset();

  // Determine color: green if conversions happened, yellow if traffic but
  // no conversions, gray if no activity at all.
  const color =
    snap.conversionsReceived > 0
      ? Color.GREEN
      : snap.clicksTotal > 0
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
