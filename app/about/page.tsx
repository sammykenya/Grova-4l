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
    setNotification(`Redirecting to ${platform} store...`)
    setTimeout(() => setNotification(""), 3000)
  }

  const handleContactSubmit = () => {
    setNotification("Thank you! We'll get back to you soon.")
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
      description: "Developed revolutionary offline-first technology and AI financial coaching",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      year: "2026",
      title: "Banking Partnerships",
      description: "Secured partnerships with major African banks and financial institutions",
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
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-heading">
              Revolutionizing Finance Across Africa
            </h1>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
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
                  <div className="text-xl font-black text-gray-900 font-heading">{stat.number}</div>
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
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-heading">
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
                  alt="African farmer in traditional clothing working in agricultural fields"
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
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-heading">
              Principles That Guide Everything We Do
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Our values shape every decision we make, from product development to customer service, ensuring that we
              always prioritize the needs of African communities and the goal of financial inclusion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4 text-white`}
                  >
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg font-black text-gray-900 font-heading">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs">
              Leadership Team
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-heading">
              Experienced Leaders Driving African Innovation
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
              Our leadership team combines deep African market expertise with international experience from leading
              technology and financial companies, ensuring we understand both local needs and global best practices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6">
              <Image
                src="/images/leadership-team.jpg"
                alt="Diverse leadership team of professionals in modern office setting"
                width={800}
                height={500}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Technology Team</Badge>
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-heading">
              World-Class Engineers Building the Future
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
              Our technology team consists of brilliant engineers and developers from leading tech companies worldwide,
              all passionate about using technology to solve Africa's unique challenges and opportunities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6">
              <Image
                src="/images/technology-team.jpg"
                alt="Diverse technology team collaborating around laptop in modern workspace"
                width={800}
                height={500}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-orange-500 text-black hover:bg-orange-600 text-xs">Our Journey</Badge>
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-heading">
              Milestones in Our Mission to Transform African Finance
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              From our founding to our vision for the future, here are the key milestones that mark our progress toward
              achieving complete financial inclusion across Africa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full neomorphism flex items-center justify-center text-blue-500 relative z-10">
                    {milestone.icon}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white p-6 rounded-xl neomorphism shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-black text-gray-900 font-heading">{milestone.title}</h3>
                        <Badge className="bg-blue-100 text-blue-800 text-xs">{milestone.year}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 neomorphism bg-blue-500 text-white hover:bg-blue-600 text-xs">Get in Touch</Badge>
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-heading">
              Ready to Join the Financial Revolution?
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Whether you're interested in partnerships, investment opportunities, or simply want to learn more about
              our mission, we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Get in touch for partnerships and inquiries",
                contact: "sammywinter01@gmail.com",
                bg: "bg-blue-500",
                textColor: "text-white",
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our team",
                contact: "+254711129204",
                bg: "bg-orange-500",
                textColor: "text-black",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                description: "Our headquarters in Nairobi, Kenya",
                contact: "Nairobi, Kenya",
                bg: "bg-blue-500",
                textColor: "text-white",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`neomorphism border-0 ${contact.bg} ${contact.textColor} text-center hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer`}
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
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${
                      contact.textColor === "text-white" ? "bg-white/20" : "bg-black/20"
                    } rounded-xl neomorphism flex items-center justify-center mx-auto mb-4`}
                  >
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-black mb-2 font-heading">{contact.title}</h3>
                  <p className={`${contact.textColor} text-xs mb-3 opacity-90`}>{contact.description}</p>
                  <p className="text-sm font-bold">{contact.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-6 font-heading">
            Ready to Experience the Future of Finance?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of users across Africa who are already transforming their financial lives with Grova's
            revolutionary platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base font-black"
              onClick={() => handleDownload("Android")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neomorphism border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base font-black bg-transparent"
              onClick={() => handleDownload("iOS")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-xl neomorphism-inset flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-black font-logo">Grova</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Finance without borders. Revolutionary financial platform designed specifically for Africa's 1.4 billion
                people.
              </p>
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
              <div key={section.title}>
                <h3 className="font-black mb-4 text-sm font-heading">{section.title}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-300"
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

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2025 Grova. All rights reserved - a product by boldstreet partners
            </p>
            <div className="flex space-x-4 text-xs text-gray-400 mt-4 md:mt-0">
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
