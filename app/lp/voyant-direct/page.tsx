import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Voyant Disponible en 2 Minutes — 10 Minutes Offertes',
  description: 'Connectez-vous à un voyant amour en moins de 2 minutes. 10 premières minutes offertes. Satisfait ou remboursé. Disponible 7j/7.',
  robots: { index: false, follow: false },
};

const TESTIMONIALS = [
  { text: 'Connectée en moins de 2 minutes. Elle a vu exactement ma situation sans que je lui dise quoi que ce soit.', name: 'Mélanie T.', detail: '1re consultation il y a 3 jours', stars: 5 },
  { text: 'J\'avais des doutes sur mon couple depuis des mois. En 15 minutes j\'avais plus de clarté qu\'en 2 ans.', name: 'Sandra L.', detail: 'Cliente depuis 6 mois', stars: 5 },
  { text: 'Très à l\'écoute, sans jugement. Les conseils m\'ont vraiment aidée à avancer dans ma vie amoureuse.', name: 'Nathalie B.', detail: '4 consultations', stars: 5 },
  { text: 'J\'étais sceptique mais la précision était bluffante. Mon ex est revenu exactement comme elle l\'avait prédit.', name: 'Julien F.', detail: 'Vérifié', stars: 5 },
];

export default function LPVoyantDirect() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Google Ads Call Conversion — direct snippet (not GTM).
          Loads its own gtag/js instance because GTM's internal gtag/js
          doesn't expose google_tag_data.pageload for phone swap detection.
          Scoped to this ad landing page only. */}
      <Script
        id="google-ads-call-conversion-loader"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18020982081"
      />
      <Script id="google-ads-call-conversion-config" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
        window.gtag('js', new Date());
        window.gtag('config', 'AW-18020982081/Y2TzCKq-oJ4cEMG6iZFD', {
          'phone_conversion_number': '01 75 75 45 82'
        });
      `}</Script>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-800 text-white pt-10 pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Live availability badge */}
          <div className="inline-flex items-center gap-2 bg-green-500 rounded-full px-4 py-1.5 text-sm font-bold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            3 voyants disponibles maintenant
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Voyant connecté en 2 minutes —<br />
            <span className="text-yellow-300">10 premières minutes offertes</span>
          </h1>

          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Posez vos questions sur votre vie amoureuse à un voyant spécialisé. Sans attente, en toute confidentialité.
          </p>

          {/* Guarantee strip */}
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-5 py-2 text-sm font-semibold mb-8">
            ✓ Satisfait ou remboursé &nbsp;·&nbsp; ✓ Sans engagement &nbsp;·&nbsp; ✓ Confidentiel
          </div>

          {/* Primary CTA */}
          <div className="mb-5">
            <a
              href="tel:+33175754582"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-2xl transition-all hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              📞 01 75 75 45 82
            </a>
            <p className="mt-3 text-green-200 font-semibold text-sm">
              10 min gratuites • 7j/7 • Voyant en ligne en 2 min
            </p>
          </div>

          {/* Secondary CTA */}
          <div>
            <p className="text-sm opacity-60 mb-2">Vous préférez consulter par écrit ?</p>
            <Link
              href="/consulter?ref=lp-voyant-direct"
              className="inline-block border-2 border-white/50 hover:border-white text-white px-7 py-3 rounded-lg font-semibold transition-all hover:bg-white/10 text-sm"
            >
              Choisir mon voyant en ligne →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-medium">
            <span>⭐ 4.8/5 — 2 400+ consultations</span>
            <span>🔒 Paiement 100% sécurisé</span>
            <span>⚡ Connexion en moins de 2 minutes</span>
            <span>↩️ Satisfait ou remboursé</span>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Vous vous posez ces questions ?
          </h2>
          <p className="text-center text-gray-500 mb-8">Nos voyants ont déjà aidé des milliers de personnes à y répondre.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'M\'aime-t-il vraiment ?',
              'Mon ex va-t-il revenir ?',
              'Est-il fidèle ?',
              'Quand vais-je rencontrer l\'amour ?',
              'Mon couple peut-il être sauvé ?',
              'Quel est mon avenir amoureux ?',
            ].map((q, i) => (
              <div key={i} className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg border border-purple-100">
                <span className="text-purple-500 font-bold text-lg flex-shrink-0">?</span>
                <span className="text-gray-800 font-medium">{q}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="tel:+33175754582"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all hover:scale-105 hover:shadow-xl"
            >
              📞 Obtenir mes réponses maintenant
            </a>
            <p className="text-sm text-gray-400 mt-2">01 75 75 45 82 — Appel confidentiel — 10 min offertes</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">En moins de 2 minutes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Appelez le 01 75 75 45 82', desc: 'Connexion immédiate avec un voyant disponible. Pas d\'attente, pas de rendez-vous.' },
              { step: '2', title: 'Exposez votre situation', desc: 'Le voyant vous écoute et analyse votre cas en profondeur, sans jugement.' },
              { step: '3', title: 'Recevez des réponses claires', desc: 'Des réponses précises et des conseils concrets pour agir avec clarté.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with detail */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Ils ont trouvé leurs réponses</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Avis vérifiés de clients ayant consulté nos voyants</p>
          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span>{'⭐'.repeat(t.stars)}</span>
                  <span className="text-xs text-gray-400">{t.detail}</span>
                </div>
                <p className="text-gray-700 italic mb-3 leading-relaxed">&quot;{t.text}&quot;</p>
                <p className="text-sm font-semibold text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section className="py-10 px-4 bg-purple-50 border-y border-purple-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '↩️', title: 'Satisfait ou remboursé', desc: 'Si votre 1re consultation ne vous satisfait pas, vous êtes remboursé.' },
              { icon: '🔒', title: '100% confidentiel', desc: 'Vos échanges restent strictement privés. Aucune donnée partagée.' },
              { icon: '⚡', title: 'Connexion en 2 minutes', desc: 'Pas de rendez-vous, pas d\'attente. Un voyant disponible immédiatement.' },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-purple-800 to-indigo-800 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Prêt à obtenir vos réponses ?</h2>
          <p className="text-lg opacity-80 mb-8">
            10 premières minutes offertes. Satisfait ou remboursé. Voyant disponible maintenant.
          </p>
          <a
            href="tel:+33175754582"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-2xl transition-all hover:scale-105 hover:shadow-2xl mb-4"
          >
            📞 01 75 75 45 82
          </a>
          <p className="text-green-200 font-semibold text-sm mb-6">10 min gratuites • 7j/7 • Confidentiel</p>
          <Link
            href="/consulter?ref=lp-voyant-direct-bottom"
            className="text-white/60 hover:text-white text-sm underline underline-offset-2"
          >
            Ou consultez par écrit en ligne →
          </Link>
        </div>
      </section>

    </main>
  );
}
