import { Navbar } from "@/components/layout/navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Josefin_Sans } from "next/font/google"

const primary = Inter({ subsets: ["latin"], variable: "--font-primary" })
const secondary = Josefin_Sans({
    subsets: ["latin"],
    variable: "--font-secondary",
})

export const metadata: Metadata = {
    title: "Vasyl Polishchuk | Portfolio",
    description:
        "I am a professional full-stack developer with a couple years of experience.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className="overflow-hidden "
        >
            <body
                className={`${primary.variable} ${secondary.variable} min-h-screen relative overflow-hidden font-primary text-neutral-900 bg-gray-50 grainy-bg text-size-400`}
            >
                <div
                    className="bg-orange-100 z-[-1] absolute left-[10%] w-[20rem] h-[20rem] md:w-[45rem] md:h-[30rem] blur-[11rem]"
                    aria-hidden={true}
                />
                <div
                    className="bg-purple-100 z-[-1] left-[40%] absolute w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] blur-[11rem]"
                    aria-hidden={true}
                />
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}
