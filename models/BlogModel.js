import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
  content: {
    type: String,
    default: "Blah Blah Blah Blah Blah Blah",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

export default new mongoose.model("Blog", BlogSchema);
