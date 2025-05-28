"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import BookingModal from "./booking-modal";
import Link from "next/link";
import HeroCarousel from "./hero-carousel";
export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-10 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-teal-800">
                  Hammr Sports Physiotherapy
                </h1>
                <p className="text-xl text-muted-foreground">
                  Expert, personalized online care from the comfort of your home
                  for sports and musculoskeletal injuries
                </p>
              </div>
              <div className="space-y-4">
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 text-teal-600">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>
                      Available globally for online/virtual physiotherapy
                      consults via Zoom/Facetime
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-600">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>
                      In depth injury assessment and diagnosis provided and
                      discussed
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-600">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Injury specific Rehab Plans/home programs</span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-600">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Real time support provided</span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-600">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Results that Last</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>
      <BookingModal
        open={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      />
    </div>
  );
}
