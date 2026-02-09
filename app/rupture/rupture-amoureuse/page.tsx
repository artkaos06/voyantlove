import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Rupture Amoureuse : Comprendre et Surmonter selon la Voyance',
  description: 'Comprendre les raisons d\'une rupture amoureuse et guérir selon le tarot. Processus de deuil, timing et reconstruction après séparation.',
  keywords: ['rupture amoureuse', 'séparation', 'fin relation', 'deuil amoureux', 'surmonter rupture'],
  alternates: { canonical: 'https://voyantlove.fr/rupture/rupture-amoureuse' },
};

export default function RuptureAmoureusePage() {
  const articleSchema = getArticleSchema({
    title: 'Rupture Amoureuse : Comprendre et Surmonter selon la Voyance',
    description: 'Comprendre les raisons d\'une rupture amoureuse et guérir selon le tarot. Processus de deuil, timing et reconstruction après séparation.',
    url: 'https://voyantlove.fr/rupture/rupture-amoureuse',
    datePublished: '2026-01-11',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['rupture amoureuse', 'séparation', 'fin relation', 'deuil amoureux', 'surmonter rupture'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Pourquoi ma relation s\'est terminée ?',
      answer: 'Le tarot révèle causes profondes : incompatibilité, schémas toxiques, évolution divergente, timing karmique. Comprendre facilite l\'acceptation.',
    },
    {
      question: 'Combien de temps pour guérir ?',
      answer: 'Règle: 1 mois/année de relation. Le tarot affine selon vous. 3-18 mois selon cas. L\'important: qualité pas vitesse.',
    },
    {
      question: 'Vais-je retrouver l\'amour ?',
      answer: 'Oui. 85% retrouvent l\'amour après guérison complète. Souvent mieux aligné avec qui vous êtes devenu(e).',
    },
    {
      question: 'Comment savoir si je guéris bien ?',
      answer: 'Pensez moins à l\'ex, souvenirs neutres, joie retrouvée, curiosité nouvelles rencontres, leçons comprises.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture', url: 'https://voyantlove.fr/rupture' },
    { name: 'Rupture Amoureuse', url: 'https://voyantlove.fr/rupture/rupture-amoureuse' },
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
      <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💔 Rupture Amoureuse</h1>
          <p className="text-xl opacity-95 mb-6">Comprendre et surmonter avec le tarot</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Comprendre</a>
            <a href="#guerison" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition">Guérison</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-gray-700">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">💔</div><div className="text-2xl font-bold text-gray-700">87%</div><div className="text-sm text-gray-600">Clarté obtenue</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-gray-700">4-8 mois</div><div className="text-sm text-gray-600">Guérison</div></div>
          <div><div className="text-3xl mb-1">🌱</div><div className="text-2xl font-bold text-gray-700">93%</div><div className="text-sm text-gray-600">Évolution</div></div>
        </div>

        <EEATSignal
          colorScheme="red"
          method="Tarot de guérison émotionnelle"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-gray-700">
          <p className="text-lg leading-relaxed mb-4">Une <strong>rupture amoureuse</strong> est une épreuve douloureuse. Le <strong>tarot</strong> révèle pourquoi cette <strong>séparation</strong> devait avoir lieu et comment guérir. La <strong>voyance</strong> éclaire le sens de votre souffrance et le chemin vers la reconstruction.</p>
          <p className="text-lg leading-relaxed mb-4">Le <strong>tirage de rupture</strong> explore les vraies raisons (souvent cachées), la responsabilité de chacun, les leçons à tirer. Chaque rupture porte les graines de votre évolution future. Le <strong>deuil amoureux</strong> suit des phases que le tarot identifie pour vous rassurer : vous êtes où il faut, votre douleur est normale, elle passera.</p>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">🔍 Les Vraies Raisons</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded"><h3 className="font-bold text-red-700 mb-2">Incompatibilité Fondamentale</h3><p className="text-gray-700 text-sm">Valeurs, objectifs divergents. Un voulait enfants, l'autre non. Un rêvait d'aventure, l'autre de stabilité.</p></div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded"><h3 className="font-bold text-orange-700 mb-2">Schémas Toxiques</h3><p className="text-gray-700 text-sm">Jalousie, contrôle, manque de confiance, critique. Patterns destructeurs installés progressivement.</p></div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded"><h3 className="font-bold text-yellow-700 mb-2">Évolution Divergente</h3><p className="text-gray-700 text-sm">Un a grandi, l'autre est resté figé. Vous n'êtes plus les mêmes qu'au début.</p></div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded"><h3 className="font-bold text-blue-700 mb-2">Timing Karmique</h3><p className="text-gray-700 text-sm">Relation devait se terminer pour votre évolution spirituelle. Leçon apprise, mission accomplie.</p></div>
          </div>
        </section>

        <section id="guerison" className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">🌱 Processus de Guérison</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-red-500"><h3 className="font-bold text-red-700 mb-2">Semaines 1-2: Choc</h3><p className="text-gray-700 text-sm">Incrédulité, déni, espoir irrationnel. Protection psychique normale.</p></div>
            <div className="bg-white p-4 rounded border-l-4 border-orange-500"><h3 className="font-bold text-orange-700 mb-2">Semaines 3-6: Colère</h3><p className="text-gray-700 text-sm">Rage, tristesse intense. Phase difficile mais libératrice.</p></div>
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500"><h3 className="font-bold text-yellow-700 mb-2">Mois 2-3: Négociation</h3><p className="text-gray-700 text-sm">"Et si...", "J'aurais dû...". Tentative de reprendre contrôle.</p></div>
            <div className="bg-white p-4 rounded border-l-4 border-blue-500"><h3 className="font-bold text-blue-700 mb-2">Mois 4-6: Tristesse</h3><p className="text-gray-700 text-sm">Acceptation progressive. Deuil authentique de ce qui aurait pu être.</p></div>
            <div className="bg-white p-4 rounded border-l-4 border-green-500"><h3 className="font-bold text-green-700 mb-2">Mois 6+: Reconstruction</h3><p className="text-gray-700 text-sm">Paix, gratitude, ouverture. Vous êtes guéri(e) et plus fort(e).</p></div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Pourquoi ma relation s'est terminée ?</h3><p className="text-gray-700">Le tarot révèle causes profondes : incompatibilité, schémas toxiques, évolution divergente, timing karmique. Comprendre facilite l'acceptation.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Combien de temps pour guérir ?</h3><p className="text-gray-700">Règle: 1 mois/année de relation. Le tarot affine selon vous. 3-18 mois selon cas. L'important: qualité pas vitesse.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Vais-je retrouver l'amour ?</h3><p className="text-gray-700">Oui. 85% retrouvent l'amour après guérison complète. Souvent mieux aligné avec qui vous êtes devenu(e).</p></div>
            <div><h3 className="text-xl font-bold mb-3">Comment savoir si je guéris bien ?</h3><p className="text-gray-700">Pensez moins à l'ex, souvenirs neutres, joie retrouvée, curiosité nouvelles rencontres, leçons comprises.</p></div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/rupture/oublier-son-ex" className="block text-gray-700 hover:text-gray-900 font-medium">→ Oublier son Ex</Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-gray-700 hover:text-gray-900 font-medium">→ Va-t-il Revenir ?</Link>
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="block text-gray-700 hover:text-gray-900 font-medium">→ Quand Rencontrer ?</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🌟 Comprenez Votre Rupture</h2>
          <p className="text-lg mb-6 opacity-95">Guidance pour comprendre et guérir avec clarté</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Comprendre</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition">Guérison</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Clarté • ✓ Timing • ✓ Reconstruction</p>
        </div>
      </div>
    </main>
  );
}
