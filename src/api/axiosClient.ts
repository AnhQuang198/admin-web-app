import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
  data: (params: any) => JSON.stringify(params),
});

axiosClient.interceptors.response.use((response: any) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
