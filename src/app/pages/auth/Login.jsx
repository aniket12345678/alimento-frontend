import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Col, Form, Row, Button } from 'react-bootstrap'

import AuthLayout from '../../components/AuthLayout';
import FormComponent from '../../components/FormComponent';
import { initialObj } from '../../validations/initialValuesSchema';
import { validationObj } from '../../validations/validationschema';
import { useDispatch, useSelector } from 'react-redux';
import { authSignIn } from '../../slice/auth.slice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signin } = useSelector(x => x.authSlice);
    const { isLoggedIn } = signin;

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.validation_signin,
        validationSchema: validationObj.validation_signin,
        onSubmit: (values) => {
            dispatch(authSignIn(values)).unwrap().then((response) => {
                setTimeout(() => {
                    if (response.code === 200) {
                        navigate('/home');
                    }
                }, 2000);
            });
        }
    });

    if (isLoggedIn) {
        return <Navigate to={'/home'} />
    }

    return (
        <>
            <h2 className="text-uppercase text-center mb-5">Login</h2>
            <Form onSubmit={handleSubmit}>
                <Row className='mb-4'>
                    <Col md={6}>
                        <FormComponent
                            type="email"
                            placeholder="Email"
                            values={values.email}
                            errors={errors.email}
                            handleChange={handleChange}
                            name='email'
                        />
                    </Col>
                    <Col md={6}>
                        <FormComponent
                            type="password"
                            placeholder='Password'
                            values={values.password}
                            errors={errors.password}
                            handleChange={handleChange}
                            name='password'
                        />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center">
                    <Button
                        type='submit'
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                        Login
                    </Button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to={'/signup'} className="fw-bold text-body"><u>Signup here</u></Link></p>
            </Form>
        </>
    )
}

export default AuthLayout(Login);
