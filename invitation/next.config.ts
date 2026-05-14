import type { NextConfig } from "next";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

/** GitHub Pages (sitio de proyecto): `BASE_PATH=/nombre-repo`. Usuario `*.github.io`: dejar vacío. */
function normalizeBasePath(): string | undefined {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") return undefined;
  return raw.startsWith("/") ? raw : `/${raw}`;
}

const basePath = normalizeBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.101.2"],
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ??
      process.env.VITE_EMAILJS_SERVICE_ID ??
      "",
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN ??
      process.env.VITE_EMAILJS_TEMPLATE_ADMIN ??
      "",
    NEXT_PUBLIC_EMAILJS_TEMPLATE_GUEST:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_GUEST ??
      process.env.VITE_EMAILJS_TEMPLATE_GUEST ??
      "",
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ??
      process.env.VITE_EMAILJS_PUBLIC_KEY ??
      "",
    NEXT_PUBLIC_ADMIN_EMAIL:
      process.env.NEXT_PUBLIC_ADMIN_EMAIL ??
      process.env.VITE_ADMIN_EMAIL ??
      "",
  },
};

export default nextConfig;
