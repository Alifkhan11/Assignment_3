import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name is Requierd validation Error",
    }),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    role: z.enum(["admin", "user"]),
    address: z.string(),
    isDeleted: z.boolean().optional(),
  }),
});
const userValidationupdathSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Name is Requierd validation Error",
      })
      .optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    phone: z.number().optional(),
    role: z.enum(["admin", "user"]).optional(),
    address: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const UserValidation = {
  userValidationSchema,
  userValidationupdathSchema,
};
