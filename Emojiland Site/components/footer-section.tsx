"use client"

import Image from "next/image"

export function FooterSection() {
  return (
    <footer id="contact" className="relative">
      {/* Toucan Studio Background */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/gemini-generated-image-a4skvja4skvja4sk.png"
          alt="Toucan Studio"
          fill
          className="object-cover object-center"
        />

        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#3B82F6] to-transparent" />
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#3B82F6] py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-sm md:text-base">
            &copy; 2025 EmojiLand. All rights reserved. Made with{" "}
            <span className="text-pink-400 animate-pulse inline-block">&#x2764;</span> by Toucan Studio
          </p>
        </div>
      </div>

      {/* Floating social icons (optional enhancement) */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4">
        {["twitter", "instagram", "facebook"].map((social) => (
          <a
            key={social}
            href="#"
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
          >
            <span className="sr-only">{social}</span>
            <div className="w-5 h-5 bg-white rounded-sm" />
          </a>
        ))}
      </div>
    </footer>
  )
}
