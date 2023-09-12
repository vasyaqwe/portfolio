"use client"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import avatar from "@public/images/avatar.jpg"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { bounceIn } from "@/lib/motion"
import { ContactForm } from "@/components/forms/contact-form"

export default function Home() {
    return (
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-20">
            <motion.section
                id="home"
                variants={bounceIn({ direction: "down", delay: 0.2 })}
                initial={"hidden"}
                animate={"visible"}
                className="container pt-32"
            >
                <Image
                    className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover object-top shadow-lg"
                    src={avatar}
                    alt={"Vasyl Polishchuk"}
                />
                <p className="mt-4 text-center text-size-500 md:mt-6">
                    <strong>Hi! I'm Vasya</strong>, a{" "}
                    <strong>front-end developer.</strong>
                    <br /> Currently working on becoming a full-stack one,{" "}
                    <br />
                    focusing on <strong>React & Next.js.</strong>
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 md:mt-8">
                    <Button
                        asChild
                        className="group"
                    >
                        <Link href={"#contact"}>
                            Contact me{" "}
                            <Icons.arrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={"secondary"}
                        size={"icon"}
                    >
                        <Link
                            target="_blank"
                            href={"https://github.com/vasyaqwe"}
                            aria-label="Github"
                        >
                            <Icons.github />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={"secondary"}
                        size={"icon"}
                    >
                        <Link
                            target="_blank"
                            href={
                                "https://www.upwork.com/freelancers/~015c1b113a62e11b13"
                            }
                            aria-label="Upwork"
                        >
                            <Icons.upwork />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={"secondary"}
                        size={"icon"}
                    >
                        <Link
                            target="_blank"
                            href={
                                "https://www.linkedin.com/in/vasyl-polishchuk-37329624b/"
                            }
                            aria-label="LinkedIn"
                        >
                            <Icons.linkedIn />
                        </Link>
                    </Button>
                </div>
            </motion.section>
            <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mx-auto block origin-top"
                aria-hidden={true}
            >
                <Icons.arrowDownLong className=" mx-auto" />
            </motion.span>
            <motion.section
                id="about"
                variants={bounceIn({ delay: 0.4 })}
                initial={"hidden"}
                animate={"visible"}
                className="container text-center"
            >
                <h2 className="text-size-800">About me</h2>
                <p className="leading-loose">
                    I'm from Ukraine, and I've been{" "}
                    <strong>
                        developing websites for almost two years now
                    </strong>
                    , and{" "}
                    <strong>
                        have been working on real-world projects for a year
                    </strong>
                    . I started my journey purely with{" "}
                    <strong>front-end</strong>, and have started going into{" "}
                    <strong>full-stack development</strong> just recently.{" "}
                    <br /> I'm very passionate about web dev, and always try to
                    stay up-to-date with the latest technologies. <br /> I love
                    web dev and I love to learn new stuff about it. I love to do
                    it right, always keep my HTML semantic😅
                </p>
                <p className="mt-2">
                    Outside of coding - <strong>I'm into gaming</strong>. Been
                    gaming my whole life.
                </p>
            </motion.section>
            <motion.section
                id="contact"
                className="text-center"
            >
                <h2 className="text-size-800">Contact me</h2>

                <ContactForm />
            </motion.section>
        </div>
    )
}
