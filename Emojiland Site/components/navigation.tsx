"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  {
    name: "DOWNLOAD",
    src: "/images/enmascarar-20grupo-20104.png",
    href: "#download",
  },
  {
    name: "ABOUT",
    src: "/images/enmascarar-20grupo-20106.png",
    href: "#about",
  },
  {
    name: "FAQ",
    src: "/images/enmascarar-20grupo-20107.png",
    href: "#faq",
  },
  {
    name: "CONTACT",
    src: "/images/enmascarar-20grupo-20105.png",
    href: "#contact",
  },
]

export function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ease-out ${scrolled ? "py-0" : "py-0"}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

      {/* Top gold bar */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/60 to-transparent h-1/2" />
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-yellow-600/50" />
      </div>

      {/* Sparkle dots */}
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-yellow-300 animate-pulse shadow-[0_0_8px_rgba(253,224,71,0.8)]" />
      <div
        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-yellow-300 animate-pulse shadow-[0_0_8px_rgba(253,224,71,0.8)]"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="md:hidden flex justify-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-3 rounded-xl bg-gradient-to-b from-[#1E40AF]/60 to-[#1E3A8A]/80 border-2 border-white/30 shadow-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="flex flex-col items-center gap-3 py-4 px-4 bg-gradient-to-b from-[#1E40AF]/80 to-[#1E3A8A]/90 rounded-2xl border-2 border-white/30 shadow-xl backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="relative group w-full flex justify-center"
              >
                <div className="relative px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 w-full flex justify-center">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.name}
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex relative justify-center items-center gap-6 lg:gap-12 py-4 px-8 bg-gradient-to-b from-[#1E40AF]/60 to-[#1E3A8A]/80 rounded-2xl border-t-2 border-l-2 border-white/30 border-b-2 border-r-2 border-black/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_2px_8px_rgba(255,255,255,0.1)] backdrop-blur-sm">
          {/* Inner glow */}
          <div className="absolute inset-1 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {/* Floating orbs */}
          <div className="absolute -top-3 left-16 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-300/60 to-blue-400/40 animate-float" />
          <div
            className="absolute -bottom-2 right-20 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-300/50 to-orange-400/30 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2 right-32 w-2 h-2 rounded-full bg-white/40 animate-float"
            style={{ animationDelay: "0.5s" }}
          />

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-3 rounded-2xl transition-all duration-400 ease-out ${
                  hoveredItem === item.name
                    ? "bg-gradient-to-r from-yellow-400/50 via-orange-300/50 to-yellow-400/50 blur-lg opacity-100"
                    : "opacity-0"
                }`}
              />

              {/* Button container */}
              <div
                className={`relative px-3 lg:px-4 py-3 rounded-xl transition-all duration-300 ease-out ${
                  hoveredItem === item.name ? "transform -translate-y-1 scale-110" : "transform translate-y-0 scale-100"
                }`}
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    hoveredItem === item.name
                      ? "bg-gradient-to-b from-white/25 to-white/10 shadow-xl border border-white/40"
                      : ""
                  }`}
                />

                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.name}
                  width={140}
                  height={50}
                  className={`relative h-8 lg:h-12 w-auto object-contain transition-all duration-300 ${
                    hoveredItem === item.name
                      ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] brightness-110"
                      : "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  }`}
                />
              </div>

              {/* Underline indicator */}
              <div
                className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 transition-all duration-300 ease-out ${
                  hoveredItem === item.name
                    ? "w-4/5 opacity-100 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                    : "w-0 opacity-0"
                }`}
              />

              {/* Sparkle effects on hover */}
              {hoveredItem === item.name && (
                <>
                  <span className="absolute -top-2 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" />
                  <span
                    className="absolute -top-1 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  />
                </>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-[#1E3A8A] to-[#172554]">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/50 to-transparent" />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
    </nav>
  )
}
