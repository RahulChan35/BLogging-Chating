import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/api/v1/auth/login", data);
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

const Login = () => {
  return (
    <div className="login-container">
      <h3>Enter the Community!</h3>
      <div className="underline"></div>
      <div className="form-container">
        <Form method="post" action="/auth/login" className="form">
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
              Sign-In
            </button>
            <p>
              Not a member?{" "}
              <span>
                <Link to="/auth/register">Register</Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
