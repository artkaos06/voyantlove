// Zero-JS objection handling + email fallback for the MGID angle landers.
//
// Both components below work with JavaScript disabled, which is the whole
// architectural constraint of these landers: MGID's biggest FR sources are
// Xiaomi/Huawei in-app browsers, and the previous React funnel lost 91.6% of
// users there. So the FAQ is <details>/<summary> (native disclosure widget,
// no script) and the form is a native POST (no fetch, no onSubmit).
//
// Styling is inline rather than class-based because each host lander owns its
// own CSS namespace (vd- / vq- / vs-) and these drop into all three.

import { OFFER } from '@/lib/offer';

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: 'Combien coûte réellement la consultation ?',
    a: `${OFFER.intro} (${OFFER.introPerMin}), puis de 4,50€ à 9,50€ la minute selon le voyant que vous choisissez. Le tarif applicable vous est communiqué avant la mise en relation, et vous décidez de la durée.`,
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Le règlement se fait par carte bancaire de façon sécurisée, ou par mandat cash, chèque ou virement. Aucun prélèvement n’est effectué sans votre accord explicite.',
  },
  {
    q: 'Puis-je arrêter la consultation quand je veux ?',
    a: 'Oui. Vous raccrochez à tout moment et la facturation s’arrête. Vous gardez le contrôle total de la durée et du budget de votre consultation.',
  },
  {
    q: 'Est-ce vraiment confidentiel ?',
    a: 'Oui. Votre échange avec le voyant n’est pas enregistré et votre identité n’est pas communiquée à des tiers. Le service respecte le RGPD.',
  },
  {
    q: 'Qui sont les voyants ?',
    a: 'Un réseau de praticiens partenaires expérimentés en voyance sentimentale. Le voyant qui vous répond dépend des disponibilités du moment, nous ne promettons pas un praticien en particulier.',
  },
  {
    q: 'Un voyant peut-il me garantir un résultat ?',
    a: 'Non, et méfiez-vous de quiconque le promet. La voyance est un accompagnement et un divertissement : elle éclaire une situation, elle ne garantit ni le retour d’une personne ni un événement à une date précise. Elle ne remplace aucun avis médical, juridique ou financier.',
  },
];

export function LanderFaq() {
  return (
    <section style={{ margin: '26px 0 8px' }}>
      <h2
        style={{
          fontSize: '15px',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '12px',
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        Questions fréquentes
      </h2>
      {FAQ.map((f) => (
        <details
          key={f.q}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '11px 14px',
            marginBottom: '8px',
          }}
        >
          <summary
            style={{
              cursor: 'pointer',
              fontSize: '13.5px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.92)',
              listStyle: 'none',
            }}
          >
            {f.q}
          </summary>
          <p
            style={{
              fontSize: '12.5px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.55,
              marginTop: '8px',
            }}
          >
            {f.a}
          </p>
        </details>
      ))}
    </section>
  );
}

const field: React.CSSProperties = {
  width: '100%',
  padding: '13px 14px',
  borderRadius: '10px',
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  fontSize: '15px',
  marginBottom: '8px',
  minHeight: '48px',
};

/**
 * Secondary email capture. NOT a gate, the phone CTA stays primary and
 * untouched above this. The old funnel put an email wall *between* the quiz
 * and the payoff and lost 76.7% of everyone who reached it; this only
 * catches people who were leaving anyway.
 */
export function LanderEmailForm({
  lander,
  source,
  sid,
  clickId,
  done,
}: {
  lander: string;
  source: string;
  sid: string;
  clickId?: string;
  done?: 'ok' | 'err';
}) {
  if (done === 'ok') {
    return (
      <div
        style={{
          margin: '22px 0 8px',
          padding: '16px',
          borderRadius: '12px',
          background: 'rgba(74,222,128,0.12)',
          border: '1px solid rgba(74,222,128,0.4)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '15px', fontWeight: 800, color: '#4ade80', marginBottom: '4px' }}>
          ✓ C&apos;est noté !
        </div>
        <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
          Vous recevrez votre guidance par email. Pour une réponse immédiate,
          le téléphone reste le plus rapide.
        </p>
      </div>
    );
  }

  return (
    <section style={{ margin: '22px 0 8px' }}>
      <p
        style={{
          fontSize: '13px',
          fontWeight: 700,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.82)',
          marginBottom: '3px',
        }}
      >
        Pas prêt(e) à appeler maintenant ?
      </p>
      <p
        style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.55)',
          textAlign: 'center',
          marginBottom: '12px',
          lineHeight: 1.45,
        }}
      >
        Recevez une guidance écrite par email, sans engagement.
      </p>

      {done === 'err' && (
        <p style={{ fontSize: '12.5px', color: '#ff9ec0', textAlign: 'center', marginBottom: '8px' }}>
          Vérifiez votre email et cochez la case pour continuer.
        </p>
      )}

      {/* Native POST: no fetch, no onSubmit, works with JS disabled. */}
      <form action="/api/lead/lander" method="POST">
        <input type="hidden" name="lander" value={lander} />
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="sid" value={sid} />
        {/* Round-trips so the redirect can restore attribution, see backTo() */}
        <input type="hidden" name="click_id" value={clickId || ''} />
        {/* Honeypot, hidden from humans, irresistible to bots. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
        />

        <input
          name="prenom"
          placeholder="Votre prénom"
          autoComplete="given-name"
          autoCapitalize="words"
          enterKeyHint="next"
          style={field}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Votre email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          enterKeyHint="send"
          style={field}
        />
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            fontSize: '11.5px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.4,
            margin: '4px 0 10px',
          }}
        >
          <input type="checkbox" name="consent" required style={{ marginTop: '2px' }} />
          <span>
            J&apos;accepte de recevoir ma guidance et des conseils de voyance par
            email. Désinscription possible à tout moment.
          </span>
        </label>
        <button
          type="submit"
          style={{
            width: '100%',
            minHeight: '52px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.25)',
            background: 'rgba(255,255,255,0.1)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '14.5px',
            cursor: 'pointer',
            touchAction: 'manipulation',
          }}
        >
          Recevoir ma guidance →
        </button>
      </form>
    </section>
  );
}
