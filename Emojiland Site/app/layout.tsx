import type React from "react"
import type { Metadata } from "next"
import { Fredoka, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

// <CHANGE> Updated metadata for Emoji Land game
export const metadata: Metadata = {
  title: "Emoji Land - Build Your Perfect City",
  description:
    "A relaxing city-building game where you care for emoji citizens and create your perfect city. Download now on iOS and Android!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
