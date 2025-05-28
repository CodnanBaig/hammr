import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    const user = await prisma.admin.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded)=>{
      console.log("error: ", error)
      console.log("decode: ", decoded)
    });

    const response = NextResponse.json({ success: true }, { status: 200 })

    response.cookies.set("admin_token", token, {
      // httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })

    return response
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 })
  }
}
