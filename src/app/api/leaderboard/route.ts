import { getAllUserData } from '@/utils/connectToDatabase';
import { NextRequest, NextResponse } from 'next/server';
import { UserData } from '../questions/route';
import { computeHtml } from '@/utils/compute-html';
import { getCldOgImageUrl } from 'next-cloudinary';
import { config } from '@/config/config';
import { getTextTransformations } from '@/utils/cloudinary';



async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;

    const userAddress: any = searchParams.get("address")
    console.log({ userAddress })

    const userDataList: UserData[] = await getAllUserData();
    const transformations = getTextTransformations(userDataList);

    const imageUrl = getCldOgImageUrl({
        src: config.cloudinary.publicId as string,
        text: transformations
      
    })

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
