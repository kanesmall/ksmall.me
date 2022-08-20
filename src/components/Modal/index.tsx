import React, { Fragment, PropsWithChildren } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useModal } from "./ModalContext"

interface IModalProps {
    toggle: boolean
    title?: string
    description?: string
}

export const Modal: React.FC<PropsWithChildren<IModalProps>> = ({ toggle, title, description, children }) => {
    const { hide } = useModal()
    return (
        <Transition appear show={toggle} as={Fragment}>
            <Dialog as="div" className="relative z-20" onClose={hide}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#393939]  py-8 px-14  text-left align-middle shadow-xl transition-all">
                                {title && <Dialog.Title>{title}</Dialog.Title>}
                                {description && <Dialog.Description>{description}</Dialog.Description>}
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
