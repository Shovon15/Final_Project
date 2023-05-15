import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";
import ProductDetails from "../../Pages/Products/ProductDetails";
import SignUp from "../../Pages/LoginPage/SignUp/SignUp";
import DashboardLayout from "../../Layouts/Main/DashboardLayout/DashboardLayout";
import Profile from "../../Pages/Dashboard/UserProfile/Profile";
import Logout from "../../Pages/Dashboard/Logout/Logout";
import About from "../../Pages/AboutPage/About";
import Login from "../../Pages/LoginPage/Login/Login";
import Blog from "../../Pages/BlogPage/Blog";
import ManagePost from "../../Pages/Dashboard/ManagePost/ManagePost";
import CreatePost from "../../Pages/Dashboard/CreatePost/CreatePost";
import BookingOrders from "../../Pages/Dashboard/BookingOrders/BookingOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/:categoryName",
        element: <Products />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params.categoryName}`),
      },
      {
        path: "/:categoryName/:_id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params.categoryName}/${params._id}`),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/",
        element: <Profile />,
      },
      {
        path: "/dashboard/createPost",
        element: <CreatePost />,
      },
      {
        path: "/dashboard/managePost",
        element: <ManagePost />,
      },
      {
        path: "/dashboard/bookingOrders",
        element: <BookingOrders />,
      },
      {
        path: "/dashboard/logout",
        element: <Logout />,
      },
    ],
  },
]);
export default router;
