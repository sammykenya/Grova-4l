import type React from "react"
import type { Metadata } from "next"
import { Inter, Lato } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grova - Finance Without Borders",
  description:
    "Revolutionary financial super-app designed specifically for Africa's 1.4 billion people and underbanked populations across all 54 countries.",
  keywords:
    "fintech, Africa, mobile banking, cryptocurrency, financial inclusion, offline payments, AI financial coach",
  authors: [{ name: "Grova Team" }],
  creator: "Grova",
  publisher: "Grova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grova.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grova - Finance Without Borders",
    description:
      "Revolutionary financial super-app designed specifically for Africa's 1.4 billion people and underbanked populations across all 54 countries.",
    url: "https://grova.app",
    siteName: "Grova",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grova - Finance Without Borders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grova - Finance Without Borders",
    description:
      "Revolutionary financial super-app designed specifically for Africa's 1.4 billion people and underbanked populations across all 54 countries.",
    images: ["/images/twitter-image.jpg"],
    creator: "@grova_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} font-body antialiased`}>{children}</body>
    </html>
  )
}
