// Leads-per-widget readout (CPL native optimization).
//
// MGID's own report can't show leads by source (we run "Macros only"), so we
// join it ourselves via KV: /api/go/cpl stores cid → widget at click, and
// /api/postback/cpl tallies leads per widget. This endpoint returns that
// tally so you can cross-reference against MGID's spend-per-source CSV and
// blacklist widgets that spent money but produced zero leads.
//
// Usage: /api/admin/cpl-widgets?key=<ADMIN_KEY or CRON_SECRET>[&date=YYYY-MM-DD]
//   date defaults to today (Europe/Paris).

import { NextRequest, NextResponse } from 'next/server';
import {
  getWidgetLeadCounts,
  getTeaserLeadCounts,
  getSourceSpend,
  getTeaserSpend,
  parisDate,
} from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// {click_price} unit → euros. 100 if MGID sends cents, 1 if euros. Calibrated
// by comparing the readout's total_spent to MGID's reported spend.
const PRICE_DIVISOR = Number(process.env.CPL_CLICK_PRICE_DIVISOR || '100');

const CPL_PAYOUT_EUR = Number(process.env.CPL_PAYOUT_EUR || '2.30');

/** Merge a leads map and a raw-spend map into sorted rows with economics. */
function merge(
  leadsMap: Record<string, number>,
  spendMap: Record<string, number>,
  keyName: 'widget' | 'teaser'
) {
  const keys = new Set([...Object.keys(leadsMap), ...Object.keys(spendMap)]);
  return Array.from(keys)
    .map((k) => {
      const leads = Number(leadsMap[k]) || 0;
      const spent = (Number(spendMap[k]) || 0) / PRICE_DIVISOR;
      const revenue = leads * CPL_PAYOUT_EUR;
      return {
        [keyName]: k,
        leads,
        spent_eur: Number(spent.toFixed(2)),
        cost_per_lead: leads > 0 ? Number((spent / leads).toFixed(2)) : null,
        profit_eur: Number((revenue - spent).toFixed(2)),
      };
    })
    .sort((a, b) => b.spent_eur - a.spent_eur);
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

  const dateParam = sp.get('date');
  if (dateParam && !DATE_RE.test(dateParam)) {
    return NextResponse.json(
      { ok: false, error: 'date must be YYYY-MM-DD' },
      { status: 400 }
    );
  }
  const date = dateParam || parisDate();

  const [widgetCounts, teaserCounts, sourceSpend, teaserSpend] =
    await Promise.all([
      getWidgetLeadCounts(date),
      getTeaserLeadCounts(date),
      getSourceSpend(date),
      getTeaserSpend(date),
    ]);

  const widgets = merge(widgetCounts, sourceSpend, 'widget');
  const creatives = merge(teaserCounts, teaserSpend, 'teaser');

  const totalLeads = widgets.reduce((s, w) => s + w.leads, 0);
  const totalSpent = Number(
    widgets.reduce((s, w) => s + w.spent_eur, 0).toFixed(2)
  );

  return NextResponse.json({
    ok: true,
    date,
    total_leads: totalLeads,
    total_spent: totalSpent,
    total_revenue: Number((totalLeads * CPL_PAYOUT_EUR).toFixed(2)),
    blended_cost_per_lead:
      totalLeads > 0 ? Number((totalSpent / totalLeads).toFixed(2)) : null,
    widgets,
    creatives,
    note:
      'Per source (widget) and per ad (creative): leads, spent, cost_per_lead, profit. Cut any row with real spend and cost_per_lead above the €2.30 payout (or 0 leads); scale rows with positive profit. If total_spent here ≠ MGID reported spend, set CPL_CLICK_PRICE_DIVISOR (100=cents, 1=euros).',
  });
}
