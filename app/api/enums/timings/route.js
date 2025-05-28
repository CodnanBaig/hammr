import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // Return a static list of available booking times
        const timings = [
            "09:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "02:00 PM",
            "03:00 PM",
            "04:00 PM",
            "05:00 PM"
        ];
        return NextResponse.json(timings);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 500, message: error.message });
    }
}