import axios from "axios";
import React from "react";
import { Form, useNavigate } from "react-router-dom";

// export const updateAction = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   try {
//     // await axios.patch(`/api/v1/blogs/${_id}`, data)
//   } catch (error) {
//     console.log(error);
//   }
// };

const SingleBlog = ({ _id, content, createdAt }) => {
  const [edit, setEdit] = React.useState(false);
  const [body, setBody] = React.useState(content);

  const navigate = useNavigate();

  const handleUpdate = async () => {
    await axios.patch(`/api/v1/blogs/${_id}`, { content: body });
    setEdit(false);
    navigate("/dashboard");
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/v1/blogs/${_id}`);
    navigate("/dashboard");
  };

  return (
    <div className="single-blog">
      {edit ? (
        <div className="edit-form-container">
          <Form className="form">
            <div>
              <textarea
                name="content"
                rows="3"
                cols="40"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <button onClick={handleUpdate} className="update-btn">
              Update
            </button>
          </Form>
        </div>
      ) : (
        <div className="blog-container">
          <div className="body">
            <p className="content">{body}</p>
            <p className="createdAt">{createdAt.substring(0, 10)}</p>
          </div>
          <div className="btn-container">
            <button className="edit-blog" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-blog" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
