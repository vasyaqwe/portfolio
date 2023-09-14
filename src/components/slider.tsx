import React, { ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<"div"> & {
    children: ReactNode
    className?: string
}

export function Slider({ children, className = "", ...rest }: SliderProps) {
    const [offset, setOffset] = useState(0)
    const [dragField, setDragField] = useState(0)

    const wrapperRef = useRef<HTMLDivElement>(null)
    const dragFieldRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateOffset = () => {
            if (wrapperRef.current && contentRef.current) {
                const { width } = wrapperRef.current.getBoundingClientRect()

                const offSetWidth = contentRef.current.scrollWidth
                const newOffset = offSetWidth - width

                setOffset(newOffset)
                setDragField(offSetWidth)
            }
        }

        // Set Initial Value
        updateOffset()

        // Check for resizing Events.
        window.addEventListener("resize", updateOffset)
        return () => {
            window.removeEventListener("resize", updateOffset)
        }
    }, [])

    return (
        <div
            {...rest}
            ref={wrapperRef}
            className={cn(`relative`, className)}
        >
            {/* Element for Constraints Reference */}
            <div
                aria-hidden="true"
                ref={dragFieldRef}
                className="pointer-events-none absolute left-0 top-0 h-full"
                style={{
                    left: `-${offset}px`,
                    width: `${dragField}px`,
                }}
            ></div>

            {/* Content */}
            <motion.div
                ref={contentRef}
                drag={offset > 0 ? "x" : undefined}
                dragConstraints={dragFieldRef}
                className="flex gap-5"
            >
                {children}
            </motion.div>
        </div>
    )
}