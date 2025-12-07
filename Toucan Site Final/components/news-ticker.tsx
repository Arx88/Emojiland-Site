"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"

export function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    let animationId: number
    let position = 0
    const speed = 1.5

    const animate = () => {
      position -= speed
      const firstChild = ticker.firstElementChild as HTMLElement
      if (firstChild && position <= -firstChild.offsetWidth) {
        position = 0
        ticker.appendChild(firstChild)
      }
      ticker.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const newsItems = t.news

  return (
    <div className="relative bg-[#ffd700] py-2.5 overflow-hidden shadow-md">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 pointer-events-none" />

      <div ref={tickerRef} className="flex whitespace-nowrap relative z-10">
        {[...newsItems, ...newsItems, ...newsItems].map((news, index) => (
          <span
            key={index}
            className="font-heading text-[#1a1a2e] text-sm md:text-base px-12 uppercase tracking-wider flex items-center gap-3"
          >
            <span className="w-2 h-2 bg-[#1a1a2e] rounded-full" />
            {news}
          </span>
        ))}
      </div>
    </div>
  )
}
