import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is too short')
    .max(12, 'First name is too long')
    .required('First name is required'),

  lastName: Yup.string()
    .min(2, 'Last name is too short')
    .max(12, 'Last name is too long')
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .min(8, 'Confirm password must be at least 8 characters')
    .oneOf([Yup.ref('password')], 'Password and confirm password do not match')
    .required('Confirm password is required'),
});
