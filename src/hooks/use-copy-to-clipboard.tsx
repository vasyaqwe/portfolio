import { useState } from "react"

export function useCopyToClipboard() {
    const [copied, setCopied] = useState(false)
    const [canCopy, setCanCopy] = useState(true)

    function onCopy(textToCopy: string) {
        if (canCopy) {
            void navigator.clipboard.writeText(textToCopy)
            setCopied(true)
            setCanCopy(false)

            setTimeout(() => {
                setCopied(false)
                setCanCopy(true)
            }, 4000)
        }
    }

    return { copied, onCopy }
}
