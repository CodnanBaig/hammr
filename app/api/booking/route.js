import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email-config'
import verifyToken from "@/app/middleware/verify-token";

export async function POST(req) {


    try {
        const { firstName,
            lastName,
            email,
            phone,
            serviceType,
            otherService,
            description,
            bookingDate,
            bookingTime } = await req.json()

        let book = new Date(bookingDate)
        const consultation = await prisma.consultation.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                serviceType,
                otherService,
                description,
                bookingDate: book,
                bookingTime
            }
        })


        await sendEmail({
            to: email,
            subject: "Booking Confirmation",
            html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
                      <h2 style="color: #333; text-align: center;">Booking Confirmation</h2>
                      <p>Hello ${firstName} ${lastName},</p>
                      <p>Thank you for booking a consultation with us. Your appointment has been confirmed.</p>
                      
                      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                          <h3 style="margin-top: 0; color: #555;">Appointment Details:</h3>
                          <p><strong>Service:</strong> ${otherService || serviceType}</p>
                          <p><strong>Date:</strong> ${book.toLocaleDateString()}</p>
                          <p><strong>Time:</strong> ${bookingTime}</p>
                      </div>
                      
                      <p>If you need to reschedule or cancel your appointment, please contact us as soon as possible.</p>
                      <p>We look forward to meeting with you!</p>
                      
                      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #777; font-size: 14px;">
                          <p>© ${new Date().getFullYear()} Hammr Sports Physiotherapy. All rights reserved.</p>
                      </div>
                  </div>
              `,
        }).catch((err) => console.log(err))
        return NextResponse.json({ status: 201, message: 'Form Submitted Successfully', consultation })

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

        const consultationData = await prisma.consultation.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                description: true,
                bookingDate: true,
                bookingTime: true,
                serviceType: true,
                createdAt: true,
                otherService: true,
            },
        })
        return NextResponse.json(
            { message: "Consultation Data Fetched Successfully", consultationData },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error fetching consultations:", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500, message: error.message  }
        )
    }
}

export async function DELETE(req) {
    try {
        const data = await verifyToken(req);
        // console.log("data", data);
        if (typeof data == 'string') {
            return NextResponse.json({ error: data }, { status: 401 })
        }

        const queryParam = req.nextUrl.searchParams;
        const id = queryParam.get("id");


        if (!id) {
            return NextResponse.json({ status: 400, message: 'ID is required' });
        }

        const deleteRecord = await prisma.consultation.delete({
            where: { id: Number(id) }, // Ensure the ID is parsed as an integer
        });

        return NextResponse.json({ status: 200, message: 'Record deleted successfully', data: deleteRecord });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 500, message: err.message });
    }
}