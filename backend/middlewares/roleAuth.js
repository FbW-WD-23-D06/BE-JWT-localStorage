import { User } from "../models/User.js";
export const isAdmin = async (req, res, next) => {
  console.log(req.user);
  try {
    const user = await User.findById(req.user.userId);
    const role = user.role;
    if (role !== "Admin") {
      return res.status(404).json({ isAdmin: false });
    }
    req.user = user;
    next();
  } catch (error) {
    res.json(error);
  }
};
