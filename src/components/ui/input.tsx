import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

type InputProps = ComponentProps<"input"> & {
    invalid?: string
    className?: string
}

export const Input = ({ invalid, className = "", ...rest }: InputProps) => {
    const style = invalid
        ? "outline outline-[2px] outline-offset-2 outline-danger-400"
        : "focus-state"

    return (
        <>
            <input
                className={cn(
                    `bg-primary-800 rounded-xl w-full
                        border px-3 py-[.65rem] text-neutral-900 
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
