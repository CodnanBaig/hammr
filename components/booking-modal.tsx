"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const BookingSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[\d+\-\s()]{7,20}$/, "Invalid phone number")
    .required("Phone number is required"),
  serviceType: Yup.string().required("Service type is required"),
  otherService: Yup.string().when("serviceType", {
    is: "other",
    then: (schema) => schema.required("Please specify your service"),
    otherwise: (schema) => schema.notRequired(),
  }),
  bookingDate: Yup.string().required("Preferred date is required"),
  bookingTime: Yup.string().required("Preferred time is required"),
  description: Yup.string(),
})

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [serviceTypes, setServiceTypes] = useState<string[]>([])
  const [bookingTimes, setBookingTimes] = useState<string[]>([])

  useEffect(() => {
    // Fetch service types
    fetch("/api/enums/serviceTypes")
      .then(res => res.json())
      .then(data => setServiceTypes(data))
      .catch(() => setServiceTypes([]))

    // Fetch booking times
    fetch("/api/enums/timings")
      .then(res => res.json())
      .then(data => setBookingTimes(data))
      .catch(() => setBookingTimes([]))
  }, [])

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      otherService: "",
      description: "",
      bookingDate: "",
      bookingTime: "",
    },
    validationSchema: BookingSchema,
    onSubmit: async (values, { resetForm }) => {
      setError(null)
      try {
        const res = await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            serviceType: values.serviceType === "other" ? values.otherService : values.serviceType,
          }),
        })
        if (!res.ok) throw new Error("Failed to submit booking")
        setIsSubmitted(true)
        resetForm()
        setTimeout(() => {
          setIsSubmitted(false)
          onOpenChange(false)
        }, 15000)

      } catch (err: any) {
        setError("Something went wrong. Please try again.")
      }
    },
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-teal-800">Book a Consultation</DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-teal-800 mb-2">Thank You!</h2>
            <p className="text-muted-foreground">Your booking request has been submitted. We'll contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit} className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your first name"
                  className="rounded-md"
                  required
                />
                <div className="text-red-500 text-xs">{formik.touched.firstName && formik.errors.firstName}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your last name"
                  className="rounded-md"
                  required
                />
                <div className="text-red-500 text-xs">{formik.touched.lastName && formik.errors.lastName}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
                  className="rounded-md"
                  required
                />
                <div className="text-red-500 text-xs">{formik.touched.email && formik.errors.email}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your phone number"
                  className="rounded-md"
                  required
                />
                <div className="text-red-500 text-xs">{formik.touched.phone && formik.errors.phone}</div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formik.values.serviceType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Sports">Sports Injury Rehabiliation</option>
                  <option value="Musculoskeletal">Musculoskeletal Physiotherapy</option>
                  <option value="Telehealth">Online Physiotherapy</option>
                  <option value="Other">Other (please specify)</option>
                </select>
                {formik.values.serviceType === "Other" && (
                  <Input
                    id="otherService"
                    name="otherService"
                    value={formik.values.otherService}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Please specify your service"
                    className="rounded-md mt-2"
                    required
                  />
                )}
                <div className="text-red-500 text-xs">
                  {formik.touched.serviceType && formik.errors.serviceType}
                  {formik.values.serviceType === "Other" && formik.touched.otherService && formik.errors.otherService && (
                    <div>{formik.errors.otherService}</div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bookingDate">Preferred Date</Label>
                <Input
                  id="bookingDate"
                  name="bookingDate"
                  type="date"
                  value={formik.values.bookingDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="rounded-md"
                  min={new Date().toISOString().split("T")[0]} // Prevent past dates
                  required
                />
                <div className="text-red-500 text-xs">{formik.touched.bookingDate && formik.errors.bookingDate}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bookingTime">Preferred Time</Label>
                <select
                  id="bookingTime"
                  name="bookingTime"
                  value={formik.values.bookingTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 8pm)</option>
                </select>
                <div className="text-red-500 text-xs">{formik.touched.bookingTime && formik.errors.bookingTime}</div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Brief Description of Your Condition</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Please describe your condition or reason for consultation"
                  className="min-h-[120px] rounded-md"
                />
                <div className="text-red-500 text-xs">{formik.touched.description && formik.errors.description}</div>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-md flex items-start gap-3 mt-6">
              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-teal-700 mb-1">What to expect after booking:</p>
                <p>
                  You'll receive a confirmation email with the details of your appointment.
                </p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground border-t pt-4 mt-6">
              <p>
                <strong>Cancellation Policy:</strong> Cancellations made less than 24 hours before the appointment will
                incur a 50% charge.
              </p>
            </div>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <DialogFooter className="mt-6 gap-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
