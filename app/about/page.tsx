"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/app/providers"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export default function About() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1a3c34] to-[#2d5a50]">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-2">{t("about.title")}</h1>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24 bg-white">
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
                {language === "en" ? "Excellence" : "Excelência"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Professional and high-quality services delivered with expertise"
                  : "Serviços profissionais e de alta qualidade entregues com experiência"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[#d4af37]">🤝</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                {language === "en" ? "Care" : "Cuidado"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Personalized attention and consideration for every client"
                  : "Atenção personalizada e consideração para cada cliente"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[#d4af37]">🔒</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a3c34] mb-2">
                {language === "en" ? "Confidentiality" : "Confidencialidade"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Your privacy and peace of mind are our priority"
                  : "Sua privacidade e tranquilidade são nossa prioridade"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f5f0] to-white">
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
                <MapPin className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-[#1a3c34] mb-2">{t("about.location")}</h3>
                  <p className="text-gray-600">{t("about.address")}</p>
                  <p className="text-gray-500 text-sm mt-1">Matola A, Mozambique</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
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
                <Instagram className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
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
                <Mail className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
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

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-center text-[#1a3c34]">
            {language === "en" ? "Get in Touch" : "Entre em Contato"}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {language === "en"
              ? "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              : "Tem perguntas? Adoraríamos ouvir você. Envie-nos uma mensagem e responderemos o mais breve possível."}
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                {language === "en"
                  ? "Thank you for your message! We'll be in touch soon."
                  : "Obrigado pela sua mensagem! Entraremos em contato em breve."}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a3c34] mb-2">
                  {language === "en" ? "Name" : "Nome"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder={language === "en" ? "Your name" : "Seu nome"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a3c34] mb-2">
                  {language === "en" ? "Email" : "E-mail"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder={language === "en" ? "your@email.com" : "seu@email.com"}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a3c34] mb-2">
                  {language === "en" ? "Phone" : "Telefone"}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  placeholder="+258 ..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a3c34] mb-2">
                  {language === "en" ? "Service Interested In" : "Serviço de Interesse"}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                >
                  <option value="">{language === "en" ? "Select a service" : "Selecione um serviço"}</option>
                  <option value="nails">{language === "en" ? "Nail Studio" : "Estúdio de Unhas"}</option>
                  <option value="massage">{language === "en" ? "Massages" : "Massagens"}</option>
                  <option value="yoga">{language === "en" ? "Yoga" : "Yoga"}</option>
                  <option value="facial">{language === "en" ? "Facial Care" : "Limpeza Facial"}</option>
                  <option value="waxing">{language === "en" ? "Waxing" : "Depilação a Cera"}</option>
                  <option value="makeup">{language === "en" ? "Makeup" : "Maquilhagem"}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a3c34] mb-2">
                {language === "en" ? "Message" : "Mensagem"}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent resize-none"
                placeholder={language === "en" ? "Your message..." : "Sua mensagem..."}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-[#d4af37] text-white font-medium rounded hover:bg-[#c9a63f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? language === "en"
                  ? "Sending..."
                  : "Enviando..."
                : language === "en"
                  ? "Send Message"
                  : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
