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
            className="fixed left-1/2 top-0 z-10
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
                            className="focus-state inline-block px-3 py-2 text-neutral"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}
