import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export default new mongoose.model("User", UserSchema);
