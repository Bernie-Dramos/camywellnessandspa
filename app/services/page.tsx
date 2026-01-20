"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { ChevronDown } from "lucide-react"

const serviceData = {
  nails: {
    en: "Nail Studio",
    pt: "Estúdio de Unhas",
    items: [
      { service: "Manicure simples", price: "500 MZN" },
      { service: "Manicure com pintura de verniz", price: "900 MZN" },
      { service: "Manicure com pintura de verniz em gel", price: "700 MZN" },
      { service: "Pintura de verniz em gel", price: "600 MZN" },
      { service: "Pintura de verniz", price: "400 MZN" },
      { service: "Overlay com pintura de verniz em gel", price: "900 MZN" },
      { service: "Overlay com pó colorido", price: "800 MZN" },
      { service: "Overlay com pintura de verniz", price: "650 MZN" },
      { service: "Unhas artificiais e pintura de verniz", price: "1100 MZN" },
      { service: "Unhas artificiais e pintura de verniz em gel", price: "900 MZN" },
      { service: "Manutenção simples", price: "1100 MZN" },
      { service: "Manutenção de overlay", price: "750 MZN" },
      { service: "Manutenção com extras", price: "900 MZN" },
    ],
  },
  pedicure: {
    en: "Pedicure Services",
    pt: "Tratamentos para os pés",
    items: [
      { service: "Pedicure simples", price: "900 MZN" },
      { service: "Pedicure com pintura de verniz em gel", price: "750 MZN" },
      { service: "Pedicure com pintura de verniz", price: "450 MZN" },
      { service: "Pintura de verniz em gel", price: "300 MZN" },
      { service: "Pintura de verniz", price: "500 MZN" },
      { service: "Overlay com pintura de verniz em gel", price: "400 MZN" },
      { service: "Overlay com pó colorido", price: "650 MZN" },
      { service: "Overlay com pintura de verniz", price: "400 MZN" },
      { service: "Manutenção de overlay", price: "500 MZN" },
    ],
  },
  biosculpture: {
    en: "BioSculpture",
    pt: "BioSculpture",
    items: [
      { service: "Overlay", price: "1200 MZN" },
      { service: "Overlay com francesinha", price: "1300 MZN" },
      { service: "Francesinha ombré", price: "1350 MZN" },
      { service: "Overlay e tips", price: "1600 MZN" },
      { service: "Verniz Gemini", price: "550 MZN" },
      { service: "Restauração de unha com seda (por unha)", price: "150 MZN" },
      { service: "Restauração de tips com sculpture (por unha)", price: "100 MZN" },
      { service: "Nail art (por unha)", price: "100 MZN" },
      { service: "Remoção de gel BioSculpture", price: "250 MZN" },
      { service: "Remoção de outros produtos", price: "500 MZN" },
      { service: "Manutenção", price: "900 MZN" },
    ],
  },
  combos: {
    en: "Promotional Combos",
    pt: "Combos Promocionais",
    items: [
      { service: "ESSENCIAL: Manicure e pedicure com pintura de verniz", price: "1400 MZN" },
      { service: "HARMONIE: Overlay nas mãos e nos pés com pintura de verniz em gel", price: "1900 MZN" },
      { service: "SERENITÉ: Unhas artificiais com pintura de verniz em gel nas mãos e nos pés", price: "1300 MZN" },
      { service: "LUMINÉ: Manicure e pedicure com pintura de verniz em gel", price: "1700 MZN" },
      { service: "CELESTIA: Unhas artificiais e pedicure com pintura de verniz em gel", price: "1600 MZN" },
    ],
  },
  facials: {
    en: "Facial Care",
    pt: "Tratamento facial",
    items: [
      { service: "Limpeza express", price: "2200 MZN" },
      { service: "Limpeza profunda", price: "1600 MZN" },
    ],
  },
  bodycare: {
    en: "Body Care & Massages",
    pt: "Cuidado Corporal",
    items: [
      { service: "Massagem de relaxamento 30 Minutos", price: "900 MZN" },
      { service: "Massagem de relaxamento 60 Minutos", price: "1600 MZN" },
      { service: "Massagem de relaxamento com pedras quentes", price: "2600 MZN" },
      { service: "Drenagem linfática (localizada) 30 minutos", price: "1600 MZN" },
      { service: "Drenagem linfática 60 minutos", price: "1100 MZN" },
      { service: "Esfoliação corporal", price: "2100 MZN" },
      { service: "Drenagem linfática pós operatória", price: "2100 MZN" },
    ],
  },
  waxing: {
    en: "Waxing Services",
    pt: "Depilação a cera",
    items: [
      { service: "Buço", price: "350 MZN" },
      { service: "Queixo", price: "400 MZN" },
      { service: "Sobrancelhas", price: "400 MZN" },
      { service: "Axílas", price: "500 MZN" },
      { service: "Meia perna", price: "900 MZN" },
      { service: "Perna inteira", price: "700 MZN" },
      { service: "Virilha", price: "700 MZN" },
      { service: "Virilha completa", price: "1000 MZN" },
      { service: "Glúteos", price: "600 MZN" },
      { service: "Braços", price: "800 MZN" },
      { service: "Nariz", price: "400 MZN" },
      { service: "Orelha", price: "400 MZN" },
    ],
  },
  makeup: {
    en: "Makeup",
    pt: "Maquilhagem",
    items: [
      { service: "Natural glam", price: "1700 MZN" },
      { service: "Soft glam", price: "2100 MZN" },
      { service: "Full glam", price: "2800 MZN" },
      { service: "Makeup artística", price: "Sob consulta" },
    ],
  },
  yoga: {
    en: "Yoga Classes",
    pt: "Yoga",
    items: [
      { service: "Aulas individuais", price: "1300 MZN" },
      { service: "Pacote de 4 aulas", price: "4450 MZN" },
      { service: "Pacote de 8 aulas", price: "7300 MZN" },
    ],
  },
  bodyCombo: {
    en: "Body Care Combos",
    pt: "Combos Promocionais",
    items: [
      { service: "GLOW: Limpeza facial express e esfoliação corporal", price: "2900 MZN" },
      {
        service: "REVIVE: Depilação nas axílas, meia perna e massagem de relaxamento com pedras quentes",
        price: "3300 MZN",
      },
      {
        service: "DETOX: Limpeza facial profunda, esfoliação corporal e drenagem linfática de 30 minutos",
        price: "4300 MZN",
      },
    ],
  },
}

type ServiceKey = keyof typeof serviceData

function ServiceCategory({
  categoryKey,
  isOpen,
  onToggle,
}: { categoryKey: ServiceKey; isOpen: boolean; onToggle: () => void }) {
  const { language } = useLanguage()
  const data = serviceData[categoryKey]
  const title = language === "en" ? data.en : data.pt

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-serif font-semibold text-[#1a3c34]">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <div className="space-y-3">
            {data.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start gap-4 pb-3 border-b border-gray-200 last:border-b-0"
              >
                <span className="text-gray-700 flex-1">{item.service}</span>
                <span className="text-[#d4af37] font-semibold whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])
  const { language } = useLanguage()
  const [openCategories, setOpenCategories] = useState<Record<ServiceKey, boolean>>({
    nails: true,
    pedicure: false,
    biosculpture: false,
    combos: false,
    facials: false,
    bodycare: false,
    waxing: false,
    makeup: false,
    yoga: false,
    bodyCombo: false,
  })

  const toggleCategory = (key: ServiceKey) => {
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
          preload="auto"
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
          <div className="mb-12">
            <p className="text-center text-gray-600 text-lg mb-4">
              {language === "en"
                ? "Register each session and receive a gift upon completion"
                : "Registe cada sessão e ao completar receberá um mimo"}
            </p>
            <p className="text-center text-gray-600 text-sm">
              {language === "en"
                ? "Prices subject to change. Nail art may incur extra fees."
                : "Preços sujeitos a alteração. Nail art pode ter custo adicional."}
            </p>
          </div>

          {/* Categories */}
          <div className="rounded-lg shadow-md overflow-hidden border border-gray-200">
            {(Object.keys(serviceData) as ServiceKey[]).map((key) => (
              <ServiceCategory
                key={key}
                categoryKey={key}
                isOpen={openCategories[key]}
                onToggle={() => toggleCategory(key)}
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
