import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

type InputProps = ComponentProps<"textarea"> & {
    invalid?: string
    className?: string
}

export const Textarea = ({ invalid, className = "", ...rest }: InputProps) => {
    const style = invalid
        ? "outline outline-[2px] outline-offset-2 outline-danger-400"
        : "focus-state"

    return (
        <>
            <textarea
                className={cn(
                    `min-h-[7rem] bg-primary-800 rounded-xl w-full
                        border px-3 py-2 text-neutral-900 
                `,
                    style,
                    className
                )}
                {...rest}
            />
            {invalid && <p className={`mt-1 text-danger-400`}>{invalid}</p>}
        </>
    )
}
