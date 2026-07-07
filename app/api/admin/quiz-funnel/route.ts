// Quiz funnel readout — start → email → CTA, blended and broken down by
// source and by dedicated number (num).
//
// Data comes from the cpl:quiz:<date> hash written by /api/track/quiz
// (starts, ctas + per-source/per-num) and /api/lead/quiz (emails + per-source/
// per-num). This is the dial to watch while the RevShare LTV accrues: it tells
// you the funnel health (are people completing? giving email? tapping call?)
// long before Télémaque reversement lands.
//
// Usage: /api/admin/quiz-funnel?key=<ADMIN_KEY|CRON_SECRET>[&days=7]

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

function isAuthorized(key: string | null): boolean {
  if (!key) return false;
  const adminKey = process.env.ADMIN_KEY;
  const cronSecret = process.env.CRON_SECRET;
  return (!!adminKey && key === adminKey) || (!!cronSecret && key === cronSecret);
}

interface Funnel {
  starts: number;
  emails: number;
  ctas: number;
}

function rates(f: Funnel) {
  const pct = (n: number, d: number) => (d > 0 ? Number(((n / d) * 100).toFixed(1)) : 0);
  return {
    ...f,
    email_rate_pct: pct(f.emails, f.starts), // completed → gave email
    cta_rate_pct: pct(f.ctas, f.emails), // gave email → tapped call
    start_to_cta_pct: pct(f.ctas, f.starts), // overall
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

  const total: Funnel = { starts: 0, emails: 0, ctas: 0 };
  const bySource: Record<string, Funnel> = {};
  const byNum: Record<string, Funnel> = {};
  const num2phone: Record<string, string> = {
    '1': '0423090950',
    '2': '0484200203',
    '3': '0175111171',
  };

  const bucket = (map: Record<string, Funnel>, key: string): Funnel =>
    (map[key] ??= { starts: 0, emails: 0, ctas: 0 });

  for (const d of dates) {
    const h = (await kv.hgetall<Record<string, string>>(`cpl:quiz:${d}`)) || {};
    for (const [field, raw] of Object.entries(h)) {
      const v = Number(raw) || 0;
      if (field === 'starts') total.starts += v;
      else if (field === 'emails') total.emails += v;
      else if (field === 'ctas') total.ctas += v;
      else if (field.startsWith('start:num:')) bucket(byNum, field.slice(10)).starts += v;
      else if (field.startsWith('email:num:')) bucket(byNum, field.slice(10)).emails += v;
      else if (field.startsWith('cta:num:')) bucket(byNum, field.slice(8)).ctas += v;
      else if (field.startsWith('start:')) bucket(bySource, field.slice(6)).starts += v;
      else if (field.startsWith('email:')) bucket(bySource, field.slice(6)).emails += v;
      else if (field.startsWith('cta:')) bucket(bySource, field.slice(4)).ctas += v;
    }
  }

  const sources = Object.fromEntries(
    Object.entries(bySource)
      .filter(([k]) => !/test/i.test(k))
      .sort((a, b) => b[1].starts - a[1].starts)
      .map(([k, f]) => [k, rates(f)])
  );
  const numbers = Object.fromEntries(
    Object.entries(byNum)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, f]) => [
        k,
        { phone: num2phone[k] || null, ...rates(f) },
      ])
  );

  return NextResponse.json({
    ok: true,
    date_range: { from: dates[dates.length - 1], to: dates[0], days },
    total: rates(total),
    by_source: sources,
    by_num: numbers,
    note:
      'email_rate = completed→gave email; cta_rate = gave email→tapped call; start_to_cta = overall. by_num maps to your 3 Télémaque dedicated numbers — cross-reference cta counts against per-number reversement to find the angle that drives paying calls.',
  });
}
