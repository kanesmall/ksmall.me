import React from "react"
import Image from "next/image"
import Link from "next/link"

export const ImageGrid: React.FC = () => {
    return (
        <section className="mx-auto max-w-[1070px] py-24 sm:py-36">
            <div className="flex flex-col items-center justify-between gap-14 lg:flex-row">
                <div className="grid w-full max-w-[435px] grid-cols-2 gap-9">
                    <div className="relative mt-11 aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                        <Image
                            src={`/images/kane-profile-pic.png`}
                            alt="Kane profile pic"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                        <Image
                            src={`/images/kane-bouldering.png`}
                            alt="Kane bouldering"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                        <Image
                            src={`/images/esl-one-cologne.png`}
                            alt="ESL One Cologne"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative -mt-11 aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                        <Image
                            src={`/images/parks-board-game.png`}
                            alt="PARKS board game"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div className="max-w-[520px] text-center lg:text-left">
                    <h2 className="mb-6 font-sans text-4xl font-semibold text-white sm:text-5xl">About me</h2>
                    <p className="font-sans text-base text-white sm:text-lg">
                        When I'm not problem-solving at a keyboard, you can often find me making my way up
                        coloured-holds on walls, enjoying the atmosphere at an eSports event or, fuelling my board game
                        addiction hobby! 👀
                    </p>
                    <Link href="/about">
                        <a
                            className="mt-10 inline-block cursor-pointer rounded-full bg-white py-3 px-10 font-sans text-lg
                            font-semibold text-[#333646] transition-transform duration-200 hover:ease-in lg:hover:-translate-y-2"
                        >
                            Learn more
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
