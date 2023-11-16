"use client"
import React, { ComponentType, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import useMeasure from "react-use-measure"
import { projects } from "@/config"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

type SliderProps = React.ComponentProps<"div"> & {
    className?: string
    sliderClassName?: string
    slide: ComponentType<any>
    slidesList: Record<string, any>[]
}

export function MobileSlider({
    className = "",
    sliderClassName = "",
    slide,
    slidesList,
    ...rest
}: SliderProps) {
    let [ref, { width }] = useMeasure()
    let [page, setPage] = useState(0)
    let prev = usePrevious(page)
    let direction = page > prev! ? 1 : -1

    function debounceButton(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement

        target.style.setProperty("pointer-events", "none")
        setTimeout(() => {
            target.style.setProperty("pointer-events", "auto")
        }, 200)
    }

    return (
        <div
            className={className}
            {...rest}
        >
            <div
                className={cn(
                    `relative flex  items-center justify-center overflow-hidden`,
                    sliderClassName
                )}
                ref={ref}
            >
                <AnimatePresence custom={{ direction, width }}>
                    <motion.div
                        key={page}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={{ direction, width }}
                        className={`absolute flex will-change-transform`}
                    >
                        {React.createElement(slide, {
                            item: slidesList[page],
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="mt-4 flex justify-end gap-3">
                <Button
                    disabled={page === 0}
                    variant={page === 0 ? "secondary" : "default"}
                    size={"icon"}
                    onClick={(e) => {
                        debounceButton(e)
                        setPage(page - 1)
                    }}
                >
                    <Icons.chevronLeft />
                    <span className="sr-only">Scroll left</span>
                </Button>
                <Button
                    disabled={page === projects.length - 1}
                    variant={
                        page === projects.length - 1 ? "secondary" : "default"
                    }
                    size={"icon"}
                    onClick={(e) => {
                        debounceButton(e)
                        setPage(page + 1)
                    }}
                >
                    <Icons.chevronRight />
                    <span className="sr-only">Scroll right</span>
                </Button>
            </div>
        </div>
    )
}

const variants = {
    enter: ({ direction, width }: { direction: number; width: number }) => ({
        x: direction * width,
    }),
    center: { x: 0 },
    exit: ({ direction, width }: { direction: number; width: number }) => ({
        x: direction * -width,
    }),
}

function usePrevious(state: number) {
    let [tuple, setTuple] = useState([null, state])

    if (tuple[1] !== state) {
        setTuple([tuple[1], state])
    }

    return tuple[0]
}
