import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Reconquérir son Ex : Voyance et Tarot | Guidance Retour',
  description: 'Comment reconquérir votre ex selon la voyance et le tarot ? Découvrez le timing idéal, les étapes de reconquête et ce que votre ex ressent vraiment.',
  keywords: ['reconquérir son ex', 'reconquête amoureuse', 'retour ex', 'tarot ex', 'voyance retour'],
  alternates: { canonical: 'https://voyantlove.fr/reconquete/reconquerir-son-ex' },
};

export default function ReconquerirSonExPage() {
  const articleSchema = getArticleSchema({
    title: 'Reconquérir son Ex : Voyance et Tarot | Guidance Retour',
    description: 'Comment reconquérir votre ex selon la voyance et le tarot ? Découvrez le timing idéal, les étapes de reconquête et ce que votre ex ressent vraiment.',
    url: 'https://voyantlove.fr/reconquete/reconquerir-son-ex',
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['reconquérir son ex', 'reconquête amoureuse', 'retour ex', 'tarot ex', 'voyance retour'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Le tarot peut-il me dire avec certitude si mon ex va revenir ?',
      answer: 'Le tarot révèle les énergies actuelles et les potentiels selon la trajectoire présente. Il indique si un retour est probable, les conditions nécessaires, et le timing favorable. Le libre arbitre reste déterminant. Le tarot vous dit si vous devez garder espoir et agir, ou tourner la page.',
    },
    {
      question: 'Combien de temps attendre avant de reconquérir son ex ?',
      answer: 'Silence radio idéal : 3-4 semaines pour ruptures courtes, 6-8 semaines pour relations longues. Le tarot affine ce timing selon votre situation et l\'évolution de votre ex. Ce temps permet au manque de s\'installer et à chacun de prendre du recul.',
    },
    {
      question: 'Quels signes astrologiques indiquent un retour possible ?',
      answer: 'Vénus rétrograde ramène souvent d\'anciens amours. Les transits de Vénus sur votre Soleil ou Vénus natale favorisent les retours. La synastrie révèle si vous êtes destinés à vous retrouver. Un voyant analyse ces configurations pour identifier les périodes propices.',
    },
    {
      question: 'Comment savoir ce que mon ex ressent vraiment ?',
      answer: 'Un voyant capte émotions et pensées via tarot, clairvoyance ou lecture énergétique. Le tirage révèle s\'il/elle éprouve encore de l\'amour, des regrets, de la colère, ou a tourné la page. Cette clarté aide à décider de votre stratégie.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Reconquête', url: 'https://voyantlove.fr/reconquete' },
    { name: 'Reconquérir son Ex', url: 'https://voyantlove.fr/reconquete/reconquerir-son-ex' },
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
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/reconquete" className="text-white/80 hover:text-white mb-4 inline-block">← Reconquête</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💜 Reconquérir son Ex</h1>
          <p className="text-xl opacity-95 mb-6">Guidance tarot et voyance pour le retour de votre ex</p>
          <a href="#consultation" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Reconquête</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-purple-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">✓</div><div className="text-2xl font-bold text-purple-600">65%</div><div className="text-sm text-gray-600">Taux retour</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-purple-600">3-8 sem</div><div className="text-sm text-gray-600">Délai moyen</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-purple-600">15 ans</div><div className="text-sm text-gray-600">Expérience</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Tarot de la reconquête amoureuse"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-600">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Reconquérir son ex</strong> après une <strong>rupture amoureuse</strong> est possible selon la <strong>voyance</strong> et le <strong>tarot</strong>. Les cartes révèlent que 65-70% des couples se remettent ensemble après avoir travaillé sur les causes de la séparation. Le <strong>tarot amoureux</strong> peut vous guider sur le moment idéal pour agir et les étapes à suivre pour maximiser vos chances de succès.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>reconquête</strong> ne signifie pas supplier ou harceler votre <strong>ex</strong>. Il s'agit d'une démarche stratégique et spirituelle basée sur l'évolution personnelle, le bon timing astrologique, et la compréhension profonde des énergies en jeu. Le <strong>tarot</strong> révèle si un retour est dans votre intérêt ou si vous devez tourner la page.
          </p>
          <p className="text-lg leading-relaxed">
            La <strong>reconquête</strong> réussit quand elle part d'un lieu d'amour authentique, pas de désespoir ou de peur de la solitude. La <strong>voyance</strong> vous aide à discerner vos vraies motivations et à agir avec sagesse. Découvrez toutes nos guidances sur <Link href="/" className="text-purple-600 hover:text-purple-800 underline font-medium">VoyantLove</Link> pour une vision complète de la voyance amoureuse.
          </p>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur la Reconquête</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le tirage spécifique de reconquête analyse quatre positions clés pour éclairer votre situation et vos chances de succès.
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700">1. Sentiments Actuels de Votre Ex</h3>
              <p className="text-gray-700">Le tarot capte ce que votre ex ressent vraiment maintenant : amour résiduel, regrets, colère, indifférence. Cette carte est déterminante.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">2. Obstacles à la Réconciliation</h3>
              <p className="text-gray-700">Qu'est-ce qui bloque le retour ? Fierté, nouvelle relation, blessure profonde, peur de souffrir à nouveau ? Le tarot identifie les vrais obstacles.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700">3. Ce que Vous Devez Changer</h3>
              <p className="text-gray-700">Le tarot révèle votre part de responsabilité et les évolutions personnelles nécessaires pour que la relation fonctionne cette fois.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">4. Issue Probable et Timing</h3>
              <p className="text-gray-700">La carte finale indique si la reconquête est probable et dans combien de temps. Elle guide votre stratégie d'action.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⏰ Le Timing Idéal pour Agir</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold mb-2 text-purple-700">Silence Radio Initial (3-8 semaines)</h3>
              <p className="text-gray-700 text-sm">Aucun contact après la rupture. Permet au manque de s'installer et à chacun de prendre du recul. Durée selon longueur relation.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">Vénus Rétrograde (Période Puissante)</h3>
              <p className="text-gray-700 text-sm">Tous les 18 mois, Vénus rétrograde ramène les anciens amours. Moment astrologique idéal pour la reconquête (40 jours).</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold mb-2 text-indigo-700">Transits de Vénus (Moments Favorables)</h3>
              <p className="text-gray-700 text-sm">Quand Vénus transite sur votre Soleil ou Vénus natale. Périodes d'ouverture du cœur et de réconciliation naturelle.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Les 5 Étapes de la Reconquête Réussie</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Silence Radio Complet</h3>
                <p className="text-gray-700">Aucun contact pendant 3-8 semaines minimum. Pas de messages, likes, ou tentatives de "rester amis". Le manque doit s'installer.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Travail sur Soi Authentique</h3>
                <p className="text-gray-700">Thérapie, développement personnel, nouveaux hobbies, sport. Devenez la meilleure version de vous-même, pas pour votre ex mais pour vous.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reprise de Contact Subtile</h3>
                <p className="text-gray-700">Message court et léger après le silence radio. Pas de déclaration, juste une connexion amicale. Testez la réceptivité.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reconstruction Progressive de la Confiance</h3>
                <p className="text-gray-700">Discussions honnêtes sur les causes de rupture. Chacun exprime ses besoins et ses limites. Pardon mutuel authentique.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Nouvelle Relation, Pas Continuation</h3>
                <p className="text-gray-700">Ne reprenez pas là où vous étiez. Recommencez avec de nouvelles bases, nouvelles règles, nouvelle dynamique plus saine.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❌ Les Erreurs à Éviter Absolument</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Harceler votre ex</strong> : Messages répétés, stalking réseaux sociaux, apparitions "par hasard". Vous paraissez désespéré(e).</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Supplier ou implorer</strong> : "Je ne peux pas vivre sans toi". Vous perdez votre dignité et votre attractivité.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Culpabiliser</strong> : "Tu me dois une chance", "Après tout ce que j'ai fait". La manipulation ne fonctionne jamais.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Agir par désespoir</strong> : Reconquérir par peur de solitude, pas par amour authentique. Voué à l'échec.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Ignorer les vraies causes</strong> : Reprendre sans avoir résolu les problèmes fondamentaux. Même rupture garantie.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot peut-il me dire avec certitude si mon ex va revenir ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot révèle les énergies actuelles et les potentiels selon la trajectoire présente. Il indique si un retour est probable, les conditions nécessaires, et le timing favorable. Le libre arbitre reste déterminant. Le tarot vous dit si vous devez garder espoir et agir, ou tourner la page.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps attendre avant de reconquérir son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Silence radio idéal : 3-4 semaines pour ruptures courtes, 6-8 semaines pour relations longues. Le tarot affine ce timing selon votre situation et l'évolution de votre ex. Ce temps permet au manque de s'installer et à chacun de prendre du recul.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels signes astrologiques indiquent un retour possible ?</h3>
              <p className="text-gray-700 leading-relaxed">Vénus rétrograde ramène souvent d'anciens amours. Les transits de Vénus sur votre Soleil ou Vénus natale favorisent les retours. La synastrie révèle si vous êtes destinés à vous retrouver. Un voyant analyse ces configurations pour identifier les périodes propices.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir ce que mon ex ressent vraiment ?</h3>
              <p className="text-gray-700 leading-relaxed">Un voyant capte émotions et pensées via tarot, clairvoyance ou lecture énergétique. Le tirage révèle s'il/elle éprouve encore de l'amour, des regrets, de la colère, ou a tourné la page. Cette clarté aide à décider de votre stratégie.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-purple-600 hover:text-purple-800 font-medium">→ Va-t-il/elle Revenir ?</Link>
            <Link href="/reconquete/ex-qui-revient" className="block text-purple-600 hover:text-purple-800 font-medium">→ Mon Ex qui Revient</Link>
            <Link href="/reconquete/ex-revient-silence-radio" className="block text-purple-600 hover:text-purple-800 font-medium">→ Ex qui Revient après Silence Radio</Link>
            <Link href="/reconquete/seconde-chance-amour" className="block text-purple-600 hover:text-purple-800 font-medium">→ Seconde Chance en Amour</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🔮 Consultation Reconquête Personnalisée</h2>
          <p className="text-lg mb-6 opacity-95">Obtenez guidance tarot pour reconquérir votre ex avec sagesse</p>
          <a href="#consultation" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Réserver une Consultation</a>
          <p className="mt-6 text-sm opacity-90">✓ Analyse situation • ✓ Timing idéal • ✓ Stratégie personnalisée</p>
        </div>
      </div>
    </main>
  );
}
