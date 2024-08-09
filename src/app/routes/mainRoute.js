import Book from "../pages/Book";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Layout from "../components/Layout";
import ProtectedRoutes from "../components/ProtectedRoutes";
import EmailVerify from "../pages/auth/EmailVerify";
import Dummy from "../pages/Dummy";
import Cart from "../pages/Cart";

const authRoutes = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/email-verify",
        element: <EmailVerify />,
    },
];

const guardedRoutes = [
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/home",
                element: <Layout Page={Home} />,
            },
            {
                path: "/menu",
                element: <Layout Page={Menu} />,
            },
            {
                path: "/dummy",
                element: <Dummy />,
            },
            {
                path: "/about",
                element: <Layout Page={About} />,
            },
            {
                path: "/book",
                element: <Layout Page={Book} />,
            },
            {
                path: "/cart",
                element: <Layout Page={Cart} />,
            },
        ]
    },
];

export const routes = [...authRoutes, ...guardedRoutes];