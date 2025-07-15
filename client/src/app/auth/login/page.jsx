"use client"
import Button from '@/components/Button'
import { AuthAction } from '@/redux/actions/auth.action'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'


export default function page() {
    const router = useRouter()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function onLogin() {

        if (!email) return toast.error('Enter email address')
        else if (!password) return toast.error('Enter password')

        const res = await dispatch(AuthAction.login({ email, password }))

        if (res.payload.message) {
            toast.success(res.payload.message)
            router.replace('/notes')
            localStorage.setItem('sid', res.payload.user._id.toString())
        }
        else if (res.payload.error) {
            toast.error(res.payload.error)
        }
    }



    return (
        <div className='grid place-items-center h-svh'>

            <div className='max-w-sm space-y-4 border px-5 py-9 rounded-lg'>
                <h2 className='font-bold text-xl text-center mb-8'>Log In To NoteApp</h2>
                <div>
                    <label htmlFor="email" className='text-muted-foreground'>Email:</label>
                    <input className='w-full border rounded' value={email} onChange={e => setEmail(e.target.value)} id='email' type="email" />
                </div>
                <div>
                    <label htmlFor="Password" className='text-muted-foreground'>Password:</label>
                    <input className='w-full border rounded' value={password} onChange={e => setPassword(e.target.value)} id='Password' type="text" />
                </div>

                <Button onClick={onLogin} className={' mt-5 w-full'} >Log In</Button>

                <hr />

                <div>
                    <p className='text-center text-sm'>Don't Have Account? <Link className='font-bold text-blue-500 hover:underline' href={'/auth/signup'}>Sign Up</Link></p>
                </div>
            </div>

        </div>
    )
}
