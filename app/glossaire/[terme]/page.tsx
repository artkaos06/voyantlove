import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { GLOSSARY_TERMS, CATEGORY_LABELS, findTerm, getRelatedTerms, validateTermRecord } from '@/lib/glossaire';
import { renderWithEntities } from '@/lib/entityBold';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import AskAI from '@/components/AskAI';

const LIVE_TERMS = GLOSSARY_TERMS.filter((t) => validateTermRecord(t).length === 0);

// Each glossary term funnels authority to the priority page for its category,
// so anchors/targets vary by category rather than repeating one sitewide link.
const FUNNEL_FALLBACK = { href: '/methodes-voyance/', anchor: 'les méthodes de voyance amoureuse', lead: 'Ce terme s’inscrit dans' };
const CATEGORY_FUNNEL: Record<string, { href: string; anchor: string; lead: string }> = {
  astrologie: { href: '/astrologie-amour/', anchor: 'l’astrologie amoureuse', lead: 'Ce terme s’éclaire à la lumière de' },
  numerologie: { href: '/methodes-voyance/numerologie-amoureuse/', anchor: 'la numérologie amoureuse', lead: 'Pour aller plus loin, découvrez' },
  'pratiques-divinatoires': { href: '/tarot-amour/', anchor: 'le tarot de l’amour', lead: 'On retrouve souvent ce concept dans' },
  'psychologie-amoureuse': { href: '/sentiments/', anchor: 'les sentiments amoureux', lead: 'Ce mécanisme touche au cœur des' },
  spiritualite: { href: '/nouvelle-rencontre/flamme-jumelle/', anchor: 'la flamme jumelle', lead: 'Cette notion est proche de l’univers de' },
};

export function generateStaticParams() {
  return LIVE_TERMS.map((t) => ({ terme: t.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ terme: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { terme } = await params;
  const t = findTerm(terme);
  if (!t) return {};
  return {
    title: `${t.terme} : Définition et Signification en Amour`,
    description: `${t.definitionCourte} Définition, origine et signification en amour, expliquées simplement.`,
    alternates: { canonical: `https://www.voyantlove.fr/glossaire/${t.slug}/` },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { terme } = await params;
  const t = findTerm(terme);
  if (!t || validateTermRecord(t).length > 0) notFound();

  const url = `https://www.voyantlove.fr/glossaire/${t.slug}/`;
  const title = `${t.terme} : Définition et Signification en Amour`;
  const funnel = CATEGORY_FUNNEL[t.categorie] ?? FUNNEL_FALLBACK;
  const related = getRelatedTerms(t, 4);
  const siblings = LIVE_TERMS.filter((x) => x.categorie === t.categorie && x.slug !== t.slug).slice(0, 4);

  const articleSchema = getArticleSchema({
    title,
    description: `${t.definitionCourte} Définition, origine et signification en amour.`,
    url,
    datePublished: '2026-08-06',
    dateModified: '2026-08-06',
    keywords: [t.terme.toLowerCase(), `${t.terme.toLowerCase()} définition`, `${t.terme.toLowerCase()} signification amour`, 'glossaire voyance amoureuse'],
  });
  const faqSchema = getFAQSchema(t.faq.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Glossaire', url: 'https://www.voyantlove.fr/glossaire/' },
    { name: t.terme, url },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/80 mb-4">
            <Link href="/glossaire/" className="hover:text-white">Glossaire</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{CATEGORY_LABELS[t.categorie]}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t.terme}</h1>
          <p className="text-lg opacity-90">{t.definitionCourte}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Answer capsule, extractive snippet target */}
        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Que signifie « {t.terme} »&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-800">{renderWithEntities(t.answerCapsule)}</p>
          <div className="mt-5">
            <AskAI title={title} url={url} context={t.answerCapsule} />
          </div>
        </section>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-violet-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Origine et explication</h2>
          <p className="text-lg leading-relaxed text-gray-700">{renderWithEntities(t.explication)}</p>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source={`glossaire-${t.slug}-early`} />

        <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 md:p-8 mb-8 border-2 border-violet-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terme} en amour</h2>
          <p className="text-gray-800 leading-relaxed">{renderWithEntities(t.enAmour)}</p>
          <p className="text-gray-700 leading-relaxed mt-4">
            {funnel.lead}{' '}
            <Link href={funnel.href} className="text-violet-700 hover:text-violet-900 underline font-medium">{funnel.anchor}</Link>.
          </p>
        </section>

        {/* Key points */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">L&apos;essentiel à retenir</h2>
          <ul className="space-y-3">
            {t.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-violet-500 font-bold mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          <div className="space-y-6">
            {t.faq.map((f, i) => (
              <div key={i} className={i < t.faq.length - 1 ? 'border-b border-gray-200 pb-6' : ''}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{renderWithEntities(f.a)}</p>
              </div>
            ))}
          </div>
        </section>

        {t.liensSite.length > 0 && (
          <div className="bg-violet-50 rounded-xl p-6 mb-8 border border-violet-200">
            <h2 className="font-bold text-lg mb-4 text-gray-900">Pour aller plus loin sur VoyantLove</h2>
            <div className="space-y-2">
              {t.liensSite.map((l) => (
                <Link key={l.href} href={l.href} className="block text-violet-700 hover:text-violet-900 font-medium">
                  &rarr; {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-lg mb-4 text-gray-900">Termes liés</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/glossaire/${r.slug}/`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  &rarr; {r.terme}
                </Link>
              ))}
            </div>
          </div>
        )}

        {siblings.length > 0 && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-lg mb-4 text-gray-900">{CATEGORY_LABELS[t.categorie]} : autres termes</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {siblings.map((s) => (
                <Link key={s.slug} href={`/glossaire/${s.slug}/`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  &rarr; {s.terme}
                </Link>
              ))}
            </div>
            <Link href="/glossaire/" className="inline-block mt-4 text-sm text-violet-700 hover:text-violet-900 font-semibold">
              Voir tout le glossaire &rarr;
            </Link>
          </div>
        )}

        <VoyantFinalCTA topic="methodes-voyance" source={`glossaire-${t.slug}-final`} />
      </div>
    </main>
  );
}
