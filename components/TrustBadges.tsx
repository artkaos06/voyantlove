import React from 'react';
import Icon, { type IconName } from '@/components/Icon';

interface TrustBadgesProps {
  variant?: 'default' | 'compact';
}

/**
 * Trust signals.
 *
 * Rewritten during the visual pass. Two things went out with the emoji:
 *
 *   - the invented statistics. This block asserted "287+ avis clients
 *     vérifiés", "65% taux de retour clients", "4,8/5" and "15+ ans"
 *     — none of which come from anywhere. The site has REAL numbers in the
 *     partner feed (a voyant with 2 697 reviews and 2 112 consultations is on
 *     the page a screen above), so unverifiable round figures were both a
 *     credibility risk and worse than the truth.
 *   - the emoji-in-a-pastel-circle motif, which is the single most
 *     template-looking pattern on the page.
 *
 * What is left are statements about how the service works, which are true by
 * construction and need no number to back them.
 */

const BADGES: { icon: IconName; title: string; detail: string }[] = [
  { icon: 'lock', title: 'Paiement sécurisé', detail: 'Connexion chiffrée' },
  { icon: 'shield', title: '100 % confidentiel', detail: 'Conforme au RGPD' },
  { icon: 'check', title: 'Tarif affiché', detail: 'En euros, avant l’appel' },
  { icon: 'sparkle', title: 'Sans inscription', detail: 'Aucun compte à créer' },
];

export default function TrustBadges({ variant = 'default' }: TrustBadgesProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
        {BADGES.slice(0, 3).map((b) => (
          <span key={b.title} className="flex items-center gap-1.5">
            <Icon name="check" size={15} className="opacity-70" />
            <span>{b.title}</span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
      <div className="grid grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-4">
        {BADGES.map((b) => (
          <div key={b.title} className="flex items-start gap-2.5">
            <Icon name={b.icon} size={19} className="mt-0.5 text-purple-700" />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900">{b.title}</div>
              <div className="text-xs leading-snug text-gray-600">{b.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
