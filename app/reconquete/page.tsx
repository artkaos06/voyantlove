import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Reconquête Amoureuse : Reconquérir son Ex | Voyance et Tarot',
  description: 'Guide complet pour reconquérir votre ex : stratégies, timing idéal, signes de retour selon le tarot et la voyance.',
  alternates: { canonical: 'https://www.voyantlove.fr/reconquete/' },
};

export default function ReconqueteHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Reconquête Amoureuse : Reconquérir son Ex | Voyance et Tarot',
    description: 'Guide complet pour reconquérir votre ex : stratégies, timing idéal, signes de retour selon le tarot et la voyance.',
    url: 'https://www.voyantlove.fr/reconquete/',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête Amoureuse', url: 'https://www.voyantlove.fr/reconquete/' },
  ]);

  const organizationSchema = getOrganizationSchema();
  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Comment reconquérir son ex avec le tarot ?',
      answer: 'La stratégie la plus efficace selon le tarot repose sur trois piliers : le silence radio initial pour créer le manque, le travail sur soi pour corriger les causes de la rupture, et le timing précis révélé par les cartes pour reprendre contact. Le tarot identifie également les blocages de votre ex et les leviers émotionnels à activer. Chaque reconquête est unique et le voyant adapte la stratégie à votre situation spécifique.',
    },
    {
      question: 'Combien de temps pour reconquérir son ex ?',
      answer: 'La durée moyenne d\'une reconquête réussie est de 3 à 6 mois selon la gravité de la rupture et les sentiments résiduels. Le tarot affine ce timing en analysant les énergies de votre ex et les transits astrologiques favorables. Les reconquêtes trop rapides (moins d\'un mois) échouent souvent car les problèmes de fond n\'ont pas été résolus. La patience et le timing juste sont les clés du succès.',
    },
    {
      question: 'Le silence radio fonctionne-t-il pour récupérer son ex ?',
      answer: 'Le silence radio est la technique la plus recommandée par les voyants et confirmée par le tarot. Il crée un espace de manque chez votre ex, lui permet de réfléchir à la relation, et vous donne le temps de travailler sur vous-même. La durée idéale varie de 3 à 6 semaines selon le contexte. Le tarot révèle le moment précis où briser le silence pour maximiser l\'impact de votre retour.',
    },
    {
      question: 'Reconquête ou tourner la page : comment savoir ?',
      answer: 'Le tarot répond objectivement à cette question cruciale en analysant les sentiments actuels de votre ex, le potentiel de la relation, et votre compatibilité profonde. Si les cartes montrent un amour résiduel fort et des problèmes résolubles, la reconquête vaut la peine. Si elles montrent de l\'indifférence ou une incompatibilité fondamentale, le voyant vous conseillera honnêtement de tourner la page pour votre bien.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💜 Reconquête Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Stratégies et Guidance pour Reconquérir votre Ex</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">En <Link href="/" className="text-white underline hover:text-white/80 font-medium">voyance amoureuse</Link>, le tarot révèle si un retour est possible, le timing idéal et les étapes pour maximiser vos chances.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="purple" method="Tarot de reconquête et guidance stratégique" />

        <VoyantQuickCTA topic="reconquete" source="reconquete-hub-early" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Parcours de Reconquête</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le parcours de reconquête amoureuse comprend six axes : reconquérir son ex, savoir s'il va revenir, interpréter les signes du retour, gérer un ex qui revient, accorder une seconde chance, et se remettre ensemble durablement.</p>
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
            <Link href="/reconquete/lettre-a-son-ex" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-xl font-bold mb-2">Lettre à son Ex</h3>
              <p className="text-gray-600 text-sm">Comment écrire une lettre de reconquête authentique et touchante.</p>
            </Link>
            <Link href="/reconquete/silence-radio-reconquete" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-3xl mb-3">🤫</div>
              <h3 className="text-xl font-bold mb-2">Silence Radio</h3>
              <p className="text-gray-600 text-sm">La stratégie du silence radio pour déclencher le manque et le retour.</p>
            </Link>
          </div>
        </section>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="reconquete-hub-mid" />

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes sur la Reconquête Amoureuse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les questions les plus posées en reconquête amoureuse portent sur la meilleure stratégie selon le tarot, la durée moyenne du processus, l'efficacité du silence radio et l'intérêt de poursuivre ou d'abandonner.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment reconquérir son ex avec le tarot ?</h3>
              <p className="text-gray-700 leading-relaxed">La stratégie la plus efficace selon le tarot repose sur trois piliers : le silence radio initial pour créer le manque, le travail sur soi pour corriger les causes de la rupture, et le timing précis révélé par les cartes pour reprendre contact. Notre guide complet pour <Link href="/reconquete/reconquerir-son-ex" className="text-purple-600 hover:text-purple-800 underline font-medium">reconquérir son ex</Link> détaille chacun de ces piliers avec des exemples concrets. Le tarot identifie également les blocages de votre ex et les leviers émotionnels à activer. Chaque reconquête est unique et le voyant adapte la stratégie à votre situation spécifique.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps pour reconquérir son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">La durée moyenne d'une reconquête réussie est de 3 à 6 mois selon la gravité de la rupture et les sentiments résiduels. Le tarot affine ce timing en analysant les énergies de votre ex et les transits astrologiques favorables. Les reconquêtes trop rapides (moins d'un mois) échouent souvent car les problèmes de fond n'ont pas été résolus. La patience et le timing juste sont les clés du succès.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le silence radio fonctionne-t-il pour récupérer son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Le silence radio est la technique la plus recommandée par les voyants et confirmée par le tarot. Il crée un espace de manque chez votre ex, lui permet de réfléchir à la relation, et vous donne le temps de travailler sur vous-même. La durée idéale varie de 3 à 6 semaines selon le contexte. Le tarot révèle le moment précis où briser le silence pour maximiser l'impact de votre retour.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reconquête ou tourner la page : comment savoir ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot répond objectivement à cette question cruciale en analysant les sentiments actuels de votre ex, le potentiel de la relation, et votre compatibilité profonde. Si les cartes montrent un amour résiduel fort et des problèmes résolubles, la reconquête vaut la peine. Si elles montrent de l'indifférence ou une incompatibilité fondamentale, le voyant vous conseillera honnêtement de tourner la page pour votre bien.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Thèmes Connexes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La reconquête amoureuse est liée à trois thèmes connexes : comprendre les causes de la rupture, décrypter les sentiments de votre ex, et choisir la méthode de voyance adaptée à votre situation.</p>
          <p className="text-gray-700 mb-4">La reconquête amoureuse touche à plusieurs dimensions de la vie sentimentale. Explorez nos guidances complémentaires pour une vision complète de votre situation.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/rupture" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Rupture Amoureuse</h3>
              <p className="text-sm text-gray-600">Comprendre les causes profondes de la séparation pour mieux reconstruire.</p>
            </Link>
            <Link href="/sentiments" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Sentiments Amoureux</h3>
              <p className="text-sm text-gray-600">Décrypter les vrais sentiments de votre ex avant de tenter la reconquête.</p>
            </Link>
            <Link href="/methodes-voyance" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Méthodes de Voyance</h3>
              <p className="text-sm text-gray-600">Tarot, oracle et astrologie pour guider votre stratégie de reconquête.</p>
            </Link>
          </div>
        </section>

        {/* Cross-hub navigation */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sujets Connexes</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/sentiments/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="font-bold text-purple-700 mb-1">Sentiments & Avenir</h3>
                <p className="text-sm text-gray-600">M&apos;aime-t-il, compatibilit&eacute;, avenir amoureux</p>
              </Link>
              <Link href="/rupture/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="font-bold text-purple-700 mb-1">Rupture & Gu&eacute;rison</h3>
                <p className="text-sm text-gray-600">Surmonter la rupture, oublier son ex, se reconstruire</p>
              </Link>
              <Link href="/nouvelle-rencontre/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="font-bold text-purple-700 mb-1">Nouvelle Rencontre</h3>
                <p className="text-sm text-gray-600">Trouver l&apos;amour, &acirc;me s&oelig;ur, rencontre amoureuse</p>
              </Link>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="reconquete" source="reconquete-hub-final" />
      </div>
    </main>
  );
}
