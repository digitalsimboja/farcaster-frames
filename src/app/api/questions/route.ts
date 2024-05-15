
import { config } from '@/config/config';
import { UserData, getUserDataByAddress, saveUserData } from '@/database/user';
import { getCastHashProtocol } from '@/utils/common';
import { computeHtml } from '@/utils/compute-html';

import { NextRequest, NextResponse } from 'next/server';


let userData: UserData = {
  fid: "",
  username: "",
  custody_address: "",
  startTime: "",
  completionTime: "",
  protocol: "",
  quizHash: config.warpcast.castHash || "",
}


async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;

  const id: any = searchParams.get("id")
  const idAsNumber = parseInt(id)
  const nextId = idAsNumber + 1;

  const data = await req.json();

  const messageBytes = data.trustedData.messageBytes;
  //const action = await Warpcast.validateMessage(messageBytes);

  const action = data.mockFrameData
  const custody_address = action.interactor.custody_address;

  const castHash = data.untrustedData.castId.hash

  const protocol = getCastHashProtocol(castHash)

  if (!userData.custody_address) {
    userData.fid = action.interactor.fid as unknown as string;
    userData.username = action.interactor.username;
    userData.custody_address = custody_address;
    userData.startTime = new Date().toISOString();
    userData.protocol = protocol;

  }


  const isLastQuestion = idAsNumber === 2;

  if (isLastQuestion) {
    const stopTime = new Date().toISOString();
    const completionTimeMs = new Date(stopTime).getTime() - new Date(userData.startTime).getTime();
    userData.completionTime = completionTimeMs.toString();

    const htmlContent = `<!DOCTYPE html><html><head>
    <title>Join Leaderboard</title>
    <meta property="og:image" content="${config.hostUrl}/images/${protocol}/result.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${config.hostUrl}/images/${protocol}/result.png" />
    <meta property="fc:frame:button:1" content="Learn More!" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://evveland.com" />
    <meta property="fc:frame:button:2" content="Join Leaderboard!" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/leaderboard?protocol=${protocol}" />
    </head></html>`

    const userExists = await getUserDataByAddress(custody_address)
    if (!userExists) {
      await saveUserData(userData);
      return new NextResponse(htmlContent)
    } else {
      return new NextResponse(computeHtml({
        imagePath: `/images/${protocol}/error.png`,
        postType: "mint",
        content: "Qiuz already taken! Mint NFT"

      }))
    }

  } else {
    const htmlContent = `<!DOCTYPE html><html><head>
    <title>This is frame ${nextId}</title>
    <meta property="og:image" content="${config.hostUrl}/images/${protocol}/Question-${nextId}.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:user:timestamp" content= ""/>
    <meta property="fc:frame:image" content="${config.hostUrl}/images/${protocol}/Question-${nextId}.png" />
    <meta property="fc:frame:button:1" content="A" />
    <meta property="fc:frame:button:2" content="B" />
    <meta property="fc:frame:button:3" content="C" />
    <meta property="fc:frame:button:4" content="D" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=A&protocol=${protocol}" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=B&protocol=${protocol}" />
    <meta property="fc:frame:button:3:action" content="post" />
    <meta property="fc:frame:button:3:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=C&protocol=${protocol}" />
    <meta property="fc:frame:button:4:action" content="post" />
    <meta property="fc:frame:button:4:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=D&protocol=${protocol}" />
    </head></html>`;

    return new NextResponse(htmlContent)
  }

}

export async function POST(req: NextRequest): Promise<NextResponse> {

  return getResponse(req);
}

export const dynamic = 'force-dynamic';

