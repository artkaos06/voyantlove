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
import { notifyDiscord, Color } from '@/lib/discord';

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

  // Real-time money signal: the CTA tap = a fully-converted lead. Email is
  // gated before the result, so reaching the call button means email captured
  // + call intent. One clean ping per conversion — the RevShare equivalent of
  // the old CPL lead ping. category:'lead' passes the leads-only gate.
  if (event === 'cta') {
    const tr = body.tracking || {};
    const ans = body.answers || {};
    await notifyDiscord({
      category: 'lead',
      color: Color.GREEN,
      title: '📞 Quiz · appel lancé (lead converti)',
      description: `Numéro composé : **${tr.dialed || '—'}**`,
      fields: [
        { name: 'Angle', value: `num=${num || '—'}`, inline: true },
        { name: 'Source', value: tr.wname || tr.source || source, inline: true },
        { name: 'Situation', value: ans.situation || '—', inline: true },
        { name: 'Question', value: ans.question || '—', inline: true },
        { name: 'Signe', value: ans.signe || '—', inline: true },
      ],
    });
  }

  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
export async function GET(request: NextRequest): Promise<NextResponse> {
  // Diagnostic: ?debug=<ADMIN_KEY> reports Discord config; add &ping=1 to fire a
  // real test ping so we can confirm end-to-end delivery.
  const sp = request.nextUrl.searchParams;
  const debug = sp.get('debug');
  if (debug && process.env.ADMIN_KEY && debug === process.env.ADMIN_KEY) {
    let pinged = false;
    if (sp.get('ping') === '1') {
      await notifyDiscord({
        category: 'lead',
        color: Color.GREEN,
        title: '🧪 Test · ping de vérification',
        description: 'Si vous voyez ceci, le webhook Discord fonctionne.',
      });
      pinged = true;
    }
    return NextResponse.json({
      ok: true,
      has_webhook: !!process.env.DISCORD_WEBHOOK_URL,
      leads_only: process.env.DISCORD_LEADS_ONLY !== '0',
      test_ping_sent: pinged,
    });
  }
  return handle(request);
}
