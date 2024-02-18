import axios from "axios";
import { Base_Url } from "./config";

export const api = axios.create({
    baseURL: Base_Url,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

// auth request
export const SignInApi = (bodyData) => api.post("/auth/sign-in", bodyData)
export const SignUpApi = (bodyData) => api.post("/auth/sign-up", bodyData)
export const ForgetPasswordApi = (bodyData) => api.post("/auth/forget-password", bodyData)
export const VerifyOtpApi = (bodyData) => api.post("/auth/verify-otp", bodyData)
export const UpdatePasswordApi = (bodyData) => api.patch("/auth/update-password", bodyData)

// company request
// export const CreateCompanyApi = (bodyData) => api.post("/auth/update-password", bodyData)
