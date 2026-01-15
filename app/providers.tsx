"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero
    "hero.title": "CAMY Wellness & Spa",
    "hero.tagline": "Your sanctuary of calm, beauty, and well-being",
    "hero.subtitle": "Dedicated to women's relaxation and self-care in Matola A, Mozambique",
    "hero.cta1": "Book Now",
    "hero.cta2": "Discover Services",

    // Services
    "services.title": "Our Services",
    "services.nails": "Nail Studio",
    "services.massages": "Massages",
    "services.yoga": "Yoga",
    "services.facials": "Facial Care",
    "services.waxing": "Waxing",
    "services.makeup": "Makeup",
    "services.learnmore": "Learn More",

    // About
    "about.title": "About CAMY Wellness & Spa",
    "about.commitment": "Our Commitment",
    "about.commitmentText":
      "CAMY Wellness and Spa is dedicated to providing a calm, safe, and restorative space for women to relax and focus on their well-being. All treatments are carried out with professionalism, care and confidentiality.",
    "about.location": "Location",
    "about.address": "Rua Dos Escultores Nr 146, Matola A, Mozambique",
    "about.contact": "Contact Us",
    "about.phone": "Phone",
    "about.instagram": "Instagram",
    "about.whatsapp": "WhatsApp",

    // Footer
    "footer.hours": "Hours",
    "footer.contact": "Contact",
    "footer.followus": "Follow Us",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2026 CAMY Wellness & Spa. All rights reserved.",
  },
  pt: {
    // Navegação
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.about": "Sobre Nós",
    "nav.contact": "Contato",
    "nav.book": "Marque Agora",

    // Hero
    "hero.title": "CAMY Wellness & Spa",
    "hero.tagline": "O seu santuário de calma, beleza e bem-estar",
    "hero.subtitle": "Dedicado ao relaxamento e autocuidado das mulheres em Matola A, Moçambique",
    "hero.cta1": "Marque Agora",
    "hero.cta2": "Descubra Serviços",

    // Serviços
    "services.title": "Os Nossos Serviços",
    "services.nails": "Estúdio de Unhas",
    "services.massages": "Massagens",
    "services.yoga": "Yoga",
    "services.facials": "Limpeza Facial",
    "services.waxing": "Depilação a Cera",
    "services.makeup": "Maquilhagem",
    "services.learnmore": "Saber Mais",

    // Sobre
    "about.title": "Sobre a CAMY Wellness & Spa",
    "about.commitment": "O Nosso Compromisso",
    "about.commitmentText":
      "A Camy Wellness and Spa dedica-se a proporcionar um espaço calmo, seguro e restaurador para que as mulheres possam relaxar e focar no seu bem-estar. Todos os tratamentos são realizados com profissionalismo, cuidado e confidencialidade.",
    "about.location": "Localização",
    "about.address": "Rua Dos Escultores Nr 146, Matola A, Moçambique",
    "about.contact": "Entre em Contato",
    "about.phone": "Telefone",
    "about.instagram": "Instagram",
    "about.whatsapp": "WhatsApp",

    // Rodapé
    "footer.hours": "Horários",
    "footer.contact": "Contato",
    "footer.followus": "Siga-nos",
    "footer.terms": "Termos e Condições",
    "footer.privacy": "Política de Privacidade",
    "footer.copyright": "© 2026 CAMY Wellness & Spa. Todos os direitos reservados.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("camy-language")
    if (stored === "en" || stored === "pt") {
      setLanguage(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("camy-language", language)
    }
  }, [language, mounted])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
