import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
import verifyToken from "@/app/middleware/verify-token";

export async function POST(req) {
    try {

        const { name, phone, email, message } = await req.json();
        const contactInfo = await prisma.contact.create({
            data: {
                name,
                phone,
                email,
                message,
            }
        })
        return NextResponse.json({ status: 201, message: 'Form Submitted Successfully', })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ errorMsg: err.message }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        const data = await verifyToken(req);
        // console.log("data", data);
        if (typeof data == 'string') {
            return NextResponse.json({ error: data }, { status: 401 })
        }
        const contactData = await prisma.contact.findMany({
            select: {
                id: true,
                name: true,
                phone: true,
                email: true,
                message: true,
                createdAt: true,
            }
        })
        return NextResponse.json({ data: contactData })

    } catch (error) {
        console.log(error.message);

        return NextResponse.json({ message: error.message })
    }
}

export async function DELETE() {
    try {
        const data = await verifyToken(req);
        // console.log("data", data);
        if (typeof data == 'string') {
            return NextResponse.json({ error: data }, { status: 401 })
        }
        const deleteRecord = prisma.contact.delete({
            where: { id: id }
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Error Deleting Record' }, { status: 500, message: err.message })
    }
}