import express from "express";

const usersRouter = express.Router();

usersRouter
  .post("/register", registerUser)
  .post("/login", loginUser)
  .get("/", getUser);

export default usersRouter;
