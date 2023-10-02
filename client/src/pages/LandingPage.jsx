import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import blog_svg from "../assets/blog-svg.svg";

const LandingPage = () => {
  return (
    <>
      <Header />

      <div className="landing_container">
        <div className="svg_container">
          <img src={blog_svg} alt="blog-svg" className="svg-container" />
        </div>
        <div className="auth_container">
          <Outlet />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
