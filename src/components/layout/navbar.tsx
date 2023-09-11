"use client"
import { bounceIn } from "@/lib/motion"
import { motion } from "framer-motion"
import Link from "next/link"

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
]

export function Navbar() {
    return (
        <motion.nav
            className="fixed top-0 left-1/2
        bg-white/80 shadow-md backdrop-blur-md sm:top-6 sm:rounded-full"
            variants={bounceIn({ direction: "down", centerX: true })}
            initial={"hidden"}
            animate={"visible"}
        >
            <ul className="flex flex-wrap gap-4 px-4 py-[.4rem]">
                {nav.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className="px-3 focus-state py-2 inline-block text-neutral"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}
