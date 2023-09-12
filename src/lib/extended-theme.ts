import { type Config } from "tailwindcss"

export const extendedTheme = {
    fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
    },
    screens: {
        xs: "456px",
        lg: "832px",
        xl: "832px",
        "2xl": "832px",
    },
    colors: {
        orange: {
            DEFAULT: "hsl(var(--orange-400))",
            100: "hsl(var(--orange-100))",
            400: "hsl(var(--orange-400))",
        },
        purple: {
            DEFAULT: "hsl(var(--purple-400))",
            100: "hsl(var(--purple-100))",
            400: "hsl(var(--purple-400))",
        },
        destructive: {
            DEFAULT: "hsl(var(--destructive-400))",
            400: "hsl(var(--destructive-400))",
        },
        neutral: {
            DEFAULT: "hsl(var(--neutral-400))",
            900: "hsl(var(--neutral-900))",
            400: "hsl(var(--neutral-400))",
            200: "hsl(var(--neutral-200))",
        },
    },
    fontSize: {
        "size-900": "var(--font-size-900)",
        "size-800": "var(--font-size-800)",
        "size-700": "var(--font-size-700)",
        "size-600": "var(--font-size-600)",
        "size-500": "var(--font-size-500)",
        "size-400": "var(--font-size-400)",
        "size-300": "var(--font-size-300)",
        "size-200": "var(--font-size-200)",
    },
} satisfies Config["theme"]
