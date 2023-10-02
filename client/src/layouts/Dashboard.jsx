import { Link, Outlet, useLoaderData } from "react-router-dom";
import axios from "axios";
import Logout from "../components/Logout";
// import Footer from "../components/Footer";

export const dashboardLoader = async () => {
  const response = await axios.get("/api/v1/users/current-user");
  return response.data;
};

const Dashboard = () => {
  const { user } = useLoaderData();
  return (
    <div>
      <div className="dashboard-header">
        <div className="logo-container">
          <img src="" />
        </div>
        <div className="heading">
          <h3>BLogging</h3>
        </div>
        <div className="profile-container">
          <Link
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Blogs
          </Link>
          <Link
            to="/dashboard/create-blog"
            style={{ color: "white", textDecoration: "none" }}
          >
            Create a Blog
          </Link>
          <Link
            to="/dashboard/live-blogs"
            style={{ color: "white", textDecoration: "none" }}
          >
            Live Blogs
          </Link>
          <div>
            <Logout {...user} />
          </div>
        </div>
      </div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
