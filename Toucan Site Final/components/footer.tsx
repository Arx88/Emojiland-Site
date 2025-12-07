"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const stars = [...Array(40)].map((_, i) => ({
    id: i,
    width: 1 + Math.random() * 2,
    top: Math.random() * 50,
    left: Math.random() * 100,
    delay: i * 0.05,
    twinkleDuration: 2 + Math.random() * 3,
    twinkleDelay: Math.random() * 2,
  }))

  return (
    <footer id="contact" ref={footerRef} className="relative w-full overflow-hidden bg-[#110D4F]">
      {/* Background Image - Added cursor-none and onMouseMove */}
      <div
        className={`relative w-full aspect-[16/7] ${isImageHovered ? "cursor-none" : "cursor-pointer"}`}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src="/images/back-foot.jpeg"
          alt="Toucan Studio Night Scene"
          fill
          className="object-contain object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />

        <div
          className={`absolute z-30 pointer-events-none transition-opacity duration-300 ${
            isImageHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -120%)",
          }}
        >
          <div className="relative">
            <div
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full shadow-lg"
              style={{
                animation: isImageHovered ? "footerLabelGlow 2s ease-in-out infinite" : "none",
              }}
            >
              <span className="font-title text-white text-sm md:text-base whitespace-nowrap font-bold tracking-wide">
                Shhh... we are sleeping
              </span>
            </div>
            {/* Zzz effect */}
            <div
              className={`absolute -top-3 -right-3 text-blue-300 font-bold text-xs transition-all duration-300 ${isImageHovered ? "opacity-100" : "opacity-0"}`}
              style={{ animation: isImageHovered ? "zzz 2s ease-in-out infinite" : "none" }}
            >
              z
            </div>
            <div
              className={`absolute -top-5 -right-0 text-blue-200 font-bold text-sm transition-all duration-300 ${isImageHovered ? "opacity-100" : "opacity-0"}`}
              style={{ animation: isImageHovered ? "zzz 2s ease-in-out 0.3s infinite" : "none" }}
            >
              z
            </div>
            <div
              className={`absolute -top-7 right-1 text-blue-100 font-bold text-base transition-all duration-300 ${isImageHovered ? "opacity-100" : "opacity-0"}`}
              style={{ animation: isImageHovered ? "zzz 2s ease-in-out 0.6s infinite" : "none" }}
            >
              z
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white star-entrance"
              style={{
                width: `${star.width}px`,
                height: `${star.width}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: 0,
                transform: "scale(0)",
                animation: isVisible
                  ? `starEntrance 0.5s ease-out ${star.delay}s forwards, twinkle ${star.twinkleDuration}s ease-in-out ${star.delay + 0.5}s infinite`
                  : "none",
              }}
            />
          ))}
        </div>

        {/* Moon glow effect */}
        <div
          className={`absolute top-[15%] right-[15%] w-20 h-20 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="bg-[#0a0a14] py-6 border-t border-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className={`font-body text-[#a0a0a0] text-sm md:text-base transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.footer.copyright}{" "}
              <span
                className="text-[#ffd700] inline-block"
                style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
              >
                {"💛"}
              </span>{" "}
              {t.footer.by}
            </p>

            <Link
              href="https://toucanstudiogames.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-body text-[#a0a0a0] text-sm hover:text-[#ffd700] transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes starEntrance {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.6); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        @keyframes footerLabelGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(59, 130, 246, 0.7); }
        }
        @keyframes zzz {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-15px) translateX(5px); opacity: 0; }
        }
      `}</style>
    </footer>
  )
}
