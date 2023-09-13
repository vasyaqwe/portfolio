import { cn } from "@/lib/utils"

export function Pill({
    text,
    className = "",
}: {
    text: string
    className?: string
}) {
    return (
        <li
            className={cn(
                `rounded-full px-[.66rem] text-[.75rem] shadow-md lg:text-size-300`,
                className
            )}
            style={{
                color: `hsl(var(--${removePeriodsAndHyphens(text)}))`,
                backgroundColor: `hsl(var(--${removePeriodsAndHyphens(
                    text
                )}) / .15)`,
                border: `1px solid hsl(var(--${removePeriodsAndHyphens(
                    text
                )}) / .4)`,
            }}
        >
            {text}
        </li>
    )
}

function removePeriodsAndHyphens(str: string) {
    return str.replace(/[.-]/g, "").toLowerCase()
}
