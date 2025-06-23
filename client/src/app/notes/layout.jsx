import { NoteProvider } from '@/context/NoteContext'
import React from 'react'

export default function layout({ children }) {
    return (
        <NoteProvider>
            <main className='max-w-5xl w-5xl mx-auto'>
                {children}
            </main>
        </NoteProvider>
    )
}
