import { useEffect, useState } from "react"
import { ZodIssueBase } from "zod"
import * as z from "zod"

export type ValidationErrors = Record<string, string>

export const useFormValidation = <TFormData,>({
    onSubmit,
    formData,
    zodSchema,
}: {
    onSubmit: () => void
    formData: TFormData
    zodSchema: z.Schema<TFormData>
}) => {
    const [errors, setErrors] = useState<ValidationErrors>({})
    const [showErrors, setShowErrors] = useState(false)

    function getFormDataKey(e: ZodIssueBase) {
        return typeof e.path[0] === "string" ? e.path[0] : ""
    }

    function validate() {
        const res = zodSchema.safeParse(formData)
        if (!res.success) {
            const errorsArr = JSON.parse(res.error.message)

            const errorsObject = errorsArr.reduce(
                (result: Record<string, string>, e: ZodIssueBase) => {
                    const key = getFormDataKey(e)
                    const message = e.message
                    if (message) {
                        result[key] = message
                    }
                    return result
                },
                {}
            )
            setErrors(errorsObject)
        } else {
            setErrors({})
        }
    }

    useEffect(validate, [formData, zodSchema])

    function safeOnSubmit() {
        const noErrors = Object.keys(errors).length < 1

        if (noErrors) {
            setShowErrors(false)
            onSubmit()
        } else {
            setShowErrors(true)
        }
    }

    return {
        errors: showErrors ? errors : {},
        safeOnSubmit,
    }
}
