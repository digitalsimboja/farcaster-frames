import { config } from '@/config/config';
import { answers } from '@/config/data';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const response = searchParams.get('re');
    const protocol = searchParams.get('protocol')
   
    const idAsNumber = id && id.trim() !== '' ? Number(id) : 1;

    const correctAnswer = answers.find((item) => item.id === idAsNumber);

    if (!correctAnswer) {
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Error</title>
        <meta property="og:image" content="${config.hostUrl}/images/${protocol}/error.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${config.hostUrl}/images/${protocol}/error.png" />
        <meta property="fc:frame:button:1" content="Try again!" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="${config.hostUrl}/api/questions?id=0" />
        </head></html>`);
    }

    const isWrong = idAsNumber > 0 && response !== correctAnswer.answer;
    if (isWrong) {
        const repeatId = idAsNumber - 1;
        return new NextResponse(`<!DOCTYPE html><html><head>
        <title>Error</title>
        <meta property="og:image" content="${config.hostUrl}/images/${protocol}/error.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${config.hostUrl}/images/${protocol}/error.png" />
        <meta property="fc:frame:button:1" content="Try again!" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="${config.hostUrl}/api/questions?id=${repeatId}" />
        </head></html>`);
    }

    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Error</title>
    <meta property="og:image" content="${config.hostUrl}/images/${protocol}/answer-${idAsNumber}.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${config.hostUrl}/images/${protocol}/answer-${idAsNumber}.png" />
    <meta property="fc:frame:button:1" content="Next Question" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${config.hostUrl}/api/questions?id=${idAsNumber}" />
    </head></html>`);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';