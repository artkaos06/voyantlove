// Quiz blocklist — turns per-source email-lead attribution into an MGID-ready
// kill-list, no spend feed required.
//
// Every quiz email is attributed to its MGID {source} (widget). A widget that
// pulled real traffic but produced ZERO email leads is clear waste — starts are
// a fair proxy for spend at similar CPCs. This aggregates per-source over `days`
// and flags widgets with starts ≥ min_starts and 0 emails; &format=csv exports
// the source names for MGID's blocklist import.
//
// Usage:
//   /api/admin/quiz-blocklist?key=<ADMIN_KEY|CRON_SECRET>[&days=3][&min_starts=15]
//     → JSON review (kill candidates + weak converters)
//   ...&format=csv  → text/csv, one source per line, ready to import

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

// Noise = tests, diagnostics, or an unsubstituted macro like "{source}".
const isNoise = (s: string) =>
  /test/i.test(s) || /diag/i.test(s) || /^\{.*\}$/.test(s);

interface Row {
  source: string;
  starts: number;
  emails: number;
  ctas: number;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;
  if (!isAuthorized(sp.get('key'))) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const days = Math.min(Math.max(Number(sp.get('days') || '3'), 1), 30);
  // A fair test: how many quiz loads a widget must deliver before 0 leads counts
  // as a verdict (not just bad luck). Default 15.
  const minStarts = Math.max(Number(sp.get('min_starts') || '15'), 1);

  const dates = Array.from({ length: days }, (_, i) =>
    parisDate(new Date(Date.now() - i * 86_400_000))
  );

  const agg: Record<string, Row> = {};
  const get = (s: string): Row =>
    (agg[s] ??= { source: s, starts: 0, emails: 0, ctas: 0 });

  for (const d of dates) {
    const h = (await kv.hgetall<Record<string, string>>(`cpl:quiz:${d}`)) || {};
    for (const [field, raw] of Object.entries(h)) {
      const v = Number(raw) || 0;
      // Only the per-source fields (skip totals + per-num + emailcta buckets).
      if (field.startsWith('start:') && !field.startsWith('start:num:')) {
        get(field.slice(6)).starts += v;
      } else if (field.startsWith('email:') && !field.startsWith('email:num:')) {
        get(field.slice(6)).emails += v;
      } else if (field.startsWith('cta:') && !field.startsWith('cta:num:')) {
        get(field.slice(4)).ctas += v;
      }
    }
  }

  const rows = Object.values(agg).filter((r) => !isNoise(r.source));

  // Clear waste: enough traffic to judge, zero email leads.
  const kill = rows
    .filter((r) => r.starts >= minStarts && r.emails === 0)
    .sort((a, b) => b.starts - a.starts);

  // Converts, but weakly (< 1%). Judgment call — surfaced, not auto-killed.
  const weak = rows
    .filter((r) => r.emails > 0 && r.starts >= minStarts && r.emails / r.starts < 0.01)
    .map((r) => ({ ...r, email_rate_pct: Number(((r.emails / r.starts) * 100).toFixed(2)) }))
    .sort((a, b) => b.starts - a.starts);

  if (sp.get('format') === 'csv') {
    const csv = ['source', ...kill.map((r) => r.source)].join('\n');
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="mgid-blocklist-${dates[0]}.csv"`,
      },
    });
  }

  return NextResponse.json({
    ok: true,
    date_range: { from: dates[dates.length - 1], to: dates[0], days },
    min_starts: minStarts,
    kill_count: kill.length,
    kill_candidates_zero_lead: kill,
    weak_converters: weak,
    note:
      'kill_candidates_zero_lead = ≥ min_starts quiz loads with 0 email leads (clear waste — safe to block). weak_converters = converts but under 1% email rate (judgment call). starts proxy for spend. Append &format=csv to download the kill-list for MGID import.',
  });
}
