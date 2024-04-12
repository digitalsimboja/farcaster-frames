import { config } from '@/config/config';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from 'next';
import { computeHtml } from '@/utils/compute-html';
import { Warpcast } from '@/Warpcast/warpcast';

const requestBodyWarpcastSchema = z.object({
    trustedData: z.object({
        messageBytes: z.string().min(5)
    })
})

const requestQuerySchema = z.object({
    // "start" = will display Re-cast to mint & Like to mint
    // "recast" = will attempt to see if you have recasted and liked (you can change to 'recast-like' if you want)
    // "mint" = will be the actual mint process and display a congratulation html view
    type: z.union([z.literal("start"), z.literal("recast"), z.literal("mint")]),
})

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
