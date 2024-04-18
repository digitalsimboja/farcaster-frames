import { UserData } from "@/app/api/questions/route";

interface Transformation {
    overlay: {
        font_family: string;
        font_size: string;
        font_weight: string;
        text: string;
        text_align: string;
        background: string;
        color: string;
    };
    width: number;
    color: string;
    y: string;
    x: string;
    crop: string;
}

const getTextTransformations = (userDataList: UserData[], imageWidth: number): Transformation[] => {
    const topUsernames = userDataList.slice(0, 20).map(user => user.username).join('\n');

    const overlayText = `Top 20 Users:\n${topUsernames}`;

    const fontSize = Math.min(imageWidth / overlayText.length, 12); 

    return [{
        overlay: {
            font_family: 'Montserrat',
            font_size: `${fontSize}`, 
            font_weight: '200',
            text: overlayText,
            text_align: 'center',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'yellow', 
        },
        width: 500, 
        color: 'white',
        y: '0',
        x: '-210',
        crop: 'fit'
    }];
}



export { getTextTransformations };
