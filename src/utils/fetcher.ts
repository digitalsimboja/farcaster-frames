import { config } from "@/config/config";
import { z } from "zod";

const balanceResponseSchema = z.object({
    result: z.object({
        value: z.string(),
    })
})

const mintResponseSchema = z.object({
    result: z.object({
        queueId: z.string(),
    })
})

const ownedResponseSchema = z.object({
    result: z.array(
        z.object({
            owner: z.string().startsWith("0x"),
            type: z.string(),
            supply: z.string(),
        })
    ),
});

export const httpFetchBalanceStatus = async () => {
    const url = `${config.thirdweb.engine.url}/backend-wallet/${config.thirdweb.chainId}/${config.thirdweb.engine.wallet}/get-balance`
    const httpOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.thirdweb.engine.accessToken}`,
            "x-backend-wallet-address": config.thirdweb.engine.wallet!,
        },
    }
    const response = await fetch(
        url,
        httpOptions
    );

    const result = await response.json();

    if (!result.success) {
        throw new Error(`Validation failed: ${result.error}`);
    }

    return balanceResponseSchema.parse(result);
}

export const httpFetchOwned = async (reciever: string) => {
    const url = `${config.thirdweb.engine.url}/contract/${config.thirdweb.chainId}/${config.contractAddress
        }/erc721/get-owned?walletAddress=${reciever.toLowerCase()}`
    const httpOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.thirdweb.engine.accessToken}`,
            "x-backend-wallet-address": config.thirdweb.engine.wallet!,
        },
    }
  
    const response = await fetch(
        url,
        httpOptions
    );

    const result = await response.json();

    if (!result.success) {
        throw new Error(`Validation failed: ${result.error}`);
    }

    return ownedResponseSchema.parse(result);
};


export const httpMint = async (receiver: string) => {
    const url = `${config.thirdweb.engine.url}/contract/${config.thirdweb.chainId}/${config.contractAddress}/erc721/claim-to`
    const httpOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.thirdweb.engine.accessToken}`,
            "x-backend-wallet-address": config.thirdweb.engine.wallet!,
        },
        body: JSON.stringify({ receiver: receiver.toLowerCase(), quantity: "1" }),
    }
    const response = await fetch(
        url,
        httpOptions

    );

    const result = await response.json();
    
    if (!result.success) {
        throw new Error(`Validation failed: ${result.error}`);
    }

    return mintResponseSchema.parse(result);
};
