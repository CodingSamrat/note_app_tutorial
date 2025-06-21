"use client"

import ApiManager from "@/config/api.config"
import { useState } from "react"
import { toast } from "sonner"

export default function page() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function onSignup() {

        if (!name) return toast.error('Enter full name')
        if (!email) return toast.error('Enter email address')
        else if (!password) return toast.error('Enter password')


        try {
            const res = await ApiManager.post('/auth/register', { name, email, password });
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }
    return (
        <div>
            <div className='grid place-items-center h-svh'>
                <div className='max-w-sm space-y-4'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className='w-full border ' value={name} onChange={e => setName(e.target.value)} id='name' type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className='w-full border ' value={email} onChange={e => setEmail(e.target.value)} id='email' type="email" />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input className='w-full border ' value={password} onChange={e => setPassword(e.target.value)} id='Password' type="text" />
                    </div>

                    <button onClick={onSignup} className='rounded border px-2 py-1'>Sign UP</button>
                </div>

            </div>
        </div>
    )
}
