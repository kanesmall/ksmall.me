import type { NextPage } from "next"
import Head from "next/head"
import { ContactForm } from "../components/ContactForm"

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact - ksmallme</title>
                <meta name="description" content="Send me a message and I'll get back to you when I can." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContactForm />
        </>
    )
}

export default Contact
