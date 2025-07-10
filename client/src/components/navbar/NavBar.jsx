"use client"

import { AuthAction } from '@/redux/actions/auth.action'
import { globalSlice } from '@/redux/slices/global.slice'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

export default function NavBar() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { searchQuery } = useSelector(state => state.global)

    async function onLogout() {
        const res = await dispatch(AuthAction.logout({}));

        if (res.payload.message) {
            toast.success(res.payload.message)
            router.replace('/auth/login');
        }
        else if (res.payload.error) {
            toast.error(res.payload.error)
        }
    }

    useEffect(() => {
        dispatch(AuthAction.session({}));
    }, [])

    return (
        <div className='h-[4rem] px-3 bg-muted flex items-center gap-3 justify-between sticky top-0 left-0 z-50'>
            <div className='grow  flex items-center gap-3'>
                <div>
                    <h2 className='font-bold text-2xl'> <Link href={'/'}>NotePad</Link></h2>
                </div>
                <Link href={'/notes'}>All Notes</Link>
            </div>

            <div>
                <input value={searchQuery} onChange={e => dispatch(globalSlice.actions.setSearchQuery(e.target.value))} type="text" className='border rounded-2xl px-3 py-1 w-sm' placeholder='Search...' />
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
