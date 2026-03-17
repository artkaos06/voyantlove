import type { Metadata } from 'next';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Tirage Tarot Amour Gratuit — Votre Prédiction Personnalisée',
  description: 'Recevez votre tirage tarot amour gratuit et personnalisé. Analyse de votre situation sentimentale basée sur votre signe astrologique.',
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
            Recevez Votre Tirage Tarot Amour Gratuit
          </h1>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Découvrez ce que les cartes révèlent sur votre vie sentimentale — analyse personnalisée selon votre signe et votre situation.
          </p>
          <a href="#tirage" className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
            Obtenir Mon Tirage Gratuit ↓
          </a>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Vous vous posez ces questions ?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
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
              <strong>Le tarot amoureux apporte des réponses claires.</strong> Recevez votre tirage personnalisé gratuit ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Lead capture form */}
      <section id="tirage" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <LeadCaptureForm source="lp-voyance-amour" colorScheme="purple" />
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Ce que disent nos consultants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: 'Le tirage gratuit m\'a donné un premier éclairage bluffant. La consultation ensuite a tout confirmé.', name: 'Marie L.', stars: 5 },
              { text: 'J\'étais sceptique, mais la précision du tirage m\'a convaincue de consulter un voyant. Aucun regret.', name: 'Sophie D.', stars: 5 },
              { text: 'Voyante très à l\'écoute, elle m\'a aidé à comprendre les sentiments de mon partenaire.', name: 'Thomas R.', stars: 5 },
              { text: 'Le tirage gratuit m\'a rassurée et m\'a donné le courage de faire une consultation complète.', name: 'Nathalie B.', stars: 4 },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg">
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
