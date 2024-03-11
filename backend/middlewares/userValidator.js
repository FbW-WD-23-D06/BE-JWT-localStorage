import { body } from "express-validator";
import { validate } from "./validate.js";
import UserSchema from "../models/User.js";

const requiredInputs = UserSchema.requiredPaths(); // ['name', 'email','password']

const requiredInputsValidation = requiredInputs.map((input) => {
  return body(input).exists().withMessage(`${input} is required`);
}); // [body(email).existes().withMessage(),]

const userValidationRules = [
  ...requiredInputsValidation,
  body("userName", "Wrong Name!!")
    .isString()
    .withMessage("The username must be a string."),
  body("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!])[0-9a-zA-Z?!]{8,}$/)
    .withMessage(
      "The password must contain at least 1 number, 1 lowercase and uppercase character, one special character and be at least 8 characters long."
    ),
  validate,
];

export { userValidationRules };
