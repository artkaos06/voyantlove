// Angle-lander readout — loads → tel taps, by angle, by MGID source, by
// creative. This is the scoreboard for the 3-angle MGID test.
//
// Separate from /api/admin/quiz-funnel on purpose: that reads `cpl:quiz:*`
// (the retired quiz funnel, whose conversion event was an email submit).
// This reads `cpl:lp:*`, whose conversion event is a phone tap. Comparing
// numbers across the two is meaningless — different funnels, different events.
//
// Usage: /api/admin/lp-funnel?key=<ADMIN_KEY|CRON_SECRET>[&days=7]

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';
import { lpKey } from '@/lib/lpTrack';

export const dynamic = 'force-dynamic';

function isAuthorized(key: string | null): boolean {
  if (!key) return false;
  const adminKey = process.env.ADMIN_KEY;
  const cronSecret = process.env.CRON_SECRET;
  return (!!adminKey && key === adminKey) || (!!cronSecret && key === cronSecret);
}

interface Cell {
  loads: number;
  taps: number;
}

function rate(c: Cell) {
  return {
    ...c,
    tap_rate_pct: c.loads > 0 ? Number(((c.taps / c.loads) * 100).toFixed(2)) : 0,
  };
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;
  if (!isAuthorized(sp.get('key'))) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const days = Math.min(Math.max(Number(sp.get('days') || '7'), 1), 30);
  const dates = Array.from({ length: days }, (_, i) =>
    parisDate(new Date(Date.now() - i * 86_400_000))
  );

  const total: Cell = { loads: 0, taps: 0 };
  const byAngle: Record<string, Cell> = {};
  const bySource: Record<string, Cell> = {};
  const byAngleSource: Record<string, Cell> = {};
  const byCreative: Record<string, Cell> = {};

  const bucket = (m: Record<string, Cell>, k: string): Cell =>
    (m[k] ??= { loads: 0, taps: 0 });

  for (const d of dates) {
    const h = (await kv.hgetall<Record<string, string>>(lpKey(d))) || {};
    for (const [field, raw] of Object.entries(h)) {
      const v = Number(raw) || 0;
      const isLoad = field === 'load' || field.startsWith('load:');
      const isTap = field === 'tel' || field.startsWith('tel:');
      if (!isLoad && !isTap) continue;
      const metric: keyof Cell = isLoad ? 'loads' : 'taps';

      // Bare 'load' / 'tel' = grand total.
      if (field === 'load' || field === 'tel') {
        total[metric] += v;
        continue;
      }

      const rest = field.slice(field.indexOf(':') + 1);

      // 'load:cr:<creative_id>'
      if (rest.startsWith('cr:')) {
        bucket(byCreative, rest.slice(3))[metric] += v;
        continue;
      }

      // 'load:<angle>' or 'load:<angle>|<source>'
      const bar = rest.indexOf('|');
      if (bar === -1) {
        bucket(byAngle, rest)[metric] += v;
      } else {
        const angle = rest.slice(0, bar);
        const source = rest.slice(bar + 1);
        bucket(bySource, source)[metric] += v;
        bucket(byAngleSource, `${angle} | ${source}`)[metric] += v;
      }
    }
  }

  const sortByLoads = (m: Record<string, Cell>) =>
    Object.fromEntries(
      Object.entries(m)
        .sort((a, b) => b[1].loads - a[1].loads)
        .map(([k, c]) => [k, rate(c)])
    );

  // Sources with enough traffic to judge but zero taps. Threshold is a
  // deliberate guard against the failure mode of killing a source on a raw
  // zero: at a 2% tap rate, 50 loads expects ~1 tap, so below that a zero is
  // noise, not a verdict.
  const MIN_LOADS = 50;
  const zeroTapSources = Object.entries(bySource)
    .filter(([, c]) => c.loads >= MIN_LOADS && c.taps === 0)
    .sort((a, b) => b[1].loads - a[1].loads)
    .map(([source, c]) => ({ source, loads: c.loads }));

  return NextResponse.json({
    ok: true,
    date_range: { from: dates[dates.length - 1], to: dates[0], days },
    total: rate(total),
    by_angle: sortByLoads(byAngle),
    by_source: sortByLoads(bySource),
    by_angle_source: sortByLoads(byAngleSource),
    by_creative: sortByLoads(byCreative),
    kill_candidates: { min_loads: MIN_LOADS, sources: zeroTapSources },
    note:
      'Conversion event = phone tap (tel: link), NOT an email submit — do not compare against /api/admin/quiz-funnel. loads are server-side (exact); taps come from a JS beacon so they are a FLOOR and can undercount on JS-hostile in-app browsers. by_creative requires &creative_id={creative_id} on the MGID destination URL.',
  });
}
