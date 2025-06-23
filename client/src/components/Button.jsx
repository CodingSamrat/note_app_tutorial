import React from 'react'

export default function Button({ children, className, ...props }) {
    return (
        <button className={`bg-primary text-primary-foreground px-5 py-1 rounded font-bold cursor-pointer ${className}`} {...props}>
            {children}
        </button>
    )
}
