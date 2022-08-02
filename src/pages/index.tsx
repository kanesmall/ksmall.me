import type { NextPage } from "next"
import Head from "next/head"
import { TabCards } from "@/src/components/TabCards"
import { tabsData } from "@/src/components/TabCards/TabsData"
import { Hero } from "../components/Hero"
import { ContactForm } from "../components/ContactForm"
import { Bullets } from "../components/Bullets"
import { BulletsData } from "../components/Bullets/BulletsData"
import { ImageGrid } from "../components/ImageGrid"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home - ksmallme</title>
                <meta
                    name="description"
                    content="A front-end web developer, with a keen eye for pixel-perfection and UI/UX best practices."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero
                title="Hi👋, I'm Kane"
                subtitle="A front-end web developer from the UK and I love to build things and solve problems!"
                image="kane-android.svg"
            />
            <ImageGrid />
            <Bullets title="My current day-to-day" bullets={BulletsData} />
            <TabCards title="Technologies, tools &amp; more" tabs={tabsData} />
            <ContactForm />
        </>
    )
}

export default Home
