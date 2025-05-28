"use client"

import { useState } from "react"
import { useFormik } from "formik"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import * as Yup from "yup"

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[\d+\-\s()]{7,20}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
})

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setError(null)
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
        if (!res.ok) {
          throw new Error("Failed to submit form")
        }
        setIsSubmitted(true)
        resetForm()
        setTimeout(() => setIsSubmitted(false), 30000)
      } catch (err: any) {
        setError("Something went wrong. Please try again.")
      }
    },
  })

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      {isSubmitted ? (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-teal-800 mb-2">Thank You!</h2>
          <p className="text-muted-foreground">Your message has been submitted. We'll contact you shortly.</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-2">Contact Us</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                className="rounded-md"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="text-red-500 text-xs">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="rounded-md"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="text-red-500 text-xs">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="rounded-md"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="text-red-500 text-xs">
                {formik.touched.phone && formik.errors.phone}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe your inquiry or reason for contact"
                className="min-h-[120px] rounded-md"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="text-red-500 text-xs">
                {formik.touched.message && formik.errors.message}
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-md flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-teal-700 mb-1">What to expect:</p>
                <p>
                  We'll respond to your inquiry within 24 hours during business days. For urgent matters, please call us
                  directly.
                </p>
              </div>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
