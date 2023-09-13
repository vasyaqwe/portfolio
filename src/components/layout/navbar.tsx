"use client"
import { bounceIn } from "@/lib/motion"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const nav = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Contact",
        href: "#contact",
    },
] as const

export function Navbar() {
    const [activeLink, setActiveLink] = useState<(typeof nav)[number]["label"]>(
        nav[0].label
    )

    return (
        <>
            <nav className="fixed left-0 top-0 z-10 w-full bg-transparent md:left-1/2  md:top-6 md:w-max md:-translate-x-1/2 md:rounded-full">
                <motion.div
                    className="absolute inset-0 left-1/2 z-[-5] h-full w-full
        bg-white/80 shadow-md backdrop-blur-md md:rounded-full"
                    variants={bounceIn({ direction: "down", centerX: true })}
                    initial={"hidden"}
                    animate={"visible"}
                    aria-hidden={"true"}
                />
                <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 p-[.6rem] md:gap-5">
                    {nav.map((item) => (
                        <motion.li
                            variants={bounceIn({
                                direction: "down",
                            })}
                            initial={"hidden"}
                            animate={"visible"}
                            key={item.label}
                            className="relative"
                        >
                            <Link
                                onClick={() => setActiveLink(item.label)}
                                href={item.href}
                                className={`focus-state  inline-block rounded-full px-4 py-[2px] transition-colors hover:text-neutral-900 ${
                                    activeLink === item.label
                                        ? "text-neutral-900"
                                        : "text-neutral"
                                }`}
                            >
                                {item.label}

                                {activeLink === item.label && (
                                    <motion.span
                                        layoutId="activeLink"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 40,
                                        }}
                                        aria-hidden={"true"}
                                        className="absolute inset-0 z-[-1] inline-block rounded-full bg-neutral-100/75"
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
