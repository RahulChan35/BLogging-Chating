import { useLoaderData } from "react-router-dom";
import BlogsContainer from "../components/BlogsContainer";
import axios from "axios";

export const myBlogsLoader = async () => {
  const response = await axios.get("/api/v1/blogs");
  return response.data;
};

const MyBlogs = () => {
  const { blogs } = useLoaderData();
  return (
    <div className="blogs">
      {blogs.length > 0 ? (
        <BlogsContainer blogs={blogs} />
      ) : (
        <p>No Blogs to show</p>
      )}
    </div>
  );
};

export default MyBlogs;
