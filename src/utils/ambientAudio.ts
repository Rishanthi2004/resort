/**
 * Procedural ambient ocean waves audio generator using Web Audio API.
 * Zero external mp3 dependencies, lightweight, and realistic.
 */

class AmbientOceanWaveSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private lfoNode: OscillatorNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  public start() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const sampleRate = this.ctx.sampleRate;
    const bufferSize = sampleRate * 5; // 5-second loop
    const noiseBuffer = this.ctx.createBuffer(2, bufferSize, sampleRate);

    // Generate soft pink/brown filtered noise for ocean water
    for (let channel = 0; channel < 2; channel++) {
      const output = noiseBuffer.getChannelData(channel);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
        b6 = white * 0.115926;
      }
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Filter to mimic warm ocean water acoustics
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 450;
    filter.Q.value = 1.2;

    // LFO to simulate periodic waves lapping gently (every 6 seconds)
    const waveLfo = this.ctx.createOscillator();
    waveLfo.frequency.value = 0.16; // ~6.25 sec per wave cycle
    waveLfo.type = 'sine';

    const waveGain = this.ctx.createGain();
    waveGain.gain.value = 250;
    waveLfo.connect(waveGain);
    waveGain.connect(filter.frequency);

    // Dynamic wave amplitude swells
    const swellGain = this.ctx.createGain();
    swellGain.gain.value = 0.45;

    const swellLfo = this.ctx.createOscillator();
    swellLfo.frequency.value = 0.16;
    const swellAmp = this.ctx.createGain();
    swellAmp.gain.value = 0.35;
    swellLfo.connect(swellAmp);
    swellAmp.connect(swellGain.gain);

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 2);

    this.noiseNode.connect(filter);
    filter.connect(swellGain);
    swellGain.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.noiseNode.start();
    waveLfo.start();
    swellLfo.start();

    this.lfoNode = waveLfo;
    this.isPlaying = true;
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        if (this.noiseNode) {
          try {
            this.noiseNode.stop();
            this.noiseNode.disconnect();
          } catch {
            // ignore
          }
          this.noiseNode = null;
        }
        if (this.lfoNode) {
          try {
            this.lfoNode.stop();
            this.lfoNode.disconnect();
          } catch {
            // ignore
          }
          this.lfoNode = null;
        }
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const oceanAmbience = new AmbientOceanWaveSynthesizer();
