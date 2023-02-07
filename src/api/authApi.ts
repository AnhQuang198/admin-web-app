import { unAuthPOST } from "./apiRequest";

const apiPrefix = "/v1/auth";

const authApi = {
  login: (params: object) => {
    let url = apiPrefix + "/login";
    return unAuthPOST(url, params);
  },
  register: (params: object) => {
    let url = apiPrefix + "/register";
    return unAuthPOST(url, params);
  },
  sendOTP: (params: object) => {
    let url = apiPrefix + "/send-otp";
    return unAuthPOST(url, params);
  },
  verifyOTP: (params: object) => {
    let url = apiPrefix + "/verify-otp";
    return unAuthPOST(url, params);
  },
  forgotPassword: (params: object) => {
    let url = apiPrefix + "/forgot-password";
    return unAuthPOST(url, params);
  },
  generateToken: (params: object) => {
    let url = apiPrefix + "/generate-token";
    return unAuthPOST(url, params);
  },
};

export default authApi;
