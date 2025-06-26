"use client"

import { useAuth } from '@/context/AuthContext'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavBar() {
    const { user, logout } = useAuth()
    const router = useRouter()

    async function onLogout() {
        await logout();
        router.replace('/auth/login');
    }


    return (
        <div className='h-[4rem] px-3 bg-muted flex items-center gap-3 justify-between'>
            <div className='grow  flex items-center gap-3'>
                <div>
                    <h2 className='font-bold text-2xl'> <Link href={'/'}>NotePad</Link></h2>
                </div>
                <Link href={'/notes'}>All Notes</Link>
            </div>

            {user && <div className='text-sm flex items-center gap-3'>
                <p className='font-bold'>{user?.name}</p>
                <div className='w-8 aspect-square border rounded-full grid place-items-center'><User size={15} className='text-muted-foreground' /></div>
            </div>}
            <div className='flex items-center gap-3'>
                {
                    user ?
                        <>
                            <button className='cursor-pointer' onClick={onLogout}><LogOut size={17} /></button>
                        </>
                        :
                        <>
                            <button className='border px-3 py-1 rounded hover:bg-background/20 text-sm'><Link href={'/auth/login'}>Log In</Link></button>
                            <button className='border px-3 py-1 rounded hover:bg-background/20 text-sm'><Link href={'/auth/signup'}>Sing Up</Link></button>
                        </>
                }
            </div>
        </div>
    )
}
