import { Router } from "express";
const router = Router();

import {
  getBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getSingleBlog).patch(updateBlog).delete(deleteBlog);

export default router;
