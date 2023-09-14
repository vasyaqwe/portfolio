"use client"
import { nav } from "@/config"
import { bounceIn } from "@/lib/motion"
import { useGlobalStore } from "@/stores/use-global-store"
import { motion } from "framer-motion"
import Link from "next/link"

export function Navbar() {
    const { activeSection, setActiveSection, setlinkLastClickedAt } =
        useGlobalStore()

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
                                onClick={() => {
                                    setActiveSection(item.label)
                                    setlinkLastClickedAt(Date.now())
                                }}
                                href={item.href}
                                className={`focus-state inline-block rounded-full px-4 py-[2px] transition-colors hover:text-neutral-900 ${
                                    activeSection === item.label
                                        ? "text-neutral-900"
                                        : "text-neutral"
                                }`}
                            >
                                {item.label}

                                {activeSection === item.label && (
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
