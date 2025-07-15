import { NextResponse } from "next/server";



export async function GET(req) {
    try {

        return NextResponse.json({ message: "NEXT Server is running...asd" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}