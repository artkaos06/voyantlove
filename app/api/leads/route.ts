import { NextRequest, NextResponse } from 'next/server';
import { getPrediction, type SituationType, type ZodiacSign } from '@/data/tarot-predictions';
import { buildPredictionEmailHTML } from '@/lib/prediction-email';

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

    // 1. Create or update contact in Brevo
    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
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

    if (!contactResponse.ok) {
      const error = await contactResponse.json();
      if (error.code !== 'duplicate_parameter') {
        console.error('Brevo contact API error:', error);
      }
    }

    // 2. Send prediction email
    const prediction = getPrediction(
      situation as SituationType,
      zodiac as ZodiacSign,
      name,
    );
    const emailHTML = buildPredictionEmailHTML(name, zodiac, situation, prediction);

    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'VoyantLove', email: 'bonjour@voyantlove.fr' },
        to: [{ email, name }],
        subject: `${name}, votre tirage tarot amour est prêt 🔮`,
        htmlContent: emailHTML,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      console.error('Brevo email API error:', error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
