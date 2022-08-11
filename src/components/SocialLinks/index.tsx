import React from "react"
import Image from "next/image"
import Link from "next/link"

interface ISocialLinksProps {
    size?: "small" | "large"
}

export const SocialLinks: React.FC<ISocialLinksProps> = ({ size = "large" }) => {
    const sizing = {
        small: 25,
        large: 35
    }

    return (
        <div className="flex items-center gap-9">
            <a className="relative flex max-w-[25px] sm:max-w-none" href="https://github.com/kanesmall" target="_blank">
                <Image
                    src="/icons/github-social-icon.svg"
                    alt="GitHub social icon"
                    height={sizing[size]}
                    width={sizing[size]}
                />
            </a>
            <a
                className="relative flex max-w-[25px] sm:max-w-none"
                href="https://www.linkedin.com/in/kanesmall/"
                target="_blank"
            >
                <Image
                    src="/icons/linkedin-social-icon.svg"
                    alt="LinkedIn social icon"
                    height={sizing[size]}
                    width={sizing[size]}
                />
            </a>
            <Link href="/contact">
                <a className="relative flex max-w-[25px] sm:max-w-none">
                    <Image
                        src="/icons/email-social-icon.svg"
                        alt="Email social icon"
                        height={sizing[size]}
                        width={sizing[size]}
                    />
                </a>
            </Link>
            <a
                className="relative flex max-w-[25px] sm:max-w-none"
                href="https://dribbble.com/kanesmall"
                target="_blank"
            >
                <Image
                    src="/icons/dribbble-social-icon.svg"
                    alt="Dribbble social icon"
                    height={sizing[size]}
                    width={sizing[size]}
                />
            </a>
        </div>
    )
}
