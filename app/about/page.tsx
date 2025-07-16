"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Users,
  Globe,
  Heart,
  Shield,
  Zap,
  Award,
  CheckCircle,
  TrendingUp,
  Building2,
  Download,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const [notification, setNotification] = useState("")

  const handleDownload = (platform: string) => {
    if (platform === "Android") {
      window.open("https://play.google.com/store/search?q=grova&c=apps", "_blank")
    } else if (platform === "iOS") {
      window.open("https://apps.apple.com/search?term=grova", "_blank")
    }
    setNotification(`Redirecting to ${platform} store...`)
    setTimeout(() => setNotification(""), 3000)
  }

  const handleContactSubmit = () => {
    window.location.href =
      "mailto:sammywinter01@gmail.com?subject=Partnership Inquiry&body=Hello, I'm interested in learning more about Grova..."
    setNotification("Opening email client...")
    setTimeout(() => setNotification(""), 3000)
  }

  // Company values
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Financial Inclusion",
      description: "Making financial services accessible to every African, regardless of location or economic status",
      color: "bg-red-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Bank-grade security protecting every transaction and user data with military-grade encryption",
      color: "bg-blue-500",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "Pioneering breakthrough technologies like offline-first financial services and AI coaching",
      color: "bg-yellow-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Building stronger communities through digital chamas, local investment, and peer-to-peer support",
      color: "bg-green-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Pan-African Vision",
      description: "Connecting all 54 African countries through unified financial infrastructure and services",
      color: "bg-purple-500",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Delivering world-class financial services that meet the highest international standards",
      color: "bg-orange-500",
    },
  ]

  // Company milestones
  const milestones = [
    {
      year: "2025",
      title: "Grova Founded",
      description: "Established with a vision to transform African financial services",
      icon: <Rocket className="h-5 w-5" />,  
    },
    {
      year: "2025",
      title: "Technology Development",
      description: "Developing revolutionary offline-first technology and AI financial coaching",
      icon: <Brain className="h-5 w-5" />,  
    },
    {
      year: "2026",
      title: "Banking Partnerships",
      description: "Securing partnerships with major African banks and financial institutions",
      icon: <Building2 className="h-5 w-5" />,  
    },
    {
      year: "2027",
      title: "Continental Launch",
      description: "Launching across all 54 African countries with comprehensive services",
      icon: <Globe className="h-5 w-5" />,  
    },
  ]

  // Impact statistics
  const impactStats = [
    { number: "200+", label: "Banking Partners", icon: <Building2 className="h-5 w-5" /> },
    { number: "54", label: "African Countries", icon: <Globe className="h-5 w-5" /> },
    { number: "10K+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
    { number: "$2M+", label: "Transactions Processed", icon: <TrendingUp className="h-5 w-5" /> },
  ]

  // Contact methods
  const contactMethods = [
    {
      icon: <Mail className="h-4 w-4" />,
      title: "Email Us",
      description: "Get in touch for partnerships and inquiries",
      contact: "sammywinter01@gmail.com",
      bg: "bg-blue-500",
      textColor: "text-white",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+254 711 129204",
      bg: "bg-orange-500",
      textColor: "text-black",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      title: "Visit Us",
      description: "Our headquarters in Nairobi, Kenya",
      contact: "Nairobi, Kenya",
      bg: "bg-blue-500",
      textColor: "text-white",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">{notification}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 font-logo">
                Grova
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <Button
                className="neomorphism bg-blue-500 hover:bg-blue-600 text-white text-sm"
                onClick={() => handleDownload("Android")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">About Grova</Badge>
            <h1 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 leading-tight animate-fade-in-up font-heading">
              Revolutionizing Finance
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                Across Africa
              </span>
            </h1>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Grova is more than a fintech company - we're a movement dedicated to achieving complete financial
              inclusion across Africa's 54 countries. Our revolutionary platform combines cutting-edge technology with
              deep understanding of African markets to deliver comprehensive financial services that work both online
              and offline, serving everyone from urban professionals to rural farmers.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl neomorphism hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2 text-blue-500">{stat.icon}</div>
                  <div className="text-base font-black text-gray-900 font-heading">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs">
                Our Mission
              </Badge>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
                Empowering Africa Through Financial Innovation
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Our mission is to democratize financial services across Africa by providing accessible, secure, and
                comprehensive financial tools that work seamlessly both online and offline. We believe that every
                African deserves access to world-class financial services, regardless of their location, income level,
                or technological infrastructure.
              </p>
              <div className="space-y-4">
                {[
                  "Serve 500M+ unbanked Africans by 2030",
                  "Connect all 54 African countries through unified financial infrastructure",
                  "Enable $100B+ in cross-border African trade",
                  "Create 1M+ jobs through our ecosystem",
                ].map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6">
                <Image
                  src="/images/african-farmer.jpg"
                  alt="African farmer using mobile banking"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Our Values</Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4 font-heading">
              Values That Drive Our Mission
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every product we build, ensuring that we stay true to our
              mission of transforming African financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 ${value.color} rounded-xl neomorphism flex items-center justify-center mb-3 text-white`}
                  >
                    {value.icon}
                  </div>
                  <CardTitle className="text-base font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs">Our Journey</Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4 font-heading">
              Building the Future of African Finance
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              From our founding to our vision for the future, here's how we're transforming financial services across
              Africa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 animate-fade-in-left"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center text-white">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="neomorphism bg-orange-500 text-black text-xs">{milestone.year}</Badge>
                      <h3 className="text-base font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Leadership Team</Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4 font-heading">
              Experienced Leaders Driving Change
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of experience in African markets, fintech innovation, and global
              financial services to deliver world-class solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Brian Nailer",
                role: "Chief Executive Officer",
                image: "/images/leadership-team.jpg",
                background: "RM - I&M Bank, 8+ years in African banking",
              },
              {
                name: "Sammy Winterfildt",
                role: "Chief Technology Officer",
                image: "/images/technology-team.jpg",
                background: "Creative and Software Engenner, blockchain and AI specialist",
              },
               {
                name: "Teddy Omondi",
                role: "Chief Operations Officer",
                image: "/images/professional.jpg",
                background: "Creative and IT expert,",
              },
              {
                name: "Fidel Chris",
                role: "Chief Financial Officer",
                image: "/images/professional.jpg",
                background: "Former Solv Kenya partner, African financial markets expert",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden neomorphism">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-base font-bold text-gray-900">{leader.name}</CardTitle>
                  <Badge className="neomorphism bg-blue-500 text-white text-xs">{leader.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm">{leader.background}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs">
                Get In Touch
              </Badge>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6 font-heading">
                Let's Build Africa's Financial Future Together
              </h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Whether you're a potential partner, investor, or simply want to learn more about our mission, we'd love
                to hear from you. Join us in revolutionizing financial services across Africa.
              </p>

              <div className="space-y-4">
                {contactMethods.map((contact, index) => (
                  <Card
                    key={index}
                    className={`neomorphism border-0 ${contact.bg} ${contact.textColor} text-center hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer`}
                    onClick={() => {
                      if (contact.contact.includes("@")) {
                        window.location.href = `mailto:${contact.contact}`
                      } else if (contact.contact.includes("+")) {
                        window.location.href = `tel:${contact.contact}`
                      } else {
                        window.open("https://maps.google.com/?q=Nairobi,Kenya", "_blank")
                      }
                    }}
                  >
                    <div className="flex items-center justify-center p-4">
                      <div className="w-8 h-8 bg-white rounded-lg neomorphism flex items-center justify-center text-blue-500">
                        {contact.icon}
                      </div>
                      <div className="ml-4 text-left">
                        <div className="text-xs font-medium">{contact.title}</div>
                        <div className="text-sm">{contact.description}</div>
                        <div className="text-sm font-medium">{contact.contact}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="neomorphism border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-base font-bold text-gray-900">Send us a message</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Tell us about your interest in Grova..."
                  ></textarea>
                </div>
                <Button
                  className="w-full neomorphism bg-blue-500 hover:bg-blue-600 text-white text-sm"
                  onClick={handleContactSubmit}
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-xl lg:text-2xl font-black mb-4 font-heading">Ready to Join the Revolution?</h2>
          <p className="text-sm mb-8 max-w-2xl mx-auto opacity-90">
            Be part of Africa's financial transformation. Download Grova today and experience the future of African
            finance - accessible, secure, and designed specifically for our continent's unique needs and incredible
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-sm font-semibold"
              onClick={() => handleDownload("Android")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neomorphism border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 text-sm font-semibold bg-transparent"
              onClick={() => handleDownload("iOS")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download for iOS
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
