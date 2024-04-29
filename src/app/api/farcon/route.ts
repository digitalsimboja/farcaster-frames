import { computeHtml } from '@/utils/compute-html';
import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    
    return new NextResponse(computeHtml({
        imagePath: "/images/farcon-2.jpeg",
        postType: "vote",
        content: "Vote Evveland"
    }))

}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
