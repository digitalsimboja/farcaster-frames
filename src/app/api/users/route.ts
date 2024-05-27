import { getAllUserData } from "@/database/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const data = await getAllUserData();
        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to fetch user data' },
            { status: 500 }
        )
    }
}