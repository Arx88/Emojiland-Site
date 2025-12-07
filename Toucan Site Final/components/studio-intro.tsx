"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function StudioIntro() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <Image
        src="/images/gemini-generated-image-hwsjbphwsjbphwsj.png"
        alt="Toucan Studio Office"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/50 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 pl-[10%] py-16 md:py-24 flex items-center min-h-[60vh] md:min-h-[70vh]">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h2
            className="font-heading text-white uppercase text-4xl md:text-5xl lg:text-6xl shimmer-text"
            style={{
              lineHeight: "0.95",
              textShadow: "3px 3px 6px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">{t.studio.line1}</span>
            <span className="block">{t.studio.line2}</span>
            <span className="block">{t.studio.line3}</span>
          </h2>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
