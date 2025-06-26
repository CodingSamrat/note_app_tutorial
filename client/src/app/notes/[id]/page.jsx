"use client"

import { useNote } from '@/context/NoteContext'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
    const { getNoteById, note } = useNote()

    const params = useParams()


    useEffect(() => {
        getNoteById(params.id)
    }, [])
    return (
        <div>Note ID - {params.id}
            <pre>
                {JSON.stringify(note, null, 4)}
            </pre>

        </div>
    )
}
