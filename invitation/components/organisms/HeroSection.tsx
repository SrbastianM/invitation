"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { WEDDING_CONFIG, hasMediaSrc } from "@/config/wedding.config";

type HeroSectionProps = {
  videoSrc: string;
};

export function HeroSection({ videoSrc }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const useVideo = hasMediaSrc(videoSrc);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 0.75], [0, 36]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const wrap = videoWrapRef.current;
    if (!section || !wrap) return;

    const ctx = gsap.context(() => {
      gsap.to(wrap, {
        y: 110,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [videoSrc, useVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] w-full snap-start items-center justify-center overflow-hidden"
    >
      <div ref={videoWrapRef} className="absolute inset-0 will-change-transform">
        <HeroBackground videoSrc={videoSrc} useVideo={useVideo} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <motion.div
        className="relative z-10 max-w-[22rem] px-6 text-center sm:max-w-md"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <motion.h1
          className="font-serif text-[clamp(1.75rem,7vw,2.75rem)] font-light leading-tight tracking-[0.2em] text-white"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {WEDDING_CONFIG.coupleNames}
        </motion.h1>
        <motion.p
          className="mt-5 text-[0.7rem] uppercase tracking-[0.42em] text-amber-100/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          Desliza hacia abajo
        </motion.p>
      </motion.div>
    </section>
  );
}

type HeroBackgroundProps = {
  videoSrc: string;
  useVideo: boolean;
};

function HeroBackground({ videoSrc, useVideo }: HeroBackgroundProps) {
  const [videoFailed, setVideoFailed] = useState(false);

  if (!useVideo || videoFailed) {
    return (
      <div
        className="absolute inset-0 h-full w-full bg-gradient-to-br from-amber-950/90 via-zinc-950 to-black"
        aria-hidden
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full min-h-full w-full object-cover"
      onError={() => setVideoFailed(true)}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
