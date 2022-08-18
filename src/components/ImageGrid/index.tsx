import React from "react"
import Image from "next/image"

export const ImageGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-9">
            <div className="relative mt-11 aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                <Image src={`/images/kane-profile-pic.png`} alt="Kane profile pic" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                <Image src={`/images/kane-bouldering.png`} alt="Kane bouldering" layout="fill" objectFit="cover" />
            </div>
            <div className="relative aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                <Image src={`/images/esl-one-cologne.png`} alt="ESL One Cologne" layout="fill" objectFit="cover" />
            </div>
            <div className="relative -mt-11 aspect-[200/200] max-w-[200px] overflow-hidden rounded-3xl">
                <Image src={`/images/parks-board-game.png`} alt="PARKS board game" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}
