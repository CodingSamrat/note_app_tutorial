"use client"

import { getImageUrl } from "@/lib/image";
import { NoteAction } from "@/redux/actions/note.action";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [avatar, setAvatar] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function onSave() {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('title', title)
    formData.append('content', content)
    NoteAction.create(formData)
    createBlog({ formData })
  }

  const { searchQuery } = useSelector(state => state.global)

  return (
    <div>
      <input type="file" onChange={e => setAvatar(e.target.files[0])} />

      {avatar ? <Image src={URL.createObjectURL(avatar)} width={400} height={400} alt="" /> : 'Select Avatar'}
      <pre>
        {JSON.stringify(avatar, null, 2)}
      </pre>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <div>
    //     <Image src={getImageUrl('avatar/avatar-1753186661258-258189327.jpg')} width={400} height={400} alt="" />
    //     <p>{getImageUrl('avatar/avatar-1753186661258-258189327.jpg')}</p>
    //   </div>
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center  text-center">
    //     <p>Searching for - {searchQuery}</p>
    //     <h1 className="font-bold text-3xl">Note App</h1>
    //     <p className="text-muted-foreground">Next Js + Express Js + MongoDB</p>
    //   </main>
    // </div>
  );
}
