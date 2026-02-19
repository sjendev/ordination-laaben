import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ordination Sang – Internistische & Kardiologische Facharztordination",
  description: "Expert medical care with a personal touch in Brand-Laaben. Dr. Sang specializes in Internal Medicine and Cardiology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,0,0&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#F5F6F0]`} style={{ backgroundColor: '#F5F6F0' }}>
        <LanguageProvider>
          <SiteLayout>
            {children}
          </SiteLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
