"use client"
import { Calendar } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import BookingModal from './booking-modal'
import Link from 'next/link'

export default function CtaSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <section className="w-full py-12 md:py-24 bg-teal-800 text-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Move Better?</h2>
                            <p className="mx-auto max-w-[700px] md:text-xl text-teal-100">
                                Book your session today and take the first step toward better movement and a pain-free lifestyle.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-white text-teal-800 hover:bg-teal-100">
                                Book a Consultation <Calendar className="ml-2 h-5 w-5" />
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-teal-800 hover:bg-teal-700">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <BookingModal open={isModalOpen} onOpenChange={() => setIsModalOpen(false)} />

        </div>
    )
}
