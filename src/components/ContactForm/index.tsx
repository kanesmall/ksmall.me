import React from 'react'

export const ContactForm: React.FC = ({}) => {
    return (
        <div className="max-w-[1068px] mx-auto py-36">
            <h2 className="font-sans text-white font-semibold text-center text-5xl max-w-4xl mx-auto mb-9">
                Contact Me
            </h2>

            <form className="flex flex-col gap-10 items-center">
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <label className="flex flex-col w-full">
                        <span className="font-sans text-white text-xs mx-3 mb-3">First name</span>
                        <input
                            className="font-sans text-white text-base p-5 bg-[#393939] rounded-2xl"
                            type="text"
                            name="firstname"
                            required
                        />
                    </label>

                    <label className="flex flex-col w-full">
                        <span className="font-sans text-white text-xs mx-3 mb-3">Last name</span>
                        <input
                            className="font-sans text-white text-base p-5 bg-[#393939] rounded-2xl"
                            type="text"
                            name="lastname"
                            required
                        />
                    </label>
                </div>

                <label className="flex flex-col w-full">
                    <span className="font-sans text-white text-xs mx-3 mb-3">Email address</span>
                    <input
                        className="font-sans text-white text-base p-5 bg-[#393939] rounded-2xl"
                        type="email"
                        name="email"
                        required
                    />
                </label>

                <label className="flex flex-col w-full">
                    <span className="font-sans text-white text-xs mx-3 mb-3">Message</span>
                    <textarea
                        className="font-sans text-white text-base min-h-[200px] max-h-[400px] p-5 bg-[#393939] rounded-2xl"
                        name="firstname"
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
