"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/app/providers"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/Camy Spa Logo.png"
              alt="CAMY Wellness & Spa Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 rounded-[15px] object-cover"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#d4af37] transition-colors font-light text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  language === "en" ? "text-[#d4af37]" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => setLanguage("pt")}
                className={`text-sm font-medium transition-colors ${
                  language === "pt" ? "text-[#d4af37]" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                PT
              </button>
            </div>

            {/* Book Now Button */}
            <a
              href="https://wa.me/258841921846"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#d4af37] text-white text-sm font-medium rounded hover:bg-[#c9a63f] transition-colors"
            >
              {t("nav.book")}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-[#d4af37] transition-colors text-sm py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/258841921846"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-[#d4af37] text-white text-sm font-medium rounded hover:bg-[#c9a63f] transition-colors"
            >
              {t("nav.book")}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
