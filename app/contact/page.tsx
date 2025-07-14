"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Wallet,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
  Send,
  Accessibility,
  Volume2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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
        "Voice assistant activated on Contact page. Get in touch with our team through multiple channels including email, phone, and our contact form.",
      )
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setNotification("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    if (isVoiceEnabled) {
      speak("Your message has been sent successfully. We'll get back to you within 24 hours.")
    }

    setTimeout(() => setNotification(""), 5000)
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get detailed responses to your questions",
      contact: "sammywinter01@gmail.com",
      action: "Send Email",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+254 711 129204",
      action: "Call Now",
      color: "bg-green-500",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Get instant help through our chat system",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "bg-orange-500",
    },
  ]

  const officeLocations = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Westlands Business District, Nairobi, Kenya",
      phone: "+254 711 129204",
      email: "sammywinter01@gmail.com",
      image: "/images/pexels-kelvin-kibe-3073372-26898331.jpg",
      isActive: true,
    },
    {
      city: "Lagos",
      country: "Nigeria",
      address: "Victoria Island, Lagos, Nigeria",
      phone: "+234 800 123 456",
      email: "lagos@grova.africa",
      image: "/images/pexels-eben-20430714.jpg",
      isActive: false,
      comingSoon: true,
    },
    {
      city: "Cape Town",
      country: "South Africa",
      address: "Waterfront District, Cape Town, South Africa",
      phone: "+27 21 123 4567",
      email: "capetown@grova.africa",
      image: "/images/pexels-silver-works-909675-2003763.jpg",
      isActive: false,
      comingSoon: true,
    },
  ]

  const africanCountries = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Democratic Republic of Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "São Tomé and Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
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
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right max-w-md">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{notification}</span>
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
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Get In Touch</Badge>
            <h1 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight animate-fade-in-up font-heading">
              We're Here to
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                Help You
              </span>
            </h1>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Whether you have questions about our services, need technical support, want to explore partnership
              opportunities, or simply want to learn more about how Grova is transforming financial services across
              Africa, our dedicated team is ready to assist you through multiple convenient channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. Our team is available across multiple channels to
              provide the support you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 text-center animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => {
                  if (method.contact.includes("@")) {
                    window.location.href = `mailto:${method.contact}`
                  } else if (method.contact.includes("+")) {
                    window.location.href = `tel:${method.contact}`
                  } else {
                    setNotification("Live chat feature coming soon!")
                  }
                }}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 ${method.color} rounded-xl neomorphism flex items-center justify-center mx-auto mb-3 text-white`}
                  >
                    {method.icon}
                  </div>
                  <CardTitle className="text-base font-bold text-gray-900">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-gray-900 mb-4">{method.contact}</p>
                  <Button className={`neomorphism ${method.color} text-white hover:opacity-90 text-sm`}>
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs">
                Send Message
              </Badge>
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6">Get Detailed Support</h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Fill out our comprehensive contact form and we'll get back to you within 24 hours with detailed
                responses to your questions. Our team reviews every message personally to ensure you get the most
                helpful and accurate information.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Response Time</div>
                    <div className="text-xs text-gray-600">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Coverage</div>
                    <div className="text-xs text-gray-600">All 54 African countries</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Languages</div>
                    <div className="text-xs text-gray-600">English, French, Arabic, Swahili</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="neomorphism border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-base font-bold text-gray-900">Send us a detailed message</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  All fields are required for the best support experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                        required
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                        required
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+254 700 123 456"
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Country *</label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {africanCountries.map((country) => (
                            <SelectItem key={country} value={country} className="text-sm">
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Subject *</label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="text-sm">
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general" className="text-sm">
                          General Inquiry
                        </SelectItem>
                        <SelectItem value="technical" className="text-sm">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership" className="text-sm">
                          Partnership Opportunities
                        </SelectItem>
                        <SelectItem value="investment" className="text-sm">
                          Investment Information
                        </SelectItem>
                        <SelectItem value="media" className="text-sm">
                          Media & Press
                        </SelectItem>
                        <SelectItem value="careers" className="text-sm">
                          Career Opportunities
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide detailed information about your inquiry, including any specific questions or requirements..."
                      rows={5}
                      required
                      className="text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neomorphism bg-blue-500 hover:bg-blue-600 text-white text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Our Offices</Badge>
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-4">Visit Us Across Africa</h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              With offices strategically located across key African markets, we're always close to our users and
              partners. Visit us in person or reach out to your nearest office for localized support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {office.comingSoon && (
                  <Badge className="absolute top-4 right-4 z-10 neomorphism bg-orange-500 text-black text-xs">
                    Coming Soon
                  </Badge>
                )}
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={`${office.city} office`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-gray-900">
                    {office.city}, {office.country}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{office.address}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{office.email}</span>
                  </div>
                  <Button
                    className={`w-full neomorphism text-sm ${
                      office.isActive
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (office.isActive) {
                        window.open(`https://maps.google.com/?q=${encodeURIComponent(office.address)}`, "_blank")
                      } else {
                        setNotification(`${office.city} office opening soon!`)
                      }
                    }}
                    disabled={!office.isActive}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {office.isActive ? "Get Directions" : "Opening Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-xl lg:text-2xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-sm mb-6 max-w-2xl mx-auto opacity-90">
            Don't wait - download Grova today and join millions of Africans who are already experiencing the future of
            financial services. Get started in minutes and discover what makes Grova different.
          </p>
          <Button
            size="lg"
            className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-sm font-semibold"
            onClick={() => setNotification("Redirecting to app store...")}
          >
            <Send className="mr-2 h-5 w-5" />
            Download Grova App
          </Button>
        </div>
      </section>
    </div>
  )
}
