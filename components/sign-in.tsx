"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Eye, EyeOff, Activity, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function AdminSignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/admin/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
        
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Failed to log in")
        }

        // Handle successful login (e.g., redirect to admin dashboard)
        console.log("Login successful:", data)
        router.push('/kits/dashboard')
        // window.location.href = "/admin/dashboard" // Redirect to admin dashboard
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <div className="min-h-screen bg-[#f0faf5] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-[#0d8a74]" />
            <span className="ml-2 text-2xl font-bold text-[#0d8a74]">Hammr Sports Physiotherapy</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#0d8a74]/10 rounded-full">
            <Shield className="h-5 w-5 text-[#0d8a74]" />
            <span className="ml-2 text-sm font-medium text-[#0d8a74]">Admin Portal</span>
          </div>
        </div>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-700">Administrator Sign In</h2>
        <p className="mt-2 text-center text-sm text-gray-500">Authorized personnel only</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Admin Email
              </Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-gray-300 focus:border-[#0d8a74] focus:ring-[#0d8a74] ${
                    formik.touched.email && formik.errors.email ? "border-red-500" : ""
                  }`}
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="mt-1 relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-gray-300 focus:border-[#0d8a74] focus:ring-[#0d8a74] pr-10 ${
                    formik.touched.password && formik.errors.password ? "border-red-500" : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                )}
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0d8a74] hover:bg-[#0a6e5c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d8a74]"
              >
                {isLoading ? "Authenticating..." : "Sign in to Admin Portal"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              This is a secure area. All login attempts are monitored and recorded.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Need assistance?{" "}
          <a href="#" className="font-medium text-[#0d8a74] hover:text-[#0a6e5c]">
            Contact IT support
          </a>
        </p>
      </div>
    </div>
  )
}
