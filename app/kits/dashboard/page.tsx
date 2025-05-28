"use client"

import Link from "next/link"
import { Calendar, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardCards() {
    // Cards data
    const cards = [
        {
            title: "Contact Information",
            description: "View and manage all contact form submissions",
            icon: Users,
            href: "/kits/contact-data",
            color: "bg-[#e8f7f5]",
            iconColor: "text-[#0D8B7D]",
        },
        {
            title: "Consultation Requests",
            description: "Manage consultation bookings and appointments",
            icon: Calendar,
            href: "/kits/consultation-data",
            color: "bg-[#e8f7f5]",
            iconColor: "text-[#0D8B7D]",
        },

    ]

    return (
        <div className="min-h-[100dvh] p-8">
            <h2 className="text-2xl font-bold text-[#0d8a74] mb-4">Admin Dashboard</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => (
                    <Link key={index} href={card.href} className="group transition-all duration-200 hover:scale-[1.02]">
                        <Card className="h-full overflow-hidden border-[#e0f0ee] shadow-sm transition-all duration-200 hover:border-[#0D8B7D] hover:shadow-md">
                            <CardHeader className={`${card.color} flex flex-row items-center gap-4 pb-2`}>
                                <div className="rounded-full bg-white/80 p-2">
                                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                                </div>
                                <CardTitle className="text-xl font-semibold text-[#0D8B7D]">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <CardDescription className="text-base text-gray-600">{card.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-end pb-4">
                                <div className="flex items-center text-[#0D8B7D] transition-all duration-200 group-hover:translate-x-1">
                                    <span className="mr-1 text-sm font-medium">View</span>
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
