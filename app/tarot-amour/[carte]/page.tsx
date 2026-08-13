import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { TAROT_LOVE_CARDS, findCard, validateCardRecord } from '@/lib/tarotLoveCards';
import { renderWithEntities } from '@/lib/entityBold';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import AskAI from '@/components/AskAI';

const LIVE_CARDS = TAROT_LOVE_CARDS.filter((c) => validateCardRecord(c).length === 0);

export function generateStaticParams() {
  return LIVE_CARDS.map((c) => ({ carte: c.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ carte: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { carte } = await params;
  const c = findCard(carte);
  if (!c) return {};
  return {
    title: `${c.name} en Amour : Signification Tarot`,
    description: `${c.name} en amour : signification, carte à l'endroit et renversée, message pour célibataire, couple et retour d'un ex. ${c.arcane} du Tarot de Marseille.`,
    alternates: { canonical: `https://www.voyantlove.fr/tarot-amour/${c.slug}/` },
  };
}

const OUINON_STYLE: Record<string, string> = {
  Oui: 'bg-green-100 text-green-800 border-green-300',
  Non: 'bg-red-100 text-red-800 border-red-300',
  Nuancé: 'bg-amber-100 text-amber-800 border-amber-300',
};

export default async function CardPage({ params }: Props) {
  const { carte } = await params;
  const c = findCard(carte);
  if (!c || validateCardRecord(c).length > 0) notFound();

  const url = `https://www.voyantlove.fr/tarot-amour/${c.slug}/`;
  const title = `${c.name} en Amour : Signification Tarot`;
  const siblings = LIVE_CARDS.filter((x) => x.slug !== c.slug).slice(0, 5);

  const articleSchema = getArticleSchema({
    title,
    description: `${c.name} en amour : signification, endroit et renversée, célibataire, couple et ex.`,
    url,
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    keywords: [`${c.name.toLowerCase()} amour`, `${c.name.toLowerCase()} tarot amour`, `${c.name.toLowerCase()} signification amour`, 'tarot amour'],
  });
  const faqSchema = getFAQSchema(c.faq.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Tarot Amour', url: 'https://www.voyantlove.fr/tarot-amour/' },
    { name: c.name, url },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-purple-800 via-indigo-800 to-violet-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/tarot-amour" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Toutes les cartes du tarot amour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{c.emoji} {c.name} en Amour</h1>
          <p className="text-lg opacity-90 mb-4">{c.arcane} du Tarot de Marseille</p>
          <span className={`inline-block text-sm font-bold uppercase tracking-wide px-4 py-1.5 rounded-full border ${OUINON_STYLE[c.ouiNon]}`}>
            Réponse oui/non : {c.ouiNon}
          </span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Interprétation du Tarot de Marseille en amour" />

        {/* Answer capsule, extractive snippet target */}
        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Que signifie {c.name} en amour&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-800">{renderWithEntities(c.answerCapsule)}</p>
          <div className="mt-5">
            <AskAI title={title} url={url} context={c.answerCapsule} />
          </div>
        </section>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Que révèle {c.name} sur votre vie amoureuse&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-700">{renderWithEntities(c.signification)}</p>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source={`tarot-${c.slug}-early`} />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-green-700 mb-3">Que signifie {c.name} à l&apos;endroit en amour&nbsp;?</h2>
            <p className="text-gray-700">{renderWithEntities(c.endroit)}</p>
          </section>
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
            <h2 className="text-xl font-bold text-orange-700 mb-3">Que signifie {c.name} en position renversée&nbsp;?</h2>
            <p className="text-gray-700">{renderWithEntities(c.renverse)}</p>
          </section>
        </div>

        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">{c.name} selon votre situation amoureuse</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-indigo-800 mb-1">💗 Pour un célibataire</h3>
              <p className="text-gray-700">{renderWithEntities(c.celibataire)}</p>
            </div>
            <div>
              <h3 className="font-bold text-indigo-800 mb-1">💞 Pour un couple</h3>
              <p className="text-gray-700">{renderWithEntities(c.couple)}</p>
            </div>
            <div>
              <h3 className="font-bold text-indigo-800 mb-1">💔 Concernant un ex</h3>
              <p className="text-gray-700">{renderWithEntities(c.ex)}</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 mb-8 text-center">
          <p className="text-gray-700 mb-3">Envie de tirer les cartes vous-même&nbsp;? Essayez notre tirage tarot amour gratuit et immédiat.</p>
          <Link href="/voyance-gratuite-amour/tarot-amour-gratuit" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg transition">
            🔮 Faire un tirage gratuit
          </Link>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Questions fréquentes sur {c.name} en amour</h2>
          <div className="space-y-6">
            {c.faq.map((f, i) => (
              <div key={i} className={i < c.faq.length - 1 ? 'border-b border-gray-200 pb-6' : ''}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{renderWithEntities(f.a)}</p>
              </div>
            ))}
          </div>
        </section>

        {siblings.length > 0 && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-lg mb-4 text-gray-900">🃏 Autres cartes du tarot amour</h2>
            <div className="space-y-2">
              {siblings.map((x) => (
                <Link key={x.slug} href={`/tarot-amour/${x.slug}`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  &rarr; {x.emoji} {x.name} en amour
                </Link>
              ))}
              <Link href="/methodes-voyance/tirage-tarot-amour" className="block text-indigo-600 hover:text-indigo-800 font-medium">
                &rarr; Comprendre le tirage de tarot amoureux
              </Link>
            </div>
          </div>
        )}

        <VoyantFinalCTA topic="methodes-voyance" source={`tarot-${c.slug}-final`} />
      </div>
    </main>
  );
}
