import { NextRequest, NextResponse } from "next/server";
import { isApiErrorResponse } from "@neynar/nodejs-sdk";
import NeynarClient from "@/clients/Neynar/neynar";

export async function GET(req: NextRequest, { params }: { params: { fid: string } }) {
    try {
        const fid = parseInt(params.fid);
        const { users } = await NeynarClient.fetchBulkUsers([fid])
        const user = users.find((user) => user.fid === fid);

        return NextResponse.json({ user }, { status: 200 })

    } catch (error) {
        console.error(error)
        if (isApiErrorResponse(error)) {
            return NextResponse.json(
                { ...error.response.data },
                { status: error.response.status }
            )
        } else {
            return NextResponse.json(
                { message: 'Something went wrong' },
                { status: 500 }
            )
        }
    }

}