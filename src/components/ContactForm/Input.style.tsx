import React, { DetailedHTMLProps } from "react"

export const Input: React.FC<DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (
    props
) => {
    return <input className="rounded-2xl bg-[#393939] p-5 font-sans text-base text-white" {...props} />
}
