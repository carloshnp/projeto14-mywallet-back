import joi from "joi";

export const operationSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required().min(5),
  type: joi.string().valid("inflow", "outflow").required(),
});
