import axiosClient from "./axiosClient";

export const nonAuthGET = (url: string) => {
    return axiosClient({
        method: "GET",
        url: url,
    }).then(response => {
        return response;
    });
}

export const authGET = (url: string) => {

}

export const nonAuthPOST = (url: string, params: any) => {
    return axiosClient({
        method: "POST",
        url: url,
        data: params,
    }).then(response => {
        return response;
    });
}

export const authPOST = (url: string, data: any) => {
    
}