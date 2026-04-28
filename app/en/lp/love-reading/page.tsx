import type { Metadata } from 'next';
import LoveReadingClient from './LoveReadingClient';

// Draft EN landing page — used to end-to-end test the BargesTech postback
// flow before committing to a real EN domain. Keep out of search.
export const metadata: Metadata = {
  title: 'Get a Love Reading from a Trusted Psychic',
  description:
    'Connect with a trusted love & relationship psychic advisor in minutes.',
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      <LoveReadingClient />
    </main>
  );
}
