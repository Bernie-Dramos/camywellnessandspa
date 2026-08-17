"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { Download } from "lucide-react"
import { ServicesCategory } from "@/components/services-category"
import { serviceCategories } from "@/lib/services-data"






export default function Services() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])
  const { language } = useLanguage()
  // All categories start closed. Prices are still present in the HTML for
  // search engines -- ServicesCategory collapses with `hidden` rather than
  // unmounting -- so nothing needs to be open by default.
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})
  const toggleCategory = (key: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-208 flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/sala.jpg"
        >
          <source src="/sala.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay removed as requested */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-2">
            {language === "en" ? "Our Services" : "Os Nossos Serviços"}
          </h1>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info message moved to bottom of page */}

          {/* Main Categories as images with names below, animated on hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {serviceCategories.map((cat) => (
              <ServicesCategory
                key={cat.key}
                category={cat}
                isOpen={!!openCategories[cat.key]}
                onToggle={() => toggleCategory(cat.key)}
                language={language}
              />
            ))}
          </div>

          {/* Loyalty Card Info */}
          <div className="mt-12 bg-linear-to-r from-[#f8f5f0] to-white p-8 rounded-lg border border-[#d4af37]/30 flex flex-col md:flex-row items-center gap-8">
            <img
              src="/Loyalty%20Card.png"
              alt={language === "en" ? "Loyalty Card" : "Cartão de Fidelidade"}
              className="w-70 h-auto rounded-lg shadow-md border border-[#d4af37]/40 mb-6 md:mb-0"
            />
            <div>
              <h3 className="text-2xl font-serif font-semibold text-[#1a3c34] mb-4">
                {language === "en" ? "Loyalty Rewards" : "Recompensas de Fidelidade"}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === "en"
                  ? "Earn rewards with every visit! Register each session and receive exclusive gifts upon completion. Enjoy our 25% loyalty discount on selected services."
                  : "Ganhe recompensas a cada visita! Registe cada sessão e receba presentes exclusivos ao completar. Aproveite nosso desconto de fidelidade de 25% em serviços selecionados."}
              </p>
              <p className="text-[#d4af37] font-semibold">
                {language === "en" ? "Follow us @camywellnessspa" : "Siga-nos @camywellnessspa"}
              </p>
            </div>
          </div>

          {/* Downloadable price list */}
          <div className="mt-8 flex justify-center">
            <a
              href="/camy-price-list-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#1a3c34] font-medium rounded hover:bg-[#f8f5f0] transition-colors"
            >
              <Download className="w-4 h-4 text-[#d4af37]" />
              {language === "en" ? "Download the 2026 price list (PDF)" : "Descarregar a lista de preços 2026 (PDF)"}
            </a>
          </div>

          {/* Info message moved here */}
          <div className="mt-8 mb-2">
            <p className="text-center text-gray-600 text-lg mb-2">
              {language === "en"
                ? "Register each session and receive a gift upon completion"
                : "Registe cada sessão e ao completar receberá um mimo"}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
