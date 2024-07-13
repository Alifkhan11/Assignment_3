import { z } from "zod";

const serviceValidationSchema=z.object({
    body:z.object({
        name:z.string(),
        discription:z.string(),
        price:z.number(),
        duration:z.number(),
        isDeleted:z.boolean()
    })
})

export const ServiceValidation={
    serviceValidationSchema
}