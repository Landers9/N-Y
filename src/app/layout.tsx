import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Nyquist-Shannon | Cybersécurité, GRC & Confiance Numérique en Afrique",
  description:
    "Cabinet de conseil indépendant spécialisé en Gouvernance, Risques et Conformité (GRC), identité numérique, signature électronique et souveraineté numérique en Afrique.",
  keywords: [
    "cybersécurité",
    "GRC",
    "gouvernance",
    "risques",
    "conformité",
    "Afrique",
    "identité numérique",
    "signature électronique",
    "RGPD",
    "OHADA",
    "vCISO",
    "Nyquist-Shannon",
  ],
  openGraph: {
    title: "Nyquist-Shannon | Construire la confiance numérique en Afrique",
    description:
      "Gouvernance, Risques et Conformité (GRC), identité numérique, signature électronique et souveraineté numérique.",
    url: "https://nyquist-shannon.net",
    siteName: "Nyquist-Shannon",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
