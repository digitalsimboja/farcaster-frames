import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import sharp from 'sharp';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get('type')
    if (type === 'mint') {
        // check if user has recasted and liked the channel
        // Mint nft to the user if so
    }
    return new NextResponse(`
    ${console.log('Started to mint nft')}`)

}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
