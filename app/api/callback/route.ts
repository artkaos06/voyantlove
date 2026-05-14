import { NextRequest, NextResponse } from 'next/server';
import { normalizeFrenchPhone, sendCallbackRequest } from '@/lib/goracash';
import { Color, notifyDiscord } from '@/lib/discord';
import { recordGoracashLead } from '@/lib/digestState';

interface Body {
  phone?: string;
  firstname?: string;
  gender?: 'MONSIEUR' | 'MADAME';
  gclid?: string;
  source?: string;
}

/**
 * Mask a phone number for display in chat (keep country code and last 2
 * digits, mask the middle). Goracash numbers in our database are French,
 * stored in 0033... format. Avoids leaking lead identity to anyone with
 * Discord access who shouldn't have it.
 */
function maskPhone(phone: string): string {
  if (phone.length < 6) return phone;
  const head = phone.slice(0, 4);
  const tail = phone.slice(-2);
  return `${head}${'*'.repeat(phone.length - 6)}${tail}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;

    if (!body.phone || typeof body.phone !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'phone_required' },
        { status: 400 }
      );
    }

    const normalized = normalizeFrenchPhone(body.phone);
    if (!normalized) {
      return NextResponse.json(
        { ok: false, error: 'invalid_phone' },
        { status: 400 }
      );
    }

    // Build tracker: prefer gclid (Google click ID) for per-keyword attribution.
    // Fall back to source label so we still get channel-level attribution on
    // callbacks sourced from non-Google traffic.
    const tracker =
      (body.gclid && String(body.gclid).slice(0, 200)) ||
      (body.source && `src:${String(body.source).slice(0, 50)}`) ||
      undefined;

    const firstname =
      typeof body.firstname === 'string'
        ? body.firstname.trim().slice(0, 50) || undefined
        : undefined;

    const gender =
      body.gender === 'MONSIEUR' || body.gender === 'MADAME'
        ? body.gender
        : undefined;

    const result = await sendCallbackRequest({
      phone: normalized,
      firstname,
      gender,
      tracker,
    });

    if (result.status !== 'ok') {
      console.error('Goracash callback error:', result);
      // Awaited — Vercel serverless terminates the function after the
      // response, killing any fire-and-forget Discord call.
      await notifyDiscord({
        title: '🔴 Goracash callback · provider error',
        description: result.message?.slice(0, 1500) || 'No details.',
        color: Color.RED,
        fields: [
          { name: 'Phone (masked)', value: maskPhone(normalized), inline: true },
          ...(body.source
            ? [{ name: 'Source', value: body.source, inline: true }]
            : []),
        ],
      });
      return NextResponse.json(
        { ok: false, error: 'provider_error', message: result.message },
        { status: 502 }
      );
    }

    // Daily-digest counter + real-time Discord ping. Phone-callback leads
    // are the FR site's primary conversion event — equivalent to first-
    // purchase on the EN side.
    recordGoracashLead();
    await notifyDiscord({
      title: '📞 Goracash callback · NEW LEAD',
      description: 'A French visitor requested a phone callback.',
      color: Color.GREEN,
      fields: [
        { name: 'Phone (masked)', value: maskPhone(normalized), inline: true },
        ...(firstname
          ? [{ name: 'First name', value: firstname, inline: true }]
          : []),
        ...(gender ? [{ name: 'Gender', value: gender, inline: true }] : []),
        ...(body.source
          ? [{ name: 'Source', value: body.source, inline: true }]
          : []),
        ...(body.gclid
          ? [{ name: 'gclid', value: String(body.gclid).slice(0, 200) }]
          : []),
        {
          name: 'Provider status',
          value: result.callback_status ?? 'ok',
          inline: true,
        },
      ],
    });

    return NextResponse.json({
      ok: true,
      callback_status: result.callback_status ?? 'ok',
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Callback API error:', msg);
    return NextResponse.json(
      { ok: false, error: 'internal_error' },
      { status: 500 }
    );
  }
}
