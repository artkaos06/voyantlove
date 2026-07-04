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
  parisDate,
} from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

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

  const [widgetCounts, teaserCounts] = await Promise.all([
    getWidgetLeadCounts(date),
    getTeaserLeadCounts(date),
  ]);

  // Sort each by lead count descending — the converters first.
  const widgets = Object.entries(widgetCounts)
    .map(([widget, leads]) => ({ widget, leads: Number(leads) || 0 }))
    .sort((a, b) => b.leads - a.leads);
  const creatives = Object.entries(teaserCounts)
    .map(([teaser, leads]) => ({ teaser, leads: Number(leads) || 0 }))
    .sort((a, b) => b.leads - a.leads);
  const totalLeads = widgets.reduce((s, w) => s + w.leads, 0);

  return NextResponse.json({
    ok: true,
    date,
    total_leads: totalLeads,
    widgets,
    creatives,
    note:
      'Leads by MGID source (widgets) and ad (creatives, by teaser_id). A source/ad with real spend and 0 leads here is a cut candidate; ones with leads = keep/scale.',
  });
}
