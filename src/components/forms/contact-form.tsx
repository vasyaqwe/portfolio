"use client"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"
import { getSafeErrorMessage } from "@/lib/utils"
import { useFormValidation } from "@/hooks/use-form-validation"
import { ChangeEvent, useState } from "react"
import { contactSchema } from "@/lib/validations/contact"
import * as z from "zod"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Tooltip } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Icons } from "@/components/ui/icons"

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
                toast.error(getSafeErrorMessage(error), {
                    position: "bottom-center",
                })
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
