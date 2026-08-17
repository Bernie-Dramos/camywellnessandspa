"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { ServicesCategory } from "@/components/services-category"

// Prices below reflect the official "Lista de Preços - 2026" price list.
// Source of truth: Assets/preços.pdf. Keep this file in sync whenever the PDF is reissued.
const mainCategories = [
  {
    key: "nailStudio",
    en: "Nail Studio",
    pt: "Estúdio de Unhas",
    image: "/unhas_piscina.jpg",
    subcategories: [
      {
        en: "Hand Treatments",
        pt: "Tratamentos para as mãos",
        items: [
          { en: "Simple Manicure", pt: "Manicure simples", price: "600 MZN" },
          { en: "Manicure with polish", pt: "Manicure com pintura de verniz", price: "800 MZN" },
          { en: "Manicure with gel polish", pt: "Manicure com pintura de verniz em gel", price: "1000 MZN" },
          { en: "Gel polish", pt: "Pintura de verniz em gel", price: "700 MZN" },
          { en: "Polish", pt: "Pintura de verniz", price: "500 MZN" },
          { en: "Overlay with gel polish", pt: "Overlay com pintura de verniz em gel", price: "1000 MZN" },
          { en: "Overlay with color powder", pt: "Overlay com pó colorido", price: "900 MZN" },
          { en: "Overlay with polish", pt: "Overlay com pintura de verniz", price: "750 MZN" },
          { en: "Artificial nails with polish", pt: "Unhas artificiais e pintura de verniz", price: "1000 MZN" },
          { en: "Artificial nails with gel polish", pt: "Unhas artificiais e pintura de verniz em gel", price: "1200 MZN" },
          { en: "Simple maintenance", pt: "Manutenção simples", price: "1000 MZN" },
          { en: "Overlay maintenance", pt: "Manutenção de overlay", price: "850 MZN" },
          { en: "Maintenance with extras", pt: "Manutenção com extras", price: "1000 MZN" },
          { en: "Removal", pt: "Remoção", price: "400 MZN" },
        ],
      },
      {
        en: "Foot Treatments",
        pt: "Tratamentos para os pés",
        items: [
          { en: "Simple Pedicure", pt: "Pedicure simples", price: "950 MZN" },
          { en: "Pedicure with gel polish", pt: "Pedicure com pintura de verniz em gel", price: "1200 MZN" },
          { en: "Pedicure with polish", pt: "Pedicure com pintura de verniz", price: "1000 MZN" },
          { en: "Gel polish", pt: "Pintura de verniz em gel", price: "550 MZN" },
          { en: "Polish", pt: "Pintura de verniz", price: "400 MZN" },
          { en: "Overlay with gel polish", pt: "Overlay com pintura de verniz em gel", price: "850 MZN" },
          { en: "Overlay with color powder", pt: "Overlay com pó colorido", price: "750 MZN" },
          { en: "Overlay with polish", pt: "Overlay com pintura de verniz", price: "500 MZN" },
          { en: "Overlay maintenance", pt: "Manutenção de overlay", price: "600 MZN" },
          { en: "Removal", pt: "Remoção", price: "300 MZN" },
          { en: "30-minute massage", pt: "Massagem de 30 minutos", price: "750 MZN" },
        ],
      },
      {
        en: "Bio Sculpture",
        pt: "Bio Sculpture",
        items: [
          { en: "Overlay", pt: "Overlay", price: "1300 MZN" },
          { en: "Overlay with French", pt: "Overlay com francesinha", price: "1400 MZN" },
          { en: "French ombré", pt: "Francesinha ombré", price: "1450 MZN" },
          { en: "Overlay and tips", pt: "Overlay e tips", price: "1700 MZN" },
          { en: "Gemini polish", pt: "Verniz Gemini", price: "650 MZN" },
          { en: "Silk nail repair (per nail)", pt: "Restauração de unha com seda (por unha)", price: "250 MZN" },
          { en: "Tips repair with sculpture (per nail)", pt: "Restauração de tips com sculpture (por unha)", price: "200 MZN" },
          { en: "Nail art (per nail)", pt: "Nail art (por unha)", price: "200 MZN" },
          { en: "Bio Sculpture gel removal", pt: "Remoção de gel Bio Sculpture", price: "350 MZN" },
          { en: "Other product removal", pt: "Remoção de outros produtos", price: "600 MZN" },
          { en: "Maintenance", pt: "Manutenção", price: "1000 MZN" },
        ],
      },
      {
        en: "Promotional Combos",
        pt: "Combos Promocionais",
        items: [
          { en: "ESSENCIAL: Manicure and pedicure with polish", pt: "ESSENCIAL: Manicure e pedicure com pintura de verniz", price: "1400 MZN" },
          { en: "HARMONIE: Overlay on hands and feet with gel polish", pt: "HARMONIE: Overlay nas mãos e nos pés com pintura de verniz em gel", price: "1500 MZN" },
          { en: "SERENITÉ: Artificial nails with gel polish on hands and feet", pt: "SERENITÉ: Unhas artificiais com pintura de verniz em gel nas mãos e nos pés", price: "1700 MZN" },
          { en: "LUMINÉ: Manicure and pedicure with gel polish", pt: "LUMINÉ: Manicure e pedicure com pintura de verniz em gel", price: "1800 MZN" },
          { en: "CELESTIA: Artificial nails and pedicure with gel polish", pt: "CELESTIA: Unhas artificiais e pedicure com pintura de verniz em gel", price: "2000 MZN" },
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
          { en: "30-min Relaxation Massage", pt: "Massagem de relaxamento 30 Minutos", price: "1000 MZN" },
          { en: "60-min Relaxation Massage", pt: "Massagem de relaxamento 60 Minutos", price: "1700 MZN" },
          { en: "Hot stone relaxation massage", pt: "Massagem de relaxamento com pedras quentes", price: "2700 MZN" },
          { en: "Post-op lymphatic drainage", pt: "Drenagem linfática pós-operatória", price: "1700 MZN" },
          { en: "Localized lymphatic drainage 30 min", pt: "Drenagem linfática (localizada) 30 minutos", price: "1200 MZN" },
          { en: "Lymphatic drainage 60 min", pt: "Drenagem linfática 60 minutos", price: "2200 MZN" },
          { en: "Body exfoliation", pt: "Esfoliação corporal", price: "2200 MZN" },
          { en: "Premium body exfoliation", pt: "Esfoliação corporal premium", price: "2600 MZN" },
        ],
      },
      {
        en: "Cavitation & Radiofrequency Massage",
        pt: "Massagem de Cavitação e Radiofrequência",
        items: [
          { en: "1 full-body massage session", pt: "1 Sessão de Massagem todo o Corpo", price: "3000 MZN" },
          { en: "10 full-body massage sessions", pt: "10 Sessões de Massagem todo o Corpo", price: "25000 MZN" },
          { en: "1 face massage session", pt: "1 sessão de massagem no rosto", price: "1000 MZN" },
          { en: "10 face massage sessions", pt: "10 sessões de massagens no rosto", price: "8000 MZN" },
          { en: "1 arm massage session", pt: "1 sessão de massagem nos braços", price: "1300 MZN" },
          { en: "10 arm massage sessions", pt: "10 sessões de massagens nos braços", price: "11000 MZN" },
          { en: "1 stomach massage session", pt: "1 sessão de massagem na barriga", price: "1500 MZN" },
          { en: "10 stomach massage sessions", pt: "10 sessões de massagens na barriga", price: "13000 MZN" },
          { en: "1 leg massage session", pt: "1 sessão de massagem nas pernas", price: "1700 MZN" },
          { en: "10 leg massage sessions", pt: "10 sessões de massagens nas pernas", price: "15000 MZN" },
        ],
      },
      {
        en: "Facial Care",
        pt: "Tratamento facial",
        items: [
          { en: "Express cleansing", pt: "Limpeza express", price: "1700 MZN" },
          { en: "Deep cleansing", pt: "Limpeza profunda", price: "2300 MZN" },
        ],
      },
      {
        en: "Waxing",
        pt: "Depilação a cera",
        items: [
          { en: "Upper lip", pt: "Buço", price: "450 MZN" },
          { en: "Chin", pt: "Queixo", price: "500 MZN" },
          { en: "Eyebrows", pt: "Sobrancelhas", price: "500 MZN" },
          { en: "Armpits", pt: "Axilas", price: "600 MZN" },
          { en: "Half leg", pt: "Meia perna", price: "800 MZN" },
          { en: "Full leg", pt: "Perna inteira", price: "1000 MZN" },
          { en: "Bikini", pt: "Virilha", price: "800 MZN" },
          { en: "Full bikini", pt: "Virilha completa", price: "1100 MZN" },
          { en: "Glutes", pt: "Glúteos", price: "700 MZN" },
          { en: "Arms", pt: "Braços", price: "900 MZN" },
          { en: "Nose", pt: "Nariz", price: "500 MZN" },
          { en: "Ear", pt: "Orelha", price: "500 MZN" },
        ],
      },
      {
        en: "Body Care Combos",
        pt: "Combos de Cuidado Corporal",
        items: [
          { en: "GLOW: Express facial cleansing and body exfoliation", pt: "GLOW: Limpeza facial express e esfoliação corporal", price: "3000 MZN" },
          { en: "REVIVE: Armpit, half leg waxing and hot stone massage", pt: "REVIVE: Depilação das axilas, meia perna e massagem com pedras quentes", price: "3400 MZN" },
          { en: "DETOX: Deep facial cleansing, body exfoliation and 30-min localized lymphatic drainage", pt: "DETOX: Limpeza facial profunda, esfoliação corporal e drenagem linfática localizada de 30 minutos", price: "4400 MZN" },
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
        en: "Yoga",
        pt: "Yoga",
        items: [
          { en: "Individual classes", pt: "Aulas individuais", price: "1400 MZN" },
          { en: "4-class package", pt: "Pacote de 4 aulas", price: "4550 MZN" },
          { en: "8-class package", pt: "Pacote de 8 aulas", price: "7400 MZN" },
        ],
        noteEn: "NOTE: Each package is valid for 30 days from the date of purchase.",
        notePt: "OBS: Cada pacote é válido por 30 dias após a compra.",
      },
      {
        en: "Aqua Aerobics",
        pt: "Hidroginástica",
        items: [
          { en: "Monthly package of 8 classes", pt: "Pacote Mensal de 8 aulas", price: "4100 MZN" },
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
        en: "Makeup",
        pt: "Maquilhagem",
        items: [
          { en: "Natural Glam", pt: "Natural Glam", price: "1800 MZN" },
          { en: "Soft Glam", pt: "Soft Glam", price: "2200 MZN" },
          { en: "Full Glam", pt: "Full Glam", price: "2900 MZN" },
          { en: "Artistic makeup", pt: "Makeup Artística", price: "Sob consulta", priceEn: "On request" },
          { en: "Bridal makeup", pt: "Maquilhagem de noiva", price: "Sob consulta", priceEn: "On request" },
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
  // Open the first category by default so prices are visible on load.
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    [mainCategories[0].key]: true,
  })
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
