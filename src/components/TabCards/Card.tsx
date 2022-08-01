import React from "react"
import Image from "next/image"

interface ICardProps {
    card: any
}

export const Card: React.FC<ICardProps> = ({ card }) => {
    return (
        <div className="flex h-full w-full items-center rounded-3xl bg-[#393939] p-4 sm:p-5">
            {card.logo && (
                <div className="relative mr-4 h-full max-h-[28px] w-full max-w-[28px] sm:mr-7 sm:max-h-[38px] sm:max-w-[38px]">
                    <Image src={`/logos/${card.logo}`} alt={`${card.title} logo`} layout="fill" objectFit="contain" />
                </div>
            )}
            <div>
                <span className="mb-1 block font-sans text-lg font-semibold text-white">{card.title}</span>
                <p className="font-sans text-xs text-[#DBE2EF]">{card.desc}</p>
            </div>
        </div>
    )
}
