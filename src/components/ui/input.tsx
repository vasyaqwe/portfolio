import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"

type InputProps = ComponentProps<"input"> & {
    invalid?: string
}

export const Input = ({ invalid, className, ...rest }: InputProps) => {
    const style = invalid
        ? "outline outline-[2px] outline-offset-2 outline-destructive"
        : "focus-state"

    return (
        <div>
            <input
                className={cn(
                    `w-full rounded-xl border px-3 py-[.5rem] text-neutral-900 
                `,
                    style,
                    className
                )}
                {...rest}
            />
            {invalid && (
                <p className={`mt-1 text-left text-destructive`}>{invalid}</p>
            )}
        </div>
    )
}
