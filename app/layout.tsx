import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "./providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CAMY Wellness & Spa - Women's Relaxation & Self-Care in Mozambique",
  description:
    "Discover CAMY Wellness & Spa in Matola A, Mozambique. Indulge in professional spa services including nails, massages, yoga, and facial care. Your sanctuary of calm, beauty, and well-being.",
  generator: "v0.app",
  keywords: ["spa", "wellness", "massage", "yoga", "nails", "Mozambique", "Matola"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "CAMY Wellness & Spa",
    description: "Your sanctuary of calm, beauty, and well-being",
    url: "https://camy-wellness.com",
    siteName: "CAMY Wellness & Spa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334089393-b8ca6b5d81a5?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
