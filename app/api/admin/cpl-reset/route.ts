// One-off cleanup: scrub test-created CPL entries (widget/teaser fields
// containing "test") for a date and re-sync the daily lead count to the real
// remaining total. Removes verification pollution (TESTWIDGET, TESTAD_A1,
// KVTEST, etc.) without touching real leads.
//
// Usage: /api/admin/cpl-reset?key=<ADMIN_KEY or CRON_SECRET>&confirm=1[&date=YYYY-MM-DD]

import { NextRequest, NextResponse } from 'next/server';
import { cleanupTestEntries, parisDate } from '@/lib/cplStats';

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
  if (sp.get('confirm') !== '1') {
    return NextResponse.json(
      { ok: false, error: 'add &confirm=1 to run the cleanup' },
      { status: 400 }
    );
  }
  const dateParam = sp.get('date');
  if (dateParam && !DATE_RE.test(dateParam)) {
    return NextResponse.json(
      { ok: false, error: 'date must be YYYY-MM-DD' },
      { status: 400 }
    );
  }
  const date = dateParam || parisDate();
  const result = await cleanupTestEntries(date);
  return NextResponse.json({ ok: true, date, ...result });
}
