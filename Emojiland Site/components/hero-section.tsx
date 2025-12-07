"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [bounce, setBounce] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 500)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full flex-1 min-h-[40vh] sm:min-h-[50vh] md:min-h-[55vh]">
      {/* Animated effects overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated clouds overlay */}
        <div className="absolute top-20 left-10 w-20 h-12 bg-white/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute top-32 right-20 w-24 h-14 bg-white/15 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute top-16 left-1/3 w-16 h-10 bg-white/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
            style={{
              top: `${15 + Math.random() * 50}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </section>
  )
}
