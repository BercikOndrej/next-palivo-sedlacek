import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Footer from "./Footer";
import CheatAlertDialog from "@/components/cheat-alert-dialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palivo Sedláček | Prodej palivového dříví",
  description: 'Jsme regionální firma zabývající se výrobou a prodejem zejména suchého kvalitního palivového dříví za přiznívé ceny. Nabízíme měkké a tvrdé listnaté dříví v délkách dle vašich požadavků. S výběrem ideálního druhu dřeva Vám rádi poradíme. Po telefonické domluvě Vás rádi uvítáme i mimo otevírací dobu.',
  authors: [{ name: 'Ondřej Berčík' }],
  keywords: 'prodej, palivové dříví, dříví, palivové dřevo, dřevo, topné dříví, topné dřevo, Kroměříž, štípané dříví, štípané dřevo, skládané dříví, skládané dřevo, tvrdé dříví, tvrdé dřevo, měkké dříví, měkké dřevo, paletované dříví, piliny, listaté dřevo, listnaté dříví, jasan, buk, dub, smrk, olše, lípa, bříza, kvalitní dříví, kvalitní dřevo, suché dříví, suché dřevo, metrové dříví, metrové dřevo, prm sypaný, prm skládaný'.split(', '),
  icons: {
    icon: '/metadata/favicon.ico',
    shortcut: '/metadata/favicon.ico'
  },
  openGraph: {
    type: 'website',
    locale: 'cs',
    url: 'https://palivosedlacek.cz',
    images: [
      {
        url: '/metadata/og-tags-image.jpeg'
      }
    ],
    title: 'Palivo Sedláček',
    description: 'Výroba a prodej suchého kvalitního palivového dříví v Kroměříži'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <main>
          {children}
        </main>
        <CheatAlertDialog />
        <Toaster richColors closeButton position="top-center" />
        <Footer />
      </body> 
    </html>
  );
}
