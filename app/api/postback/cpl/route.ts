// CPL lead postback receiver (ra11.me persona offers).
//
// The CPL network fires this on every billable lead, substituting the
// bracketed placeholders we configured in our postback URL. Give the
// network this URL (Pixel Postback config), with their pre-fill variables:
//
//   https://www.voyantlove.fr/api/postback/cpl
//     ?secret=<CPL_POSTBACK_SECRET>
//     &cid=[request_id]          ← our click ID, round-tripped from /api/go/cpl
//     &campaign=[campaign_id]    ← their campaign id (optional, for reporting)
//
// We deliberately do NOT request their [email] placeholder — request_id is
// all we need for attribution, and not ingesting lead PII keeps us clean
// under GDPR.
//
// What it does on each lead:
//   - validates the shared secret (rejects spoofed conversions)
//   - records the €2.20 payout toward the daily digest
//   - fires a real-time Discord "NEW LEAD" embed carrying the cid, so it can
//     be reconciled against the matching /api/go/cpl click-out log
//
// v1 (with a KV click store): resolve cid → upstream native click_id and
// relay the conversion to the native platform's S2S endpoint (MGID/Taboola)
// so their algorithm optimizes toward converting placements. Not needed for
// the first test — native-platform reporting + these pings suffice.

import { NextRequest, NextResponse } from 'next/server';
import { Color, notifyDiscord } from '@/lib/discord';
import { recordConversion, recordUnauthorizedPostback } from '@/lib/digestState';
import { recordCplLead, attributeLeadToWidget } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

// Payout per billable lead, in EUR. Overridable via env if the rate changes.
const CPL_PAYOUT_EUR = Number(process.env.CPL_PAYOUT_EUR || '2.30');

function isAuthorized(secret: string | null): boolean {
  const expected = process.env.CPL_POSTBACK_SECRET;
  // If no secret is configured yet, allow (so the loop works immediately on
  // first setup) but the handler logs a warning. Set CPL_POSTBACK_SECRET in
  // Vercel and include it in the postback URL to harden against spoofing.
  if (!expected) return true;
  if (!secret) return false;
  if (secret.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < secret.length; i++) {
    diff |= secret.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

async function handle(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;
  const secret = sp.get('secret');

  if (!isAuthorized(secret)) {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '(unknown)';
    console.warn('[postback/cpl] unauthorized', { ip });
    recordUnauthorizedPostback();
    await notifyDiscord({
      title: '🛡️ CPL postback · UNAUTHORIZED',
      description:
        'A /api/postback/cpl hit had a missing/invalid secret. Misconfigured network URL, a probe, or a spoof attempt.',
      color: Color.RED,
      fields: [
        { name: 'IP', value: ip, inline: true },
        {
          name: 'Querystring keys',
          value: Array.from(sp.keys()).join(', ') || '(none)',
        },
      ],
    });
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  if (!process.env.CPL_POSTBACK_SECRET) {
    console.warn(
      '[postback/cpl] CPL_POSTBACK_SECRET not set — accepting unsigned postbacks. Set it in Vercel to harden.'
    );
  }

  const cid = sp.get('cid')?.slice(0, 64) || null;
  const campaign = sp.get('campaign')?.slice(0, 80) || null;

  console.log('[postback/cpl] lead', {
    cid,
    campaign,
    payout_eur: CPL_PAYOUT_EUR,
    received_at: new Date().toISOString(),
  });

  recordConversion(CPL_PAYOUT_EUR);
  // Durable per-day counter (survives serverless cold starts, unlike the
  // in-memory digest counters) so the daily report tallies CPL leads.
  await recordCplLead();
  // Resolve the cid back to the MGID widget that produced it + increment
  // that widget's daily lead tally — the data that turns viewability-proxy
  // blacklisting into precise "this source spent €X, produced 0 leads → cut".
  const widget = cid ? await attributeLeadToWidget(cid) : null;

  await notifyDiscord({
    category: 'lead',
    title: '🎯 CPL · NEW LEAD (€2.30)',
    description:
      'A billable lead postbacked from the ra11.me CPL network. Match the cid against the /api/go/cpl click-out for full ad/keyword context.',
    color: Color.GREEN,
    fields: [
      { name: 'cid (request_id)', value: cid || '(missing!)', inline: true },
      { name: 'Payout', value: `€${CPL_PAYOUT_EUR.toFixed(2)}`, inline: true },
      ...(campaign ? [{ name: 'Campaign', value: campaign, inline: true }] : []),
      ...(widget
        ? [{ name: 'Source (widget)', value: widget, inline: true }]
        : []),
    ],
  });

  // 200 with a tiny body — networks typically just need a 2xx to mark the
  // postback delivered.
  return NextResponse.json({ ok: true });
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
