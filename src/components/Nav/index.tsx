import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
// @ts-ignore
import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import { useWindowWidth } from "@react-hook/window-size"

export const Nav: React.FC = () => {
    const [isActive, setIsActive] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const width = useWindowWidth()
    const toggleIsActive = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        if (width < 1024 && isActive) setShowMobileMenu(true)
        else if (width < 1024 && !isActive) setShowMobileMenu(false)
        else if (width >= 1024) {
            setIsActive(false)
            setShowMobileMenu(true)
        }
    }, [width, isActive])

    return (
        <nav className="fixed inset-x-0 top-0 z-10 mx-auto max-w-[1290px] py-6 px-6 backdrop-blur-lg transition-all lg:px-0 lg:backdrop-blur-md">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="flex w-full items-center justify-between">
                    <Link href="/">
                        <a className="relative h-full max-h-[42px] w-full max-w-[42px] overflow-hidden rounded-full bg-[#393939]">
                            <Image src={`/images/kane-android.svg`} alt="Android Kane" height={42} width={42} />
                        </a>
                    </Link>

                    <div className="flex lg:hidden">
                        <Burger
                            className="!text-[8px]"
                            Component="button"
                            type="button"
                            isOpen={isActive}
                            onClick={() => toggleIsActive()}
                        />
                    </div>
                </div>

                <div
                    className={`h-[calc(100vh-90px)] w-full flex-col items-center justify-center gap-12 p-10 lg:h-auto lg:flex-row lg:justify-end lg:p-0 lg:backdrop-blur-none ${
                        showMobileMenu ? "flex" : "hidden"
                    }`}
                >
                    <Link href="/">
                        <a className="font-sans text-2xl font-normal text-[#F9F7F7] lg:text-base">Home</a>
                    </Link>
                    <Link href="/projects">
                        <a className="font-sans text-2xl font-normal text-[#F9F7F7] lg:text-base">Projects</a>
                    </Link>
                    <Link href="/about">
                        <a className="font-sans text-2xl font-normal text-[#F9F7F7] lg:text-base">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="font-sans text-2xl font-normal text-[#F9F7F7] lg:text-base">Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
