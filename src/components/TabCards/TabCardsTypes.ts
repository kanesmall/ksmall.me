export type Cards = {
    logo?: string
    title: string
    desc: string
    link?: string
}

export type Tabs = {
    icon: string
    label: string
    cards: Cards[]
}
