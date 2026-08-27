// Cookie-bar visibility, published by components/CookieConsent.tsx and read by
// components/FloatingConsultCTA.tsx.
//
// Why this exists: the floating CTA has to stay hidden while the cookie bar is
// up, because #cc-main renders at z-index 2147483647 (vanilla-cookieconsent's
// max) and a bottom-fixed CTA underneath it is invisible and unclickable.
//
// It used to learn that by running a MutationObserver on
// document.documentElement with subtree + childList + attributes, whose
// callback did a querySelector plus an offsetHeight read — a forced layout —
// on EVERY DOM mutation anywhere on the site, for the whole session, to
// maintain one boolean. vanilla-cookieconsent already publishes that boolean
// through its onModalShow / onModalHide callbacks. This module just carries it
// from the component that has them to the component that needs it.
//
// A module-level store rather than React context: the publisher and the
// subscriber are siblings in the root layout with no shared ancestor below
// <body>, and the value has to survive the publisher's async import of
// vanilla-cookieconsent.

type Listener = (open: boolean) => void;

let barOpen = false;
const listeners = new Set<Listener>();

/** Current visibility, for a subscriber mounting after the bar already showed. */
export function isCookieBarOpen(): boolean {
  return barOpen;
}

/** Publish a change. No-op when the value is unchanged, so listeners are quiet. */
export function setCookieBarOpen(next: boolean): void {
  if (next === barOpen) return;
  barOpen = next;
  for (const listener of listeners) listener(next);
}

/** Subscribe to changes. Returns the unsubscribe function. */
export function subscribeCookieBar(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Test seam: drop all state between cases. */
export function resetCookieBarForTests(): void {
  barOpen = false;
  listeners.clear();
}
