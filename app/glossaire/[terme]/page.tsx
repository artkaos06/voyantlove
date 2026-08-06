import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { GLOSSARY_TERMS, CATEGORY_LABELS, findTerm, getRelatedTerms, validateTermRecord } from '@/lib/glossaire';
import { renderWithEntities } from '@/lib/entityBold';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

const LIVE_TERMS = GLOSSARY_TERMS.filter((t) => validateTermRecord(t).length === 0);

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
            <Link href="/glossaire" className="hover:text-white">Glossaire</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{CATEGORY_LABELS[t.categorie]}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t.emoji} {t.terme}</h1>
          <p className="text-lg opacity-90">{t.definitionCourte}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Glossaire de la voyance amoureuse — définitions et guidance sentimentale" />

        {/* Answer capsule — extractive snippet target */}
        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Que signifie « {t.terme} »&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-800">{renderWithEntities(t.answerCapsule)}</p>
        </section>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-violet-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Origine et explication</h2>
          <p className="text-lg leading-relaxed text-gray-700">{renderWithEntities(t.explication)}</p>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source={`glossaire-${t.slug}-early`} />

        <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 md:p-8 mb-8 border-2 border-violet-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.terme} en amour</h2>
          <p className="text-gray-800 leading-relaxed">{renderWithEntities(t.enAmour)}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Questions fréquentes</h2>
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
            <h2 className="font-bold text-lg mb-4 text-gray-900">🔮 Pour aller plus loin sur VoyantLove</h2>
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
            <h2 className="font-bold text-lg mb-4 text-gray-900">📖 Termes liés</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/glossaire/${r.slug}`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  &rarr; {r.emoji} {r.terme}
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
                <Link key={s.slug} href={`/glossaire/${s.slug}`} className="block text-indigo-600 hover:text-indigo-800 font-medium">
                  &rarr; {s.emoji} {s.terme}
                </Link>
              ))}
            </div>
            <Link href="/glossaire" className="inline-block mt-4 text-sm text-violet-700 hover:text-violet-900 font-semibold">
              Voir tout le glossaire &rarr;
            </Link>
          </div>
        )}

        <VoyantFinalCTA topic="methodes-voyance" source={`glossaire-${t.slug}-final`} />
      </div>
    </main>
  );
}
