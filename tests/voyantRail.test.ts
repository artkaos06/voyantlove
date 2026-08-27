import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

import { ONLINE_RAIL_MIN, getOnlineVoyants, resolveOnlineRail } from '../lib/voyants';

// A rail headed "Voyants disponibles maintenant" used to apply no availability
// filter at all, so it showed voyants with ETAT '0' — whose own card button
// reads "Rendez-vous". The heading and the cards under it contradicted each
// other on screen. resolveOnlineRail is the rule that keeps them honest, kept
// pure so it can be checked without a browser.

const TITLE = 'Voyants disponibles maintenant';
const FALLBACK = 'Nos voyants amour';

function roster(online: number, offline: number) {
  return [
    ...Array.from({ length: online }, (_, i) => ({ ID: `on-${i}`, ETAT: '1' })),
    ...Array.from({ length: offline }, (_, i) => ({ ID: `off-${i}`, ETAT: '0' })),
  ];
}

const opts = { loading: false, title: TITLE, fallbackTitle: FALLBACK };

test('getOnlineVoyants keeps only ETAT === "1"', () => {
  assert.deepEqual(
    getOnlineVoyants(roster(2, 3)).map((v) => v.ID),
    ['on-0', 'on-1'],
  );
});

test('with enough online, the rail shows only them and keeps the claim', () => {
  const r = resolveOnlineRail(roster(9, 12), opts);
  assert.equal(r.title, TITLE);
  assert.equal(r.filteredToOnline, true);
  assert.equal(r.voyants.length, 9);
  assert.ok(r.voyants.every((v) => v.ETAT === '1'), 'no offline voyant under an availability heading');
});

test('exactly at the floor still counts as available', () => {
  const r = resolveOnlineRail(roster(ONLINE_RAIL_MIN, 20), opts);
  assert.equal(r.title, TITLE);
  assert.equal(r.voyants.length, ONLINE_RAIL_MIN);
});

test('below the floor it drops the claim AND shows the full roster', () => {
  const all = roster(ONLINE_RAIL_MIN - 1, 20);
  const r = resolveOnlineRail(all, opts);
  // Both halves matter: keeping the heading while quietly showing everyone is
  // the original bug, and showing three cards under an honest heading is a
  // worse commercial page than showing the roster.
  assert.equal(r.title, FALLBACK);
  assert.equal(r.filteredToOnline, false);
  assert.equal(r.voyants.length, all.length);
});

test('nobody online falls back rather than rendering an empty rail', () => {
  const r = resolveOnlineRail(roster(0, 30), opts);
  assert.equal(r.title, FALLBACK);
  assert.equal(r.voyants.length, 30);
});

test('an empty feed claims nothing', () => {
  const r = resolveOnlineRail([], opts);
  assert.equal(r.title, FALLBACK);
  assert.deepEqual(r.voyants, []);
});

test('while loading the heading does not flip (the rail is a skeleton anyway)', () => {
  const r = resolveOnlineRail(roster(0, 30), { ...opts, loading: true });
  assert.equal(r.title, TITLE);
  assert.deepEqual(r.voyants, [], 'nothing is shown before the feed arrives');
});

test('every rail claiming availability passes onlineOnly + a fallback title', () => {
  // Source-level: the rule is only honest if the callers opt in. Three places
  // render that heading (homepage, VoyantRailSection, VoyantRecommendations).
  const callers = [
    '../app/page.tsx',
    '../components/VoyantRailSection.tsx',
    '../components/VoyantRecommendations.tsx',
  ];
  for (const rel of callers) {
    const src = readFileSync(new URL(rel, import.meta.url), 'utf8');
    const claims = src.split(`title="${TITLE}"`).length - 1;
    assert.equal(claims, 1, `${rel} should render the availability rail exactly once`);
    const after = src.slice(src.indexOf(`title="${TITLE}"`), src.indexOf(`title="${TITLE}"`) + 400);
    assert.match(after, /onlineOnly/, `${rel} must filter that rail to online voyants`);
    assert.match(after, new RegExp(`fallbackTitle="${FALLBACK}"`), `${rel} must carry the honest fallback heading`);
  }
});
