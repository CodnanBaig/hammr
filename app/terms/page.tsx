import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
                Terms of Use
              </h1>
              <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Cancellation Policy</h2>
              <p className="text-gray-600">
                Cancellations made less than 24 hours before the appointment will incur a 50% charge. This policy is in
                place to respect the time reserved for your session.
              </p>
              <p className="text-gray-600">
                If you need to reschedule, please do so at least 24 hours in advance to avoid any charges. We understand
                that emergencies happen, and these will be handled on a case-by-case basis.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Payment Terms</h2>
              <p className="text-gray-600">
                Payment is required to secure your booking. We accept credit cards, PayPal, and direct bank transfers.
                All prices are in Australian Dollars (AUD) and include GST where applicable.
              </p>
              <p className="text-gray-600">
                Invoices for services will be provided upon request and can be used for insurance claims where
                applicable.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Privacy Policy</h2>
              <p className="text-gray-600">
                Your privacy is important to us. All personal and medical information collected is kept strictly
                confidential and is used only for the purpose of providing physiotherapy services.
              </p>
              <p className="text-gray-600">
                We comply with all relevant privacy legislation and health records acts. Your information will never be
                shared with third parties without your explicit consent, except where required by law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Telehealth Consultations</h2>
              <p className="text-gray-600">By booking a telehealth consultation, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Ensure you have a stable internet connection and appropriate device for video consultations</li>
                <li>Provide accurate information about your health condition</li>
                <li>Follow safety instructions during assessment and exercises</li>
                <li>Understand that telehealth has limitations and may not be suitable for all conditions</li>
                <li>Acknowledge that you may be referred to in-person care if deemed necessary</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Disclaimer</h2>
              <p className="text-gray-600">
                While we strive to provide the highest quality care, we cannot guarantee specific outcomes from
                physiotherapy treatment. Results vary based on individual factors, condition severity, and adherence to
                recommended programs.
              </p>
              <p className="text-gray-600">
                The information provided on this website and during consultations is for general information purposes
                only and should not be considered as a substitute for medical advice from your doctor or other
                healthcare professional.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Contact Us</h2>
              <p className="text-gray-600">If you have any questions about these terms, please contact us at:</p>
              <p className="text-gray-600">
                <Link href="mailto:contact@hammrphysio.com" className="text-teal-600 hover:underline">
                  contact@hammrphysio.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
