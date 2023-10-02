import { Form, redirect } from "react-router-dom";
import axios from "axios";

export const createBlogAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/api/v1/blogs", data);
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

const CreateBlog = () => {
  return (
    <div className="dashboard-container">
      <Form method="post" action="/dashboard/create-blog">
        <div className="input-container">
          <textarea name="content" rows="3" cols="40"></textarea>
          <div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateBlog;
