import React from 'react'
import Image from 'next/image'

interface IBulletsProps {
    title: string
    bullets: string[]
}

export const Bullets: React.FC<IBulletsProps> = ({ title, bullets }) => {
    return (
        <div className="max-w-[630px] mx-auto py-36">
            <div className="text-center mb-16">
                <h2 className="font-sans text-white font-semibold text-center text-5xl max-w-4xl mx-auto mb-5">
                    {title}
                </h2>
            </div>

            <div className="flex flex-col gap-9">
                {bullets &&
                    bullets.map((bullet) => (
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="relative flex-shrink-0 h-[40px] w-[40px]">
                                <Image
                                    src="/icons/checkmark-icon.svg"
                                    alt="Checkmark icon"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <p className="font-sans text-white text-lg text-center sm:text-left ml-0 sm:ml-8 mt-4 sm:mt-0">
                                {bullet}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    )
}
