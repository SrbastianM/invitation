"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WEDDING_CONFIG, hasMediaSrc } from "@/config/wedding.config";

type DateStorySectionProps = {
  videoSrc: string;
};

export function DateStorySection({ videoSrc }: DateStorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const useVideo = hasMediaSrc(videoSrc);
  const [videoFailed, setVideoFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0.15, 0.55, 1], [28, 0, -18]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const showVideo = useVideo && !videoFailed;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      {!showVideo ? (
        <div
          className="absolute inset-0 bg-gradient-to-tl from-zinc-950 via-stone-900 to-black"
          aria-hidden
        />
      ) : (
        <motion.div
          className="absolute inset-0"
          style={{ scale: videoScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      )}
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 max-w-[22rem] px-6 text-center sm:max-w-md"
        style={{ y: textY }}
      >
        <motion.h2
          className="font-serif text-[clamp(1.5rem,6vw,2.35rem)] font-light leading-snug tracking-[0.18em] text-white"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          Nuestro para siempre comienza
        </motion.h2>
        <motion.p
          className="mt-5 text-[clamp(1rem,4vw,1.2rem)] tracking-[0.28em] text-amber-50/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {WEDDING_CONFIG.displayDate}
        </motion.p>
      </motion.div>
    </section>
  );
}
