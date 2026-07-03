// KV connectivity diagnostic.
//
// Reports which KV/Upstash env vars are present in the running deployment
// (booleans only — never the values). Lets us confirm a newly-created
// Vercel KV / Upstash store is actually wired to the project and live in
// this deployment, and tells us which client + env names to use for the
// durable CPL counter.
//
// Usage: /api/admin/kv-check?key=<ADMIN_KEY or CRON_SECRET>

import { NextRequest, NextResponse } from 'next/server';
import { getCplLeadCount, parisDate } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

function isAuthorized(key: string | null): boolean {
  if (!key) return false;
  const adminKey = process.env.ADMIN_KEY;
  const cronSecret = process.env.CRON_SECRET;
  return (!!adminKey && key === adminKey) || (!!cronSecret && key === cronSecret);
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request.nextUrl.searchParams.get('key'))) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const has = (name: string) => Boolean(process.env[name]);

  const env = {
    // Vercel KV (native) — used by @vercel/kv
    KV_URL: has('KV_URL'),
    KV_REST_API_URL: has('KV_REST_API_URL'),
    KV_REST_API_TOKEN: has('KV_REST_API_TOKEN'),
    KV_REST_API_READ_ONLY_TOKEN: has('KV_REST_API_READ_ONLY_TOKEN'),
    // Upstash marketplace integration — used by @upstash/redis
    UPSTASH_REDIS_REST_URL: has('UPSTASH_REDIS_REST_URL'),
    UPSTASH_REDIS_REST_TOKEN: has('UPSTASH_REDIS_REST_TOKEN'),
    REDIS_URL: has('REDIS_URL'),
  };

  const anyPresent = Object.values(env).some(Boolean);

  // Live read from KV — proves the client can actually connect + read, not
  // just that env vars exist. Shows today's (Paris) CPL lead count.
  const today = parisDate();
  const cplLeadsToday = await getCplLeadCount(today);

  return NextResponse.json({
    ok: true,
    kv_connected: anyPresent,
    env_present: env,
    cpl_leads_today: { date: today, count: cplLeadsToday },
    hint: anyPresent
      ? 'KV env vars detected — durable CPL counter active.'
      : 'No KV env vars in this deployment. Either the store is not connected to this project, or a redeploy is needed after connecting it.',
  });
}
