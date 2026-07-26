// Email capture for the MGID angle landers → Brevo.
//
// Accepts a NATIVE form POST (application/x-www-form-urlencoded), not JSON,
// so the form works with JavaScript disabled or broken — the same constraint
// that shaped the landers themselves. On success it 303-redirects back to the
// lander with ?merci=1, which the page renders as a confirmation. That's the
// classic POST/Redirect/GET pattern: no JS, and a refresh can't resubmit.
//
// This is NOT the gate that killed the old funnel. There, the email wall sat
// between the quiz and the payoff and 76.7% of people who reached it left.
// Here the phone CTA is untouched and primary; this form sits below it for
// the ~97% who won't call today, so the click becomes a nurture contact
// instead of nothing.
//
// Best-effort on Brevo: a failure there still redirects the visitor to the
// thank-you state. Never leave someone staring at an error on paid traffic.

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';
import { LANDERS, lpKey, normaliseSource, LP_TTL } from '@/lib/lpTrack';
import { Color, notifyDiscord } from '@/lib/discord';

export const dynamic = 'force-dynamic';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = Number(
  process.env.BREVO_QUIZ_LIST_ID || process.env.BREVO_LIST_ID || '3'
);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function maskEmail(e: string): string {
  return e.replace(/(.{2}).*(@.*)/, '$1***$2');
}

function backTo(
  request: NextRequest,
  lander: string,
  state: string,
  keep?: { source?: string; sid?: string; clickId?: string }
): NextResponse {
  const url = new URL(`/lp/${lander}`, request.nextUrl.origin);
  url.searchParams.set('merci', state);
  // Carry attribution across the redirect. Without this the confirmation page
  // is a bare URL, which broke two things: MGID's email_lead conversion fired
  // with an empty clid (unattributable to the originating click), and the
  // re-render logged a phantom load with source 'direct' — inflating loads
  // and deflating the tap rate for the real source.
  if (keep?.source && keep.source !== 'direct') url.searchParams.set('source', keep.source);
  if (keep?.sid) url.searchParams.set('sid', keep.sid);
  if (keep?.clickId) url.searchParams.set('adclid', keep.clickId);
  // 303 forces the follow-up to be a GET, so a refresh cannot repost.
  return NextResponse.redirect(url, 303);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_form' }, { status: 400 });
  }

  const str = (k: string, max = 120) => (form.get(k)?.toString() || '').trim().slice(0, max);

  const landerRaw = str('lander', 40);
  const lander = LANDERS.has(landerRaw) ? landerRaw : '';
  if (!lander) return NextResponse.json({ ok: false, error: 'bad_lander' }, { status: 400 });

  // Honeypot: a field hidden from humans via CSS. Anything that fills it is a
  // bot, so accept the request and silently drop it rather than 400 (a 400
  // teaches the bot to retry differently).
  if (str('website', 80)) return backTo(request, lander, '1');

  const prenom = str('prenom', 60);
  const email = str('email', 160).toLowerCase();
  const consent = !!form.get('consent');
  const source = normaliseSource(str('source', 60));
  const sid = str('sid', 32);
  const clickId = str('click_id', 64) || str('adclid', 64);
  const keep = { source, sid, clickId };

  if (!EMAIL_RE.test(email) || !consent) {
    return backTo(request, lander, 'err', keep);
  }

  try {
    const k = lpKey(parisDate());
    const p = kv.pipeline();
    p.hincrby(k, 'email', 1);
    p.hincrby(k, `email:${lander}`, 1);
    p.hincrby(k, `email:${lander}|${source}`, 1);
    p.expire(k, LP_TTL);
    await p.exec();
  } catch {
    /* best-effort */
  }

  if (BREVO_API_KEY) {
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          updateEnabled: true,
          listIds: [BREVO_LIST_ID],
          attributes: {
            PRENOM: prenom || undefined,
            SOURCE: source,
            LANDER: lander,
            SID: sid || undefined,
          },
        }),
      });
      if (!res.ok) {
        console.error('[lead/lander] brevo failed', res.status, (await res.text()).slice(0, 200));
      }
    } catch (e) {
      console.error('[lead/lander] brevo threw', e);
    }
  } else {
    console.error('[lead/lander] BREVO_API_KEY missing — contact not stored');
  }

  await notifyDiscord({
    category: 'lead',
    color: Color.PURPLE,
    title: '✉️ Email capté sur un lander',
    description: `${maskEmail(email)}${prenom ? ` · ${prenom}` : ''}`,
    fields: [
      { name: 'Angle', value: lander, inline: true },
      { name: 'Source', value: source || '—', inline: true },
    ],
  });

  return backTo(request, lander, '1', keep);
}
