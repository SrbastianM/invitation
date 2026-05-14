"use client";

import { SectionTag } from "@/components/atoms/SectionTag";
import {
  CountdownCard,
  CountdownGrid,
} from "@/components/molecules/CountdownCard";
import { RevealSection } from "@/components/molecules/RevealSection";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING_CONFIG } from "@/config/wedding.config";

const target = new Date(WEDDING_CONFIG.targetDateIso);

export function CountdownSection() {
  const { timeLeft, live } = useCountdown(target);

  return (
    <RevealSection
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#0c0c0c] px-5 py-16 text-center sm:px-6 sm:py-20"
      id="cuenta-regresiva"
    >
      <SectionTag>Cuenta regresiva</SectionTag>
      <h2 className="mb-10 max-w-xs font-serif text-[clamp(1.65rem,6.5vw,2.25rem)] font-light leading-tight tracking-[0.12em] text-white sm:mb-14 sm:max-w-none">
        Cada momento cuenta
      </h2>
      <CountdownGrid>
        <CountdownCard value={timeLeft.days} label="Días" live={live} />
        <CountdownCard value={timeLeft.hours} label="Horas" live={live} />
        <CountdownCard value={timeLeft.minutes} label="Minutos" live={live} />
        <CountdownCard value={timeLeft.seconds} label="Segundos" live={live} />
      </CountdownGrid>
    </RevealSection>
  );
}
