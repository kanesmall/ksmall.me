import React, { useState } from 'react'

export const ContactForm: React.FC = ({}) => {
    const [messageCount, setMessageCount] = useState(0)

    return (
        <div className="max-w-[1068px] mx-auto py-36">
            <div className="text-center mb-16">
                <h2 className="font-sans text-white font-semibold text-center text-5xl max-w-4xl mx-auto mb-5">
                    Contact Me
                </h2>
                <p className="font-sans text-white text-lg">
                    Shoot me a message if you think we'd work well together or, even if you just want to chat :)
                </p>
            </div>

            <form className="flex flex-col gap-10 items-center">
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <label className="flex flex-col w-full">
                        <span className="font-sans text-white text-sm mx-3 mb-3">
                            First name<sup className="font-sans text-xs text-[#D61C4E]"> *</sup>
                        </span>
                        <input
                            className="font-sans text-white text-base p-5 bg-[#393939] rounded-2xl"
                            type="text"
                            name="firstname"
                            required
                        />
                    </label>

                    <label className="flex flex-col w-full">
                        <span className="font-sans text-white text-sm mx-3 mb-3">
                            Last name<sup className="font-sans text-xs text-[#D61C4E]"> *</sup>
                        </span>
                        <input
                            className="font-sans text-white text-base p-5 bg-[#393939] rounded-2xl"
                            type="text"
                            name="lastname"
                            required
                        />
                    </label>
                </div>

                <label className="flex flex-col w-full">
                    <span className="font-sans text-white text-sm mx-3 mb-3">
                        Email address<sup className="font-sans text-xs text-[#D61C4E]"> *</sup>
                    </span>
                    <input
                        className="font-sans text-white text-base p-5 bg-[#393939] rounded-2xl"
                        type="email"
                        name="email"
                        required
                    />
                </label>

                <label className="flex flex-col w-full">
                    <div className="flex justify-between items-center mx-3 mb-3">
                        <span className="font-sans text-white text-sm">
                            Message<sup className="font-sans text-sm leading-none text-[#D61C4E]"> *</sup>
                        </span>
                        <span className="font-sans text-white text-sm mx-3 mt-3">{messageCount} / 2500</span>
                    </div>
                    <textarea
                        className="font-sans text-white text-base min-h-[200px] max-h-[400px] p-5 bg-[#393939] rounded-2xl"
                        name="firstname"
                        maxLength={2500}
                        onChange={(e) => setMessageCount(e.target.value.length)}
                        required
                    ></textarea>
                </label>

                <input
                    className="font-sans text-[#333646] text-lg font-semibold py-3 px-14 bg-white rounded-full cursor-pointer"
                    type="submit"
                    value="Send"
                />
            </form>
        </div>
    )
}
