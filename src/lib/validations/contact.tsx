import { z } from "zod"

export const contactSchema = z.object({
    message: z.string().nonempty({ message: "Required" }),
    email: z
        .string()
        .nonempty({ message: "Required" })
        .email({ message: "Email format is invalid" }),
})
