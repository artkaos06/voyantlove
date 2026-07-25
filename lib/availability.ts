// Time-aware availability copy for the MGID angle landers.
//
// Why this exists: the landers shipped with hardcoded "Seulement 3 places ce
// soir après 21h". A visitor arriving at 9am reads a line about tonight,
// which reads as boilerplate and kills the urgency it was meant to create.
// Worse, the pages advertise hours of 8h–2h while the badge claimed
// "Voyants disponibles maintenant" around the clock — at 4am that is a false
// availability claim AND the tap produces a call that cannot connect, so it
// burns a paid click and the visitor's trust at once.
//
// Resolved server-side. The landers read searchParams so they already render
// dynamically per request, which means Date() here is the real request time,
// not a build-time constant. No JS reaches the browser.

/** Service hours stated on the landers: 7j/7, 08:00 → 02:00 (Paris). */
const OPEN_HOUR = 8;
const CLOSE_HOUR = 2; // exclusive, next day

export interface Availability {
  open: boolean;
  /** Pill at the top of the page. */
  badge: string;
  /** Urgency line — scarcity while open, reopening time while closed. */
  scarcity: string;
  /** Social-proof counter, scaled so it is plausible for the hour. */
  callsToday: string;
  /** Sub-label under the phone button. */
  ctaSub: string;
  /** Two-line label in the sticky bar. Kept in sync with `scarcity` so the
   *  page never shows two different availability counts at once. */
  stickyInfo: string;
}

/** Current hour (0–23) in Europe/Paris, DST-correct. */
export function parisHour(now: Date = new Date()): number {
  const s = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    hourCycle: 'h23',
  }).format(now);
  return Number(s);
}

export function availabilityNow(now: Date = new Date()): Availability {
  const h = parisHour(now);
  const open = h >= OPEN_HOUR || h < CLOSE_HOUR;

  if (!open) {
    // 02:00–08:00. Be honest rather than manufacture urgency: the line is
    // shut, and promising otherwise produces a dead call.
    return {
      open: false,
      badge: 'Ligne ouverte à partir de 8h',
      scarcity: `⏱️ Nos voyants reprennent les appels à ${OPEN_HOUR}h`,
      callsToday: '👥 Plus de 200 appels chaque jour',
      ctaSub: 'Appelez dès 8h — 10 min offertes',
      stickyInfo: 'Ligne ouverte\ndès 8h',
    };
  }

  // Hours elapsed since opening, treating 00h/01h as 24h/25h so the ramp is
  // monotonic across midnight.
  const elapsed = (h < CLOSE_HOUR ? h + 24 : h) - OPEN_HOUR; // 0…17
  const calls = 18 + elapsed * 13; // ~18 at 08h → ~239 at 01h

  // Slot scarcity tightens as the day fills up — reads as real inventory
  // rather than a constant "3 places" that never moves.
  const slots = elapsed < 6 ? 5 : elapsed < 11 ? 4 : 3;

  const partOfDay =
    h >= 8 && h < 12
      ? 'ce matin'
      : h >= 12 && h < 18
        ? 'cet après-midi'
        : h >= 18 && h < 23
          ? 'ce soir'
          : 'cette nuit';

  return {
    open: true,
    badge: 'Voyants disponibles maintenant',
    scarcity: `⏱️ Seulement ${slots} consultations disponibles ${partOfDay}`,
    callsToday: `👥 ${calls} appels aujourd'hui`,
    ctaSub: 'Appeler maintenant — 10 min offertes',
    stickyInfo: `${slots} voyants\ndisponibles`,
  };
}
