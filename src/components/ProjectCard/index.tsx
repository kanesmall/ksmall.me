import React from "react"
import Image from "next/image"
import { ProjectCards } from "./ProjectCardTypes"
import Link from "next/link"

interface IProjectCardProps {
    card: ProjectCards
}

export const ProjectCard: React.FC<IProjectCardProps> = ({ card }) => {
    const imagePosLayout = card.imagePos === "left" ? "lg:flex-row-reverse" : "lg:flex-row"

    return (
        <div className={`flex flex-col justify-start rounded-3xl bg-[#393939] p-5 ${imagePosLayout}`}>
            <div className="mx-auto mb-4 flex flex-col items-start px-0 py-5 sm:mb-8 sm:px-8 lg:mb-0 lg:w-1/2 lg:max-w-[425px] lg:px-0">
                <span className="mb-3 text-4xl font-semibold text-white">{card.title}</span>
                <span className="mb-7 text-sm text-white">{card.date}</span>
                <p className="text-base text-white">{card.summary}</p>
                <div className="mt-8 flex items-center gap-8 lg:mt-auto">
                    <a
                        className="inline-block w-auto cursor-pointer rounded-full bg-white py-3 px-10 font-sans text-lg font-semibold
                            text-[#333646] transition-transform duration-200 hover:ease-in  lg:hover:-translate-y-2"
                        href={card.link}
                        target="_blank"
                    >
                        Open site
                    </a>

                    <Link href={`${card.slug}`}>
                        <a className="cursor-pointer font-sans text-lg font-medium text-white underline hover:no-underline">
                            Read more
                        </a>
                    </Link>
                </div>
            </div>

            <div className="aspect-[515/444] lg:w-1/2">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                        src={`/images/${card.image}`}
                        alt={`${card.title} image`}
                        height="100%"
                        width="100%"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                    />
                </div>
            </div>
        </div>
    )
}
