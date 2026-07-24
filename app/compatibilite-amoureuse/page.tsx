import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { COMPATIBILITY_PAIRS, validatePairRecord } from '@/lib/compatibilitePairs';
import { ZODIAC_SIGNS } from '@/lib/zodiac';
import EEATSignal from '@/components/EEATSignal';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import SynastryCalculator from '@/components/SynastryCalculator';

const LIVE_PAIRS = COMPATIBILITY_PAIRS.filter((p) => validatePairRecord(p).length === 0);

export const metadata: Metadata = {
  title: 'Compatibilité Amoureuse des Signes Astrologiques',
  description: 'Compatibilité amoureuse signe par signe : dynamique, forces, défis et conseils pour chaque couple du zodiaque. Testez votre duo avec le calculateur.',
  alternates: { canonical: 'https://www.voyantlove.fr/compatibilite-amoureuse/' },
};

export default function CompatibiliteHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Compatibilité Amoureuse des Signes Astrologiques',
    description: 'Compatibilité amoureuse signe par signe : dynamique, forces, défis et conseils pour chaque couple du zodiaque.',
    url: 'https://www.voyantlove.fr/compatibilite-amoureuse/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Compatibilité Amoureuse', url: 'https://www.voyantlove.fr/compatibilite-amoureuse/' },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💞 Compatibilité Amoureuse des Signes</h1>
          <p className="text-2xl opacity-95 mb-4">Chaque duo du zodiaque a sa propre alchimie</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Dynamique, forces, défis et conseils — signe par signe, couple par couple.</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Calculator first — answers the "are we compatible" intent immediately */}
        <section id="calculateur" className="mb-8">
          <SynastryCalculator />
        </section>

        <EEATSignal colorScheme="purple" method="Analyse astrologique des signes, éléments et aspects" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Les compatibilités analysées</h2>
          <p className="text-lg text-gray-700 mb-8">
            Chaque analyse détaille la dynamique du couple, ses forces naturelles, ses défis récurrents et le conseil clé pour durer. Les autres duos du zodiaque arrivent progressivement — testez le vôtre avec le calculateur en attendant.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {LIVE_PAIRS.map((p) => {
              const sA = ZODIAC_SIGNS.find((s) => s.name === p.signA);
              const sB = ZODIAC_SIGNS.find((s) => s.name === p.signB);
              return (
                <Link
                  key={p.slug}
                  href={`/compatibilite-amoureuse/${p.slug}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500"
                >
                  <div className="text-3xl mb-3">{sA?.emoji} {sB?.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{p.signA} et {p.signB}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{p.titre}</p>
                  <span className="text-sm" aria-label={`Score : ${p.score} sur 5`}>{'❤️'.repeat(p.score)}{'🤍'.repeat(5 - p.score)}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Aller plus loin</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/methodes-voyance/synastrie-amoureuse" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Synastrie Amoureuse</h3>
              <p className="text-sm text-gray-600">L'analyse complète des deux thèmes astraux, planète par planète.</p>
            </Link>
            <Link href="/sentiments/compatibilite-amoureuse" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Compatibilité : le Guide</h3>
              <p className="text-sm text-gray-600">Tous les indicateurs de compatibilité au-delà de l'astrologie.</p>
            </Link>
            <Link href="/methodes-voyance/numerologie-amoureuse" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Numérologie Amoureuse</h3>
              <p className="text-sm text-gray-600">La compatibilité par les chiffres : chemin de vie et nombres.</p>
            </Link>
          </div>
        </section>

        <VoyantFinalCTA topic="sentiments" source="compat-hub-final" />
      </div>
    </main>
  );
}
