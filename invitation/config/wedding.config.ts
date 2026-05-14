/**
 * Medios opcionales: deja la cadena vacía hasta que existan archivos en `public/`.
 * Así no se generan peticiones 404. Ejemplos: "/video1.mp4", "/music.mp3"
 */
export const WEDDING_CONFIG = {
  coupleNames: "Jonathan & Emily",
  /** Fecha objetivo del contador (ISO local) */
  targetDateIso: "2027-05-16T17:00:00",
  displayDate: "05 / 16 / 2027",
  weddingDateLabel: "16 de mayo de 2027",
  weddingHourLabel: "5:00 PM",
  coordinates: { lat: 18.422462, lng: -68.919175 } as const,
  locationCityLine: "La Romana, 22000",
  locationCountry: "República Dominicana",
  locationShort: "La Romana, 22000, República Dominicana",
  /** Texto para correos y copy formal */
  locationDetail:
    "La Romana, 22000, República Dominicana (coord. 18.422462, -68.919175)",
  mapEmbedUrl:
    "https://www.google.com/maps?q=18.422462,-68.919175&z=16&output=embed",
  mapOpenUrl:
    "https://www.google.com/maps/search/?api=1&query=18.422462%2C-68.919175",
  whatsappE164: "18090000000",
  hosts: "Jonathan & Emily",
  /**
   * Correo del anfitrión: úsalo en la plantilla **admin** de EmailJS en el campo “To”
   * como `{{admin_email}}` (o el nombre que elijas y envíes en templateParams).
   */
  adminNotificationEmail: "sebas907.l@gmail.com",
  media: {
    heroVideo: "",
    dateVideo: "",
    musicSrc: "",
  },
} as const;

export function hasMediaSrc(src: string | undefined | null): boolean {
  return Boolean(src && String(src).trim().length > 0);
}
