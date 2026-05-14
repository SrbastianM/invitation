"use client";

import { useEffect, useState } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateTimeLeft(target: Date): TimeLeft {
  const difference = target.getTime() - Date.now();
  if (difference <= 0) {
    return ZERO;
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

type CountdownState = {
  timeLeft: TimeLeft;
  /** true tras el primer cálculo en cliente (evita mismatch de hidratación) */
  live: boolean;
};

/**
 * Primer render: siempre `live: false` y ceros → coincide servidor/cliente.
 * El primer tick se programa fuera del cuerpo síncrono del effect (regla ESLint).
 */
export function useCountdown(target: Date) {
  const [state, setState] = useState<CountdownState>({
    timeLeft: ZERO,
    live: false,
  });

  useEffect(() => {
    const tick = () => {
      setState((prev) => ({
        ...prev,
        live: true,
        timeLeft: calculateTimeLeft(target),
      }));
    };

    const start = setTimeout(tick, 0);
    const timer = setInterval(tick, 1000);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [target]);

  return state;
}
