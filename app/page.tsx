import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Activity, Video, Calendar, Clock, Laptop, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import CtaSection from "@/components/cta-section";
import { ImageCarousel } from "@/components/image-carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Sports Injury Rehabilitation",
      description:
        "Specialized care for acute injuries, return-to-sport programs, and injury prevention.",
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      link: "/services#sports",
    },
    {
      id: 2,
      title: "Musculoskeletal Physiotherapy",
      description:
        "Treatment for spine, hip, shoulder, knee issues, and complex pain management.",
      icon: <Activity className="h-8 w-8 text-teal-600" />,
      link: "/services#musculoskeletal",
    },
    // {
    //   id: 3,
    //   title: "Online Physiotherapy",
    //   description: "Convenient virtual consultations with tailored home programs and real-time support.",
    //   icon: <Video className="h-8 w-8 text-teal-600" />,
    //   link: "/services#telehealth",
    // },
  ];
  const images = [
    "/IMG_8447.jpg",
    "/IMG_8484 (2).jpg",
    "/IMG_8488.jpg",
    "/IMG_8506.jpg",
    "/IMG_9647.jpg",
    // "/namita.jpg",
    // "/Daddy pic.jpg",
    "/IMG_1527.jpg",
    "/IMG_8413.jpg",
    "/IMG_3064.JPG",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mr-auto order-2 lg:order-1">
              <Image
                src="/Hammer-Images/namita.jpg"
                alt="Namita Mehta - Founder & Lead Physiotherapist"
                width={550}
                height={550}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Meet Namita Mehta
                </h2>
                <h3 className="text-xl text-teal-600">
                  Founder & Lead Physiotherapist
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  With over 16 years of experience, Namita is an Australian
                  Titled Sports and Musculoskeletal
                  Physiotherapist with a Double Master's from the University of
                  South Australia-Adelaide.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Her extensive background spans public health, private
                  practice, and elite sports—including work with para-athletes.
                </p>
              </div>
              <div>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-600 text-white-600 hover:bg-teal-50 hover:text-teal-600"
                >
                  <Link href="/about">
                    Read Full Bio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - REDESIGNED */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
              Specialisations
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive physiotherapy services tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-center justify-between text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-6">{card.description}</p>
                <Link
                  href={card.link}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full text-teal-700 mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">
              Why Choose Online Physiotherapy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-[800px]">
              The benefits of virtual care that make a real difference in your
              recovery journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-teal-700" />
                </div>
                <CardTitle className="text-xl text-teal-800 text-center">
                  No Waiting Time
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Skip the traffic and waiting rooms. Access expert care exactly
                  when you need it, saving you valuable time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-teal-700" />
                </div>
                <CardTitle className="text-xl text-teal-800 text-center">
                  Train Where You Are
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Learn to use the equipment and space available to you, making
                  your rehab more practical and sustainable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-6 w-6 text-teal-700" />
                </div>
                <CardTitle className="text-xl text-teal-800 text-center">
                  Flexible Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Fit rehabilitation into your busy life with sessions that work
                  around your schedule, not the other way around.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 mx-auto">
                  <Laptop className="h-6 w-6 text-teal-700" />
                </div>
                <CardTitle className="text-xl text-teal-800 text-center">
                  Consistent Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Stay connected with your therapist between sessions through
                  messaging and progress tracking for better outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from athletes and patients who've experienced our
                personalized care
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "After months of shoulder pain, Namita's online sessions and
                  personalized exercises helped me return to tennis pain-free.
                  Her expertise and attention to detail are exceptional."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-teal-600"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Michael S.</p>
                  <p className="text-sm text-muted-foreground">
                    Recreational Tennis Player
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      className="h-5 w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a competitive runner with chronic knee issues, I was
                  skeptical about online physio. Namita changed my perspective
                  completely. Her telehealth sessions were convenient and
                  effective."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-teal-600"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Sarah L.</p>
                  <p className="text-sm text-muted-foreground">
                    Marathon Runner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <main className=" bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
            Photo Gallery
          </h2>
          <p className="text-center text-gray-600 mb-12 mt-6 max-w-2xl mx-auto">
            Browse through this collection of beautiful memories.
          </p>

          <ImageCarousel images={images} />
        </div>
      </main> */}

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
