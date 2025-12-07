import type React from "react"
import type { Metadata } from "next"
import { Bowlby_One_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const bowlbyOneSC = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Toucan Studio - Indie Game Studio from Argentina",
  description:
    "We are a small Argentinian indie game studio crafting worlds you'll want to stay in. Play EmojiLand now!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/enmascarar-20grupo-20147.png",
      },
    ],
  },
}

export const viewport = {
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bowlbyOneSC.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
