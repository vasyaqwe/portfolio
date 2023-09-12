import { Button } from "./ui/button"
import { Icons } from "./ui/icons"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function ContactForm() {
    return (
        <>
            <p>
                You can contact me directly at{" "}
                <button className="underline">
                    vasylpolishchuk22@gmail.com
                </button>{" "}
                or with the form below.
            </p>
            <form className="mx-auto mt-6 flex w-full max-w-lg flex-col gap-3 md:mt-10">
                <Input placeholder="Your email" />
                <Textarea placeholder="Your message" />
                <Button className="self-center">
                    Send
                    <Icons.send />
                </Button>
            </form>
        </>
    )
}
