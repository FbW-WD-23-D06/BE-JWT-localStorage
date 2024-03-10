import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const User = model("User", UserSchema);
