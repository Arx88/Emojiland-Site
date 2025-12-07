import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="relative">
        {/* Full extended background image that covers hero + navigation + screenshots */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gemini-generated-image-9xvwl49xvwl49xvw.jpeg"
            alt="Emoji Land Background"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay at bottom to blend into blue sections */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#3B82F6] to-transparent" />
        </div>

        {/* Content layered on top of background */}
        <div className="relative z-10 flex flex-col">
          {/* Hero with logo area - takes most of viewport */}
          <div className="min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
            <HeroSection />
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Screenshots section - still within the background image area */}
          <div className="py-6 md:py-10">
            <ScreenshotsSection />
          </div>
        </div>
      </div>

      {/* Blue sections start here */}
      <div className="bg-[#3B82F6]">
        <AboutSection />
        <FaqSection />
      </div>

      <FooterSection />
    </main>
  )
}
