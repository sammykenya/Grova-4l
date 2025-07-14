import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Inter, Lato } from "next/font/google"
import "./globals.css"

/* ----------  FONTS ---------- */
// Custom Lufga for the logo
const lufga = localFont({
  src: [
    {
      path: "./fonts/Lufga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Lufga-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Lufga-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
})

// Google-hosted fonts (self-hosted by Next.js)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grova – Finance Without Borders",
  description: "Revolutionary financial super-app designed specifically for Africa's 1.4 billion people.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lufga.variable} ${inter.variable} ${lato.variable} scroll-smooth`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
