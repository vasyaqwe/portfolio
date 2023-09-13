import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode, useState } from "react"

type TooltipProps = ComponentProps<"div"> & {
    children: ReactNode
    text: string
    className?: string
}

export const Tooltip = ({
    children,
    text,
    className = "",
    ...rest
}: TooltipProps) => {
    const [visible, setVisible] = useState(false)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(
        undefined
    )

    function onMouseOver() {
        clearTimeout(timeoutId) // Clear any ongoing timeout
        const id = setTimeout(() => {
            setVisible(true)
        }, 400)
        setTimeoutId(id)
    }

    function onMouseLeave() {
        clearTimeout(timeoutId)
        setVisible(false)
    }

    function onMouseEnter() {
        clearTimeout(timeoutId)
    }

    return (
        <span
            className={cn("relative inline-block", className)}
            onMouseEnter={onMouseEnter} // Clear timeout on mouse enter
            {...rest}
        >
            <span
                className={`absolute bottom-7 left-1/2 w-max -translate-x-1/2 rounded-md border border-neutral-300 bg-neutral-50 px-3 
                py-2 text-sm shadow-md transition-all
                ${
                    visible
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none translate-y-[3px] scale-90 opacity-0"
                }
            `}
            >
                {text}
            </span>
            <span
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </span>
        </span>
    )
}
