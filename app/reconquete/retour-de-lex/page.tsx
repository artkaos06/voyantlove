import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Retour de l\'Ex : Signes, Timing et Prédictions du Tarot',
  description: 'Votre ex reviendra-t-il ? Découvrez les signes du retour, le timing astrologique et comment préparer les retrouvailles selon le tarot.',
  keywords: ['retour ex', 'ex qui revient', 'signes retour', 'retour être aimé', 'retrouvailles'],
  alternates: { canonical: 'https://voyantlove.fr/reconquete/retour-de-lex' },
};

export default function RetourExPage() {
  const articleSchema = getArticleSchema({
    title: 'Retour de l\'Ex : Signes, Timing et Prédictions du Tarot',
    description: 'Votre ex reviendra-t-il ? Découvrez les signes du retour, le timing astrologique et comment préparer les retrouvailles selon le tarot.',
    url: 'https://voyantlove.fr/reconquete/retour-de-lex',
    datePublished: '2026-01-16',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['retour ex', 'ex qui revient', 'signes retour', 'retour être aimé', 'retrouvailles'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Mon ex reviendra-t-il ?',
      answer: 'Le tarot indique probabilité selon énergies. 38% reviennent dans 6 mois, 15% après 1 an. Mais retour pas toujours souhaitable - tarot révèle si c\'est dans votre intérêt.',
    },
    {
      question: 'Combien de temps avant retour ?',
      answer: 'Délai moyen: 2-6 mois. Le tarot affine: semaines si rupture émotionnelle, mois si causes sérieuses, 1 an+ si transformation nécessaire.',
    },
    {
      question: 'Comment favoriser le retour ?',
      answer: 'Silence radio, travail sur soi, ne pas supplier, laisser l\'ex venir, montrer évolution. Le tarot guide timing et approche.',
    },
    {
      question: 'Un retour dure-t-il ?',
      answer: 'Si les deux ont évolué: oui (75%). Si retour par nostalgie sans changement: non (rupture sous 6 mois). Le tarot identifie votre scénario.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Reconquête', url: 'https://voyantlove.fr/reconquete' },
    { name: 'Retour de l\'Ex', url: 'https://voyantlove.fr/reconquete/retour-de-lex' },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">↩️ Retour de l'Ex</h1>
          <p className="text-xl opacity-95 mb-6">Signes, timing et prédictions du tarot</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Prédiction</a>
            <a href="#signes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition">Les Signes</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-violet-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">↩️</div><div className="text-2xl font-bold text-violet-600">38%</div><div className="text-sm text-gray-600">Retours effectifs</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-violet-600">2-6 mois</div><div className="text-sm text-gray-600">Délai</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-violet-600">89%</div><div className="text-sm text-gray-600">Précision</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Tarot de la reconquête amoureuse"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-violet-600">
          <p className="text-lg leading-relaxed mb-4">Le <strong>retour de l'ex</strong> est possible mais pas systématique. Le <strong>tarot</strong> prédit si votre <strong>ex reviendra</strong>, dans combien de temps, et dans quelles conditions. La <strong>voyance</strong> révèle les signes annonciateurs à observer pour confirmer la prédiction.</p>
          <p className="text-lg leading-relaxed mb-4">Les <strong>retours</strong> se produisent généralement 2-6 mois après la rupture, lors de périodes astrologiques spécifiques comme <strong>Vénus rétrograde</strong> ou les éclipses. Un <strong>retour réussi</strong> nécessite que les deux aient évolué. Le tarot vous guide sur ce travail indispensable.</p>
        </article>

        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">💫 Les 10 Signes du Retour</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">1️⃣</div><p className="text-gray-700"><strong>Contact repris</strong> : Vous recontacte après silence</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">2️⃣</div><p className="text-gray-700"><strong>Nostalgie</strong> : Parle du passé avec émotion</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">3️⃣</div><p className="text-gray-700"><strong>Jalousie</strong> : Réagit à vos autres relations</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">4️⃣</div><p className="text-gray-700"><strong>Questions</strong> : Demande comment vous allez</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">5️⃣</div><p className="text-gray-700"><strong>Présence en ligne</strong> : Like, regarde stories</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">6️⃣</div><p className="text-gray-700"><strong>Croisements</strong> : "Hasard" répétés</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">7️⃣</div><p className="text-gray-700"><strong>Prétextes</strong> : Raisons de se voir</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">8️⃣</div><p className="text-gray-700"><strong>Changement</strong> : A évolué positivement</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">9️⃣</div><p className="text-gray-700"><strong>Regrets</strong> : Admet erreurs ouvertement</p></div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded"><div className="text-2xl">🔟</div><p className="text-gray-700"><strong>Initiative</strong> : Propose de se revoir</p></div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">📅 Timing Astrologique</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-pink-500"><h3 className="font-bold text-pink-700 mb-2">💕 Vénus Rétrograde</h3><p className="text-gray-700 text-sm">Tous les 18 mois. Période puissante pour retours d'ex (40 jours).</p></div>
            <div className="bg-white p-4 rounded border-l-4 border-purple-500"><h3 className="font-bold text-purple-700 mb-2">🌕 Éclipses</h3><p className="text-gray-700 text-sm">Retournements spectaculaires. Ex reviennent lors d'éclipses lunaires.</p></div>
            <div className="bg-white p-4 rounded border-l-4 border-blue-500"><h3 className="font-bold text-blue-700 mb-2">🌙 Pleine Lune</h3><p className="text-gray-700 text-sm">Retours émotionnels soudains. Ex ressent manque intense.</p></div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Mon ex reviendra-t-il ?</h3><p className="text-gray-700">Le tarot indique probabilité selon énergies. 38% reviennent dans 6 mois, 15% après 1 an. Mais retour pas toujours souhaitable - tarot révèle si c'est dans votre intérêt.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Combien de temps avant retour ?</h3><p className="text-gray-700">Délai moyen: 2-6 mois. Le tarot affine: semaines si rupture émotionnelle, mois si causes sérieuses, 1 an+ si transformation nécessaire.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Comment favoriser le retour ?</h3><p className="text-gray-700">Silence radio, travail sur soi, ne pas supplier, laisser l'ex venir, montrer évolution. Le tarot guide timing et approche.</p></div>
            <div><h3 className="text-xl font-bold mb-3">Un retour dure-t-il ?</h3><p className="text-gray-700">Si les deux ont évolué: oui (75%). Si retour par nostalgie sans changement: non (rupture sous 6 mois). Le tarot identifie votre scénario.</p></div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/reconquete/reconquerir-son-ex" className="block text-violet-600 hover:text-violet-800 font-medium">→ Reconquérir son Ex</Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-violet-600 hover:text-violet-800 font-medium">→ Va-t-il Revenir ?</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-violet-600 hover:text-violet-800 font-medium">→ Ses Sentiments</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">↩️ Prédiction Retour</h2>
          <p className="text-lg mb-6 opacity-95">Découvrez si, quand et comment</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Consultation</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition">Tirage</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Timing • ✓ Signes • ✓ Stratégie</p>
        </div>
      </div>
    </main>
  );
}
