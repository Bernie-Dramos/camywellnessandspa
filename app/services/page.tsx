"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { ServicesCategory } from "@/components/services-category"

const mainCategories = [
  {
    key: "nailStudio",
    en: "Nail Studio",
    pt: "Estúdio de Unhas",
    image: "/unhas_piscina.jpg",
    subcategories: [
      {
        en: "Manicure & Nails",
        pt: "Manicure & Unhas",
        items: [
          { en: "Simple Manicure", pt: "Manicure simples", price: "500 MZN" },
          { en: "Manicure with polish", pt: "Manicure com pintura de verniz", price: "900 MZN" },
          { en: "Manicure with gel polish", pt: "Manicure com pintura de verniz em gel", price: "700 MZN" },
          { en: "Gel polish", pt: "Pintura de verniz em gel", price: "600 MZN" },
          { en: "Polish", pt: "Pintura de verniz", price: "400 MZN" },
          { en: "Overlay with gel polish", pt: "Overlay com pintura de verniz em gel", price: "900 MZN" },
          { en: "Overlay with color powder", pt: "Overlay com pó colorido", price: "800 MZN" },
          { en: "Overlay with polish", pt: "Overlay com pintura de verniz", price: "650 MZN" },
          { en: "Artificial nails with polish", pt: "Unhas artificiais e pintura de verniz", price: "1100 MZN" },
          { en: "Artificial nails with gel polish", pt: "Unhas artificiais e pintura de verniz em gel", price: "900 MZN" },
          { en: "Simple maintenance", pt: "Manutenção simples", price: "1100 MZN" },
          { en: "Overlay maintenance", pt: "Manutenção de overlay", price: "750 MZN" },
          { en: "Maintenance with extras", pt: "Manutenção com extras", price: "900 MZN" },
        ],
      },
      {
        en: "Pedicure",
        pt: "Pedicure",
        items: [
          { en: "Simple Pedicure", pt: "Pedicure simples", price: "900 MZN" },
          { en: "Pedicure with gel polish", pt: "Pedicure com pintura de verniz em gel", price: "750 MZN" },
          { en: "Pedicure with polish", pt: "Pedicure com pintura de verniz", price: "450 MZN" },
          { en: "Gel polish", pt: "Pintura de verniz em gel", price: "300 MZN" },
          { en: "Polish", pt: "Pintura de verniz", price: "500 MZN" },
          { en: "Overlay with gel polish", pt: "Overlay com pintura de verniz em gel", price: "400 MZN" },
          { en: "Overlay with color powder", pt: "Overlay com pó colorido", price: "650 MZN" },
          { en: "Overlay with polish", pt: "Overlay com pintura de verniz", price: "400 MZN" },
          { en: "Overlay maintenance", pt: "Manutenção de overlay", price: "500 MZN" },
        ],
      },
      {
        en: "BioSculpture",
        pt: "BioSculpture",
        items: [
          { en: "Overlay", pt: "Overlay", price: "1200 MZN" },
          { en: "Overlay with French", pt: "Overlay com francesinha", price: "1300 MZN" },
          { en: "French ombré", pt: "Francesinha ombré", price: "1350 MZN" },
          { en: "Overlay and tips", pt: "Overlay e tips", price: "1600 MZN" },
          { en: "Gemini polish", pt: "Verniz Gemini", price: "550 MZN" },
          { en: "Silk nail repair (per nail)", pt: "Restauração de unha com seda (por unha)", price: "150 MZN" },
          { en: "Tips repair with sculpture (per nail)", pt: "Restauração de tips com sculpture (por unha)", price: "100 MZN" },
          { en: "Nail art (per nail)", pt: "Nail art (por unha)", price: "100 MZN" },
          { en: "BioSculpture gel removal", pt: "Remoção de gel BioSculpture", price: "250 MZN" },
          { en: "Other product removal", pt: "Remoção de outros produtos", price: "500 MZN" },
          { en: "Maintenance", pt: "Manutenção", price: "900 MZN" },
        ],
      },
      {
        en: "Promotional Combos",
        pt: "Combos Promocionais",
        items: [
          { en: "ESSENCIAL: Manicure and pedicure with polish", pt: "ESSENCIAL: Manicure e pedicure com pintura de verniz", price: "1400 MZN" },
          { en: "HARMONIE: Overlay on hands and feet with gel polish", pt: "HARMONIE: Overlay nas mãos e nos pés com pintura de verniz em gel", price: "1900 MZN" },
          { en: "SERENITÉ: Artificial nails with gel polish on hands and feet", pt: "SERENITÉ: Unhas artificiais com pintura de verniz em gel nas mãos e nos pés", price: "1300 MZN" },
          { en: "LUMINÉ: Manicure and pedicure with gel polish", pt: "LUMINÉ: Manicure e pedicure com pintura de verniz em gel", price: "1700 MZN" },
          { en: "CELESTIA: Artificial nails and pedicure with gel polish", pt: "CELESTIA: Unhas artificiais e pedicure com pintura de verniz em gel", price: "1600 MZN" },
        ],
      },
    ],
  },
  {
    key: "bodyCare",
    en: "Body Care",
    pt: "Cuidados Corporais",
    image: "/face-care.jpg",
    subcategories: [
      {
        en: "Massages & Body Treatments",
        pt: "Massagens & Tratamentos Corporais",
        items: [
          { en: "30-min Relaxation Massage", pt: "Massagem de relaxamento 30 Minutos", price: "900 MZN" },
          { en: "60-min Relaxation Massage", pt: "Massagem de relaxamento 60 Minutos", price: "1600 MZN" },
          { en: "Hot stone relaxation massage", pt: "Massagem de relaxamento com pedras quentes", price: "2600 MZN" },
          { en: "Localized lymphatic drainage 30 min", pt: "Drenagem linfática (localizada) 30 minutos", price: "1600 MZN" },
          { en: "Lymphatic drainage 60 min", pt: "Drenagem linfática 60 minutos", price: "1100 MZN" },
          { en: "Body exfoliation", pt: "Esfoliação corporal", price: "2100 MZN" },
          { en: "Post-op lymphatic drainage", pt: "Drenagem linfática pós operatória", price: "2100 MZN" },
        ],
      },
      {
        en: "Waxing",
        pt: "Depilação a cera",
        items: [
          { en: "Upper lip", pt: "Buço", price: "350 MZN" },
          { en: "Chin", pt: "Queixo", price: "400 MZN" },
          { en: "Eyebrows", pt: "Sobrancelhas", price: "400 MZN" },
          { en: "Armpits", pt: "Axílas", price: "500 MZN" },
          { en: "Half leg", pt: "Meia perna", price: "900 MZN" },
          { en: "Full leg", pt: "Perna inteira", price: "700 MZN" },
          { en: "Bikini", pt: "Virilha", price: "700 MZN" },
          { en: "Full bikini", pt: "Virilha completa", price: "1000 MZN" },
          { en: "Glutes", pt: "Glúteos", price: "600 MZN" },
          { en: "Arms", pt: "Braços", price: "800 MZN" },
          { en: "Nose", pt: "Nariz", price: "400 MZN" },
          { en: "Ear", pt: "Orelha", price: "400 MZN" },
        ],
      },
      {
        en: "Body Care Combos",
        pt: "Combos de Cuidado Corporal",
        items: [
          { en: "GLOW: Express facial cleansing and body exfoliation", pt: "GLOW: Limpeza facial express e esfoliação corporal", price: "2900 MZN" },
          { en: "REVIVE: Armpit, half leg waxing and hot stone massage", pt: "REVIVE: Depilação nas axílas, meia perna e massagem de relaxamento com pedras quentes", price: "3300 MZN" },
          { en: "DETOX: Deep facial cleansing, body exfoliation and 30-min lymphatic drainage", pt: "DETOX: Limpeza facial profunda, esfoliação corporal e drenagem linfática de 30 minutos", price: "4300 MZN" },
        ],
      },
    ],
  },
  {
    key: "wellbeing",
    en: "Wellbeing & Alignment",
    pt: "Bem-Estar e Alinhamento",
    image: "/yoga-1.jpg",
    subcategories: [
      {
        en: "Yoga Classes",
        pt: "Aulas de Yoga",
        items: [
          { en: "Individual classes", pt: "Aulas individuais", price: "1300 MZN" },
          { en: "4-class package", pt: "Pacote de 4 aulas", price: "4450 MZN" },
          { en: "8-class package", pt: "Pacote de 8 aulas", price: "7300 MZN" },
        ],
      },
    ],
  },
  {
    key: "beauty",
    en: "Beauty Treatments",
    pt: "Tratamentos de Beleza",
    image: "/makeup-1.jpg",
    subcategories: [
      {
        en: "Facial Care",
        pt: "Tratamento facial",
        items: [
          { en: "Express cleansing", pt: "Limpeza express", price: "2200 MZN" },
          { en: "Deep cleansing", pt: "Limpeza profunda", price: "1600 MZN" },
        ],
      },
      {
        en: "Makeup",
        pt: "Maquilhagem",
        items: [
          { en: "Natural glam", pt: "Natural glam", price: "1700 MZN" },
          { en: "Soft glam", pt: "Soft glam", price: "2100 MZN" },
          { en: "Full glam", pt: "Full glam", price: "2800 MZN" },
          { en: "Artistic makeup", pt: "Makeup artística", price: "Sob consulta" },
        ],
      },
    ],
  },
]





export default function Services() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])
  const { language } = useLanguage()
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
          {/* Info message moved to bottom of page */}

          {/* Main Categories as images with names below, animated on hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mainCategories.map((cat) => (
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

          {/* Info message moved here */}
          <div className="mt-8 mb-2">
            <p className="text-center text-gray-600 text-lg mb-2">
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
