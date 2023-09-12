import { extendedTheme } from "./src/lib/extended-theme"
import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
            },
        },
        extend: { ...extendedTheme },
    },
    plugins: [],
}
export default config
