import { NextResponse } from "next/server"
import { ServiceType } from "@prisma/client"

export async function GET(req) {
    try {
        const types = Object.values(ServiceType)
        return NextResponse.json(types)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 500, message: error.message });
    }
}