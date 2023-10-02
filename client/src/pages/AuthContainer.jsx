import { Link } from "react-router-dom";

const AuthContainer = () => {
  return (
    <>
      <div className="auth-btn-container">
        <Link to="/auth/register" className="btn">
          <div>Sign-Up</div>
        </Link>
        <p>-OR-</p>
        <Link to="/auth/login" className="btn">
          <div>Sign-In</div>
        </Link>
      </div>
    </>
  );
};

export default AuthContainer;
