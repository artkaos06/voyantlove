'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GoRedirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get('ref') || 'email-cta';
    window.location.href = `/consulter?ref=${encodeURIComponent(ref)}`;
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">🔮</div>
        <p className="text-lg text-gray-700 font-medium">Recherche des voyants disponibles...</p>
        <p className="text-sm text-gray-500 mt-2">Vous allez être redirigé dans quelques secondes</p>
      </div>
    </main>
  );
}

export default function GoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><p>Chargement...</p></div>}>
      <GoRedirect />
    </Suspense>
  );
}
