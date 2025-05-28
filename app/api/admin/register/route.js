import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import prisma from "@/lib/prisma"

export async function POST(req) {
  try {
    console.log("Parsing request body...")
    const body = await req.json() // Parse the JSON body once
    const { email, password, name } = body


    if (!email || !password || !name) {
      return new NextResponse("Missing email, name, or password", {
        status: 400,
      })
    }

    // Check if admin already exists
    console.log("Checking if admin exists...")
    const existing = await prisma.admin.findUnique({ where: { email } })
    if (existing) {
      console.log("Admin already exists:", existing)
      return NextResponse.json({ error: "Admin with this email already exists." }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const admin = await prisma.admin.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    })

    console.log("Admin created:", admin)
    return NextResponse.json(
      { success: true, admin: { id: admin.id, email: admin.email, name: admin.name } },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error occurred:", error)
    return new NextResponse("Internal error", { status: 500 }, { message: error.message })
  }
}
