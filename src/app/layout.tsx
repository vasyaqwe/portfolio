import { Navbar } from "@/components/layout/navbar"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter, Josefin_Sans } from "next/font/google"
import { TanstackProvider } from "@/components/tanstack-provider"
import { Toaster } from "react-hot-toast"
import { Footer } from "@/components/layout/footer"

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

export const viewport: Viewport = {
    initialScale: 1,
    maximumScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className="scroll-pt-32 overflow-x-hidden scroll-smooth antialiased md:scroll-pt-40"
        >
            <body
                className={`${primary.variable} ${secondary.variable} grainy-bg relative min-h-screen overflow-hidden 
                bg-gray-50/50 font-primary text-size-400 leading-loose text-neutral-900`}
            >
                <Toaster />
                <div
                    className="absolute left-[10%] z-[-1] h-[20rem] w-[20rem] transform-gpu bg-orange-100 blur-[11rem] md:h-[30rem] md:w-[45rem]"
                    aria-hidden={true}
                />
                <div
                    className="absolute left-[40%] z-[-1] h-[20rem] w-[20rem] transform-gpu bg-purple-100 blur-[11rem] md:h-[30rem] md:w-[30rem]"
                    aria-hidden={true}
                />
                <TanstackProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </TanstackProvider>
            </body>
        </html>
    )
}
