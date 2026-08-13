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
import EEATSignal from '@/components/EEATSignal';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import AskAI from '@/components/AskAI';

type EEATColor = NonNullable<React.ComponentProps<typeof EEATSignal>['colorScheme']>;
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
  eeat: { colorScheme: EEATColor; method: string };
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
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

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

      <header className={`bg-gradient-to-r ${config.header.gradient} text-white py-16 px-4`}>
        <div className="max-w-4xl mx-auto">
          <Link href={config.header.backLink.href} className="text-white/80 hover:text-white mb-4 inline-block">
            ← {config.header.backLink.label}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{config.header.emoji} {config.header.h1}</h1>
          <p className="text-xl opacity-95 mb-6">{config.header.subtitle}</p>
          {config.header.anchors && config.header.anchors.length > 0 && (
            <div className="flex gap-4 flex-wrap">
              {config.header.anchors.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className={
                    a.primary
                      ? 'bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition'
                      : 'border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition'
                  }
                >
                  {a.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {config.stats && config.stats.length > 0 && (
          <div className={`bg-white rounded-xl shadow-md p-6 mb-8 grid ${GRID_COLS[config.stats.length] ?? 'grid-cols-4'} gap-4 text-center`}>
            {config.stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className={`text-2xl font-bold ${accent}`}>{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <EEATSignal colorScheme={config.eeat.colorScheme} method={config.eeat.method} />

        {children}

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">❓ Questions Fréquentes</h2>
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
            <h3 className="font-bold text-lg mb-4">📚 Articles Connexes</h3>
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
