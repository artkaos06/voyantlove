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
  event?: 'start' | 'cta' | 'emailcall' | 'step';
  tracking?: Record<string, string>;
  answers?: Record<string, string>;
}

// Whitelisted so a spoofed beacon can't blow up the hash's key cardinality.
const STEP_NAMES = new Set([
  'q1', 'q2', 'q3', 'q4', 'q5', 'email_view', 'result_view',
]);

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

  const event =
    body.event === 'cta'
      ? 'cta'
      : body.event === 'emailcall'
        ? 'emailcall'
        : body.event === 'step'
          ? 'step'
          : 'start';
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
    if (event === 'emailcall') {
      // Email-driven calls tracked separately (they don't go through the quiz).
      await kv.hincrby(k, 'emailctas', 1);
      if (num) await kv.hincrby(k, `emailcta:num:${num}`, 1);
    } else if (event === 'step') {
      // Drop-off only — must not touch starts/ctas or the funnel maths shifts.
      const stepName = (body.tracking?.step || '').slice(0, 20);
      if (STEP_NAMES.has(stepName)) await kv.hincrby(k, `step:${stepName}`, 1);
    } else {
      await kv.hincrby(k, event === 'cta' ? 'ctas' : 'starts', 1);
      await kv.hincrby(k, `${event}:${source}`, 1);
      if (num) await kv.hincrby(k, `${event}:num:${num}`, 1);
    }
    await kv.expire(k, TTL);

    // Name → ID map, so the blocklist can export what MGID's importer actually
    // keys on (source_id). {source} gives a readable name; MGID's Sources tab
    // shows only IDs. Stable per widget, so a plain (undated) hash is fine.
    const sid = (body.tracking?.sid || '').slice(0, 32);
    const widget = (body.tracking?.widget || '').slice(0, 32);
    if (event === 'start' && source && source !== 'direct') {
      if (sid) await kv.hset('cpl:sourceids', { [source]: sid });
      if (widget) await kv.hset('cpl:widgetids', { [source]: widget });
    }
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

  // Email-nurture call: someone tapped the call button in a relance email.
  if (event === 'emailcall') {
    const tr = body.tracking || {};
    await notifyDiscord({
      category: 'lead',
      color: Color.PURPLE,
      title: '📧 Email → appel lancé',
      description: `Numéro composé : **${tr.dialed || '—'}**`,
      fields: [
        { name: 'Canal', value: tr.source || 'email', inline: true },
        { name: 'Numéro', value: `num=${num || '—'}`, inline: true },
      ],
    });
  }

  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
export async function GET(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
