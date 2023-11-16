import React from "react"

export function Footer() {
    const now = new Date()
    const currentYear = now.getFullYear()

    return (
        <footer className=" mt-20 bg-white py-5 text-center text-size-300 text-neutral-400 shadow-sm md:mt-28">
            <div className="container">
                <small className="text-size-300">
                    &copy; {currentYear} Vasyl Polishchuk. All rights reserved.
                </small>
                <p className="mt-2">
                    <strong>About this portfolio:</strong> built with Next.js 14
                    App Router, Typescript, TailwindCSS & Framer-motion, React
                    Email & Resend.
                </p>
            </div>
        </footer>
    )
}
