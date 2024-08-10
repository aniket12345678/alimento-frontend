import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap'

import { authSignUp } from '../../slice/auth.slice';
import AuthLayout from '../../components/AuthLayout';
import FormComponent from '../../components/FormComponent';
import { initialObj } from '../../validations/initialValuesSchema';
import { validationObj } from '../../validations/validationschema';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signin } = useSelector(x => x.authSlice);
    const { isLoggedIn } = signin;

    const [phoneNumber, setPhoneNumber] = useState();

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.validation_signup,
        validationSchema: validationObj.validation_signup,
        onSubmit: (values) => {
            values.user_role = 2;
            values.phone_number = phoneNumber;
            dispatch(authSignUp(values)).unwrap().then((response) => {
                setTimeout(() => {
                    if (response.code === 200) {
                        navigate('/email-verify');
                    }
                }, 1000);
            });
        }
    });

    if (isLoggedIn) {
        return <Navigate to={'/home'} />
    }

    return (
        <>
            <h2 className="text-uppercase text-center mb-5">Register</h2>
            <Form onSubmit={handleSubmit}>
                <Row className='mb-4'>
                    <Col md={6}>
                        <FormComponent
                            type="text"
                            placeholder='First Name'
                            values={values.first_name}
                            errors={errors.first_name}
                            handleChange={handleChange}
                            name='first_name'
                        />
                    </Col>
                    <Col md={6}>
                        <FormComponent
                            type="text"
                            placeholder='Last Name'
                            values={values.last_name}
                            errors={errors.last_name}
                            handleChange={handleChange}
                            name='last_name'
                        />
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col md={6}>
                        <PhoneInput
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                        />
                    </Col>
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
                </Row>
                <Row className='mb-4'>
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
                    <Col md={6}>
                        <FormComponent
                            type="password"
                            placeholder='Confirm password'
                            values={values.confirm_password}
                            errors={errors.confirm_password}
                            handleChange={handleChange}
                            name='confirm_password'
                        />
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        name='conditions'
                        onChange={handleChange}
                        checked={values.conditions}
                    />
                    {
                        errors.conditions &&
                        <div className='form-error'>
                            {errors.conditions}
                        </div>
                    }
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button
                        type='submit'
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                        Register
                    </Button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to={'/'} className="fw-bold text-body"><u>Login here</u></Link></p>
            </Form>
        </>
    )
}

export default AuthLayout(Signup);
