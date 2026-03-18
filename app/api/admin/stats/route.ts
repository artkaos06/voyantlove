import { NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || '3';

async function brevoFetch(endpoint: string) {
  const res = await fetch(`https://api.brevo.com/v3${endpoint}`, {
    headers: {
      'accept': 'application/json',
      'api-key': BREVO_API_KEY || '',
    },
    next: { revalidate: 0 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('key');

  if (password !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get list info (total contacts)
    const listData = await brevoFetch(`/contacts/lists/${BREVO_LIST_ID}`);

    // Get recent contacts from the list
    const contactsData = await brevoFetch(
      `/contacts/lists/${BREVO_LIST_ID}/contacts?limit=20&offset=0&sort=desc`
    );

    // Get transactional email stats (last 7 days)
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startDate = weekAgo.toISOString().split('T')[0];
    const endDate = today.toISOString().split('T')[0];
    const emailStats = await brevoFetch(
      `/smtp/statistics/aggregatedReport?startDate=${startDate}&endDate=${endDate}`
    );

    return NextResponse.json({
      list: {
        totalContacts: listData?.totalSubscribers || 0,
        name: listData?.name || 'Unknown',
      },
      recentContacts: (contactsData?.contacts || []).map((c: any) => ({
        email: c.email,
        name: c.attributes?.PRENOM || '',
        zodiac: c.attributes?.SIGNE_ASTRO || '',
        situation: c.attributes?.SITUATION || '',
        source: c.attributes?.SOURCE || '',
        createdAt: c.createdAt,
      })),
      emailStats: {
        sent: emailStats?.requests || 0,
        delivered: emailStats?.delivered || 0,
        opens: emailStats?.opens || 0,
        clicks: emailStats?.clicks || 0,
        openRate: emailStats?.delivered ? ((emailStats.opens / emailStats.delivered) * 100).toFixed(1) : '0',
        clickRate: emailStats?.delivered ? ((emailStats.clicks / emailStats.delivered) * 100).toFixed(1) : '0',
      },
    });
  } catch (error) {
    console.error('Admin stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
