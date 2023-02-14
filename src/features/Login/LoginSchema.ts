import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email incorrect!").min(6, "Email too short!").max(50, "Email too long!").required("Input Required!"),
    password: Yup.string().min(6, "Password too short!").max(50, "Password too long!").required("Input Required!")
});