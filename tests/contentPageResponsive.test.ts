import assert from 'node:assert/strict';
import test from 'node:test';

import { getStatsGridClassName } from '../components/ContentPage';

test('ContentPage stat grids stack narrow layouts and expand responsively', () => {
  assert.equal(getStatsGridClassName(1), 'grid-cols-1');
  assert.equal(getStatsGridClassName(2), 'grid-cols-1 sm:grid-cols-2');
  assert.equal(getStatsGridClassName(3), 'grid-cols-1 sm:grid-cols-3');
  assert.equal(getStatsGridClassName(4), 'grid-cols-2 md:grid-cols-4');
});

test('ContentPage stat-grid fallback never forces four columns on mobile', () => {
  assert.equal(getStatsGridClassName(5), 'grid-cols-2 md:grid-cols-4');
  assert.doesNotMatch(getStatsGridClassName(5), /^grid-cols-4(?:\s|$)/);
});