"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_CONFIG, hasMediaSrc } from "@/config/wedding.config";

export function AmbientAudio() {
  const src = WEDDING_CONFIG.media.musicSrc;
  const enabled = hasMediaSrc(src);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      await el.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, [playing]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} loop src={src} />
      <motion.button
        type="button"
        onClick={toggle}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] left-[max(1rem,env(safe-area-inset-left,0px))] z-50 flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-black/55 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={playing ? "on" : "off"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {playing ? "Pausar" : "Música"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
