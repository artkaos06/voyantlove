// Télémaque consumer offer terms — single source of truth for all three MGID
// angle landers, so the price cannot drift between them.
//
// Terms supplied by the user 2026-07-25:
//   15€ les 10 min · minute supplémentaire 4,50€–9,50€ · forfaits 140€–1300€
//   règlement CB, mandat cash, chèque ou virement.
//
// NOTE — this replaced the Goracash offer (10 min free, then 3€/min). The two
// are structurally different products, not a price tweak: Goracash's payout
// depended on a psychic converting a free caller into a paying one (the step
// that produced 0 transactions from 2 inscriptions, see ADS-POST-MORTEM.md
// "Class C"). Télémaque has no free step — the client pays 15€ by CB to
// start, so RevShare accrues from the first euro. Any copy implying free
// minutes is now false and must not come back.
//
// The full range is shown rather than "à partir de 4,50€": understating the
// top of the scale is the bait-and-switch the campaign audit flagged, and the
// user chose upfront price transparency.

export const OFFER = {
  /** Headline price for the entry consultation. */
  intro: '15€ les 10 premières minutes',
  /** Per-minute reframing — the intro is genuinely the cheapest rate on offer.
   *  Kept terse ("soit 1,50€/min", not "soit seulement 1,50€ la minute") so the
   *  slim price line fits on one row on a 375px screen. */
  introPerMin: 'soit 1,50€/min',
  /** Honest disclosure of what happens after the intro block. */
  after: 'Puis de 4,50€ à 9,50€/min selon le voyant choisi',
  /** Payment reassurance. CB is the dominant method; others exist. */
  payment: 'Paiement sécurisé par CB',
} as const;

// There is deliberately no short "10 min pour 15€" string for the CTA button
// any more. Price on the button triggers the cost objection at the exact
// moment the visitor is deciding to tap; it now sits in the pricing block
// immediately below, which keeps the price upfront without loading the tap
// target with it.
