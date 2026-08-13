import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { SIGNES_AMOUR, validateSignRecord } from '@/lib/signesAmour';
import EEATSignal from '@/components/EEATSignal';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

const LIVE_SIGNS = SIGNES_AMOUR.filter((s) => validateSignRecord(s).length === 0);

export const metadata: Metadata = {
  title: 'Signes Astrologiques en Amour : Caractère et Compatibilités',
  description: 'Comment aime chaque signe du zodiaque : caractère amoureux, séduction, en couple et compatibilités du Bélier aux Poissons. Le guide complet des signes astrologiques en amour.',
  alternates: { canonical: 'https://www.voyantlove.fr/astrologie-amour/' },
};

const ELEMENT_STYLE: Record<string, string> = {
  Feu: 'border-red-500',
  Terre: 'border-green-600',
  Air: 'border-sky-500',
  Eau: 'border-blue-600',
};

export default function AstrologieAmourHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Signes Astrologiques en Amour : Caractère et Compatibilités',
    description: 'Comment aime chaque signe du zodiaque : caractère amoureux, séduction et compatibilités, du Bélier aux Poissons.',
    url: 'https://www.voyantlove.fr/astrologie-amour/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Astrologie Amour', url: 'https://www.voyantlove.fr/astrologie-amour/' },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">♾️ Les Signes Astrologiques en Amour</h1>
          <p className="text-2xl opacity-95 mb-4">Comment aime chaque signe du zodiaque</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Caractère amoureux, séduction, vie de couple et compatibilités, du Bélier aux Poissons.</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Analyse astrologique des signes en amour" />

        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Chaque signe aime à sa manière</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Le <strong>signe solaire</strong> donne une première clé pour comprendre la façon d&apos;aimer d&apos;une personne&nbsp;: son rapport à la <strong>passion</strong>, à l&apos;engagement, à la <strong>séduction</strong> et à la fidélité. Un signe de <strong>Feu</strong> n&apos;aime pas comme un signe d&apos;<strong>Eau</strong>, ni un signe d&apos;<strong>Air</strong> comme un signe de <strong>Terre</strong>. Découvrez le profil amoureux complet de chaque signe du zodiaque, l&apos;homme et la femme, comment le séduire et avec qui il est le plus compatible. Rappelez-vous&nbsp;: le signe solaire éclaire une tendance, jamais un destin, un thème complet demande la date, l&apos;heure et le lieu de naissance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Les 12 signes du zodiaque en amour</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LIVE_SIGNS.map((s) => (
              <Link
                key={s.slug}
                href={`/astrologie-amour/${s.slug}`}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 ${ELEMENT_STYLE[s.element] ?? 'border-fuchsia-500'}`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">{s.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900">{s.name} en amour</h3>
                </div>
                <p className="text-gray-500 text-sm mb-2">{s.element} · {s.dates}</p>
                <p className="text-gray-600 text-sm">{s.mots.join(' · ')}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-lg mb-4 text-gray-900">🔮 Aller plus loin</h2>
          <div className="space-y-2">
            <Link href="/compatibilite-amoureuse" className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">&rarr; 💞 Compatibilité amoureuse des signes (les 78 duos)</Link>
            <Link href="/methodes-voyance/synastrie-amoureuse" className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">&rarr; 🔭 Tester votre compatibilité (synastrie)</Link>
            <Link href="/tarot-amour" className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">&rarr; 🃏 Tarot amour : signification des cartes</Link>
            <Link href="/methodes-voyance/astrologie-amoureuse" className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">&rarr; ✨ L&apos;astrologie amoureuse : la méthode</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="methodes-voyance" source="astrologie-amour-hub-final" />
      </div>
    </main>
  );
}
