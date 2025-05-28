"use client"
import BookingModal from "@/components/booking-modal"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Activity } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const timelineSteps = [
  {
    id: 1,
    title: "Book Your Session",
    content:
      "Easily book your appointment through our website. Choose a time that works best for you—no commuting, no waiting rooms.",
    imagePath: "/online-appointment-booking.png",
    imageAlt: "Booking online",
  },
  {
    id: 2,
    title: "Secure Payment",
    content:
      "Confirm your appointment with secure payment. You'll receive a confirmation email once your booking is complete.",
    imagePath: "/secure-payment.webp",
    imageAlt: "Secure payment",
  },
  {
    id: 3,
    title: "Complete Intake Form",
    content:
      "Fill out a short form about your injury, pain, medical history, and goals to help us tailor your session.",
    imagePath: "/patient-completing-form.png",
    imageAlt: "Filling intake form",
  },
  {
    id: 4,
    title: "Join Virtual Consultation",
    content:
      "Meet via Zoom or FaceTime at your scheduled time. All you need is a device with a camera and space to move.",
    imagePath: "/telehealth-physio-assessment.png",
    imageAlt: "Virtual consultation",
  },
  {
    id: 5,
    title: "Thorough Assessment",
    content:
      "We'll guide you through specific movements to assess your mobility, strength, posture, and functional patterns.",
    imagePath: "/assessment.webp",
    imageAlt: "Thorough assessment",
  },
  {
    id: 6,
    title: "Personalized Plan",
    content:
      "Receive a customized treatment plan with specific exercises, video demos, and clear instructions for home practice.",
    imagePath: "/fitness-coach-tablet.png",
    imageAlt: "Custom plan",
  },
  {
    id: 7,
    title: "Ongoing Support",
    content:
      "We'll track your progress, make adjustments as you improve, and be available for follow-ups and questions.",
    imagePath: "/support.webp",
    imageAlt: "Ongoing support",
  },
]

// Add this CSS at the top of the file, after the imports
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

export default function HowDoesItWork() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isManualScrolling, setIsManualScrolling] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null, null, null])

  // Add style injection in useEffect
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Calculate progress and determine active step
  const calculateProgress = () => {
    if (!timelineRef.current || !sectionRef.current) return

    // Calculate the section's position relative to the viewport
    const timelineRect = timelineRef.current.getBoundingClientRect()

    // Calculate how far we've scrolled through the timeline
    const timelineStart = timelineRect.top
    const timelineHeight = timelineRect.height
    const viewportHeight = window.innerHeight
    const scrollPosition = -timelineStart + viewportHeight / 2

    // Calculate progress percentage (0 to 100)
    let progress = (scrollPosition / timelineHeight) * 100

    // Clamp progress between 0 and 100
    progress = Math.max(0, Math.min(100, progress))
    setScrollProgress(progress)

    // Determine which step should be active based on the progress
    // Get the positions of each step circle
    const stepPositions = stepRefs.current.map((ref) => {
      if (!ref) return 0
      const rect = ref.getBoundingClientRect()
      // Return the position of the step relative to the timeline
      return ((rect.top - timelineRect.top) / timelineHeight) * 100
    })

    // Find the last step that the progress has passed
    let newActiveStep = null
    for (let i = 0; i < stepPositions.length; i++) {
      if (progress >= stepPositions[i]) {
        newActiveStep = i
      } else {
        break
      }
    }

    setActiveStep(newActiveStep)
  }

  // Improved scroll to section function
  const scrollToSection = (index: number) => {
    if (!stepRefs.current[index]) return

    setIsManualScrolling(true)

    // Get the position of the step
    const stepElement = stepRefs.current[index]
    if (!stepElement) return

    // Calculate the position to scroll to (accounting for the header)
    const headerHeight = tabsRef.current?.offsetHeight || 0
    const stepRect = stepElement.getBoundingClientRect()
    const scrollTarget = window.scrollY + stepRect.top - headerHeight - 100 // Extra offset for better positioning

    // Scroll to the position
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    })

    // Set the active step manually after scrolling
    setTimeout(() => {
      setActiveStep(index)
      calculateProgress()
      setIsManualScrolling(false)
    }, 800) // Wait for scroll to complete
  }

  // Update scroll progress and determine active step based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling) return
      calculateProgress()
    }

    window.addEventListener("scroll", handleScroll)
    // Initialize on mount
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isManualScrolling])

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => calculateProgress()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-teal-50 to-white py-24 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
        
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full text-teal-700 mb-2 transform hover:scale-105 transition-transform duration-300">
              <Activity className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-teal-900">
              How Online Physiotherapy Works
            </h1>
            <p className="text-xl text-teal-700/90 max-w-2xl">
              Getting expert physiotherapy care online is simple, effective, and designed to fit into your lifestyle
            </p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)} 
                className="bg-teal-600 text-white hover:bg-teal-700 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Session
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <section className="py-16 bg-white rounded-md" ref={sectionRef}>
            <div className="container mx-auto px-4 max-w-6xl">

              {/* Tabs at the top with progress bar */}
              <div ref={tabsRef} className="sticky top-16 bg-white py-4 z-20">
                {/* Tabs - scrollable on mobile with hidden scrollbar */}
                <div className="overflow-x-auto scrollbar-hide pb-2">
                  <div className="flex gap-2 min-w-max justify-center px-4">
                    {timelineSteps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm ${
                          activeStep === index 
                            ? "bg-teal-600 text-white" 
                            : "bg-teal-50 text-teal-800 hover:bg-teal-100"
                        }`}
                      >
                        {step.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline with steps */}
              <div className="relative mt-12" ref={timelineRef}>
                {/* Vertical line - background (gray) */}
                <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-teal-200"></div>

                {/* Vertical line - progress indicator (teal) */}
                <div
                  className="absolute left-[29px] top-0 w-0.5 bg-teal-600 transition-all duration-300 ease-out"
                  style={{ height: `${scrollProgress}%` }}
                ></div>

                {/* Steps */}
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    ref={(el: HTMLDivElement | null) => {
                      stepRefs.current[index] = el;
                    }}
                    className="flex mb-16 last:mb-0 relative"
                    id={`step-${index}`}
                  >
                    {/* Circle with number */}
                    <div
                      className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-xl z-10 transition-all duration-500 flex-shrink-0 ${activeStep === index ? "bg-teal-600" : "bg-teal-200"
                        }`}
                    >
                      {step.id}
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-8 p-6 bg-gray-100 rounded-lg flex-1 transition-all duration-500 ${activeStep === index ? "shadow-md" : ""
                        }`}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="md:w-1/3 flex-shrink-0">
                          <div className="relative h-48 w-full rounded-lg overflow-hidden">
                            <Image
                              src={step.imagePath || "/placeholder.svg"}
                              alt={step.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-2/3">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <BookingModal open={isModalOpen} onOpenChange={() => setIsModalOpen(false)} />
    </section>
  )
}
