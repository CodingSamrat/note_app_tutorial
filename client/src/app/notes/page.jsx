"use client"

import Button from "@/components/Button"
import { useNote } from "@/context/NoteContext"
import { NotebookPen, Pen, Trash, } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function page() {
    // const { allNote, createNote, updateNote, deleteNote } = useNote()
    const router = useRouter()

    const [noteToEdit, setNoteToEdit] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function onCreate() {
        if (!title) return toast.error('Enter a title')

        const res = await createNote(title, content)
        if (res.data.message) {
            toast.success(res.data.message)
            clearForm();
        }
        else if (res.data.error) {
            toast.error(res.data.error)
        }
    }


    async function onUpdate() {
        if (!title) return toast.error('Enter a title')

        const res = await updateNote(noteToEdit._id, title, content)
        if (res.data.message) {
            toast.success(res.data.message)
            clearForm();
            setNoteToEdit(null)
        }
        else if (res.data.error) {
            toast.error(res.data.error)
        }
    }

    async function onDelete(id) {

        const res = await deleteNote(id)
        if (res.data.message) {
            toast.success(res.data.message)
        }
        else if (res.data.error) {
            toast.error(res.data.error)
        }
    }

    function clearForm() {
        setTitle('')
        setContent('')
    }


    useEffect(() => {
        if (noteToEdit) {
            setContent(noteToEdit.content)
            setTitle(noteToEdit.title)
        } else {
            clearForm()
        }

    }, [noteToEdit])
    return (
        <div className="h-[200rem]">
            <div>
                <div className="flex items-center gap-5 w-full mt-5">
                    <input className='w-sm border rounded px-3 py-1' value={title} onChange={e => setTitle(e.target.value)} id='title' type="text" placeholder="Title" />
                    <input className='grow border rounded px-3 py-1' value={content} onChange={e => setContent(e.target.value)} id='content' type="text" placeholder="Content..." />
                </div>
                {(noteToEdit) ?
                    <div className="flex items-center gap-3">
                        <Button className={'mt-3 flex items-center gap-3'} onClick={onUpdate}>Update</Button>
                        <Button className={'mt-3 flex items-center gap-3'} onClick={() => setNoteToEdit(null)}>Cancel</Button>
                    </div>
                    :
                    <Button className={'mt-3 flex items-center gap-3'} onClick={onCreate}>Create <NotebookPen size={17} /></Button>
                }
            </div>


            <hr className="mt-5" />
            <hr className="mt-[1px]" />
            <div className=" grid grid-cols-3 gap-5 py-5">
                {/* {allNote?.map((note, i) => (
                    <div className="relative group hover:bg-accent border rounded  overflow-hidden" key={`note_${i}`}>
                        <div className="bg-accent/10 px-5 py-3" onClick={() => router.push(`/notes/${note._id}`)}>
                            <p className="font-semibold">{note?.title}</p>
                            <p className="text-sm mt-3">{note?.content}</p>
                        </div>

                        <div className="absolute -top-11 group-hover:top-0 right-0 w-20 h-10 bg-amber-400 flex items-center gap-3 justify-between z-40">
                            <button onClick={() => setNoteToEdit(note)}><Pen /></button>
                            <button onClick={() => onDelete(note._id)}> <Trash /></button>

                        </div>
                    </div>
                ))} */}
            </div>
            <div className="sticky top-0 left-0 w-20 aspect-square bg-red-400">
                sticky
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-10 bg-amber-400">
                absolute
            </div>

            <div className="w-20 aspect-square bg-amber-400 fixed top-10 left-20">
                fixed
            </div>
            <p>POSITION- (fixed, sticky, absolute, relative) || hover || group || overflow || z-index</p>
        </div>
    )
}
