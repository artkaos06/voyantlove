// Quiz funnel beacon receiver.
//
// The /lp/lecture-amour quiz fires 'start' (on load) and 'cta' (on offer
// handoff). We log both and increment durable daily counters in KV so the
// funnel is measurable: start → cta conversion rate, per source. No Discord
// (these aren't leads; leads-only mode would suppress them anyway).
//
// Keys: cpl:quiz:<date> hash → { starts, ctas } and per-source variants.

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

const TTL = 60 * 60 * 24 * 40;

interface Body {
  event?: 'start' | 'cta';
  tracking?: Record<string, string>;
  answers?: Record<string, string>;
}

async function handle(request: NextRequest): Promise<NextResponse> {
  let body: Body = {};
  try {
    body = (await request.json()) as Body;
  } catch {
    try {
      const t = await request.text();
      if (t) body = JSON.parse(t) as Body;
    } catch {
      /* ignore malformed */
    }
  }

  const event = body.event === 'cta' ? 'cta' : 'start';
  const source = (body.tracking?.source || 'direct').slice(0, 60);
  const num = (body.tracking?.num || '').slice(0, 8);

  console.log('[track/quiz]', {
    event,
    source,
    answers: body.answers || {},
    tracking: body.tracking || {},
    at: new Date().toISOString(),
  });

  try {
    const date = parisDate();
    const k = `cpl:quiz:${date}`;
    await kv.hincrby(k, event === 'cta' ? 'ctas' : 'starts', 1);
    await kv.hincrby(k, `${event}:${source}`, 1);
    if (num) await kv.hincrby(k, `${event}:num:${num}`, 1);
    await kv.expire(k, TTL);
  } catch {
    /* best-effort */
  }

  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
export async function GET(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
