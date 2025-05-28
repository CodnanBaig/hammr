import Link from "next/link"
import Image from "next/image"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Let&apos;s Book your Session
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-teal-100">
                Book your session today and take the first step toward better movement and a pain-free lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - REDESIGNED */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Info Card */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground">
                  Reach out to us for any questions about our online physiotherapy services or to schedule a session.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-teal-800">Location</h3>
                    <p className="text-muted-foreground">Based in Melbourne, Australia</p>
                    <p className="text-muted-foreground">(Consultations Available Worldwide)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-teal-800">Email</h3>
                    <Link
                      href="mailto:contact@hammrphysio.com"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      contact@hammrphysio.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {/* <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div> */}
                  {/* <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <Link href="tel:+61412345678" className="text-teal-600 hover:text-teal-700 transition-colors">
                      +61 412 345 678
                    </Link>
                  </div> */}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-teal-800">Business Hours</h3>
                    <p className="text-muted-foreground">Saturday: 8:30am - 12:00pm IST</p>
                    <p className="text-muted-foreground">Sunday: 8:30am - 11:00am IST</p>
                    <p className="text-muted-foreground">Tuesday: Available on request</p>
                    <p className="text-muted-foreground">Thursday: Available on request</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border shadow-sm mt-4">
                <Image
                  src="/melbourne-cityscape-day.png"
                  alt="Melbourne, Australia"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                Common questions about our online physiotherapy services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-700">Is online physiotherapy effective?</h3>
              <p className="text-muted-foreground">
                Yes! Research shows that telehealth physiotherapy can be just as effective as in-person care for many
                conditions. The focus is on education, exercise prescription, and movement analysis, all of which can be
                done effectively online.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-700">How do payments work?</h3>
              <p className="text-muted-foreground">
                After booking, you'll receive payment instructions via email. We accept credit cards, PayPal, and direct
                bank transfers. Payment must be received to secure your appointment.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-700">Are online sessions covered by insurance?</h3>
              <p className="text-muted-foreground">
                Many health insurance providers now cover telehealth physiotherapy. We recommend checking with your
                specific provider about coverage for virtual consultations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-700">What if I need hands-on treatment?</h3>
              <p className="text-muted-foreground">
                While hands-on techniques can be valuable, many conditions can be effectively managed through guided
                self-treatment, exercise, and education. If your condition requires in-person care, we'll help you find
                appropriate local resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
