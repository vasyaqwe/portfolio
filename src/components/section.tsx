"use client"
import { useGlobalStore } from "@/stores/use-global-store"
import { Section } from "@/types"
import { HTMLMotionProps, motion } from "framer-motion"
import React, { ReactNode, useEffect } from "react"
import { HTMLAttributes } from "react"
import { useInView } from "react-intersection-observer"

type SectionProps = HTMLAttributes<HTMLElement> &
    HTMLMotionProps<"section"> & {
        children: ReactNode
        section: Section
        threshold?: number
    }

export function Section({
    children,
    section,
    threshold = 0.75,
    ...rest
}: SectionProps) {
    const { setActiveSection, linkLastClickedAt } = useGlobalStore()

    const { ref, inView } = useInView({ threshold })

    useEffect(() => {
        if (inView && Date.now() - linkLastClickedAt > 500) {
            setActiveSection(section)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <motion.section
            {...rest}
            ref={ref}
        >
            {children}
        </motion.section>
    )
}
