"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Wallet,
  Heart,
  CheckCircle,
  Download,
  Accessibility,
  Volume2,
  Award,
  Lightbulb,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
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
        "Voice assistant activated on About page. Learn about Grova's mission to transform financial services across Africa and our commitment to financial inclusion.",
      )
    }
  }

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Financial Inclusion for All",
      description:
        "We believe every African deserves access to comprehensive financial services, regardless of location, income level, or background",
      background: "bg-blue-500",
      textColor: "text-white",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Through Technology",
      description:
        "We leverage cutting-edge technology to solve Africa's unique financial challenges with revolutionary solutions",
      background: "bg-orange-500",
      textColor: "text-black",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Community-Centered Approach",
      description:
        "We build solutions that strengthen communities and support traditional African financial practices like chamas and tontines",
      background: "bg-blue-500",
      textColor: "text-white",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence and Security",
      description:
        "We maintain the highest standards of security and service quality while making financial services accessible to all",
      background: "bg-orange-500",
      textColor: "text-black",
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "Grova Founded",
      description: "Established with a vision to transform African financial services",
    },
    {
      year: "2024",
      title: "Technology Development",
      description: "Developed revolutionary offline-first technology and AI financial coaching",
    },
    {
      year: "2024",
      title: "Banking Partnerships",
      description: "Secured partnerships with major African banks and financial institutions",
    },
    {
      year: "2025",
      title: "Continental Launch",
      description: "Launching across all 54 African countries with comprehensive services",
    },
  ]

  const team = [
    {
      name: "Leadership Team",
      role: "Experienced executives from top financial institutions",
      description: "Our leadership brings decades of experience from major banks and fintech companies across Africa",
      image: "/images/office-meeting.jpg",
    },
    {
      name: "Technology Team",
      role: "World-class engineers and developers",
      description: "Our technical team includes experts in blockchain, AI, mobile development, and financial systems",
      image: "/images/coworking-space.jpg",
    },
    {
      name: "Financial Experts",
      role: "Certified financial advisors and analysts",
      description: "Our financial team provides expertise in African markets, regulations, and economic conditions",
      image: "/images/financial-advisor.jpg",
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
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Our Story</Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Transforming Africa's
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grova was born from a simple yet powerful vision: to create a financial platform that serves all of
              Africa's 1.4 billion people, regardless of their location, income level, or access to traditional banking
              services. We're building the future of African finance through innovative technology, community-centered
              solutions, and an unwavering commitment to financial inclusion across all 54 African countries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div>
              <Badge className="mb-4 neomorphism bg-orange-500 text-black text-xs">Our Mission</Badge>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                Empowering Every African with Financial Freedom
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to democratize financial services across Africa by providing comprehensive, accessible,
                and innovative financial solutions that work for everyone. We're committed to breaking down barriers
                that have historically excluded millions of Africans from participating in the formal financial system.
              </p>
              <div className="space-y-4">
                {[
                  "Serve all 1.4 billion Africans with comprehensive financial services",
                  "Bridge the gap between traditional and digital financial systems",
                  "Support community-based financial practices and local economies",
                  "Provide world-class security and user experience",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6">
                <Image
                  src="/images/rural-community.jpg"
                  alt="African community"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Grova, from product development to customer service
              to community engagement across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`neomorphism border-0 ${value.background} ${value.textColor} hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${
                      value.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-2xl flex items-center justify-center mb-4 neomorphism`}
                  >
                    {value.icon}
                  </div>
                  <CardTitle className={`text-xl font-black ${value.textColor}`}>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${value.textColor} text-base opacity-90`}>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to continental launch, here's how we're building the future of African financial services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-500 rounded-full neomorphism flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grova is powered by a diverse team of experts from across Africa and around the world, united by our
              shared commitment to transforming African financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Our Impact Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just building a financial platform - we're creating a movement that will transform how Africans
              access, manage, and grow their wealth for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1.4B+", label: "Africans We Aim to Serve" },
              { number: "54", label: "Countries Across Africa" },
              { number: "500M+", label: "Unbanked People to Include" },
              { number: "1M+", label: "Small Businesses to Empower" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Be part of the financial revolution that's transforming Africa. Download Grova today and help us build a
            more inclusive financial future for all Africans.
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
