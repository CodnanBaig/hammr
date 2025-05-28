"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import BookingModal from "@/components/booking-modal"

export default function BookingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full text-teal-700 mb-2">
            <Calendar className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Book your consultation today and take the first step toward better movement and a pain-free lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" onClick={() => setIsModalOpen(true)}>
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={() => setIsModalOpen(false)} />
    </section>
  )
}
