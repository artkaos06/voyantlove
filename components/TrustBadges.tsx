import React from 'react';

interface TrustBadgesProps {
  variant?: 'default' | 'compact';
}

/**
 * Trust badges component to display trust signals and security indicators
 */
export default function TrustBadges({ variant = 'default' }: TrustBadgesProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          <span>Paiement sécurisé</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          <span>100% confidentiel</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600">✓</span>
          <span>Voyants vérifiés</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
        Pourquoi Nous Faire Confiance ?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Security Badge */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">🔒</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Paiement Sécurisé</h4>
          <p className="text-sm text-gray-600">SSL & cryptage 256-bit</p>
        </div>

        {/* Privacy Badge */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">🛡️</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">100% Confidentiel</h4>
          <p className="text-sm text-gray-600">RGPD conforme</p>
        </div>

        {/* Verified Badge */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">✓</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Voyants Vérifiés</h4>
          <p className="text-sm text-gray-600">Experts certifiés</p>
        </div>

        {/* Experience Badge */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">⭐</span>
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">15+ Ans</h4>
          <p className="text-sm text-gray-600">D'expérience</p>
        </div>
      </div>

      {/* Additional trust indicators */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="font-bold text-2xl text-brand-purple mb-1">287+</div>
            <div className="text-gray-600">Avis clients vérifiés</div>
          </div>
          <div>
            <div className="font-bold text-2xl text-brand-purple mb-1">65%</div>
            <div className="text-gray-600">Taux de retour clients</div>
          </div>
          <div>
            <div className="font-bold text-2xl text-brand-purple mb-1">4.8/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
        </div>
      </div>
    </div>
  );
}
