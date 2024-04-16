import { UserData } from "@/app/api/questions/route"


const getTextTransformations = (userDataList: UserData[]) => {
    // Extract the top 20 usernames from the userDataList
    const topUsernames = userDataList.slice(0, 20).map(user => user.username).join('\n');

    // Construct overlay text with the title and the top 20 usernames
    const overlayText = `Top 20 Users:\n${topUsernames}`;;

    return overlayText
}


export { getTextTransformations }
