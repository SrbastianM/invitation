"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerIn, fadeUpItem } from "@/animations/variants";

type CountdownCardProps = {
  value: number;
  label: string;
  /** false hasta el primer tick en cliente (evita error de hidratación) */
  live: boolean;
};

export function CountdownCard({ value, label, live }: CountdownCardProps) {
  return (
    <motion.div
      variants={fadeUpItem}
      className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/50 backdrop-blur-md sm:p-6"
    >
      {live ? (
        <motion.span
          key={value}
          initial={{ opacity: 0.35, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="block font-serif text-5xl font-medium tabular-nums leading-none text-white sm:text-6xl"
        >
          {value}
        </motion.span>
      ) : (
        <span className="block font-serif text-5xl font-medium tabular-nums leading-none text-zinc-600 sm:text-6xl">
          —
        </span>
      )}
      <p className="mt-3 text-[0.65rem] uppercase tracking-[0.32em] text-zinc-500">
        {label}
      </p>
    </motion.div>
  );
}

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/60 backdrop-blur-xl sm:rounded-[2.25rem] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function CountdownGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="grid w-full grid-cols-2 gap-4 sm:max-w-md sm:gap-5"
      variants={staggerIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
