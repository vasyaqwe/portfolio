import { useMutation } from "@tanstack/react-query"
import { Button } from "../ui/button"
import { Icons } from "../ui/icons"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import axios from "axios"
import { Spinner } from "../ui/spinner"
import toast from "react-hot-toast"
import { getSafeErrorMessage } from "@/lib/utils"
import { useFormValidation } from "@/hooks/use-form-validation"
import { ChangeEvent, useState } from "react"
import { contactSchema } from "@/lib/validations/contact"
import * as z from "zod"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Tooltip } from "../ui/tooltip"

const email = "vasylpolishchuk22@gmail.com"

export function ContactForm() {
    const [formData, setFormData] = useState<z.infer<typeof contactSchema>>({
        email: "",
        message: "",
    })

    const { copied, onCopy } = useCopyToClipboard()

    const { isLoading, mutate: onSubmit } = useMutation(
        async () => {
            await axios.post("/api/send-email", formData)
        },
        {
            onSuccess: () => {
                setFormData({ email: "", message: "" })
                toast.success("Your message is sent!")
            },
            onError: (error) => {
                toast.error(getSafeErrorMessage(error))
            },
        }
    )

    const { safeOnSubmit, errors } = useFormValidation({
        onSubmit,
        formData,
        zodSchema: contactSchema,
    })

    function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <>
            <p>
                You can contact me directly at{" "}
                <Tooltip text={!copied ? "Copy to clipboard?" : "Copied!"}>
                    <button
                        onClick={() => onCopy(email)}
                        className="focus-state underline hover:opacity-60"
                    >
                        {email}
                    </button>
                </Tooltip>{" "}
                or with the form below.
            </p>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    safeOnSubmit()
                }}
                className="mx-auto mt-6 flex w-full max-w-lg flex-col gap-3 md:mt-10"
            >
                <Input
                    onChange={onChange}
                    value={formData.email}
                    invalid={errors.email}
                    name="email"
                    type="email"
                    placeholder="Your email"
                />
                <Textarea
                    onChange={onChange}
                    value={formData.message}
                    placeholder="Your message"
                    name="message"
                    invalid={errors.message}
                />
                <Button
                    className="group self-center"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Send"}
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <Icons.send className="transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                    )}
                </Button>
            </form>
        </>
    )
}
