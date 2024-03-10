import { validationResult } from "express-validator";
import createError from "http-errors";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.isEmpty()) {
    return next();
  }

  const errorMessags = errors.array().map((err) => {
    return { [err.path]: err.msg };
  });
  return next(createError(422, "validation Error", { errors: errorMessags }));
};
