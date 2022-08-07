import React, { useState } from "react"
import { FormControl } from "./FormControl"
import { Input } from "./Input.style"
import Image from "next/image"

export const ContactForm: React.FC = ({}) => {
    const [messageCount, setMessageCount] = useState(0)
    const [message, setMessage] = useState("")
    const [showEmailSentMessage, setEmailSentMessage] = useState(false)

    const messageCalls = (value: string) => {
        setMessageCount(value.length)
        setMessage(value)
    }

    const handleContactFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const inputObject = Object.fromEntries(formData)

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: inputObject.email,
                firstname: inputObject.firstname,
                lastname: inputObject.lastname,
                message: message
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const { error } = await res.json()
        if (error) {
            console.log(error)
            return
        }
        setEmailSentMessage(true)
    }

    return (
        <section className="mx-auto max-w-4xl py-24 sm:py-36">
            <div className="mb-16 text-center">
                <h2 className="mx-auto mb-5 text-center font-sans text-4xl font-semibold text-white sm:text-5xl">
                    Contact Me
                </h2>
                <p className="font-sans text-base text-white sm:text-lg">
                    Shoot me a message if you think we'd work well together or, even if you just want to chat :)
                </p>
            </div>

            {!showEmailSentMessage && (
                <form className="flex flex-col items-center gap-10" onSubmit={handleContactFormSubmission}>
                    <div className="flex w-full flex-col gap-8 md:flex-row">
                        <FormControl label="First name" required>
                            <Input type="text" name="firstname" />
                        </FormControl>

                        <FormControl label="Last name" required>
                            <Input type="text" name="lastname" />
                        </FormControl>
                    </div>

                    <FormControl label="Email address" required>
                        <Input type="email" name="email" />
                    </FormControl>

                    <label className="flex w-full flex-col">
                        <div className="mx-3 mb-3 flex items-center justify-between">
                            <span className="font-sans text-sm text-white">
                                Message<sup className="font-sans text-sm leading-none text-[#D61C4E]"> *</sup>
                            </span>
                            <span className="mx-3 mt-3 font-sans text-sm text-white">{messageCount} / 2500</span>
                        </div>
                        <textarea
                            className="max-h-[400px] min-h-[200px] rounded-2xl bg-[#393939] p-5 font-sans text-base text-white"
                            name="firstname"
                            maxLength={2500}
                            onChange={(e) => messageCalls(e.target.value)}
                            required
                        ></textarea>
                    </label>

                    <input
                        className="cursor-pointer rounded-full bg-white py-3 px-14 font-sans text-lg font-semibold text-[#333646] transition-transform duration-200 hover:ease-in lg:hover:-translate-y-2"
                        type="submit"
                        value="Send"
                    />
                </form>
            )}

            {showEmailSentMessage && (
                <div className="mx-auto max-w-[490px] rounded-2xl bg-[#393939] py-8 px-14 text-center">
                    <div className="mb-4">
                        <Image src="/icons/email-sent-icon.svg" alt="Email sent icon" height={60} width={60} />
                    </div>
                    <h3 className="mb-5 font-sans text-2xl font-semibold text-white sm:text-3xl">
                        Thanks for your message!
                    </h3>
                    <p className="font-sans text-base text-white sm:text-lg">I'll get back to you as soon as I can.</p>
                </div>
            )}
        </section>
    )
}
