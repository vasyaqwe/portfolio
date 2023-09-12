import { useMutation } from "@tanstack/react-query"
import { Button } from "../ui/button"
import { Icons } from "../ui/icons"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import axios from "axios"
import { Spinner } from "../ui/spinner"

export function ContactForm() {
    const { isLoading, mutate: onSubmit } = useMutation(async () => {
        await axios.post("/api/send-email")
    }, {})

    return (
        <>
            <p>
                You can contact me directly at{" "}
                <button className="underline">
                    vasylpolishchuk22@gmail.com
                </button>{" "}
                or with the form below.
            </p>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit()
                }}
                className="mx-auto mt-6 flex w-full max-w-lg flex-col gap-3 md:mt-10"
            >
                <Input placeholder="Your email" />
                <Textarea placeholder="Your message" />
                <Button
                    className="self-center"
                    disabled={isLoading}
                >
                    Send
                    {isLoading ? <Spinner /> : <Icons.send />}
                </Button>
            </form>
        </>
    )
}
