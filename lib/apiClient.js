import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
	const token = Cookies.get('access_token');
	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
});

// apiClient.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		console.log("apiClient error - ", error);
// 		// if (error?.response?.status === 401) {
// 		// window.location.href = "/auth/signup";
// 		// }
// 		return Promise.reject(error?.response?.data);
// 	},
// );

export default apiClient;