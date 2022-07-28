import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.classList.add("bg-[#292929]");
    });

    return (
        <div className="px-8">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
