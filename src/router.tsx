import {createBrowserRouter, redirect} from "react-router-dom";
import App from "./App";
import NotFound from "./components/common/NotFound/NotFound";
import Home from "./features/Authentication/Home/Home";
import ForgotPassword from "./features/Forgot/ForgotPassword";
import Login from "./features/Login/Login";
import Register from "./features/Register/Register";

var isLogin = false;

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            if (!isLogin) {
                return redirect("/login");
            }
            return isLogin;
        },
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/home",
                element: <Home />
            }
        ]
    },
    {
        path: "/login",
        loader: () => {
            if (isLogin) {
                return redirect("/");
            }
            return isLogin;
        },
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "/forgot-password",
        loader: () => {
            if (isLogin) {
                return redirect("/");
            }
            return isLogin;
        },
        element: <ForgotPassword />,
        errorElement: <NotFound />,
    },
    {
        path: "/register",
        loader: () => {
            if (isLogin) {
                return redirect("/");
            }
            return isLogin;
        },
        element: <Register />,
        errorElement: <NotFound />,
    }
]);

export default router