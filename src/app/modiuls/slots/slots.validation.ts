import { z } from "zod";

const createSlotsValidationSchema = z.object({
  body: z.object({
    service: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
  }),
});

export const SlotsValidation = {
  createSlotsValidationSchema,
};
