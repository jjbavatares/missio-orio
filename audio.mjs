export class MissionAudio {
  constructor() { this.enabled = true; this.context = null; this.sources = []; }
  async unlock() {
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      this.context ??= new Audio();
      await this.context.resume();
    } catch { /* El joc continua encara que el navegador no permeti reproduir so. */ }
  }
  stop() {
    for (const source of this.sources) { try { source.stop(); } catch {} }
    this.sources = [];
  }
  toggle() { this.enabled = !this.enabled; if (!this.enabled) this.stop(); return this.enabled; }
  tone(freq, at, duration, type = 'triangle', volume = 0.12) {
    if (!this.enabled || !this.context) return;
    const c = this.context, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, at);
    g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(volume, at + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, at + duration);
    o.connect(g).connect(c.destination); o.start(at); o.stop(at + duration + 0.03);
    this.sources.push(o);
  }
  success(final = false) {
    if (!this.context) return;
    this.stop();
    const t = this.context.currentTime;
    const notes = final ? [523,659,784,1047,784,1047,1319] : [523,659,784,1047];
    notes.forEach((f,i) => this.tone(f,t + i*0.15,i === notes.length-1 ? 0.65 : 0.25));
  }
  error() {
    if (!this.context) return;
    this.stop(); const t=this.context.currentTime;
    this.tone(220,t,0.16,'sawtooth',0.07); this.tone(147,t+0.15,0.3,'sawtooth',0.07);
  }
  noise(duration, volume, lowpass = 900) {
    if (!this.enabled || !this.context) return;
    const c=this.context, buffer=c.createBuffer(1,Math.ceil(c.sampleRate*duration),c.sampleRate), data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1);
    const src=c.createBufferSource(), filter=c.createBiquadFilter(), gain=c.createGain();
    src.buffer=buffer; filter.type='lowpass'; filter.frequency.value=lowpass;
    gain.gain.setValueAtTime(volume,c.currentTime); gain.gain.exponentialRampToValueAtTime(0.001,c.currentTime+duration);
    src.connect(filter).connect(gain).connect(c.destination); src.start(); this.sources.push(src);
  }
  engine() { this.noise(5,0.3,700); }
  explosion() {
    if (!this.context) return;
    this.stop(); this.noise(2.8,0.65,1800);
    this.tone(65,this.context.currentTime,1.8,'sawtooth',0.22);
  }
}
