"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
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
    <section
      id="about-us"
      ref={sectionRef}
      className="py-16 md:py-24"
      style={{
        background: "linear-gradient(to bottom, #1a1a2e 0%, #1a1840 25%, #161440 50%, #130f48 75%, #110D4F 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col items-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          <Image
            src="/images/enmascarar-20grupo-20144.png"
            alt="About Us"
            width={350}
            height={90}
            className="w-auto h-auto max-w-[280px] md:max-w-[350px]"
          />
          <div className="relative w-[320px] md:w-[400px] h-3 mt-2 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1e40af] rounded-full transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 delay-700 ${
                isVisible ? "translate-x-full" : "-translate-x-full"
              }`}
              style={{ width: "50%" }}
            />
          </div>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="relative bg-[#f8f4eb] border-4 border-[#3b82f6] p-8 md:p-10 rounded-sm transition-all duration-300 cursor-default"
            style={{
              boxShadow: isHovered
                ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.3), inset 0 1px 3px rgba(255,255,255,0.8)"
                : "0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 3px rgba(255,255,255,0.8)",
              transform: isHovered ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-center space-y-5">
              <h3
                className="font-heading text-[#2a2a40] text-base md:text-lg tracking-wide"
                style={{ fontVariant: "small-caps" }}
              >
                {t.about.title}
              </h3>

              <p className="font-body text-[#3a3a50] text-xs md:text-sm leading-relaxed tracking-wide uppercase">
                {t.about.p1}
              </p>

              <p className="font-body text-[#3a3a50] text-xs md:text-sm leading-relaxed tracking-wide uppercase">
                {t.about.p2}
              </p>

              <p className="font-body text-[#3a3a50] text-xs md:text-sm leading-relaxed tracking-wide uppercase">
                {t.about.p3}
              </p>

              <p className="font-heading text-[#2a2a40] text-xl md:text-2xl pt-4">{t.about.signature}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
