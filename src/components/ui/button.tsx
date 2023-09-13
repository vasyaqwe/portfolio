"use client"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
    `focus-state rounded-full border-2 text-size-300 active:scale-[98%] font-medium transition-opacity disabled:opacity-70 hover:opacity-80
    flex items-center gap-2 justify-center
    `,
    {
        variants: {
            variant: {
                default: "bg-neutral-900 text-white border-neutral-900",
                secondary: "bg-white border-white shadow-sm",
            },
            size: {
                default: "h-11 py-[.6rem] px-6",
                sm: "h-9 px-3",
                lg: "h-12 px-8",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
