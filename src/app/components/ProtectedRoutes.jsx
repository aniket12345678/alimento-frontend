import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const { signin } = useSelector(x => x.authSlice);
    const { isLoggedIn } = signin;
    return (
        <>
            {isLoggedIn ? <Outlet /> : <Navigate to={'/'} />}
        </>
    )
}

export default ProtectedRoutes
