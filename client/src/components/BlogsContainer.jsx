import SingleBlog from "./SingleBlog";

const BlogsContainer = ({ blogs }) => {
  return (
    <div className="blogs-container">
      {blogs.map((blog) => {
        return <SingleBlog key={blog._id} {...blog} />;
      })}
    </div>
  );
};

export default BlogsContainer;
