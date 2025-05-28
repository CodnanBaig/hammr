"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Activity,
  Video,
  Clock,
  MapPin,
  Laptop,
  Zap,
  Calendar,
  DollarSign,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import BookingDialog from "@/components/booking-modal"
import CtaSection from "@/components/cta-section"
import HowItWorksSection from "@/components/how-we-works"
// import RecoveryTimeline from "@/components/timeline"

export default function ServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-r from-teal-900 to-teal-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/interconnected-healing.png" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container relative px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
              Expert Physiotherapy Services
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Comprehensive care tailored to your unique needs, delivered by an APA Titled Sports and Musculoskeletal
              Physiotherapist
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-teal-800 hover:bg-teal-100">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button onClick={() => setOpen(true)} size="lg" className="bg-white text-teal-800 hover:bg-teal-100">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

      {/* Services Section - REDESIGNED */}
      <section id="services" className="relative w-full py-16 md:py-24 bg-gradient-to-r from-teal-900 to-teal-800">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 via-teal-800/50 to-teal-900/50" />
        </div>

        {/* Content */}
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-700/50 rounded-full blur-xl" />
              <div className="relative inline-flex items-center justify-center p-2 bg-teal-700 rounded-full text-white mb-4">
                <Activity className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Services
            </h2>
            <p className="text-lg text-teal-100 max-w-[600px]">
              Expert physiotherapy care tailored to your needs, whether in-person or online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Sports Injury Card */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-teal-700/10">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Sports Injury Care</h3>
                <p className="text-gray-600 mb-4">
                  Specialized rehabilitation for athletes of all levels, from injury prevention to return-to-sport programs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Injury Prevention</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Return-to-Sport Programs</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setOpen(true)} 
                  className="w-full bg-teal-600 text-white hover:bg-teal-700 group-hover:scale-[1.02] transition-transform"
                >
                  Book Now
                </Button>
              </div>
            </div>

            {/* Musculoskeletal Card */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-teal-700/10">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Musculoskeletal Care</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive treatment for joint, muscle, and nerve conditions to improve your movement and reduce pain.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Joint & Muscle Pain</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Postural Assessment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Pain Management</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setOpen(true)} 
                  className="w-full bg-teal-600 text-white hover:bg-teal-700 group-hover:scale-[1.02] transition-transform"
                >
                  Book Now
                </Button>
              </div>
            </div>

            {/* Online Services Card */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-teal-700/10 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Online Physiotherapy</h3>
                <p className="text-gray-600 mb-4">
                  Professional physiotherapy care from the comfort of your home, with flexible scheduling and personalized programs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Virtual Consultations</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Home Exercise Programs</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Online Classes</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => setOpen(true)} 
                    className="flex-1 bg-teal-600 text-white hover:bg-teal-700 group-hover:scale-[1.02] transition-transform"
                  >
                    Book Now
                  </Button>
                  <Link 
                    href="/online-services/how-does-it-work"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-teal-600 bg-teal-50 rounded-md hover:bg-teal-100 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      

      {/* How It Works Section
      <HowItWorksSection /> */}

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full text-teal-700 mb-4">
              <DollarSign className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">Affordable Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-[800px]">
              Affordable physiotherapy services with no hidden fees
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Initial Consultation */}
            <div className="p-8 flex flex-col items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-teal-600 relative">
              {/* Special Offer Banner */}
              <div className="absolute top-0 left-0 w-full bg-teal-600 text-white text-center py-2 font-semibold rounded-t-lg z-10">
                Special Offer
              </div>
              <div className="w-full text-center mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Initial Consultation</h3>
                <div className="mt-4 mb-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-teal-800">$25</span>
                    <span className="text-muted-foreground ml-2">USD</span>
                  </div>
                  <div className="text-sm text-teal-600 mt-1">
                    <span className="line-through text-gray-400">$35</span> for first 6 months
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">Comprehensive 60-minute assessment and treatment plan</p>
                <ul className="space-y-3 mb-8 text-left text-teal-800">
                  <li className="flex items-start gap-2 text-teal-800">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Detailed assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized treatment plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Initial exercises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Education and advice</span>
                  </li>
                </ul>
              </div>
              <Button onClick={() => setOpen(true)} className="w-full bg-teal-600 hover:bg-teal-700">
                Book Initial Consultation
              </Button>
            </div>

            {/* Follow-up Session */}
            <div className="p-8 flex flex-col items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-teal-600 relative">
              {/* Special Offer Banner */}
              <div className="absolute top-0 left-0 w-full bg-teal-600 text-white text-center py-2 font-semibold rounded-t-lg z-10">
                Special Offer
              </div>
              <div className="w-full text-center mt-8">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Follow-up Consultation</h3>
                <div className="mt-4 mb-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-teal-800">$15</span>
                    <span className="text-muted-foreground ml-2">USD</span>
                  </div>
                  <div className="text-sm text-teal-600 mt-1">
                    <span className="line-through text-gray-400">$20</span> for first 6 months
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">30-minute session for ongoing care and progress</p>
                <ul className="space-y-3 mb-8 text-left text-teal-800">
                  <li className="flex items-start gap-2 text-teal-800">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Progress assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Treatment adjustments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced exercise progression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing support</span>
                  </li>
                </ul>
              </div>
              <Button onClick={() => setOpen(true)} className="w-full bg-teal-600 hover:bg-teal-700">
                Book Follow-up Session
              </Button>
            </div>

            {/* Custom Package */}
            <div className="p-8 flex flex-col items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-teal-600">
              <div className="w-full text-center">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Custom Package</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-teal-800">Custom</span>
                </div>
                <p className="text-muted-foreground mb-6">Tailored rehabilitation programs for your specific needs</p>
                <ul className="space-y-3 mb-8 text-left text-teal-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized treatment plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible session frequency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Extended support options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Customized pricing</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Know More
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-teal-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-teal-800 mb-5">Additional Information</h3>
              <div className="grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <p className="text-lg text-teal-700">Special Launch Offer</p>
                  <p className="text-muted-foreground">Enjoy discounted rates for the first 6 months of our service launch</p>
                </div>
                <div>
                  <p className="text-lg text-teal-700">Payment Methods</p>
                  <p className="text-muted-foreground">Credit/Debit Card, PayPal, Direct Bank Transfer</p>
                </div>
                <div>
                  <p className="text-lg text-teal-700">Health Insurance</p>
                  <p className="text-muted-foreground">Rebates available with participating providers</p>
                </div>
                <div>
                  <p className="text-lg text-teal-700">Cancellation Policy</p>
                  <p className="text-muted-foreground">24-hour notice required to avoid 50% fee</p>
                </div>
                <div>
                  <p className="text-lg text-teal-700">Group Sessions</p>
                  <p className="text-muted-foreground">Please contact us via email for group class details and pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
      <BookingDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}
