import * as yup from 'yup'

const signup = yup.object().shape({
    first_name: yup.string().required('Enter first name'),
    last_name: yup.string().required('Enter last name'),
    email: yup.string().required('Enter email address'),
    password: yup.string()
        .min(8, 'Minimum 8 characters are required')
        .max(20, 'Maximum 20 characters are allowed')
        .required('Enter password'),
    confirm_password: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password'),
});

const signin = yup.object().shape({
    email: yup.string().required('Enter email address'),
    password: yup.string()
        .min(8, 'Minimum 8 characters are required')
        .max(20, 'Maximum 20 characters are allowed')
        .required('Enter password'),
});

const validationObj = {
    validation_signup: signup,
    validation_signin: signin
}

export { validationObj }