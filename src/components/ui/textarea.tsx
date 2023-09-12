import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

type InputProps = ComponentProps<"textarea"> & {
    invalid?: string
    className?: string
}

export const Textarea = ({ invalid, className = "", ...rest }: InputProps) => {
    const style = invalid
        ? "outline outline-[2px] outline-offset-2 outline-destructive"
        : "focus-state"

    return (
        <div>
            <textarea
                className={cn(
                    `min-h-[7rem] w-full rounded-xl border px-3 py-2 text-neutral-900 
                `,
                    style,
                    className
                )}
                {...rest}
            />
            {invalid && (
                <p className={`text-destructive mt-1 text-left`}>{invalid}</p>
            )}
        </div>
    )
}
