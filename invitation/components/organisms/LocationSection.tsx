"use client";

import { motion } from "framer-motion";
import { SectionTag } from "@/components/atoms/SectionTag";
import { RevealSection } from "@/components/molecules/RevealSection";
import { WEDDING_CONFIG } from "@/config/wedding.config";
import { fadeUpItem, staggerIn } from "@/animations/variants";

export function LocationSection() {
  return (
    <RevealSection
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-5 py-16 sm:px-6 sm:py-20"
      id="ubicacion"
    >
      <SectionTag>Ubicación</SectionTag>
      <h2 className="mb-4 max-w-xs font-serif text-[clamp(1.65rem,6vw,2.15rem)] font-light tracking-[0.12em] text-white sm:max-w-md">
        Donde celebramos
      </h2>
      <motion.div
        className="mb-8 max-w-sm text-center"
        variants={staggerIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          variants={fadeUpItem}
          className="text-base leading-relaxed text-zinc-300"
        >
          {WEDDING_CONFIG.locationCityLine}
          <br />
          <span className="text-zinc-500">{WEDDING_CONFIG.locationCountry}</span>
        </motion.p>
        <motion.p
          variants={fadeUpItem}
          className="mt-3 font-mono text-[0.65rem] tracking-wider text-amber-200/50"
        >
          {WEDDING_CONFIG.coordinates.lat}, {WEDDING_CONFIG.coordinates.lng}
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] shadow-black/70 sm:max-w-md"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <iframe
          title="Mapa del evento"
          src={WEDDING_CONFIG.mapEmbedUrl}
          width="100%"
          height={320}
          className="min-h-[280px] border-0 sm:h-[350px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </motion.div>

      <motion.a
        href={WEDDING_CONFIG.mapOpenUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 flex min-h-12 min-w-[12rem] items-center justify-center rounded-full bg-gradient-to-r from-amber-100/95 to-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-900 shadow-lg shadow-amber-900/20 transition active:scale-[0.98]"
        whileTap={{ scale: 0.97 }}
      >
        Abrir en Google Maps
      </motion.a>
    </RevealSection>
  );
}
