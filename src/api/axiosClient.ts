import axios from 'axios';
import queryString from 'querystring';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
	headers: {
		'content-type': 'application/json',
	}
});

axiosClient.interceptors.response.use((response) => {
	if (response && response.data) {
		return response.data;
	}

	return response;
});

export default axiosClient;
