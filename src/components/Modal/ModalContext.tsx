import React, { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from "react"
import { Modal } from "."

interface IModalContext {
    show: (modalContent: React.ReactNode) => void
    hide: () => void
}

const ModalContext = createContext<IModalContext>({
    show: () => undefined,
    hide: () => undefined
})

export const useModal = (): IModalContext => {
    return useContext(ModalContext)
}

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [modalState, setModalState] = useState(false)
    const [modalContent, setModalContent] = useState<React.ReactNode>(undefined)
    const showModal = useCallback(
        (modalContent: React.ReactNode) => {
            setModalContent(modalContent)
            setModalState(true)
        },
        [setModalState]
    )
    const hideModal = useCallback(() => {
        setModalState(false)
    }, [setModalState])
    const context = useMemo<IModalContext>(
        () => ({
            show: showModal,
            hide: hideModal
        }),
        [showModal, hideModal]
    )
    return (
        <ModalContext.Provider value={context}>
            <Modal toggle={modalState}>{modalContent}</Modal>
            {children}
        </ModalContext.Provider>
    )
}
