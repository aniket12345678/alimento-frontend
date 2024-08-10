import React, { useEffect } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { authConfirmEmailVerify } from '../../slice/auth.slice';
import { useDispatch } from 'react-redux';

const ConfirmEmailVerification = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code, userId } = useParams();
    useEffect(() => {
        confirmation();
    }, []);

    const confirmation = () => {
        dispatch(authConfirmEmailVerify({ code: code, user_id: userId })).unwrap().then((result) => {
            if (result.code === 500) {
                navigate('/')
            }
        }).catch((err) => {
            console.log('err:- ', err);
        });;
    }

    return (
        <div>
            <Link to={'/'}>Login</Link> to your account
        </div>
    )
}

export default AuthLayout(ConfirmEmailVerification)
