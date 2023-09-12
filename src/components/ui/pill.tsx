export function Pill({ text }: { text: string }) {
    return (
        <li
            className={`rounded-full  px-3 text-size-300 shadow-md`}
            style={{
                color: `hsl(var(--${removePeriodsAndHyphens(text)}))`,
                backgroundColor: `hsl(var(--${removePeriodsAndHyphens(
                    text
                )}) / .15)`,
                border: `1px solid hsl(var(--${removePeriodsAndHyphens(
                    text
                )}) / .4)`,
            }}
        >
            {text}
        </li>
    )
}

function removePeriodsAndHyphens(str: string) {
    return str.replace(/[.-]/g, "").toLowerCase()
}
