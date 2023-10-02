import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = ({ _id, name }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get("/api/v1/auth/logout");
    navigate("/");
  };

  return (
    <>
      <p>{name}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
