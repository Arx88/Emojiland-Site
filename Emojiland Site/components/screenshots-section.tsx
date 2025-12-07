"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const screenshots = [
  {
    id: 1,
    src: "/images/1.png",
    alt: "Game Screenshot - Discover Unique Stories",
  },
  {
    id: 2,
    src: "/images/2.png",
    alt: "Game Screenshot - Carrot Shop",
  },
  {
    id: 3,
    src: "/images/enmascarar-20grupo-20109.png",
    alt: "Game Screenshot - City Building",
  },
]

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="download" className="relative">
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Phone frame container with semi-transparent dark blue background */}
        <div className="relative bg-[#1E3A8A]/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 border-4 border-[#1E40AF] shadow-[0_0_40px_rgba(30,64,175,0.6)]">
          {/* Inner glow effect */}
          <div className="absolute inset-2 bg-gradient-to-br from-[#3B82F6]/20 to-transparent rounded-2xl pointer-events-none" />

          {/* Screenshots grid */}
          <div className="relative flex justify-center items-center gap-2 md:gap-4">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`relative transition-all duration-500 cursor-pointer ${index === activeIndex ? "scale-105 z-10" : "scale-95 opacity-80"}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Phone frame */}
                <div className="relative bg-black rounded-2xl p-1 shadow-xl">
                  <div className="relative w-[100px] md:w-[180px] h-[200px] md:h-[360px] rounded-xl overflow-hidden">
                    <Image
                      src={screenshot.src || "/placeholder.svg"}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-1 bg-gray-800 rounded-full" />
                </div>

                {/* Active indicator glow */}
                {index === activeIndex && (
                  <div className="absolute -inset-2 bg-yellow-400/20 rounded-3xl blur-xl -z-10 animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Download buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] md:text-xs">Download on the</div>
                <div className="text-xs md:text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] md:text-xs">GET IT ON</div>
                <div className="text-xs md:text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
