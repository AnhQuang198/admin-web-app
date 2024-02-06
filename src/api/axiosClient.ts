import axios from "axios";
import Config from "../config";

const axiosClient = axios.create({
  baseURL: Config.apiUrl,
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
