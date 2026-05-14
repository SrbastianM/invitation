import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className = "", ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      className={`w-full min-h-12 rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-base text-white outline-none ring-amber-200/30 placeholder:text-zinc-500 focus:ring-2 ${className}`}
      {...rest}
    />
  );
});
