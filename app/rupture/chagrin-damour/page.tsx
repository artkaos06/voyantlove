import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Chagrin d\'Amour : Guérir et Surmonter selon le Tarot',
  description: 'Comment surmonter un chagrin d\'amour avec la voyance ? Processus de guérison, timing de reconstruction et retrouver la joie de vivre.',
  keywords: ['chagrin d\'amour', 'peine de cœur', 'cœur brisé', 'guérir chagrin', 'surmonter peine'],
  alternates: { canonical: 'https://voyantlove.fr/rupture/chagrin-damour' },
};

export default function ChagrinAmourPage() {
  const articleSchema = getArticleSchema({
    title: 'Chagrin d\'Amour : Guérir et Surmonter selon le Tarot',
    description: 'Comment surmonter un chagrin d\'amour avec la voyance ? Processus de guérison, timing de reconstruction et retrouver la joie de vivre.',
    url: 'https://voyantlove.fr/rupture/chagrin-damour',
    datePublished: '2026-01-13',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['chagrin d\'amour', 'peine de cœur', 'cœur brisé', 'guérir chagrin', 'surmonter peine'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Combien de temps dure un chagrin ?',
      answer: '3-6 mois moyenne, mais chaque personne unique. Le tarot révèle votre timeline. L\'important: profondeur guérison pas vitesse.',
    },
    {
      question: 'Comment savoir si je suis guéri(e) ?',
      answer: 'Pensez rarement à ex, souvenirs ne font plus mal, curieux nouvelles rencontres, retrouvé joie, souhaitez bonheur à ex. Le tarot confirme.',
    },
    {
      question: 'Normal d\'avoir mal après mois ?',
      answer: 'Oui, surtout relations longues. Si après 12 mois douleur toujours vive, consultez thérapeute en complément tarot.',
    },
    {
      question: 'Voyance accélère guérison ?',
      answer: 'Oui, en donnant clarté "pourquoi", rassurance "quand", guidance actions. Compréhension spirituelle facilite acceptation.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture', url: 'https://voyantlove.fr/rupture' },
    { name: 'Chagrin d\'Amour', url: 'https://voyantlove.fr/rupture/chagrin-damour' },
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
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💙 Chagrin d'Amour</h1>
          <p className="text-xl opacity-95 mb-6">Guérir et retrouver l'espoir</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Guidance</a>
            <a href="#etapes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Étapes</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-blue-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">💙</div><div className="text-2xl font-bold text-blue-600">91%</div><div className="text-sm text-gray-600">Se sentent mieux</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-blue-600">3-6 mois</div><div className="text-sm text-gray-600">Guérison</div></div>
          <div><div className="text-3xl mb-1">🌈</div><div className="text-2xl font-bold text-blue-600">87%</div><div className="text-sm text-gray-600">Retrouvent joie</div></div>
        </div>

        <EEATSignal
          colorScheme="red"
          method="Tarot de guérison émotionnelle"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-blue-600">
          <p className="text-lg leading-relaxed mb-4">Un <strong>chagrin d'amour</strong> peut sembler insurmontable. Le <strong>tarot</strong> vous accompagne avec compassion dans ce processus douloureux mais nécessaire. La <strong>voyance</strong> éclaire le chemin de guérison et vous rassure : cette douleur est temporaire.</p>
          <p className="text-lg leading-relaxed mb-4">Le <strong>tirage du chagrin</strong> vous aide à comprendre pourquoi vous souffrez tant, combien de temps durera cette phase, et comment transformer l'épreuve en force. Chaque <strong>cœur brisé</strong> contient les graines d'une version plus forte de vous-même.</p>
          <p className="text-lg leading-relaxed">La <strong>guérison</strong> n'est pas linéaire - vous aurez des hauts et des bas. Le tarot vous guide jour après jour, encourage dans les moments difficiles, célèbre vos progrès.</p>
        </article>

        <section id="etapes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">💔 Étapes de Guérison</h2>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-500"><h3 className="font-bold text-red-700 mb-2">Semaines 1-2: Choc</h3><p className="text-gray-700 text-sm">Douleur aiguë, pleurs fréquents, difficulté à fonctionner. NORMAL. Soyez doux avec vous.</p></div>
            <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500"><h3 className="font-bold text-orange-700 mb-2">Semaines 3-6: Déni</h3><p className="text-gray-700 text-sm">Alternance espoir/acceptation. Pensées constantes. Phase épuisante mais passagère.</p></div>
            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500"><h3 className="font-bold text-yellow-700 mb-2">Mois 2-3: Tristesse</h3><p className="text-gray-700 text-sm">Acceptation progressive. Encore triste mais moins intense. Début reconstruction identité.</p></div>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500"><h3 className="font-bold text-green-700 mb-2">Mois 4-6: Émergence</h3><p className="text-gray-700 text-sm">Retour joie de vivre. Pensez moins à l'ex. Projets futurs. Ouverture nouvelles rencontres.</p></div>
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500"><h3 className="font-bold text-blue-700 mb-2">Mois 6+: Guérison</h3><p className="text-gray-700 text-sm">Paix intérieure, gratitude leçons, prêt à aimer. Vous êtes plus fort(e) qu'avant.</p></div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">🌟 Actions pour Guérir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded border-l-4 border-blue-500"><h3 className="font-bold mb-3 text-blue-700">Autorisez Souffrance</h3><ul className="text-gray-700 text-sm space-y-1"><li>• Pleurez autant que nécessaire</li><li>• N'enfouissez pas émotions</li><li>• Parlez à amis bienveillants</li><li>• Écrivez ce que vous ressentez</li></ul></div>
            <div className="bg-white p-6 rounded border-l-4 border-purple-500"><h3 className="font-bold mb-3 text-purple-700">Coupez Contact</h3><ul className="text-gray-700 text-sm space-y-1"><li>• Pas de stalking réseaux</li><li>• Bloquez temporairement</li><li>• Évitez lieux communs</li><li>• Rangez photos souvenirs</li></ul></div>
            <div className="bg-white p-6 rounded border-l-4 border-green-500"><h3 className="font-bold mb-3 text-green-700">Prenez Soin</h3><ul className="text-gray-700 text-sm space-y-1"><li>• Mangez sainement</li><li>• Bougez (sport, marche, yoga)</li><li>• Dormez suffisamment</li><li>• Massages, chouchoutez-vous</li></ul></div>
            <div className="bg-white p-6 rounded border-l-4 border-pink-500"><h3 className="font-bold mb-3 text-pink-700">Recréez Identité</h3><ul className="text-gray-700 text-sm space-y-1"><li>• Redécouvrez passions</li><li>• Voyez amis régulièrement</li><li>• Essayez nouvelles activités</li><li>• Redéfinissez qui vous êtes</li></ul></div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Combien de temps dure un chagrin ?</h3><p className="text-gray-700">3-6 mois moyenne, mais chaque personne unique. Le tarot révèle votre timeline. L'important: profondeur guérison pas vitesse.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Comment savoir si je suis guéri(e) ?</h3><p className="text-gray-700">Pensez rarement à ex, souvenirs ne font plus mal, curieux nouvelles rencontres, retrouvé joie, souhaitez bonheur à ex. Le tarot confirme.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Normal d'avoir mal après mois ?</h3><p className="text-gray-700">Oui, surtout relations longues. Si après 12 mois douleur toujours vive, consultez thérapeute en complément tarot.</p></div>
            <div><h3 className="text-xl font-bold mb-3">Voyance accélère guérison ?</h3><p className="text-gray-700">Oui, en donnant clarté "pourquoi", rassurance "quand", guidance actions. Compréhension spirituelle facilite acceptation.</p></div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/rupture/oublier-son-ex" className="block text-blue-600 hover:text-blue-800 font-medium">→ Oublier son Ex</Link>
            <Link href="/rupture/rupture-amoureuse" className="block text-blue-600 hover:text-blue-800 font-medium">→ Comprendre Rupture</Link>
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="block text-blue-600 hover:text-blue-800 font-medium">→ Quand Rencontrer ?</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💙 Guidance Bienveillante</h2>
          <p className="text-lg mb-6 opacity-95">Accompagnement pour surmonter votre chagrin</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Consultation</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Tirage</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Compassion • ✓ Timeline • ✓ Actions</p>
        </div>
      </div>
    </main>
  );
}
