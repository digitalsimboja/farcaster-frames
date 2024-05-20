import { ethers } from "ethers"
import { BigNumber } from "bignumber.js";
import { httpFetchBalanceStatus, httpFetchOwned, httpMint } from "@/utils/fetcher";

export class ThirdWebEngine {
    public static isBalanceLow = async () => {
        const { result } = await httpFetchBalanceStatus();
        const formattedEther = ethers.utils.formatEther(result.value)
        const totalFormattedBalance = BigNumber(formattedEther).dp(6).toNumber();

        return totalFormattedBalance < 0.01
    }

    public static mint = async (receiver: string) => {
        const response = await httpMint(receiver)
        return response;
    }

    public static isNFTOwned = async (receiver: string) => {
        const response = await httpFetchOwned(receiver)
        return response.result.length > 0;
    }
}