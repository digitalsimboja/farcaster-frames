import { NextRequest, NextResponse } from "next/server";
import { isApiErrorResponse } from "@neynar/nodejs-sdk";
import NeynarClient from "@/clients/Neynar/neynar";

export async function POST(req: NextRequest) {
    const { signerUuid, fid } = (await req.json()) as {
        signerUuid: string;
        fid: string;
    };

    let isVerifiedUser = false;
    try {
        const { fid: UserFid } = await NeynarClient.lookupSigner(signerUuid);

        if (UserFid === Number(fid)) {
            isVerifiedUser = true;
        }
        else {
            isVerifiedUser = false
        }
        return NextResponse.json({ isVerifiedUser }, { status: 200 })
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