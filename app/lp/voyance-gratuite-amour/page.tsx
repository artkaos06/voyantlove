import type { Metadata } from 'next';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Voyance Gratuite Amour — Tirage Tarot Personnalisé Offert',
  description: 'Voyance amoureuse gratuite : recevez votre tirage tarot amour personnalisé. Analyse de votre situation sentimentale sans engagement.',
  robots: { index: false, follow: false },
};

export default function LPVoyanceGratuiteAmour() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur rounded-full px-4 py-1 text-sm font-semibold mb-6">
            100% Gratuit — Sans Engagement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Votre Tirage Tarot Amour Gratuit
          </h1>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Découvrez ce que les cartes révèlent sur votre avenir amoureux. Tirage personnalisé selon votre signe et votre situation — offert.
          </p>
          <a href="#tirage" className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
            Recevoir Mon Tirage Gratuit ↓
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Ce que contient votre tirage gratuit
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🃏</div>
              <h3 className="font-bold mb-2">Votre Carte Tarot</h3>
              <p className="text-gray-600 text-sm">Une carte tirée spécifiquement pour votre situation amoureuse.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold mb-2">Analyse Astrologique</h3>
              <p className="text-gray-600 text-sm">Prédiction adaptée à votre signe et aux influences planétaires actuelles.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold mb-2">Conseils Personnalisés</h3>
              <p className="text-gray-600 text-sm">Guidance concrète et timing pour votre situation sentimentale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Les cartes répondent à vos questions d'amour
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
        </div>
      </section>

      {/* Lead capture form */}
      <section id="tirage" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <LeadCaptureForm source="lp-voyance-gratuite-amour" colorScheme="emerald" />
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Elles ont recu leur tirage gratuit
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: 'J\'ai testé par curiosité. Le tirage gratuit était précis, j\'ai ensuite fait une consultation complète.', name: 'Camille P.', stars: 5 },
              { text: 'Le tirage a mis le doigt sur exactement ce que je ressentais. Impressionnant pour un service gratuit.', name: 'Laura M.', stars: 5 },
              { text: 'Je ne croyais pas à la voyance. Le tirage gratuit m\'a fait changer d\'avis sur la qualité des prédictions.', name: 'Julie K.', stars: 5 },
              { text: 'Rapide, personnalisé et gratuit. Le tirage m\'a rassurée sur ma situation avec mon ex.', name: 'Amélie V.', stars: 4 },
            ].map((t, i) => (
              <div key={i} className="bg-emerald-50 p-5 rounded-lg">
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
