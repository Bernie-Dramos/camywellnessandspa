import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services & Prices",
  description:
    "Full 2026 price list for CAMY Wellness & Spa in Matola A: nail studio, Bio Sculpture, massages, lymphatic drainage, cavitation & radiofrequency, waxing, facial cleansing, yoga, hidroginástica and makeup. Prices in MZN.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Prices | CAMY Wellness & Spa",
    description: "Our full 2026 price list — nails, body care, wellbeing and beauty treatments in Matola A.",
    url: "/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
