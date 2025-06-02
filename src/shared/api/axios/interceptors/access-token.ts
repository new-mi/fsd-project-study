import type { AxiosInstance } from "axios";

export const accessTokenInterceptor = (axiosClient: AxiosInstance) => {
	axiosClient.interceptors.request.use(
		(request) => {
			const token = localStorage.getItem("token");
			if (token) {
				request.headers.Authorization = `Bearer ${token}`;
			}
			return request;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
};
