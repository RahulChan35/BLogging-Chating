import { Form, Link, redirect } from "react-router-dom";
import axios from "axios";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/api/v1/auth/register", data);
    return redirect("/auth/login");
  } catch (error) {
    console.log(error);
  }
};

const Register = () => {
  return (
    <div className="register-container">
      <h3>Join Us!</h3>
      <div className="underline"></div>
      <div className="form-container">
        <Form method="post" action="/auth/register" className="form">
          <div className="input-container">
            <label htmlFor="name">username: </label>
            <input type="text" name="name" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">email: </label>
            <input type="email" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">password: </label>
            <input type="password" name="password" required />
          </div>
          <div className="form-submit-container">
            <button type="submit" className="auth-btn">
              Sign-Up
            </button>
            <p>
              Already a member?{" "}
              <span>
                <Link to="/auth/login">Login</Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
