import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),

    password: Yup.string()
        .required('Password is Required')
        .min(8, 'Password is too short - should be 8 chars minimum')
});
