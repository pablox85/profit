import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Profit Pinamar Suplementos | Suplementos deportivos en Uruguay",
    template: "%s | Profit Pinamar Suplementos",
  },
  description:
    "Tienda de suplementos deportivos en Pinamar, Canelones. Proteínas, creatinas, combos y accesorios con asesoramiento personalizado y envíos a todo Uruguay.",
  keywords: [
    "suplementos deportivos Uruguay",
    "proteína whey",
    "creatina monohidratada",
    "Profit Pinamar",
    "suplementos Canelones",
  ],
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: siteUrl,
    siteName: brand.name,
    title: "Profit Pinamar Suplementos",
    description: "Proteínas, creatinas, combos y asesoramiento por WhatsApp.",
    images: [
      {
        url: "/images/profit001.jpeg",
        width: 1200,
        height: 1200,
        alt: "Promo lanzamiento Profit Pinamar Suplementos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Pinamar Suplementos",
    description: "Suplementos originales con envíos a todo Uruguay.",
    images: ["/images/profit001.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    url: siteUrl,
    telephone: brand.phone,
    email: brand.email,
    image: `${siteUrl}/images/profit001.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pinamar",
      addressRegion: "Canelones",
      addressCountry: "UY",
    },
    sameAs: ["https://www.instagram.com/profitpinamar"],
  };

  return (
    <html lang="es-UY" className={inter.variable}>
      <body>
        <AnalyticsScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
