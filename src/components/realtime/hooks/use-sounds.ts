import { useCallback, useEffect, useRef, useState } from "react";

// GLOBAL STATE
let globalAudioContext: AudioContext | null = null;
let pressBuffer: AudioBuffer | null = null;
let releaseBuffer: AudioBuffer | null = null;
let confettiBuffer: AudioBuffer | null = null;
let bgm: HTMLAudioElement | null = null;
let isInitialized = false;

// Simple event emitters to sync React state across multiple hook instances
const bgmAvailableListeners = new Set<(val: boolean) => void>();
const bgmPlayingListeners = new Set<(val: boolean) => void>();

function setGlobalBgmAvailable(val: boolean) {
  bgmAvailableListeners.forEach(fn => fn(val));
}

function setGlobalBgmPlaying(val: boolean) {
  bgmPlayingListeners.forEach(fn => fn(val));
}

export const useSounds = () => {
  const [bgmAvailable, setBgmAvailable] = useState(false);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);

  useEffect(() => {
    bgmAvailableListeners.add(setBgmAvailable);
    bgmPlayingListeners.add(setIsBgmPlaying);

    if (bgm) {
      setBgmAvailable(true);
      setIsBgmPlaying(!bgm.paused);
    }

    const loadSound = async () => {
      if (isInitialized) return;
      
      try {
        const consent = window.localStorage.getItem("portfolioSoundConsent");
        if (consent !== "yes") return;

        isInitialized = true;

        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        if (!globalAudioContext) {
          globalAudioContext = new AudioContext();
        }
        const ctx = globalAudioContext;

        if (!pressBuffer) {
          const response = await fetch('/assets/keycap-sounds/press.mp3');
          pressBuffer = await ctx.decodeAudioData(await response.arrayBuffer());
        }

        if (!releaseBuffer) {
          const releaseResponse = await fetch('/assets/keycap-sounds/release.mp3');
          releaseBuffer = await ctx.decodeAudioData(await releaseResponse.arrayBuffer());
        }

        if (!confettiBuffer) {
          const confettiResponse = await fetch('/assets/sounds/vine-boom.mp3');
          confettiBuffer = await ctx.decodeAudioData(await confettiResponse.arrayBuffer());
        }

        if (!bgm) {
          bgm = new Audio('/assets/music/ncs.mp3');
          bgm.loop = true;
          bgm.volume = 0.08;
          bgm.preload = 'auto';
          
          bgm.addEventListener('play', () => setGlobalBgmPlaying(true));
          bgm.addEventListener('pause', () => setGlobalBgmPlaying(false));
          bgm.addEventListener('canplaythrough', () => setGlobalBgmAvailable(true), { once: true });
          bgm.addEventListener('error', (event) => {
            console.error('Failed to load NCS background music', event);
          });

          bgm.play().catch(() => {
            // autoplay may be blocked; user can start music manually.
          });
        }
      } catch (error) {
        console.error("Failed to load sounds", error);
        isInitialized = false;
      }
    };

    const onSoundConsent = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail === "yes") {
        loadSound();
      }
    };

    loadSound();
    window.addEventListener("portfolioSoundConsent", onSoundConsent as EventListener);

    return () => {
      bgmAvailableListeners.delete(setBgmAvailable);
      bgmPlayingListeners.delete(setIsBgmPlaying);
      window.removeEventListener("portfolioSoundConsent", onSoundConsent as EventListener);
      // We do NOT pause the global bgm or close the audio context here because other components might still be using them.
    };
  }, []);

  const getContext = useCallback(() => {
    if (globalAudioContext?.state === 'suspended') {
      globalAudioContext.resume().catch(() => { });
    }
    return globalAudioContext;
  }, []);

  const playTone = useCallback((startFreq: number, endFreq: number, duration: number, vol: number) => {
    try {
      const ctx = getContext();
      if (!ctx) return;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "sine";
      const startTime = ctx.currentTime;

      oscillator.frequency.setValueAtTime(startFreq, startTime);
      oscillator.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);

      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(vol, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    } catch (error) {
      console.error("Failed to play notification sound", error);
    }
  }, [getContext]);

  const playSoundBuffer = useCallback((buffer: AudioBuffer | null, baseDetune = 0) => {
    try {
      const ctx = getContext();
      if (!ctx || !buffer) return;

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      // Add slight variation
      source.detune.value = baseDetune + (Math.random() * 200) - 100;

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.4;

      source.connect(gainNode);
      gainNode.connect(ctx.destination);

      source.start(0);
    } catch (err) {
      console.error(err);
    }
  }, [getContext]);

  const playPressSound = useCallback(() => playSoundBuffer(pressBuffer), [playSoundBuffer]);
  const playReleaseSound = useCallback(() => playSoundBuffer(releaseBuffer), [playSoundBuffer]);

  const toggleBgm = useCallback(() => {
    if (!bgm) return;
    if (bgm.paused) {
      bgm.play().catch(e => console.error("Failed to play background music", e));
    } else {
      bgm.pause();
    }
  }, []);

  // Send: Clear, slightly higher pitch, quick
  const playSendSound = useCallback(() => playTone(600, 300, 0.25, 0.08), [playTone]);
  // Receive: Lower pitch, bubble-like, slightly longer
  const playReceiveSound = useCallback(() => playTone(800, 400, 0.35, 0.1), [playTone]);

  const playConfettiSound = useCallback((intensity: number = 0.5) => {
    try {
      const ctx = getContext();
      if (!ctx || !confettiBuffer) return;

      const source = ctx.createBufferSource();
      source.buffer = confettiBuffer;
      // Lower intensity = higher pitch (lighter pop), higher = deeper boom
      source.playbackRate.value = 1.2 - intensity * 0.4;
      source.detune.value = (Math.random() * 100) - 50;

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.15 + intensity * 0.5;

      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
    } catch (err) {
      console.error(err);
    }
  }, [getContext]);

  // Charge tone — continuous oscillator whose pitch tracks intensity
  const chargeOscRef = useRef<OscillatorNode | null>(null);
  const chargeGainRef = useRef<GainNode | null>(null);

  const startChargeTone = useCallback(() => {
    try {
      const ctx = getContext();
      if (!ctx || chargeOscRef.current) return;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 200;

      const gain = ctx.createGain();
      gain.gain.value = 0;

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      chargeOscRef.current = osc;
      chargeGainRef.current = gain;
    } catch (err) {
      console.error(err);
    }
  }, [getContext]);

  const updateChargeTone = useCallback((intensity: number) => {
    const osc = chargeOscRef.current;
    const gain = chargeGainRef.current;
    if (!osc || !gain) return;
    // Pitch rises from 200Hz to 800Hz
    osc.frequency.value = 200 + intensity * 600;
    // Volume fades in gently
    gain.gain.value = intensity * 0.06;
  }, []);

  const stopChargeTone = useCallback(() => {
    try {
      chargeOscRef.current?.stop();
    } catch { /* already stopped */ }
    chargeOscRef.current = null;
    chargeGainRef.current = null;
  }, []);

  return {
    playSendSound,
    playReceiveSound,
    playPressSound,
    playReleaseSound,
    playConfettiSound,
    toggleBgm,
    isBgmPlaying,
    bgmAvailable,
    startChargeTone,
    updateChargeTone,
    stopChargeTone,
  };
};
