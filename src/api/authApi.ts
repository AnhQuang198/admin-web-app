import axiosClient from "./axiosClient";

const apiPrefix = "/v1/auth";

const authApi = {
  login: (params: any) => {
    return axiosClient({
      method: "POST",
      url: apiPrefix + "/login",
      data: params,
    });
  },
};

export default authApi;
