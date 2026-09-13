// Web Speech API Voice Narration Engine

class SpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;
  private onStateChangeCallback: ((speaking: boolean, paused: boolean) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public setListener(cb: (speaking: boolean, paused: boolean) => void) {
    this.onStateChangeCallback = cb;
  }

  private notify() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.isSpeaking, this.isPaused);
    }
  }

  public speak(text: string) {
    if (!this.synth) return;

    this.stop();

    const cleanText = text.replace(/[\\\\/#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Prefer Indian English voice or melodious natural English voice
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-IN') || v.name.includes('India')) ||
      voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Serena'))) ||
      voices.find(v => v.lang.startsWith('en'));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 0.95; // slightly measured curatorial pace
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.notify();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notify();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (!this.synth) return;
    if (this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public resume() {
    if (!this.synth) return;
    if (this.isSpeaking && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  public stop() {
    if (!this.synth) return;
    this.synth.cancel();
    this.isSpeaking = false;
    this.isPaused = false;
    this.currentUtterance = null;
    this.notify();
  }

  public getStatus() {
    return { isSpeaking: this.isSpeaking, isPaused: this.isPaused };
  }
}

export const speechEngine = new SpeechEngine();
