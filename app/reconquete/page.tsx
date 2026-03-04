import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Reconquête Amoureuse : Reconquérir son Ex | Voyance et Tarot',
  description: 'Guide complet pour reconquérir votre ex : stratégies, timing idéal, signes de retour selon le tarot et la voyance.',
  alternates: { canonical: 'https://voyantlove.fr/reconquete' },
};

export default function ReconqueteHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Reconquête Amoureuse : Reconquérir son Ex | Voyance et Tarot',
    description: 'Guide complet pour reconquérir votre ex : stratégies, timing idéal, signes de retour selon le tarot et la voyance.',
    url: 'https://voyantlove.fr/reconquete',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Reconquête Amoureuse', url: 'https://voyantlove.fr/reconquete' },
  ]);

  const organizationSchema = getOrganizationSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Quelle est la meilleure stratégie pour reconquérir son ex selon le tarot ?',
      answer: 'La stratégie la plus efficace selon le tarot repose sur trois piliers : le silence radio initial pour créer le manque, le travail sur soi pour corriger les causes de la rupture, et le timing précis révélé par les cartes pour reprendre contact. Le tarot identifie également les blocages de votre ex et les leviers émotionnels à activer. Chaque reconquête est unique et le voyant adapte la stratégie à votre situation spécifique.',
    },
    {
      question: 'Combien de temps dure une reconquête amoureuse en général ?',
      answer: 'La durée moyenne d\'une reconquête réussie est de 3 à 6 mois selon la gravité de la rupture et les sentiments résiduels. Le tarot affine ce timing en analysant les énergies de votre ex et les transits astrologiques favorables. Les reconquêtes trop rapides (moins d\'un mois) échouent souvent car les problèmes de fond n\'ont pas été résolus. La patience et le timing juste sont les clés du succès.',
    },
    {
      question: 'Le silence radio fonctionne-t-il vraiment pour reconquérir un ex ?',
      answer: 'Le silence radio est la technique la plus recommandée par les voyants et confirmée par le tarot. Il crée un espace de manque chez votre ex, lui permet de réfléchir à la relation, et vous donne le temps de travailler sur vous-même. La durée idéale varie de 3 à 6 semaines selon le contexte. Le tarot révèle le moment précis où briser le silence pour maximiser l\'impact de votre retour.',
    },
    {
      question: 'Comment savoir si la reconquête vaut la peine ou s\'il faut tourner la page ?',
      answer: 'Le tarot répond objectivement à cette question cruciale en analysant les sentiments actuels de votre ex, le potentiel de la relation, et votre compatibilité profonde. Si les cartes montrent un amour résiduel fort et des problèmes résolubles, la reconquête vaut la peine. Si elles montrent de l\'indifférence ou une incompatibilité fondamentale, le voyant vous conseillera honnêtement de tourner la page pour votre bien.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💜 Reconquête Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Stratégies et Guidance pour Reconquérir votre Ex</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot révèle si un retour est possible, le timing idéal et les étapes pour maximiser vos chances.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="purple" method="Tarot de reconquête et guidance stratégique" />

        <VoyantQuickCTA topic="reconquete" source="reconquete-hub-early" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Parcours de Reconquête</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/reconquete/reconquerir-son-ex" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-3xl mb-3">💜</div>
              <h3 className="text-xl font-bold mb-2">Reconquérir son Ex</h3>
              <p className="text-gray-600 text-sm">Guide complet stratégies et étapes</p>
            </Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="text-xl font-bold mb-2">Va-t-il/elle Revenir ?</h3>
              <p className="text-gray-600 text-sm">Réponse honnête du tarot</p>
            </Link>
            <Link href="/reconquete/retour-de-lex" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-violet-500">
              <div className="text-3xl mb-3">↩️</div>
              <h3 className="text-xl font-bold mb-2">Retour de l'Ex</h3>
              <p className="text-gray-600 text-sm">Signes et prédictions</p>
            </Link>
            <Link href="/reconquete/ex-qui-revient" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-3xl mb-3">💕</div>
              <h3 className="text-xl font-bold mb-2">Ex qui Revient</h3>
              <p className="text-gray-600 text-sm">Que faire maintenant ?</p>
            </Link>
            <Link href="/reconquete/seconde-chance-amour" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-2">Seconde Chance</h3>
              <p className="text-gray-600 text-sm">Donner une nouvelle opportunité</p>
            </Link>
            <Link href="/reconquete/se-remettre-ensemble" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-teal-500">
              <div className="text-3xl mb-3">💞</div>
              <h3 className="text-xl font-bold mb-2">Se Remettre Ensemble</h3>
              <p className="text-gray-600 text-sm">Reconstruction du couple</p>
            </Link>
          </div>
        </section>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="reconquete-hub-mid" />

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes sur la Reconquête Amoureuse</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la meilleure stratégie pour reconquérir son ex selon le tarot ?</h3>
              <p className="text-gray-700 leading-relaxed">La stratégie la plus efficace selon le tarot repose sur trois piliers : le silence radio initial pour créer le manque, le travail sur soi pour corriger les causes de la rupture, et le timing précis révélé par les cartes pour reprendre contact. Le tarot identifie également les blocages de votre ex et les leviers émotionnels à activer. Chaque reconquête est unique et le voyant adapte la stratégie à votre situation spécifique.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps dure une reconquête amoureuse en général ?</h3>
              <p className="text-gray-700 leading-relaxed">La durée moyenne d'une reconquête réussie est de 3 à 6 mois selon la gravité de la rupture et les sentiments résiduels. Le tarot affine ce timing en analysant les énergies de votre ex et les transits astrologiques favorables. Les reconquêtes trop rapides (moins d'un mois) échouent souvent car les problèmes de fond n'ont pas été résolus. La patience et le timing juste sont les clés du succès.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le silence radio fonctionne-t-il vraiment pour reconquérir un ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Le silence radio est la technique la plus recommandée par les voyants et confirmée par le tarot. Il crée un espace de manque chez votre ex, lui permet de réfléchir à la relation, et vous donne le temps de travailler sur vous-même. La durée idéale varie de 3 à 6 semaines selon le contexte. Le tarot révèle le moment précis où briser le silence pour maximiser l'impact de votre retour.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si la reconquête vaut la peine ou s'il faut tourner la page ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot répond objectivement à cette question cruciale en analysant les sentiments actuels de votre ex, le potentiel de la relation, et votre compatibilité profonde. Si les cartes montrent un amour résiduel fort et des problèmes résolubles, la reconquête vaut la peine. Si elles montrent de l'indifférence ou une incompatibilité fondamentale, le voyant vous conseillera honnêtement de tourner la page pour votre bien.</p>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="reconquete" source="reconquete-hub-final" />
      </div>
    </main>
  );
}
