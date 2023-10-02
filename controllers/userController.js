import User from "../models/UserModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  user.password = "";
  res.status(200).json({ user });
};

export const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(200).json({ msg: "user updated" });
};
