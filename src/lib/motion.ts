export const bounceIn = ({
    direction = "up",
    type = "spring",
    delay = 0,
    duration = 0.3,
    centerX = false,
}: {
    direction?: "up" | "down"
    type?: "tween" | "spring" | "keyframes" | "inertia" | "just" | "none"
    delay?: number
    duration?: number
    centerX?: boolean
}) => ({
    hidden: {
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        x: centerX ? "-50%" : 0,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: centerX ? "-50%" : 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
        },
    },
})
