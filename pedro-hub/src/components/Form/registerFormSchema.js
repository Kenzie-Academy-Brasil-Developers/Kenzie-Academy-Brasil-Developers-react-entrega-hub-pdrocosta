import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Name field is empty."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Email is invalid."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must have 8 characters.")
    .matches(/(\d)/, "Password must have 1 number.")
    .matches(/[a-z]/, "Password must have 1 low case letter.")
    .matches(/[A-Z]/, "Password must have 1 upper case letter.")
    .matches(/(\W|_)/, "Password must have 1 special character."),
  confirmPassword: yup
    .string()
    .required("The confirmed password field is empty.")
    .oneOf([yup.ref("password")], "The passwords don`t match."),
    bio: yup.string().required("Bio is empty").max(256, "Bio must have a maximum of 256 characters.")
});
