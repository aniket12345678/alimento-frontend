const signupInitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    conditions: false
}

const signinInitialValues = {
    email: '',
    password: '',
}

const emailVerifyInitialValues = {
    email: '',
}

const initialObj = {
    validation_signup: signupInitialValues,
    validation_signin: signinInitialValues,
    validation_emailVerify: emailVerifyInitialValues
}

export { initialObj };