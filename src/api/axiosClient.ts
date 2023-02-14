import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  data: (params: any) => JSON.stringify(params),
});

axiosClient.interceptors.response.use((response: any) => {
  if (response.status !== 200 && response.status !== 201) {
    return response.data;
  }
  return response;
});

export default axiosClient;
