import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Loading from "./components/common/Loading/Loading";
import NotFound from "./components/common/NotFound/NotFound";
import Home from "./features/Authentication/Home/Home";
import ShopAddress from "./features/Authentication/Shop/ShopAddress/ShopAddress";
import ShopProfile from "./features/Authentication/Shop/ShopProfile/ShopProfile";
import ShopRating from "./features/Authentication/Shop/ShopRating/ShopRating";
import ForgotPassword from "./features/Forgot/ForgotPassword";
import Login from "./features/Login/Login";
import OtpVerify from "./features/OtpVerify/OtpVerify";
import Register from "./features/Register/Register";
import { isLogin } from "./utils/Common";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      if (!isLogin()) {
        return redirect("/login");
      }
      return isLogin;
    },
    element: (
      <Loading>
        <App />
      </Loading>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop-rating",
        element: <ShopRating />,
      },
      {
        path: "/shop-profile",
        element: <ShopProfile />,
      },
      {
        path: "/shop-address",
        element: <ShopAddress />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (isLogin()) {
        return redirect("/");
      }
      return isLogin;
    },
    element: (
      <Loading>
        <Login />
      </Loading>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/forgot-password",
    loader: () => {
      if (isLogin()) {
        return redirect("/");
      }
      return isLogin;
    },
    element: (
      <Loading>
        <ForgotPassword />
      </Loading>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    loader: () => {
      if (isLogin()) {
        return redirect("/");
      }
      return isLogin;
    },
    element: (
      <Loading>
        <Register />
      </Loading>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/otp-verify",
    loader: () => {
      if (isLogin()) {
        return redirect("/");
      }
      return isLogin;
    },
    element: (
      <Loading>
        <OtpVerify />
      </Loading>
    ),
    errorElement: <NotFound />,
  },
]);

export default router;
