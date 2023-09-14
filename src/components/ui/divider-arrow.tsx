"use client"
import { motion } from "framer-motion"
import { Icons } from "./icons"

export function DividerArrow() {
    return (
        <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            aria-hidden={true}
        >
            <Icons.arrowDownLong className="mx-auto" />
        </motion.span>
    )
}
