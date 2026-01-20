
"use client"

import { useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export default function About() {
  const { language, t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-208 flex items-center justify-center overflow-hidden bg-linear-to-r from-[#1a3c34] to-[#2d5a50]">
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
          <source src="/reception.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-2">{t("about.title")}</h1>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-[#d4af37]">{t("about.mission")}</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-balance">
              {t("about.missionText")}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-[#d4af37]">{t("about.vision")}</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-balance">
              {t("about.visionText")}
            </p>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-10 text-center text-[#d4af37]">{t("about.values")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                  {t("about.value1Title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.value1Desc")}
                </p>
              </div>
              <div className="p-6 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                  {t("about.value2Title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.value2Desc")}
                </p>
              </div>
              <div className="p-6 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                  {t("about.value3Title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.value3Desc")}
                </p>
              </div>
              <div className="p-6 border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                  {t("about.value4Title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.value4Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-linear-to-b from-[#f8f5f0] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-[#1a3c34]">{t("about.commitment")}</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-balance">
              {language === "en"
                ? "CAMY Wellness and Spa is dedicated to providing a calm, safe, and restorative space for women to relax and focus on their well-being. All treatments are carried out with professionalism, care and confidentiality."
                : "A Camy Wellness and Spa dedica-se a proporcionar um espaço calmo, seguro e restaurador para que as mulheres possam relaxar e focar no seu bem-estar. Todos os tratamentos são realizados com profissionalismo, cuidado e confidencialidade."}
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[#d4af37]">✨</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                {t("about.excellence")}
              </h3>
              <p className="text-gray-600">
                {t("about.excellenceDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[#d4af37]">🤝</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                {t("about.care")}
              </h3>
              <p className="text-gray-600">
                {t("about.careDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[#d4af37]">🔒</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                {t("about.confidentiality")}
              </h3>
              <p className="text-gray-600">
                {t("about.confidentialityDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 md:py-24 bg-linear-to-b from-[#f8f5f0] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-center text-[#1a3c34]">
            {t("about.contact")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8243095865776!2d32.37!3d-23.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ed6b8cae1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sMatola%2C%20Mozambique!5e0!3m2!1sen!2smz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-[#1a3c34] mb-2">{t("about.location")}</h3>
                  <p className="text-gray-600">{t("about.address")}</p>
                  <p className="text-gray-500 text-sm mt-1">Matola A, Mozambique</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-[#1a3c34] mb-2">{t("about.phone")}</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>
                      <a href="tel:+258841921846" className="hover:text-[#d4af37] transition-colors">
                        +258 841 921 846
                      </a>
                    </li>
                    <li>
                      <a href="tel:+258843194150" className="hover:text-[#d4af37] transition-colors">
                        +258 843 194 150
                      </a>
                    </li>
                    <li>
                      <a href="tel:+258847773303" className="hover:text-[#d4af37] transition-colors">
                        +258 847 773 303
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <Instagram className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-[#1a3c34] mb-2">{t("about.instagram")}</h3>
                  <a
                    href="https://instagram.com/camywellnessspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#d4af37] transition-colors"
                  >
                    @camywellnessspa
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-[#1a3c34] mb-2">{t("about.whatsapp")}</h3>
                  <a
                    href="https://wa.me/258841921846"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#d4af37] transition-colors"
                  >
                    {language === "en" ? "Send a message" : "Enviar uma mensagem"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
