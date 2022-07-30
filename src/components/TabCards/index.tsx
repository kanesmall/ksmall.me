import React from 'react'
import Image from 'next/image'
import { ConditionalWrapper } from '../ConditionalWrapper'
import { Tabs } from './TabCardsTypes'

interface ITabCardsProps {
    title: string
    tabs: Tabs[]
}

export const TabCards: React.FC<ITabCardsProps> = ({ title, tabs }) => (
    <div className="xl:container mx-auto py-36">
        <h2 className="font-sans text-white font-semibold text-center text-5xl max-w-4xl mx-auto mb-8">{title}</h2>
        {tabs &&
            tabs.map((tab, index) => (
                <>
                    <button className="font-sans text-white" key={index}>
                        {tab.label}
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center max-w-4xl mx-auto">
                        {tab.cards &&
                            tab.cards.map((card, index) => (
                                <div key={index} className="flex items-center max-w-[410px] md:max-w-none w-full">
                                    <ConditionalWrapper
                                        condition={!!card.link}
                                        wrapper={(children) => (
                                            <a
                                                className="flex items-center h-full w-full bg-[#393939] p-4 sm:p-5 rounded-3xl lg:hover:-translate-y-2 transition hover:ease-in duration-200"
                                                href={card.link}
                                                target="_blank"
                                            >
                                                {children}
                                            </a>
                                        )}
                                    >
                                        {card.logo && (
                                            <div className="relative max-h-[28px] sm:max-h-[38px] max-w-[28px] sm:max-w-[38px] h-full w-full mr-4 sm:mr-7">
                                                <Image
                                                    src={`/logos/${card.logo}`}
                                                    alt={`${card.title} logo`}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <span className="block font-sans font-semibold text-lg text-white mb-1">
                                                {card.title}
                                            </span>
                                            <p className="font-sans text-xs text-[#DBE2EF]">{card.desc}</p>
                                        </div>
                                    </ConditionalWrapper>
                                </div>
                            ))}
                    </div>
                </>
            ))}
    </div>
)
