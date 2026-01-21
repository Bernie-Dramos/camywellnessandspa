"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { Flower2, Sparkles, Palmtree, Heart } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Flower2,
    en: "Nail Studio",
    pt: "Estúdio de Unhas",
    descEn: "Professional manicure, pedicure, and nail art services",
    descPt: "Serviços profissionais de manicure, pedicure e nail art",
    image: "/unhas_laranjas.jpg",
  },
  {
    id: 2,
    icon: Sparkles,
    en: "Body Care",
    pt: "Cuidados Corporais",
    descEn: "Relaxing massages and therapeutic treatments",
    descPt: "Massagens relaxantes e tratamentos terapêuticos",
    image: "/toalhas.jpg",
  },
  {
    id: 3,
    icon: Palmtree,
    en: "Wellbeing & Alignment",
    pt: "Bem-Estar e Alinhamento",
    descEn: "Individual and group wellness classes",
    descPt: "Aulas de bem-estar individuais e em grupo",
    image: "/yoga.png",
  },
  {
    id: 4,
    icon: Heart,
    en: "Beauty Treatments",
    pt: "Tratamentos de Beleza",
    descEn: "Premium facial treatments and skin care",
    descPt: "Tratamentos faciais premium e cuidados da pele",
    image: "/face.jpg",
  },
]

const testimonials = [
  {
    name: "Sofia M.",
    role: "Regular Client",
    en: "CAMY has become my sanctuary. The professionalism and care I receive here is unmatched. I feel truly relaxed and rejuvenated after every visit.",
    pt: "A CAMY tornou-se meu santuário. O profissionalismo e cuidado que recebo aqui é incomparável. Sinto-me verdadeiramente relaxada e rejuvenescida após cada visita.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Ana C.",
    role: "Yoga Enthusiast",
    en: "The yoga classes at CAMY are transformative. The instructors are knowledgeable and the atmosphere is perfectly calming.",
    pt: "As aulas de yoga na CAMY são transformadoras. Os instrutores são conhecedores e a atmosfera é perfeitamente calmante.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Mariana S.",
    role: "Spa Lover",
    en: "The attention to detail and quality of services at CAMY is exceptional. From the moment you walk in, you feel valued and cared for.",
    pt: "A atenção aos detalhes e a qualidade dos serviços na CAMY é excepcional. Desde o momento em que você entra, sente-se valorizado e cuidado.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
]

export default function Home() {
  const { language, t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/salao-unhas.jpg"
        >
          <source src="/salao-unhas.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/30 to-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-0 text-balance">{t("hero.title1")}</h1>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-balance">{t("hero.title2")}</h2>
          <p className="text-xl md:text-2xl font-light mb-8 text-balance">{t("hero.tagline")}</p>
          <p className="text-lg md:text-lg font-light mb-10 text-gray-200">{t("hero.subtitle")}</p>

          {/* CTA Button: Discover Services only, with gold gradient */}
          <div className="flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 font-medium rounded text-lg text-white bg-gradient-to-r from-[#d4af37] via-[#e6c75a] to-[#f8e9a1] shadow-lg border-0 hover:from-[#c9a63f] hover:to-[#f8e9a1] hover:brightness-105 transition-all"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-linear-to-b from-white to-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-[#1a3c34]">{t("services.title")}</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              const title = language === "en" ? service.en : service.pt
              const desc = language === "en" ? service.descEn : service.descPt

              return (
                <div
                  key={service.id}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                      <h3 className="text-xl font-serif font-semibold text-[#1a3c34]">{title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
                    <Link
                      href="/services"
                      className="inline-flex text-[#d4af37] font-medium text-sm hover:text-[#c9a63f] transition-colors"
                    >
                      {t("services.learnmore")} →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-[#1a3c34]">{t("about.commitment")}</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8 text-balance">{t("about.commitmentText")}</p>
          <Link
            href="/about"
            className="inline-flex px-8 py-3 bg-[#1a3c34] text-white font-medium rounded hover:bg-[#2d5a50] transition-colors"
          >
            {t("about.title")}
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-linear-to-b from-[#f8f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-[#1a3c34]">{language === "en" ? "What Our Clients Say" : "O Que Nossos Clientes Dizem"}</h2>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#d4af37] text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{language === "en" ? testimonial.en : testimonial.pt}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1a3c34]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-[#1a3c34] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">{language === "en" ? "Treat Yourself Today" : "Trate-se Hoje"}</h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "en"
              ? "Discover the perfect service for your wellness journey. Book your appointment now."
              : "Descubra o serviço perfeito para sua jornada de bem-estar. Marque seu compromisso agora."}
          </p>
          <a
            href="https://wa.me/258841921846"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-[#d4af37] text-[#1a3c34] font-semibold rounded hover:bg-[#e8d4a8] transition-colors text-lg"
          >
            {t("nav.book")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
