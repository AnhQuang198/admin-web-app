import * as Yup from 'yup';

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Email incorrect!").min(6, "Email too short!").max(50, "Email too long!").required("Input Required!")
});