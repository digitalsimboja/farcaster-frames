import { UserData } from "@/app/api/questions/route"
import { config } from "@/config/config"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config(config.cloudinary)

const getTitleTransformations = ( userDataList: UserData[]) => {
    // Extract the top 20 usernames from the userDataList
    const topUsernames = userDataList.slice(0, 20).map(user => user.username).join('\n');

    // Construct overlay text with the title and the top 20 usernames
    const overlayText = `Top 20 Users:\n${topUsernames}`;;

    return [{
        overlay: {
            font_family: 'Montserrat',
            font_size: '40',
            font_weight: '900',
            text: overlayText,
            text_align: 'center',
            background: 'rgba(0, 0, 0, 0.8)'
        },
        width: 500,
        color: '#ffffff',
        y: '0',
        x: '-210',
        crop: 'fit'
    }]
}

const generateCoverURL = async (userDataList: UserData[]) => {
    const titleTransformations = getTitleTransformations( userDataList);
    const url = cloudinary.url('compressed/warphero/warphero', {
        transformation: [...titleTransformations]
    });
    return url;
}

export { generateCoverURL }
