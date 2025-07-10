import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

const lufga = localFont({
  src: [
    {
      // note the leading / because it’s inside /public
      path: "/fonts/Lufga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grova - Finance Without Borders | Revolutionary Financial Platform for Africa",
  description:
    "Revolutionary financial super-app for Africa. Triple wallet system, offline payments, AI coaching, and comprehensive banking integration. Download the Grova app today!",
  keywords: "fintech, mobile banking, Africa, cryptocurrency, offline payments, financial inclusion, Grova app",
  openGraph: {
    title: "Grova - Finance Without Borders",
    description: "Revolutionary financial super-app for Africa",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lato.variable} ${lufga.variable}`}>
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  )
}
