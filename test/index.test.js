import test from 'node:test';
import assert from 'node:assert/strict';
import parseDuration, { isDuration, units } from '../src/index.js';

test('parses milliseconds', () => {
  assert.equal(parseDuration('500ms'), 500);
});

test('parses minutes', () => {
  assert.equal(parseDuration('5m'), 300000);
});

test('parses hours', () => {
  assert.equal(parseDuration('2h'), 7200000);
});

test('parses days', () => {
  assert.equal(parseDuration('1d'), 86400000);
});

test('parses decimals and spaces', () => {
  assert.equal(parseDuration('1.5 h'), 5400000);
});

test('returns finite numbers unchanged', () => {
  assert.equal(parseDuration(1200), 1200);
});

test('validates duration strings', () => {
  assert.equal(isDuration('10min'), true);
  assert.equal(isDuration('banana'), false);
});

test('exposes unit map', () => {
  assert.equal(units.hour, 3600000);
  assert.equal(units.days, 86400000);
});

test('throws on invalid values', () => {
  assert.throws(() => parseDuration('abc'), /Invalid duration/);
  assert.throws(() => parseDuration('5months'), /Unsupported duration unit/);
});
