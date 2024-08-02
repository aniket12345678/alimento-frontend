import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import PhoneInput from 'react-phone-number-input';
import { initialObj } from '../../validations/initialValuesSchema';
import { validationObj } from '../../validations/validationschema';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import FormComponent from '../../components/FormComponent';

const Signup = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.validation_signup,
        validationSchema: validationObj.validation_signup,
        onSubmit: (values) => {
            values.user_role = 2;
            console.log('values:- ', values);
        }
    });

    return (
        <section
            className="vh-100 bg-image"
            style={{
                backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
            }}
        >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
