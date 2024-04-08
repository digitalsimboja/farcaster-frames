import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    
    if (req.method === 'POST') {
        const frame = await getResponse(req);
        res.status(200).send(frame);
    } else {
        console.log("Not supported")
    }
   

}

async function getResponse(req: NextApiRequest): Promise<string> {
    const searchParams = req.query;
    console.log({searchParams})
    const id = Array.isArray(searchParams.id) ? searchParams.id[0] : searchParams.id;
    const idAsNumber = id ? Number(id) : 1;
    const nextId = idAsNumber + 1;

    const htmlContent = `<!DOCTYPE html>
        <html>
        <head>
            <title>This is frame ${id}</title>
            <meta property="og:image" content="https://farcaster-frames-sigma.vercel.app/images/ninja-${id}.jpeg" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://farcaster-frames-sigma.vercel.app/images/ninja-${id}.jpeg" />
            <meta property="fc:frame:button:1" content="Next Question" />
            <meta property="fc:frame:post_url" content="https://farcaster-frames-sigma.vercel.app/api/question?id=${nextId}" />
        </head>
        </html>`;

    return htmlContent;
}
