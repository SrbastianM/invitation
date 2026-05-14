import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className = "", children, ...rest }, ref) {
  return (
    <select
      ref={ref}
      className={`w-full min-h-12 rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-base text-white outline-none ring-amber-200/30 focus:ring-2 ${className}`}
      {...rest}
    >
      {children}
    </select>
  );
});
