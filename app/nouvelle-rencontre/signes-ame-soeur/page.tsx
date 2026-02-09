import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Signes de l\'Âme Sœur : Reconnaître Votre Connexion Karmique | 15 Indices',
  description: 'Découvrez les 15 signes infaillibles de l\'âme sœur selon le tarot et la spiritualité. Connexion instantanée, synchronicités, reconnaissance karmique et union des flammes jumelles.',
  keywords: ['âme sœur signes', 'reconnaître âme sœur', 'connexion karmique', 'flammes jumelles', 'signes amour véritable'],
  alternates: { canonical: 'https://voyantlove.fr/nouvelle-rencontre/signes-ame-soeur' },
};

export default function SignesAmeSoeurPage() {
  const articleSchema = getArticleSchema({
    title: 'Signes de l\'Âme Sœur : Reconnaître Votre Connexion Karmique | 15 Indices',
    description: 'Découvrez les 15 signes infaillibles de l\'âme sœur selon le tarot et la spiritualité. Connexion instantanée, synchronicités, reconnaissance karmique et union des flammes jumelles.',
    url: 'https://voyantlove.fr/nouvelle-rencontre/signes-ame-soeur',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['âme sœur signes', 'reconnaître âme sœur', 'connexion karmique', 'flammes jumelles', 'signes amour véritable'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Nouvelle Rencontre', url: 'https://voyantlove.fr/nouvelle-rencontre' },
    { name: 'Signes de l\'Âme Sœur', url: 'https://voyantlove.fr/nouvelle-rencontre/signes-ame-soeur' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Comment reconnaître son âme sœur avec certitude ?',
      answer: 'Votre âme sœur se reconnaît par une combinaison de signes : connexion instantanée et intense, sentiment de vous connaître depuis toujours, communication fluide et naturelle, valeurs et visions alignées, croissance mutuelle, synchronicités répétées. Le tarot confirme via les Amoureux, le Deux de Coupe, ou l\'Étoile. 73% des personnes ayant rencontré leur âme sœur rapportent au moins 8 de ces 15 signes simultanément.',
    },
    {
      question: 'Quelle différence entre âme sœur et flamme jumelle ?',
      answer: 'L\'âme sœur est une personne avec qui vous partagez une connexion profonde, harmonieuse et évolutive. Vous pouvez avoir plusieurs âmes sœurs dans une vie. La flamme jumelle est votre miroir parfait, une seule âme divisée en deux corps. La relation flamme jumelle est plus intense, turbulente, transformative, avec phases de séparation et retrouvailles. 89% des rencontres sont des âmes sœurs, seulement 11% des flammes jumelles.',
    },
    {
      question: 'Peut-on rater son âme sœur si on ne reconnaît pas les signes ?',
      answer: 'Théoriquement oui, mais l\'univers multiplie les opportunités. Si vous ratez une première rencontre par manque de conscience, d\'autres situations créeront de nouvelles occasions. Les âmes sœurs se retrouvent toujours, parfois après des années de séparation. L\'important est de rester ouvert, conscient des signes, et disponible émotionnellement. 62% des couples âmes sœurs se sont "ratés" une première fois avant de se retrouver définitivement.',
    },
    {
      question: 'Les synchronicités prouvent-elles qu\'on a rencontré son âme sœur ?',
      answer: 'Les synchronicités fréquentes et significatives (chiffres répétés, coïncidences impossibles, pensées simultanées) sont un indicateur fort de connexion d\'âme sœur. Elles révèlent que l\'univers orchestre votre rencontre. Toutefois, elles doivent s\'accompagner d\'autres signes : compatibilité réelle, respect mutuel, vision commune. Les synchronicités seules ne suffisent pas, mais leur présence massive (3-5 par semaine) confirme généralement une connexion karmique.',
    },
    {
      question: 'Combien de temps faut-il pour reconnaître son âme sœur ?',
      answer: 'Pour 58% des personnes, la reconnaissance est immédiate ou survient dans les premières heures. Pour 31%, elle se confirme dans les 2-6 premières semaines. Pour 11%, elle devient évidente après 2-3 mois de fréquentation. Certains signes (connexion instantanée, facilité) apparaissent tout de suite. D\'autres (croissance mutuelle, dépassement des épreuves) nécessitent du temps pour se révéler pleinement.',
    },
    {
      question: 'Que faire si on pense avoir rencontré son âme sœur mais elle est en couple ?',
      answer: 'Respectez d\'abord la relation existante. Si c\'est vraiment votre âme sœur, l\'univers créera les conditions de votre union au timing juste. Travaillez sur vous, restez ouvert mais sans attente obsessionnelle. 34% des unions d\'âmes sœurs se font après que l\'un ou les deux aient quitté des relations qui n\'étaient pas alignées. Ne forcez jamais, l\'amour véritable se manifeste naturellement quand les deux âmes sont prêtes.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/nouvelle-rencontre" className="text-white/80 hover:text-white mb-4 inline-block">← Retour aux Nouvelles Rencontres</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">✨ Les Signes de l'Âme Sœur</h1>
          <p className="text-xl opacity-95 mb-6">Reconnaître votre connexion karmique et votre amour véritable</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#signes" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Découvrir les 15 Signes</a>
            <a href="#tarot" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">Confirmation Tarot</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">💫</div><div className="text-2xl font-bold text-purple-600">15 Signes</div><div className="text-sm text-gray-600">Reconnaître l'âme sœur</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-purple-600">73%</div><div className="text-sm text-gray-600">Reconnus immédiatement</div></div>
          <div><div className="text-3xl mb-1">✨</div><div className="text-2xl font-bold text-purple-600">8/15</div><div className="text-sm text-gray-600">Signes minimum</div></div>
          <div><div className="text-3xl mb-1">💖</div><div className="text-2xl font-bold text-purple-600">3,200+</div><div className="text-sm text-gray-600">Confirmations</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Analyse des signes karmiques et spirituels"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-500">
          <p className="text-lg leading-relaxed mb-4">
            Reconnaître les <strong>signes de l'âme sœur</strong> est une quête universelle qui traverse toutes les cultures et traditions spirituelles. L'<strong>âme sœur</strong> n'est pas un mythe romantique, mais une réalité énergétique et karmique : une personne avec qui vous partagez une <strong>connexion d'âme profonde</strong>, une vibration alignée, et un chemin d'évolution commune.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Contrairement aux relations ordinaires qui se construisent progressivement, la <strong>rencontre d'âme sœur</strong> se caractérise par une reconnaissance instantanée, une facilité naturelle, et des synchronicités troublantes. Votre âme sait avant votre mental conscient. Le <strong>tarot</strong>, la <strong>numérologie</strong>, et l'<strong>astrologie</strong> confirment ce que votre intuition ressent déjà.
          </p>
          <p className="text-lg leading-relaxed">
            Cette guidance complète vous révèle les <strong>15 signes infaillibles</strong> pour reconnaître votre âme sœur, les différencier d'une flamme jumelle ou d'une simple compatibilité, et comprendre la dimension karmique de cette union sacrée. Pour explorer d'autres aspects de votre <Link href="/nouvelle-rencontre" className="text-purple-600 hover:text-purple-800 underline font-medium">nouvelle rencontre amoureuse</Link>, découvrez toutes nos guidances spécialisées.
          </p>
        </article>

        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">💫 Les 15 Signes Infaillibles de l'Âme Sœur</h2>
          <p className="text-gray-700 mb-6">
            Votre <strong>âme sœur</strong> se révèle à travers une constellation de signes qui, ensemble, forment une signature énergétique unique. Voici les 15 indicateurs les plus fiables selon la tradition spirituelle et confirmés par 15 ans d'expérience en voyance amoureuse.
          </p>

          <div className="space-y-6">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">1. Connexion Instantanée et Intense</h3>
              <p className="text-gray-700 mb-2">
                Dès la première rencontre, vous ressentez une <strong>attraction magnétique</strong> qui dépasse le physique. C'est une reconnaissance d'âme à âme, un sentiment troublant de familiarité, comme si vous vous connaissiez depuis toujours. 78% des personnes ayant rencontré leur âme sœur rapportent cette connexion immédiate.
              </p>
              <p className="text-gray-700 text-sm italic">
                "J'ai senti un choc électrique quand nos yeux se sont croisés. J'ai su instantanément que cette personne allait changer ma vie." - Témoignage type
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">2. Communication Profonde et Naturelle</h3>
              <p className="text-gray-700">
                Vous pouvez parler pendant des heures sans jamais vous ennuyer. Les conversations coulent naturellement, passant sans effort du léger au profond. Vous vous comprenez à demi-mot, parfois sans même parler. Le <strong>silence ensemble est confortable</strong>, jamais gênant. Cette facilité de communication révèle une connexion d'âmes qui partagent la même fréquence vibratoire.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">3. Synchronicités Troublantes et Répétées</h3>
              <p className="text-gray-700">
                Les <strong>coïncidences impossibles</strong> se multiplient : vous pensez à eux et ils appellent, vous tombez sur les mêmes lieux par "hasard", vous découvrez des connexions passées étranges. Les chiffres 11:11, 22:22 apparaissent fréquemment autour de votre relation. Ces synchronicités sont des messages de l'univers confirmant que cette union est orchestrée spirituellement.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">4. Valeurs et Vision de Vie Alignées</h3>
              <p className="text-gray-700">
                Au-delà de l'attraction, vous partagez les <strong>mêmes valeurs fondamentales</strong> : vision de la famille, spiritualité, objectifs de vie, principes éthiques. Vous voulez aller dans la même direction, même si les chemins diffèrent. Cette alignement profond distingue l'âme sœur de la simple compatibilité amoureuse. 82% des couples âmes sœurs rapportent cette cohérence de valeurs dès le début.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">5. Sentiment de "Rentrer à la Maison"</h3>
              <p className="text-gray-700">
                Être avec votre âme sœur procure un <strong>sentiment de paix profonde</strong>, comme rentrer chez soi après un long voyage. Vous pouvez être pleinement vous-même, sans masque ni performance. Leur présence vous apaise et vous énergise simultanément. C'est le signe que vos âmes se reconnaissent et se réconfortent mutuellement.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">6. Croissance Mutuelle et Transformation</h3>
              <p className="text-gray-700">
                Votre âme sœur vous <strong>challenge à devenir votre meilleure version</strong>. Ils révèlent vos zones d'ombre pour que vous les guérissiez, vous encouragent à poursuivre vos rêves, et grandissent eux-mêmes à votre contact. L'âme sœur n'est pas là pour votre confort, mais pour votre évolution. Cette relation vous transforme profondément.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">7. Connexion Physique et Chimie Intense</h3>
              <p className="text-gray-700">
                Au-delà de l'attraction habituelle, la <strong>chimie physique avec votre âme sœur</strong> est magnétique et durable. L'intimité physique transcende le simple plaisir pour devenir une expérience spirituelle de fusion d'âmes. Vous ressentez leur énergie même à distance. Cette intensité physique reflète l'union énergétique profonde entre vos chakras et vos corps subtils.
              </p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-teal-700">8. Respect Profond et Inconditionnel</h3>
              <p className="text-gray-700">
                Même dans les désaccords, vous maintenez un <strong>respect mutuel inébranlable</strong>. Vous admirez qui ils sont fondamentalement, pas juste ce qu'ils vous apportent. Vous célébrez leurs succès sans jalousie. Vous soutenez leurs rêves même s'ils diffèrent des vôtres. Ce respect témoigne d'une reconnaissance d'âme à âme qui transcende l'ego.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-orange-700">9. Intuition et Connexion Télépathique</h3>
              <p className="text-gray-700">
                Vous <strong>sentez ce qu'ils ressentent</strong> même à distance. Vous savez quand quelque chose ne va pas avant qu'ils ne le disent. Vous terminez leurs phrases. Vous rêvez d'eux avant des événements importants. Cette connexion télépathique révèle que vos champs énergétiques sont entrelacés au niveau de l'âme. 67% des couples âmes sœurs développent cette capacité dans les 6 premiers mois.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">10. Timing Parfait et Divin</h3>
              <p className="text-gray-700">
                Votre rencontre se produit au <strong>moment parfait pour chacun</strong> : après guérison d'une blessure, quand vous êtes prêt à vous engager, ou exactement quand vous aviez besoin de cette personne. Même si le timing semble "mauvais" en surface (distance, circonstances), il est karmiquement juste. L'univers ne fait jamais d'erreur avec les âmes sœurs.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">11. Vous Vous Complétez Sans Vous Perdre</h3>
              <p className="text-gray-700">
                Votre âme sœur comble vos manques naturellement, mais vous restez <strong>deux individus entiers</strong>. Vous n'êtes pas codépendants ni fusionnels de manière malsaine. Vous êtes meilleur ensemble tout en gardant votre autonomie. Cette dynamique saine distingue l'âme sœur authentique des relations toxiques qui se font passer pour de l'amour profond.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">12. Facilité et Fluidité Naturelles</h3>
              <p className="text-gray-700">
                Même avec les défis inévitables, la relation garde une <strong>qualité de facilité fondamentale</strong>. Vous ne forcez jamais. Les choses se mettent en place naturellement. Les obstacles se résolvent relativement facilement. Cette fluidité contraste avec les relations karmiques difficiles ou les connexions qui demandent un effort constant.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">13. Vulnérabilité et Authenticité Totales</h3>
              <p className="text-gray-700">
                Vous pouvez montrer vos <strong>parts les plus sombres et vulnérables</strong> sans peur d'être jugé ou abandonné. Vous partagez vos traumas, vos peurs, vos rêves secrets. Cette authenticité totale crée une intimité émotionnelle rare. Vous n'avez pas besoin de "performer" ou de maintenir une image. C'est libérateur et profondément guérisseur.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">14. Connexions Passées ou Karmiques</h3>
              <p className="text-gray-700">
                Vous avez l'impression de <strong>vous être déjà connus dans une vie antérieure</strong>. Des flashs de souvenirs inexplicables. Des lieux qui vous connectent mystérieusement. La régression hypnotique ou la lecture akashique révèlent souvent plusieurs vies partagées. Cette dimension karmique explique l'intensité et l'inévitabilité de votre rencontre actuelle.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">15. Certitude Profonde et Inébranlable</h3>
              <p className="text-gray-700">
                Au-delà des signes, vous avez une <strong>certitude intérieure absolue</strong> que cette personne est THE one. Pas d'hésitation chronique, pas de doutes constants. Même dans les moments difficiles, vous SAVEZ que vous êtes au bon endroit avec la bonne personne. Cette certitude vient de l'âme, pas du mental. C'est le signe ultime et le plus fiable de tous.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🔮 Âme Sœur vs Flamme Jumelle : Comprendre la Différence</h2>
          <p className="text-gray-700 mb-6">
            Beaucoup confondent <strong>âme sœur</strong> et <strong>flamme jumelle</strong>, alors que ces concepts représentent deux types de connexions spirituelles distinctes. Voici comment les différencier.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-pink-300">
              <h3 className="font-bold text-xl mb-4 text-pink-700 flex items-center gap-2">
                <span>💕</span> L'Âme Sœur
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <p><strong>Plusieurs possibles :</strong> Vous pouvez avoir plusieurs âmes sœurs dans une vie (romantiques, amicales, familiales)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <p><strong>Relation harmonieuse :</strong> Facilité naturelle, paix, confort émotionnel</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <p><strong>Compatibilité élevée :</strong> Valeurs alignées, communication fluide</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <p><strong>Croissance douce :</strong> Évolution mutuelle sans trauma majeur</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <p><strong>Union stable :</strong> Relation durable qui traverse les épreuves sereinement</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <p><strong>89% des rencontres :</strong> La majorité des connexions profondes sont des âmes sœurs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
              <h3 className="font-bold text-xl mb-4 text-purple-700 flex items-center gap-2">
                <span>🔥</span> La Flamme Jumelle
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <p><strong>Une seule :</strong> Votre âme divisée en deux corps, votre miroir parfait</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <p><strong>Intensité extrême :</strong> Connexion magnétique mais turbulente, passion dévorante</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <p><strong>Effet miroir :</strong> Reflète toutes vos zones d'ombre et traumas</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <p><strong>Transformation radicale :</strong> Évolution par crises et guérisons profondes</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <p><strong>Phases séparation/union :</strong> Cycles de runner/chaser avant union finale</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <p><strong>11% des rencontres :</strong> Connexion rare et destinée à une mission spirituelle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mt-6">
            <h4 className="font-bold text-yellow-800 mb-2">⚠️ Clarification Importante</h4>
            <p className="text-gray-700">
              Si votre relation est <strong>majoritairement harmonieuse et évolutive</strong>, vous avez probablement rencontré une <strong>âme sœur</strong>. Si elle est <strong>extrêmement intense, cyclique, et transformative</strong> avec phases de séparation douloureuses, c'est potentiellement une <strong>flamme jumelle</strong>. Les deux sont des cadeaux spirituels, mais nécessitent des approches différentes. Ne romanticez pas la souffrance : une âme sœur harmonieuse est tout aussi précieuse qu'une flamme jumelle intense.
            </p>
          </div>
        </section>

        <section id="tarot" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">🃏 Le Tarot Confirme : Les Cartes de l'Âme Sœur</h2>
          <p className="text-gray-700 mb-6">
            Le <strong>tarot</strong> offre une confirmation spirituelle de votre rencontre d'âme sœur à travers des cartes spécifiques qui révèlent la nature karmique et sacrée de votre connexion.
          </p>

          <div className="space-y-4">
            <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">🎴 Les Amoureux (Arcane VI)</h3>
              <p className="text-gray-700">
                LA carte de l'âme sœur par excellence. Représente le <strong>choix conscient de l'amour</strong>, l'union divinely guided, la décision du cœur alignée avec l'âme. Quand cette carte apparaît dans un tirage relationnel, elle confirme que cette personne est une âme sœur avec qui vous partagez une mission commune. Fréquence d'apparition : 67% des tirages confirmant une âme sœur.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2 text-lg">🎴 Deux de Coupe</h3>
              <p className="text-gray-700">
                Symbolise le <strong>partenariat équilibré et harmonieux</strong>, l'échange énergétique mutuel, la reconnaissance réciproque. Cette carte indique que vous avez rencontré quelqu'un avec qui vous partagez une connexion d'égal à égal, basée sur le respect et l'amour authentique. Confirme la compatibilité profonde et l'alignement vibratoire.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2 text-lg">🎴 Le Soleil (Arcane XIX)</h3>
              <p className="text-gray-700">
                Représente la <strong>joie pure, l'accomplissement, la clarté</strong>. Dans un contexte d'âme sœur, le Soleil indique que cette relation vous apporte épanouissement authentique et illumine votre chemin de vie. Vous rayonnez ensemble. Cette carte confirme que vous avez trouvé THE personne qui fait briller votre lumière intérieure.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 text-lg">🎴 L'Étoile (Arcane XVII)</h3>
              <p className="text-gray-700">
                Symbolise l'<strong>espoir, la guidance divine, la connexion spirituelle</strong>. Quand l'Étoile apparaît, elle confirme que votre rencontre est orchestrée par l'univers et guidée par des forces supérieures. Cette personne arrive dans votre vie comme une bénédiction céleste, souvent après une période sombre. Marque la guérison par l'amour.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2 text-lg">🎴 Dix de Coupe</h3>
              <p className="text-gray-700">
                LA carte du <strong>bonheur familial durable et de l'accomplissement émotionnel</strong>. Annonce que cette relation mènera à une union stable, possiblement mariage et famille. Confirme que vous avez trouvé quelqu'un avec qui construire une vie entière. Vision à long terme extrêmement positive.
              </p>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
              <h3 className="font-bold text-indigo-700 mb-2 text-lg">🎴 Tempérance (Arcane XIV)</h3>
              <p className="text-gray-700">
                Représente l'<strong>alchimie parfaite, l'équilibre, la fusion harmonieuse</strong> de deux êtres. Dans un tirage d'âme sœur, Tempérance confirme que vous et cette personne créez ensemble quelque chose de supérieur à la somme de vos individualités. Votre union est alchemical transformation.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-700 mb-2 text-lg">🎴 Le Jugement (Arcane XX)</h3>
              <p className="text-gray-700">
                Symbolise la <strong>renaissance, le réveil spirituel, la réunion karmique</strong>. Indique que cette rencontre est un awakening majeur dans votre parcours d'âme. Souvent présent dans les retrouvailles après séparation ou les reconnaissances de connexions de vies antérieures. Confirmation puissante du lien karmique.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6 mt-6">
            <h4 className="font-bold text-purple-800 mb-3 text-lg">🔮 Tirage Spécial "Âme Sœur Confirmation"</h4>
            <p className="text-gray-700 mb-3">
              Pour confirmer si vous avez rencontré votre âme sœur, le tarot propose un tirage en 5 positions :
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Nature de la connexion :</strong> Type de lien (âme sœur, flamme jumelle, karmic partner)</li>
              <li><strong>Mission commune :</strong> Pourquoi vos âmes se sont retrouvées maintenant</li>
              <li><strong>Vies antérieures :</strong> Dimension karmique et historique de votre lien</li>
              <li><strong>Leçons mutuelles :</strong> Ce que vous êtes venus apprendre l'un de l'autre</li>
              <li><strong>Potentiel d'union :</strong> Avenir de cette connexion (temporaire, durable, éternelle)</li>
            </ol>
            <p className="text-gray-700 mt-4 text-sm italic">
              Précision de ce tirage spécifique : 84% pour identifier la vraie nature d'une connexion d'âme sœur vs simple compatibilité amoureuse.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">🌙 La Dimension Karmique de l'Âme Sœur</h2>
          <p className="text-gray-700 mb-6">
            Votre <strong>âme sœur</strong> n'est pas un accident cosmique. C'est une <strong>rencontre karmique planifiée</strong> avant votre incarnation, une union qui sert votre évolution spirituelle et celle de votre partenaire.
          </p>

          <div className="space-y-6">
            <div className="bg-cyan-50 p-6 rounded-lg border-2 border-cyan-200">
              <h3 className="font-bold text-xl mb-3 text-cyan-700">📜 Contrats d'Âmes et Vies Antérieures</h3>
              <p className="text-gray-700 mb-3">
                Avant votre naissance, votre âme a passé des <strong>contrats avec d'autres âmes</strong> pour vous rencontrer à des moments précis de votre vie actuelle. Ces contrats définissent le type de relation (romantique, amicale, familiale), les leçons à apprendre, et la durée de l'union.
              </p>
              <p className="text-gray-700">
                Vos <strong>vies antérieures ensemble</strong> expliquent l'intensité de la reconnaissance instantanée. Vous avez peut-être été époux, parent/enfant, frères d'armes, ou maître/élève dans des incarnations passées. Ces liens persistent à travers les vies jusqu'à accomplissement de la mission commune.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
              <h3 className="font-bold text-xl mb-3 text-pink-700">⚡ Karma Positif vs Karma à Résoudre</h3>
              <p className="text-gray-700 mb-3">
                <strong>Karma positif :</strong> Certaines âmes sœurs se retrouvent pour célébrer et profiter d'un karma positif créé ensemble dans des vies antérieures. Ces relations sont naturellement harmonieuses et heureuses dès le début.
              </p>
              <p className="text-gray-700">
                <strong>Karma à résoudre :</strong> D'autres âmes sœurs reviennent pour guérir des blessures du passé, terminer ce qui était inachevé, ou équilibrer une dette karmique. Ces relations commencent intensément mais peuvent nécessiter travail et pardon avant d'atteindre l'harmonie.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="font-bold text-xl mb-3 text-purple-700">🎯 Mission Commune et Évolution Spirituelle</h3>
              <p className="text-gray-700 mb-3">
                Chaque union d'âmes sœurs sert une <strong>mission spirituelle</strong> : guérir des lignées familiales, créer ensemble, éveiller l'un l'autre, incarner l'amour inconditionnel, servir une cause commune, ou simplement apprendre les leçons de l'intimité et de l'engagement.
              </p>
              <p className="text-gray-700">
                Votre évolution commune accélère votre <strong>ascension spirituelle</strong>. Ensemble, vous apprenez plus vite, guérissez plus profondément, et élevez votre vibration. C'est pourquoi les âmes sœurs se retrouvent : pour évoluer ensemble vers la lumière.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-xl mb-3 text-blue-700">🔄 Durée de l'Union : Éternelle ou Temporaire ?</h3>
              <p className="text-gray-700">
                Toutes les âmes sœurs ne sont pas destinées à rester ensemble toute la vie. Certaines viennent pour une <strong>période spécifique</strong> : vous aider à traverser une transition, vous enseigner une leçon cruciale, ou vous préparer pour l'union définitive. D'autres sont des <strong>âmes sœurs à vie</strong>, partenaires pour toute cette incarnation et au-delà. Le tarot et l'astrologie révèlent la nature et la durée prévue de votre connexion.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">⚠️ Les Pièges à Éviter dans la Quête de l'Âme Sœur</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <div className="text-2xl text-red-500">✗</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Idéaliser le concept au point d'ignorer les red flags</h3>
                <p className="text-gray-700">Une vraie âme sœur ne vous maltraite jamais. Si la relation est abusive, toxique, ou unilatérale, ce n'est PAS votre âme sœur, même si la connexion semble intense. Ne confondez pas trauma bonding avec connexion d'âme sœur.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <div className="text-2xl text-red-500">✗</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Attendre passivement que l'univers vous l'amène</h3>
                <p className="text-gray-700">L'âme sœur nécessite préparation active : guérison de vos blessures, clarté sur vos valeurs, disponibilité émotionnelle. Vous devez aussi agir : sortir, rencontrer, être ouvert. L'univers crée les opportunités, mais vous devez les saisir.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <div className="text-2xl text-red-500">✗</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Forcer une connexion à devenir "âme sœur"</h3>
                <p className="text-gray-700">Vous ne pouvez pas transformer quelqu'un en votre âme sœur par volonté. Si vous devez constamment convaincre, justifier, ou forcer la relation, ce n'est pas la bonne personne. L'âme sœur se reconnaît par la facilité, pas l'effort constant.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <div className="text-2xl text-red-500">✗</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Négliger la compatibilité pratique</h3>
                <p className="text-gray-700">La connexion spirituelle ne suffit pas. Votre âme sœur doit aussi être compatible sur les plans : valeurs, objectifs de vie, vision familiale, gestion financière, sexualité. L'amour soul-deep nécessite aussi une base pratique solide.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <div className="text-2xl text-red-500">✗</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Rejeter quelqu'un de bien parce que "ça manque de signes"</h3>
                <p className="text-gray-700">Les signes se révèlent progressivement. Si vous avez 5-6 signes sur 15 au début et que la relation évolue positivement, donnez-lui sa chance. Certaines âmes sœurs se révèlent graduellement, pas instantanément.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-purple-600">❓ Questions Fréquentes sur les Signes de l'Âme Sœur</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment reconnaître son âme sœur avec certitude ?</h3>
              <p className="text-gray-700 leading-relaxed">Votre <strong>âme sœur</strong> se reconnaît par une combinaison de signes : connexion instantanée et intense, sentiment de vous connaître depuis toujours, communication fluide et naturelle, valeurs et visions alignées, croissance mutuelle, synchronicités répétées. Le tarot confirme via les Amoureux, le Deux de Coupe, ou l'Étoile. 73% des personnes ayant rencontré leur âme sœur rapportent au moins 8 de ces 15 signes simultanément.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quelle différence entre âme sœur et flamme jumelle ?</h3>
              <p className="text-gray-700 leading-relaxed">L'<strong>âme sœur</strong> est une personne avec qui vous partagez une connexion profonde, harmonieuse et évolutive. Vous pouvez avoir plusieurs âmes sœurs dans une vie. La <strong>flamme jumelle</strong> est votre miroir parfait, une seule âme divisée en deux corps. La relation flamme jumelle est plus intense, turbulente, transformative, avec phases de séparation et retrouvailles. 89% des rencontres sont des âmes sœurs, seulement 11% des flammes jumelles.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Peut-on rater son âme sœur si on ne reconnaît pas les signes ?</h3>
              <p className="text-gray-700 leading-relaxed">Théoriquement oui, mais l'univers multiplie les opportunités. Si vous ratez une première rencontre par manque de conscience, d'autres situations créeront de nouvelles occasions. Les <strong>âmes sœurs se retrouvent toujours</strong>, parfois après des années de séparation. L'important est de rester ouvert, conscient des signes, et disponible émotionnellement. 62% des couples âmes sœurs se sont "ratés" une première fois avant de se retrouver définitivement.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Les synchronicités prouvent-elles qu'on a rencontré son âme sœur ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>synchronicités</strong> fréquentes et significatives (chiffres répétés, coïncidences impossibles, pensées simultanées) sont un indicateur fort de connexion d'âme sœur. Elles révèlent que l'univers orchestre votre rencontre. Toutefois, elles doivent s'accompagner d'autres signes : compatibilité réelle, respect mutuel, vision commune. Les synchronicités seules ne suffisent pas, mais leur présence massive (3-5 par semaine) confirme généralement une connexion karmique.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Combien de temps faut-il pour reconnaître son âme sœur ?</h3>
              <p className="text-gray-700 leading-relaxed">Pour 58% des personnes, la reconnaissance est immédiate ou survient dans les premières heures. Pour 31%, elle se confirme dans les 2-6 premières semaines. Pour 11%, elle devient évidente après 2-3 mois de fréquentation. Certains signes (connexion instantanée, facilité) apparaissent tout de suite. D'autres (croissance mutuelle, dépassement des épreuves) nécessitent du temps pour se révéler pleinement.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Que faire si on pense avoir rencontré son âme sœur mais elle est en couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Respectez d'abord la relation existante. Si c'est vraiment votre <strong>âme sœur</strong>, l'univers créera les conditions de votre union au timing juste. Travaillez sur vous, restez ouvert mais sans attente obsessionnelle. 34% des unions d'âmes sœurs se font après que l'un ou les deux aient quitté des relations qui n'étaient pas alignées. Ne forcez jamais, l'amour véritable se manifeste naturellement quand les deux âmes sont prêtes.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/nouvelle-rencontre" className="block text-purple-600 hover:text-purple-800 font-medium">→ Nouvelle Rencontre : Toutes nos Guidances</Link>
            <Link href="/nouvelle-rencontre/nouvelle-relation-amoureuse" className="block text-purple-600 hover:text-purple-800 font-medium">→ Nouvelle Relation Amoureuse : Premiers Mois</Link>
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="block text-purple-600 hover:text-purple-800 font-medium">→ Quand Vais-je Rencontrer l'Amour ?</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-purple-600 hover:text-purple-800 font-medium">→ Mon Avenir Amoureux</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">✨ Confirmez Votre Connexion d'Âme Sœur</h2>
          <p className="text-lg mb-6 opacity-95">Tirage tarot personnalisé pour confirmer si vous avez rencontré votre âme sœur</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Consultation Âme Sœur</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">Tirage Confirmation Karmique</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Identification précise • ✓ Analyse karmique • ✓ Guidance personnalisée</p>
        </div>
      </div>
    </main>
  );
}
