// Procedural Ambient Tanpura & Temple Bell Soundscape via Web Audio API

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNodes: GainNode[] = [];
  private lfo: OscillatorNode | null = null;
  private isRunning: boolean = false;
  private currentVolume: number = 0.4;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx) return;
    if (this.isRunning) return;

    this.stop(); // clear any previous

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(this.currentVolume, now + 3);
    this.masterGain.connect(this.ctx.destination);

    // Tanpura frequencies (Tuning to D: Sa, Pa, Sa high)
    // D3 ~ 146.83 Hz, A3 ~ 220.00 Hz, D4 ~ 293.66 Hz, F#3 ~ 185.00 Hz (Shuddha Gandhar)
    const pitches = [
      { freq: 146.83, type: 'sawtooth' as OscillatorType, gain: 0.14, detune: -4 },
      { freq: 220.00, type: 'sine' as OscillatorType, gain: 0.16, detune: 2 },
      { freq: 293.66, type: 'triangle' as OscillatorType, gain: 0.12, detune: 5 },
      { freq: 73.42,  type: 'sine' as OscillatorType, gain: 0.22, detune: 0 }, // Deep sub bass drone
      { freq: 185.00, type: 'sine' as OscillatorType, gain: 0.08, detune: 3 }
    ];

    // Filter to warm the sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(480, now);
    filter.Q.setValueAtTime(2.5, now);
    filter.connect(this.masterGain);

    // LFO for subtle breathing movement
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.18, now); // slow breathing cycle ~ 5.5s
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(120, now);
    this.lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    this.lfo.start();

    // Create drone oscillators
    pitches.forEach((p, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = p.type;
      osc.frequency.setValueAtTime(p.freq, now);
      osc.detune.setValueAtTime(p.detune, now);

      // Subtle staggered volume pulse mimicking the four strings of a Tanpura
      g.gain.setValueAtTime(p.gain * 0.4, now);
      
      osc.connect(g);
      g.connect(filter);
      osc.start();

      this.oscillators.push(osc);
      this.gainNodes.push(g);
    });

    this.isRunning = true;
  }

  public stop() {
    if (!this.ctx || !this.isRunning) return;
    const now = this.ctx.currentTime;

    if (this.masterGain) {
      this.masterGain.gain.linearRampToValueAtTime(0, now + 1.5);
    }

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch {}
      });
      if (this.lfo) {
        try { this.lfo.stop(); this.lfo.disconnect(); } catch {}
        this.lfo = null;
      }
      this.oscillators = [];
      this.gainNodes = [];
      this.isRunning = false;
    }, 1600);
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(this.currentVolume, this.ctx.currentTime + 0.1);
    }
  }

  public playTempleBell() {
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const bellOsc = this.ctx.createOscillator();
    const bellGain = this.ctx.createGain();

    bellOsc.type = 'sine';
    bellOsc.frequency.setValueAtTime(880, now); // A5 bell chime
    bellOsc.frequency.exponentialRampToValueAtTime(440, now + 1.8);

    bellGain.gain.setValueAtTime(0.25 * this.currentVolume, now);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

    bellOsc.connect(bellGain);
    bellGain.connect(this.ctx.destination);

    bellOsc.start(now);
    bellOsc.stop(now + 3.2);
  }

  public getIsPlaying(): boolean {
    return this.isRunning;
  }
}

export const soundscapeEngine = new SoundscapeEngine();
