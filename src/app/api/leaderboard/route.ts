import { getAllUserData, saveUserData } from '@/utils/connectToDatabase';
import { NextRequest, NextResponse } from 'next/server';
import { UserData } from '../questions/route';
import { computeHtml } from '@/utils/compute-html';

async function getHtmlContent() {

    const userDataList = await getAllUserData()
    userDataList.sort((a: UserData, b: UserData) => {
        return parseInt(a.completionTime) - parseInt(b.completionTime);
    })

    const top20Users = userDataList.slice(0, 20);

    // Construct HTML content for the response
    let htmlContent = '<h1>Top 20 WarpHeroes</h1>';
    htmlContent += '<ol>';
    top20Users.forEach((user: UserData, index: number) => {
        htmlContent += `<li>${index + 1}. Username: ${user.username}, Completion Time: ${user.completionTime}, Address: ${user.custody_address}</li>`;
    });
    htmlContent += '</ol>';

    return htmlContent

}

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const searchParams = req.nextUrl.searchParams;
    const userAddress = searchParams.get('address');
    const userData: UserData = searchParams.get('userData') as unknown as UserData
    if (userData) {
        try {
            await saveUserData(userData)
        } catch (error) {
            const htmlContent = await getHtmlContent()

            return new NextResponse(htmlContent)
        }
    }
    const htmlContent = await getHtmlContent()

    return new NextResponse(htmlContent)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';