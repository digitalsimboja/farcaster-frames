export const config = {
    hostUrl: process.env.NEXT_PUBLIC_SITE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    neynar: {
        apiKey: process.env.NEYNAR_API_KEY
    },
    warpcast: {
        castHash: process.env.NEXT_PUBLIC_WARPCAST_CAST_HASH,
    },
    contractAddress: process.env.NEXT_PUBLIC_SMART_CONTRACT,
    cloudinary: {
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        publicId: process.env.NEXT_CLOUDINARY_PUBLIC_ID
    }
}