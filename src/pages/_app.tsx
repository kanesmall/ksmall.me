import "../../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import { Footer } from "@/src/components/Footer"
import { Nav } from "../components/Nav"

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.classList.add("bg-[#292929]")
    })

    return (
        <div className="px-6 sm:px-7">
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp
