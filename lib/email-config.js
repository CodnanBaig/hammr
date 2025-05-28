// This file contains email configuration settings
// You can import this in any file that needs to send emails

import nodemailer from "nodemailer"

// Create reusable transporter object
export function createTransporter() {
    return nodemailer.createTransport({
        // host: process.env.EMAIL_HOST,
        // port: process.env.EMAIL_PORT || 587,
        // secure: process.env.EMAIL_SECURE === "true",
        // auth: {
        //   user: process.env.EMAIL_USER,
        //   pass: process.env.EMAIL_PASSWORD,
        // },
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'xspace.dummy@gmail.com',
            pass: 'ojlkqpqnlpbtjzqe',
        },
    })
}

// Helper function to send emails
export async function sendEmail({ to, subject, html, from = process.env.EMAIL_FROM }) {
    try {
        const transporter = createTransporter()

        const mailOptions = {
            from: `"Hammr Sports Physiotherapy" <${from}>`,
            to,
            subject,
            html,
        }

        return transporter.sendMail(mailOptions)

    } catch (err) {
        console.log(err);
    }
}
