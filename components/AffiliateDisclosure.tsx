// Divulgation d'affiliation, obligation de transparence (DGCCRF / bonnes
// pratiques). VoyantLove renvoie vers des services de voyance partenaires via
// des liens rémunérés (rel="sponsored"). Ce composant affiche la divulgation
// standard, en bannière (haut de page) ou en ligne (pied de page / fin
// d'article). Équivalent EN : components/en/AffiliateDisclosure.tsx.
//
// Formulation à faire valider par le client / un conseil juridique avant
// mise en production.

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'inline';
  className?: string;
}

export default function AffiliateDisclosure({
  variant = 'banner',
  className = '',
}: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <p className={`text-xs text-gray-500 ${className}`}>
        Divulgation : VoyantLove est un service indépendant financé par ses
        partenaires. Lorsque vous contactez un voyant via nos liens, nous
        pouvons percevoir une commission, sans surcoût pour vous, cela
        n&apos;influence pas nos contenus. Service de divertissement, qui ne se
        substitue pas à un avis médical, psychologique ou juridique.
      </p>
    );
  }

  return (
    <div
      className={`bg-amber-50 border-l-4 border-amber-400 text-amber-900 p-4 rounded-r-md text-sm ${className}`}
      role="note"
      aria-label="Divulgation d'affiliation"
    >
      <p className="font-semibold mb-1">Divulgation d&apos;affiliation</p>
      <p>
        VoyantLove est financé par ses lecteurs. Lorsque vous prenez contact
        avec un voyant partenaire via l&apos;un de nos liens, nous pouvons
        percevoir une commission, sans aucun coût supplémentaire pour vous.
        Cette rémunération n&apos;influence pas nos guidances ni nos
        recommandations. <em>Service de divertissement ; une consultation de
        voyance ne remplace pas un avis médical, psychologique ou juridique
        qualifié.</em>
      </p>
    </div>
  );
}
