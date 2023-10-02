import { StatusCodes } from "http-status-codes";
import Blog from "../models/BlogModel.js";

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ blogs });
};

export const getSingleBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.status(StatusCodes.OK).json({ blog });
};

export const createBlog = async (req, res) => {
  req.body.createdBy = req.user.userId;
  await Blog.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "Blog Created" });
};

export const updateBlog = async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(StatusCodes.OK).json({ msg: "Blog Updated" });
};

export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "Blog Deleted" });
};
