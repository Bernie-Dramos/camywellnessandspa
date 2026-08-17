import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CAMY Wellness & Spa is a calm, safe and restorative space for women in Matola A, Mozambique. Find our mission, values, location on Rua dos Escultores N°146, opening hours and contact details.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | CAMY Wellness & Spa",
    description: "Our mission, values and how to find us in Matola A, Mozambique.",
    url: "/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
