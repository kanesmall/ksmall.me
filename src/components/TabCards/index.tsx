import React from "react";
import { tabs } from "./TabCardsTypes";

interface ITabCardsProps {
    title: string,
    tabs: tabs[]
}

export const TabCards: React.FC<ITabCardsProps> = ({title, tabs}) => {
    return (
        <>
            <div>
                <p className="text-white">{title}</p>
                {tabs && tabs.map((tab) => (
                    <>
                        <button className="text-white" key="tab">{tab.label}</button>
                        {tab.cards && tab.cards.map((card) => (
                            <div key="card">
                                <span className="text-white">{card.title}</span>
                                <p className="text-white">{card.desc}</p>
                            </div>
                        ))}
                    </>
                ))}
            </div>
        </>
    );
};
