import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
} from "../controllers/userController.js";
import { userValidationRules } from "../middlewares/userValidator.js";
import { authinticate } from "../middlewares/authinticate.js";

const usersRouter = express.Router();

usersRouter
  .post("/register", userValidationRules, registerUser)
  .post("/login", loginUser)
  .get("/", getUser)
  .post("/tokenValid", authinticate);

export default usersRouter;
