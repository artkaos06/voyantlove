// Shared shell for the hand-authored content pages (reconquete/, rupture/,
// sentiments/, crise-couple/, nouvelle-rencontre/, methodes-voyance/,
// voyance-gratuite-amour/). Every one of those ~99 pages repeated the same
// ~150 lines of scaffolding (4 JSON-LD blocks, header, stats grid, EEAT band,
// FAQ authored twice, related links, final CTA). This component owns all of
// it, driven by a single `config`; the page passes only its unique body as
// `children`.
//
// Wins: the FAQ is now single-sourced (schema + visible render from the same
// array), AskAI ships on every page for free, and cross-cutting changes are a
// one-file edit here instead of 99.

import Link from 'next/link';
import type { Metadata } from 'next';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import VoyantRailSection from '@/components/VoyantRailSection';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import AskAI from '@/components/AskAI';

// Was derived from the removed EEATSignal component. The union is inlined so
// the 85 existing page configs keep typechecking unchanged.
type EEATColor =
  | 'purple' | 'blue' | 'green' | 'pink' | 'orange' | 'red' | 'rose' | 'teal' | 'cyan';
type CTATopic = React.ComponentProps<typeof VoyantFinalCTA>['topic'];

export interface ContentFAQ {
  q: string;
  a: string;
}

export interface ContentPageConfig {
  title: string;
  description: string;
  url: string; // canonical, with trailing slash
  keywords: string[];
  datePublished: string;
  dateModified: string;
  breadcrumb: { name: string; url: string }[];
  /**
   * Render the commercial voyant rails immediately under the title banner,
   * above the stats grid, the E-E-A-T band and the article body.
   *
   * Opt-in: this shell backs 85 pages and only the commercial ones (the
   * /methodes-voyance/, /voyance-amour/, /voyance-gratuite-amour/ hubs and the
   * "Voyance & Tarot" menu) put the offer first. On a guidance page under
   * /reconquete/ the reader came for the answer, not the price list.
   *
   * The value is the tracking source prefix for the rails' affiliate links.
   */
  railsTop?: string;
  header: {
    emoji: string;
    h1: string;
    subtitle: string;
    gradient: string; // tailwind gradient classes, e.g. "from-blue-600 via-indigo-600 to-purple-600"
    backLink: { href: string; label: string };
    anchors?: { href: string; label: string; primary?: boolean }[];
  };
  accentText?: string; // color class for stat values, e.g. "text-blue-600"
  stats?: { icon: string; value: string; label: string }[];
  /**
   * No longer rendered. The "Source : … • Méthode : …" band was removed as
   * carrying no reader, SEO or trust value. Kept optional so the 85 existing
   * page configs still typecheck without touching every one of them; drop the
   * key from configs as they are next edited.
   */
  eeat?: { colorScheme: EEATColor; method: string };
  cta: { topic: CTATopic; slug: string };
  faq: ContentFAQ[];
  related?: { href: string; label: string }[];
}

// Build the page's `export const metadata` from the same config.
export function contentMeta(c: ContentPageConfig): Metadata {
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: c.url },
    openGraph: {
      type: 'article',
      title: c.title,
      description: c.description,
      url: c.url,
      siteName: 'VoyantLove',
      locale: 'fr_FR',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: ['/og-image.png'],
    },
  };
}

// Tailwind can't see interpolated class names, so map the fixed set we use.
const GRID_COLS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
};

export function getStatsGridClassName(count: number): string {
  return GRID_COLS[count] ?? 'grid-cols-2 md:grid-cols-4';
}

export default function ContentPage({
  config,
  children,
}: {
  config: ContentPageConfig;
  children: React.ReactNode;
}) {
  const schemas = [
    getArticleSchema({
      title: config.title,
      description: config.description,
      url: config.url,
      datePublished: config.datePublished,
      dateModified: config.dateModified,
      keywords: config.keywords,
    }),
    getFAQSchema(config.faq.map((f) => ({ question: f.q, answer: f.a }))),
    getBreadcrumbSchema(config.breadcrumb),
    getAuthorSchema(),
  ];
  const accent = config.accentText ?? 'text-purple-600';

  return (
    <main className="min-h-screen bg-gray-50">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <header className="border-b border-gray-200 bg-white px-4 pb-7 pt-8 sm:pt-12">
        <div className="max-w-4xl mx-auto">
          <Link href={config.header.backLink.href} className="mb-3 inline-block text-sm text-purple-700 hover:text-purple-900 hover:underline">
            ← {config.header.backLink.label}
          </Link>
          {/* config.header.emoji is deliberately not rendered. 119 page configs
              still carry the field; leaving it unused retires every one of them
              at once instead of editing 119 files. */}
          <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl">{config.header.h1}</h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-gray-600">{config.header.subtitle}</p>
          {config.header.anchors && config.header.anchors.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {config.header.anchors.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  // Was white-on-gradient. The banner is white now, so a white
                  // button and a white border were both invisible.
                  className={
                    a.primary
                      ? 'rounded-lg bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800'
                      : 'rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-purple-400 hover:text-purple-700'
                  }
                >
                  {a.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Voyants d'abord : sur une page commerciale, le visiteur doit voir
          l'offre sans scroller. Le bloc passe AVANT la grille de stats, la
          bande E-E-A-T et le corps de l'article. */}
      {config.railsTop && (
        <section className="border-b border-gray-200 bg-white px-4 py-6">
          <div className="mx-auto max-w-6xl">
            <VoyantRailSection source={config.railsTop} bare />
          </div>
        </section>
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">
        {config.stats && config.stats.length > 0 && (
          <div className={`bg-white rounded-xl shadow-md p-5 sm:p-6 mb-8 grid ${getStatsGridClassName(config.stats.length)} gap-x-4 gap-y-6 text-center`}>
            {config.stats.map((s, i) => (
              <div key={i} className="min-w-0">
                {/* s.icon held 311 emoji across the site. The number and its
                    label carry the meaning; the emoji above them never did. */}
                <div className={`text-xl sm:text-2xl leading-tight font-bold break-words ${accent}`}>{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        )}


        {children}

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes</h2>
          <div className="space-y-6">
            {config.faq.map((f, i) => (
              <div key={i} className={i < config.faq.length - 1 ? 'border-b pb-6' : ''}>
                <h3 className="text-xl font-bold mb-3">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {config.related && config.related.length > 0 && (
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">Articles Connexes</h3>
            <div className="space-y-2">
              {config.related.map((r) => (
                <Link key={r.href} href={r.href} className="block text-blue-600 hover:text-blue-800 font-medium">
                  → {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <AskAI title={config.title} url={config.url} context={config.description} />
        </div>

        <VoyantFinalCTA topic={config.cta.topic} source={`${config.cta.slug}-final`} />
      </div>
    </main>
  );
}
