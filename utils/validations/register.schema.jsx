import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Required"),
    email: Yup.string().email("Provide a valid email").required("Required"),
});