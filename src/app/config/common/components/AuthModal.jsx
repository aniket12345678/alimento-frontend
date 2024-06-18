import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { validationObj } from '../../../validations/validationschema';
import FormComponents from '../functions/FormComponents';
import PropTypes from 'prop-types'

const AuthModal = ({ modalState, changeAuthModal, title }) => {
    const [phoneNumber, setPhoneNumber] = useState();

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: validationObj[modalState.validation],
        onSubmit: (values) => {
            console.log('values:- ', values);
        }
    });

    return (
        <Modal
            show={modalState.show}
            onHide={() => changeAuthModal(false, '', '')}
            backdrop="static"
            keyboard={false}
            centered={true}
            className='auth-form'
        >
            <Modal.Header>
                <Modal.Title>{modalState.type}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {
                        modalState.type === 'Sign up' ?
                            <React.Fragment>
                                <Row className="py-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            value={values.first_name}
                                            onChange={handleChange}
                                            name='first_name'
                                            autoComplete='false'
                                        />
                                        {errors.first_name && <div className='form-error'>{errors.first_name}</div>}
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" >
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            onChange={handleChange}
                                            value={values.last_name}
                                            name='last_name'
                                        />
                                        {errors.last_name && <div className='form-error'>{errors.last_name}</div>}
                                    </Form.Group>
                                </Row>
                                <Row className='py-3'>
                                    <Form.Group as={Col} md="6" >
                                        <PhoneInput
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" >
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            value={values.email}
                                            name='email'
                                        />
                                        {errors.email && <div className='form-error'>{errors.email}</div>}
                                    </Form.Group>
                                </Row>
                                <Row className="py-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                            name='password'
                                        />
                                        {errors.password &&
                                            <div className='form-error'>
                                                {errors.password}
                                            </div>
                                        }
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm password"
                                            onChange={handleChange}
                                            value={values.confirm_password}
                                            name='confirm_password'
                                        />
                                        {errors.confirm_password &&
                                            <div className='form-error'>
                                                {errors.confirm_password}
                                            </div>
                                        }
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Row className='py-3'>
                                    <Form.Group as={Col} md="6" >
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            value={values.email}
                                            name='email'
                                        />
                                        {errors.email &&
                                            <div className='form-error'>
                                                {errors.email}
                                            </div>
                                        }
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                            name='password'
                                        />
                                        {errors.password &&
                                            <div className='form-error'>
                                                {errors.password}
                                            </div>
                                        }
                                    </Form.Group>
                                </Row>
                            </React.Fragment>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => changeAuthModal(false, '')} variant='danger'>Cancel</Button>
                    <Button variant="warning" style={{ color: 'white' }} type='submit'>{modalState.type}</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

AuthModal.propTypes = {
    changeAuthModal: PropTypes.func,
    modalState: PropTypes.object
};

export default AuthModal
