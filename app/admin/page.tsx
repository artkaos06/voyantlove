'use client';

import { useState, useEffect } from 'react';

interface Stats {
  list: { totalContacts: number; name: string };
  recentContacts: {
    email: string;
    name: string;
    zodiac: string;
    situation: string;
    source: string;
    createdAt: string;
  }[];
  emailStats: {
    sent: number;
    delivered: number;
    opens: number;
    clicks: number;
    openRate: string;
    clickRate: string;
  };
}

const SITUATION_LABELS: Record<string, string> = {
  reconquete: 'Reconquête',
  rupture: 'Rupture',
  'nouvelle-rencontre': 'Nouvelle rencontre',
  sentiments: 'Sentiments',
  'crise-couple': 'Crise couple',
};

const EXTERNAL_LINKS = {
  googleAds: 'https://ads.google.com/aw/campaigns',
  googleAdsKeywords: 'https://ads.google.com/aw/keywords',
  googleAdsSearchTerms: 'https://ads.google.com/aw/keywordauctions',
  ga4Realtime: 'https://analytics.google.com/analytics/web/#/realtime',
  ga4Events: 'https://analytics.google.com/analytics/web/#/reports/explorer',
  ga4Acquisition: 'https://analytics.google.com/analytics/web/#/reports/acquisition',
  gtm: 'https://tagmanager.google.com/#/container/accounts/6344588242/containers/246482590/workspaces',
  brevo: 'https://app.brevo.com/contacts',
  brevoAutomation: 'https://app.brevo.com/automation',
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [key, setKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/stats?key=${encodeURIComponent(key)}`);
      if (!res.ok) {
        if (res.status === 401) setError('Wrong key');
        else setError('Failed to fetch');
        return;
      }
      const data = await res.json();
      setStats(data);
      setAuthenticated(true);
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl p-8 max-w-sm w-full">
          <h1 className="text-white text-xl font-bold mb-4">Admin Dashboard</h1>
          <input
            type="password"
            placeholder="Admin key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchStats()}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={fetchStats}
            disabled={loading}
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition"
          >
            {loading ? 'Loading...' : 'Access'}
          </button>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">VoyantLove — Dashboard</h1>
          <button
            onClick={fetchStats}
            className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
          >
            Refresh
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Total Leads</p>
            <p className="text-3xl font-bold text-purple-400">{stats?.list.totalContacts || 0}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Emails Sent (7d)</p>
            <p className="text-3xl font-bold text-blue-400">{stats?.emailStats.sent || 0}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Open Rate (7d)</p>
            <p className="text-3xl font-bold text-green-400">{stats?.emailStats.openRate || 0}%</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Click Rate (7d)</p>
            <p className="text-3xl font-bold text-yellow-400">{stats?.emailStats.clickRate || 0}%</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="font-bold text-lg mb-3">Google Ads</h2>
            <div className="space-y-2">
              <a href={EXTERNAL_LINKS.googleAds} target="_blank" rel="noopener" className="block text-purple-400 hover:text-purple-300 text-sm">
                Campaigns Overview →
              </a>
              <a href={EXTERNAL_LINKS.googleAdsKeywords} target="_blank" rel="noopener" className="block text-purple-400 hover:text-purple-300 text-sm">
                Keywords Performance →
              </a>
              <a href={EXTERNAL_LINKS.googleAdsSearchTerms} target="_blank" rel="noopener" className="block text-purple-400 hover:text-purple-300 text-sm">
                Search Terms (add negatives) →
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="font-bold text-lg mb-3">GA4 Analytics</h2>
            <div className="space-y-2">
              <a href={EXTERNAL_LINKS.ga4Realtime} target="_blank" rel="noopener" className="block text-blue-400 hover:text-blue-300 text-sm">
                Realtime (live visitors) →
              </a>
              <a href={EXTERNAL_LINKS.ga4Events} target="_blank" rel="noopener" className="block text-blue-400 hover:text-blue-300 text-sm">
                Events (lead_form_submit, cta_click) →
              </a>
              <a href={EXTERNAL_LINKS.ga4Acquisition} target="_blank" rel="noopener" className="block text-blue-400 hover:text-blue-300 text-sm">
                Traffic Acquisition →
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="font-bold text-lg mb-3">Brevo (Email)</h2>
            <div className="space-y-2">
              <a href={EXTERNAL_LINKS.brevo} target="_blank" rel="noopener" className="block text-green-400 hover:text-green-300 text-sm">
                Contacts & Lists →
              </a>
              <a href={EXTERNAL_LINKS.brevoAutomation} target="_blank" rel="noopener" className="block text-green-400 hover:text-green-300 text-sm">
                Automation Stats →
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <h2 className="font-bold text-lg mb-3">Tools</h2>
            <div className="space-y-2">
              <a href={EXTERNAL_LINKS.gtm} target="_blank" rel="noopener" className="block text-yellow-400 hover:text-yellow-300 text-sm">
                Google Tag Manager →
              </a>
              <a href="https://www.voyantlove.fr/lp/voyance-amour" target="_blank" rel="noopener" className="block text-yellow-400 hover:text-yellow-300 text-sm">
                LP: Voyance Amour →
              </a>
              <a href="https://www.voyantlove.fr/lp/voyance-gratuite-amour" target="_blank" rel="noopener" className="block text-yellow-400 hover:text-yellow-300 text-sm">
                LP: Voyance Gratuite →
              </a>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-gray-800 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-lg mb-3">Daily Checklist</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded" /> Check Google Ads spend & impressions
            </label>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded" /> Review search terms, add negatives
            </label>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded" /> Check new leads in Brevo
            </label>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded" /> Check email open/click rates
            </label>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded" /> GA4: lead_form_submit count today
            </label>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded" /> GA4: cta_click count today
            </label>
          </div>
        </div>

        {/* Alert Thresholds */}
        <div className="bg-gray-800 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-lg mb-3">Alert Thresholds</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
              <span className="text-gray-300">Email Open Rate</span>
              <span className={`font-bold ${parseFloat(stats?.emailStats.openRate || '0') >= 25 ? 'text-green-400' : 'text-red-400'}`}>
                {parseFloat(stats?.emailStats.openRate || '0') >= 25 ? 'OK' : 'LOW'} ({stats?.emailStats.openRate}%)
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
              <span className="text-gray-300">Email Click Rate</span>
              <span className={`font-bold ${parseFloat(stats?.emailStats.clickRate || '0') >= 3 ? 'text-green-400' : 'text-red-400'}`}>
                {parseFloat(stats?.emailStats.clickRate || '0') >= 3 ? 'OK' : 'LOW'} ({stats?.emailStats.clickRate}%)
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
              <span className="text-gray-300">Leads (7d target: 10+)</span>
              <span className={`font-bold ${(stats?.list.totalContacts || 0) >= 10 ? 'text-green-400' : 'text-yellow-400'}`}>
                {stats?.list.totalContacts || 0} total
              </span>
            </div>
            <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
              <span className="text-gray-300">Email Deliverability</span>
              <span className={`font-bold ${stats?.emailStats.sent && stats.emailStats.delivered / stats.emailStats.sent > 0.95 ? 'text-green-400' : 'text-red-400'}`}>
                {stats?.emailStats.sent ? ((stats.emailStats.delivered / stats.emailStats.sent) * 100).toFixed(0) : '0'}%
              </span>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-gray-800 rounded-xl p-5">
          <h2 className="font-bold text-lg mb-3">Recent Leads</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-left border-b border-gray-700">
                  <th className="pb-2 pr-4">Date</th>
                  <th className="pb-2 pr-4">Name</th>
                  <th className="pb-2 pr-4">Email</th>
                  <th className="pb-2 pr-4">Zodiac</th>
                  <th className="pb-2 pr-4">Situation</th>
                  <th className="pb-2">Source</th>
                </tr>
              </thead>
              <tbody>
                {(stats?.recentContacts || []).map((c, i) => (
                  <tr key={i} className="border-b border-gray-700/50">
                    <td className="py-2 pr-4 text-gray-400">
                      {new Date(c.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-2 pr-4 font-medium">{c.name}</td>
                    <td className="py-2 pr-4 text-gray-400">{c.email}</td>
                    <td className="py-2 pr-4">{c.zodiac}</td>
                    <td className="py-2 pr-4">{SITUATION_LABELS[c.situation] || c.situation}</td>
                    <td className="py-2 text-gray-400">{c.source}</td>
                  </tr>
                ))}
                {(!stats?.recentContacts || stats.recentContacts.length === 0) && (
                  <tr>
                    <td colSpan={6} className="py-4 text-gray-500 text-center">No leads yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
