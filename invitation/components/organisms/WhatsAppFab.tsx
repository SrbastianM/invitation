import { WEDDING_CONFIG } from "@/config/wedding.config";

export function WhatsAppFab() {
  const href = `https://wa.me/${WEDDING_CONFIG.whatsappE164}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-50 flex min-h-12 min-w-[min(100%,11rem)] items-center justify-center rounded-full bg-emerald-600 px-5 py-3.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white shadow-2xl shadow-emerald-950/40 transition active:bg-emerald-500"
    >
      WhatsApp
    </a>
  );
}
