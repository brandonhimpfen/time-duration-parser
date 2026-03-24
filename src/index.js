const UNIT_TO_MS = {
  ms: 1,
  s: 1000,
  sec: 1000,
  secs: 1000,
  second: 1000,
  seconds: 1000,
  m: 60 * 1000,
  min: 60 * 1000,
  mins: 60 * 1000,
  minute: 60 * 1000,
  minutes: 60 * 1000,
  h: 60 * 60 * 1000,
  hr: 60 * 60 * 1000,
  hrs: 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
  w: 7 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  weeks: 7 * 24 * 60 * 60 * 1000
};

export function parseDuration(input) {
  if (typeof input === 'number' && Number.isFinite(input)) {
    return input;
  }

  if (typeof input !== 'string') {
    throw new TypeError('Duration must be a string or finite number.');
  }

  const normalized = input.trim().toLowerCase();
  const match = normalized.match(/^([+-]?\d*\.?\d+)\s*([a-z]+)$/);

  if (!match) {
    throw new Error(`Invalid duration: ${input}`);
  }

  const [, valueText, unitText] = match;
  const value = Number(valueText);
  const multiplier = UNIT_TO_MS[unitText];

  if (!Number.isFinite(value) || !multiplier) {
    throw new Error(`Unsupported duration unit: ${unitText}`);
  }

  return value * multiplier;
}

export function isDuration(value) {
  try {
    parseDuration(value);
    return true;
  } catch {
    return false;
  }
}

export const units = Object.freeze({ ...UNIT_TO_MS });

export default parseDuration;
