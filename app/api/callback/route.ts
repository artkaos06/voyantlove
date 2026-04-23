import { NextRequest, NextResponse } from 'next/server';
import { normalizeFrenchPhone, sendCallbackRequest } from '@/lib/goracash';

interface Body {
  phone?: string;
  firstname?: string;
  gender?: 'MONSIEUR' | 'MADAME';
  gclid?: string;
  source?: string;
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
      return NextResponse.json(
        { ok: false, error: 'provider_error', message: result.message },
        { status: 502 }
      );
    }

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
