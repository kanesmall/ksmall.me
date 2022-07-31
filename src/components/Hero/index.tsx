import React from 'react'
import Image from 'next/image'

interface IHeroProps {
    title: string
    subtitle: string
    image: string
}

export const Hero: React.FC<IHeroProps> = ({ title, subtitle, image }) => {
    return (
        <div className="max-w-[1068px] mx-auto py-36">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="max-w-[410px] mb-12 md:mb-0">
                    <h1 className="font-sans text-white font-semibold text-8xl mb-6">{title}</h1>
                    <p className="font-sans text-white text-lg">{subtitle}</p>
                </div>

                <div className="relative max-h-[400px] max-w-[400px] h-full w-full rounded-full overflow-hidden bg-[#393939] md:ml-12">
                    <Image src={`/images/${image}`} alt="Hero image" height={400} width={400} />
                </div>
            </div>
        </div>
    )
}
