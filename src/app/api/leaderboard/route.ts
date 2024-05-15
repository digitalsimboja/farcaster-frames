import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import sharp from 'sharp';

import * as fs from 'fs';
import { generateJSX } from '../common';
import { join } from 'path';
import { uploadImage } from '@/utils/cloudinary';
import { UserData, getAllUserData } from '@/database/user';
import { config } from '@/config/config';

const fontPath = join(process.cwd(), 'Roboto-Regular.ttf');
const fontData = fs.readFileSync(fontPath);


async function getResponse(req: NextRequest): Promise<NextResponse> {
    try {
        const searchParams = req.nextUrl.searchParams;

        const userDataList: UserData[] = (await getAllUserData()).slice(0, 10);
        const jsx = generateJSX(userDataList);

        const svg = await satori(jsx, {
            width: 600,
            height: 400,
            fonts: [{
                data: fontData,
                name: 'Roboto',
                style: 'normal',
                weight: 400
            }]
        });

        const pngBuffer = await sharp(Buffer.from(svg)).toFormat('png').toBuffer();

        const imagePath = await uploadImage(pngBuffer)

        const htmlContent = `<!DOCTYPE html><html><head>
       <title>Mint Free NFT to join the WarpHeroes Community</title>
       <meta property="og:image" content="${imagePath}" />
       <meta property="fc:frame" content="vNext" />
       <meta property="fc:frame:image" content="${imagePath}" />
       <meta property="fc:frame:button:1" content="Learn More!" />
       <meta property="fc:frame:button:1:action" content="link" />
       <meta property="fc:frame:button:1:target" content="https://evveland.com" />
       <meta property="fc:frame:button:2" content="Mint Free WarpHero Pass!" /> 
       <meta property="fc:frame:button:2:action" content="post" />
       <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/mint?type=mint" />
       </head></html>`

        return new NextResponse(htmlContent)

    } catch (error) {
        console.error(error);
        return new NextResponse('Error generating image', { status: 500 });
    }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
