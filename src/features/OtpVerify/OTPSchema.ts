import * as Yup from 'yup';

export const OTPSchema = Yup.object().shape({
    otp: Yup.string()
        .required("Input Required!")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, 'Must be exactly 6 digits')
        .max(6, 'Must be exactly 6 digits')
});