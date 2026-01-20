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
    "hero.title1": "CAMY",
    "hero.title2": "Wellness & Spa",
    "hero.tagline": "Your sanctuary of calm, beauty, and well-being",
    "hero.subtitle": "Dedicated to women's relaxation and self-care in Matola",
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
    "about.title": "About Us",
    "about.commitment": "Our Commitment",
    "about.commitmentText":
      "CAMY Wellness and Spa is dedicated to providing a calm, safe, and restorative space for women to relax and focus on their well-being. All treatments are carried out with professionalism, care and confidentiality.",
    "about.location": "Location",
    "about.address": "Rua Dos Escultores Nr 146, Matola A, Mozambique",
    "about.contact": "Contact Us",
    "about.phone": "Phone",
    "about.instagram": "Instagram",
    "about.whatsapp": "WhatsApp",

    // Footer & Business Hours
    "footer.hours": "Hours",
    "footer.contact": "Contact",
    "footer.followus": "Follow Us",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2026 CAMY Wellness & Spa. All rights reserved.",
    "footer.monday": "Monday - Friday",
    "footer.saturday": "Saturday",
    "footer.sunday": "Sunday",
    "footer.monFriHours": "9:00 AM - 7:00 PM",
    "footer.satHours": "10:00 AM - 5:00 PM",
    "footer.sunHours": "24hr Pre-Booking only",

    // Home Page
    "home.testimonials": "What Our Clients Say",
    "home.treat": "Treat Yourself Today",
    "home.treatDesc": "Discover the perfect service for your wellness journey. Book your appointment now.",
    "home.getInTouch": "Get in Touch",

    // Mission, Vision, Values
    "about.mission": "Mission",
    "about.missionText": "Our mission is to offer a serene escape of refined beauty and wellness.",
    "about.vision": "Vision",
    "about.visionText": "Our vision is to create a space where self care feels natural, elegance feels effortless and well being is always within reach.",
    "about.values": "Values",
    "about.value1Title": "Make elegance effortless",
    "about.value1Desc": "Offering refined experiences without barriers of exclusivity.",
    "about.value2Title": "Deliver Excellence",
    "about.value2Desc": "From our service to atmosphere, reflect skill, dedication and care.",
    "about.value3Title": "Honor Connection",
    "about.value3Desc": "Between beauty, balance, and wellbeing, nurturing mind and body.",
    "about.value4Title": "Tailor Experiences",
    "about.value4Desc": "Every experience to accommodate each client's individuality with warmth.",

    // About Page Legal
    "about.excellence": "Excellence",
    "about.excellenceDesc": "Professional and high-quality services delivered with expertise",
    "about.care": "Care",
    "about.careDesc": "Personalized attention and consideration for every client",
    "about.confidentiality": "Confidentiality",
    "about.confidentialityDesc": "Your privacy and peace of mind are our priority",
    "about.legal": "Legal Information",
    "about.nuit": "NUIT",
    "about.nuel": "NUEL",
    "about.alvara": "Alvará",
    "about.inicioAtiv": "Business Start Date",
    "about.sendMessage": "Send a message",

    // Form Labels
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.serviceInterested": "Service Interested In",
    "form.selectService": "Select a service",
    "form.message": "Message",
    "form.sending": "Sending...",
    "form.sendMessage": "Send Message",
    "form.questions": "Have questions?",
    "form.questionsDesc": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "form.thankyou": "Thank you for your message! We'll be in touch soon.",
  },
  pt: {
    // Navegação
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.about": "Sobre Nós",
    "nav.contact": "Contato",
    "nav.book": "Marque Agora",

    // Hero
    "hero.title1": "CAMY",
    "hero.title2": "Wellness & Spa",
    "hero.tagline": "O seu santuário de calma, beleza e bem-estar",
    "hero.subtitle": "Dedicado ao relaxamento e o cuidado das mulheres na Matola",
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
    "about.title": "Sobre Nos",
    "about.commitment": "O Nosso Compromisso",
    "about.commitmentText":
      "A Camy Wellness and Spa dedica-se a proporcionar um espaço calmo, seguro e restaurador para que as mulheres possam relaxar e focar no seu bem-estar. Todos os tratamentos são realizados com profissionalismo, cuidado e confidencialidade.",
    "about.location": "Localização",
    "about.address": "Rua Dos Escultores Nr 146, Matola A, Moçambique",
    "about.contact": "Entre em Contato",
    "about.phone": "Telefone",
    "about.instagram": "Instagram",
    "about.whatsapp": "WhatsApp",

    // Rodapé e Horário de Funcionamento
    "footer.hours": "Horários",
    "footer.contact": "Contato",
    "footer.followus": "Siga-nos",
    "footer.terms": "Termos e Condições",
    "footer.privacy": "Política de Privacidade",
    "footer.copyright": "© 2026 CAMY Wellness & Spa. Todos os direitos reservados.",
    "footer.monday": "Segunda - Sexta",
    "footer.saturday": "Sábado",
    "footer.sunday": "Domingo",
    "footer.monFriHours": "9:00 - 19:00",
    "footer.satHours": "10:00 - 17:00",
    "footer.sunHours": "Apenas por pré-marcação de 24h",

    // Página Inicial
    "home.testimonials": "O Que Nossos Clientes Dizem",
    "home.treat": "Trate-se Hoje",
    "home.treatDesc": "Descubra o serviço perfeito para sua jornada de bem-estar. Marque seu compromisso agora.",
    "home.getInTouch": "Entre em Contato",

    // Missão, Visão, Valores
    "about.mission": "Missão",
    "about.missionText": "Oferecer um refúgio sereno de beleza refinada e bem-estar.",
    "about.vision": "Visão",
    "about.visionText": "Nossa visão é criar um espaço onde o autocuidado seja normalizado, a elegância seja simples e o bem-estar esteja sempre ao seu alcance.",
    "about.values": "Valores",
    "about.value1Title": "Tornar a elegância algo fácil",
    "about.value1Desc": "Oferecendo experiências refinadas sem barreiras de exclusividade.",
    "about.value2Title": "Oferecer excelência",
    "about.value2Desc": "Em nossos serviços e ambiente, refletindo habilidade, dedicação e cuidado.",
    "about.value3Title": "Honrar a conexão",
    "about.value3Desc": "Entre a beleza, o equilíbrio e o bem-estar, nutrindo a mente e o corpo.",
    "about.value4Title": "Adaptar experiências",
    "about.value4Desc": "Cada experiência para acomodar a individualidade de cada cliente com aconchego.",

    // Página Sobre - Informações Legais
    "about.excellence": "Excelência",
    "about.excellenceDesc": "Serviços profissionais e de alta qualidade entregues com experiência",
    "about.care": "Cuidado",
    "about.careDesc": "Atenção personalizada e consideração para cada cliente",
    "about.confidentiality": "Confidencialidade",
    "about.confidentialityDesc": "Sua privacidade e tranquilidade são nossa prioridade",
    "about.legal": "Informações Legais",
    "about.nuit": "NUIT",
    "about.nuel": "NUEL",
    "about.alvara": "Alvará",
    "about.inicioAtiv": "Data de Início de Atividade",
    "about.sendMessage": "Enviar uma mensagem",

    // Labels de Formulário
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.phone": "Telefone",
    "form.serviceInterested": "Serviço de Interesse",
    "form.selectService": "Selecione um serviço",
    "form.message": "Mensagem",
    "form.sending": "Enviando...",
    "form.sendMessage": "Enviar Mensagem",
    "form.questions": "Tem perguntas?",
    "form.questionsDesc": "Adoraríamos ouvir você. Envie-nos uma mensagem e responderemos o mais breve possível.",
    "form.thankyou": "Obrigado pela sua mensagem! Entraremos em contato em breve.",
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
