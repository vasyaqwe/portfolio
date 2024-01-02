"use client"

import { useGlobalStore } from "@/stores/use-global-store"
import { type Section } from "@/types"
import { type HTMLMotionProps, motion } from "framer-motion"
import React, { useEffect } from "react"
import { type HTMLAttributes } from "react"
import { useInView } from "react-intersection-observer"

type SectionProps = HTMLAttributes<HTMLElement> &
    HTMLMotionProps<"section"> & {
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
