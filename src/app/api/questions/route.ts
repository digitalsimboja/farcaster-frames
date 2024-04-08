import { config } from '@/config/config';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');
  const response = searchParams.get('re');

  const idAsNumber = id && id.trim() !== '' ? Number(id) : 1;

  const nextId = idAsNumber + 1

  if (idAsNumber === 20) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is Last Question</title>
    <meta property="og:image" content="${config.hostUrl}/images/evveland_completed.jpeg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${config.hostUrl}/images/evveland_completed.jpeg" />
    <meta property="fc:frame:button:1" content="Learn More!" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://evveland.com" />
    <meta property="fc:frame:button:2" content="Mint NFT!" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/mint" />
    </head></html>`)
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="og:image" content="${config.hostUrl}/images/ninja-${id}.jpeg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${config.hostUrl}/images/ninja-${id}.jpeg" />
    <meta property="fc:frame:button:1" content="A" />
    <meta property="fc:frame:button:2" content="B" />
    <meta property="fc:frame:button:3" content="C" />
    <meta property="fc:frame:button:4" content="D" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${config.hostUrl}/api/questions?id=${nextId}&re=A" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/questions?id=${nextId}&re=B" />
    <meta property="fc:frame:button:3:action" content="post" />
    <meta property="fc:frame:button:3:target" content="${config.hostUrl}/api/questions?id=${nextId}&re=C" />
    <meta property="fc:frame:button:4:action" content="post" />
    <meta property="fc:frame:button:4:target" content="${config.hostUrl}/api/questions?id=${nextId}&re=D" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
