import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// PAGES
import LandingPage from "./pages/LandingPage";
import AuthContainer from "./pages/AuthContainer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./layouts/Dashboard";
import MyBlogs from "./pages/MyBlogs";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

// ACTIONS
import { registerAction } from "./pages/Register";
import { loginAction } from "./pages/Login";
import { createBlogAction } from "./pages/CreateBlog";

// LOADERS
import { dashboardLoader } from "./layouts/Dashboard";
import { myBlogsLoader } from "./pages/MyBlogs";
import LiveBlogs from "./pages/LiveBlogs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<LandingPage />}>
        <Route index element={<AuthContainer />} />
        <Route
          path="/auth/register"
          element={<Register />}
          action={registerAction}
        />
        <Route path="/auth/login" element={<Login />} action={loginAction} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} loader={dashboardLoader}>
        <Route index element={<MyBlogs />} loader={myBlogsLoader} />
        <Route
          path="create-blog"
          element={<CreateBlog />}
          action={createBlogAction}
        />
        <Route path="edit-blog" element={<EditBlog />} />
        <Route path="live-blogs" element={<LiveBlogs />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
