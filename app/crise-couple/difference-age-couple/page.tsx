import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Différence d\'Âge en Couple : Voyance et Compatibilité',
  description: 'Une grande différence d\'âge dans votre couple ? Le tarot éclaire les défis réels et le potentiel de compatibilité durable de votre relation.',
  keywords: ['différence d\'âge couple voyance', 'grand écart âge relation', 'compatibilité âge tarot', 'couple différence âge importante', 'relation écart âge'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/crise-couple/difference-age-couple/',
  },
};

export default function DifferenceAgeCouplePage() {
  const articleSchema = getArticleSchema({
    title: 'Différence d\'Âge en Couple : Voyance et Compatibilité',
    description: 'Une grande différence d\'âge dans votre couple ? Le tarot éclaire les défis réels et le potentiel de compatibilité durable de votre relation.',
    url: 'https://www.voyantlove.fr/crise-couple/difference-age-couple/',
    datePublished: '2026-07-22',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['différence d\'âge couple voyance', 'grand écart âge relation', 'compatibilité âge tarot', 'couple différence âge importante', 'relation écart âge'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Une grande différence d\'âge peut-elle fonctionner en couple ?',
      answer: 'Oui, de nombreux couples avec un écart d\'âge important construisent des relations durables et épanouies. Le succès dépend moins du nombre d\'années d\'écart que de la maturité émotionnelle partagée, des valeurs communes et de la capacité à traverser ensemble les étapes de vie différentes. Le tarot évalue la solidité énergétique du lien au-delà de la simple donnée chronologique.',
    },
    {
      question: 'Quel écart d\'âge pose vraiment problème en couple ?',
      answer: 'Il n\'existe pas de seuil universel : un écart de quinze ans peut être harmonieux si la maturité et les projets de vie s\'alignent, tandis qu\'un écart de cinq ans peut poser problème si les priorités diffèrent radicalement. Ce qui compte davantage que le chiffre est l\'écart de maturité émotionnelle réelle et la compatibilité des étapes de vie envisagées par chaque partenaire.',
    },
    {
      question: 'Comment gérer le jugement de l\'entourage sur notre différence d\'âge ?',
      answer: 'Le jugement extérieur reflète souvent des préjugés sociaux plus que la réalité de votre relation. Se concentrer sur la solidité interne du couple plutôt que sur l\'approbation externe, et choisir ses cercles de confiance, aide à préserver la relation de ces pressions. Le tarot indique généralement que les couples résilients face au jugement extérieur en ressortent renforcés.',
    },
    {
      question: 'La différence d\'âge affecte-t-elle les projets d\'avenir du couple ?',
      answer: 'Elle peut créer des désalignements sur des sujets comme la parentalité, la retraite ou le rythme de vie souhaité, qu\'il est essentiel d\'aborder ouvertement et tôt dans la relation. Une différence d\'âge bien gérée implique une communication claire sur ces attentes de vie, plutôt qu\'un évitement du sujet qui génère des tensions futures.',
    },
    {
      question: 'Le tarot peut-il confirmer la compatibilité malgré l\'écart d\'âge ?',
      answer: 'Le tarot évalue la compatibilité énergétique réelle entre deux personnes, indépendamment de leur âge chronologique. Des cartes comme Les Amoureux ou le Deux de Coupe confirment une harmonie profonde malgré l\'écart, tandis que d\'autres configurations révèlent des désalignements à travailler consciemment pour construire une relation équilibrée et durable.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://www.voyantlove.fr/crise-couple/' },
    { name: 'Différence d\'Âge', url: 'https://www.voyantlove.fr/crise-couple/difference-age-couple/' },
  ]);

  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/crise-couple" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Crises de Couple</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{'⏳'} Différence d&apos;Âge en Couple</h1>
          <p className="text-xl opacity-95 mb-6">Ce que le tarot révèle sur la compatibilité au-delà des années</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#defis" className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Défis Spécifiques</a>
            <a href="#regard" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-700 transition">Le Regard des Autres</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">{'\u{1F52E}'}</div><div className="text-2xl font-bold text-cyan-700">Reconnue</div><div className="text-sm text-gray-600">Expertise</div></div>
          <div><div className="text-3xl mb-1">{'⏳'}</div><div className="text-2xl font-bold text-cyan-700">2,500+</div><div className="text-sm text-gray-600">Tirages réalisés</div></div>
          <div><div className="text-3xl mb-1">{'⭐'}</div><div className="text-2xl font-bold text-cyan-700">4.6/5</div><div className="text-sm text-gray-600">187 avis</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F512}'}</div><div className="text-2xl font-bold text-cyan-700">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="cyan" method="Tarot de compatibilité et guidance de couple" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-cyan-600">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Une <strong>différence d&apos;âge</strong> importante dans un couple soulève souvent des interrogations légitimes, entre le <strong>jugement de l&apos;entourage</strong> et les questionnements internes sur la durabilité de la relation. Le <strong>tarot de compatibilité</strong> permet d&apos;évaluer ce qui compte réellement : la <strong>maturité émotionnelle partagée</strong>, l&apos;alignement des valeurs et la capacité à traverser ensemble des étapes de vie parfois décalées.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Le succès d&apos;un couple ne se mesure pas au nombre d&apos;années d&apos;écart, mais à la profondeur du lien construit. Pour approfondir votre analyse de couple au-delà de cette question spécifique, notre guide sur la <Link href="/sentiments/compatibilite-amoureuse" className="text-cyan-700 hover:text-cyan-900 underline font-medium">compatibilité amoureuse</Link> complète cette guidance.
            </p>
            <p className="text-lg leading-relaxed">
              Que votre entourage soutienne ou questionne votre relation, la <strong>voyance</strong> offre un regard neutre et énergétique sur le véritable potentiel de votre couple, loin des <strong>préjugés sociaux</strong> liés à l&apos;âge.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="crise-couple" source="difference-age-early" />

        {/* H2: Les défis spécifiques */}
        <section id="defis" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F3AF}'} Les Défis Spécifiques d&apos;une Différence d&apos;Âge</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Etapes de vie decalees, energie et rythme differents, projets de parentalite et jugement social sont les principaux defis rencontres par les couples avec un ecart d&apos;age important.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Certains défis reviennent fréquemment dans les couples avec un <strong>écart d&apos;âge</strong> significatif, sans pour autant être insurmontables.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-cyan-700">{'\u{1F4C6}'} Étapes de Vie Décalées</h3>
              <p className="text-gray-700 text-sm mb-2">
                L&apos;un des partenaires peut être en début de carrière quand l&apos;autre pense déjà à la <strong>retraite</strong>, créant des priorités de vie différentes qu&apos;il faut consciemment harmoniser.
              </p>
            </div>
            <div className="bg-sky-50 border-2 border-sky-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-sky-700">{'⚡'} Énergie et Rythme de Vie</h3>
              <p className="text-gray-700 text-sm mb-2">
                Des <strong>rythmes de vie différents</strong>, en termes d&apos;énergie sociale ou physique, peuvent nécessiter des ajustements pour préserver l&apos;équilibre et le plaisir partagé dans la relation.
              </p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-700">{'\u{1F476}'} Projets de Parentalité</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le désir ou non d&apos;avoir des enfants, et le <strong>timing biologique</strong> associé, est un sujet central à clarifier tôt pour éviter des désillusions douloureuses plus tard.
              </p>
            </div>
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">{'\u{1F441}️'} Jugement Social et Familial</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le <strong>regard extérieur</strong>, qu&apos;il vienne de la famille ou de la société, peut peser sur le couple s&apos;il n&apos;est pas anticipé et géré avec sérénité et assurance.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Le Tirage */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-cyan-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F0CF}'} Le Tirage &laquo;Notre Différence d&apos;Âge en Couple&raquo;</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Ce tirage en trois positions evalue la compatibilite energetique reelle, les zones de friction potentielles et le potentiel de longevite de la relation malgre l&apos;ecart d&apos;age.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-3 text-cyan-700">Position 1 : Compatibilité Réelle</h3>
              <p className="text-gray-700 text-sm mb-2">
                Les Amoureux ou le Deux de Coupe confirment une <strong>harmonie énergétique</strong> profonde, indépendante de l&apos;écart d&apos;âge chronologique entre vous.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-sky-500">
              <h3 className="font-bold text-lg mb-3 text-sky-700">Position 2 : Zones de Friction</h3>
              <p className="text-gray-700 text-sm mb-2">
                Cette carte identifie les <strong>désalignements potentiels</strong> à travailler consciemment : rythme de vie, projets futurs ou attentes différentes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Position 3 : Potentiel de Longévité</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le Dix de Coupe ou le Monde annoncent une <strong>relation durable et épanouie</strong>. Le Huit de Coupe signale un risque de séparation lié aux différences non résolues.
              </p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="crise-couple" limit={3} showOnlineFirst={true} source="difference-age-mid" />

        {/* H2: Ce qui compte vraiment */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'❤️'} Ce Qui Compte Vraiment Au-delà de l&apos;Âge</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Maturite emotionnelle partagee, valeurs communes et communication ouverte comptent davantage que le nombre d&apos;annees d&apos;ecart pour construire une relation durable.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La <strong>maturité émotionnelle</strong> partagée est le facteur le plus déterminant dans la réussite d&apos;un couple avec une différence d&apos;âge, bien plus que le chiffre lui-même. Deux personnes alignées sur leurs <strong>valeurs fondamentales</strong> et leur vision de l&apos;avenir peuvent construire une relation solide, quel que soit l&apos;écart. Pour identifier si vos sentiments sont profonds et durables, consultez notre guide pour <Link href="/sentiments/savoir-si-cest-lamour" className="text-cyan-700 hover:text-cyan-900 underline font-medium">savoir si c&apos;est l&apos;amour</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La <strong>communication ouverte</strong> sur les attentes de vie, dès le début de la relation, évite les malentendus futurs liés aux différences d&apos;âge. Aborder franchement les sujets sensibles comme la parentalité ou les projets de retraite renforce la confiance mutuelle plutôt que de créer des non-dits.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'✅'} Fondation solide :</strong> Un couple qui partage des <strong>valeurs profondes</strong> et une vision commune traverse plus facilement les défis liés à l&apos;écart d&apos;âge qu&apos;un couple du même âge sans alignement de valeurs.</p>
          </div>
        </section>

        {/* H2: Le regard des autres */}
        <section id="regard" className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F441}️'} Gérer le Regard des Autres</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Se concentrer sur la solidite interne du couple, choisir ses cercles de confiance et cultiver l&apos;assurance permettent de preserver la relation face au jugement exterieur.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>jugement extérieur</strong> reflète souvent des préjugés sociaux plus que la réalité de votre relation. Se concentrer sur la <strong>solidité interne du couple</strong> plutôt que sur l&apos;approbation externe protège durablement votre équilibre. Si cette pression provient spécifiquement de votre famille, notre guide sur l&apos;<Link href="/crise-couple/opposition-familiale-couple" className="text-cyan-700 hover:text-cyan-900 underline font-medium">opposition familiale</Link> propose des stratégies complémentaires.
          </p>
          <div className="bg-white p-6 rounded-lg border-2 border-cyan-200">
            <p className="text-gray-700"><strong>{'\u{1F52E}'} Conseil du voyant :</strong> Les couples qui résistent au jugement extérieur avec sérénité, sans chercher constamment à se justifier, en ressortent généralement plus <strong>soudés et confiants</strong> dans la légitimité de leur relation.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{'❓'} Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les reponses aux questions les plus posees sur la difference d&apos;age en couple, la compatibilite et la gestion du jugement exterieur.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Une grande différence d&apos;âge peut-elle fonctionner en couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, de nombreux couples avec un <strong>écart d&apos;âge important</strong> construisent des relations durables et épanouies. Le succès dépend moins du nombre d&apos;années d&apos;écart que de la <strong>maturité émotionnelle partagée</strong>, des valeurs communes et de la capacité à traverser ensemble les étapes de vie différentes.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel écart d&apos;âge pose vraiment problème en couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Il n&apos;existe pas de seuil universel : un écart de quinze ans peut être harmonieux si la <strong>maturité et les projets de vie</strong> s&apos;alignent, tandis qu&apos;un écart de cinq ans peut poser problème si les priorités diffèrent radicalement.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment gérer le jugement de l&apos;entourage sur notre différence d&apos;âge ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>jugement extérieur</strong> reflète souvent des préjugés sociaux plus que la réalité de votre relation. Se concentrer sur la <strong>solidité interne du couple</strong> plutôt que sur l&apos;approbation externe aide à préserver la relation de ces pressions.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La différence d&apos;âge affecte-t-elle les projets d&apos;avenir du couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Elle peut créer des <strong>désalignements</strong> sur des sujets comme la parentalité, la retraite ou le rythme de vie souhaité, qu&apos;il est essentiel d&apos;aborder ouvertement et tôt dans la relation.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot peut-il confirmer la compatibilité malgré l&apos;écart d&apos;âge ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot évalue la <strong>compatibilité énergétique</strong> réelle entre deux personnes, indépendamment de leur âge chronologique. Des cartes comme Les Amoureux ou le Deux de Coupe confirment une <strong>harmonie profonde</strong> malgré l&apos;écart.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{'\u{1F4DA}'} Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/crise-couple" className="block text-cyan-700 hover:text-cyan-900 font-medium">&rarr; Crise de Couple : Toutes nos Guidances</Link>
            <Link href="/sentiments/compatibilite-amoureuse" className="block text-cyan-700 hover:text-cyan-900 font-medium">&rarr; Compatibilité Amoureuse</Link>
            <Link href="/crise-couple/opposition-familiale-couple" className="block text-cyan-700 hover:text-cyan-900 font-medium">&rarr; Opposition Familiale au Couple</Link>
            <Link href="/nouvelle-rencontre/amour-apres-40-ans" className="block text-cyan-700 hover:text-cyan-900 font-medium">&rarr; Trouver l&apos;Amour Après 40 Ans</Link>
            <Link href="/sentiments/savoir-si-cest-lamour" className="block text-cyan-700 hover:text-cyan-900 font-medium">&rarr; Savoir si C&apos;est l&apos;Amour</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="crise-couple" source="difference-age-final" />
      </div>
    </main>
  );
}
