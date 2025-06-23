"use client"

import Button from "@/components/Button"
import { useAuth } from "@/context/AuthContext"
import { useNote } from "@/context/NoteContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function page() {
    const { allNote } = useNote()
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    // if (!user) router.push('/')
    return (
        <div className="">
            <div>
                <div className="flex items-center gap-5 w-full mt-5">
                    <input className='w-sm border rounded px-3 py-1' value={title} onChange={e => setTitle(e.target.value)} id='title' type="text" placeholder="Title" />
                    <input className='grow border rounded px-3 py-1' value={content} onChange={e => setContent(e.target.value)} id='content' type="text" placeholder="Content..." />
                </div>
                <Button className={'mt-3'}>Save</Button>
            </div>
            <hr className="mt-5" />
            <hr className="mt-[1px]" />
            <div className=" grid grid-cols-3 gap-5 py-5">
                {
                    allNote?.map((note, i) => (
                        <div className="border rounded px-5 py-3" key={`note_${i}`} >
                            <p className="font-semibold">{note?.title}</p>
                            <p className="text-sm mt-3">{note?.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
