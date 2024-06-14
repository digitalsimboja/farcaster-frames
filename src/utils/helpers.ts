import { config } from "@/config/config";
import { NextRequest } from "next/server";
import { ErrorRes } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import axios, { AxiosError } from "axios";
import { Warpcast } from "@/clients/Warpcast/warpcast";
import { UserData } from "@/database/user";



export const getCastHashProtocol = (castHash: string) => {
  const protocolKeys = Object.keys(config.protocol) as (keyof typeof config.protocol)[];

  for (const prtclKey of protocolKeys) {
    const protocol = config.protocol[prtclKey];
    if (protocol.castHash === castHash) {
      return protocol.name;
    }
  }

  throw new Error(`Invalid cast hash protocol: ${castHash}`);
}

export const getActionData = async (req: NextRequest) => {
  const data = await req.json();

  const messageBytes = data.trustedData.messageBytes;
  const action = await Warpcast.validateMessage(messageBytes);
  //const action = data.mockFrameData

  const custody_address = action.interactor.custody_address;
  const fid: number = action.interactor.fid;
  const castHash = data.untrustedData.castId.hash
  const username = action.interactor.username

  return { custody_address, fid, castHash, username };
}

export const verifyUser = async (signerUuid: string, fid: string) => {
  let _isVerifiedUser = false;
  try {
    const {
      data: { isVerifiedUser },
    } = await axios.post("/api/verify-user", { signerUuid, fid });
    _isVerifiedUser = isVerifiedUser;
  } catch (err) {
    const { message } = (err as AxiosError).response?.data as ErrorRes;
    console.error(message);
  }
  return _isVerifiedUser;
};


export function timeStringToMilliseconds(timeString: string): number {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return (hours * 3600 + minutes * 60 + seconds) * 1000;
}

export const getRelevantUsers = (
  userDataList: UserData[],
  custodyAddress: string,
) => {
  const sortedUserDataList = userDataList.sort(
    (a, b) =>
      timeStringToMilliseconds(a.completionTime) -
      timeStringToMilliseconds(b.completionTime)
  );

  const userIndex = sortedUserDataList.findIndex(
    (userData) => userData.custody_address === custodyAddress
  );

  const startIndex = Math.max(userIndex - 2, 0);
  const endIndex = Math.min(userIndex + 3, sortedUserDataList.length);

  const relevantUsers = sortedUserDataList.slice(startIndex, endIndex);

  return { startIndex, relevantUsers }
}


