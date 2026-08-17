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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/salao-unhas.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/sala.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/reception.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
