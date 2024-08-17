import { z } from "zod";
const createCardValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
  }),
});
const updateCardValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required",
      })
      .optional(),
    description: z
      .string({
        required_error: "Description is required",
      })
      .optional(),
  }),
});

export const cardValidation = {
  createCardValidationSchema,
  updateCardValidationSchema,
};
