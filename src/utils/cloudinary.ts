import { UserData } from "@/app/api/questions/route";
import { config } from "@/config/config";
import cloudinary from "cloudinary";
import sharp from "sharp";


cloudinary.v2.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
})
  

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

async function uploadImage(buf:Buffer): Promise<string> {
    const cloudinaryResponse = await new Promise<cloudinary.UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream((error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as cloudinary.UploadApiResponse);
          }
        });
        sharp(buf).pipe(uploadStream);
      });

    // Get the Cloudinary URL for the uploaded image
    const imagePath = cloudinaryResponse.secure_url;
    return imagePath

}



export { getTextTransformations, uploadImage };
