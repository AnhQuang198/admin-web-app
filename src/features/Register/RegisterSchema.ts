import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(6, "Name too short!").max(50, "Name too long!").required("Input Required!"),
    email: Yup.string().email("Email incorrect!").min(6, "Email too short!").max(50, "Email too long!").required("Input Required!"),
    password: Yup.string().min(6, "Password too short!").max(50, "Password too long!").required("Input Required!"),
    confirmPassword: Yup.string().min(6, "Confirm Password too short!").max(50, "Confirm Password too long!").required("Input Required!").oneOf([Yup.ref('password'), null], "Confirm Password not match!")
});