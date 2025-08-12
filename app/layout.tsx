import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facturakit — Facturas profesionales en segundos",
  description: "Crea, previsualiza y exporta facturas en PDF o HTML. 10 plantillas con diseño real."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
