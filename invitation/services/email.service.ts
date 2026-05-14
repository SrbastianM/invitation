"use client";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { getEmailJsConfig, isEmailJsConfigured } from "@/config/emailjs.config";
import { WEDDING_CONFIG } from "@/config/wedding.config";
import type { RSVPPayload } from "@/types/rsvp";

function attendanceLabel(attendance: RSVPPayload["attendance"]): string {
  return attendance === "yes" ? "Sí, asistiré" : "No podré asistir";
}

function getAdminNotificationEmail(): string {
  const fromEnv = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim();
  if (fromEnv) return fromEnv;
  return WEDDING_CONFIG.adminNotificationEmail;
}

function formatEmailJsError(error: unknown): string {
  if (error instanceof EmailJSResponseStatus) {
    const detail = (error.text ?? "").trim().slice(0, 400);
    if (detail) {
      return `EmailJS ${error.status}: ${detail}`;
    }
    return `EmailJS respondió con código ${error.status}. Revisa IDs de servicio/plantilla en el panel y en .env.`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "text" in error
  ) {
    const e = error as { status: number; text: string };
    return `EmailJS ${e.status}: ${String(e.text).slice(0, 400)}`;
  }
  return "Error desconocido al enviar con EmailJS.";
}

export type SendRSVPResult =
  | { success: true }
  | { success: false; error: unknown; userMessage: string };

function ensureEmailJsInit(publicKey: string) {
  emailjs.init({
    publicKey,
    blockHeadless: false,
  });
}

/**
 * Parámetros para EmailJS. Incluye alias de correo porque el 422 “recipients
 * address is empty” suele deberse al campo “To” de la plantilla: debe usar una
 * de estas variables (p. ej. {{admin_email}} en admin, {{guest_email}} o
 * {{to_email}} en invitado) y coincidir con las claves enviadas aquí.
 */
function buildTemplateParams(data: RSVPPayload) {
  const adminEmail = getAdminNotificationEmail();
  return {
    guest_name: data.name,
    guest_email: data.email,
    guest_phone: data.phone,
    attendance: attendanceLabel(data.attendance),
    guest_message: data.message,
    wedding_date: WEDDING_CONFIG.weddingDateLabel,
    wedding_hour: WEDDING_CONFIG.weddingHourLabel,
    wedding_location: WEDDING_CONFIG.locationDetail,
    hosts: WEDDING_CONFIG.hosts,
    admin_email: adminEmail,
    adminEmail: adminEmail,
    notification_email: adminEmail,
    to_admin: adminEmail,
    recipient_email: data.email,
    to_email: data.email,
    email: data.email,
    user_email: data.email,
  };
}

export async function sendRSVPEmails(
  data: RSVPPayload,
): Promise<SendRSVPResult> {
  if (!isEmailJsConfigured()) {
    return {
      success: false,
      error: new Error("EmailJS sin variables NEXT_PUBLIC_*"),
      userMessage:
        "EmailJS no está configurado. Añade NEXT_PUBLIC_EMAILJS_* en .env y reinicia el servidor.",
    };
  }

  const adminEmail = getAdminNotificationEmail();
  if (!adminEmail) {
    return {
      success: false,
      error: new Error("Sin correo admin"),
      userMessage:
        "Falta el correo del anfitrión. Configura NEXT_PUBLIC_ADMIN_EMAIL en .env.",
    };
  }

  const cfg = getEmailJsConfig();
  ensureEmailJsInit(cfg.PUBLIC_KEY);

  const templateParams = buildTemplateParams(data);

  try {
    await Promise.all([
      emailjs.send(
        cfg.SERVICE_ID,
        cfg.TEMPLATE_ADMIN,
        templateParams,
        cfg.PUBLIC_KEY,
      ),
      emailjs.send(
        cfg.SERVICE_ID,
        cfg.TEMPLATE_GUEST,
        templateParams,
        cfg.PUBLIC_KEY,
      ),
    ]);
    return { success: true };
  } catch (error) {
    const userMessage = formatEmailJsError(error);
    console.error("[EmailJS]", userMessage, error);
    return { success: false, error, userMessage };
  }
}
