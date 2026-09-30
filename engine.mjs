export const DURATION_MS = 45 * 60 * 1000;
export const REQUIRED_SUCCESSES = 8;

export function parseNatural(value) {
  const text = String(value).trim();
  if (!/^(?:\d+|\d{1,3}(?:\.\d{3})+|\d{1,3}(?:[ \u00a0\u202f]\d{3})+)$/.test(text)) return null;
  const number = Number(text.replace(/[. \u00a0\u202f]/g, ''));
  return Number.isSafeInteger(number) && number >= 0 ? number : null;
}

export class Mission {
  constructor(trials, now = () => Date.now()) {
    this.trials = trials;
    this.now = now;
    this.stage = 'home';
    this.index = 0;
    this.attempts = 0;
    this.outcomes = [];
    this.deadline = null;
    this.reason = null;
  }
  story() { if (this.stage === 'home') this.stage = 'story'; }
  start() {
    if (this.stage !== 'story') return;
    this.stage = 'trial';
    this.deadline = this.now() + DURATION_MS;
  }
  get remainingMs() { return this.deadline === null ? DURATION_MS : Math.max(0, this.deadline - this.now()); }
  get correct() { return this.outcomes.filter(Boolean).length; }
  get failed() { return this.outcomes.length - this.correct; }
  get trial() { return this.trials[this.index]; }
  get playing() { return ['trial', 'victory', 'solution'].includes(this.stage); }
  tick() {
    if (this.playing && this.remainingMs <= 0) {
      this.stage = 'ending';
      this.reason = 'timeout';
      return true;
    }
    return false;
  }
  submit(values) {
    if (this.tick()) return 'timeout';
    if (this.stage !== 'trial') return 'ignored';
    const numbers = values.map(parseNatural);
    if (numbers.length !== this.trial.answers.length || numbers.some(n => n === null)) return 'invalid';
    if (numbers.every((n, i) => n === this.trial.answers[i])) {
      this.outcomes.push(true);
      this.stage = 'victory';
      return 'correct';
    }
    this.attempts += 1;
    if (this.attempts >= 3) {
      this.outcomes.push(false);
      this.stage = 'solution';
      return 'solution';
    }
    return 'hint';
  }
  next() {
    if (this.tick()) return;
    if (!['victory', 'solution'].includes(this.stage)) return;
    if (this.index === this.trials.length - 1) {
      this.stage = 'ending';
      this.reason = this.correct >= REQUIRED_SUCCESSES ? 'success' : 'score';
    } else {
      this.index += 1;
      this.attempts = 0;
      this.stage = 'trial';
    }
  }
}
