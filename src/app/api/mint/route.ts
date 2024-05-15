import { ThirdWebEngine } from '@/Thirdweb/thirdweb';
import { Warpcast } from '@/Warpcast/warpcast';
import { computeHtml } from '@/utils/compute-html';
import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get('type')
    const data = await req.json();

    const messageBytes = data.trustedData.messageBytes;
    //const action = await Warpcast.validateMessage(messageBytes);

    const action = data.mockFrameData
    const receiver = action.interactor.custody_address;
    const fid: number = action.interactor.fid;

    try {
        if (type === "mint") {
           
            const isNFTOwned = await ThirdWebEngine.isNFTOwned(receiver)

            if (isNFTOwned) {
                return new NextResponse(computeHtml({
                    imagePath: `/images/ethereum/og.jpeg`,
                    postType: "mint",
                    content: "Congratulations! You are already a WarpHero"
                }))
            }

            const isBalanceLow = await ThirdWebEngine.isBalanceLow();

            if (isBalanceLow) {
                return new NextResponse(computeHtml({
                    imagePath: `/images/ethereum/og.jpeg`,
                    postType: "mint",
                    content: "Sorry we ran out of gas :("
                }))
            }

            const hasRecasted = await Warpcast.hasRecasted(fid)

            if (!hasRecasted) {
                return new NextResponse(computeHtml({
                    imagePath: `/images/ethereum/og.jpeg`,
                    postType: "mint",
                    content: "Recast is required to mint the NFT"
                }))
            }

            const hasLiked = await Warpcast.hasLiked(fid)

            if (!hasLiked) {
                return new NextResponse(computeHtml({
                    imagePath: `/images/ethereum/og.jpeg`,
                    postType: "mint",
                    content: "Like is required to mint the NFT"
                }))
            }

            await ThirdWebEngine.mint(receiver)

            // Join the channel

            return new NextResponse(computeHtml({
                imagePath: `/images/ethereum/og.jpeg`,
                postType: "vote",
                content: "Congrats! The NFT was sent to your wallet",
            }))
        }
        else {
            return new NextResponse(computeHtml({
                imagePath: `/images/ethereum/error.png`,
                postType: "start",
                content: "Invalid type",
            }))
        }

    } catch (err) {
        console.log({ err })
        return new NextResponse(computeHtml({
            imagePath: `/images/ethereum/error.png`,
            postType: "start",
            content: "Something went wrong!",
        }))
    }



}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
