"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CtaSection from "@/components/cta-section";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-teal-800">
                  About Namita Mehta
                </h1>
                <p className="text-xl text-muted-foreground">
                  Founder & Lead Physiotherapist at Hammr Sports Physiotherapy
                </p>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="relative">
                <Image
                  src="/Hammer-Images/IMG_7701.jpg"
                  alt="Namita Mehta - Founder & Lead Physiotherapist"
                  width={550}
                  height={550}
                  className="rounded-xl object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 rounded-b-xl">
                  <p className="text-sm text-white text-center">
                    Women in Sport Conference in Melbourne - Aug 2023 with Dr Kate Ackerman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 ">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Meet Namita Mehta
                </h2>
                <p className="text-lg text-muted-foreground">
                  Originally from New Delhi, India. I hold a Bachelor's degree in Physiotherapy from Manipal University, Karnataka. Like many passionate about health and sport my journey began at home – with a strong desire to help people recover, move better and return to doing what they love.
                </p>
                <p className="text-lg text-muted-foreground">
                  After completing my undergraduate studies, I moved to Australia to further my education and career and earn a double Master's in Sports and Musculoskeletal Physiotherapy from University of South Australia in Adelaide and after that went to becoming an Australia Titled Sports and Musculoskeletal Physiotherapist which one can only apply and receive after working for 5 years in Sports and Musculoskeletal physiotherapy post a Master's degree.
                </p>
                <p className="text-lg text-muted-foreground">
                  This experience opened doors to work across Private, public sectors and Elite Sports Physiotherapy and Teaching. Over the last 16 years I worked and gained experiences working in private practice sector and travelling with several sports teams covering National and international championships. Over the years I have been lucky to also work with Para sports in vision impaired, physical disability and intellectual disability categories and it's been an absolute joy and gratifying to work with all these teams.
                </p>
                {/* <p className="text-lg text-muted-foreground">
                  Outside of work, I love pottery, wine, racquet sports, and
                  spending time with my family and friends—passions that keep me
                  grounded and enhance the care I provide.
                </p> */}
              </div>
              <div className="mx-auto lg:mr-auto ">
                <div className="relative">
                  <Image
                    src="/hero-carousel-images/IMG_4718.JPG"
                    alt="Namita's approach to physiotherapy"
                    width={550}
                    height={550}
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 rounded-b-xl">
                    <p className="text-sm text-white text-center">
                      International Championship for Basketball ID teams
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <section className="w-full py-12 md:py-24">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800 text-center mb-12">
                  Education & Qualifications
                </h2>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left side - Text Content */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-teal-700 border-b border-teal-100 pb-4">
                        Academic & Professional Qualifications
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Double Master's in Sports and Musculoskeletal Physiotherapy, University of South Australia-Adelaide</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Australian Titled Sports and Musculoskeletal Physiotherapist</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Internationally certified Polestar Mat coursework pilates instructor</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Clinical pilates certified physiotherapist</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Certified in Australian Sports Physiotherapy Level 1-2 courses</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Certified in GLAD osteoarthritis course</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-teal-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-muted-foreground">Due to Special interest in Female Sports - Done courses on The female Athlete and Heathy Active women symposium</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right side - Images */}
                    <div className="space-y-6">
                      <div className="relative h-64 w-full rounded-xl overflow-hidden">
                        <Image
                          src="/Hammer-Images/IMG_8484 (2).jpg"
                          alt="Namita Mehta - Professional Physiotherapist"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                        {/* <p className="absolute bottom-4 left-4 text-white font-medium">
                          Professional Physiotherapist
                        </p> */}
                      </div>
                      <div className="relative h-64 w-full rounded-xl overflow-hidden">
                        <Image
                          src="/Hammer-Images/graduation.jpg"
                          alt="International Championship Experience"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                        {/* <p className="absolute bottom-4 left-4 text-white font-medium">
                          International Championship Experience
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section className="w-full py-12 md:py-24">
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800 text-center mb-12">
                  Professional Experience
                </h2>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-10 p-8">
                    {/* Left side - Text Content */}
                    <div className="space-y-6 h-[600px] overflow-y-auto scroll-smooth pr-5">
                      <h3 className="text-2xl font-bold text-teal-700 border-b border-teal-100 pb-4">
                        Professional Qualifications
                      </h3>
                      {/* Current Experience */}
                      <div className="space-y-4 ">
                        <h4 className="font-semibold text-teal-700">
                          Current Positions
                        </h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-teal-600"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span className="text-muted-foreground">Senior Physiotherapist, Melbourne Public Health System</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-teal-600"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span className="text-muted-foreground">Sports physiotherapist with Defence health</span>
                          </li>
                        </ul>
                      </div>

                      {/* Past Experience */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-teal-700">
                          Past Experience
                        </h4>
                        <div className="space-y-6">
                          {/* Clinical Experience */}
                          <div>
                            <h5 className="font-semibold text-teal-700 mb-3">
                              Clinical Practice
                            </h5>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Advanced practice physiotherapist in Emergency Department, Soft tissue injury clinic, Virtual fracture clinic, Neurosurgery clinic and osteoarthritis clinic</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Clinical Educator for Final year Physiotherapy students at University of South Australia, Adelaide</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Tutor in Australian Physiotherapy courses run by Specialist Sports Physiotherapist Trish Wisbey Roth</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Worked as a sports and Musculoskeletal physiotherapist in Private sports clinic</span>
                              </li>
                            </ul>
                          </div>

                          {/* Sports Experience */}
                          <div>
                            <h5 className="font-semibold text-teal-700 mb-3">
                              Sports Physiotherapy Experience
                            </h5>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist under 23s wheelchair basketball team for the nationals in Brisbane – April 2024</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist for the Australian Blind Cricket Team for T-20 World cup tour Dec- 2022</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist - Women's Gymnastics Southern cross Championship October 2022</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist for Basketball Australia for the Australian Pearls Basketball Team for the INAS Global Games – October 2019</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist: Under 21 Girls Victorian Indoor Hockey Nationals – Goulburn, Jan 2019</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist: Both Men's and Women's (Intellectual Disability Teams) Basketball, Ivor Burge Championship – Australian Institute of Sport, Canberra, Feb 2019</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports Physiotherapist: U15 Victorian Nationals: State Girls Hockey Team (National Championships – Wollongong, NSW April 2018</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-teal-600"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-muted-foreground">Sports physiotherapist: State Men's Hockey team (Masters Games), Lismore and Ballina, NSW, September 2018</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Images */}
                    <div className="space-y-6">
                      <div className="relative h-[600px] w-full rounded-xl overflow-hidden">
                        <Image
                          src="/Hammer-Images/IMG_3064.JPG"
                          alt="Professional Experience"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-blue-50">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="mx-auto lg:mr-auto order-2 lg:order-1">
                    <Image
                      src="/telehealth-physio.png"
                      alt="Namita's approach to physiotherapy"
                      width={550}
                      height={550}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                        My Approach
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        I believe in treating the whole person, not just the injury.
                        My approach combines evidence-based techniques with
                        personalized care to help you achieve your movement goals.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        Through online physiotherapy, I can provide expert care that
                        fits into your lifestyle, eliminating barriers like travel
                        time and waiting rooms. This allows for more consistent
                        treatment and better outcomes.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        Whether you're an elite athlete or someone who simply wants to
                        move without pain, my goal is to empower you with the
                        knowledge and tools to take control of your physical health.
                      </p>
                    </div>
                    <div>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href="/services">
                          Explore My Services <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How we started Section */}
            <section className="w-full py-12 md:py-200">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                        How it all started?
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Hammr Physiotherapy is a tribute to my Grandfather who was my
                        idol and was himself a National level Athlete in Boxing and
                        track and field . Hence Hammr physiotherapy gets its name from
                        his name Hakumatrai Mehta where I have used his intials to
                        come up with this online Sports and musculoskeletal
                        physiotherapy venture taking his legacy in sports forward .en.
                      </p>
                      {/* <p className="text-lg text-muted-foreground">
                        After completing her Master's in Australia and working with athletes across all levels, Namita launched Hammr to help clients in India and beyond recover and perform at their best—without the limits of location.
                      </p> */}
                    </div>
                    <div>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href="/services">
                          Explore My Services <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mx-auto lg:mr-auto ">
                    <Image
                      src="/Hammer-Images/Daddy pic.jpg"
                      alt="Namita's approach to physiotherapy"
                      width={550}
                      height={550}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <CtaSection />
          </div>
        </div>
      </section>

      {/* Add this style block at the top of the file, after the imports */}
      <style jsx global>{`
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        .scroll-smooth::-webkit-scrollbar {
          width: 6px;
        }
        .scroll-smooth::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .scroll-smooth::-webkit-scrollbar-thumb {
          background: #0d9488;
          border-radius: 3px;
        }
        .scroll-smooth::-webkit-scrollbar-thumb:hover {
          background: #0f766e;
        }
      `}</style>
    </div>
  );
}
