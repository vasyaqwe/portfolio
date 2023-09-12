import { ContactFormEmail } from "@/components/email/contact-form-email"
import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST() {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["vasylpolishchuk22@gmail.com"],
            subject: "Hello world",
            react: ContactFormEmail({
                message: "Test message",
                senderEmail: "Test sender",
            }),
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
