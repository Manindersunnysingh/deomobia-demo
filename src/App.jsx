import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Login,
  Register,
  Blog,
  CreateBlog,
  EditBlog,
  ContactUser,
  DownloadUser,
  DashboardLayout,
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { loader as blogLoader } from "./pages/Blog";
import { action as createBlogAction } from "./pages/CreateBlog";
import { loader as editBlogLoader } from "./pages/EditBlog";
import { action as editBlogAction } from "./pages/EditBlog";
import { action as deleteBlogAction } from "./pages/DeleteBlog";
import { action as createContactUsAction } from "./components/ContactUs";
import { loader as contactUserLoader } from "./pages/ContactUser";
import { loader as downloadUserLoader } from "./pages/DownloadUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        action: createContactUsAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: blogLoader,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard/create-blog",
            element: <CreateBlog />,
            action: createBlogAction,
          },
          {
            path: "/dashboard/edit-blog/:id",
            element: <EditBlog />,
            loader: editBlogLoader,
            action: editBlogAction,
          },
          { path: "/dashboard/delete-blog/:id", action: deleteBlogAction },
          {
            path: "/dashboard/contact-user",
            element: <ContactUser />,
            loader: contactUserLoader,
          },
          {
            path: "/dashboard/download-user",
            element: <DownloadUser />,
            loader: downloadUserLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
