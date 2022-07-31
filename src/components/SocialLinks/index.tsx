import React from 'react'
import Image from 'next/image'

export const SocialLinks: React.FC = () => {
    return (
        <div className="flex items-center gap-9">
            <a className="relative" href="https://github.com/kanesmall">
                <Image src="/icons/github-social-icon.svg" alt="GitHub social icon" height={35} width={35} />
            </a>
            <a className="relative" href="https://www.linkedin.com/in/kanesmall/">
                <Image src="/icons/linkedin-social-icon.svg" alt="LinkedIn social icon" height={35} width={35} />
            </a>
            <a className="relative" href="">
                <Image src="/icons/email-social-icon.svg" alt="Email social icon" height={35} width={35} />
            </a>
            <a className="relative" href="https://dribbble.com/kanesmall">
                <Image src="/icons/dribbble-social-icon.svg" alt="Dribbble social icon" height={35} width={35} />
            </a>
        </div>
    )
}
