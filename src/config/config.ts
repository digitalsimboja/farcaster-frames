export const config = {
    hostUrl: process.env.NEXT_PUBLIC_SITE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    neynar: {
        apiKey: process.env.NEYNAR_API_KEY
    },
    warpcast: {
        castHash: process.env.NEXT_PUBLIC_WARPCAST_CAST_HASH,
    },
    protocol: {
        ethereum: {
            name: "ethereum",
            castHash: process.env.NEXT_PUBLIC_ETHEREUM_CAST_HASH,
            active: process.env.NEXT_PUBLIC_ETHEREUM_IS_ACTIVE || true
        },
        polygon: {
            name: "polygon",
            castHash: process.env.NEXT_PUBLIC_MATIC,
            active: process.env.NEXT_PUBLIC_MATIC_IS_ACTIVE || false
        }
    },
    contractAddress: process.env.NEXT_PUBLIC_SMART_CONTRACT,
    cloudinary: {
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        publicId: process.env.CLOUDINARY_PUBLIC_ID
    },
    contract: {
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        alchemy_url: process.env.ALCHEMY_NODE_URL,
        alchemy_api_key: process.env.ALCHEMY_API_KEY

    },
    thirdweb: {
        chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
        engine: {
          url: process.env.THIRDWEB_ENGINE_URL,
          wallet: process.env.THIRDWEB_ENGINE_WALLET,
          accessToken: process.env.THIRDWEB_ACCESS_TOKEN,
        },
      },
}