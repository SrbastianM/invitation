import { WEDDING_CONFIG } from "@/config/wedding.config";

export function WeddingFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-black px-5 py-12 text-center sm:py-14">
      <h3 className="font-serif text-2xl font-light uppercase tracking-[0.28em] text-white">
        {WEDDING_CONFIG.coupleNames}
      </h3>
      <p className="mt-3 text-sm tracking-[0.22em] text-zinc-500">
        {WEDDING_CONFIG.displayDate.replace(/\s*\/\s*/g, " · ")}
      </p>
      <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-zinc-600">
        {WEDDING_CONFIG.locationShort}
      </p>
    </footer>
  );
}
