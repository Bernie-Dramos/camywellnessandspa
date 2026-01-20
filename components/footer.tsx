"use client"

import Link from "next/link"
import { useLanguage } from "@/app/providers"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1a3c34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-[#d4af37] font-serif text-lg mb-4">CAMY - Wellness & Spa</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your sanctuary of calm, beauty, and well-being. Dedicated to women's relaxation and self-care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d4af37] font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#d4af37] font-semibold text-sm mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <a href="tel:+258841921846" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  +258 841 921 846
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <a
                  href="https://wa.me/258841921846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#d4af37]" />
                <a
                  href="https://instagram.com/camywellnessspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  @camywellnessspa
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[#d4af37] font-semibold text-sm mb-4">{t("footer.hours")}</h4>
            <p className="text-gray-300 text-sm">
              <strong>{t("footer.monday")}:</strong>
              <br />
              {t("footer.monFriHours")}
            </p>
            <p className="text-gray-300 text-sm mt-3">
              <strong>{t("footer.saturday")}:</strong>
              <br />
              {t("footer.satHours")}
            </p>
            <p className="text-gray-300 text-sm mt-3">
              <strong>{t("footer.sunday")}:</strong>
              <br />
              {t("footer.sunHours")}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
