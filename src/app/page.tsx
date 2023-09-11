"use client"
import { Button } from "@/components/layout/ui/button"
import { Icons } from "@/components/layout/ui/icons"
import avatar from "@public/images/avatar.jpg"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { bounceIn } from "@/lib/motion"

export default function Home() {
    return (
        <>
            <motion.section
                id="home"
                variants={bounceIn({ direction: "down", delay: 0.2 })}
                initial={"hidden"}
                animate={"visible"}
                className="pt-32 container"
            >
                <Image
                    className="w-32 h-32 shadow-lg border-4 mx-auto border-white rounded-full object-cover object-top"
                    src={avatar}
                    alt={"Vasyl Polishchuk"}
                />
                <p className="text-size-500 text-center mt-4 md:mt-6">
                    <strong>Hi! I'm Vasya</strong>, a{" "}
                    <strong>front-end developer.</strong>
                    <br /> Currently working on becoming a full-stack one,{" "}
                    <br />
                    focusing on <strong>React & Next.js.</strong>
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-8 justify-center">
                    <Button
                        asChild
                        className="group"
                    >
                        <Link href={"#contact"}>
                            Contact me{" "}
                            <Icons.arrowRight className="group-hover:translate-x-1 transition-transform" />
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
                className="mx-auto block origin-top mt-10 md:mt-16"
                aria-hidden={true}
            >
                <Icons.arrowDownLong className=" mx-auto" />
            </motion.span>
            <motion.section
                id="about"
                variants={bounceIn({ delay: 0.4 })}
                initial={"hidden"}
                animate={"visible"}
                className="container text-center mt-10 md:mt-16"
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
                    web dev and I love to learn new stuff about it. <br /> I
                    love to do it right, always keep my HTML semantic😅
                </p>
                <p className="mt-2">
                    Outside of coding - <strong>I'm into gaming</strong>. Been
                    gaming my whole life.
                </p>
            </motion.section>
        </>
    )
}
