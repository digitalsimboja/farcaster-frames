import { config } from "@/config/config";



export const getCastHashProtocol = (castHash: string) => {
    const protocolKeys = Object.keys(config.protocol) as (keyof typeof config.protocol)[];

    for (const protcl of protocolKeys) {
        const protocol = config.protocol[protcl];
        if (protocol.castHash === castHash) {
            return protocol.name; 
        }
    }
    
    throw new Error(`Invalid cast hash protocol: ${castHash}`);
}
