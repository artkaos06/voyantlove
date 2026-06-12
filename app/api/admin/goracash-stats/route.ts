// On-demand Goracash CB stats — backfill / audit endpoint.
//
// Usage (browser or curl):
//   /api/admin/goracash-stats?key=<ADMIN_KEY>&from=2026-05-01&to=2026-05-20
//   /api/admin/goracash-stats?key=...&from=...&to=...&discord=1
//
// Returns the full conversion funnel (calls → treated → inscriptions →
// transactions → € reversé) for the range, globally and per day, straight
// from the Goracash API — no dashboard login needed. With discord=1 the
// summary is also posted to the Discord channel so it lands in the
// permanent ledger.
//
// Auth: ADMIN_KEY (same scheme as /api/admin/stats); CRON_SECRET accepted
// as a fallback so the endpoint stays usable if ADMIN_KEY was never set.

import { NextRequest, NextResponse } from 'next/server';
import {
  getPhoneCBStats,
  type PhoneCBStats,
  type PhoneCBStatsBucket,
} from '@/lib/goracash';
import { Color, notifyDiscord } from '@/lib/discord';

export const dynamic = 'force-dynamic';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Goracash's cbStats rejects ranges over ~2 weeks ("Period is too large").
// We chunk into windows comfortably under that and aggregate, so callers
// can request arbitrary spans (a full month, a whole campaign quarter).
const MAX_WINDOW_DAYS = 10;

const fmt = (d: Date) => d.toISOString().slice(0, 10);

/** Inclusive [from, to] split into ≤ maxDays sub-ranges (UTC date math). */
function chunkRanges(
  from: string,
  to: string,
  maxDays: number
): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  const end = new Date(`${to}T00:00:00Z`);
  let cur = new Date(`${from}T00:00:00Z`);
  while (cur <= end) {
    const winEnd = new Date(cur);
    winEnd.setUTCDate(winEnd.getUTCDate() + maxDays - 1);
    const e = winEnd > end ? end : winEnd;
    out.push([fmt(cur), fmt(e)]);
    cur = new Date(e);
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return out;
}

/** Fetch a span of any length by chunking + summing the windows. */
async function getPhoneCBStatsRange(
  from: string,
  to: string
): Promise<PhoneCBStats> {
  const windows = chunkRanges(from, to, MAX_WINDOW_DAYS);
  const empty: PhoneCBStatsBucket = {
    total: 0,
    treated: 0,
    subscription: 0,
    transaction: 0,
    callback: 0,
    amount: 0,
  };
  const merged: PhoneCBStats = { global: { ...empty }, dates: {} };

  for (const [a, b] of windows) {
    const part = await getPhoneCBStats(`${a} 00:00:00`, `${b} 23:59:59`);
    (Object.keys(empty) as Array<keyof PhoneCBStatsBucket>).forEach((k) => {
      merged.global[k] += part.global[k];
    });
    Object.assign(merged.dates, part.dates);
  }
  return merged;
}

function isAuthorized(key: string | null): boolean {
  if (!key) return false;
  const adminKey = process.env.ADMIN_KEY;
  const cronSecret = process.env.CRON_SECRET;
  return (!!adminKey && key === adminKey) || (!!cronSecret && key === cronSecret);
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;

  if (!isAuthorized(sp.get('key'))) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const from = sp.get('from');
  const to = sp.get('to');
  if (!from || !to || !DATE_RE.test(from) || !DATE_RE.test(to)) {
    return NextResponse.json(
      { ok: false, error: 'from/to required as YYYY-MM-DD' },
      { status: 400 }
    );
  }

  try {
    const stats = await getPhoneCBStatsRange(from, to);

    if (sp.get('discord') === '1') {
      const g = stats.global;
      // Only days with activity — keeps the embed readable on long ranges.
      const activeDays = Object.entries(stats.dates)
        .filter(([, b]) => b.total || b.subscription || b.transaction || b.amount)
        .map(
          ([date, b]) =>
            `\`${date}\` ${b.total} appels · ${b.treated} traités · ${b.subscription} inscr. · ${b.transaction} trans. · ${b.amount.toFixed(2)} €`
        );

      await notifyDiscord({
        title: `📒 Goracash CB stats · ${from} → ${to}`,
        description:
          'Pulled from /v1/phone/cbStats (API source of truth, not the in-memory digest).',
        color: g.transaction > 0 ? Color.GREEN : g.total > 0 ? Color.YELLOW : Color.GRAY,
        fields: [
          { name: 'Appels', value: String(g.total), inline: true },
          { name: 'Traités', value: String(g.treated), inline: true },
          { name: 'Inscriptions', value: String(g.subscription), inline: true },
          { name: 'Transactions (payant)', value: String(g.transaction), inline: true },
          { name: 'Demandes de rappel', value: String(g.callback), inline: true },
          { name: '💶 Reversement', value: `${g.amount.toFixed(2)} €`, inline: true },
          ...(activeDays.length
            ? [
                {
                  name: 'Jours actifs',
                  value: activeDays.slice(0, 20).join('\n').slice(0, 1000),
                  inline: false,
                },
              ]
            : []),
        ],
      });
    }

    return NextResponse.json({ ok: true, from, to, stats });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[admin/goracash-stats] failed', { from, to, error: msg });
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
