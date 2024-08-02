import { useFormik } from 'formik';
import React, { useState } from 'react'
import { initialObj } from '../../validations/initialValuesSchema';
import { validationObj } from '../../validations/validationschema';
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FormComponent from '../../components/FormComponent';

const Login = () => {

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.validation_signin,
        validationSchema: validationObj.validation_signin,
        onSubmit: (values) => {
            console.log('values:- ', values);
        }
    });
    
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
