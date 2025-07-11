"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Wallet,
  Shield,
  Lock,
  FileText,
  Fingerprint,
  Server,
  CheckCircle,
  Download,
  Accessibility,
  Volume2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SecurityPage() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
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
        "Voice assistant activated on Security page. Learn about our bank-grade security, encryption, biometric authentication, and comprehensive protection measures.",
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

  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Advanced Blockchain Integration",
      description:
        "Transparent transaction logging with immutable records ensuring complete financial transparency and security across all African markets",
      background: "bg-blue-500",
      textColor: "text-white",
      details: [
        "Immutable transaction records stored on distributed blockchain networks ensuring complete transparency and auditability",
        "Smart contract integration for automated security protocols and fraud prevention across all financial operations",
        "Decentralized verification systems reducing single points of failure and enhancing overall system resilience",
        "Comprehensive audit trails providing complete transaction history for regulatory compliance and user transparency",
        "Multi-chain support including Ethereum, Binance Smart Chain, and Polygon for enhanced security and redundancy",
      ],
      detailedInfo: {
        overview:
          "Our blockchain integration provides the highest level of transaction security and transparency available in modern financial systems. Every transaction is recorded on immutable ledgers, creating an unalterable history that ensures complete accountability and trust.",
        technicalSpecs:
          "Utilizes enterprise-grade blockchain protocols with 256-bit encryption, multi-signature validation, and distributed consensus mechanisms. Supports cross-chain interoperability and real-time transaction verification.",
        impact:
          "This technology ensures that all financial operations are transparent, secure, and verifiable, building trust between users, institutions, and regulatory bodies across Africa.",
      },
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Military-Grade End-to-End Encryption",
      description:
        "Bank-level security protocols protecting all financial data and transactions with advanced encryption standards used by global financial institutions",
      background: "bg-orange-500",
      textColor: "text-black",
      details: [
        "AES-256 encryption standard protecting all data transmission and storage with the same security used by military and government institutions",
        "Advanced key management systems with rotating encryption keys and secure key distribution protocols",
        "Secure communication channels with perfect forward secrecy ensuring that past communications remain secure even if keys are compromised",
        "End-to-end encryption for all user communications, transaction data, and personal information storage",
        "Zero-knowledge architecture ensuring that even Grova cannot access user's private financial information",
      ],
      detailedInfo: {
        overview:
          "Our encryption system uses the most advanced security protocols available, providing military-grade protection for all user data and financial transactions. This ensures that sensitive information remains completely secure at all times.",
        technicalSpecs:
          "Implements AES-256 encryption with RSA-4096 key exchange, ECDSA digital signatures, and TLS 1.3 for secure communications. Features hardware security modules (HSMs) for key management.",
        impact:
          "Users can trust that their financial data is protected by the same level of security used by major banks and government institutions worldwide.",
      },
    },
    {
      icon: <Fingerprint className="h-8 w-8" />,
      title: "Advanced Biometric Authentication",
      description:
        "Multi-modal biometric security including fingerprint, facial recognition, and voice pattern authentication for maximum security and convenience",
      background: "bg-blue-500",
      textColor: "text-white",
      details: [
        "Fingerprint recognition technology with liveness detection preventing spoofing attacks and ensuring authentic user verification",
        "Advanced facial recognition using 3D mapping and infrared sensors for secure authentication even in low-light conditions",
        "Voice pattern authentication analyzing unique vocal characteristics for hands-free security verification",
        "Behavioral biometrics monitoring typing patterns, device usage, and interaction behaviors for continuous authentication",
        "Anti-spoofing protection using advanced algorithms to detect and prevent fraudulent authentication attempts",
      ],
      detailedInfo: {
        overview:
          "Our biometric authentication system provides the most secure and convenient access to financial services. Multiple biometric modalities ensure that only authorized users can access accounts while maintaining ease of use.",
        technicalSpecs:
          "Features advanced neural networks for biometric processing, secure enclave storage for biometric templates, and real-time liveness detection. Supports multiple authentication factors simultaneously.",
        impact:
          "This technology eliminates password vulnerabilities while providing seamless access to financial services, significantly reducing fraud and unauthorized access.",
      },
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Comprehensive Multi-Factor Authentication",
      description:
        "Layered security approach with SMS verification, email authentication, and app-based two-factor authentication for complete account protection",
      background: "bg-orange-500",
      textColor: "text-black",
      details: [
        "SMS verification with secure message delivery and time-based one-time passwords (TOTP) for additional security layers",
        "Email authentication with encrypted communication channels and secure verification links",
        "App-based two-factor authentication using industry-standard TOTP and HOTP protocols for offline verification",
        "Hardware security key support including FIDO2 and WebAuthn standards for the highest level of authentication security",
        "Risk-based authentication analyzing user behavior, location, and device characteristics to detect suspicious activities",
      ],
      detailedInfo: {
        overview:
          "Our multi-factor authentication system provides multiple layers of security to protect user accounts. This comprehensive approach ensures that even if one authentication factor is compromised, accounts remain secure.",
        technicalSpecs:
          "Implements FIDO2, WebAuthn, TOTP, and HOTP standards with support for hardware security keys. Features adaptive authentication based on risk assessment and machine learning algorithms.",
        impact:
          "Users benefit from enterprise-grade security that adapts to their usage patterns while maintaining convenience and accessibility.",
      },
    },
  ]

  const securityStandards = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "ISO 27001 Compliance",
      description: "International standard for information security management systems",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "PCI DSS Level 1",
      description: "Highest level of payment card industry data security standards",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "SOC 2 Type II",
      description: "Comprehensive security, availability, and confidentiality controls",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations",
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

              {selectedFeature.details && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Security Features</h3>
                  <ul className="space-y-2">
                    {selectedFeature.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Security Impact</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedFeature.detailedInfo.impact}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => setNotification("Redirecting to app store...")}
              className="neomorphism bg-blue-500 hover:bg-blue-600 text-white flex-1"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Secure Grova App
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
              Bank-Grade Security
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Uncompromising
              <span className="block bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grova employs military-grade security protocols and bank-level protection measures to safeguard your
              financial data and transactions across Africa. Our comprehensive security infrastructure includes advanced
              encryption, biometric authentication, blockchain integration, and multi-layered protection systems that
              exceed international security standards and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""} animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className={`mb-4 neomorphism ${feature.background} ${feature.textColor} text-xs`}>
                    {feature.title}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>

                  <div className="space-y-4 mb-6">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div
                          className={`w-8 h-8 ${feature.background} rounded-lg neomorphism flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <CheckCircle className={`h-4 w-4 ${feature.textColor}`} />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`neomorphism ${feature.background} hover:opacity-90 ${feature.textColor}`}
                    onClick={() => handleLearnMore(feature)}
                  >
                    Learn More About This Security Feature
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

      {/* Security Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Industry Security Standards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grova meets and exceeds the highest international security standards and regulatory requirements, ensuring
              your financial data is protected by the same protocols used by major global financial institutions and
              government organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStandards.map((standard, index) => (
              <Card
                key={index}
                className="neomorphism border-0 bg-white hover:scale-105 transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl neomorphism flex items-center justify-center mx-auto mb-3">
                    {React.cloneElement(standard.icon, { className: "text-white" })}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm">{standard.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                Trusted by Financial Institutions Across Africa
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our security infrastructure is trusted by banks, government institutions, and financial service
                providers across all 54 African countries. We maintain the highest security standards while ensuring
                accessibility and ease of use for all users, from individual consumers to large enterprises and
                financial institutions.
              </p>
              <Button
                className="neomorphism bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => setNotification("Security documentation coming soon!")}
              >
                View Security Documentation
              </Button>
            </div>
            <div className="relative">
              <div className="neomorphism-deep bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-6">
                <Image
                  src="/images/customer-service.jpg"
                  alt="Security professionals"
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
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Experience Uncompromising Security</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Download Grova today and experience the peace of mind that comes with military-grade security, advanced
            encryption, biometric authentication, and comprehensive protection for all your financial activities across
            Africa.
          </p>
          <Button
            size="lg"
            className="neomorphism bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base font-semibold"
            onClick={() => setNotification("Redirecting to secure app download...")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Secure Grova App
          </Button>
        </div>
      </section>
    </div>
  )
}
