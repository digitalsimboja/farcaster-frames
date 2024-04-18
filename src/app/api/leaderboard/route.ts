import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import sharp from 'sharp';
import { getAllUserData } from '@/utils/connectToDatabase';
import { UserData } from '../questions/route';
import { join } from 'path';
import * as fs from 'fs';
import { generateJSX } from '../common';
import { config } from '@/config/config';
import { computeHtml } from '@/utils/compute-html';

const fontPath = join(process.cwd(), 'Roboto-Regular.ttf');
const fontData = fs.readFileSync(fontPath);

async function getResponse(req: NextRequest): Promise<NextResponse> {
    try {
        const userDataList: UserData[] = (await getAllUserData()).slice(0, 10);
        const jsx = generateJSX(userDataList);

        // Generate SVG using satori
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
   
        fs.writeFileSync('./public/images/leaderboard.png', pngBuffer);
       
        return new NextResponse(computeHtml({
            imagePath: "/images/leaderboard.png",
            postType: "leaderboard",
            content: "Leaderboard"
        }))
    } catch (error) {
        console.error(error);
        return new NextResponse('Error generating image', { status: 500 });
    }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
