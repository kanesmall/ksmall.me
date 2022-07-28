export type cards = {
    logo?: string;
    title: string;
    desc: string;
    link?: string;
};

export type tabs = {
    icon: string;
    label: string;
    cards: cards[];
};
