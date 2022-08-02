import React from "react"
import Image from "next/image"

interface IBulletsProps {
    title: string
    bullets: string[]
}

export const Bullets: React.FC<IBulletsProps> = ({ title, bullets }) => {
    return (
        <section className="mx-auto max-w-[630px] py-24 sm:py-36">
            <div className="mb-16 text-center">
                <h2 className="mx-auto mb-5 max-w-4xl text-center font-sans text-4xl font-semibold text-white sm:text-5xl">
                    {title}
                </h2>
            </div>

            <div className="flex flex-col gap-9">
                {bullets &&
                    bullets.map((bullet) => (
                        <div className="flex flex-col items-center sm:flex-row">
                            <div className="relative h-[40px] w-[40px] flex-shrink-0">
                                <Image
                                    src="/icons/checkmark-icon.svg"
                                    alt="Checkmark icon"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <p className="ml-0 mt-4 text-center font-sans text-base text-white sm:ml-8 sm:mt-0 sm:text-left sm:text-lg">
                                {bullet}
                            </p>
                        </div>
                    ))}
            </div>
        </section>
    )
}
