// Per-source tracking for the MGID angle landers (/lp/voyant-direct,
// /lp/il-elle-vous-aime, /lp/histoire-sophie).
//
// Deliberately a SEPARATE KV namespace from the quiz funnel's `cpl:quiz:*`.
// Those are different funnels with different conversion events; mixing them
// would make both readouts lie. Nothing here touches quiz keys.
//
// Loads are recorded SERVER-SIDE during render, not via a JS beacon. The
// landers are zero-JS by design because MGID's top FR sources are
// Xiaomi/Huawei in-app browsers that choke on hydration — a JS load beacon
// would systematically undercount exactly the traffic we most need to
// measure, making bad sources look small instead of bad.
//
// Tel taps still arrive via the sitewide beacon in app/layout.tsx (a tap
// can't be observed server-side), so tap counts CAN undercount on
// JS-hostile browsers. Read `load` as exact and `tel` as a floor.

import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';

export const LP_TTL = 60 * 60 * 24 * 40;

/** Landers we accept — an unknown value is dropped so a spoofed or mistyped
 *  beacon can't blow up the hash's key cardinality. */
export const LANDERS = new Set(['voyant-direct', 'il-elle-vous-aime', 'histoire-sophie']);

export function lpKey(date: string = parisDate()): string {
  return `cpl:lp:${date}`;
}

type SP = Record<string, string | string[] | undefined>;

/** First value of a possibly-repeated query param, trimmed and length-capped. */
export function one(sp: SP, k: string, max = 60): string {
  const v = sp[k];
  const s = Array.isArray(v) ? v[0] : v;
  return (s || '').toString().slice(0, max);
}

/**
 * MGID sends `{source}` (readable name) and `{source_id}` (what its blocklist
 * importer keys on). An UNSUBSTITUTED macro like "{source}" means the click
 * never came through a real MGID placement (ad preview, hand-typed URL), so
 * it's normalised to 'direct' rather than polluting the source breakdown.
 */
export function normaliseSource(raw: string): string {
  const s = raw.trim();
  if (!s) return 'direct';
  if (/^\{.*\}$/.test(s)) return 'direct';
  return s.replace(/\|/g, '/').slice(0, 60); // '|' is our field separator
}

export interface LpTracking {
  source: string;
  sid: string;
  clickId: string;
  creativeId: string;
}

export function readTracking(sp: SP): LpTracking {
  return {
    source: normaliseSource(one(sp, 'source')),
    sid: one(sp, 'sid', 32),
    // MGID's tracking-link builder emits `adclid={click_id}` by default, so
    // the param on the wire is `adclid` even though the macro is named
    // {click_id}. Accept either: a mismatch here is invisible — attribution
    // and the conversion relay would just silently stay empty.
    clickId: one(sp, 'click_id', 64) || one(sp, 'adclid', 64),
    creativeId: one(sp, 'creative_id', 32),
  };
}

/**
 * Increment one funnel event. `event` is 'load' or 'tel'.
 * Best-effort: never throws — a KV outage must not break a paid lander.
 */
export async function recordLpEvent(
  event: 'load' | 'tel',
  lander: string,
  t: LpTracking
): Promise<void> {
  if (!LANDERS.has(lander)) return;
  try {
    const k = lpKey();
    const p = kv.pipeline();
    p.hincrby(k, event, 1);
    p.hincrby(k, `${event}:${lander}`, 1);
    p.hincrby(k, `${event}:${lander}|${t.source}`, 1);
    if (t.creativeId) p.hincrby(k, `${event}:cr:${t.creativeId}`, 1);
    p.expire(k, LP_TTL);
    // Name → ID map so a blocklist export can emit source_id, which is what
    // MGID's importer actually accepts. Shared with the quiz tooling.
    if (t.sid && t.source !== 'direct') p.hset('cpl:sourceids', { [t.source]: t.sid });
    await p.exec();
  } catch {
    /* best-effort */
  }
}

/** Convenience for server components: read params and record the load. */
export async function recordLanderLoad(lander: string, sp: SP): Promise<void> {
  await recordLpEvent('load', lander, readTracking(sp));
}
