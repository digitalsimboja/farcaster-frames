import { getAllUserData } from '@/utils/connectToDatabase';
import { NextRequest, NextResponse } from 'next/server';
import { UserData } from '../questions/route';
import { computeHtml } from '@/utils/compute-html';
import { generateCoverURL } from '@/utils/cloudinary';


async function getResponse(req: NextRequest): Promise<NextResponse> {

    const userDataList: UserData[] = await getAllUserData();
   
    const imageUrl = await generateCoverURL(userDataList)
    
    return new NextResponse(computeHtml({
        imagePath: imageUrl,
        postType: "leaderboard",
        content: "Top 20 Users"
    }))

}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
