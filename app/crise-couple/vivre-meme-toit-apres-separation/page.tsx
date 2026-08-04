import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Vivre sous le Même Toit Après une Séparation : Comment Faire ?',
  description: 'Contraint(e) de cohabiter avec votre ex après la rupture ? Limites affectives, communication et organisation concrète pour sortir de l\'ambiguïté au quotidien.',
  keywords: ['vivre sous le même toit après une séparation', 'cohabiter après une rupture', 'séparés mais vivant ensemble', 'vivre avec son ex sous le même toit', 'comment tourner la page en vivant avec son ex'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/crise-couple/vivre-meme-toit-apres-separation/',
  },
};

export default function VivreMemeToitApresSeparationPage() {
  const articleSchema = getArticleSchema({
    title: 'Vivre sous le Même Toit Après une Séparation : Comment Faire ?',
    description: 'Contraint(e) de cohabiter avec votre ex après la rupture ? Limites affectives, communication et organisation concrète pour sortir de l\'ambiguïté au quotidien.',
    url: 'https://www.voyantlove.fr/crise-couple/vivre-meme-toit-apres-separation/',
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    keywords: ['vivre sous le même toit après une séparation', 'rester amis après rupture et cohabiter', 'séparation sans pouvoir déménager', 'cohabiter avec son ex', 'limites affectives cohabitation'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Peut-on vraiment se séparer tout en vivant sous le même toit ?',
      answer: 'Oui, mais cela demande un cadre explicite et partagé, pas seulement une intention silencieuse. Sans définition claire du statut de la relation, des espaces distincts et des règles de communication, la cohabitation post-rupture entretient facilement une ambiguïté douloureuse où ni la séparation ni le couple ne sont vraiment vécus. La séparation devient réelle quand elle se traduit par des choix concrets au quotidien, pas seulement par une déclaration.',
    },
    {
      question: 'Comment cohabiter avec son ex sans souffrir davantage ?',
      answer: 'Organisez des espaces et des rythmes séparés autant que le logement le permet, fixez des règles claires sur l\'intimité et les nouvelles fréquentations, et évitez de reproduire les habitudes d\'un couple (repas systématiquement partagés, gestes affectueux machinaux) qui entretiennent la confusion. La souffrance diminue quand chacun sait précisément à quoi s\'attendre, même si la situation reste inconfortable.',
    },
    {
      question: 'Comment éviter de retomber dans une relation ambiguë en cohabitant ?',
      answer: 'Nommez explicitement les comportements qui appartenaient au couple et qui n\'ont plus leur place : gestes tendres automatiques, décisions prises comme un couple, jalousie face aux nouvelles fréquentations de l\'autre. Cette vigilance n\'est pas une froideur excessive ; elle protège les deux personnes d\'un entre-deux qui empêche chacune d\'avancer réellement.',
    },
    {
      question: 'Comment tourner la page en vivant encore avec son ex ?',
      answer: 'Tourner la page en cohabitant est plus lent qu\'après un déménagement immédiat, mais reste possible en maintenant des limites strictes, en développant une vie sociale distincte de celle de l\'ex, et en gardant en vue une date ou une étape concrète de sortie de la cohabitation. Le travail de deuil peut commencer avant le départ physique, à condition que les limites posées soient réellement respectées au quotidien.',
    },
    {
      question: 'Quand la cohabitation après une séparation devient-elle dangereuse ou intenable ?',
      answer: 'Si la cohabitation s\'accompagne de contrôle, de pression pour revenir, de peur au quotidien ou de comportements menaçants, il ne s\'agit plus d\'une simple difficulté relationnelle mais d\'une situation à sécuriser en priorité. Dans ce cas, contactez des ressources d\'aide dédiées (le 3919 en France pour les violences conjugales) et organisez votre départ avec le soutien de personnes de confiance plutôt que d\'attendre que la situation s\'améliore d\'elle-même.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://www.voyantlove.fr/crise-couple/' },
    { name: 'Vivre sous le Même Toit Après une Séparation', url: 'https://www.voyantlove.fr/crise-couple/vivre-meme-toit-apres-separation/' },
  ]);

  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/crise-couple" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour à la Crise de Couple</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{'\u{1F3E0}'} Comment Vivre sous le Même Toit Après une Séparation ?</h1>
          <p className="text-xl opacity-95 mb-6">Créer une séparation réelle malgré un logement partagé, sans faux espoirs</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#regles" className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Règles de Cohabitation</a>
            <a href="#sortie" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-700 transition">Préparer la Sortie</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">{'\u{1F52E}'}</div><div className="text-2xl font-bold text-orange-700">Reconnue</div><div className="text-sm text-gray-600">Expertise</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F3E0}'}</div><div className="text-2xl font-bold text-orange-700">2,900+</div><div className="text-sm text-gray-600">Consultations</div></div>
          <div><div className="text-3xl mb-1">{'⭐'}</div><div className="text-2xl font-bold text-orange-700">4.6/5</div><div className="text-sm text-gray-600">237 avis</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F512}'}</div><div className="text-2xl font-bold text-orange-700">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="orange" method="Guidance sur la cohabitation post-rupture et les limites relationnelles" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-orange-600">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Des contraintes pratiques — <strong>logement</strong>, finances, enfants, timing — empêchent parfois un départ immédiat après une <strong>rupture</strong>, obligeant à continuer de <strong>cohabiter</strong> avec son ex. Cette situation peut vite entretenir une <strong>ambiguïté</strong> épuisante : ni tout à fait séparés, ni vraiment en couple. Cette page se concentre sur les <strong>limites affectives</strong>, la communication et l&apos;organisation du quotidien — pas sur les questions juridiques, immobilières ou financières, qui relèvent d&apos;un accompagnement spécialisé.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Une séparation vécue sous le même toit devient réelle quand elle se traduit par des choix concrets : un statut clairement défini, des espaces distincts, des règles de communication et d&apos;<strong>intimité</strong> posées explicitement. Sans ce cadre, la cohabitation reproduit souvent les habitudes d&apos;un couple sans jamais permettre à la <Link href="/rupture/rupture-soudaine-sans-explication" className="text-orange-700 hover:text-orange-900 underline font-medium">séparation</Link> de produire ses effets.
            </p>
            <p className="text-lg leading-relaxed">
              Cette guidance ne banalise jamais une situation où la peur, le contrôle ou la menace seraient présents : dans ce cas, la priorité est la sécurité, pas l&apos;organisation du quotidien. Pour les autres situations, une <strong>consultation de voyance sentimentale</strong> peut aider à clarifier les limites nécessaires, sans jamais garantir que la cohabitation mènera à une réconciliation.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="crise-couple" source="vivre-meme-toit-early" />

        {/* H2 1 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F914}'} Peut-on Vraiment se Séparer Tout en Cohabitant ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une separation reelle sous le meme toit est possible, mais seulement si elle repose sur un cadre explicite -- statut defini, espaces distincts, regles claires -- et non sur une simple intention silencieuse que rien ne vient concretiser.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beaucoup de couples séparés continuent de partager un logement en pensant que la rupture est suffisamment claire dans leur tête pour se passer d&apos;un cadre explicite. En pratique, sans <strong>accord concret</strong>, les habitudes du couple reprennent souvent naturellement : repas partagés, gestes tendres automatiques, décisions prises comme si rien n&apos;avait changé. La séparation reste alors théorique tant qu&apos;elle ne se traduit pas par des choix visibles au quotidien.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> ce n&apos;est pas l&apos;intention qui rend une séparation réelle, mais les changements concrets qu&apos;elle produit dans l&apos;organisation quotidienne du foyer.</p>
          </div>
        </section>

        {/* H2 2 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F4CB}'} Définir Clairement le Statut de la Relation</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Nommer explicitement que la relation de couple est terminee, meme en continuant a partager un logement, evite les malentendus et pose la base necessaire a toutes les autres regles de cohabitation.</p>
          <p className="text-gray-700 leading-relaxed">
            Avant d&apos;organiser quoi que ce soit d&apos;autre, il est nécessaire que les deux personnes partagent la même compréhension du <strong>statut de la relation</strong>. Si l&apos;un considère toujours être en couple pendant que l&apos;autre se vit comme séparé(e), toute organisation pratique reposera sur un malentendu de fond. Si ce statut lui-même reste flou ou changeant, notre guide sur une <Link href="/reconquete/separation-temporaire-ou-definitive" className="text-orange-700 hover:text-orange-900 underline font-medium">séparation temporaire ou définitive</Link> aide à clarifier ce point avant d&apos;aller plus loin.
          </p>
        </section>

        {/* H2 3 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F6CF}️'} Organiser des Espaces et des Rythmes Séparés</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Definir des espaces personnels distincts et des horaires de vie separes, meme dans un logement partage, reduit considerablement les frictions quotidiennes et renforce concretement la realite de la separation.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'✅'} Ce qui Aide</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Chambre ou espace personnel <strong>clairement délimité</strong></li>
                <li>&bull; Horaires de repas ou de salon décalés si possible</li>
                <li>&bull; Répartition explicite des tâches et des coûts courants</li>
                <li>&bull; Moments prévus à l&apos;avance pour les sujets pratiques</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{'\u{1F6AB}'} Ce qui Entretient la Confusion</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Continuer les rituels affectifs du couple</li>
                <li>&bull; Improviser l&apos;organisation au jour le jour</li>
                <li>&bull; Éviter systématiquement les sujets sensibles</li>
                <li>&bull; Reporter indéfiniment les décisions pratiques</li>
              </ul>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="crise-couple" limit={3} showOnlineFirst={true} source="vivre-meme-toit-mid" />

        {/* H2 4 */}
        <section id="regles" className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F5E3}️'} Fixer des Règles de Communication et d&apos;Intimité</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Poser des regles explicites sur l&apos;intimite physique, les marques d&apos;affection et le ton des echanges quotidiens empeche la cohabitation de glisser vers une relation ambigue qui ne dit pas son nom.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;absence de règles claires laisse la porte ouverte à des situations que l&apos;une des deux personnes regrettera ensuite : un rapport intime &laquo;juste une fois&raquo;, une nuit passée ensemble par habitude, un geste tendre réflexe. Ces moments, une fois qu&apos;ils se produisent, brouillent encore davantage la frontière entre séparation et couple.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'⚠️'} Point de vigilance :</strong> un rapport intime ou une nuit partagée pendant la cohabitation ne relance pas automatiquement la relation et ne doit pas être traité comme une preuve de retour, mais comme un signal qu&apos;une limite a été franchie et qu&apos;il faut la reclarifier.</p>
          </div>
        </section>

        {/* H2 5 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F6D1}'} Éviter le Rôle de &laquo;Couple sans Engagement&raquo;</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La cohabitation post-rupture expose au risque de devenir un couple de fait, sans les avantages de l&apos;engagement ni la liberte de la separation, une situation confortable pour l&apos;un et souvent epuisante pour l&apos;autre.</p>
          <p className="text-gray-700 leading-relaxed">
            Ce rôle intermédiaire — partager un quotidien, une intimité occasionnelle, un soutien mutuel, sans aucun projet de couple assumé — profite rarement de manière équilibrée aux deux personnes. Si vous reconnaissez ce schéma, notre guide sur la <Link href="/crise-couple/dependance-affective" className="text-orange-700 hover:text-orange-900 underline font-medium">dépendance affective</Link> peut aider à identifier pourquoi il est difficile d&apos;en sortir malgré l&apos;inconfort ressenti.
          </p>
        </section>

        {/* H2 6 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F440}'} Gérer Jalousie, Nouveaux Partenaires et Signaux Contradictoires</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L&apos;apparition d&apos;une nouvelle rencontre ou une reaction de jalousie pendant la cohabitation ne prouve ni un desir de retour ni une trahison : ce sont des reactions humaines a encadrer par des regles anticipees plutot qu&apos;a interpreter dans l&apos;instant.</p>
          <p className="text-gray-700 leading-relaxed">
            Introduire un nouveau partenaire dans un logement encore partagé demande une discussion anticipée, pas une improvisation au moment critique. De même, une réaction de jalousie de l&apos;ex ne signale pas nécessairement un désir de reconstruire : elle peut simplement traduire une difficulté à voir l&apos;autre avancer pendant que soi-même on cohabite encore dans l&apos;ancien cadre.
          </p>
        </section>

        {/* H2 7 */}
        <section id="sortie" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F6AA}'} Préparer une Sortie Progressive de la Cohabitation</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Se fixer des etapes concretes et un horizon realiste de fin de cohabitation, meme sans date precise au depart, permet d&apos;avancer activement vers l&apos;autonomie plutot que de subir une situation qui s&apos;eternise.</p>
          <p className="text-gray-700 leading-relaxed">
            Même quand aucune date n&apos;est fixée dès le départ, garder en vue des <strong>étapes concrètes</strong> vers l&apos;autonomie — recherche active de logement, plan financier, réorganisation progressive — évite que la cohabitation ne devienne une situation par défaut, confortable à court terme mais coûteuse émotionnellement sur la durée. Une fois le départ effectif, notre guide pour <Link href="/rupture/oublier-son-ex" className="text-orange-700 hover:text-orange-900 underline font-medium">oublier son ex</Link> accompagne l&apos;étape suivante de la reconstruction.
          </p>
        </section>

        {/* H2 8 */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-red-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F6A8}'} Reconnaître Quand la Situation Devient Émotionnellement Intenable</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Si la cohabitation s&apos;accompagne de controle, de pression, de peur ou de menaces, il ne s&apos;agit plus d&apos;une simple difficulte relationnelle mais d&apos;une situation a securiser en priorite, avec l&apos;aide de ressources dediees.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certains signes doivent alerter au-delà du simple inconfort émotionnel : contrôle des allées et venues, pression répétée pour revenir, peur ressentie au quotidien dans son propre logement, ou comportements menaçants. Dans ces situations, la priorité absolue devient la <strong>sécurité</strong>, pas l&apos;organisation harmonieuse de la cohabitation.
          </p>
          <div className="bg-white p-6 rounded-lg border-2 border-red-200">
            <p className="text-gray-700"><strong>{'\u{1F6A8}'} Ressource utile :</strong> en France, le <strong>3919</strong> (Violences Femmes Info) offre une écoute et une orientation pour les situations de violence conjugale. Organisez votre sortie avec le soutien de personnes de confiance et sans prévenir la personne concernée à l&apos;avance si vous vous sentez en danger.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{'❓'} Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les reponses aux questions les plus posees sur la cohabitation avec un ex apres une separation.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on vraiment se séparer tout en vivant sous le même toit ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, mais cela demande un <strong>cadre explicite</strong> et partagé, pas seulement une intention silencieuse. Sans définition claire du statut, des espaces distincts et des règles de communication, la cohabitation entretient facilement une <strong>ambiguïté</strong> douloureuse. La séparation devient réelle quand elle se traduit par des choix concrets au quotidien.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment cohabiter avec son ex sans souffrir davantage ?</h3>
              <p className="text-gray-700 leading-relaxed">Organisez des <strong>espaces et rythmes séparés</strong> autant que possible, fixez des règles claires sur l&apos;intimité et les nouvelles fréquentations, et évitez de reproduire les habitudes du couple. La souffrance diminue quand chacun sait précisément à quoi s&apos;attendre, même si la situation reste inconfortable.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment éviter de retomber dans une relation ambiguë en cohabitant ?</h3>
              <p className="text-gray-700 leading-relaxed">Nommez explicitement les comportements qui appartenaient au couple : gestes tendres automatiques, décisions prises comme un couple, <strong>jalousie</strong> face aux nouvelles fréquentations. Cette vigilance protège les deux personnes d&apos;un entre-deux qui empêche chacune d&apos;avancer réellement.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment tourner la page en vivant encore avec son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">C&apos;est plus lent qu&apos;après un déménagement immédiat, mais possible en maintenant des <strong>limites strictes</strong>, en développant une vie sociale distincte, et en gardant en vue une étape concrète de sortie. Le travail de deuil peut commencer avant le départ physique, si les limites posées sont réellement respectées.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quand la cohabitation après une séparation devient-elle dangereuse ou intenable ?</h3>
              <p className="text-gray-700 leading-relaxed">Si elle s&apos;accompagne de <strong>contrôle</strong>, de pression pour revenir, de peur au quotidien ou de comportements menaçants, il ne s&apos;agit plus d&apos;une difficulté relationnelle mais d&apos;une situation à sécuriser en priorité. Contactez des ressources dédiées (<strong>le 3919</strong> en France) et organisez votre départ avec le soutien de personnes de confiance.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{'\u{1F4DA}'} Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/crise-couple" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Crise de Couple : Toutes nos Guidances</Link>
            <Link href="/crise-couple/dependance-affective" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Dépendance Affective</Link>
            <Link href="/crise-couple/couple-a-distance-voyance" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Couple à Distance</Link>
            <Link href="/reconquete/separation-temporaire-ou-definitive" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Séparation Temporaire ou Définitive ?</Link>
            <Link href="/rupture/rupture-soudaine-sans-explication" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Rupture Soudaine sans Explication</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="crise-couple" source="vivre-meme-toit-final" />
      </div>
    </main>
  );
}
