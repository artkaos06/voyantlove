import { NextRequest, NextResponse } from 'next/server';
import {
  buildAlternativeDiscordNotification,
  parseAlternativeTrackingRequest,
} from '@/lib/alternativeCpa68Tracking';
import { Color, notifyDiscord } from '@/lib/discord';

export const dynamic = 'force-dynamic';

const MAX_BODY_CHARS = 4096;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_CHARS) {
    return NextResponse.json({ error: 'payload_too_large' }, { status: 413 });
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }
  if (!text || text.length > MAX_BODY_CHARS) {
    return NextResponse.json(
      { error: text ? 'payload_too_large' : 'invalid_body' },
      { status: text ? 413 : 400 },
    );
  }

  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = parseAlternativeTrackingRequest(raw);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  // Strictly parsed and bounded intent telemetry only. No provider-approved
  // CPA or €68 revenue can be represented by AlternativeTrackingRequest.
  console.log('[track] alternative_cpa68', {
    ...parsed.value,
    received_at: new Date().toISOString(),
  });

  const notification = buildAlternativeDiscordNotification(parsed.value);
  if (notification) {
    await notifyDiscord({
      ...notification,
      color: Color.GREEN,
    });
  }

  return new NextResponse(null, { status: 204 });
}
