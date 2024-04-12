export const config = {
    hostUrl: process.env.NEXT_PUBLIC_SITE_URL,
    neynar: {
        apiKey: process.env.NEYNAR_API_KEY
    },
    warpcast: {
        castHash: process.env.NEXT_PUBLIC_WARPCAST_CAST_HASH,
    },
    contractAddress: process.env.NEXT_PUBLIC_SMART_CONTRACT,
}