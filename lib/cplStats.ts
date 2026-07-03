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
 * On a lead, resolve its cid back to the widget that produced it and
 * increment that widget's daily lead counter. Returns a human label for
 * the widget (name preferred, else id) so the postback can show it in the
 * Discord ping, or null if the click context wasn't found.
 */
export async function attributeLeadToWidget(cid: string): Promise<string | null> {
  try {
    const ctx = await kv.get<ClickContext>(`cpl:click:${cid}`);
    const label = ctx?.wname || ctx?.widget;
    if (!label) return null;
    const k = `cpl:widgets:${parisDate()}`;
    await kv.hincrby(k, label, 1);
    await kv.expire(k, TTL_SECONDS);
    return label;
  } catch {
    return null;
  }
}

/** Leads-per-widget for a Paris date, as { widgetLabel: count }. */
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
