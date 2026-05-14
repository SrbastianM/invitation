"use client";

import { AmbientAudio } from "@/components/organisms/AmbientAudio";
import { CountdownSection } from "@/components/organisms/CountdownSection";
import { DateStorySection } from "@/components/organisms/DateStorySection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { LocationSection } from "@/components/organisms/LocationSection";
import { RsvpForm } from "@/components/organisms/RsvpForm";
import { WeddingFooter } from "@/components/organisms/WeddingFooter";
import { WhatsAppFab } from "@/components/organisms/WhatsAppFab";
import { WEDDING_CONFIG } from "@/config/wedding.config";
import { useLenisScrollTrigger } from "@/hooks/useLenisScrollTrigger";

export function InvitationDigitalTemplate() {
  useLenisScrollTrigger();

  return (
    <div className="relative min-h-dvh bg-zinc-950">
      <main className="relative mx-auto min-h-dvh w-full max-w-lg overflow-x-hidden bg-black font-sans text-white antialiased shadow-[0_0_80px_rgba(0,0,0,0.65)] md:my-4 md:min-h-[min(100dvh,56rem)] md:rounded-2xl md:ring-1 md:ring-white/10">
        <AmbientAudio />
        <WhatsAppFab />
        <HeroSection videoSrc={WEDDING_CONFIG.media.heroVideo} />
        <DateStorySection videoSrc={WEDDING_CONFIG.media.dateVideo} />
        <CountdownSection />
        <LocationSection />
        <RsvpForm />
        <WeddingFooter />
      </main>
    </div>
  );
}
