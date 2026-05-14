/**
 * Lectura en tiempo de envío: el bundle del cliente solo incluye
 * `NEXT_PUBLIC_*` definidas en `.env` al hacer build / dev.
 */
export function getEmailJsConfig() {
  return {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    TEMPLATE_ADMIN: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN ?? "",
    TEMPLATE_GUEST: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_GUEST ?? "",
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  } as const;
}

export function isEmailJsConfigured(): boolean {
  const c = getEmailJsConfig();
  return Boolean(
    c.SERVICE_ID && c.TEMPLATE_ADMIN && c.TEMPLATE_GUEST && c.PUBLIC_KEY,
  );
}
