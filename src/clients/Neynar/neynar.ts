import { config } from "@/config/config";
import { NeynarAPIClient } from "@neynar/nodejs-sdk";


const NeynarClient = new NeynarAPIClient(config.neynar.apiKey!);

export default NeynarClient;
