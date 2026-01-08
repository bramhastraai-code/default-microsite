import type React from "react"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Luxury Real Estate",
  description: "Premium residential properties",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
