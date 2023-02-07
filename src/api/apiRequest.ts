import { getAccessToken, getTokenType } from "../utils/Common";
import axiosClient from "./axiosClient";

const tokenType = getTokenType();
let accessToken = getAccessToken();

export const unAuthGET = (url: string) => {
    return axiosClient({
        method: "GET",
        url: url,
    });
}

export const authGET = (url: string) => {
    return axiosClient({
        method: "GET",
        url: url,
        headers: {
            tokenType : accessToken,
        }
    });
}

export const unAuthPOST = (url: string, params: object) => {
    return axiosClient({
        method: "POST",
        url: url,
        data: params,
    });
}

export const authPOST = (url: string, params: object) => {
    return axiosClient({
        method: "POST",
        url: url,
        headers: {
            tokenType : accessToken,
        },
        data: params,
    });
}