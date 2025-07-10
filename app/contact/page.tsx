"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Wallet,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Accessibility,
  Volume2,
  Globe,
  Users,
  Briefcase,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [notification, setNotification] = useState("")
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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
        "Voice assistant activated on Contact page. You can reach us at sammywinter01@gmail.com or call +254711129204 for support.",
      )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNotification("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setNotification(""), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Get comprehensive help via email within 24 hours",
      contact: "sammywinter01@gmail.com",
      action: "Send Email",
      background: "bg-blue-500",
      textColor: "text-white",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Call us directly for immediate assistance",
      contact: "+254711129204",
      action: "Call Now",
      background: "bg-orange-500",
      textColor: "text-black",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Support Hours",
      description: "We're here to help across all African time zones",
      contact: "24/7 Support Available",
      action: "Learn More",
      background: "bg-blue-500",
      textColor: "text-white",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Instant messaging support for quick questions",
      contact: "Available on our app",
      action: "Start Chat",
      background: "bg-orange-500",
      textColor: "text-black",
    },
  ]

  const officeLocations = [
    {
      city: "Nairobi, Kenya",
      address: "Westlands Business District",
      description: "Our East Africa headquarters serving Kenya, Uganda, Tanzania, and Rwanda",
      image: "/images/office-meeting.jpg",
    },
    {
      city: "Lagos, Nigeria",
      address: "Victoria Island Financial District",
      description: "West Africa operations center serving Nigeria, Ghana, Senegal, and Ivory Coast",
      image: "/images/coworking-space.jpg",
    },
    {
      city: "Cape Town, South Africa",
      address: "Financial Services District",
      description: "Southern Africa hub serving South Africa, Botswana, Namibia, and Zimbabwe",
      image: "/images/business-professional.jpg",
    },
  ]

  const supportCategories = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "General Support",
      description: "Account help, app navigation, and general questions",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Inquiries",
      description: "Partnership opportunities and enterprise solutions",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical Support",
      description: "App issues, connectivity problems, and technical assistance",
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
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Get in Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              We're Here to
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Help You
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about Grova's revolutionary features? Need support with your financial journey? Want to
              partner with us to expand financial inclusion across Africa? Our dedicated team is available 24/7 to
              provide comprehensive assistance and support for all your financial needs across all 54 African countries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're committed to providing excellent support across
              all channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`neomorphism border-0 ${method.background} ${method.textColor} text-center hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => {
                  if (method.contact.includes("@")) {
                    window.location.href = `mailto:${method.contact}`
                  } else if (method.contact.includes("+")) {
                    window.location.href = `tel:${method.contact}`
                  } else {
                    setNotification(`${method.title} - More information coming soon!`)
                  }
                }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${
                      method.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-2xl neomorphism flex items-center justify-center mx-auto mb-4`}
                  >
                    {method.icon}
                  </div>
                  <CardTitle className={`text-xl font-black ${method.textColor}`}>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${method.textColor} text-base mb-4 opacity-90`}>
                    {method.description}
                  </CardDescription>
                  <p className="font-bold text-lg mb-4">{method.contact}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${method.textColor === "text-white" ? "border-white text-white hover:bg-white hover:text-blue-600" : "border-black text-black hover:bg-black hover:text-white"} neomorphism`}
                  >
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours with a comprehensive response.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="neomorphism border-0 bg-white animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Contact Form</CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Send us a message and we'll respond promptly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 neomorphism border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 neomorphism border-gray-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1 neomorphism border-gray-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 neomorphism border-gray-300"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full neomorphism bg-blue-500 hover:bg-blue-600 text-white">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8 animate-fade-in-up animation-delay-200">
                <Card className="neomorphism border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Support Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {supportCategories.map((category, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg neomorphism flex items-center justify-center flex-shrink-0">
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{category.title}</h3>
                            <p className="text-sm text-gray-600">{category.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="neomorphism border-0 bg-gradient-to-br from-blue-500 to-orange-500 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                    <p className="mb-4 opacity-90">
                      For urgent issues or immediate assistance, don't hesitate to call our 24/7 support line.
                    </p>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 neomorphism bg-transparent"
                      onClick={() => (window.location.href = "tel:+254711129204")}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call +254711129204
                    </Button>
                  </CardContent>
                </Card>

                {/* -- END “Need Immediate Help?” card -- */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Download Grova today and join thousands across Africa who are transforming their financial lives with our
            revolutionary platform.
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
