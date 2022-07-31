import React, { useState } from 'react'
import Image from 'next/image'
import { ConditionalWrapper } from '../ConditionalWrapper'
import { Tabs } from './TabCardsTypes'

interface ITabCardsProps {
    title: string
    tabs: Tabs[]
}

export const TabCards: React.FC<ITabCardsProps> = ({ title, tabs }) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].label)

    return (
        <div className="xl:container mx-auto py-36">
            <h2 className="font-sans text-white font-semibold text-center text-5xl max-w-4xl mx-auto mb-9">{title}</h2>
            <div className="flex justify-center gap-3 mb-12">
                {tabs &&
                    tabs.map((tab) => (
                        <button
                            className={`font-sans text-lg font-semibold text-white py-2 px-6 rounded-full hover:bg-[#393939] transition-colors hover:ease-in duration-200${
                                activeTab === tab.label && ' bg-[#393939]'
                            }`}
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label}
                        </button>
                    ))}
            </div>
            {tabs &&
                tabs.map((tab, index) => (
                    <>
                        {activeTab === tab.label && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center max-w-4xl mx-auto">
                                {tab.cards &&
                                    tab.cards.map((card, index) => (
                                        <div
                                            data-label={tab.label}
                                            key={index}
                                            className="flex items-center max-w-[410px] md:max-w-none w-full"
                                        >
                                            <ConditionalWrapper
                                                condition={!!card.link}
                                                wrapper={(children) => (
                                                    <a
                                                        className="flex items-center h-full w-full bg-[#393939] p-4 sm:p-5 rounded-3xl lg:hover:-translate-y-2 transition-transform hover:ease-in duration-200"
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
                        )}
                    </>
                ))}
        </div>
    )
}
