import Layout from "../components/Layout";
import About from "../pages/About";
import Book from "../pages/Book";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export const routes = [
    {
        path: "/",
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