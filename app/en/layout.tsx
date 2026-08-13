// EN site layout. Wraps all routes under app/en/* with EN-specific metadata
// and the EN header/footer.
//
// No cross-domain hreflang: lovepsychicguide.com and voyantlove.fr are
// separate brands that share a codebase, not translations of each other, so
// hreflang between them would be incorrect (see `alternates` below).
//
// Caveat: we can't override <html lang> from a nested layout, so the lang
// attribute stays "fr" from the root layout, a known minor trade-off. Google
// ranks primarily on content, not the html lang attribute.

import type { Metadata } from 'next';
import SiteHeader from '@/components/en/SiteHeader';
import SiteFooter from '@/components/en/SiteFooter';

const SITE_URL = 'https://www.lovepsychicguide.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'LovePsychicGuide, Honest reviews of love & relationship psychic services',
    template: '%s | LovePsychicGuide',
  },
  description:
    'Independent reviews of love psychic reading services. Honest pros and cons of Keen, Kasamba, and other top platforms. Reader-supported, no-fluff editorial.',
  // No hreflang: lovepsychicguide.com and voyantlove.fr are independent
  // brands that share a codebase, not language variants of the same pages,
  // so cross-domain hreflang would be incorrect. Self-referential canonical
  // only. (Every EN page also overrides `alternates` with its own canonical.)
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'LovePsychicGuide',
    title:
      'LovePsychicGuide, Honest reviews of love psychic reading services',
    description:
      'Independent reviews of love psychic reading services. Honest pros and cons of Keen, Kasamba, and others.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LovePsychicGuide, Love psychic reading reviews',
    description:
      'Independent reviews of love psychic reading services. Honest pros and cons.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
