import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "./providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CAMY Wellness & Spa - Women's Relaxation & Self-Care in Mozambique",
  description:
    "Discover CAMY Wellness & Spa in Matola A, Mozambique. Indulge in professional spa services including nails, massages, yoga, and facial care. Your sanctuary of calm, beauty, and well-being.",
  keywords: ["spa", "wellness", "massage", "yoga", "nails", "Mozambique", "Matola"],
  icons: {
    icon: "/Camy_Spa_Logo.png",
    apple: "/Camy_Spa_Logo.png",
  },
  openGraph: {
    title: "CAMY - Wellness & Spa",
    description: "Your sanctuary of calm, beauty, and well-being",
    url: "https://camyspa.co.mz",
    siteName: "CAMY - Wellness & Spa",
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
        <link rel="icon" href="/Camy_Spa_Logo.png" type="image/png" />
        <link rel="shortcut icon" href="/Camy_Spa_Logo.png" type="image/png" />
        <meta itemProp="image" content="/Camy_Spa_Logo.png" />
        <meta property="og:image" content="/Camy_Spa_Logo.png" />
        <meta name="twitter:image" content="/Camy_Spa_Logo.png" />
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
