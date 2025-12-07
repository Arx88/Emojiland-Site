"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const heroImagesDesktop = ["/images/hero-1.png", "/images/hero-2.png"]
const heroImagesMobile = ["/images/hero-1-mobile.jpeg", "/images/hero-2-mobile.jpeg"]
const heroLinks = ["/emojiland", "/towerescape"]
const SLIDE_DURATION = 7000

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { t } = useLanguage()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setProgress(0)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 1200)
    },
    [isTransitioning],
  )

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const startTime = Date.now()
    const animateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(newProgress)

      if (newProgress < 100) {
        requestAnimationFrame(animateProgress)
      }
    }

    const animationFrame = requestAnimationFrame(animateProgress)

    return () => cancelAnimationFrame(animationFrame)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % heroImagesDesktop.length)
    }, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [currentSlide, goToSlide])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const altTexts = [t.hero.alt1, t.hero.alt2]
  const heroImages = isMobile ? heroImagesMobile : heroImagesDesktop

  return (
    <section id="games" className="relative w-full mt-14 overflow-hidden">
      <div
        className={`relative w-full ${isMobile ? "aspect-[9/16]" : "aspect-[16/9]"} ${isHovered ? "cursor-none" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/20 z-40">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)] transition-none"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {heroImages.map((image, index) => (
          <Link
            key={`${isMobile ? "mobile" : "desktop"}-${index}`}
            href={heroLinks[index]}
            className={`absolute inset-0 transition-all ease-in-out ${
              currentSlide === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0 pointer-events-none"
            }`}
            style={{ transitionDuration: "1200ms" }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={altTexts[index]}
              fill
              className="object-contain object-center"
              priority={index === 0}
            />
          </Link>
        ))}

        <div
          className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -120%)",
            position: "absolute",
          }}
        >
          <div className="relative">
            <div
              className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full shadow-lg"
              style={{
                animation: isHovered ? "labelGlow 1.5s ease-in-out infinite" : "none",
              }}
            >
              <span className="font-title text-[#1a1a2e] text-sm md:text-base whitespace-nowrap font-bold tracking-wide">
                Click to see more...
              </span>
            </div>
            <div
              className={`absolute -top-1 -right-1 w-2 h-2 bg-yellow-200 rounded-full transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              style={{ animation: isHovered ? "sparkle 1s ease-in-out infinite" : "none" }}
            />
            <div
              className={`absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-yellow-200 rounded-full transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              style={{ animation: isHovered ? "sparkle 1.2s ease-in-out 0.3s infinite" : "none" }}
            />
          </div>
        </div>

        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.2)] pointer-events-none z-20" />

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "bg-[#1a1a2e] scale-125 shadow-lg"
                  : "bg-white/70 hover:bg-white border border-[#1a1a2e]/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <span className="absolute inset-0 rounded-full bg-[#1a1a2e] animate-ping opacity-20" />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes labelGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(250, 204, 21, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(250, 204, 21, 0.7); }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
