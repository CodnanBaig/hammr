import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-teal-700">Hammr Sports Physiotherapy</h3>
            <p className="text-sm text-muted-foreground">
              Expert, personalized physiotherapy care from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-teal-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-teal-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#sports" className="text-muted-foreground hover:text-teal-600 transition-colors">
                  Sports Injury Rehabilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#musculoskeletal"
                  className="text-muted-foreground hover:text-teal-600 transition-colors"
                >
                  Musculoskeletal Physiotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#telehealth"
                  className="text-muted-foreground hover:text-teal-600 transition-colors"
                >
                  Online Physiotherapy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                <span className="text-muted-foreground">Based in Melbourne, Australia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-600" />
                <Link
                  href="mailto:contact@hammrphysio.com"
                  className="text-muted-foreground hover:text-teal-600 transition-colors"
                >
                  contact@hammrphysio.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-600" />
                <Link href="tel:+61412345678" className="text-muted-foreground hover:text-teal-600 transition-colors">
                  +61 412 345 678
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hammr Sports Physiotherapy. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/terms" className="text-muted-foreground hover:text-teal-600 transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-teal-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/refund" className="text-muted-foreground hover:text-teal-600 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
