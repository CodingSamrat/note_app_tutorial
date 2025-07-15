"use client"

import Button from "@/components/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function page() {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function onSignup() {

        if (!name) return toast.error('Enter full name')
        if (!email) return toast.error('Enter email address')
        else if (!password) return toast.error('Enter password')

    }

    useEffect(() => {
        if (message) {
            toast.success(message)
            router.push('/auth/login')
        } else if (error) {
            toast.error(error)
        }
    }, [error, message])
    return (
        <div className='grid place-items-center h-svh'>

            <div className='max-w-sm space-y-4 border px-5 py-9 rounded-lg'>
                <h2 className='font-bold text-xl text-center mb-8'>Create New Account</h2>
                <div>
                    <label htmlFor="name" className='text-muted-foreground'>Name:</label>
                    <input className='w-full border rounded' value={name} onChange={e => setName(e.target.value)} id='name' type="text" />
                </div>
                <div>
                    <label htmlFor="email" className='text-muted-foreground'>Email:</label>
                    <input className='w-full border rounded' value={email} onChange={e => setEmail(e.target.value)} id='email' type="email" />
                </div>
                <div>
                    <label htmlFor="Password" className='text-muted-foreground'>Password:</label>
                    <input className='w-full border rounded' value={password} onChange={e => setPassword(e.target.value)} id='Password' type="text" />
                </div>

                <Button onClick={onSignup} className={' mt-5 w-full'} >Sign Up</Button>

                <hr />

                <div>
                    <p className='text-center text-sm'>Already Have Account? <Link className='font-bold text-blue-500 hover:underline' href={'/auth/login'}>Log In</Link></p>
                </div>
            </div>

        </div>
    )
}
