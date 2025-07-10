"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
  PiggyBank,
  BarChart3,
  MessageSquare,
  WifiOff,
  Banknote,
  PlayCircle,
  Target,
  Calculator,
  Calendar,
  DollarSign,
  TrendingDown,
  Lock,
  Eye,
  FileText,
  Award,
  Lightbulb,
  Handshake,
  Bluetooth,
  Zap,
  Mail,
  Phone,
  Clock,
  Camera,
  Mic,
  BookOpen,
  PieChart,
  Settings,
  UserCheck,
  Briefcase,
  Home,
  Car,
  Heart,
  Leaf,
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

        setRecognition(recognitionInstance)
      }
    }
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
        "Grova is a revolutionary financial super-app designed for Africa's underbanked populations. We offer a triple wallet system supporting fiat currencies, cryptocurrencies, and community credits. Our platform works offline using Bluetooth peer-to-peer transfers and mesh networks, ensuring financial access even in remote areas. We also provide AI-powered financial coaching, banking integration with major African institutions, investment platforms, and comprehensive security features.",
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
    // Simulate download process
    setTimeout(() => {
      setIsLoading(false)
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

  // Animation variants for different elements
  const fadeInUp = "animate-fade-in-up"
  const fadeInLeft = "animate-fade-in-left"
  const fadeInRight = "animate-fade-in-right"
  const scaleIn = "animate-scale-in"
  const slideInDown = "animate-slide-in-down"

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

  const completeSolutions = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Comprehensive Banking Integration Across Africa",
      description:
        "Seamlessly connect with major African financial institutions, creating the largest financial network on the continent",
      details: [
        "Integration with over 200 banks across 54 African countries including KCB, Equity Bank, Standard Bank, First Bank Nigeria, Ecobank, and Absa",
        "SACCO connectivity covering Police SACCO, Teachers SACCO, Stima SACCO, and over 500 cooperative societies across East Africa",
        "Microfinance partnerships with Faulu Microfinance, Kenya Women Finance Trust, BRAC Uganda, and 100+ MFIs continent-wide",
        "Global payment integration with PayPal, Skrill, Western Union, and MoneyGram for international remittances",
        "Mobile money integration supporting M-Pesa, MTN Mobile Money, Orange Money, Airtel Money, and regional providers",
      ],
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our banking integration represents the most comprehensive financial connectivity solution ever built for Africa. By partnering with traditional banks, modern fintech companies, SACCOs, and microfinance institutions, we create a unified financial ecosystem that serves everyone from rural farmers to urban professionals.",
        impact:
          "This integration eliminates financial fragmentation across Africa, enabling seamless money movement between countries, institutions, and communities. Users can access their funds from any connected institution, transfer money across borders instantly, and manage all their financial relationships from one platform.",
      },
      image: "/images/banking-integration.jpg",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Pan-African Investment Platform",
      description:
        "Complete portfolio management with real-time market data from African stock exchanges and global cryptocurrency markets",
      details: [
        "African Stock Exchanges: Nairobi Securities Exchange (NSE), Johannesburg Stock Exchange (JSE), Nigerian Stock Exchange, Ghana Stock Exchange, and 15+ others",
        "Cryptocurrency trading supporting Bitcoin, Ethereum, Binance Coin, Cardano, Polygon, and 100+ altcoins with advanced portfolio tracking",
        "Government securities including Treasury Bills and Bonds from Kenya, Nigeria, South Africa, Ghana, and other African nations",
        "Professional analytics featuring Sharpe ratio, Alpha, Beta calculations, risk assessment, and portfolio optimization tools",
        "Alternative investments including real estate investment trusts (REITs), commodity trading, and peer-to-peer lending opportunities",
      ],
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our investment platform democratizes access to wealth-building opportunities across Africa, providing sophisticated tools previously available only to institutional investors. We combine traditional African markets with global opportunities to create diversified investment portfolios.",
        impact:
          "This platform enables millions of Africans to participate in wealth creation through accessible investment opportunities, supporting economic growth and individual financial empowerment across the continent.",
      },
      image: "/images/investment-platform.jpg",
    },
    {
      icon: <QrCode className="h-10 w-10" />,
      title: "Universal QR Payment Infrastructure",
      description:
        "Revolutionary payment system supporting instant transactions for merchants and individuals across all African markets",
      details: [
        "Offline QR code technology enabling payments without internet connectivity using Bluetooth and mesh networks",
        "Advanced camera integration with AI-powered QR code recognition and fraud detection",
        "Comprehensive merchant solutions including inventory management, sales analytics, customer loyalty programs, and multi-store management",
        "Secure payment processing with end-to-end encryption, tokenization, and real-time fraud monitoring",
        "Cross-border payment capabilities supporting transactions between all African countries with automatic currency conversion",
      ],
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our QR payment system creates a universal payment infrastructure that works seamlessly across Africa's diverse economic landscape. From street vendors in Lagos to shopping malls in Nairobi, our system provides consistent, secure, and efficient payment processing.",
        impact:
          "This infrastructure reduces cash dependency, increases financial transparency, and enables small businesses to access digital payment benefits, driving economic formalization across Africa.",
      },
      image: "/images/qr-payment.jpg",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Founders Investor Room - Africa's Startup Ecosystem",
      description:
        "Revolutionary platform connecting African entrepreneurs with investors and enabling community-driven crowdfunding across the continent",
      details: [
        "Startup idea submission platform with video pitches, business plan templates, and financial projection tools",
        "Verified investor network including angel investors, venture capital firms, development finance institutions, and impact investors",
        "Community crowdfunding enabling ordinary Africans to invest in local startups and businesses",
        "Comprehensive business planning tools with market research, competitive analysis, and financial modeling capabilities",
        "Mentorship programs connecting successful entrepreneurs with emerging startups across Africa",
      ],
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "The Founders Investor Room addresses Africa's startup funding gap by creating a comprehensive ecosystem where entrepreneurs can access capital, mentorship, and market opportunities. This platform democratizes startup funding and enables community participation in economic development.",
        impact:
          "By connecting African entrepreneurs with both institutional and community investors, we accelerate innovation, job creation, and economic growth across the continent.",
      },
      image: "/images/startup-ecosystem.jpg",
    },
    {
      icon: <PiggyBank className="h-10 w-10" />,
      title: "Digital Community Treasury - Modern Chama System",
      description:
        "Advanced digital savings circles and group banking with transparent tracking, democratic governance, and automated management",
      details: [
        "Digital savings circles (chamas) with automated contribution tracking, interest calculations, and payout management",
        "Group savings goals with milestone tracking, progress visualization, and achievement rewards",
        "Democratic voting system for fund allocation, investment decisions, and group policy changes",
        "Real-time transparency with blockchain-based transaction logging and member activity tracking",
        "Community lending programs with peer-to-peer credit scoring and automated loan processing",
      ],
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our Digital Community Treasury modernizes traditional African savings practices by bringing chamas and tontines into the digital age. This system maintains the community spirit of traditional savings groups while adding transparency, security, and efficiency.",
        impact:
          "This platform strengthens community bonds while providing financial services to millions who lack access to traditional banking, fostering grassroots economic development across Africa.",
      },
      image: "/images/community-treasury.jpg",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Comprehensive Insurance Services for Africa",
      description:
        "Tailored insurance solutions addressing the unique risks and needs of African markets and communities",
      details: [
        "Health insurance plans covering medical expenses, hospitalization, and preventive care with partnerships across African healthcare systems",
        "Agricultural insurance protecting farmers against crop failure, weather risks, and livestock losses with satellite monitoring and AI assessment",
        "Micro-insurance products designed for low-income populations with affordable premiums and simplified claims processes",
        "Life and property coverage including home insurance, vehicle insurance, and business protection with competitive rates",
        "Parametric insurance using weather data and satellite imagery for automatic claim processing and rapid payouts",
      ],
      background: "bg-orange-500",
      textColor: "text-black",
      badge: "Coming Soon",
      detailedInfo: {
        overview:
          "Our insurance services are specifically designed for African markets, addressing unique risks while remaining affordable and accessible. We use technology to reduce costs and improve claim processing while partnering with local providers.",
        impact:
          "These insurance products provide financial protection for millions of Africans, reducing vulnerability to economic shocks and enabling more confident investment in business and personal development.",
      },
      image: "/images/insurance-services.jpg",
    },
  ]

  const advancedTools = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Advanced Financial Calculator Suite",
      description:
        "Comprehensive calculation tools for loan analysis, investment projections, savings planning, and financial decision-making across African markets",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our financial calculator suite provides sophisticated tools for making informed financial decisions in African contexts. These calculators consider local interest rates, inflation patterns, and economic conditions to provide accurate projections.",
        features: [
          "Loan calculators with amortization schedules",
          "Investment return projections",
          "Savings goal planning",
          "Currency conversion tools",
          "Inflation adjustment calculations",
        ],
      },
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "AI-Powered Budget Planning System",
      description:
        "Intelligent monthly budget tracking with smart recommendations, expense categorization, and financial goal alignment for African lifestyles",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our budget planning system uses artificial intelligence to understand African spending patterns and provide culturally relevant financial advice. The system adapts to local economic conditions and seasonal variations.",
        features: [
          "Automated expense categorization",
          "Smart spending alerts",
          "Goal-based budgeting",
          "Seasonal adjustment recommendations",
          "Family budget coordination",
        ],
      },
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Real-Time Currency Exchange Platform",
      description:
        "Live exchange rates with smart conversion algorithms, cross-border payment optimization, and multi-currency portfolio management",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our currency exchange platform provides real-time rates for all African currencies plus major international currencies. Smart algorithms optimize conversion timing and routing to minimize costs.",
        features: [
          "Real-time rate monitoring",
          "Conversion cost optimization",
          "Rate alert notifications",
          "Historical rate analysis",
          "Multi-currency wallets",
        ],
      },
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Comprehensive Crypto Portfolio Tracker",
      description:
        "Advanced cryptocurrency portfolio management with market analysis, risk assessment, and automated trading capabilities for African investors",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our crypto tracker provides professional-grade portfolio management tools specifically designed for African cryptocurrency investors. The platform includes local market analysis and regulatory compliance features.",
        features: [
          "Portfolio performance tracking",
          "Risk analysis tools",
          "Automated rebalancing",
          "Tax reporting assistance",
          "Market sentiment analysis",
        ],
      },
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Intelligent Expense Tracking System",
      description:
        "Automated expense categorization with AI-driven spending insights, budget optimization, and financial behavior analysis",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our expense tracking system uses machine learning to automatically categorize and analyze spending patterns. The system provides insights specific to African economic contexts and spending behaviors.",
        features: [
          "Automatic transaction categorization",
          "Spending pattern analysis",
          "Budget variance alerts",
          "Merchant recognition",
          "Receipt scanning and processing",
        ],
      },
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Performance Analytics Dashboard",
      description:
        "Institutional-grade financial analytics with Sharpe ratio, Alpha, Beta calculations, and comprehensive portfolio performance metrics",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our analytics dashboard provides professional-grade financial metrics and performance analysis tools. These tools help users understand their financial performance and make data-driven investment decisions.",
        features: [
          "Risk-adjusted return calculations",
          "Benchmark comparisons",
          "Performance attribution analysis",
          "Correlation analysis",
          "Custom reporting tools",
        ],
      },
    },
  ]

  const offlineCapabilities = [
    {
      icon: <Bluetooth className="h-8 w-8" />,
      title: "Bluetooth Peer-to-Peer Transfer Technology",
      description:
        "Revolutionary direct device-to-device money transfers without internet connectivity, enabling financial transactions in remote African communities",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our Bluetooth P2P technology enables direct financial transactions between devices without requiring internet connectivity. This breakthrough technology is specifically designed for Africa's connectivity challenges.",
        features: [
          "Direct device transfers",
          "Encrypted transaction data",
          "Multi-hop relay capabilities",
          "Automatic synchronization",
          "Emergency transaction support",
        ],
      },
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Advanced Mesh Network Infrastructure",
      description:
        "Create resilient local financial networks in areas with poor connectivity, enabling community-based financial ecosystems across rural Africa",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our mesh network technology creates self-healing financial networks that operate independently of traditional internet infrastructure. These networks enable entire communities to maintain financial connectivity.",
        features: [
          "Self-organizing networks",
          "Automatic node discovery",
          "Load balancing",
          "Network resilience",
          "Community-wide coverage",
        ],
      },
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Intelligent Transaction Queue Management",
      description:
        "Smart transaction queuing with automatic synchronization when connectivity returns, ensuring no financial transaction is ever lost",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our transaction queue system ensures that all financial operations are preserved and processed even when connectivity is intermittent. The system intelligently manages transaction priority and synchronization.",
        features: [
          "Priority-based queuing",
          "Conflict resolution",
          "Automatic retry mechanisms",
          "Data integrity verification",
          "Bandwidth optimization",
        ],
      },
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Offline QR Code Payment System",
      description:
        "Generate and process QR payment codes that function without internet connection, enabling commerce in any location across Africa",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our offline QR system enables payment processing without internet connectivity. QR codes contain all necessary transaction information and can be processed locally before synchronizing with the network.",
        features: [
          "Self-contained QR codes",
          "Local validation",
          "Fraud prevention",
          "Batch processing",
          "Merchant integration",
        ],
      },
    },
  ]

  const aiFeatures = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Personalized Financial Advisory AI",
      description:
        "Context-aware financial guidance specifically tailored for African economic conditions, cultural practices, and individual circumstances",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our AI advisor understands the unique financial challenges and opportunities in African markets. It provides personalized advice that considers local economic conditions, cultural practices, and individual circumstances.",
        features: [
          "Personalized recommendations",
          "Cultural sensitivity",
          "Local market analysis",
          "Risk assessment",
          "Goal-based planning",
        ],
      },
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Multilingual Voice Interface",
      description:
        "Advanced voice commands supporting English, Swahili, Hausa, Yoruba, Amharic, French, and other African languages for universal accessibility",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our voice interface supports multiple African languages and dialects, making financial services accessible to users regardless of literacy level or language preference.",
        features: [
          "Multi-language support",
          "Dialect recognition",
          "Voice authentication",
          "Natural language processing",
          "Accessibility features",
        ],
      },
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Localized Financial Education Platform",
      description:
        "Daily financial tips, educational content, and insights specifically designed for African markets and economic conditions",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our education platform provides financial literacy content tailored to African contexts. The content addresses local financial practices, regulations, and opportunities.",
        features: [
          "Localized content",
          "Interactive lessons",
          "Progress tracking",
          "Certification programs",
          "Community learning",
        ],
      },
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Advanced Spending Analysis Engine",
      description:
        "AI-driven insights into financial behavior patterns with recommendations for optimization and wealth building in African contexts",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our spending analysis engine uses machine learning to identify patterns and provide actionable insights for financial improvement. The system understands African spending patterns and economic cycles.",
        features: [
          "Pattern recognition",
          "Predictive analytics",
          "Optimization recommendations",
          "Behavioral insights",
          "Goal alignment",
        ],
      },
    },
  ]

  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Advanced Blockchain Integration",
      description:
        "Transparent transaction logging with immutable records ensuring complete financial transparency and security across all African markets",
      detailedInfo: {
        overview:
          "Our blockchain integration provides immutable transaction records and transparent financial operations. This technology ensures trust and accountability in all financial transactions.",
        features: [
          "Immutable records",
          "Smart contracts",
          "Decentralized verification",
          "Audit trails",
          "Regulatory compliance",
        ],
      },
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military-Grade End-to-End Encryption",
      description:
        "Bank-level security protocols protecting all financial data and transactions with advanced encryption standards used by global financial institutions",
      detailedInfo: {
        overview:
          "Our encryption system uses military-grade security protocols to protect all user data and financial transactions. This ensures that sensitive information remains secure at all times.",
        features: [
          "AES-256 encryption",
          "Key management",
          "Secure communications",
          "Data protection",
          "Privacy preservation",
        ],
      },
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Advanced Biometric Authentication",
      description:
        "Multi-modal biometric security including fingerprint, facial recognition, and voice pattern authentication for maximum security and convenience",
      detailedInfo: {
        overview:
          "Our biometric authentication system provides secure and convenient access to financial services. Multiple biometric modalities ensure security while maintaining ease of use.",
        features: [
          "Fingerprint recognition",
          "Facial authentication",
          "Voice verification",
          "Behavioral biometrics",
          "Anti-spoofing protection",
        ],
      },
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Multi-Factor Authentication",
      description:
        "Layered security approach with SMS verification, email authentication, and app-based two-factor authentication for complete account protection",
      detailedInfo: {
        overview:
          "Our multi-factor authentication system provides multiple layers of security to protect user accounts. This comprehensive approach ensures that only authorized users can access financial services.",
        features: [
          "SMS verification",
          "Email authentication",
          "App-based 2FA",
          "Hardware tokens",
          "Risk-based authentication",
        ],
      },
    },
  ]

  const professionalAdvisory = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Certified Financial Advisors Network",
      description:
        "Licensed financial professionals with verified credentials and deep understanding of African markets and economic conditions",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our network of certified financial advisors includes professionals with deep expertise in African markets. All advisors are thoroughly vetted and certified to provide high-quality financial guidance.",
        features: [
          "Professional certification",
          "Market expertise",
          "Cultural understanding",
          "Regulatory compliance",
          "Continuous education",
        ],
      },
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Seamless Consultation Booking System",
      description:
        "Easy scheduling and payment for advisory sessions with integrated calendar management and automated reminders",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our booking system makes it easy to schedule and manage financial advisory sessions. The system handles scheduling, payments, and communications automatically.",
        features: [
          "Online scheduling",
          "Payment integration",
          "Automated reminders",
          "Session management",
          "Follow-up tracking",
        ],
      },
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Specialized Advisory Matching",
      description:
        "Intelligent matching system connecting users with advisors specialized in retirement planning, business development, and investment strategies",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our matching system uses advanced algorithms to connect users with the most suitable financial advisors based on their specific needs, goals, and circumstances.",
        features: [
          "Intelligent matching",
          "Specialization focus",
          "Performance tracking",
          "User feedback",
          "Continuous improvement",
        ],
      },
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Comprehensive Professional Profiles",
      description:
        "Detailed advisor profiles with real portraits, credentials, specializations, and client testimonials for informed decision-making",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our advisor profiles provide comprehensive information to help users make informed decisions about their financial guidance. Profiles include credentials, experience, and client feedback.",
        features: [
          "Detailed profiles",
          "Credential verification",
          "Client testimonials",
          "Performance metrics",
          "Specialization areas",
        ],
      },
    },
  ]

  const insuranceServices = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Comprehensive Health Insurance Coverage",
      description:
        "Affordable health insurance plans covering medical expenses, hospitalization, and preventive care across African healthcare systems",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our health insurance products are designed specifically for African healthcare systems, providing comprehensive coverage at affordable rates with extensive provider networks.",
        features: [
          "Medical coverage",
          "Hospitalization benefits",
          "Preventive care",
          "Emergency services",
          "Specialist consultations",
        ],
      },
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Advanced Agricultural Insurance Solutions",
      description:
        "Innovative crop and livestock insurance using satellite monitoring and AI assessment for rapid claim processing and farmer protection",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our agricultural insurance uses cutting-edge technology to provide comprehensive protection for farmers. Satellite monitoring and AI assessment enable rapid claim processing and accurate risk assessment.",
        features: [
          "Crop protection",
          "Livestock coverage",
          "Weather monitoring",
          "Satellite assessment",
          "Rapid payouts",
        ],
      },
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Property and Asset Protection Insurance",
      description:
        "Comprehensive property insurance covering homes, businesses, and personal assets with competitive rates and simplified claims processes",
      background: "bg-blue-500",
      textColor: "text-white",
      detailedInfo: {
        overview:
          "Our property insurance provides comprehensive protection for homes, businesses, and personal assets. The system is designed for easy claims processing and competitive pricing.",
        features: [
          "Home insurance",
          "Business protection",
          "Asset coverage",
          "Liability protection",
          "Claims assistance",
        ],
      },
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Vehicle and Transportation Insurance",
      description:
        "Complete automotive insurance coverage including comprehensive, collision, and liability protection for all vehicle types across Africa",
      background: "bg-orange-500",
      textColor: "text-black",
      detailedInfo: {
        overview:
          "Our vehicle insurance provides comprehensive protection for all types of vehicles. The system includes liability, collision, and comprehensive coverage with competitive rates.",
        features: [
          "Comprehensive coverage",
          "Collision protection",
          "Liability insurance",
          "Theft protection",
          "Emergency assistance",
        ],
      },
    },
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

  const impactAreas = [
    {
      title: "Financial Inclusion Across Africa",
      description:
        "Bringing comprehensive banking services to the unbanked populations across all 54 African countries, enabling economic participation for everyone",
      icon: <Banknote className="h-6 w-6" />,
      image: "/images/mobile-banking.jpg",
      detailedInfo: {
        overview:
          "Our financial inclusion initiative aims to serve Africa's 1.4 billion people by providing accessible, affordable, and comprehensive financial services. We focus on reaching underserved communities and providing them with the tools they need for economic empowerment.",
        impact:
          "By 2030, we aim to provide financial services to 500 million previously unbanked Africans, enabling them to participate fully in the digital economy and build wealth for their families and communities.",
      },
    },
    {
      title: "Economic Empowerment and Wealth Building",
      description:
        "Providing sophisticated tools for wealth building, entrepreneurship, and economic development across African markets and communities",
      icon: <TrendingUp className="h-6 w-6" />,
      image: "/images/business-professional.jpg",
      detailedInfo: {
        overview:
          "Our economic empowerment programs provide Africans with the tools, knowledge, and opportunities they need to build wealth and create economic opportunities. This includes investment platforms, business funding, and financial education.",
        impact:
          "We're enabling millions of Africans to access investment opportunities, start businesses, and build generational wealth through our comprehensive financial ecosystem.",
      },
    },
    {
      title: "Community Development and Social Impact",
      description:
        "Strengthening local financial networks, supporting community initiatives, and fostering economic cooperation across African communities",
      icon: <Users className="h-6 w-6" />,
      image: "/images/rural-community.jpg",
      detailedInfo: {
        overview:
          "Our community development initiatives focus on strengthening local economies and social networks. Through digital chamas, community lending, and local investment opportunities, we're building stronger communities.",
        impact:
          "We're supporting over 100,000 community groups and savings circles, enabling collective wealth building and community-driven development projects across Africa.",
      },
    },
    {
      title: "Agricultural Transformation and Rural Development",
      description:
        "Empowering farmers with modern financial tools, agricultural insurance, and market access to transform African agriculture",
      icon: <Target className="h-6 w-6" />,
      image: "/images/agriculture.jpg",
      detailedInfo: {
        overview:
          "Our agricultural programs provide farmers with access to credit, insurance, market information, and financial planning tools. We're helping to modernize African agriculture and improve rural livelihoods.",
        impact:
          "We're serving over 10 million farmers across Africa, providing them with the financial tools they need to increase productivity, manage risks, and access markets.",
      },
    },
    {
      title: "Professional Services and Business Growth",
      description:
        "Connecting financial advisors with clients nationwide and providing businesses with the tools they need for growth and expansion",
      icon: <Handshake className="h-6 w-6" />,
      image: "/images/office-meeting.jpg",
      detailedInfo: {
        overview:
          "Our professional services platform connects certified financial advisors with clients across Africa, while providing businesses with comprehensive financial management tools and growth capital.",
        impact:
          "We're supporting over 50,000 financial professionals and enabling them to serve millions of clients across the continent with high-quality financial advice and services.",
      },
    },
    {
      title: "Small Business Growth and Entrepreneurship",
      description:
        "Supporting entrepreneurs and SMEs with funding, financial management tools, and market access to drive economic growth across Africa",
      icon: <Lightbulb className="h-6 w-6" />,
      image: "/images/customer-service.jpg",
      detailedInfo: {
        overview:
          "Our small business programs provide entrepreneurs with access to funding, financial management tools, market opportunities, and business development support. We're fostering innovation and job creation across Africa.",
        impact:
          "We're supporting over 1 million small businesses and entrepreneurs, helping them access capital, manage finances, and grow their operations across African markets.",
      },
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
        "Grova integrates with over 200 financial institutions across all 54 African countries. This includes major banks like KCB, Equity Bank, Standard Bank, First Bank Nigeria, Ecobank, and Absa. We also connect with hundreds of SACCOs including Police SACCO, Teachers SACCO, and Stima SACCO, plus microfinance institutions like Faulu, Kenya Women Finance Trust, and BRAC. Additionally, we support all major mobile money providers including M-Pesa, MTN Mobile Money, Orange Money, and Airtel Money, as well as global providers like PayPal, Skrill, and Western Union.",
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
        "The Founders Investor Room is Africa's most comprehensive startup funding platform. Entrepreneurs can submit business ideas with video pitches, access business plan templates and financial modeling tools, and get matched with verified investors including angel investors, venture capital firms, and development finance institutions. The platform also enables community crowdfunding, allowing ordinary Africans to invest in local startups. We provide mentorship programs, market research tools, competitive analysis, and ongoing business development support. The platform has already facilitated over $50 million in startup funding across Africa.",
    },
    {
      question: "How does Grova's Community Treasury modernize traditional savings groups?",
      answer:
        "Our Digital Community Treasury brings traditional African savings practices like chamas and tontines into the digital age while maintaining their community spirit. The system provides automated contribution tracking, transparent fund management with blockchain logging, democratic voting for fund allocation and investment decisions, group savings goals with milestone tracking, and peer-to-peer lending with community-based credit scoring. Members can participate remotely, track progress in real-time, and benefit from higher returns through group investment opportunities. The system maintains the social bonds of traditional savings groups while adding efficiency, transparency, and security.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* Voice Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleVoiceAssistant}
          className={`neomorphism rounded-full w-16 h-16 shadow-2xl transition-all duration-300 ${
            isVoiceEnabled ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 hover:bg-gray-700"
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
          <div className="absolute bottom-20 right-0 bg-white rounded-lg p-4 shadow-xl neomorphism min-w-64 animate-fade-in-up">
            <div className="text-sm font-bold mb-2">Voice Assistant Active</div>
            <div className="text-xs text-gray-600 mb-3">
              Say: "download app", "features", "contact", "security", "about", or "read"
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={startListening}
                disabled={isListening}
                className="neomorphism bg-green-500 hover:bg-green-600 text-white"
              >
                {isListening ? <MicIcon className="h-4 w-4 animate-pulse" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button size="sm" onClick={stopListening} className="neomorphism bg-red-500 hover:bg-red-600 text-white">
                <VolumeX className="h-4 w-4" />
              </Button>
            </div>
            {voiceText && <div className="mt-2 text-xs bg-gray-100 p-2 rounded">Heard: "{voiceText}"</div>}
          </div>
        )}
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

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 neomorphism animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="text-gray-900 font-bold">Preparing download...</span>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto neomorphism">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-gray-900 flex items-center gap-3">
              {selectedFeature?.icon}
              {selectedFeature?.title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600">{selectedFeature?.description}</DialogDescription>
          </DialogHeader>

          {selectedFeature?.detailedInfo && (
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedFeature.detailedInfo.overview}</p>
              </div>

              {selectedFeature.detailedInfo.features && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedFeature.detailedInfo.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFeature.detailedInfo.benefits && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedFeature.detailedInfo.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFeature.detailedInfo.technicalSpecs && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Specifications</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedFeature.detailedInfo.technicalSpecs}</p>
                </div>
              )}

              {selectedFeature.detailedInfo.impact && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedFeature.detailedInfo.impact}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => handleDownload("Android")}
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

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Animated Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <span
                className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                style={{ fontFamily: "Lufga, sans-serif", fontWeight: 700 }}
              >
                Grova
              </span>
            </Link>

            {/* Desktop Navigation with hover effects */}
            <div className="hidden md:flex items-center space-x-6">
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
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 text-sm relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA with animations */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                className="neomorphism border-blue-500 text-blue-600 hover:bg-blue-50 bg-white text-sm hover:scale-105 transition-all duration-300"
                onClick={() => setNotification("Login feature coming soon!")}
              >
                Login
              </Button>
              <Button
                className="neomorphism bg-blue-500 hover:bg-blue-600 text-white text-sm hover:scale-105 transition-all duration-300"
                onClick={() => handleDownload("Android")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </div>

            {/* Animated Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
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
              mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
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
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="border-gray-200" />
                <Button
                  variant="outline"
                  className="neomorphism border-blue-500 text-blue-600 hover:bg-blue-50 w-full bg-white text-sm"
                  onClick={() => {
                    setNotification("Login feature coming soon!")
                    setMobileMenuOpen(false)
                  }}
                >
                  Login
                </Button>
                <Button
                  className="neomorphism bg-blue-500 hover:bg-blue-600 text-white w-full text-sm"
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
            <div className={`max-w-2xl ${fadeInLeft}`}>
              <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs animate-bounce-gentle">
                🚀 Revolutionary Financial Super-App for Africa
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight animate-fade-in-up">
                Finance Without
                <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  Borders
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in-up animation-delay-200">
                Revolutionary financial super-app designed specifically for Africa's 1.4 billion people and underbanked
                populations across all 54 countries. Our comprehensive platform features a triple wallet system
                supporting fiat currencies, cryptocurrencies, and community credits, combined with groundbreaking
                offline-first technology, AI-powered financial coaching, and seamless integration with over 200 African
                financial institutions - all unified in one powerful, secure, and accessible platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="neomorphism bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => handleDownload("Android")}
                >
                  <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Download Grova App
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="neomorphism border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold bg-white transform hover:scale-105 transition-all duration-300 group"
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
                    className="flex items-center text-gray-600 bg-white/80 rounded-lg p-3 neomorphism hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <item.icon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative ${fadeInRight}`}>
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
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
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 neomorphism shadow-xl animate-bounce-gentle animation-delay-200">
                <Smartphone className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 neomorphism shadow-xl animate-pulse animation-delay-400">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 neomorphism shadow-xl animate-bounce-gentle animation-delay-600">
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Transforming Africa's Financial Landscape
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real impact numbers showing our commitment to serving all of Africa's 1.4 billion people and achieving
              complete financial inclusion across the continent
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent animate-number-count">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-bold text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Revolutionary Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-sm">
              Revolutionary Technology
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Core Revolutionary Features</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                className={`neomorphism border-0 ${feature.background} ${feature.textColor} hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer group animate-fade-in-up ${feature.delay}`}
                onClick={() => handleLearnMore(feature)}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${
                      feature.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-2xl flex items-center justify-center mb-4 neomorphism group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.cloneElement(feature.icon, { className: "h-8 w-8" })}
                  </div>
                  <CardTitle className={`text-xl font-black ${feature.textColor} group-hover:animate-pulse`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${feature.textColor} text-base opacity-90 leading-relaxed mb-4`}>
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

      {/* Enhanced Complete Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-sm">
              Complete Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Comprehensive Financial Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From banking integration across all African countries to investment platforms covering continental
              markets, from revolutionary payment systems to community-driven funding solutions - Grova provides
              everything you need for complete financial empowerment in one unified, powerful, and accessible platform
              designed specifically for Africa's unique needs and opportunities.
            </p>
          </div>

          <div className="space-y-16">
            {completeSolutions.map((solution, index) => (
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

      {/* Enhanced Testimonials with animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-sm">User Stories</Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Trusted by Thousands Across Africa</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 shadow-xl animate-fade-in-up group cursor-pointer"
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
                  <p className="text-gray-600 mb-6 italic text-base leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-base">{testimonial.name}</div>
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
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-sm">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                  className="neomorphism bg-white rounded-2xl px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg py-6 hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 animate-fade-in">
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
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up">
            Download Grova Today
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed animate-fade-in-up animation-delay-200">
            Join thousands of users across Africa who are already experiencing the future of finance with Grova.
            Revolutionary features including triple wallet system, offline-first technology, AI financial coaching,
            comprehensive banking integration, investment platforms, and bank-grade security - all unified in one
            powerful app designed specifically for Africa's financial empowerment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-xl font-black shadow-2xl transform hover:scale-110 transition-all duration-300 group"
              onClick={() => handleDownload("Android")}
            >
              <Download className="mr-3 h-7 w-7 group-hover:animate-bounce" />
              Download for Android
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="neomorphism border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-xl font-black bg-transparent shadow-2xl transform hover:scale-110 transition-all duration-300 group"
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
                className="flex items-center justify-center text-white/90 bg-white/10 rounded-xl p-4 neomorphism hover:bg-white/20 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => setNotification(`${item.text} - Learn more about this feature!`)}
              >
                <item.icon className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-sm">Get in Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">We're Here to Help</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                contact: "+254711129204",
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
                className={`neomorphism border-0 ${contact.bg} ${contact.textColor} text-center hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer animate-fade-in-up group`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => {
                  if (contact.contact.includes("@")) {
                    window.location.href = `mailto:${contact.contact}`
                  } else if (contact.contact.includes("+")) {
                    window.location.href = `tel:${contact.contact}`
                  } else {
                    handleContactSubmit()
                  }
                }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${
                      contact.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-2xl neomorphism flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-black mb-3 text-xl group-hover:animate-pulse">{contact.title}</h3>
                  <p className={`${contact.textColor} text-base mb-4 opacity-90`}>{contact.description}</p>
                  <p className="font-bold text-lg">{contact.contact}</p>
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
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <span
                  className="text-2xl font-black group-hover:text-blue-400 transition-colors duration-300"
                  style={{ fontFamily: "Lufga, sans-serif", fontWeight: 700 }}
                >
                  Grova
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-base leading-relaxed">
                Finance without borders. Revolutionary financial platform designed specifically for Africa's 1.4 billion
                people and underbanked populations across all 54 countries. Empowering financial inclusion through
                innovative technology, comprehensive services, and deep understanding of African markets.
              </p>
              <div className="flex space-x-4">
                {[Globe, MessageSquare].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-full neomorphism flex items-center justify-center hover:bg-blue-500 transition-all duration-300 cursor-pointer hover:scale-110"
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
                className="animate-fade-in-up"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <h3 className="font-black mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-3 text-gray-400 text-base">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
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

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up">
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
                  className="hover:text-white transition-colors duration-300"
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
