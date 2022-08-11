import React, { DetailedHTMLProps } from "react"

export const Input: React.FC<DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (
    props
) => {
    return (
        <input
            className="rounded-2xl bg-[#393939] px-5 py-4 font-sans text-base font-light text-white placeholder:text-[#DBE2EF] placeholder:opacity-25"
            {...props}
        />
    )
}
