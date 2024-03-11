import jwt from "jsonwebtoken";

import "../config.js";

import createError from "http-errors";

export const authinticate = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return next(createError(401, "no token"));
    }
    const decode = await jwt.verify(token, process.env.SECRETKEY); // throw an error
    return res.json(true);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(createError(401, "Token Expired!"));
    }
    if (error.name === "JsonWebTokenError") {
      return next(createError(401, "Token invalid!"));
    }
    return next(error);
  }
};
