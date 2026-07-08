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
  // Hard floor on traffic, but the real gate is min_expected below.
  const minStarts = Math.max(Number(sp.get('min_starts') || '15'), 1);
  // How many emails a source must have been *expected* to produce (at the site's
  // base rate) before "0 emails" is a verdict rather than noise. 3 ≈ a source
  // that should have converted 3 times and converted 0.
  const minExpected = Math.max(Number(sp.get('min_expected') || '3'), 1);

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

  // MGID's blocklist importer keys on source_id, not the readable {source} name.
  // Resolve names → ids from the map the tracker maintains.
  const [sourceIds, widgetIds] = await Promise.all([
    kv.hgetall<Record<string, string>>('cpl:sourceids'),
    kv.hgetall<Record<string, string>>('cpl:widgetids'),
  ]);
  const sidOf = (name: string) => (sourceIds || {})[name] || null;
  const widOf = (name: string) => (widgetIds || {})[name] || null;

  const rows = Object.values(agg).filter((r) => !isNoise(r.source));

  // Statistical gate. At a ~1% base conversion rate, a source with 22 loads is
  // *expected* to produce 0.2 emails — so "0 emails" there proves nothing, and
  // blocking on it is coin-flip logic that kills good sources. A zero only means
  // something once the source has had enough traffic to expect several emails.
  const totalStarts = rows.reduce((n, r) => n + r.starts, 0);
  const totalEmails = rows.reduce((n, r) => n + r.emails, 0);
  const baseRate = totalStarts > 0 ? totalEmails / totalStarts : 0;
  const expectedOf = (r: Row) => r.starts * baseRate;

  const decorate = (r: Row) => ({
    ...r,
    email_rate_pct: r.starts ? Number(((r.emails / r.starts) * 100).toFixed(2)) : 0,
    expected_emails: Number(expectedOf(r).toFixed(2)),
  });

  // Clear waste: should have produced ≥ min_expected emails, produced zero.
  const kill = rows
    .filter((r) => r.emails === 0 && r.starts >= minStarts && expectedOf(r) >= minExpected)
    .sort((a, b) => b.starts - a.starts);

  // Converts, but at under half the site's base rate — and on enough data to say so.
  const weak = rows
    .filter(
      (r) => r.emails > 0 && expectedOf(r) >= minExpected && r.emails / r.starts < baseRate * 0.5
    )
    .map(decorate)
    .sort((a, b) => b.starts - a.starts);

  // Zero emails, but too little traffic to conclude anything. Do NOT block these.
  const insufficient = rows
    .filter((r) => r.emails === 0 && expectedOf(r) < minExpected)
    .map(decorate)
    .sort((a, b) => b.starts - a.starts);

  const withIds = kill.map((r) => ({
    ...decorate(r),
    source_id: sidOf(r.source),
    widget_id: widOf(r.source),
  }));
  const unresolved = withIds.filter((r) => !r.source_id).map((r) => r.source);

  if (sp.get('format') === 'csv') {
    // IDs only — that's what MGID's importer accepts. Names are unfindable there.
    const ids = withIds.map((r) => r.source_id).filter(Boolean) as string[];
    const csv = ['source_id', ...ids].join('\n');
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
    min_expected: minExpected,
    base_email_rate_pct: Number((baseRate * 100).toFixed(2)),
    kill_count: kill.length,
    kill_candidates_zero_lead: withIds,
    weak_converters: weak.map((r) => ({ ...r, source_id: sidOf(r.source) })),
    insufficient_data_do_not_block: insufficient,
    unresolved_ids: unresolved,
    note:
      'kill_candidates_zero_lead = 0 emails on enough traffic that ≥ min_expected were expected at the site base rate (a real verdict, not noise). insufficient_data_do_not_block = 0 emails but too little traffic to conclude — blocking these is coin-flip logic and will kill good sources. weak_converters = converts at under half the base rate, on enough data to say so. CSV exports source_id (what MGID imports). unresolved_ids = sources seen before the {source_id} macro was live — one fresh click resolves them.',
  });
}
