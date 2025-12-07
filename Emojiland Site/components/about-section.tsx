"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative bg-[#3B82F6] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="hidden md:block w-24 lg:w-40 h-3 overflow-hidden transform rotate-180">
            <Image
              src="/images/divider-bar.png"
              alt=""
              width={200}
              height={12}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`relative transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
          >
            <Image
              src="/images/enmascarar-20grupo-20106.png"
              alt="About"
              width={200}
              height={60}
              className="h-12 md:h-16 w-auto drop-shadow-lg"
            />
          </div>

          <div className="hidden md:block w-24 lg:w-40 h-3 overflow-hidden">
            <Image
              src="/images/divider-bar.png"
              alt=""
              width={200}
              height={12}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Box */}
        <div
          className={`relative bg-white/95 rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-700 border-4 border-[#1E40AF]/20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute -left-4 md:-left-20 bottom-0 w-28 md:w-44 z-10">
            <Image
              src="/images/ema.png"
              alt="Ema Character"
              width={176}
              height={220}
              className={`w-full h-auto transition-all duration-500 delay-300 hover:scale-110 cursor-pointer drop-shadow-xl ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            />
          </div>

          <div className="absolute -right-4 md:-right-20 bottom-0 w-28 md:w-44 z-10">
            <Image
              src="/images/surfer.png"
              alt="Surfer Character"
              width={176}
              height={220}
              className={`w-full h-auto transition-all duration-500 delay-500 hover:scale-110 cursor-pointer drop-shadow-xl ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            />
          </div>

          {/* Text Content */}
          <div className="text-center max-w-lg mx-auto text-gray-800 px-4 md:px-8">
            <p className="text-sm md:text-base mb-4 font-medium leading-relaxed">
              A relaxing game where your EMOs depend on you
              <br />
              Take care of your citizens, satisfy their needs, and build the perfect city. In Emojiland, there&apos;s
              only room for good vibes and happiness.
            </p>

            <p className="text-sm md:text-base mb-4 leading-relaxed">
              Enjoy vibrant colors and a positive atmosphere as you create your ideal metropolis.
            </p>

            <p className="text-sm md:text-base font-bold mb-2 text-[#1E40AF]">Discover, Decorate, and Connect</p>

            <p className="text-sm md:text-base leading-relaxed">
              Unlock new decorative elements, help your EMOs bond with each other, and give them all the love they
              deserve. A game designed to help you relax and have a great time.
            </p>
          </div>

          <div className="absolute top-3 left-3 w-6 h-6 border-l-3 border-t-3 border-[#3B82F6] rounded-tl-xl opacity-60" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-3 border-t-3 border-[#3B82F6] rounded-tr-xl opacity-60" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-3 border-b-3 border-[#3B82F6] rounded-bl-xl opacity-60" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-3 border-b-3 border-[#3B82F6] rounded-br-xl opacity-60" />
        </div>
      </div>

      <div className="absolute top-16 right-8 text-xl animate-float opacity-60">💙</div>
      <div className="absolute bottom-16 left-8 text-xl animate-float opacity-60" style={{ animationDelay: "1s" }}>
        💙
      </div>
    </section>
  )
}
