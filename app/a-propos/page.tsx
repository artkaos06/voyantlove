import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getAuthorSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'À Propos de VoyantLove — Notre Mission et Notre Équipe | VoyantLove',
  description: 'Découvrez l\'équipe VoyantLove : notre mission, nos valeurs, notre processus de sélection des voyants et notre engagement pour une voyance amoureuse éthique et fiable.',
  alternates: { canonical: 'https://www.voyantlove.fr/a-propos/' },
};

export default function AProposPage() {
  const webPageSchema = getWebPageSchema({
    title: 'À Propos de VoyantLove — Notre Mission et Notre Équipe',
    description: 'Découvrez l\'équipe VoyantLove : notre mission, nos valeurs, notre processus de sélection des voyants et notre engagement pour une voyance amoureuse éthique et fiable.',
    url: 'https://www.voyantlove.fr/a-propos/',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'À Propos', url: 'https://www.voyantlove.fr/a-propos/' },
  ]);

  const organizationSchema = getOrganizationSchema();
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour &agrave; l&apos;accueil</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de VoyantLove</h1>
          <p className="text-xl opacity-95">Notre mission : une voyance amoureuse éthique, fiable et accessible</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* Mission */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              VoyantLove est né d&apos;un constat simple : <strong>les questions de c&oelig;ur sont les plus universelles et les plus douloureuses</strong>. Chaque jour, des milliers de personnes en France traversent une rupture, doutent des sentiments de leur partenaire ou se demandent quand l&apos;amour va enfin frapper à leur porte.
            </p>
            <p>
              Notre objectif est d&apos;offrir un espace de <strong>guidance amoureuse sérieuse</strong>, loin des clichés et des fausses promesses. Nous ne prétendons pas connaître l&apos;avenir avec certitude — personne ne le peut. En revanche, nous croyons profondément que la <strong>voyance sentimentale</strong>, pratiquée avec honnêteté et bienveillance, peut apporter une <strong>clarté émotionnelle</strong> précieuse dans les moments de doute.
            </p>
            <p>
              Que vous cherchiez à comprendre ce que ressent votre ex, à savoir si votre couple peut surmonter une crise, ou à identifier le bon moment pour une nouvelle rencontre, VoyantLove vous guide avec des outils éprouvés : <strong>tarot de Marseille</strong>, <strong>astrologie</strong>, <strong>pendule</strong> et <strong>clairvoyance</strong>.
            </p>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">L&apos;Équipe Éditoriale</h2>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-2xl">🔮</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Sibylle Moreau</h3>
                  <p className="text-purple-600 text-sm font-medium">Rédactrice en chef &amp; Tarologue</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tarologue depuis 2009, Sibylle s&apos;est spécialisée dans le <strong>tarot de Marseille appliqué aux questions sentimentales</strong>. Ancienne psychologue clinicienne reconvertie, elle apporte une double lecture — symbolique et psychologique — à chaque situation amoureuse. Elle supervise l&apos;ensemble du contenu éditorial de VoyantLove et veille à ce que chaque article reflète une approche <strong>nuancée et respectueuse du libre arbitre</strong>.
              </p>
              <p className="text-gray-500 text-xs mt-3">Plus de 4 500 consultations de tarot amour réalisées</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">⭐</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Kalinda Vasseur</h3>
                  <p className="text-indigo-600 text-sm font-medium">Astrologue &amp; Spécialiste Compatibilité</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Formée à l&apos;astrologie traditionnelle et karmique auprès de la Fédération Des Astrologues Francophones, Kalinda pratique depuis 2012. Sa spécialité : la <strong>synastrie de couple</strong> et les <strong>transits amoureux</strong>. Elle analyse les thèmes astraux pour révéler les dynamiques profondes entre partenaires — attractions magnétiques, défis karmiques et fenêtres d&apos;opportunité sentimentale.
              </p>
              <p className="text-gray-500 text-xs mt-3">Plus de 3 200 thèmes astraux de couple interprétés</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center text-2xl">💫</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Ella Fontaine</h3>
                  <p className="text-rose-600 text-sm font-medium">Médium &amp; Spécialiste Reconquête</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ella est <strong>médium clairsentiente</strong> — elle ressent les émotions et les intentions des personnes impliquées dans une situation amoureuse. Active dans le domaine depuis 2014, elle a accompagné des centaines de consultants dans des processus de <strong>reconquête amoureuse</strong> et de <strong>deuil sentimental</strong>. Son approche : honnêteté radicale. Elle ne promet jamais un retour de l&apos;ex si les énergies ne le confirment pas.
              </p>
              <p className="text-gray-500 text-xs mt-3">Spécialisée silence radio et retour de l&apos;ex depuis 2017</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-2xl">🕯️</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Marc-Antoine Dulac</h3>
                  <p className="text-amber-600 text-sm font-medium">Numérologue &amp; Rédacteur</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionné par les liens entre <strong>numérologie et compatibilité amoureuse</strong>, Marc-Antoine étudie les vibrations numériques depuis 2011. Il a développé une méthode d&apos;analyse qui croise <strong>chemin de vie, année personnelle et cycles de Vénus</strong> pour identifier les périodes favorables aux rencontres et aux engagements. Il contribue aux articles sur les méthodes de voyance et les outils de prédiction.
              </p>
              <p className="text-gray-500 text-xs mt-3">Auteur de plus de 40 articles sur la numérologie amoureuse</p>
            </div>
          </div>
        </section>

        {/* Selection process */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Processus de Sélection des Voyants</h2>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <p className="text-gray-700 mb-6">
              Nous ne recommandons pas n&apos;importe quel voyant. Chaque praticien présenté sur VoyantLove a été évalué selon <strong>quatre critères stricts</strong> :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Spécialisation sentimentale</h3>
                  <p className="text-gray-600 text-sm">Le voyant doit être spécialisé dans les questions d&apos;amour et de couple — pas un généraliste qui traite aussi le travail et la santé.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Éthique et transparence</h3>
                  <p className="text-gray-600 text-sm">Aucune promesse de résultat garanti, aucune vente de rituels ou de travaux occultes, respect total du libre arbitre du consultant.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expérience vérifiable</h3>
                  <p className="text-gray-600 text-sm">Minimum 5 ans de pratique en voyance sentimentale, avec des avis clients consultables et une réputation établie.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Satisfaction des consultants</h3>
                  <p className="text-gray-600 text-sm">Note moyenne supérieure à 4,5/5 sur les plateformes de voyance, avec un minimum de 500 consultations réalisées.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-gray-900 mb-2">Honnêteté</h3>
              <p className="text-gray-600 text-sm">Un bon voyant dit ce qu&apos;il voit, même si ce n&apos;est pas ce que vous voulez entendre. Nous privilégions la vérité au réconfort de façade.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Protection</h3>
              <p className="text-gray-600 text-sm">Nous dénonçons les pratiques abusives : faux retours d&apos;affection, maraboutage, dépendance à la consultation. La voyance doit libérer, pas enchaîner.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-gray-900 mb-2">Libre arbitre</h3>
              <p className="text-gray-600 text-sm">La voyance éclaire des probabilités, elle ne dicte pas votre avenir. Vous restez toujours maître de vos décisions sentimentales.</p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Approche Éditoriale</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Chaque article publié sur VoyantLove suit un processus éditorial rigoureux. Nos rédacteurs sont eux-mêmes praticiens — tarologues, astrologues, numérologues — et écrivent à partir de leur <strong>expérience directe de consultation</strong>, pas à partir de recherches Google.
            </p>
            <p>
              Les cas évoqués dans nos articles sont inspirés de <strong>situations réelles rencontrées en consultation</strong> (anonymisées). Quand nous décrivons ce que le Cinq d&apos;Épée signifie dans un tirage de reconquête, c&apos;est parce que nous l&apos;avons interprété des centaines de fois pour des consultants traversant cette situation exacte.
            </p>
            <p>
              Nous distinguons toujours clairement ce que la voyance peut apporter (éclairage, perspectives, timing probable) de ce qu&apos;elle ne peut pas (certitudes absolues, contrôle des sentiments d&apos;autrui). Cette nuance est au c&oelig;ur de notre déontologie.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Une question sur VoyantLove ?</h2>
          <p className="text-lg opacity-90 mb-6">Notre équipe est disponible pour répondre à vos questions sur nos services et notre approche.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            Nous Contacter
          </Link>
        </section>
      </div>
    </main>
  );
}
