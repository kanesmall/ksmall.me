import React from 'react'

interface IConditionalWrapperProps {
    condition: boolean
    wrapper: (children: React.ReactNode) => JSX.Element
    children: React.ReactNode
}

export const ConditionalWrapper: React.FC<IConditionalWrapperProps> = ({ condition, wrapper, children }) => {
    return <>{condition ? wrapper(children) : children}</>
}
