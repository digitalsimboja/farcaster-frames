
import { Warpcast } from '@/Warpcast/warpcast';
import { config } from '@/config/config';
import { computeHtml } from '@/utils/compute-html';
import { saveUserData } from '@/utils/connectToDatabase';

import { NextRequest, NextResponse } from 'next/server';

export interface UserData {
  fid: string;
  username: string;
  custody_address: string;
  startTime: string;
  completionTime: string;
  quizHash: string;
}

let userData: UserData = {
  fid: "",
  username: "",
  custody_address: "",
  startTime: "",
  completionTime: "",
  quizHash: config.warpcast.castHash || "",
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;

  const id: any = searchParams.get("id")
  const idAsNumber = parseInt(id)
  const nextId = idAsNumber + 1;

  const data = await req.json();

  const messageBytes = data.trustedData.messageBytes;
  const action = await Warpcast.validateMessage(messageBytes);

  const userAddress = action.interactor.custody_address;

  if (!userData.custody_address) {
    userData.fid = action.interactor.fid as unknown as string;
    userData.username = action.interactor.username;
    userData.custody_address = userAddress;
    userData.startTime = new Date().toISOString();

  }
  const isLastQuestion = idAsNumber === 20;

  if (isLastQuestion) {
    const stopTime = new Date().toISOString();
    const completionTimeMs = new Date(stopTime).getTime() - new Date(userData.startTime).getTime();
    userData.completionTime = completionTimeMs.toString();
    try {
      await saveUserData(userData)
    } catch (error) {
      return new NextResponse(computeHtml({
        imagePath: `/images/og.jpeg`,
        postType: "Start Quiz!",
        content: "You have already taken this quiz"
      }))
    }

  }

  const htmlContent = isLastQuestion
    ? `<!DOCTYPE html><html><head>
      <title>This is Last Question</title>
      <meta property="og:image" content="${config.hostUrl}/images/result.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${config.hostUrl}/images/result.png" />
      <meta property="fc:frame:button:1" content="Learn More!" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://evveland.com" />
      <meta property="fc:frame:button:2" content="Join Leaderboard!" />
      <meta property="fc:frame:button:2:action" content="post" />
      <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/leaderboard?address=${userAddress} />
      </head></html>`
    : `<!DOCTYPE html><html><head>
      <title>This is frame ${nextId}</title>
      <meta property="og:image" content="${config.hostUrl}/images/Question-${nextId}.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:user:timestamp" content= ""/>
      <meta property="fc:frame:image" content="${config.hostUrl}/images/Question-${nextId}.png" />
      <meta property="fc:frame:button:1" content="A" />
      <meta property="fc:frame:button:2" content="B" />
      <meta property="fc:frame:button:3" content="C" />
      <meta property="fc:frame:button:4" content="D" />
      <meta property="fc:frame:button:1:action" content="post" />
      <meta property="fc:frame:button:1:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=A" />
      <meta property="fc:frame:button:2:action" content="post" />
      <meta property="fc:frame:button:2:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=B" />
      <meta property="fc:frame:button:3:action" content="post" />
      <meta property="fc:frame:button:3:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=C" />
      <meta property="fc:frame:button:4:action" content="post" />
      <meta property="fc:frame:button:4:target" content="${config.hostUrl}/api/answers?id=${nextId}&re=D" />
      </head></html>`;

  return new NextResponse(htmlContent)
}

export async function POST(req: NextRequest): Promise<NextResponse> {

  return getResponse(req);
}

export const dynamic = 'force-dynamic';