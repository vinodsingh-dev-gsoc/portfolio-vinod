"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

import Loader from "./loader";
import gsap from "gsap";
import { usePerfProfile } from "@/hooks/use-perf-profile";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
const LOADING_TIME = 2.5;
const SOUND_CONSENT_KEY = "portfolioSoundConsent";
function Preloader({ children, disabled = false }: PreloaderProps) {
  const pathname = usePathname();
  // Skip the loading splash for the résumé route (and anywhere it's disabled).
  const skip = disabled || pathname?.startsWith("/resume");

  const [isLoading, setIsLoading] = useState(!skip);
  const [loadingPercent, setLoadingPercent] = useState(skip ? 100 : 0);
  const [soundConsent, setSoundConsent] = useState<boolean | null>(null);
  const [soundConsentLoaded, setSoundConsentLoaded] = useState(false);
  const loadingTween = useRef<gsap.core.Tween>(null);

  // The splash exists only to mask the Spline 3D scene loading. On low-end /
  // reduced-motion devices that scene is never loaded, so its onLoad (which
  // normally dismisses the splash) never fires — bypass immediately instead of
  // leaving the page stuck behind the loader.
  const { disable3D, ready: perfReady } = usePerfProfile();

  const bypassLoading = () => {
    loadingTween.current?.progress(0.99).kill();
    setLoadingPercent(100);
    setIsLoading(false);
  };

  useEffect(() => {
    if (perfReady && disable3D) bypassLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perfReady, disable3D]);

  useEffect(() => {
    const stored = window.localStorage.getItem(SOUND_CONSENT_KEY);
    if (stored === "yes") setSoundConsent(true);
    else if (stored === "no") setSoundConsent(false);
    setSoundConsentLoaded(true);
  }, []);

  const handleSoundConsent = (allowed: boolean) => {
    window.localStorage.setItem(SOUND_CONSENT_KEY, allowed ? "yes" : "no");
    setSoundConsent(allowed);
    window.dispatchEvent(
      new CustomEvent("portfolioSoundConsent", {
        detail: allowed ? "yes" : "no",
      })
    );
  };

  const loadingPercentRef = useRef<{ value: number }>({ value: 0 });
  useEffect(() => {
    if (skip || soundConsent !== null) {
      loadingTween.current = gsap.to(loadingPercentRef.current, {
        value: 100,
        duration: LOADING_TIME,
        ease: "slow(0.7,0.7,false)",
        onUpdate: () => {
          setLoadingPercent(loadingPercentRef.current.value);
        },
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }
    return () => {
      loadingTween.current?.kill();
    };
  }, [skip, soundConsent]);

  return (
    <preloaderContext.Provider
      value={{ isLoading, bypassLoading, loadingPercent }}
    >
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
        {soundConsentLoaded && soundConsent === null && (
          <motion.div
            key="sound-consent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/95 p-6"
          >
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/95 p-8 text-center shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-3">
                Enable keyboard sound?
              </h2>
              <p className="text-sm text-slate-300 mb-6">
                Would you like to hear the keyboard keycap sound effects while exploring the portfolio?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => handleSoundConsent(true)}
                  className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Yes, enable sound
                </button>
                <button
                  type="button"
                  onClick={() => handleSoundConsent(false)}
                  className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
                >
                  No thanks
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
