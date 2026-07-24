import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { COMPATIBILITY_PAIRS, findPair, validatePairRecord } from '@/lib/compatibilitePairs';
import { ZODIAC_SIGNS } from '@/lib/zodiac';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import SynastryCalculator from '@/components/SynastryCalculator';

// Publication gate: only records passing validation get a page.
const LIVE_PAIRS = COMPATIBILITY_PAIRS.filter((p) => validatePairRecord(p).length === 0);

export function generateStaticParams() {
  return LIVE_PAIRS.map((p) => ({ pair: p.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ pair: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params;
  const rec = findPair(pair);
  if (!rec) return {};
  return {
    title: `Compatibilité Amoureuse ${rec.signA} ${rec.signB}`,
    description: `${rec.signA} et ${rec.signB} en amour : ${rec.titre.toLowerCase()}. Forces, défis et conseils pour ce couple du zodiaque.`,
    alternates: { canonical: `https://www.voyantlove.fr/compatibilite-amoureuse/${rec.slug}/` },
  };
}

function signMeta(name: string) {
  return ZODIAC_SIGNS.find((s) => s.name === name);
}

export default async function PairPage({ params }: Props) {
  const { pair } = await params;
  const rec = findPair(pair);
  if (!rec || validatePairRecord(rec).length > 0) notFound();

  const url = `https://www.voyantlove.fr/compatibilite-amoureuse/${rec.slug}/`;
  const title = `Compatibilité Amoureuse ${rec.signA} ${rec.signB}`;
  const sA = signMeta(rec.signA);
  const sB = signMeta(rec.signB);
  const hearts = '❤️'.repeat(rec.score) + '🤍'.repeat(5 - rec.score);
  const siblings = LIVE_PAIRS.filter(
    (p) => p.slug !== rec.slug && (p.signA === rec.signA || p.signB === rec.signA || p.signA === rec.signB || p.signB === rec.signB)
  ).slice(0, 4);

  const articleSchema = getArticleSchema({
    title,
    description: `${rec.signA} et ${rec.signB} en amour : forces, défis et conseils.`,
    url,
    datePublished: '2026-07-24',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: [`compatibilité amoureuse ${rec.signA.toLowerCase()} ${rec.signB.toLowerCase()}`, `${rec.signA.toLowerCase()} ${rec.signB.toLowerCase()} amour`, 'compatibilité signes astrologiques'],
  });
  const faqSchema = getFAQSchema(rec.faq.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Compatibilité Amoureuse', url: 'https://www.voyantlove.fr/compatibilite-amoureuse/' },
    { name: `${rec.signA} et ${rec.signB}`, url },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/compatibilite-amoureuse" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Toutes les compatibilités</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{sA?.emoji} {rec.signA} et {rec.signB} {sB?.emoji}</h1>
          <p className="text-xl opacity-95 mb-3">{rec.titre}</p>
          <div className="text-2xl" aria-label={`Score de compatibilité : ${rec.score} sur 5`}>{hearts}</div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Analyse astrologique des signes et des éléments" />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">La dynamique {rec.signA}-{rec.signB} en amour</h2>
          <p className="text-lg leading-relaxed text-gray-700">{rec.dynamique}</p>
        </article>

        <VoyantQuickCTA topic="sentiments" source={`compat-${rec.slug}-early`} />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-green-700 mb-3">✅ Les forces de ce couple</h2>
            <p className="text-gray-700">{rec.forces}</p>
          </section>
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
            <h2 className="text-xl font-bold text-orange-700 mb-3">⚠️ Les défis à surmonter</h2>
            <p className="text-gray-700">{rec.defis}</p>
          </section>
        </div>

        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border-2 border-indigo-200">
          <h2 className="text-xl font-bold text-indigo-800 mb-3">🔮 Le conseil pour {rec.signA} et {rec.signB}</h2>
          <p className="text-gray-700">{rec.conseil}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Testez une autre combinaison</h2>
          <SynastryCalculator />
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Questions fréquentes sur le couple {rec.signA}-{rec.signB}</h2>
          <div className="space-y-6">
            {rec.faq.map((f, i) => (
              <div key={i} className={i < rec.faq.length - 1 ? 'border-b border-gray-200 pb-6' : ''}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {siblings.length > 0 && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-lg mb-4 text-gray-900">💞 Autres compatibilités avec {rec.signA} ou {rec.signB}</h2>
            <div className="space-y-2">
              {siblings.map((p) => (
                <Link key={p.slug} href={`/compatibilite-amoureuse/${p.slug}`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  &rarr; {p.signA} et {p.signB} : {p.titre}
                </Link>
              ))}
              <Link href="/methodes-voyance/synastrie-amoureuse" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                &rarr; Aller plus loin : la synastrie amoureuse complète
              </Link>
            </div>
          </div>
        )}

        <VoyantFinalCTA topic="sentiments" source={`compat-${rec.slug}-final`} />
      </div>
    </main>
  );
}
