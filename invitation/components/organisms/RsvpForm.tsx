"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTag } from "@/components/atoms/SectionTag";
import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { Textarea } from "@/components/atoms/Textarea";
import { GlassPanel } from "@/components/molecules/CountdownCard";
import { RevealSection } from "@/components/molecules/RevealSection";
import { sendRSVPEmails } from "@/services/email.service";
import { isEmailJsConfigured } from "@/config/emailjs.config";
import type { RSVPAttendance } from "@/types/rsvp";

export function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const attendanceRaw = String(fd.get("attendance") ?? "");
    const msg = String(fd.get("message") ?? "").trim();

    if (!name || !phone || !email) {
      setStatus("err");
      setMessage("Completa nombre, teléfono y correo.");
      return;
    }

    const attendance: RSVPAttendance =
      attendanceRaw === "yes" || attendanceRaw === "no"
        ? attendanceRaw
        : "yes";

    setStatus("loading");
    setMessage(null);

    const result = await sendRSVPEmails({
      name,
      phone,
      email,
      attendance,
      message: msg,
    });

    if (result.success) {
      setStatus("ok");
      setMessage("Confirmación enviada. Revisa tu correo.");
      form.reset();
    } else {
      setStatus("err");
      setMessage(
        result.userMessage ||
          "No se pudo enviar. Revisa la consola y la configuración de EmailJS.",
      );
    }
  }

  const configured = isEmailJsConfigured();

  return (
    <RevealSection
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#0a0a0a] px-5 py-16 sm:px-6 sm:py-20"
      id="rsvp"
    >
      <GlassPanel className="w-full max-w-md">
        <div className="mb-9 text-center sm:mb-10">
          <SectionTag className="text-zinc-500">RSVP</SectionTag>
          <h2 className="font-serif text-[clamp(1.65rem,6vw,2.1rem)] font-light leading-snug tracking-[0.12em] text-white">
            Confirma tu asistencia
          </h2>
        </div>

        {!configured && (
          <p className="mb-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-amber-100">
            Falta configurar EmailJS en{" "}
            <code className="text-xs">.env</code> y reiniciar el servidor de
            desarrollo.
          </p>
        )}

        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            required
            placeholder="Nombre completo"
            autoComplete="name"
          />
          <Input
            name="phone"
            type="tel"
            required
            placeholder="Teléfono"
            autoComplete="tel"
          />
          <Input
            name="email"
            type="email"
            required
            placeholder="Correo electrónico"
            autoComplete="email"
          />
          <Select
            name="attendance"
            defaultValue="yes"
            required
            className="text-white"
          >
            <option value="yes" className="bg-zinc-900 text-white">
              Sí, asistiré
            </option>
            <option value="no" className="bg-zinc-900 text-white">
              No podré asistir
            </option>
          </Select>
          <Textarea
            name="message"
            rows={4}
            placeholder="Mensaje para los novios (opcional)"
            className="min-h-[7.5rem] resize-y text-base"
          />
          <motion.button
            type="submit"
            disabled={status === "loading" || !configured}
            className="flex min-h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-amber-100 to-white py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900 shadow-md transition disabled:cursor-not-allowed disabled:opacity-50"
            whileTap={{ scale: 0.98 }}
          >
            {status === "loading" ? "Enviando…" : "Enviar confirmación"}
          </motion.button>
        </form>

        {message && (
          <p
            className={`mt-6 text-center text-sm leading-relaxed ${
              status === "ok" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </GlassPanel>
    </RevealSection>
  );
}
