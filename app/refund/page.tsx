import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="space-y-8">
            <Button asChild variant="ghost" className="mb-4 text-gray-600">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-600">
                Refund Policy
              </h1>
              <p className="text-gray-500">Last Updated: (Insert Date)</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Eligibility for Refunds</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Refunds are available for cancellations made at least 24 hours before your scheduled appointment.</li>
                <li>No refunds will be issued for missed appointments or cancellations made less than 24 hours in advance.</li>
                <li>If you experience technical issues during an online session, please contact us for assistance.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">How to Request a Refund</h2>
              <p className="text-gray-600">
                To request a refund, please email us at <a href="mailto:info@hammerphysio.com" className="text-teal-600 underline">info@hammerphysio.com</a> with your appointment details and reason for the request. We will review your request and respond within 3 business days.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Policy Updates</h2>
              <p className="text-gray-600">
                This policy is subject to change. Please check this page for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 