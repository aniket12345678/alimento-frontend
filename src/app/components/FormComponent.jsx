import React from 'react'
import { Form } from 'react-bootstrap';

const FormComponent = (props) => {
    const { type, placeholder, name, handleChange, values, errors } = props;
    return (
        <React.Fragment>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={values}
                onChange={handleChange}
                name={name}
                className="form-control form-control-lg"
                autoComplete='false'
            />
            {
                errors &&
                <div className='form-error'>
                    {errors}
                </div>
            }
        </React.Fragment>
    )
}

FormComponent.propTypes = {

}

export default FormComponent
