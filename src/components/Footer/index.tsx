import React from "react"
import Image from "next/image"
import { SocialLinks } from "../SocialLinks"

export const Footer: React.FC = () => {
    return (
        <footer className="mx-auto mt-16 max-w-[1290px] py-6 md:mt-36">
            <div className="flex flex-col items-center justify-between gap-9 sm:flex-row">
                <div className="flex items-center gap-4">
                    <div className="relative h-full max-h-[42px] w-full max-w-[42px] overflow-hidden rounded-full bg-[#393939]">
                        <Image src={`/images/kane-android.svg`} alt="Android Kane" height={42} width={42} />
                    </div>

                    <span className="font-sans text-base font-medium text-white">Made with ❤️ by Kane Small</span>
                </div>

                <SocialLinks size="small" />
            </div>
        </footer>
    )
}
