"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Wallet,
  WifiOff,
  Brain,
  BarChart3,
  Calculator,
  Calendar,
  DollarSign,
  TrendingDown,
  Award,
  Download,
  CheckCircle,
  ArrowRight,
  Accessibility,
  Volume2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notification, setNotification] = useState("")
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  // Voice Assistant Functions
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.8
      utterance.onend = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
    }
  }

  const toggleVoiceAssistant = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled) {
      speak(
        "Voice assistant activated on Features page. You can learn about our triple wallet system, offline technology, AI coaching, and advanced tools.",
      )
    }
  }

  const handleLearnMore = (feature: any) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
    if (isVoiceEnabled) {
      speak(`Learning more about ${feature.title}. ${feature.description}`)
    }
  }

  const handleDownload = () => {
    setNotification("Redirecting to app store...")
    setTimeout(() => setNotification(""), 3000)
  }

  const coreFeatures = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Triple Wallet System",
      description:
        "Manage fiat currencies, cryptocurrencies, and community credits all in one comprehensive platform designed for African financial ecosystems",
      background: "bg-blue-500",
      textColor: "text-white",
      details: [
        "Fiat Wallet: Support for KES, USD, NGN, ZAR, GHS, UGX, TZS and all major African currencies with real-time banking integration",
        "Crypto Wallet: Bitcoin, Ethereum, Binance Coin, Cardano, Polygon and over 100 altcoins with advanced portfolio tracking and analytics",
        "Credits Wallet: Community-backed digital credits system enabling peer-to-peer lending, local commerce, and community savings circles",
        "Cross-wallet transactions with intelligent routing, automatic currency conversion, and minimal transaction fees",
        "Real-time balance synchronization across all wallet types with instant notifications and transaction confirmations",
        "Advanced security protocols including multi-signature support, hardware wallet integration, and biometric authentication",
      ],
      detailedInfo: {
        overview:
          "Our revolutionary Triple Wallet System represents the most comprehensive financial management solution ever created for African markets. This innovative system addresses the unique challenges of Africa's diverse financial landscape by integrating three distinct wallet types into one seamless, powerful platform that serves everyone from rural farmers to urban professionals.",
        technicalSpecs:
          "Built on advanced blockchain infrastructure supporting Ethereum, Binance Smart Chain, Polygon, and other major protocols. Features enterprise-grade security with AES-256 encryption, multi-factor authentication, and biometric verification. Real-time synchronization across all platforms with 99.9% uptime guarantee.",
        impact:
          "This system eliminates the need for multiple financial apps while providing unprecedented access to diverse financial instruments, enabling millions of Africans to participate in both traditional and digital economies simultaneously.",
      },
    },
    {
      icon: <WifiOff className="h-8 w-8" />,
      title: "Offline-First Technology",
      description:
        "Revolutionary offline capabilities enabling financial transactions in remote areas without internet connectivity through advanced mesh networking",
      background: "bg-orange-500",
      textColor: "text-black",
      details: [
        "Bluetooth Low Energy peer-to-peer transfers enabling direct device-to-device money transfers without internet connectivity",
        "Advanced mesh network technology creating resilient local financial networks that operate independently of traditional infrastructure",
        "Intelligent transaction queuing system that automatically syncs all offline transactions when connectivity returns",
        "Offline QR code generation and processing for merchant payments and peer-to-peer transfers",
        "Local data encryption and secure storage ensuring transaction integrity even during extended offline periods",
        "Emergency transaction capabilities for critical financial needs during network outages or natural disasters",
      ],
      detailedInfo: {
        overview:
          "Grova's Offline-First Technology represents a paradigm shift in mobile financial services, specifically engineered to serve Africa's diverse connectivity landscape. This groundbreaking system ensures that financial services remain accessible even in areas with poor or no internet connectivity, addressing one of the biggest barriers to financial inclusion across the continent.",
        technicalSpecs:
          "Utilizes advanced mesh networking protocols with end-to-end encryption. Supports up to 50 devices in a single mesh network with automatic relay capabilities. Transaction data is compressed and optimized for minimal bandwidth usage when syncing.",
        impact:
          "This technology enables financial transactions in the most remote areas of Africa, ensuring that geographic location and connectivity challenges never prevent access to essential financial services.",
      },
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Financial Coach",
      description:
        "GPT-4 powered personalized financial guidance specifically tailored for developing economies and African financial contexts",
      background: "bg-blue-500",
      textColor: "text-white",
      details: [
        "Personalized financial advice based on individual spending patterns, income cycles, and financial goals tailored to African economic conditions",
        "Comprehensive multilingual support including English, Swahili, Hausa, Yoruba, Amharic, French, and other African languages",
        "Advanced voice-activated interface with natural language processing capabilities for hands-free financial management",
        "Context-aware recommendations considering local economic conditions, seasonal variations, and cultural financial practices",
        "Interactive educational content delivery through personalized lessons, tutorials, and financial literacy programs",
        "Intelligent goal-setting and progress tracking with milestone suggestions and achievement rewards",
      ],
      detailedInfo: {
        overview:
          "Our AI Financial Coach represents the most advanced application of artificial intelligence in African financial services. Powered by GPT-4 and trained on extensive datasets of African economic patterns, this intelligent system provides personalized financial guidance that understands the unique challenges and opportunities within developing economies.",
        technicalSpecs:
          "Built on advanced machine learning models with continuous learning capabilities. Processes over 1 million data points daily to improve recommendations. Features real-time market analysis and predictive modeling for investment suggestions.",
        impact:
          "This AI coach democratizes access to professional financial advice, providing millions of Africans with personalized guidance that was previously available only to wealthy individuals with access to private financial advisors.",
      },
    },
  ]

  const advancedTools = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Advanced Financial Calculator Suite",
      description:
        "Comprehensive loan calculations, investment projections, and savings planning tools designed for African markets",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our financial calculator suite provides sophisticated tools for making informed financial decisions in African contexts. These calculators consider local interest rates, inflation patterns, and economic conditions.",
        features: [
          "Loan amortization schedules",
          "Investment return projections",
          "Savings goal planning",
          "Currency conversion",
          "Inflation adjustments",
        ],
      },
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "AI-Powered Budget Planner",
      description:
        "Intelligent monthly budget tracking with smart recommendations and expense optimization for African lifestyles",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our budget planning system uses artificial intelligence to understand African spending patterns and provide culturally relevant financial advice.",
        features: [
          "Automated categorization",
          "Smart alerts",
          "Goal-based budgeting",
          "Seasonal adjustments",
          "Family coordination",
        ],
      },
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Real-Time Currency Exchange",
      description: "Live exchange rates with smart conversion algorithms and cross-border payment optimization",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our currency exchange platform provides real-time rates for all African currencies plus major international currencies.",
        features: [
          "Real-time monitoring",
          "Cost optimization",
          "Rate alerts",
          "Historical analysis",
          "Multi-currency support",
        ],
      },
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Comprehensive Crypto Tracker",
      description:
        "Advanced portfolio tracking with comprehensive market analysis for African cryptocurrency investors",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our crypto tracker provides professional-grade portfolio management tools specifically designed for African cryptocurrency investors.",
        features: [
          "Performance tracking",
          "Risk analysis",
          "Automated rebalancing",
          "Tax reporting",
          "Market sentiment",
        ],
      },
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Intelligent Expense Tracker",
      description: "Automated categorization and AI-driven spending insights with budget optimization recommendations",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our expense tracking system uses machine learning to automatically categorize and analyze spending patterns specific to African contexts.",
        features: [
          "Auto-categorization",
          "Pattern analysis",
          "Budget alerts",
          "Merchant recognition",
          "Receipt scanning",
        ],
      },
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Professional Analytics Dashboard",
      description:
        "Institutional-grade performance metrics with Sharpe ratio, Alpha, Beta calculations and comprehensive reporting",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our analytics dashboard provides professional-grade financial metrics and performance analysis tools for informed decision-making.",
        features: [
          "Risk-adjusted returns",
          "Benchmark comparisons",
          "Performance attribution",
          "Correlation analysis",
          "Custom reporting",
        ],
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
          title="Voice Assistant for Accessibility"
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
            <DialogTitle className="text-xl font-black text-gray-900 flex items-center gap-3">
              {selectedFeature?.icon && React.cloneElement(selectedFeature.icon, { className: "h-6 w-6" })}
              {selectedFeature?.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">{selectedFeature?.description}</DialogDescription>
          </DialogHeader>

          {selectedFeature?.detailedInfo && (
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{selectedFeature.detailedInfo.overview}</p>
              </div>

              {selectedFeature.details && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedFeature.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFeature.detailedInfo.technicalSpecs && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">Technical Specifications</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{selectedFeature.detailedInfo.technicalSpecs}</p>
                </div>
              )}

              {selectedFeature.detailedInfo.impact && (
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">Impact</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{selectedFeature.detailedInfo.impact}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <Button onClick={handleDownload} className="neomorphism bg-blue-500 hover:bg-blue-600 text-white flex-1">
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
              Revolutionary Features
            </Badge>
            <h1 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight animate-fade-in-up font-heading">
              Powerful Features for
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                Modern Finance
              </span>
            </h1>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive suite of revolutionary tools and cutting-edge technologies that make Grova the
              most advanced financial platform for Africa's 1.4 billion people. Our features are specifically designed
              to address the unique challenges and opportunities within African financial markets while providing
              world-class functionality and security.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""} animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className={`mb-4 neomorphism ${feature.background} ${feature.textColor} text-xs`}>
                    {feature.title}
                  </Badge>
                  <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>

                  <div className="space-y-4 mb-6">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div
                          className={`w-8 h-8 ${feature.background} rounded-lg neomorphism flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <CheckCircle className={`h-4 w-4 ${feature.textColor}`} />
                        </div>
                        <p className="text-gray-600 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`neomorphism ${feature.background} hover:opacity-90 ${feature.textColor}`}
                    onClick={() => handleLearnMore(feature)}
                  >
                    Learn More About This Feature
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className={`neomorphism-deep ${feature.background} rounded-3xl p-6`}>
                    <div className="flex items-center justify-center h-64">
                      <div className={`${feature.textColor === "text-white" ? "text-white" : "text-black"}`}>
                        {React.cloneElement(feature.icon, { className: "h-24 w-24" })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4">Advanced Financial Tools</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional-grade tools for comprehensive financial management and analysis, specifically designed for
              African markets and economic conditions. These advanced features provide institutional-level capabilities
              while remaining accessible to all users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTools.map((tool, index) => (
              <Card
                key={index}
                className={`neomorphism border-0 ${tool.background} ${tool.textColor} hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleLearnMore(tool)}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 ${tool.textColor === "text-white" ? "bg-white/20" : "bg-black/20"} rounded-xl flex items-center justify-center mb-3`}
                  >
                    {tool.icon}
                  </div>
                  <CardTitle className={`text-base font-bold ${tool.textColor}`}>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${tool.textColor} text-sm opacity-90 mb-3`}>
                    {tool.description}
                  </CardDescription>
                  <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4">Built for African Professionals</h2>
              <p className="text-lg text-gray-600 mb-6">
                From corporate executives in Lagos to entrepreneurs in Nairobi, from financial advisors in Cape Town to
                small business owners in Accra, Grova provides the sophisticated tools needed for modern financial
                management across Africa's growing and diverse economy. Our platform serves professionals at every level
                with enterprise-grade functionality.
              </p>
              <Button
                className="neomorphism bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => setNotification("Professional tools documentation coming soon!")}
              >
                Explore Professional Tools
              </Button>
            </div>
            <div className="relative">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6">
                <Image
                  src="/images/office-meeting.jpg"
                  alt="Professional meeting"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Experience These Revolutionary Features Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Download Grova and discover how our revolutionary features including triple wallet system, offline-first
            technology, AI financial coaching, and advanced analytics can transform your financial life and empower your
            economic journey across Africa.
          </p>
          <Button
            size="lg"
            className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base font-semibold"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Grova App
          </Button>
        </div>
      </section>
    </div>
  )
}
