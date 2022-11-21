import joi from "joi";

export const userSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  checkPassword: joi
    .any()
    .equal(joi.ref("password"))
    .required()
    .label("Confirme sua senha")
    .messages({ "any.only": "{{#label}} does not match" }),
});
