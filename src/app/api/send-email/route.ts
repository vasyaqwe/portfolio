import { ContactFormEmail } from "@/components/email/contact-form-email"
import { getSafeErrorMessage } from "@/lib/utils"
import { contactSchema } from "@/lib/validations/contact"
import { Resend } from "resend"
import * as z from "zod"

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const body = await request.json()

        const { email, message } = contactSchema.parse(body)

        const data = await resend.emails.send({
            from: "Contact <vasylpolishchuk@vasyldev.cc>",
            to: ["vasylpolishchuk22@gmail.com"],
            subject: "Portfolio Contact Form",
            react: ContactFormEmail({
                message,
                senderEmail: email,
            }),
        })

        return new Response(JSON.stringify(data))
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(getSafeErrorMessage(error), { status: 422 })
        }

        return new Response("Could not send your message", { status: 500 })
    }
}
