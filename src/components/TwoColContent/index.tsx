import React, { ReactNode } from "react"

interface ITwoColContentProps {
    children?: never
    cols: [ReactNode, ReactNode]
}

export const TwoColContent: React.FC<ITwoColContentProps> = ({ cols }) => {
    return (
        <section className="mx-auto max-w-[1070px] py-24 sm:py-36">
            <div className="flex flex-col items-center justify-between gap-14 lg:flex-row">
                <div className="w-full max-w-[435px]">{cols[0]}</div>

                <div className="max-w-[520px] text-center lg:text-left">{cols[1]}</div>
            </div>
        </section>
    )
}
