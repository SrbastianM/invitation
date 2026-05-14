import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ className = "", children, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-2xl px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
