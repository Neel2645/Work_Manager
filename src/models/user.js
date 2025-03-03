import mongoose from "mongoose";

const UserSachema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email Required !!"],
  },
  password: {
    type: String,
    require: [true, "Password Required !!"],
  },
  about: {
    type: String,
  },
  profileURL: {
    type: String,
  },
});

export const User = mongoose.models.users || mongoose.model("users", UserSachema);
