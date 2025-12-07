import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsTicker } from "@/components/news-ticker"
import { StudioIntro } from "@/components/studio-intro"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0a0a14",
      }}
    >
      <main className="max-w-[1440px] mx-auto bg-background overflow-x-hidden shadow-2xl">
        <Header />
        <HeroSection />
        <NewsTicker />
        <StudioIntro />
        <AboutSection />
        <Footer />
      </main>
    </div>
  )
}
