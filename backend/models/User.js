import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};
export const User = model("User", UserSchema);

export default UserSchema;
