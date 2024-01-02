"use client"

import React, { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

type CarouselProps = React.ComponentProps<"div">

export function Carousel({ children, className = "", ...rest }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        breakpoints: {
            "(min-width: 768px)": {
                dragFree: true,
            },
        },
    })
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect)
        emblaApi.on("select", onSelect)
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div>
            <div
                ref={emblaRef}
                className={cn(`relative`, className)}
                {...rest}
            >
                <div className="flex transform-gpu will-change-transform">
                    {children}
                </div>
            </div>
            <div className="mt-4 flex justify-end gap-2 md:hidden">
                <Button
                    disabled={prevBtnDisabled}
                    variant={prevBtnDisabled ? "secondary" : "default"}
                    size={"icon"}
                    onClick={() => {
                        scrollPrev()
                    }}
                >
                    <Icons.chevronLeft />
                    <span className="sr-only">Scroll left</span>
                </Button>
                <Button
                    disabled={nextBtnDisabled}
                    variant={nextBtnDisabled ? "secondary" : "default"}
                    size={"icon"}
                    onClick={() => {
                        scrollNext()
                    }}
                >
                    <Icons.chevronRight />
                    <span className="sr-only">Scroll right</span>
                </Button>
            </div>
        </div>
    )
}
