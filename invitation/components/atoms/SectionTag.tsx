import type { ReactNode } from "react";

type SectionTagProps = {
  children: ReactNode;
  className?: string;
};

export function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <p
      className={`mb-5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.38em] text-zinc-500 ${className}`}
    >
      {children}
    </p>
  );
}
