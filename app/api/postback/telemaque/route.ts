// Télémaque conversion postback receiver.
//
// Configure a DEDICATED conversion pixel in the Télémaque affiliation back-office
// (Paramètres d'intégration → Suivi de conversion) pointing here, with their
// macros substituted:
//
//   https://www.voyantlove.fr/api/postback/telemaque
//     ?secret=<TELEMAQUE_POSTBACK_SECRET>
//     &subid=${SUBID}      ← the id WE passed into the offer link (for attribution)
//     &payout=${PAYOUT}    ← the actual commission for this conversion (EUR)
//
// Télémaque fires this when a conversion happens, handing back the real payout.
// This turns the otherwise blind RevShare into a real-time revenue signal: a
// Discord ping with the € amount the instant money is earned, plus durable daily
// revenue counters — instead of waiting for the monthly reversement.
//
// Attribution ceiling depends on ${SUBID}:
//   - If we passed our click id as subid (a WEB clickthrough link), we can later
//     resolve it → widget/creative for per-click revenue attribution.
//   - Phone conversions carry no subid, so those land as unattributed revenue
//     (still counted; angle-level attribution stays via the dedicated numbers).

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { Color, notifyDiscord } from '@/lib/discord';
import { parisDate } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

const TTL = 60 * 60 * 24 * 90; // keep revenue history 90 days

function isAuthorized(secret: string | null): boolean {
  const expected = process.env.TELEMAQUE_POSTBACK_SECRET;
  // Permissive until a secret is configured, so it works on first setup.
  if (!expected) return true;
  if (!secret || secret.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < secret.length; i++) {
    diff |= secret.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

async function handle(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;

  if (!isAuthorized(sp.get('secret'))) {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '(unknown)';
    console.warn('[postback/telemaque] unauthorized', { ip, keys: Array.from(sp.keys()) });
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const subid = sp.get('subid')?.slice(0, 80) || null;
  // Payout may arrive with a comma decimal or currency noise — sanitize.
  const payoutRaw = (sp.get('payout') || '').replace(',', '.').replace(/[^\d.]/g, '');
  const payout = Number(payoutRaw) || 0;

  console.log('[postback/telemaque] conversion', {
    subid,
    payout,
    at: new Date().toISOString(),
  });

  // Durable daily revenue counters (survive serverless cold starts).
  try {
    const k = `tlm:conv:${parisDate()}`;
    await kv.hincrby(k, 'conversions', 1);
    if (payout > 0) await kv.hincrbyfloat(k, 'revenue', payout);
    if (subid) await kv.hincrbyfloat(k, `rev:subid:${subid}`, payout);
    await kv.expire(k, TTL);
  } catch {
    /* best-effort — never fail the postback */
  }

  await notifyDiscord({
    category: 'lead',
    color: Color.GREEN,
    title: `💰 Télémaque · conversion (€${payout.toFixed(2)})`,
    description:
      'A conversion postbacked from Télémaque. Payout is the real commission for this consultation.',
    fields: [
      { name: 'Payout', value: `€${payout.toFixed(2)}`, inline: true },
      { name: 'SubID', value: subid || '(none — phone/unattributed)', inline: true },
    ],
  });

  // Networks just need a 2xx to mark the postback delivered.
  return NextResponse.json({ ok: true });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
