import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"

export function Pill({ children, className }: ComponentProps<"li">) {
    return (
        <li
            className={cn(
                `rounded-full px-[.66rem] text-[.8rem] shadow-md`,
                className
            )}
            style={{
                color: `hsl(var(--${formatText(children?.toString() ?? "")}))`,
                backgroundColor: `hsl(var(--${formatText(
                    children?.toString() ?? ""
                )}) / .15)`,
                border: `1px solid hsl(var(--${formatText(
                    children?.toString() ?? ""
                )}) / .4)`,
            }}
        >
            {children}
        </li>
    )
}

function formatText(str: string) {
    return str.replace(/[.-]/g, "").toLowerCase().replace(" ", "")
}
