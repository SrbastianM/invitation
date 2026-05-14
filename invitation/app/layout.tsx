import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Invitación — Jonathan & Emily",
  description:
    "Invitación digital: celebración en La Romana. RSVP con confirmación por correo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} relative h-full`}
    >
      <body className="relative min-h-dvh flex flex-col bg-zinc-950 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
