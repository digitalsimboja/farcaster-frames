import { z } from 'zod'

export const requestBodyWarpcastSchema = z.object({
    trustedData: z.object({
        messageBytes: z.string().min(5)
    })
})


export const requestQuerySchema = z.object({
    // "start" = will display Re-cast to mint & Like to mint
    // "recast" = will attempt to see if you have recasted and liked (you can change to 'recast-like' if you want)
    // "mint" = will be the actual mint process and display a congratulation html view
    type: z.union([z.literal("start"), z.literal("recast"), z.literal("mint")]),
})