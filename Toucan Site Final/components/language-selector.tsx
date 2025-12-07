"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
] as const

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ffd700]/30 transition-all duration-300 group"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <ChevronDown
          size={12}
          className={`text-[#a0a0a0] group-hover:text-[#ffd700] transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full right-0 mt-2 bg-[#0a0a14] border border-white/10 rounded-lg overflow-hidden shadow-xl shadow-black/40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
        style={{ minWidth: "120px" }}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code as "en" | "es")
              setIsOpen(false)
            }}
            className={`w-full flex items-center gap-2 px-3 py-2.5 text-left text-sm transition-all duration-200 ${
              language === lang.code
                ? "bg-[#ffd700]/10 text-[#ffd700]"
                : "text-[#f5f5f5] hover:bg-white/5 hover:text-[#ffd700]"
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="font-menu tracking-wide">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
