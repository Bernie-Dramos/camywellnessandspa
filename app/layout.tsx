import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "./providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = "https://www.camyspa.co.mz"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CAMY Wellness & Spa - Women's Relaxation & Self-Care in Mozambique",
    template: "%s | CAMY Wellness & Spa",
  },
  description:
    "Discover CAMY Wellness & Spa in Matola A, Mozambique. Indulge in professional spa services including nails, massages, yoga, and facial care. Your sanctuary of calm, beauty, and well-being.",
  keywords: ["spa", "wellness", "massage", "yoga", "nails", "Mozambique", "Matola"],
  alternates: { canonical: "/" },
  icons: {
    icon: "/Camy_Spa_Logo.png",
    apple: "/Camy_Spa_Logo.png",
  },
  openGraph: {
    title: "CAMY - Wellness & Spa",
    description: "Your sanctuary of calm, beauty, and well-being",
    url: "/",
    siteName: "CAMY - Wellness & Spa",
    type: "website",
    locale: "pt_MZ",
    images: [
      {
        url: "/og-camy.jpg",
        width: 1200,
        height: 630,
        alt: "CAMY Wellness & Spa - The Art of Feeling Good",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAMY - Wellness & Spa",
    description: "Your sanctuary of calm, beauty, and well-being",
    images: ["/og-camy.jpg"],
  },
}

// Structured data for local search. Geo coordinates are deliberately omitted
// until the real ones are confirmed -- the About page map still carries
// placeholder coordinates that point to the wrong province.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: "CAMY Wellness & Spa",
  description:
    "A calm, safe and restorative space for women in Matola A, Mozambique, offering nail studio, massage, body care, waxing, facial treatments, yoga and makeup services.",
  url: SITE_URL,
  image: `${SITE_URL}/og-camy.jpg`,
  logo: `${SITE_URL}/Camy_Spa_Logo.png`,
  telephone: "+258841921846",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua dos Escultores N°146",
    addressLocality: "Matola A",
    addressCountry: "MZ",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "200 - 25000 MZN",
  currenciesAccepted: "MZN",
  paymentAccepted: "Bank transfer, Mpesa, Card",
  sameAs: ["https://instagram.com/camywellnessspa"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
