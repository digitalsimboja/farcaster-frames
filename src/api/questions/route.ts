import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id')
    const idAsNumber = id ? Number(id) : 1

    const nextId = idAsNumber + 1
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/images/ninja-${id}.jpeg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/ninja-${id}.jpeg" />
    <meta property="fc:frame:button:1" content="Next Question" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=${nextId}" />
  </head></html>`)
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req)
}
export const dynamic = 'force-dynamic'