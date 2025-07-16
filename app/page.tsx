"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from 'next/head';
import {
  Download,
  Smartphone,
  Shield,
  Users,
  TrendingUp,
  QrCode,
  Brain,
  Building2,
  Wallet,
  Star,
  CheckCircle,
  Globe,
  BarChart3,
  MessageSquare,
  WifiOff,
  PlayCircle,
  Bluetooth,
  Zap,
  Mail,
  Phone,
  Clock,
  Mic,
  ArrowRight,
  Volume2,
  VolumeX,
  MicIcon,
  Accessibility,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function GrovaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState("")
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Voice Assistant States
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceText, setVoiceText] = useState("")
  const [recognition, setRecognition] = useState<any>(null)

  // Initialize Voice Assistant
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // Initialize speech recognition
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.continuous = true
        recognitionInstance.interimResults = true
        recognitionInstance.lang = "en-US"

        recognitionInstance.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map((result: any) => result.transcript)
            .join("")

          setVoiceText(transcript)
          handleVoiceCommand(transcript)
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
        }

        recognitionInstance.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error)
          setIsListening(false)
        }

        setRecognition(recognitionInstance)
      }
    }
  }, [])

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".fade-in-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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

  const startListening = () => {
    if (recognition) {
      setIsListening(true)
      recognition.start()
    }
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
      setIsListening(false)
    }
  }

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()

    if (lowerCommand.includes("download") || lowerCommand.includes("get app")) {
      speak("Initiating download for Grova app. You'll be redirected to the app store.")
      handleDownload("Android")
    } else if (lowerCommand.includes("features")) {
      speak(
        "Navigating to features page where you can learn about our triple wallet system, offline technology, and AI coaching.",
      )
      window.location.href = "/features"
    } else if (lowerCommand.includes("contact") || lowerCommand.includes("help")) {
      speak("Navigating to contact page. You can reach us at sammywinter01@gmail.com or call +254711129204")
      window.location.href = "/contact"
    } else if (lowerCommand.includes("security")) {
      speak("Navigating to security page to learn about our bank-grade security measures.")
      window.location.href = "/security"
    } else if (lowerCommand.includes("about")) {
      speak("Navigating to about page to learn more about Grova's mission in Africa.")
      window.location.href = "/about"
    } else if (lowerCommand.includes("read") || lowerCommand.includes("explain")) {
      speak(
        "Grova is a revolutionary financial super-app designed for Africa's underbanked populations. We offer a triple wallet system supporting fiat currencies, cryptocurrencies, and community credits. Our platform works offline using Bluetooth peer-to-peer transfers and mesh networks, ensuring financial access even in remote areas. We also provide AI-powered financial coaching, banking integration with major African institutions, investment platforms, insert here and comprehensive security features.",
      )
    }
  }

  const toggleVoiceAssistant = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (!isVoiceEnabled) {
      speak(
        "Voice assistant activated. Say 'download app', 'features', 'contact', 'security', 'about', or 'read' to navigate or get information.",
      )
    } else {
      speechSynthesis.cancel()
      stopListening()
    }
  }

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Handle download button clicks
  const handleDownload = (platform: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (platform === "Android") {
        window.open("https://play.google.com/store/search?q=grova&c=apps", "_blank")
      } else if (platform === "iOS") {
        window.open("https://apps.apple.com/search?term=grova", "_blank")
      }
      setNotification(`Redirecting to ${platform} store...`)
      setTimeout(() => setNotification(""), 3000)
    }, 1500)
  }

  // Handle form submissions
  const handleNotifyMe = () => {
    setNotification("You'll be notified when insurance services are available!")
    setTimeout(() => setNotification(""), 3000)
  }

  const handleContactSubmit = () => {
    setNotification("Thank you! We'll get back to you soon.")
    setTimeout(() => setNotification(""), 3000)
  }

  // Handle Learn More functionality
  const handleLearnMore = (feature: any) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
    if (isVoiceEnabled) {
      speak(`Learning more about ${feature.title}. ${feature.description}`)
    }
  }

  // Enhanced data arrays with detailed information for learn more functionality
  const revolutionaryFeatures = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Triple Wallet System",
      description:
        "Fiat, Crypto, and Credits wallets unified in one powerful platform designed specifically for African financial ecosystems",
      background: "bg-blue-500",
      textColor: "text-white",
      delay: "animation-delay-100",
      detailedInfo: {
        overview:
          "Our revolutionary Triple Wallet System is the cornerstone of Grova's financial ecosystem, designed to address the unique challenges faced by Africa's diverse financial landscape. This comprehensive system integrates three distinct wallet types into one seamless platform, enabling users to manage traditional currencies, digital assets, and community-based credits all in one place.",
        features: [
          "Fiat Wallet: Supports major African currencies including KES, USD, NGN, ZAR, GHS, UGX, TZS, and more with real-time exchange rates and instant conversions",
          "Crypto Wallet: Full support for Bitcoin, Ethereum, Binance Coin, Cardano, Polygon, and over 100 altcoins with advanced portfolio tracking",
          "Credits Wallet: Community-backed digital credits system designed for local economies, enabling peer-to-peer lending and community savings",
          "Cross-wallet transactions with automatic currency conversion and minimal fees",
          "Real-time balance synchronization across all wallet types",
          "Advanced security protocols including multi-signature support and hardware wallet integration",
        ],
        benefits: [
          "Eliminates the need for multiple financial apps and accounts",
          "Reduces transaction costs through intelligent routing and fee optimization",
          "Enables financial inclusion for unbanked populations through community credits",
          "Provides hedge against currency volatility through diversified holdings",
          "Supports both online and offline transaction capabilities",
        ],
        technicalSpecs:
          "Built on advanced blockchain infrastructure with support for multiple protocols including Ethereum, Binance Smart Chain, and Polygon. Features enterprise-grade security with AES-256 encryption, multi-factor authentication, and biometric verification.",
      },
    },
    {
      icon: <WifiOff className="h-6 w-6" />,
      title: "Offline-First Technology",
      description:
        "Revolutionary Bluetooth P2P transfers and mesh network support enabling financial transactions in remote areas without internet connectivity",
      background: "bg-orange-500",
      textColor: "text-black",
      delay: "animation-delay-200",
      detailedInfo: {
        overview:
          "Grova's Offline-First Technology represents a paradigm shift in mobile financial services, specifically engineered to serve Africa's diverse connectivity landscape. This groundbreaking system ensures that financial services remain accessible even in areas with poor or no internet connectivity, addressing one of the biggest barriers to financial inclusion across the continent.",
        features: [
          "Bluetooth Low Energy (BLE) peer-to-peer transfers enabling direct device-to-device transactions",
          "Mesh network technology creating local financial networks that operate independently of internet infrastructure",
          "Offline transaction queuing with automatic synchronization when connectivity is restored",
          "QR code-based payments that work without internet connection",
          "Local data storage with encrypted transaction history",
          "Emergency transaction capabilities for critical financial needs",
        ],
        benefits: [
          "Enables financial transactions in rural and remote areas with poor connectivity",
          "Reduces dependency on expensive mobile data for basic financial operations",
          "Provides financial resilience during network outages or emergencies",
          "Supports community-based financial networks and local economies",
          "Ensures business continuity for merchants and service providers",
        ],
        technicalSpecs:
          "Utilizes advanced mesh networking protocols with end-to-end encryption. Supports up to 50 devices in a single mesh network with automatic relay capabilities. Transaction data is compressed and optimized for minimal bandwidth usage when syncing.",
      },
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Financial Coach",
      description:
        "GPT-4 powered personalized financial guidance specifically tailored for developing economies and African financial contexts",
      background: "bg-blue-500",
      textColor: "text-white",
      delay: "animation-delay-300",
      detailedInfo: {
        overview:
          "Our AI Financial Coach represents the most advanced application of artificial intelligence in African financial services. Powered by GPT-4 and trained on extensive datasets of African economic patterns, this intelligent system provides personalized financial guidance that understands the unique challenges and opportunities within developing economies.",
        features: [
          "Personalized financial advice based on individual spending patterns and goals",
          "Multilingual support including English, Swahili, Hausa, Yoruba, Amharic, and French",
          "Voice-activated interface with natural language processing capabilities",
          "Context-aware recommendations considering local economic conditions",
          "Educational content delivery through interactive lessons and tutorials",
          "Goal-setting and progress tracking with intelligent milestone suggestions",
        ],
        benefits: [
          "Democratizes access to professional financial advice across all income levels",
          "Provides culturally relevant and locally appropriate financial guidance",
          "Helps users build financial literacy and make informed decisions",
          "Reduces financial stress through proactive guidance and alerts",
          "Supports wealth building strategies tailored to African markets",
        ],
        technicalSpecs:
          "Built on advanced machine learning models with continuous learning capabilities. Processes over 1 million data points daily to improve recommendations. Features real-time market analysis and predictive modeling for investment suggestions.",
      },
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Banking Integration",
      description:
        "Seamless connectivity with major African banks, SACCOs, microfinance institutions, and mobile money providers across the continent",
      background: "bg-orange-500",
      textColor: "text-black",
      delay: "animation-delay-400",
      detailedInfo: {
        overview:
          "Grova's Banking Integration system creates the most comprehensive financial network across Africa, connecting users with traditional banks, SACCOs, microfinance institutions, and mobile money providers. This extensive integration eliminates financial silos and creates a unified financial ecosystem that serves all segments of the African population.",
        features: [
          "Direct integration with over 200 African financial institutions",
          "Support for major banks including KCB, Equity Bank, Standard Bank, First Bank Nigeria, and Ecobank",
          "SACCO connectivity for Police SACCO, Teachers SACCO, Stima SACCO, and hundreds of others",
          "Microfinance integration with Faulu, Kenya Women Finance Trust, BRAC, and regional MFIs",
          "Mobile money support for M-Pesa, MTN Mobile Money, Orange Money, and Airtel Money",
          "Real-time account balance checking and transaction history across all connected accounts",
        ],
        benefits: [
          "Eliminates the need to manage multiple banking apps and accounts",
          "Enables instant transfers between different financial institutions",
          "Provides comprehensive financial overview across all accounts",
          "Reduces transaction costs through optimized routing",
          "Supports financial planning with consolidated data analysis",
        ],
        technicalSpecs:
          "Utilizes Open Banking APIs and secure financial messaging protocols. Features bank-grade security with PCI DSS compliance and real-time fraud detection. Supports both traditional banking protocols and modern fintech APIs.",
      },
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Investment Platform",
      description:
        "Comprehensive investment ecosystem featuring NSE integration, cryptocurrency trading, bonds, and professional portfolio management tools",
      background: "bg-blue-500",
      textColor: "text-white",
      delay: "animation-delay-500",
      detailedInfo: {
        overview:
          "Grova's Investment Platform democratizes access to sophisticated investment opportunities across Africa, providing both novice and experienced investors with professional-grade tools and market access. Our platform integrates traditional African stock exchanges with global cryptocurrency markets and alternative investment opportunities.",
        features: [
          "Nairobi Securities Exchange (NSE) integration with real-time trading capabilities",
          "Access to major African stock exchanges including JSE, NSE Nigeria, and Ghana Stock Exchange",
          "Comprehensive cryptocurrency trading supporting Bitcoin, Ethereum, and 100+ altcoins",
          "Government bonds and treasury bills from multiple African countries",
          "Mutual funds and ETFs focused on African markets and emerging economies",
          "Professional portfolio management with robo-advisor capabilities",
        ],
        benefits: [
          "Democratizes access to investment opportunities previously available only to wealthy individuals",
          "Provides diversification across multiple asset classes and markets",
          "Offers professional-grade analysis and portfolio optimization",
          "Enables fractional investing with low minimum amounts",
          "Supports long-term wealth building strategies for African investors",
        ],
        technicalSpecs:
          "Features real-time market data feeds, advanced charting tools, and algorithmic trading capabilities. Includes risk management tools with stop-loss orders and portfolio rebalancing. Supports both manual and automated investment strategies.",
      },
    },
    {
      icon: <QrCode className="h-6 w-6" />,
      title: "QR Payment System",
      description:
        "Advanced QR code payment infrastructure supporting both online and offline transactions for merchants and individuals across Africa",
      background: "bg-orange-500",
      textColor: "text-black",
      delay: "animation-delay-600",
      detailedInfo: {
        overview:
          "Grova's QR Payment System revolutionizes how payments are made across Africa, providing a universal payment method that works seamlessly across different platforms, currencies, and connectivity conditions. This system is designed to serve everyone from street vendors to large retailers with equal efficiency.",
        features: [
          "Universal QR codes that work across all wallet types and currencies",
          "Offline QR code generation and processing capabilities",
          "Merchant dashboard with sales analytics and inventory management",
          "Customer loyalty programs and discount management",
          "Multi-currency support with automatic conversion",
          "Integration with existing POS systems and e-commerce platforms",
        ],
        benefits: [
          "Eliminates the need for cash transactions and reduces theft risks",
          "Provides instant payment confirmation and settlement",
          "Reduces transaction costs for merchants and customers",
          "Enables financial inclusion for small-scale traders and vendors",
          "Supports business growth through detailed transaction analytics",
        ],
        technicalSpecs:
          "Utilizes advanced QR code technology with error correction and security features. Supports dynamic QR codes with embedded payment amounts and merchant information. Features fraud detection and prevention mechanisms.",
      },
    },
  ]

  // Updated stats to reflect Africa-wide impact
  const stats = [
    { number: "1.4B+", label: "African Population We Aim to Serve" },
    { number: "54", label: "African Countries Targeted" },
    { number: "99.9%", label: "Uptime Guarantee Across Continent" },
    { number: "0.1%", label: "Transaction Fees Pan-Africa" },
  ]

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Small Business Owner, Nairobi",
      content:
        "Grova completely transformed how I manage my business finances. The offline payment system saved my sales during network outages, and the AI financial coach helped me optimize my cash flow. I've increased my revenue by 40% since using Grova's comprehensive business tools.",
      rating: 5,
      image: "/images/entrepreneurs.jpg",
    },
    {
      name: "David Ochieng",
      role: "Farmer, Kisumu",
      content:
        "The AI coach helped me understand investments and agricultural insurance. Now I'm growing my savings while supporting my community through the digital chama system. Grova's agricultural tools have revolutionized how I manage my farm finances and plan for seasonal variations.",
      rating: 5,
      image: "/images/farmer.jpg",
    },
    {
      name: "Amina Hassan",
      role: "Market Vendor, Mombasa",
      content:
        "Sending money to family is now instant and affordable through Grova's banking integration. The crypto wallet opened new opportunities for me, and the QR payment system has modernized my business. My customers love the convenience and I get paid instantly.",
      rating: 5,
      image: "/images/market-vendor.jpg",
    },
    {
      name: "James Mwangi",
      role: "Financial Advisor, Nakuru",
      content:
        "The professional advisory platform connects me with clients across Kenya and beyond. Grova's comprehensive tools have revolutionized my practice, allowing me to serve more clients effectively and provide better financial guidance through their advanced analytics platform.",
      rating: 5,
      image: "/images/financial-advisor.jpg",
    },
    {
      name: "Martin Mburu",
      role: "Entrepreneur, Eldoret",
      content:
        "The Founders Investor Room helped me secure funding for my startup through both institutional investors and community crowdfunding. The community support is incredible, and the business planning tools provided invaluable guidance for scaling my business across East Africa.",
      rating: 5,
      image: "/images/coworking-space.jpg",
    },
    {
      name: "Peter Otieno",
      role: "Delivery Driver, Kisii",
      content:
        "QR payments make my deliveries faster and more efficient. Customers love the convenience and I get paid instantly. The expense tracking helps me manage my earnings better, and the investment platform is helping me build wealth for my family's future.",
      rating: 5,
      image: "/images/delivery-service.jpg",
    },
  ]

  const faqData = [
    {
      question: "How secure is Grova's financial platform?",
      answer:
        "Grova employs bank-grade security with multiple layers of protection including end-to-end AES-256 encryption, blockchain integration for immutable transaction records, biometric authentication (fingerprint, facial recognition, voice patterns), and comprehensive multi-factor verification. All transactions are secured with military-grade encryption protocols used by global financial institutions. Our security infrastructure is regularly audited by third-party security firms and complies with international financial security standards including PCI DSS and ISO 27001.",
    },
    {
      question: "Does Grova work offline across Africa?",
      answer:
        "Yes! Grova's revolutionary offline-first technology is specifically designed for Africa's diverse connectivity landscape. Our system enables Bluetooth Low Energy peer-to-peer transfers, mesh network support for community-wide financial networks, and offline transaction queuing with automatic synchronization when connectivity returns. You can send money, make payments, process QR codes, and access core financial features even without internet connectivity. This technology is particularly valuable in rural areas and during network outages.",
    },
    {
      question: "What are Grova's transaction fees across African markets?",
      answer:
        "Grova offers highly competitive transaction fees starting from just 0.1% for most transactions. We believe in financial inclusion with affordable pricing for all users, especially for small transactions that are common in developing economies. Our fee structure is transparent with no hidden charges, and we offer volume discounts for frequent users. Cross-border transactions within Africa are processed at significantly lower rates than traditional remittance services, making it affordable to send money across the continent.",
    },
    {
      question: "Which African banks and financial institutions does Grova support?",
      answer:
        "Grova integrates with over 200 financial institutions across all 54 African countries. This includes major banks like KCB, Equity Bank, Standard Bank, First Bank Nigeria, Ecobank, and Absa. We also connect with hundreds of SACCOs including Police SACCO, Teachers SACCO, and Stima SACCO, plus microfinance institutions like Faulu, Kenya Women Finance Trust, and BRAC. Additionally, we support all major mobile money providers including M-Pesa, MTN Mobile Money, Orange Money, Airtel Money, as well as global providers like PayPal, Skrill, and Western Union.",
    },
    {
      question: "How does Grova's AI Financial Coach work for African users?",
      answer:
        "Our GPT-4 powered AI Financial Coach is specifically trained on African economic data and financial patterns. It provides personalized financial guidance in multiple languages including English, Swahili, Hausa, Yoruba, Amharic, and French. The AI understands local economic conditions, cultural financial practices, and regulatory environments across different African countries. It offers voice commands for accessibility, daily financial tips relevant to your location, spending analysis based on local patterns, and context-aware advice that considers factors like seasonal income variations, local investment opportunities, and regional economic conditions.",
    },
    {
      question: "Can I invest in African and global markets through Grova?",
      answer:
        "Grova offers comprehensive investment opportunities including access to major African stock exchanges (Nairobi Securities Exchange, Johannesburg Stock Exchange, Nigerian Stock Exchange, Ghana Stock Exchange, and 15+ others), cryptocurrency trading with Bitcoin, Ethereum, and 100+ altcoins, government securities like Treasury Bills and Bonds from multiple African countries, mutual funds and ETFs focused on African markets, and alternative investments including REITs and commodity trading. Our platform provides professional-grade analytics with Sharpe ratio, Alpha, and Beta calculations, plus robo-advisor capabilities for automated portfolio management.",
    },
    {
      question: "What is the Founders Investor Room and how does it work?",
      answer:
        "The Founders Investor Room is Africa's most comprehensive startup funding platform. Entrepreneurs can submit business ideas with video pitches, access business plan templates and financial modeling tools, and get matched with verified investors including angel investors, venture capital firms, and development finance institutions. The platform also enables community crowdfunding, allowing ordinary Africans to invest in local startups. We provide mentorship programs, market research tools, competitive analysis, and ongoing business development support.",
    },
    {
      question: "How does Grova's Community Treasury modernize traditional savings groups?",
      answer:
        "Our Digital Community Treasury brings traditional African savings practices like chamas and tontines into the digital age while maintaining their community spirit. The system provides automated contribution tracking, transparent fund management with blockchain logging, democratic voting for fund allocation and investment decisions, group savings goals with milestone tracking, and peer-to-peer lending with community-based credit scoring. Members can participate remotely, track progress in real-time, and benefit from higher returns through group investment opportunities. The system maintains the social bonds of traditional savings groups while adding efficiency, transparency, and security.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      <Head>
        <meta name="google-site-verification" content="OKBSO_cbVMIHl3iGmDKz5LT3adpqWfhxS8xRb8pa3rE" />
      </Head>
      {/* Voice Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up animation-delay-1000">
        <Button
          onClick={toggleVoiceAssistant}
          className={`neomorphism rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover-lift ${
            isVoiceEnabled ? "bg-blue-500 hover:bg-blue-600 animate-glow" : "bg-gray-600 hover:bg-gray-700"
          } text-white`}
          title="Voice Assistant for Accessibility"
        >
          {isListening ? (
            <MicIcon className="h-8 w-8 animate-pulse" />
          ) : isSpeaking ? (
            <Volume2 className="h-8 w-8 animate-bounce" />
          ) : (
            <Accessibility className="h-8 w-8" />
          )}
        </Button>

        {isVoiceEnabled && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg p-4 shadow-xl neomorphism min-w-64 animate-slide-in-right">
            <div className="text-sm font-bold mb-2 font-heading">Voice Assistant Active</div>
            <div className="text-xs text-gray-600 mb-3">
              Say: "download app", "features", "contact", "security", "about", or "read"
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={startListening}
                disabled={isListening}
                className="neomorphism bg-green-500 hover:bg-green-600 text-white hover-scale"
              >
                {isListening ? <MicIcon className="h-4 w-4 animate-pulse" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                onClick={stopListening}
                className="neomorphism bg-red-500 hover:bg-red-600 text-white hover-scale"
              >
                <VolumeX className="h-4 w-4" />
              </Button>
            </div>
            {voiceText && (
              <div className="mt-2 text-xs bg-gray-100 p-2 rounded animate-fade-in">Heard: "{voiceText}"</div>
            )}
          </div>
        )}
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 animate-bounce-gentle" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-white rounded-2xl p-8 neomorphism animate-scale-in">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="text-gray-900 font-bold font-heading">Preparing download...</span>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto neomorphism animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-gray-900 flex items-center gap-3 font-heading">
              {selectedFeature?.icon}
              {selectedFeature?.title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">{selectedFeature?.description}</DialogDescription>
          </DialogHeader>

          {selectedFeature?.detailedInfo && (
            <div className="space-y-6 mt-6">
              <div className="animate-fade-in-up">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedFeature.detailedInfo.overview}</p>
              </div>

              {selectedFeature.detailedInfo.features && (
                <div className="animate-fade-in-up animation-delay-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedFeature.detailedInfo.features.map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 animate-fade-in-left"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 animate-bounce-gentle" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFeature.detailedInfo.benefits && (
                <div className="animate-fade-in-up animation-delay-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedFeature.detailedInfo.benefits.map((benefit: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 animate-fade-in-right"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0 animate-pulse" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFeature.detailedInfo.technicalSpecs && (
                <div className="animate-fade-in-up animation-delay-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Technical Specifications</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedFeature.detailedInfo.technicalSpecs}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-8 animate-fade-in-up animation-delay-800">
            <Button
              onClick={() => handleDownload("Android")}
              className="neomorphism bg-blue-500 hover:bg-blue-600 text-white flex-1 hover-lift btn-animate"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Grova App
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="neomorphism border-gray-300 hover:bg-gray-50 hover-scale"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg animate-slide-in-down" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Animated Logo */}
            <Link href="/" className="flex items-center space-x-2 group animate-fade-in-left">
              <div className="w-8 h-8 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-glow">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 font-logo">
                Grova
              </span>
            </Link>

            {/* Desktop Navigation with hover effects */}
            <div className="hidden md:flex items-center space-x-6 animate-fade-in-up animation-delay-200">
              {[
                { href: "/features", label: "Features" },
                { href: "/solutions", label: "Solutions" },
                { href: "/security", label: "Security" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 text-sm relative group hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA with animations */}
            <div className="hidden md:flex items-center space-x-3 animate-fade-in-right animation-delay-400">
              <Button
                variant="outline"
                className="neomorphism border-blue-500 text-blue-600 hover:bg-blue-50 bg-white text-sm hover-scale transition-all duration-300"
                onClick={() => setNotification("Login feature coming soon!")}
              >
                Login
              </Button>
              <Button
                className="neomorphism bg-blue-500 hover:bg-blue-600 text-white text-sm hover-lift transition-all duration-300 btn-animate"
                onClick={() => handleDownload("Android")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </div>

            {/* Animated Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300 hover-rotate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 top-3" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 top-3" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100 mt-4 animate-slide-in-down" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-white neomorphism rounded-xl">
              <div className="flex flex-col space-y-3">
                {[
                  { href: "/features", label: "Features" },
                  { href: "/solutions", label: "Solutions" },
                  { href: "/security", label: "Security" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300 hover-lift animate-fade-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="border-gray-200" />
                <Button
                  variant="outline"
                  className="neomorphism border-blue-500 text-blue-600 hover:bg-blue-50 w-full bg-white text-sm hover-scale"
                  onClick={() => {
                    setNotification("Login feature coming soon!")
                    setMobileMenuOpen(false)
                  }}
                >
                  Login
                </Button>
                <Button
                  className="neomorphism bg-blue-500 hover:bg-blue-600 text-white w-full text-sm hover-lift btn-animate"
                  onClick={() => {
                    handleDownload("Android")
                    setMobileMenuOpen(false)
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with Animations */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in-left">
              <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs animate-bounce-gentle">
                🚀 Revolutionary Financial Super-App for Africa
              </Badge>

              <h1 className="text-2xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight animate-fade-in-up font-heading">
                Finance Without
                <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  Borders
                </span>
              </h1>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed animate-fade-in-up animation-delay-200">
                Revolutionary financial super-app designed specifically for Africa's 1.4 billion people and underbanked
                populations across all 54 countries. Our comprehensive platform features a triple wallet system
                supporting fiat currencies, cryptocurrencies, and community credits, combined with groundbreaking
                offline-first technology, AI-powered financial coaching, and seamless integration with over 200 African
                financial institutions - all unified in one powerful, secure, and accessible platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="neomorphism bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-sm font-bold shadow-2xl hover-lift transition-all duration-300 group btn-animate"
                  onClick={() => handleDownload("Android")}
                >
                  <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Download Grova App
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="neomorphism border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-sm font-bold bg-white hover-scale transition-all duration-300 group"
                  onClick={() => setNotification("Demo video coming soon!")}
                >
                  <PlayCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm animate-fade-in-up animation-delay-600">
                {[
                  { icon: CheckCircle, text: "Free Download" },
                  { icon: CheckCircle, text: "Works Offline" },
                  { icon: CheckCircle, text: "Bank-Grade Security" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-600 bg-white/80 rounded-lg p-3 neomorphism hover-lift transition-all duration-300 card-hover"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <item.icon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 animate-pulse" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 shadow-2xl hover-lift transition-all duration-500 animate-float">
                <Image
                  src="/images/mobile-banking.jpg"
                  alt="African person using mobile banking"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-lg"
                  priority
                />
              </div>

              {/* Enhanced Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 neomorphism shadow-xl animate-bounce-gentle animation-delay-200 hover-glow">
                <Smartphone className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 neomorphism shadow-xl animate-pulse animation-delay-400 hover-scale">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 neomorphism shadow-xl animate-bounce-gentle animation-delay-600 hover-rotate">
                <Wallet className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-xl lg:text-2xl font-black text-white mb-4 font-heading">
              Transforming Africa's Financial Landscape
            </h2>
            <p className="text-sm text-gray-300 max-w-3xl mx-auto">
              Real impact numbers showing our commitment to serving all of Africa's 1.4 billion people and achieving
              complete financial inclusion across the continent
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center hover-lift transition-all duration-300 animate-fade-in-up fade-in-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-2xl lg:text-4xl font-black mb-3 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent animate-number-count font-heading">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-bold text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Triple Wallet System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in-left fade-in-on-scroll">
              <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs animate-bounce-gentle">
                Triple Wallet System
              </Badge>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
                Three Wallets, Infinite Possibilities
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Manage fiat currencies, cryptocurrencies, and community credits all in one place. Seamlessly switch
                between traditional banking and digital assets.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-glow">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Fiat Wallet</h3>
                    <p className="text-gray-600">KES, USD, INR with real bank integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-400">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-scale">
                    <QrCode className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Crypto Wallet</h3>
                    <p className="text-gray-600">Bitcoin, Ethereum, and stablecoins</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-600">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-rotate">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Credits Wallet</h3>
                    <p className="text-gray-600">Community-backed digital credits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right fade-in-on-scroll">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 shadow-2xl hover-lift">
                <Image
                  src="/images/pexels-kamoi-5556823.jpg"
                  alt="Three young people in a workshop discussing"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Offline-First Technology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
            <div className="lg:col-start-2 animate-fade-in-right fade-in-on-scroll">
              <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs animate-bounce-gentle">
                Offline-First Technology
              </Badge>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
                Banking Without Internet
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Revolutionary offline capabilities ensure financial access even in remote areas. Bluetooth P2P transfers
                and mesh networks keep you connected.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-200">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-glow">
                    <Bluetooth className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Bluetooth P2P Transfers</h3>
                    <p className="text-gray-600">Send money directly between devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-400">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-scale">
                    <WifiOff className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Mesh Network Support</h3>
                    <p className="text-gray-600">Create local financial networks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-600">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-rotate">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Transaction Queue</h3>
                    <p className="text-gray-600">Sync when connectivity returns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-start-1 lg:row-start-1 relative animate-fade-in-left fade-in-on-scroll">
              <div className="neomorphism-deep bg-gradient-to-br from-orange-500 to-blue-500 rounded-3xl p-8 shadow-2xl hover-lift">
                <Image
                  src="/images/pexels-kingzubby-15487172.jpg"
                  alt="Man and woman in a cornfield"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: AI-Powered Coach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in-left fade-in-on-scroll">
              <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs animate-bounce-gentle">
                AI-Powered Coach
              </Badge>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
                Your Personal Financial Coach
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                GPT-4 powered AI coach provides personalized financial guidance tailored for developing economies. Voice
                commands and multilingual support ensure accessibility for all.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-glow">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Personalized Advice</h3>
                    <p className="text-gray-600">Context-aware financial guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-400">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-scale">
                    <Volume2 className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Voice Commands</h3>
                    <p className="text-gray-600">Multilingual voice interface</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-fade-in-up animation-delay-600">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center flex-shrink-0 hover-rotate">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-heading">Spending Analysis</h3>
                    <p className="text-gray-600">AI-driven financial insights</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right fade-in-on-scroll">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 shadow-2xl hover-lift">
                <Image
                  src="/images/pexels-josiah-matthew-145486517-10697799.jpg"
                  alt="Older man in a field looking at something in his hands"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Revolutionary Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up fade-in-on-scroll">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-sm animate-bounce-gentle">
              Revolutionary Technology
            </Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
              Core Revolutionary Features
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              Grova combines cutting-edge technology with deep understanding of African financial needs, delivering
              comprehensive solutions that work seamlessly both online and offline across all 54 African countries. Our
              revolutionary features address the unique challenges faced by Africa's diverse financial landscape while
              providing world-class functionality and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`neomorphism border-0 ${feature.background} ${feature.textColor} hover-lift transition-all duration-300 shadow-xl cursor-pointer group animate-fade-in-up fade-in-on-scroll card-hover ${feature.delay}`}
                onClick={() => handleLearnMore(feature)}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${
                      feature.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-2xl flex items-center justify-center mb-4 neomorphism group-hover:scale-110 transition-transform duration-300 hover-glow`}
                  >
                    {React.cloneElement(feature.icon, { className: "h-8 w-8" })}
                  </div>
                  <CardTitle
                    className={`text-base font-black ${feature.textColor} group-hover:animate-pulse font-heading`}
                  >
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${feature.textColor} text-sm opacity-90 leading-relaxed mb-4`}>
                    {feature.description}
                  </CardDescription>
                  <div className="flex items-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials with animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up fade-in-on-scroll">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-sm animate-bounce-gentle">
              User Stories
            </Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
              Trusted by Thousands Across Africa
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              See how Grova is transforming financial lives across Africa, from small business owners in Nairobi to
              farmers in rural Kenya, from market vendors in Mombasa to entrepreneurs in Eldoret. Our users represent
              the diversity and resilience of Africa's economic landscape, and their success stories demonstrate the
              real impact of accessible, comprehensive financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover-lift transition-all duration-300 shadow-xl animate-fade-in-up fade-in-on-scroll group cursor-pointer card-hover"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setNotification(`Thanks for reading ${testimonial.name}'s story!`)}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current group-hover:animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm font-heading">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up fade-in-on-scroll">
            <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-sm animate-bounce-gentle">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
              Everything You Need to Know
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              Get comprehensive answers to common questions about Grova's revolutionary features, security measures,
              African market coverage, and how our platform is transforming financial services across the continent. Our
              detailed responses address the unique aspects of African financial markets and how Grova serves diverse
              user needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="neomorphism bg-white rounded-2xl px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up fade-in-on-scroll hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-sm py-6 hover:text-blue-600 transition-colors duration-300 font-heading">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-6 animate-fade-in">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <Badge className="mb-6 neomorphism bg-white/20 text-white border-white/30 text-sm animate-bounce-gentle">
            Ready to Transform Your Financial Life?
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-black mb-6 leading-tight animate-fade-in-up font-heading">
            Download Grova Today
          </h2>
          <p className="text-sm mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in-up animation-delay-200">
            Join thousands of users across Africa who are already experiencing the future of finance with Grova.
            Revolutionary features including triple wallet system, offline-first technology, AI financial coaching,
            comprehensive banking integration, investment platforms, and bank-grade security - all unified in one
            powerful app designed specifically for Africa's financial empowerment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-sm font-black shadow-2xl hover-lift transition-all duration-300 group btn-animate"
              onClick={() => handleDownload("Android")}
            >
              <Download className="mr-3 h-7 w-7 group-hover:animate-bounce" />
              Download for Android
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="neomorphism border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-sm font-black bg-transparent shadow-2xl hover-scale transition-all duration-300 group"
              onClick={() => handleDownload("iOS")}
            >
              <Download className="mr-3 h-7 w-7 group-hover:animate-bounce" />
              Download for iOS
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            {[
              { icon: CheckCircle, text: "Free to Download" },
              { icon: CheckCircle, text: "Works Offline" },
              { icon: CheckCircle, text: "Bank-Grade Security" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-white/90 bg-white/10 rounded-xl p-4 neomorphism hover:bg-white/20 transition-all duration-300 cursor-pointer hover-lift"
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => setNotification(`${item.text} - Learn more about this feature!`)}
              >
                <item.icon className="h-6 w-6 mr-3 flex-shrink-0 animate-pulse" />
                <span className="font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up fade-in-on-scroll">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-sm animate-bounce-gentle">
              Get in Touch
            </Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">We're Here to Help</h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              Have questions about Grova's revolutionary features? Need support with your financial journey? Want to
              partner with us to expand financial inclusion across Africa? Our dedicated team is available 24/7 to
              provide comprehensive assistance and support for all your financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Get comprehensive help via email within 24 hours",
                contact: "sammywinter01@gmail.com",
                bg: "bg-blue-500",
                textColor: "text-white",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Call us directly for immediate assistance",
                contact: "+254 711 129204",
                bg: "bg-orange-500",
                textColor: "text-black",
              },
              {
                icon: Clock,
                title: "Support Hours",
                description: "We're here to help across all African time zones",
                contact: "24/7 Support",
                bg: "bg-blue-500",
                textColor: "text-white",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`neomorphism border-0 ${contact.bg} ${contact.textColor} text-center hover-lift transition-all duration-300 shadow-xl cursor-pointer animate-fade-in-up fade-in-on-scroll group card-hover`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => {
                  if (contact.contact.includes("@")) {
                    window.location.href = `mailto:${contact.contact}`
                  } else if (contact.contact.includes("+")) {
                    window.location.href = `tel:${contact.contact}`
                  } else {
                    setNotification("24/7 support available through email and phone!")
                  }
                }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${
                      contact.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-2xl neomorphism flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 hover-glow`}
                  >
                    <contact.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-black mb-3 text-base group-hover:animate-pulse font-heading">{contact.title}</h3>
                  <p className={`${contact.textColor} text-sm mb-4 opacity-90`}>{contact.description}</p>
                  <p className="font-bold text-sm">{contact.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="animate-fade-in-up fade-in-on-scroll">
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-glow">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-black group-hover:text-blue-400 transition-colors duration-300 font-logo">
                  Grova
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Finance without borders. Revolutionary financial platform designed specifically for Africa's 1.4 billion
                people and underbanked populations across all 54 countries. Empowering financial inclusion through
                innovative technology, comprehensive services, and deep understanding of African markets.
              </p>
              <div className="flex space-x-4">
                {[Globe, MessageSquare].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-full neomorphism flex items-center justify-center hover:bg-blue-500 transition-all duration-300 cursor-pointer hover-scale"
                    onClick={() => setNotification("Social media links coming soon!")}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: [
                  { href: "/features", label: "Features" },
                  { href: "/security", label: "Security" },
                  { href: "/solutions", label: "Solutions" },
                  { href: "#", label: "API" },
                ],
              },
              {
                title: "Company",
                links: [
                  { href: "/about", label: "About" },
                  { href: "#", label: "Careers" },
                  { href: "#", label: "Press" },
                  { href: "/contact", label: "Contact" },
                ],
              },
              {
                title: "Support",
                links: [
                  { href: "#", label: "Help Center" },
                  { href: "#", label: "Documentation" },
                  { href: "#", label: "Status" },
                  { href: "#", label: "Community" },
                ],
              },
            ].map((section, sectionIndex) => (
              <div
                key={section.title}
                className="animate-fade-in-up fade-in-on-scroll"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <h3 className="font-black mb-4 text-sm font-heading">{section.title}</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block hover-lift"
                        onClick={(e) => {
                          if (link.href === "#") {
                            e.preventDefault()
                            setNotification(`${link.label} page coming soon!`)
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up fade-in-on-scroll">
            <p className="text-gray-400 text-sm">
              © 2025 Grova. All rights reserved - a product by boldstreet partners
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Cookie Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors duration-300 hover-lift"
                  onClick={(e) => {
                    e.preventDefault()
                    setNotification(`${link.label} coming soon!`)
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
