import React from 'react'

export default function Card({ children }) {
    return (
        <div className='border rounded px-3 py-3 bg-amber-950'>
            {children}
        </div>
    )
}
