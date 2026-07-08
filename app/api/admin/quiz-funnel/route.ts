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
  emailCtas: number; // calls from the relance emails (via /appel)
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

  const total: Funnel = { starts: 0, emails: 0, ctas: 0, emailCtas: 0 };
  const steps: Record<string, number> = {};
  const bySource: Record<string, Funnel> = {};
  const byNum: Record<string, Funnel> = {};
  const num2phone: Record<string, string> = {
    '1': '0423090950',
    '2': '0484200203',
    '3': '0175111171',
  };

  const bucket = (map: Record<string, Funnel>, key: string): Funnel =>
    (map[key] ??= { starts: 0, emails: 0, ctas: 0, emailCtas: 0 });

  for (const d of dates) {
    const h = (await kv.hgetall<Record<string, string>>(`cpl:quiz:${d}`)) || {};
    for (const [field, raw] of Object.entries(h)) {
      const v = Number(raw) || 0;
      if (field === 'starts') total.starts += v;
      else if (field === 'emails') total.emails += v;
      else if (field === 'ctas') total.ctas += v;
      else if (field === 'emailctas') total.emailCtas += v;
      else if (field.startsWith('step:')) steps[field.slice(5)] = (steps[field.slice(5)] || 0) + v;
      else if (field.startsWith('emailcta:num:')) bucket(byNum, field.slice(13)).emailCtas += v;
      else if (field.startsWith('start:num:')) bucket(byNum, field.slice(10)).starts += v;
      else if (field.startsWith('email:num:')) bucket(byNum, field.slice(10)).emails += v;
      else if (field.startsWith('cta:num:')) bucket(byNum, field.slice(8)).ctas += v;
      else if (field.startsWith('start:')) bucket(bySource, field.slice(6)).starts += v;
      else if (field.startsWith('email:')) bucket(bySource, field.slice(6)).emails += v;
      else if (field.startsWith('cta:')) bucket(bySource, field.slice(4)).ctas += v;
    }
  }

  // Noise = test entries, my diagnostics, or an UNSUBSTITUTED macro like
  // "{source}" (MGID ad-review/preview and hand-loaded URLs never fill macros —
  // those aren't real clicks). Drop them so the funnel reflects real traffic.
  const isNoise = (s: string) =>
    /test/i.test(s) || /diag/i.test(s) || /^\{.*\}$/.test(s);

  const cleanEntries = Object.entries(bySource).filter(([k]) => !isNoise(k));

  // Honest totals = sum of non-noise sources. Each start writes both the total
  // and the per-source field, so these reconcile. emailCtas has no source key.
  const cleanTotal: Funnel = { starts: 0, emails: 0, ctas: 0, emailCtas: total.emailCtas };
  for (const [, f] of cleanEntries) {
    cleanTotal.starts += f.starts;
    cleanTotal.emails += f.emails;
    cleanTotal.ctas += f.ctas;
  }
  const excludedLoads = total.starts - cleanTotal.starts;

  // Ordered drop-off: exactly where the visitors go. drop_from_prev_pct is the
  // share lost at THAT step — the biggest number is the bottleneck.
  const stepSeq: Array<[string, number]> = [
    ['1_load', cleanTotal.starts],
    ['2_q1', steps.q1 || 0],
    ['3_q2', steps.q2 || 0],
    ['4_q3', steps.q3 || 0],
    ['5_q4', steps.q4 || 0],
    ['6_q5', steps.q5 || 0],
    ['7_email_view', steps.email_view || 0],
    ['8_email_submit', cleanTotal.emails],
    ['9_result_view', steps.result_view || 0],
    ['10_cta_tap', cleanTotal.ctas],
  ];
  const loads = cleanTotal.starts || 1;
  const funnelSteps = stepSeq.map(([name, count], i) => {
    const prev = i === 0 ? count : stepSeq[i - 1][1];
    return {
      step: name,
      count,
      pct_of_load: Number(((count / loads) * 100).toFixed(1)),
      drop_from_prev_pct:
        i === 0 || prev === 0 ? 0 : Number((((prev - count) / prev) * 100).toFixed(1)),
    };
  });

  const sources = Object.fromEntries(
    cleanEntries
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
    total: rates(cleanTotal),
    excluded_noise_loads: excludedLoads,
    funnel_steps: funnelSteps,
    by_source: sources,
    by_num: numbers,
    note:
      'email_rate = completed→gave email; cta_rate = gave email→tapped call; start_to_cta = overall. by_num maps to your 3 Télémaque dedicated numbers — cross-reference cta counts against per-number reversement to find the angle that drives paying calls.',
  });
}
