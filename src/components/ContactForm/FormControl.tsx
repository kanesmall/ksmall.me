import React, { PropsWithChildren } from 'react'

interface IFormControlProps {
    label: React.ReactNode
    required?: boolean
}

export const FormControl: React.FC<PropsWithChildren<IFormControlProps>> = ({ label, required = false, children }) => {
    return (
        <label className="flex w-full flex-col">
            <span className="mx-3 mb-3 font-sans text-sm text-white">
                {label}
                {typeof label !== 'object' && required && <sup className="font-sans text-xs text-[#D61C4E]"> *</sup>}
            </span>
            {children}
        </label>
    )
}
