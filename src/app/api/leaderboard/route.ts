import { config } from '@/config/config';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from 'next';
import { computeHtml } from '@/utils/compute-html';
import { Warpcast } from '@/Warpcast/warpcast';
import { requestBodyWarpcastSchema, requestQuerySchema } from '@/utils/requestSchema';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const startTimestampString = searchParams.get('timestamp');


    if (startTimestampString === null || startTimestampString === undefined) {
        return new NextResponse("startTimestamp is missing");
    }
    const startTimestamp = new Date(startTimestampString);
    const stopTimestamp = new Date();

    const completionTime = stopTimestamp.getTime() - startTimestamp.getTime();

    console.log({ completionTime })
    const htmlContent = `<!DOCTYPE html><html><head>
    <title>Congratulatons! You can now Mint NFT</title>
    <meta property="og:image" content="${config.hostUrl}/images/result.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${config.hostUrl}/images/result.png" />
    <meta property="fc:frame:button:1" content="Learn More!" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://evveland.com" />
    <meta property="fc:frame:button:2" content="Mint NFT!" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/mint" />
    </head></html>`

    return new NextResponse(htmlContent)

}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        methods: ["GET", "POST"],
        origin: "*",
    });

    if (req.method !== "POST") {
        return res.status(400).send({ error: "invalid method" });
    }

    try {

        const {type} = requestQuerySchema.parse(req.query)
        const {trustedData} = requestBodyWarpcastSchema.parse(req.body)

        const action = await Warpcast.validateMessage(trustedData.messageBytes)

    } catch(error) {
        res.status(200).send(
            computeHtml({
                imagePath: `${config.hostUrl}/images/error.png`,
                postType: "start",
                content: "Something went wrong. Please try again!"
            })
        )
    }


}

export const dynamic = 'force-dynamic';
