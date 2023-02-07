import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  data: (params: any) => JSON.stringify(params),
});

axiosClient.interceptors.response.use((response: any) => {
  console.log("1111111 ", response);
  if (response.status !== 200) {
    return response.data;
  }
  return response;
});

export default axiosClient;
