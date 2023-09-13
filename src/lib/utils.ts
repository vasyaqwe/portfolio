import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"
import { extendedTheme } from "./extended-theme"
import { Section } from "@/types"

const customTwMerge = extendTailwindMerge({
    classGroups: {
        "font-size": Object.keys(extendedTheme.fontSize).map(
            (key) => `text-${key}`
        ),
    },
})

export function cn(...inputs: ClassValue[]) {
    return customTwMerge(clsx(inputs))
}
export function getSafeErrorMessage(error: unknown) {
    return error && error instanceof Error ? error.message : "Unknown error"
}
