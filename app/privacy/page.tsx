import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-gray-500">Last Updated: (Insert Date)</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Introduction</h2>
              <p className="text-gray-600">
                We value your privacy. This page explains how we collect, use, and protect your information when you use our website and services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Information We Collect</h2>
              <p className="text-gray-600">
                We may collect your name, contact details, and information related to your appointments. This information is used only to provide our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">How We Use Your Information</h2>
              <p className="text-gray-600">
                Your information is used to process your bookings, send appointment confirmations, and provide ongoing care. We may also use your data for marketing (with your consent) and to comply with legal obligations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Disclosure of Your Information</h2>
              <p className="text-gray-600">
                We do not sell or rent your personal data. We may share your information with trusted third parties (such as our booking system or payment processors) solely to provide our services. We may also disclose your data if required by law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:contact@hammrphysio.com" className="text-teal-600 underline">contact@hammrphysio.com</a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Please review this page periodically.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Contact</h2>
              <p className="text-gray-600">
                If you have any questions about our privacy policy, please contact us at <a href="mailto:contact@hammrphysio.com" className="text-teal-600 underline">contact@hammrphysio.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 