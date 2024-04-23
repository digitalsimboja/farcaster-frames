import { config } from "@/config/config";
import { z } from 'zod'

const balanceResponseSchema = z.object({
    result: z.object({
        value: z.string()
    })
})

const mintResponseSchema = z.object({
    result: z.object({
        queueId: z.string()
    })
})

const ownedResponseSchema = z.object({
    result: z.array(
        z.object({
            owner: z.string().startsWith("0x"),
            type: z.string(),
            supply: z.string(),
        })
    )
})

export const balanceOfContract = async () => {
   
}