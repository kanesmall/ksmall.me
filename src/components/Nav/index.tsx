import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Nav: React.FC = () => {
    return (
        <nav className="mx-auto max-w-[1290px] py-6">
            <div className="flex items-center justify-between">
                <div className="relative h-full max-h-[42px] w-full max-w-[42px] overflow-hidden rounded-full bg-[#393939]">
                    <Image src={`/images/kane-android.svg`} alt="Android Kane" height={42} width={42} />
                </div>

                <div className="hidden items-center gap-12 lg:flex">
                    <Link href="/">
                        <a className="font-sans text-base font-medium text-[#F9F7F7]">Home</a>
                    </Link>
                    <Link href="/projects">
                        <a className="font-sans text-base font-medium text-[#F9F7F7]">Projects</a>
                    </Link>
                    <Link href="/about">
                        <a className="font-sans text-base font-medium text-[#F9F7F7]">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="font-sans text-base font-medium text-[#F9F7F7]">Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
