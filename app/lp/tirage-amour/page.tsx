import type { Metadata } from 'next';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Tirage Tarot Amour — Révélation Immédiate',
  description: 'Tirage tarot amour personnalisé. Découvrez ce que les cartes disent sur votre situation sentimentale en moins de 2 minutes.',
  robots: { index: false, follow: false },
};

export default function LPTirageAmour() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero — urgency focused */}
      <section className="bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-5">
            🔮 Voyants disponibles maintenant
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Votre Tirage Tarot Révèle la Vérité sur Votre Amour
          </h1>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            En 2 minutes, découvrez ce que les cartes disent sur votre situation — puis parlez à un voyant pour aller plus loin.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="bg-white/20 rounded-full px-4 py-2">✓ Tirage personnalisé</span>
            <span className="bg-white/20 rounded-full px-4 py-2">✓ 10 min offertes</span>
            <span className="bg-white/20 rounded-full px-4 py-2">✓ Confidentiel</span>
          </div>
        </div>
      </section>

      {/* Urgency bar */}
      <div className="bg-amber-400 text-amber-900 text-center py-2 px-4 text-sm font-semibold">
        ⚡ 3 voyants disponibles en ce moment — Disponibilité limitée
      </div>

      {/* Form — teaser mode */}
      <section id="tirage" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <LeadCaptureForm source="lp-tirage-amour" colorScheme="purple" mode="teaser" />
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '⭐', title: '4.8/5', sub: '2 400+ avis vérifiés' },
              { icon: '🔒', title: 'Confidentiel', sub: 'Vos données protégées' },
              { icon: '📞', title: '10 min offertes', sub: '1re consultation gratuite' },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { text: 'La carte tirée correspondait exactement à ce que je traversais. La consultation a tout éclairé.', name: 'Camille R.', stars: 5 },
              { text: 'J\'hésitais mais le tirage m\'a convaincue. Le voyant m\'a donné des réponses très précises.', name: 'Isabelle M.', stars: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="mb-2">{'⭐'.repeat(t.stars)}</div>
                <p className="text-gray-700 italic mb-3">&quot;{t.text}&quot;</p>
                <p className="text-sm font-semibold text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
