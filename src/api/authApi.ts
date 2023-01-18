import axiosClient from "./axiosClient";


const authApi = {
    login: (params:any) => {
        return axiosClient({
            method: 'POST',
            url: '/v1/auth/login',
            data: params
        });
    }
};

export default authApi;