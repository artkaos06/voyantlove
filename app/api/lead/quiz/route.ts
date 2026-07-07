// Quiz email-capture → Brevo list.
//
// The quiz gates its result behind a prénom + email step ("recevez votre
// lecture"). This endpoint adds the contact to a Brevo list with the quiz
// answers as attributes (for segmentation + the relance sequence) and
// increments the funnel's email counter. Building the email list is the
// durable asset — the phone CTA that follows captures the immediate callers,
// the Brevo nurture converts the rest over the following weeks.
//
// Best-effort on Brevo: a hiccup there never blocks the funnel (we still
// count + let the user continue to the result + phone CTA).

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { parisDate } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
// Dedicated quiz list preferred; falls back to the existing list.
const BREVO_LIST_ID = Number(
  process.env.BREVO_QUIZ_LIST_ID || process.env.BREVO_LIST_ID || '3'
);
const TTL = 60 * 60 * 24 * 40;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Body {
  prenom?: string;
  email?: string;
  consent?: boolean;
  answers?: Record<string, string>;
  tracking?: Record<string, string>;
}

function maskEmail(e: string): string {
  return e.replace(/(.{2}).*(@.*)/, '$1***$2');
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: Body = {};
  try {
    body = (await request.json()) as Body;
  } catch {
    try {
      const t = await request.text();
      if (t) body = JSON.parse(t) as Body;
    } catch {
      /* ignore */
    }
  }

  const email = (body.email || '').trim().toLowerCase();
  const prenom = (body.prenom || '').trim().slice(0, 60);
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }
  if (!body.consent) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 400 });
  }

  const a = body.answers || {};
  const t = body.tracking || {};
  const source = (t.source || 'direct').slice(0, 60);

  // Add to Brevo. Uses the attributes the account already defines (PRENOM,
  // SIGNE_ASTRO, SITUATION, SOURCE — same set /api/admin/stats reads).
  let brevoOk = false;
  if (BREVO_API_KEY) {
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          attributes: {
            PRENOM: prenom,
            SIGNE_ASTRO: a.signe || '',
            SITUATION: a.situation || '',
            SOURCE: t.num ? `${source}-num${t.num}` : source,
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });
      brevoOk = res.ok || res.status === 204;
    } catch {
      /* best-effort */
    }
  }

  // Funnel counter (start → email → cta lives in the same cpl:quiz hash).
  try {
    const k = `cpl:quiz:${parisDate()}`;
    await kv.hincrby(k, 'emails', 1);
    await kv.hincrby(k, `email:${source}`, 1);
    if (t.num) await kv.hincrby(k, `email:num:${t.num}`, 1);
    await kv.expire(k, TTL);
  } catch {
    /* best-effort */
  }

  console.log('[lead/quiz]', { email: maskEmail(email), source, num: t.num, brevoOk });
  return NextResponse.json({ ok: true });
}
