import NeynarClient from "@/clients/Neynar/neynar";
import { isApiErrorResponse } from "@neynar/nodejs-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const result = await NeynarClient.publishCast(body.signerUid, body.text, {});

    if (isApiErrorResponse(result)) {
        return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result, { status: 200 });
}