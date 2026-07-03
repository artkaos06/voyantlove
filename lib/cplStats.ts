// Durable CPL lead counter — server-only.
//
// Why this exists: the daily digest's in-memory counters (lib/digestState)
// don't survive Vercel's serverless model — the postback that records a lead
// runs on a different instance than the cron that builds the report, so CPL
// leads never showed up. This persists the count in Vercel KV instead, keyed
// by Europe/Paris date (Goracash + the network operate on French time).
//
// One key per day: `cpl:leads:YYYY-MM-DD` = integer lead count. Revenue is
// derived (count × CPL_PAYOUT_EUR) so we only maintain one counter. Keys
// auto-expire after 40 days to avoid unbounded growth.
//
// All operations are best-effort: a KV outage must never break the postback
// (the lead is still pinged to Discord and logged) nor the digest.

import { kv } from '@vercel/kv';

const TTL_SECONDS = 60 * 60 * 24 * 40; // 40 days

/** YYYY-MM-DD in Europe/Paris (fr-CA locale formats as ISO date). */
export function parisDate(d: Date = new Date()): string {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(d);
}

function key(date: string): string {
  return `cpl:leads:${date}`;
}

/** Increment today's (Paris) CPL lead counter. Best-effort. */
export async function recordCplLead(): Promise<void> {
  try {
    const k = key(parisDate());
    await kv.incr(k);
    // Refresh TTL on every write — cheap, keeps the key alive for 40 days
    // from the last lead, then it expires on its own.
    await kv.expire(k, TTL_SECONDS);
  } catch {
    // Swallow — durable counting is a nice-to-have, not on the critical path.
  }
}

/** Read the CPL lead count for a given Paris date (YYYY-MM-DD). */
export async function getCplLeadCount(date: string): Promise<number> {
  try {
    const n = await kv.get<number>(key(date));
    return typeof n === 'number' ? n : 0;
  } catch {
    return 0;
  }
}
