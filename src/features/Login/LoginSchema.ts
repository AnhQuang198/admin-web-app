import { object, string } from 'yup';

export const LoginSchema = object({
    email: string().min(6, "Email too short!").max(50, "Email too long!").required("Input Required!"),
    password: string().min(6, "Password too short!").max(50, "Password too long!").required("Input Required!")
});