"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import BookingModal from "@/components/booking-modal"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOnlineServicesOpen, setIsOnlineServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter()
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.split("#")[1]
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(href) // Navigate to the page if the target element is not found
    }
  }

  // Add click outside handler for dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOnlineServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-white-700">
            Hammr Sports Physiotherapy
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-teal-600 transition-colors">
            About
          </Link>
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsOnlineServicesOpen(!isOnlineServicesOpen)}
              className="text-sm font-medium hover:text-teal-600 transition-colors flex items-center gap-1 group"
            >
              Online Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOnlineServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute left-0 top-full mt-1 w-56 rounded-lg bg-white shadow-lg transition-all duration-200 ease-in-out ${
                isOnlineServicesOpen 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="p-2 space-y-1">
                <Link
                  href="/online-services"
                  className="block px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  onClick={() => setIsOnlineServicesOpen(false)}
                >
                  Overview
                </Link>
                <Link
                  href="/online-services/who-is-it-for"
                  className="block px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  onClick={(e) => {
                    handleSmoothScroll(e, "/online-services/who-is-it-for");
                    setIsOnlineServicesOpen(false);
                  }}
                >
                  Who is it for?
                </Link>
                <Link
                  href="/online-services#how-does-it-work"
                  className="block px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  onClick={(e) => {
                    handleSmoothScroll(e, "/online-services/how-does-it-work");
                    setIsOnlineServicesOpen(false);
                  }}
                >
                  How does it work?
                </Link>
              </div>
            </div>
          </div>
          <Link href="/online-services#pricing"
            onClick={(e) => {
              handleSmoothScroll(e, "/online-services#pricing")
              setIsMenuOpen(false)
            }}
            className="text-sm font-medium hover:text-teal-600 transition-colors">
            Pricing
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
        <div className="hidden md:flex">
          <Button asChild className="bg-teal-600 cursor-pointer hover:bg-teal-700" onClick={() => setOpen(true)}>
            <span>Book Now</span>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <button
                onClick={() => setIsOnlineServicesOpen(!isOnlineServicesOpen)}
                className="w-full flex items-center justify-between text-sm font-medium hover:text-teal-600 transition-colors"
              >
                Online Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOnlineServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  isOnlineServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-2 pt-2">
                  <Link
                    href="/online-services"
                    className="block text-sm font-medium hover:text-teal-600 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsOnlineServicesOpen(false);
                    }}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/online-services/who-is-it-for"
                    className="block text-sm font-medium hover:text-teal-600 transition-colors"
                    onClick={(e) => {
                      handleSmoothScroll(e, "/online-services/who-is-it-for");
                      setIsMenuOpen(false);
                      setIsOnlineServicesOpen(false);
                    }}
                  >
                    Who is it for?
                  </Link>
                  <Link
                    href="/online-services/how-does-it-work"
                    className="block text-sm font-medium hover:text-teal-600 transition-colors"
                    onClick={(e) => {
                      handleSmoothScroll(e, "/online-services/how-does-it-work");
                      setIsMenuOpen(false);
                      setIsOnlineServicesOpen(false);
                    }}
                  >
                    How does it work?
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/online-services#pricing"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
            <Button
              asChild
              className="bg-teal-600 cursor-pointer hover:bg-teal-700 w-full"
              onClick={() => {
                setOpen(true)
                setIsMenuOpen(false)
              }}
            >
              <span>Book Now</span>
            </Button>
          </div>
        </div>
      )}
      <BookingModal open={open} onOpenChange={setOpen} />
    </header>
  )
}
