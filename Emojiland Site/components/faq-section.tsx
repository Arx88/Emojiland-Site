"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const faqs = [
  {
    icon: "/images/heart-wings-icon.png",
    question: "What is Emoji Land?",
    answer:
      "Emoji Land is a relaxing city-building game where you care for emoji citizens and create your perfect city.",
  },
  {
    icon: "/images/enmascarar-20grupo-20113.png",
    question: "Is the game free?",
    answer: "Yes! Emoji Land is free to download and play on iOS and Android devices.",
  },
]

export function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
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

    const section = document.getElementById("faq")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="relative bg-[#3B82F6] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* FAQ Title with divider bars */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="hidden md:block w-32 lg:w-48 h-3 overflow-hidden transform rotate-180">
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
              src="/images/enmascarar-20grupo-20107.png"
              alt="FAQ"
              width={150}
              height={60}
              className="h-12 md:h-16 w-auto drop-shadow-lg"
            />
          </div>

          <div className="hidden md:block w-32 lg:w-48 h-3 overflow-hidden">
            <Image
              src="/images/divider-bar.png"
              alt=""
              width={200}
              height={12}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/95 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02] border-2 border-transparent hover:border-[#1E40AF]/30 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 md:w-18 md:h-18 animate-bounce-slow">
                  <Image
                    src={faq.icon || "/placeholder.svg"}
                    alt=""
                    width={72}
                    height={72}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-gray-800 font-bold text-sm md:text-base mb-1">{faq.question}</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-10 left-10 text-2xl animate-pulse opacity-70">✨</div>
      <div className="absolute bottom-10 right-10 text-2xl animate-pulse opacity-70" style={{ animationDelay: "0.5s" }}>
        ✨
      </div>
    </section>
  )
}
