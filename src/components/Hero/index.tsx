import React from "react"
import Image from "next/image"
import { SocialLinks } from "../SocialLinks"

interface IHeroProps {
    title: string
    subtitle: string
    image: string
}

export const Hero: React.FC<IHeroProps> = ({ title, subtitle, image }) => {
    return (
        <section className="mx-auto max-w-[1070px] pt-12 pb-24 md:pt-48 md:pb-36">
            <div className="flex flex-col-reverse items-center justify-between text-center md:flex-row md:text-left">
                <div className="flex max-w-[410px] flex-col items-center md:items-start">
                    <h1 className="mb-6 font-sans text-5xl font-semibold text-white sm:text-6xl lg:text-8xl">
                        {title}
                    </h1>
                    <p className="mb-10 font-sans text-base text-white sm:text-lg">{subtitle}</p>
                    <SocialLinks />
                </div>

                <div className="relative mb-12 h-full max-h-[250px] w-full max-w-[200px] overflow-hidden rounded-full bg-[#393939] md:ml-12 md:mb-0 md:max-h-[400px] md:max-w-[400px]">
                    <Image src={`/images/${image}`} alt="Hero image" height={400} width={400} />
                </div>
            </div>
        </section>
    )
}
