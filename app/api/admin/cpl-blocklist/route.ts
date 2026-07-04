// Blocklist export — turns the CPL cost tracker into an MGID-importable list
// of money-losing sources.
//
// A source is a block candidate when, aggregated over the last `days`, it has
// spent at least `min_spend` € and produced ZERO leads (clear waste). With
// include_unprofitable=1, sources that DO convert but above the €2.30 payout
// are added too. Sources are keyed by MGID's {source} value (once the wname
// macro is live), so the output pastes straight into MGID's blocklist import.
//
// Usage:
//   /api/admin/cpl-blocklist?key=<key>[&days=3][&min_spend=2][&include_unprofitable=1]
//     → JSON review (candidates + converting-but-unprofitable)
//   ...&format=csv  → text/csv download, one source per line, ready to import

import { NextRequest, NextResponse } from 'next/server';
import {
  getWidgetLeadCounts,
  getSourceSpend,
  parisDate,
} from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

const PRICE_DIVISOR = Number(process.env.CPL_CLICK_PRICE_DIVISOR || '100');
const CPL_PAYOUT_EUR = Number(process.env.CPL_PAYOUT_EUR || '2.30');

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

  const days = Math.min(Math.max(Number(sp.get('days') || '3'), 1), 30);
  const minSpend = Math.max(Number(sp.get('min_spend') || '2'), 0);
  const includeUnprofitable = sp.get('include_unprofitable') === '1';

  // Aggregate leads + spend per source over the last `days` (Paris dates).
  const dates = Array.from({ length: days }, (_, i) =>
    parisDate(new Date(Date.now() - i * 86_400_000))
  );
  const leadAgg: Record<string, number> = {};
  const spendAgg: Record<string, number> = {};
  for (const d of dates) {
    const [leads, spend] = await Promise.all([
      getWidgetLeadCounts(d),
      getSourceSpend(d),
    ]);
    for (const [k, v] of Object.entries(leads)) leadAgg[k] = (leadAgg[k] || 0) + Number(v);
    for (const [k, v] of Object.entries(spend)) spendAgg[k] = (spendAgg[k] || 0) + Number(v);
  }

  const sources = new Set([...Object.keys(leadAgg), ...Object.keys(spendAgg)]);
  const zeroLead: Array<{ source: string; spent: number; leads: number }> = [];
  const unprofitable: Array<{
    source: string;
    spent: number;
    leads: number;
    cost_per_lead: number;
  }> = [];

  for (const s of sources) {
    if (/test/i.test(s)) continue; // skip verification leftovers
    const leads = leadAgg[s] || 0;
    const spent = (spendAgg[s] || 0) / PRICE_DIVISOR;
    if (spent < minSpend) continue; // not a fair test yet
    if (leads === 0) {
      zeroLead.push({ source: s, spent: Number(spent.toFixed(2)), leads });
    } else {
      const cpl = spent / leads;
      if (cpl > CPL_PAYOUT_EUR) {
        unprofitable.push({
          source: s,
          spent: Number(spent.toFixed(2)),
          leads,
          cost_per_lead: Number(cpl.toFixed(2)),
        });
      }
    }
  }

  zeroLead.sort((a, b) => b.spent - a.spent);
  unprofitable.sort((a, b) => b.spent - a.spent);

  // The block list = clear waste (spend + 0 leads), plus converting-but-
  // unprofitable only when explicitly requested.
  const toBlock = [
    ...zeroLead.map((r) => r.source),
    ...(includeUnprofitable ? unprofitable.map((r) => r.source) : []),
  ];

  if (sp.get('format') === 'csv') {
    const csv = ['source', ...toBlock].join('\n');
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
    min_spend: minSpend,
    payout: CPL_PAYOUT_EUR,
    block_count: toBlock.length,
    block_candidates_zero_lead: zeroLead,
    converting_but_unprofitable: unprofitable,
    note:
      'block_candidates_zero_lead = spent ≥ min_spend with 0 leads (clear waste — safe to block). converting_but_unprofitable = converts but above the payout (judgment call; add with include_unprofitable=1). Append &format=csv to download the block list for MGID import. Requires the {source} + {click_price} macros to be live + a day of data.',
  });
}
