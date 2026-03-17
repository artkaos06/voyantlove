import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '0');

export async function POST(request: NextRequest) {
  try {
    const { name, email, zodiac, situation, source } = await request.json();

    if (!name || !email || !zodiac || !situation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.error('Missing BREVO_API_KEY or BREVO_LIST_ID');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Create or update contact in Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          PRENOM: name,
          SIGNE_ASTRO: zodiac,
          SITUATION: situation,
          SOURCE: source,
        },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      // Contact already exists is not a real error
      if (error.code === 'duplicate_parameter') {
        return NextResponse.json({ success: true, existing: true });
      }
      console.error('Brevo API error:', error);
      return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
