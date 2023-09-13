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
                color: `hsl(var(--${formatText(text)}))`,
                backgroundColor: `hsl(var(--${formatText(text)}) / .15)`,
                border: `1px solid hsl(var(--${formatText(text)}) / .4)`,
            }}
        >
            {text}
        </li>
    )
}

function formatText(str: string) {
    return str.replace(/[.-]/g, "").toLowerCase().replace(" ", "")
}
