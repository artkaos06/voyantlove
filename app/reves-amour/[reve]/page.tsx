import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { REVES_AMOUR, findDream, validateDreamRecord } from '@/lib/revesAmour';
import { renderWithEntities } from '@/lib/entityBold';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import AskAI from '@/components/AskAI';
import VoyantRailSection from '@/components/VoyantRailSection';

const LIVE_DREAMS = REVES_AMOUR.filter((d) => validateDreamRecord(d).length === 0);

// Each dream funnels to the most theme-relevant priority page (keyed on the
// slug), so the 85 rêves pages pass authority to the emotional-long-tail
// clusters instead of dead-ending at the hub. Anchors/targets vary by theme.
function dreamFunnel(slug: string): { href: string; anchor: string; lead: string } {
  if (/(^|-)ex(-|$)|rupture|larguer|quitte|separation|abandon|remplace/.test(slug))
    return { href: '/reconquete/va-t-il-elle-revenir/', anchor: 'le retour de l’ex', lead: 'Ce rêve touche souvent à' };
  if (/mariage|fiancailles|demande|epous|noce|bague/.test(slug))
    return { href: '/sentiments/voyance-mariage/', anchor: 'la voyance du mariage', lead: 'Pour prolonger la réflexion, explorez' };
  if (/tromp|jalou|infidel|amant|mensonge/.test(slug))
    return { href: '/crise-couple/infidelite-couple/', anchor: 'l’infidélité dans le couple', lead: 'Ce songe renvoie parfois à' };
  if (/enceinte|grossesse|bebe|enfant|accouch/.test(slug))
    return { href: '/sentiments/voyance-grossesse-bebe/', anchor: 'la voyance grossesse et bébé', lead: 'Ce rêve peut faire écho à' };
  if (/crush|tomber-amoureux|declaration|baiser|rencontre|inconnu/.test(slug))
    return { href: '/nouvelle-rencontre/flamme-jumelle/', anchor: 'la flamme jumelle', lead: 'Ce rêve évoque parfois' };
  // Feeling-themed default, spread deterministically across 3 sentiment pages
  // (varied anchors) so it isn't one identical sitewide link.
  const defaults = [
    { href: '/sentiments/maime-t-il-elle/', anchor: 'décrypter les sentiments de l’autre', lead: 'Pour aller plus loin, apprenez à' },
    { href: '/sentiments/avenir-amoureux/', anchor: 'votre avenir amoureux', lead: 'Ce rêve invite à interroger' },
    { href: '/sentiments/', anchor: 'la guidance des sentiments amoureux', lead: 'Pour y voir plus clair, explorez' },
  ];
  return defaults[slug.length % defaults.length];
}

export function generateStaticParams() {
  return LIVE_DREAMS.map((d) => ({ reve: d.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ reve: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { reve } = await params;
  const d = findDream(reve);
  if (!d) return {};
  return {
    title: `${d.titre} : Signification et Interprétation`,
    description: `${d.primaryQuery} : ce que ce rêve révèle sur votre monde intérieur, les interprétations possibles selon le scénario, et ce qu'il ne prédit pas.`,
    alternates: { canonical: `https://www.voyantlove.fr/reves-amour/${d.slug}/` },
  };
}

export default async function DreamPage({ params }: Props) {
  const { reve } = await params;
  const d = findDream(reve);
  if (!d || validateDreamRecord(d).length > 0) notFound();

  const url = `https://www.voyantlove.fr/reves-amour/${d.slug}/`;
  const title = `${d.titre} : Signification et Interprétation`;
  const funnel = dreamFunnel(d.slug);
  const siblings = LIVE_DREAMS.filter((x) => x.slug !== d.slug).slice(0, 5);

  const articleSchema = getArticleSchema({
    title,
    description: `${d.primaryQuery} : interprétation symbolique, ce que ce rêve reflète et ce qu'il ne prédit pas.`,
    url,
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    keywords: [d.primaryQuery.toLowerCase(), `${d.titre.toLowerCase()} signification`, 'interprétation des rêves amour', 'signification rêve amour'],
  });
  const faqSchema = getFAQSchema(d.faq.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Rêves Amour', url: 'https://www.voyantlove.fr/reves-amour/' },
    { name: d.titre, url },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/reves-amour/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Tous les rêves amoureux</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{d.emoji} {d.primaryQuery} : Signification</h1>
          <p className="text-lg opacity-90">Interprétation des rêves amoureux, ce que ce rêve révèle, et ce qu&apos;il ne prédit pas</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Interprétation symbolique des rêves et guidance émotionnelle" />

        {/* Answer capsule, extractive snippet target */}
        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Que signifie {d.titre.toLowerCase()}&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-800">{renderWithEntities(d.answerCapsule)}</p>
          <div className="mt-5">
            <AskAI title={title} url={url} context={d.answerCapsule} />
          </div>
        </section>
        {/* Bloc voyants commercial : mêmes rails que la home. */}
        <VoyantRailSection source="reves-amour-reve-rail" bare />

        {/* Theme funnel to the most relevant priority page */}
        <p className="text-gray-600 mb-8">
          {funnel.lead}{' '}
          <Link href={funnel.href} className="text-indigo-600 hover:text-indigo-800 underline font-medium">{funnel.anchor}</Link>.
        </p>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi fait-on ce rêve&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-700">{renderWithEntities(d.pourquoi)}</p>
        </article>

        <VoyantQuickCTA topic="rupture" source={`reve-${d.slug}-early`} />

        {/* Interpretation matrix */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Les interprétations selon le scénario du rêve</h2>
          <div className="space-y-4">
            {d.interpretations.map((it, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
                <h3 className="font-bold text-indigo-800 mb-1">{it.variante}</h3>
                <p className="text-gray-700">{renderWithEntities(it.sens)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What it does NOT prove */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 border-l-4 border-amber-500">
          <h2 className="text-xl font-bold text-amber-700 mb-3">Ce que ce rêve ne prouve pas</h2>
          <p className="text-gray-700 leading-relaxed">{renderWithEntities(d.neProuvePas)}</p>
        </section>

        {/* What to do */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-green-700 mb-3">Que faire de l&apos;émotion que ce rêve réveille</h2>
          <p className="text-gray-700 leading-relaxed">{renderWithEntities(d.conseil)}</p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Questions fréquentes sur ce rêve</h2>
          <div className="space-y-6">
            {d.faq.map((f, i) => (
              <div key={i} className={i < d.faq.length - 1 ? 'border-b border-gray-200 pb-6' : ''}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{renderWithEntities(f.a)}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-lg mb-4 text-gray-900">🌙 Autres rêves amoureux</h2>
          <div className="space-y-2">
            {siblings.map((x) => (
              <Link key={x.slug} href={`/reves-amour/${x.slug}/`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                &rarr; {x.emoji} {x.primaryQuery}
              </Link>
            ))}
            <Link href="/rupture/rever-de-son-ex/" className="block text-indigo-600 hover:text-indigo-800 font-medium">
              &rarr; 🌙 Rêver de son ex : signification complète
            </Link>
          </div>
        </div>

        <VoyantFinalCTA topic="rupture" source={`reve-${d.slug}-final`} />
      </div>
    </main>
  );
}
