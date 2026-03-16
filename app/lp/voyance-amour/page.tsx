import type { Metadata } from 'next';
import DynamicCTAButton from '@/components/DynamicCTAButton';
import VoyantRecommendations from '@/components/VoyantRecommendations';

export const metadata: Metadata = {
  title: 'Voyance Amour — Consultez un Voyant Spécialisé Maintenant',
  description: 'Consultation voyance amoureuse immédiate avec un voyant spécialisé. Réponses claires sur vos sentiments, votre couple et votre avenir amoureux.',
  robots: { index: false, follow: false },
};

export default function LPVoyanceAmour() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wide opacity-80 mb-4">Voyance Amoureuse Spécialisée</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Obtenez des Réponses Claires sur Votre Vie Amoureuse
          </h1>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Un voyant spécialisé en amour analyse votre situation et vous guide avec précision — par téléphone, chat ou email.
          </p>
          <DynamicCTAButton
            label="Consulter un Voyant Maintenant"
            source="lp-voyance-amour-hero"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          />
          <p className="mt-4 text-sm opacity-80">Voyants disponibles 7j/7 — Paiement sécurisé — Confidentiel</p>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Vous vous posez ces questions ?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'M\'aime-t-il/elle vraiment ?',
              'Mon ex va-t-il/elle revenir ?',
              'Quand vais-je rencontrer l\'amour ?',
              'Mon couple va-t-il surmonter cette crise ?',
              'Est-il/elle fidèle ?',
              'Quel est mon avenir amoureux ?',
            ].map((q, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-purple-600 text-xl">?</span>
                <span className="text-gray-800 font-medium">{q}</span>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg text-center">
            <p className="text-lg text-gray-800">
              <strong>Un voyant spécialisé amour</strong> vous donne des réponses précises en analysant les énergies de votre situation grâce au tarot, à la clairvoyance et à l'astrologie.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Choisissez votre voyant</h3>
              <p className="text-gray-600 text-sm">Sélectionnez parmi nos voyants spécialisés en amour, disponibles maintenant.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Posez votre question</h3>
              <p className="text-gray-600 text-sm">Par téléphone, chat ou email — choisissez le mode qui vous convient.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Recevez vos réponses</h3>
              <p className="text-gray-600 text-sm">Analyse précise de votre situation avec des conseils concrets et personnalisés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Ce que disent nos consultants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: 'Le voyant a capté ma situation sans que je dise un mot. Ses prédictions sur mon ex se sont réalisées.', name: 'Marie L.', stars: 5 },
              { text: 'Après des semaines de doute, j\'ai enfin eu des réponses claires. La consultation m\'a vraiment aidée.', name: 'Sophie D.', stars: 5 },
              { text: 'Voyante très à l\'écoute, elle m\'a aidé à comprendre les sentiments de mon partenaire.', name: 'Thomas R.', stars: 5 },
              { text: 'Consultation rapide et précise. Je recommande pour toutes les questions de coeur.', name: 'Nathalie B.', stars: 4 },
            ].map((t, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="mb-2">{'⭐'.repeat(t.stars)}</div>
                <p className="text-gray-700 italic mb-3">"{t.text}"</p>
                <p className="text-sm font-semibold text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voyants */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <VoyantRecommendations
            topic="sentiments"
            title="Nos Voyants Spécialisés Amour"
            subtitle="Disponibles maintenant pour votre consultation"
            limit={3}
            showOnlineFirst={true}
            source="lp-voyance-amour"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ne Restez Plus Dans le Doute</h2>
          <p className="text-lg opacity-95 mb-8">Consultez un voyant spécialisé amour et obtenez des réponses claires maintenant.</p>
          <DynamicCTAButton
            label="Consulter un Voyant Maintenant"
            source="lp-voyance-amour-final"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          />
          <div className="flex justify-center gap-8 mt-6 text-sm opacity-80">
            <span>Paiement sécurisé</span>
            <span>Confidentialité garantie</span>
            <span>7j/7</span>
          </div>
        </div>
      </section>
    </main>
  );
}
