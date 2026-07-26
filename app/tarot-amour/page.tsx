import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { TAROT_LOVE_CARDS, validateCardRecord } from '@/lib/tarotLoveCards';
import EEATSignal from '@/components/EEATSignal';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

const LIVE_CARDS = TAROT_LOVE_CARDS.filter((c) => validateCardRecord(c).length === 0);

export const metadata: Metadata = {
  title: 'Tarot Amour : Signification des Cartes en Amour',
  description: 'Signification des cartes du tarot en amour : chaque arcane décrypté à l\'endroit et renversé, pour célibataire, couple et retour d\'un ex. Tarot de Marseille.',
  alternates: { canonical: 'https://www.voyantlove.fr/tarot-amour/' },
};

const OUINON_DOT: Record<string, string> = {
  Oui: 'bg-green-500',
  Non: 'bg-red-500',
  Nuancé: 'bg-amber-500',
};

export default function TarotAmourHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Tarot Amour : Signification des Cartes en Amour',
    description: 'Signification des cartes du tarot en amour, arcane par arcane, à l\'endroit et renversé.',
    url: 'https://www.voyantlove.fr/tarot-amour/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Tarot Amour', url: 'https://www.voyantlove.fr/tarot-amour/' },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-purple-800 via-indigo-800 to-violet-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">🃏 Tarot Amour : Signification des Cartes</h1>
          <p className="text-2xl opacity-95 mb-4">Chaque arcane décrypté pour votre vie sentimentale</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Signification à l&apos;endroit et renversée, message pour célibataire, couple et retour d&apos;un ex.</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Interprétation du Tarot de Marseille en amour" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Les cartes décryptées en amour</h2>
          <p className="text-lg text-gray-700 mb-8">
            Chaque carte du <strong>Tarot de Marseille</strong> porte un message précis sur l&apos;amour. Découvrez sa signification à l&apos;endroit et renversée, et ce qu&apos;elle annonce selon votre situation. D&apos;autres arcanes s&apos;ajoutent progressivement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {LIVE_CARDS.map((c) => (
              <Link
                key={c.slug}
                href={`/tarot-amour/${c.slug}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{c.emoji}</div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <span className={`w-2.5 h-2.5 rounded-full ${OUINON_DOT[c.ouiNon]}`}></span>
                    {c.ouiNon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                <p className="text-gray-600 text-sm">{c.arcane}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Aller plus loin</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/voyance-gratuite-amour/tarot-amour-gratuit" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Tirage Tarot Gratuit</h3>
              <p className="text-sm text-gray-600">Tirez les cartes vous-même, en croix, gratuitement et en direct.</p>
            </Link>
            <Link href="/methodes-voyance/tirage-tarot-amour" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Le Tirage en Détail</h3>
              <p className="text-sm text-gray-600">Comprendre les tirages de tarot amoureux et leurs positions.</p>
            </Link>
            <Link href="/voyance-gratuite-amour/tarot-oui-non-amour" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Tarot Oui ou Non</h3>
              <p className="text-sm text-gray-600">Une réponse claire à votre question de cœur, en une carte.</p>
            </Link>
          </div>
        </section>

        <VoyantFinalCTA topic="methodes-voyance" source="tarot-amour-hub-final" />
      </div>
    </main>
  );
}
