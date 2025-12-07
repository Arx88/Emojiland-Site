"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSelector } from "./language-selector"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: t.menu.games, href: "#games" },
    { label: t.menu.aboutUs, href: "#about-us" },
    { label: t.menu.contact, href: "mailto:hi@toucanstudiogames.com" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/98 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-1" : "bg-black py-0"
      }`}
    >
      <div
        className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-3 group transition-transform duration-500 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <div className="relative">
            <Image
              src="/images/enmascarar-20grupo-20147.png"
              alt="Toucan Studio Logo"
              width={40}
              height={40}
              className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-[#ffd700]/0 group-hover:bg-[#ffd700]/20 rounded-full blur-xl transition-all duration-500" />
          </div>
          <Image
            src="/images/enmascarar-20grupo-20149.png"
            alt="Toucan Studio"
            width={130}
            height={28}
            className="hidden sm:block transition-opacity duration-300 group-hover:opacity-90"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative font-menu text-[#f5f5f5] text-[13px] font-medium tracking-[0.2em] transition-all duration-300 hover:text-[#ffd700] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent transition-all duration-400 group-hover:w-full" />
              <span className="absolute inset-0 -z-10 bg-[#ffd700]/0 group-hover:bg-[#ffd700]/5 blur-lg rounded-full transition-all duration-300" />
            </Link>
          ))}
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            className="text-[#f5f5f5] p-2 relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative z-10 transition-transform duration-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            <span className="absolute inset-0 bg-[#ffd700]/0 group-hover:bg-[#ffd700]/10 rounded-lg transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-t border-[#ffd700]/10 transition-all duration-400 ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="flex flex-col items-center py-6 gap-5">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-menu text-[#f5f5f5] text-sm tracking-[0.2em] hover:text-[#ffd700] transition-all duration-300 hover:tracking-[0.3em]"
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
