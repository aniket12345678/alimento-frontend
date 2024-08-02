import Book from "../pages/Book";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Layout from "../components/Layout";

const authRoutes = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
];

const guardedRoutes = [
    {
        path: "/home",
        element: <Layout Page={Home} />,
    },
    {
        path: "/menu",
        element: <Layout Page={Menu} />,
    },
    {
        path: "/about",
        element: <Layout Page={About} />,
    },
    {
        path: "/book",
        element: <Layout Page={Book} />,
    },
];

export const routes = [...authRoutes, ...guardedRoutes];