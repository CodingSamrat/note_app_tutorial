"use client"
import ApiManager from '@/config/api.config'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'


export default function page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const { login, error } = useAuth()

    // async function onLogin() {

    //     if (!email) return toast.error('Enter email address')
    //     else if (!password) return toast.error('Enter password')


    //     login(email, password)
    // }

    // useEffect(() => {
    //     toast.error(error)
    // }, [error])


    async function onLogin() {

        if (!email) return toast.error('Enter email address')
        else if (!password) return toast.error('Enter password')


        try {
            const res = await ApiManager.post('/auth/login', { email, password });
            toast.success(res.data.message)
            console.log(res)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
        }
    }
    return (
        <div className='grid place-items-center h-svh'>

            <div className='max-w-sm space-y-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className='w-full border ' value={email} onChange={e => setEmail(e.target.value)} id='email' type="email" />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input className='w-full border ' value={password} onChange={e => setPassword(e.target.value)} id='Password' type="text" />
                </div>

                <button onClick={onLogin} className='rounded border px-2 py-1'>Login</button>
            </div>

        </div>
    )
}
