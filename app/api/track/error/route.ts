// Client-error sink for the paid landers.
//
// Why this exists: this project's defining failure was silent. The React
// quiz lost 91.6% of users between Q1 and Q2 on Xiaomi/Huawei in-app
// browsers and nothing surfaced it — no error, no alert, just a funnel step
// that emptied. We only found it weeks later by reading drop-off numbers.
//
// The landers are zero-JS now, but the ROOT LAYOUT still ships GTM, the
// glyphex tracker, the tel-click beacon and Next's own chunks, and the
// portraits load from a third-party origin. Any of those can fail on a
// hostile in-app browser. This endpoint gives that failure somewhere to go.
//
// Deliberately cheap: counts per day/page in KV, and only pings Discord for
// the first few of each distinct message per day so a crash loop on one
// device cannot flood the channel.

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';
import { Color, notifyDiscord } from '@/lib/discord';

export const dynamic = 'force-dynamic';

const TTL = 60 * 60 * 24 * 14;
/** Ping Discord only for the first N occurrences of a message on a given day. */
const ALERT_LIMIT = 3;

interface Body {
  message?: string;
  source?: string;
  line?: number;
  col?: number;
  stack?: string;
  page?: string;
  ua?: string;
}

/** Collapse volatile bits so the same fault groups into one counter. */
function fingerprint(msg: string): string {
  return msg
    .replace(/https?:\/\/\S+/g, '<url>')
    .replace(/\d+/g, 'N')
    .slice(0, 120);
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
      /* malformed — nothing to record */
    }
  }

  const message = (body.message || '').slice(0, 300);
  if (!message) return new NextResponse(null, { status: 204 });

  const page = (body.page || '').slice(0, 120);
  const ua = (body.ua || '').slice(0, 300);
  const stack = (body.stack || '').slice(0, 600);
  const fp = fingerprint(message);

  console.error('[track/error]', { message, page, source: body.source, line: body.line, ua });

  let count = 0;
  try {
    const k = `cpl:err:${parisDate()}`;
    count = await kv.hincrby(k, `${page}|${fp}`, 1);
    await kv.hincrby(k, 'total', 1);
    await kv.expire(k, TTL);
  } catch {
    /* best-effort */
  }

  // category:'lead' is the only tier that survives DISCORD_LEADS_ONLY (on by
  // default). A lander throwing errors during paid traffic is exactly as
  // urgent as a lead, so it belongs in that feed — but rate-limited hard.
  if (count > 0 && count <= ALERT_LIMIT) {
    await notifyDiscord({
      category: 'lead',
      color: Color.RED,
      title: '🐛 Erreur JS sur un lander',
      description: message,
      fields: [
        { name: 'Page', value: page || '(inconnue)', inline: true },
        { name: 'Occurrence', value: `${count}/jour`, inline: true },
        ...(body.source ? [{ name: 'Fichier', value: `${body.source}:${body.line ?? '?'}`, inline: false }] : []),
        ...(stack ? [{ name: 'Stack', value: stack.slice(0, 900), inline: false }] : []),
        { name: 'User Agent', value: ua || '(vide)' },
      ],
    });
  }

  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
