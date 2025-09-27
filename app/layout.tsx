import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sembrarte - Té Natural y Productos de la Tierra",
  description:
    "Descubre nuestra selección de tés naturales y productos orgánicos. Cultivando bienestar en cada taza.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico", // o '/icon.png' si usas PNG
    shortcut: "/favicon.ico", // para algunos navegadores antiguos
    apple: "/apple-touch-icon.png", // si tienes un icono para iOS
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#6a994e", // tu color principal
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${nunito.className} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
