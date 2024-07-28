import React from 'react'
import { routes } from './mainRoute'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(routes);

const Routing = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Routing
