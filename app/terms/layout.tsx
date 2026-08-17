import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for CAMY Wellness & Spa: booking and deposit policy, cancellations, health and safety, payment and pricing, vouchers and privacy.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | CAMY Wellness & Spa",
    description: "Booking, cancellation, payment and privacy terms.",
    url: "/terms",
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
