"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Wallet,
  Building2,
  TrendingUp,
  QrCode,
  Users,
  PiggyBank,
  Shield,
  Download,
  CheckCircle,
  Accessibility,
  Volume2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notification, setNotification] = useState("")
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.onend = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
    }
  }

  const toggleVoiceAssistant = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled) {
      speak(
        "Voice assistant activated on Solutions page. Learn about our banking integration, investment platform, payment systems, and community features.",
      )
    }
  }

  const handleLearnMore = (solution: any) => {
    setSelectedSolution(solution)
    setIsModalOpen(true)
    if (isVoiceEnabled) {
      speak(`Learning more about ${solution.title}. ${solution.description}`)
    }
  }

  const solutions = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Comprehensive Banking Integration Across Africa",
      description:
        "Seamlessly connect with major African financial institutions, creating the largest financial network on the continent",
      details: [
        "Integration with over 200 banks across 54 African countries including KCB, Equity Bank, Standard Bank, First Bank Nigeria, Ecobank, and Absa",
        "SACCO connectivity covering Police SACCO, Teachers SACCO, Stima SACCO, and over 500 cooperative societies across East Africa",
        "Microfinance partnerships with Faulu Microfinance, Kenya Women Finance Trust, BRAC Uganda, and 100+ MFIs continent-wide",
        "Global payment integration with PayPal, Skrill, Western Union, and MoneyGram for seamless international remittances",
      ],
      background: "bg-blue-500",
      textColor: "text-white",
      image: "/images/banking-integration.jpg",
      detailedInfo: {
        overview:
          "Our banking integration represents the most comprehensive financial connectivity solution ever built for Africa. By partnering with traditional banks, modern fintech companies, SACCOs, and microfinance institutions, we create a unified financial ecosystem that serves everyone from rural farmers to urban professionals.",
        impact:
          "This integration eliminates financial fragmentation across Africa, enabling seamless money movement between countries, institutions, and communities.",
      },
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Pan-African Investment Platform",
      description:
        "Complete portfolio management with real-time market data from African stock exchanges and global cryptocurrency markets",
      details: [
        "African Stock Exchanges: Nairobi Securities Exchange (NSE), Johannesburg Stock Exchange (JSE), Nigerian Stock Exchange, Ghana Stock Exchange, and 15+ others",
        "Cryptocurrency trading supporting Bitcoin, Ethereum, Binance Coin, Cardano, Polygon, and 100+ altcoins with advanced portfolio tracking",
        "Government securities including Treasury Bills and Bonds from Kenya, Nigeria, South Africa, Ghana, and other African nations",
        "Professional analytics featuring Sharpe ratio, Alpha, Beta calculations, risk assessment, and portfolio optimization tools",
      ],
      background: "bg-orange-500",
      textColor: "text-black",
      image: "/images/investment-platform.jpg",
      detailedInfo: {
        overview:
          "Our investment platform democratizes access to wealth-building opportunities across Africa, providing sophisticated tools previously available only to institutional investors.",
        impact:
          "This platform enables millions of Africans to participate in wealth creation through accessible investment opportunities.",
      },
    },
    {
      icon: <QrCode className="h-12 w-12" />,
      title: "Universal QR Payment Infrastructure",
      description:
        "Revolutionary payment system supporting instant transactions for merchants and individuals across all African markets",
      details: [
        "Offline QR code technology enabling payments without internet connectivity using Bluetooth and mesh networks",
        "Advanced camera integration with AI-powered QR code recognition and comprehensive fraud detection systems",
        "Comprehensive merchant solutions including inventory management, sales analytics, customer loyalty programs, and multi-store management",
        "Cross-border payment capabilities supporting transactions between all African countries with automatic currency conversion",
      ],
      background: "bg-blue-500",
      textColor: "text-white",
      image: "/images/qr-payment.jpg",
      detailedInfo: {
        overview:
          "Our QR payment system creates a universal payment infrastructure that works seamlessly across Africa's diverse economic landscape.",
        impact:
          "This infrastructure reduces cash dependency and enables small businesses to access digital payment benefits.",
      },
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Founders Investor Room - Africa's Startup Ecosystem",
      description:
        "Revolutionary platform connecting African entrepreneurs with investors and enabling community-driven crowdfunding",
      details: [
        "Startup idea submission platform with video pitches, business plan templates, and comprehensive financial projection tools",
        "Verified investor network including angel investors, venture capital firms, development finance institutions, and impact investors",
        "Community crowdfunding enabling ordinary Africans to invest in local startups and participate in economic development",
        "Mentorship programs connecting successful entrepreneurs with emerging startups across Africa for knowledge transfer",
      ],
      background: "bg-orange-500",
      textColor: "text-black",
      image: "/images/startup-ecosystem.jpg",
      detailedInfo: {
        overview:
          "The Founders Investor Room addresses Africa's startup funding gap by creating a comprehensive ecosystem where entrepreneurs can access capital, mentorship, and market opportunities.",
        impact:
          "By connecting African entrepreneurs with both institutional and community investors, we accelerate innovation and job creation.",
      },
    },
    {
      icon: <PiggyBank className="h-12 w-12" />,
      title: "Digital Community Treasury - Modern Chama System",
      description:
        "Advanced digital savings circles and group banking with transparent tracking and democratic governance",
      details: [
        "Digital savings circles (chamas) with automated contribution tracking, interest calculations, and transparent payout management",
        "Group savings goals with milestone tracking, progress visualization, and community achievement rewards",
        "Democratic voting system for fund allocation, investment decisions, and comprehensive group policy changes",
        "Community lending programs with peer-to-peer credit scoring and automated loan processing systems",
      ],
      background: "bg-blue-500",
      textColor: "text-white",
      image: "/images/community-treasury.jpg",
      detailedInfo: {
        overview:
          "Our Digital Community Treasury modernizes traditional African savings practices by bringing chamas and tontines into the digital age while maintaining community spirit.",
        impact:
          "This platform strengthens community bonds while providing financial services to millions who lack access to traditional banking.",
      },
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Comprehensive Insurance Services for Africa",
      description:
        "Tailored insurance solutions addressing the unique risks and needs of African markets and communities",
      details: [
        "Health insurance plans covering medical expenses, hospitalization, and preventive care with partnerships across African healthcare systems",
        "Agricultural insurance protecting farmers against crop failure, weather risks, and livestock losses with satellite monitoring",
        "Micro-insurance products designed for low-income populations with affordable premiums and simplified claims processes",
        "Parametric insurance using weather data and satellite imagery for automatic claim processing and rapid payouts",
      ],
      background: "bg-orange-500",
      textColor: "text-black",
      badge: "Coming Soon",
      image: "/images/insurance-services.jpg",
      detailedInfo: {
        overview:
          "Our insurance services are specifically designed for African markets, addressing unique risks while remaining affordable and accessible.",
        impact:
          "These insurance products provide financial protection for millions of Africans, reducing vulnerability to economic shocks.",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Voice Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleVoiceAssistant}
          className={`neomorphism rounded-full w-16 h-16 shadow-2xl transition-all duration-300 ${
            isVoiceEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
          } text-white`}
        >
          {isSpeaking ? <Volume2 className="h-8 w-8 animate-bounce" /> : <Accessibility className="h-8 w-8" />}
        </Button>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto neomorphism">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-gray-900 flex items-center gap-3">
              {selectedSolution?.icon}
              {selectedSolution?.title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">{selectedSolution?.description}</DialogDescription>
          </DialogHeader>

          {selectedSolution?.detailedInfo && (
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedSolution.detailedInfo.overview}</p>
              </div>

              {selectedSolution.details && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedSolution.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-700 leading-relaxed">{selectedSolution.detailedInfo.impact}</p>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => setNotification("Redirecting to app store...")}
              className="neomorphism bg-blue-500 hover:bg-blue-600 text-white flex-1"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Grova App
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="neomorphism border-gray-300 hover:bg-gray-50"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-black text-gray-900" style={{ fontFamily: "Lufga, sans-serif" }}>
                Grova
              </span>
            </Link>
            <Card className="neomorphism bg-blue-500 border-0 hover:bg-blue-600 transition-all duration-300">
              <CardContent className="p-3">
                <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-100">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm font-medium">Back to Home</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">
              Complete Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Complete Financial
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From comprehensive banking integration across all 54 African countries to revolutionary investment
              platforms covering continental markets, from advanced payment systems to community-driven funding
              solutions - Grova provides everything you need in one comprehensive, powerful, and accessible platform
              designed specifically for Africa's unique financial landscape and diverse economic opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""} animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`neomorphism ${solution.background} ${solution.textColor} text-xs`}>
                      {solution.title}
                    </Badge>
                    {solution.badge && <Badge className="bg-gray-200 text-gray-700 text-xs">{solution.badge}</Badge>}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                  <div className="space-y-3 mb-6">
                    {solution.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div
                          className={`w-6 h-6 ${solution.background} rounded-lg neomorphism flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <div
                            className={`w-2 h-2 ${solution.textColor === "text-white" ? "bg-white" : "bg-black"} rounded-full`}
                          ></div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`neomorphism ${solution.background} hover:opacity-90 ${solution.textColor}`}
                    onClick={() => handleLearnMore(solution)}
                  >
                    Learn More About This Solution
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div
                    className={`neomorphism-deep ${solution.background} rounded-3xl p-6 hover:scale-105 transition-all duration-300`}
                  >
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={500}
                      height={400}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Access All Solutions?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Get started with Grova today and unlock the complete financial ecosystem designed specifically for Africa's
            diverse markets, unique challenges, and incredible opportunities. Experience the future of African finance.
          </p>
          <Button
            size="lg"
            className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base font-semibold"
            onClick={() => setNotification("Redirecting to app store...")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Grova App
          </Button>
        </div>
      </section>
    </div>
  )
}
