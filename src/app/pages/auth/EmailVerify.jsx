import React from 'react'
import AuthLayout from '../../components/AuthLayout'
import FormComponent from '../../components/FormComponent';
import { initialObj } from '../../validations/initialValuesSchema';
import { validationObj } from '../../validations/validationschema';
import { useDispatch } from 'react-redux';
import { authEmailVerify, authSignIn } from '../../slice/auth.slice';
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useFormik } from 'formik';

const EmailVerify = () => {
    const dispatch = useDispatch()

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialObj.validation_emailVerify,
        validationSchema: validationObj.validation_emailVerify,
        onSubmit: (values) => {
            // dispatch(authEmailVerify(values))
            console.log('values:- ', values);
        }
    });
    return (
        <>
            <h2 className="text-uppercase text-center mb-5">Email Verification</h2>
            <Form onSubmit={handleSubmit}>
                <Row className='mb-4'>
                    <Col md={12}>
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
                <div className="d-flex justify-content-center">
                    <Button
                        type='submit'
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                        Verify Email
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default AuthLayout(EmailVerify)
