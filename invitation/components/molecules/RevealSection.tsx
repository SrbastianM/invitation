"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { luxurySectionReveal } from "@/animations/variants";
import { cn } from "@/utils/cn";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function RevealSection({ children, className, id }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(className)}
      variants={luxurySectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.section>
  );
}
