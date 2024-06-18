import React from 'react'
import { Form } from 'react-bootstrap';

const FormComponents = (props) => {
    const { type, placeholder, name, handleChange, values, formtype } = props;
    switch (formtype) {
        case 'normal':
            return (
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    value={values[name]}
                    onChange={handleChange}
                    name={name}
                    autoComplete='false'
                />
            )

        default:
            break;
    }
}

FormComponents.propTypes = {

}

export default FormComponents
