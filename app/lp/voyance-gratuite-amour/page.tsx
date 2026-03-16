import type { Metadata } from 'next';
import DynamicCTAButton from '@/components/DynamicCTAButton';
import VoyantRecommendations from '@/components/VoyantRecommendations';

export const metadata: Metadata = {
  title: 'Voyance Gratuite Amour — Premières Minutes Offertes',
  description: 'Voyance amoureuse gratuite : profitez de premières minutes offertes avec un voyant spécialisé amour. Réponses immédiates sur votre vie sentimentale.',
  robots: { index: false, follow: false },
};

export default function LPVoyanceGratuiteAmour() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold mb-6">
            Offre Découverte — Premières minutes offertes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Voyance Amour Gratuite : Testez Sans Engagement
          </h1>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Profitez de premières minutes offertes avec un voyant spécialisé en amour. Réponses immédiates sur votre situation sentimentale.
          </p>
          <DynamicCTAButton
            label="Profiter de l'Offre Gratuite"
            source="lp-voyance-gratuite-hero"
            className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          />
          <p className="mt-4 text-sm opacity-80">Sans engagement — Sans carte bancaire au départ — 100% confidentiel</p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Ce que vous obtenez gratuitement
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold mb-2">Premières Minutes Offertes</h3>
              <p className="text-gray-600 text-sm">Testez la voyance amoureuse sans aucun engagement financier.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="font-bold mb-2">Voyant Spécialisé Amour</h3>
              <p className="text-gray-600 text-sm">Un expert en questions sentimentales, pas un généraliste.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Réponse Immédiate</h3>
              <p className="text-gray-600 text-sm">Voyants disponibles maintenant par téléphone ou chat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Posez vos questions d'amour gratuitement
          </h2>
          <div className="space-y-3 mb-8">
            {[
              'Est-ce que mon ex pense encore à moi ?',
              'Va-t-il/elle me recontacter ?',
              'Quand vais-je trouver l\'amour ?',
              'M\'aime-t-il/elle sincèrement ?',
              'Mon couple a-t-il un avenir ?',
            ].map((q, i) => (
              <div key={i} className="flex items-center gap-3 bg-emerald-50 p-4 rounded-lg">
                <span className="text-emerald-600 font-bold text-lg">&#10003;</span>
                <span className="text-gray-800">{q}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <DynamicCTAButton
              label="Poser Ma Question Gratuitement"
              source="lp-voyance-gratuite-mid"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Comment profiter de l'offre gratuite ?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Choisissez votre voyant</h3>
                <p className="text-gray-600">Sélectionnez un voyant spécialisé amour parmi ceux disponibles en ligne.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Créez votre compte</h3>
                <p className="text-gray-600">Inscription rapide pour débloquer vos premières minutes gratuites.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Posez votre question</h3>
                <p className="text-gray-600">Consultez immédiatement par téléphone ou chat — premières minutes offertes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Elles ont testé gratuitement
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: 'J\'ai testé par curiosité avec l\'offre gratuite. Le voyant a tout capté sur ma situation. Je suis revenue pour une consultation complète.', name: 'Camille P.', stars: 5 },
              { text: 'Premières minutes suffisantes pour avoir une première réponse sur mon ex. Très impressionnée par la précision.', name: 'Laura M.', stars: 5 },
              { text: 'Je ne croyais pas à la voyance. L\'offre gratuite m\'a convaincue. La voyante a décrit mon partenaire sans que je dise rien.', name: 'Julie K.', stars: 5 },
              { text: 'Rapide, précis et gratuit pour commencer. Parfait pour tester sans risque.', name: 'Amélie V.', stars: 4 },
            ].map((t, i) => (
              <div key={i} className="bg-emerald-50 p-5 rounded-lg">
                <div className="mb-2">{'⭐'.repeat(t.stars)}</div>
                <p className="text-gray-700 italic mb-3">"{t.text}"</p>
                <p className="text-sm font-semibold text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voyants */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <VoyantRecommendations
            topic="voyance-gratuite"
            title="Voyants Disponibles — Offre Gratuite"
            subtitle="Premières minutes offertes avec ces voyants spécialisés amour"
            limit={3}
            showOnlineFirst={true}
            source="lp-voyance-gratuite"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Essayez Gratuitement, Maintenant</h2>
          <p className="text-lg opacity-95 mb-8">Premières minutes offertes — sans engagement, sans risque.</p>
          <DynamicCTAButton
            label="Profiter de l'Offre Gratuite"
            source="lp-voyance-gratuite-final"
            className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          />
          <div className="flex justify-center gap-8 mt-6 text-sm opacity-80">
            <span>Sans engagement</span>
            <span>Confidentiel</span>
            <span>Disponible 7j/7</span>
          </div>
        </div>
      </section>
    </main>
  );
}
