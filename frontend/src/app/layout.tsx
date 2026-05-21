import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digitalizador de Ideias | Da Ideia à Plataforma Digital",
  description:
    "Transformamos sua ideia em uma plataforma digital completa. Sistemas web, aplicativos e automações sob medida para o seu negócio.",
  keywords:
    "desenvolvimento de software, sistema web, aplicativo, landing page, automação, plataforma digital",
  openGraph: {
    title: "Digitalizador de Ideias | Da Ideia à Plataforma Digital",
    description:
      "Transformamos sua ideia em uma plataforma digital completa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-orange-500/30">
        {children}
      </body>
    </html>
  );
}
