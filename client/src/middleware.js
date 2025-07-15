
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


/**
 * 
 * @param {NextRequest} req 
 * @returns 
 */
export async function middleware(req) {
    try {
        const pathName = await req.nextUrl.pathname
        const _cookies = await cookies()
        const sessionKey = _cookies.get('session')?.value;


        const url = `${process.env.NEXT_PUBLIC_API_BASE}/auth/session`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "session": sessionKey,
                "Content-Type": "application/json",
            },
        });
        const { user } = await res.json();


        // if (user && (pathName === "/auth/login" || pathName === "/auth/signup")) {
        //     return NextResponse.redirect(new URL(`/notes`, req.nextUrl))
        // }


        if (user && pathName.startsWith('/auth')) {
            return NextResponse.redirect(new URL(`/notes`, req.nextUrl))
        }

        if (!user && pathName.startsWith('/notes')) {
            return NextResponse.redirect(new URL(`/auth/login`, req.nextUrl))
        }


    } catch (error) {
        console.error('[Middleware Error]', error.message)
        return NextResponse.next();
    }
}



// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/auth/:path*',
        '/notes/:path*',
    ]
}