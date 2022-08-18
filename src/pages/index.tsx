import type { NextPage } from "next"
import Head from "next/head"
import { TabCards } from "@/src/components/TabCards"
import { tabsData } from "@/src/components/TabCards/TabsData"
import { Hero } from "../components/Hero"
import { ContactForm } from "../components/ContactForm"
import { Bullets } from "../components/Bullets"
import { BulletsData } from "../components/Bullets/BulletsData"
import { ImageGrid } from "../components/ImageGrid"
import { TwoColContent } from "../components/TwoColContent"
import Link from "next/link"

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
            <TwoColContent
                cols={[
                    <ImageGrid />,
                    <div>
                        <h2 className="mb-6 font-sans text-4xl font-semibold text-white sm:text-5xl">About me</h2>
                        <p className="font-sans text-base font-normal text-white sm:text-lg">
                            When I'm not problem-solving at a keyboard, you can often find me making my way up
                            coloured-holds on walls, enjoying the atmosphere at an eSports event or, fuelling my board
                            game <s>addiction</s> hobby! 👀
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
                ]}
            />
            <Bullets title="My current day-to-day" bullets={BulletsData} />
            <TabCards title="Technologies, tools &amp; more" tabs={tabsData} />
            <ContactForm />
        </>
    )
}

export default Home
