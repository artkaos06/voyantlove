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

// ---------------------------------------------------------------------------
// Per-widget (MGID source/placement) lead attribution.
//
// MGID's own report can't show leads-per-widget (we run "Macros only", so it
// has no conversion data). But ra11.me round-trips our cid on the lead, so we
// can join it ourselves: store cid → widget at click-out, look it up on the
// lead postback, and tally leads per widget. That turns blind viewability-
// proxy blacklisting into "this source spent €X and produced 0 leads → cut".
//
// Keys:
//   cpl:click:<cid>       → { widget, wname, teaser }   (3-day TTL — leads
//                            on this SOI offer land within minutes/hours)
//   cpl:widgets:<date>    → Redis hash { <widget label>: leadCount }
// ---------------------------------------------------------------------------

const CLICK_TTL_SECONDS = 60 * 60 * 24 * 3; // 3 days

export interface ClickContext {
  widget?: string;
  wname?: string;
  teaser?: string;
}

/** Store the click's widget/creative context under its cid. Best-effort. */
export async function storeClickContext(
  cid: string,
  ctx: ClickContext
): Promise<void> {
  if (!ctx.widget && !ctx.wname) return; // nothing worth storing
  try {
    await kv.set(`cpl:click:${cid}`, ctx, { ex: CLICK_TTL_SECONDS });
  } catch {
    // best-effort
  }
}

/**
 * On a lead, resolve its cid back to the click's context and increment both
 * the daily widget (source) counter AND the daily teaser (creative) counter.
 * Returns human labels for each so the postback can show them in the Discord
 * ping. One KV read serves both tallies.
 */
export async function attributeLead(
  cid: string
): Promise<{ widget: string | null; teaser: string | null }> {
  try {
    const ctx = await kv.get<ClickContext>(`cpl:click:${cid}`);
    if (!ctx) return { widget: null, teaser: null };
    const date = parisDate();
    const widget = ctx.wname || ctx.widget || null;
    const teaser = ctx.teaser || null;
    if (widget) {
      const k = `cpl:widgets:${date}`;
      await kv.hincrby(k, widget, 1);
      await kv.expire(k, TTL_SECONDS);
    }
    if (teaser) {
      const k = `cpl:teasers:${date}`;
      await kv.hincrby(k, teaser, 1);
      await kv.expire(k, TTL_SECONDS);
    }
    return { widget, teaser };
  } catch {
    return { widget: null, teaser: null };
  }
}

/** Leads-per-widget (MGID source) for a Paris date, as { label: count }. */
export async function getWidgetLeadCounts(
  date: string
): Promise<Record<string, number>> {
  try {
    const h = await kv.hgetall<Record<string, number>>(`cpl:widgets:${date}`);
    return h || {};
  } catch {
    return {};
  }
}

/** Leads-per-creative (teaser_id) for a Paris date, as { teaser: count }. */
export async function getTeaserLeadCounts(
  date: string
): Promise<Record<string, number>> {
  try {
    const h = await kv.hgetall<Record<string, number>>(`cpl:teasers:${date}`);
    return h || {};
  } catch {
    return {};
  }
}

/**
 * Remove test-created entries (any widget/teaser field containing "test",
 * case-insensitive) for a date, then re-sync the daily lead count to the sum
 * of the remaining real widget leads. Used to scrub verification pollution.
 */
export async function cleanupTestEntries(date: string): Promise<{
  removedWidgets: string[];
  removedTeasers: string[];
  realLeadCount: number;
}> {
  const removedWidgets: string[] = [];
  const removedTeasers: string[] = [];
  try {
    const wk = `cpl:widgets:${date}`;
    const widgets = (await kv.hgetall<Record<string, number>>(wk)) || {};
    for (const field of Object.keys(widgets)) {
      if (/test/i.test(field)) {
        await kv.hdel(wk, field);
        removedWidgets.push(field);
      }
    }
    const tk = `cpl:teasers:${date}`;
    const teasers = (await kv.hgetall<Record<string, number>>(tk)) || {};
    for (const field of Object.keys(teasers)) {
      if (/test/i.test(field)) {
        await kv.hdel(tk, field);
        removedTeasers.push(field);
      }
    }
    const remaining = (await kv.hgetall<Record<string, number>>(wk)) || {};
    const realLeadCount = Object.values(remaining).reduce(
      (s, v) => s + (Number(v) || 0),
      0
    );
    await kv.set(key(date), realLeadCount, { ex: TTL_SECONDS });
    return { removedWidgets, removedTeasers, realLeadCount };
  } catch {
    return { removedWidgets, removedTeasers, realLeadCount: 0 };
  }
}
