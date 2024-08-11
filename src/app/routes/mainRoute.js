import Book from "../pages/Book";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Dummy from "../pages/Dummy";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import ThankYou from "../pages/ThankYou";
import Signup from "../pages/auth/Signup";
import Layout from "../components/Layout";
import EmailVerify from "../pages/auth/EmailVerify";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ConfirmEmailVerification from "../pages/auth/ConfirmEmailVerification";

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
    {
        path: "/confirm/email/:userId/:code",
        element: <ConfirmEmailVerification />,
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
            {
                path: "/completion",
                element: <Layout Page={ThankYou} />,
            },
        ]
    },
];

export const routes = [...authRoutes, ...guardedRoutes];