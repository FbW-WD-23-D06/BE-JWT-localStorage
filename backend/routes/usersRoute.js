import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
} from "../controllers/userController.js";
import { userValidationRules } from "../middlewares/userValidator.js";
import { authinticate } from "../middlewares/authinticate.js";
import { isAdmin } from "../middlewares/roleAuth.js";
import { tokenValid } from "../middlewares/tokenValid.js";

const usersRouter = express.Router();

usersRouter
  .post("/register", userValidationRules, registerUser)
  .post("/login", loginUser)
  .get("/", authinticate, isAdmin, getUser)
  .post("/tokenValid", tokenValid);

export default usersRouter;
