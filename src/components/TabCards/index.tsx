import React, { useState } from "react"
import { Tabs } from "./TabCardsTypes"
import { Card } from "./Card"

interface ITabCardsProps {
    title: string
    tabs: Tabs[]
}

export const TabCards: React.FC<ITabCardsProps> = ({ title, tabs }) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].label)

    return (
        <section className="mx-auto py-24 sm:py-36 xl:container">
            <h2 className="mx-auto mb-9 max-w-4xl text-center font-sans text-4xl font-semibold text-white sm:text-5xl">
                {title}
            </h2>
            <div className="mb-12 flex justify-center gap-3">
                {tabs &&
                    tabs.map((tab) => (
                        <button
                            className={`rounded-full py-2 px-6 font-sans text-lg font-semibold text-white transition-colors hover:bg-[#393939] hover:ease-in duration-200${
                                activeTab === tab.label && " bg-[#393939]"
                            }`}
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label}
                        </button>
                    ))}
            </div>
            {tabs &&
                tabs.map((tab) => (
                    <React.Fragment key={tab.label}>
                        {activeTab === tab.label && (
                            <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-7 md:grid-cols-2">
                                {tab.cards &&
                                    tab.cards.map((card, index) => (
                                        <div
                                            data-label={tab.label}
                                            key={index}
                                            className="flex w-full max-w-[410px] items-center md:max-w-none"
                                        >
                                            {!card.link ? (
                                                <Card card={card} />
                                            ) : (
                                                <a
                                                    className="flex h-full w-full items-center rounded-3xl bg-[#393939] transition-transform duration-200 hover:ease-in lg:hover:-translate-y-2"
                                                    href={card.link}
                                                    target="_blank"
                                                >
                                                    <Card card={card} />
                                                </a>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        )}
                    </React.Fragment>
                ))}
        </section>
    )
}
