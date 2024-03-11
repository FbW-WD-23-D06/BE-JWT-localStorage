import { User } from "../models/User.js";
import createError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../config.js";

const registerUser = async (req, res, next) => {
  console.log(req.body);
  const { userName, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(createError(409, "user already exists!"));
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await user.save();
    const userWithoutPassword = user.toJSON(); // schema method
    return res.json({ msg: "user successfuly registerd", userWithoutPassword });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(404, "email not found!"));
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return next(createError(401, "Wrong passord!"));
    }
    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.SECRETKEY, {
      expiresIn: "20s",
    });
    console.log("token", token);
    return res.json({ token, msg: "You are logged in !" });
  } catch (error) {
    next(error);
  }
};
const getUser = (req, res) => {};

export { registerUser, loginUser, getUser };
